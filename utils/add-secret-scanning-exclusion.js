#!/usr/bin/env node
/**
 * add-secret-scanning-exclusion.js
 *
 * Appends a `packages/<name>/src/**` entry to the auto-managed block in
 * `.github/secret_scanning.yml` so that generated clients are excluded from
 * GitHub secret scanning, just like every other generated client.
 *
 * Why this exists: generated client code is never hand-written and floods
 * PR secret scans with false positives / wasted scan time. Excluding it by
 * default (and requiring an explicit action to include a package) means the
 * failure mode of "forgot to update the exclusion list" is safe: a missed
 * package just gets scanned, it never silently loses its secret scanning
 * coverage.
 *
 * Concurrency safety: registrations are coordinated using an exclusive
 * file lock and atomic rename writes. If multiple clients trigger registration
 * in parallel (e.g. `npm run generate`), each registration safely waits for
 * the lock and reads the latest file state, preventing lost updates.
 *
 * This runs automatically as the `configure-secret-scanning` target that
 * every standard client's `generate` target depends on (see
 * packages/<name>/project.json), so it fires on every `nx run <pkg>:generate`
 * / `npm run generate`, regardless of how the package was created. It can
 * also be run manually:
 *
 *   node utils/add-secret-scanning-exclusion.js my-new-client
 *   node utils/add-secret-scanning-exclusion.js client1 client2
 *   node utils/add-secret-scanning-exclusion.js --all
 */

const fs = require('fs');
const path = require('path');

const START_MARKER = '# AUTO-GENERATED-CLIENT-EXCLUSIONS:START';
const END_MARKER = '# AUTO-GENERATED-CLIENT-EXCLUSIONS:END';

const DEFAULT_SECRET_SCANNING_PATH = path.resolve(
  __dirname,
  '..',
  '.github',
  'secret_scanning.yml'
);

const LOCK_TIMEOUT_MS = 10000;
const LOCK_RETRY_INTERVAL_MS = 50;
const STALE_LOCK_MAX_AGE_MS = 15000;

function assertValidClientName(clientName) {
  if (!clientName || !/^[a-z0-9][a-z0-9-]*$/.test(clientName)) {
    throw new Error(
      `Invalid client name: "${clientName}". Use lowercase letters, numbers, ` +
        'and hyphens only (e.g. "host-inventory").'
    );
  }
}

function buildEntry(clientName) {
  return `  - "packages/${clientName}/src/**"`;
}

function findMarkerIndices(yamlContent) {
  const startIdx = yamlContent.indexOf(START_MARKER);
  const endIdx = yamlContent.indexOf(END_MARKER);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    throw new Error(
      `Could not find "${START_MARKER}" / "${END_MARKER}" markers in ` +
        'secret_scanning.yml. The file structure may have changed - update ' +
        'this script (or restore the markers) before scaffolding new clients.'
    );
  }
  return { startIdx, endIdx };
}

function extractExistingEntries(block) {
  return block
    .split('\n')
    .map((line) => line.trimEnd())
    .filter((line) => line.trim().startsWith('- "packages/'));
}

function formatUpdatedBlock(entries) {
  const sortedEntries = [...entries].sort((a, b) => a.localeCompare(b));
  return `\n${sortedEntries.join('\n')}\n`;
}

function insertClientExclusion(yamlContent, clientName) {
  assertValidClientName(clientName);
  const { startIdx, endIdx } = findMarkerIndices(yamlContent);
  const before = yamlContent.slice(0, startIdx + START_MARKER.length);
  const block = yamlContent.slice(startIdx + START_MARKER.length, endIdx);
  const after = yamlContent.slice(endIdx);

  const entry = buildEntry(clientName);
  const existingEntries = extractExistingEntries(block);
  if (existingEntries.includes(entry)) {
    return yamlContent;
  }
  return `${before}${formatUpdatedBlock([...existingEntries, entry])}${after}`;
}

function insertMultipleClientExclusions(yamlContent, clientNames) {
  return clientNames.reduce(
    (content, clientName) => insertClientExclusion(content, clientName),
    yamlContent
  );
}

function sleepSync(delayMs) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, delayMs);
}

function cleanStaleLock(lockPath, maxAgeMs = STALE_LOCK_MAX_AGE_MS) {
  try {
    const stats = fs.statSync(lockPath);
    if (Date.now() - stats.mtimeMs > maxAgeMs) {
      fs.unlinkSync(lockPath);
    }
  } catch {
    // Lock file might have been removed concurrently
  }
}

function tryAcquireLockFile(lockPath) {
  try {
    const fd = fs.openSync(lockPath, 'wx');
    fs.writeSync(fd, String(process.pid));
    fs.closeSync(fd);
    return true;
  } catch (err) {
    if (err.code === 'EEXIST') return false;
    throw err;
  }
}

function handleLockContention(lockPath, deadline, retryIntervalMs) {
  if (Date.now() >= deadline) {
    throw new Error(`Timeout waiting for lock on ${lockPath}`);
  }
  cleanStaleLock(lockPath);
  sleepSync(retryIntervalMs);
}

function acquireLock(
  lockPath,
  timeoutMs = LOCK_TIMEOUT_MS,
  retryIntervalMs = LOCK_RETRY_INTERVAL_MS
) {
  const deadline = Date.now() + timeoutMs;
  while (!tryAcquireLockFile(lockPath)) {
    handleLockContention(lockPath, deadline, retryIntervalMs);
  }
}

function releaseLock(lockPath) {
  try {
    fs.unlinkSync(lockPath);
  } catch {
    // Lock file already cleaned up
  }
}

function withFileLock(filePath, action) {
  const lockPath = `${filePath}.lock`;
  acquireLock(lockPath);
  try {
    return action();
  } finally {
    releaseLock(lockPath);
  }
}

function writeFileSyncAtomic(filePath, content) {
  const tempPath = `${filePath}.tmp.${process.pid}.${Date.now()}`;
  fs.writeFileSync(tempPath, content, 'utf8');
  fs.renameSync(tempPath, filePath);
}

function applyExclusionsToFile(filePath, names) {
  const original = fs.readFileSync(filePath, 'utf8');
  const updated = insertMultipleClientExclusions(original, names);
  if (updated === original) return false;
  writeFileSyncAtomic(filePath, updated);
  return true;
}

function addClientExclusions(
  clientNames,
  filePath = DEFAULT_SECRET_SCANNING_PATH
) {
  const names = Array.isArray(clientNames) ? clientNames : [clientNames];
  names.forEach(assertValidClientName);
  return withFileLock(filePath, () => applyExclusionsToFile(filePath, names));
}

function addClientExclusion(
  clientName,
  filePath = DEFAULT_SECRET_SCANNING_PATH
) {
  return addClientExclusions([clientName], filePath);
}

function isStandardClientPackage(packagesDir, dirName) {
  const projectJsonPath = path.join(packagesDir, dirName, 'project.json');
  if (!fs.existsSync(projectJsonPath)) return false;
  try {
    const config = JSON.parse(fs.readFileSync(projectJsonPath, 'utf8'));
    const executor = config.targets?.generate?.executor;
    return (
      executor === '@redhat-cloud-services/build-utils:client-generator' &&
      dirName !== 'vulnerabilities'
    );
  } catch {
    return false;
  }
}

function findStandardClientDirs(packagesDir) {
  return fs
    .readdirSync(packagesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => isStandardClientPackage(packagesDir, name))
    .sort();
}

function extractFilePathFromArgs(args) {
  const fileIndex = args.indexOf('--file');
  if (fileIndex !== -1 && args[fileIndex + 1]) {
    return path.resolve(args[fileIndex + 1]);
  }
  return DEFAULT_SECRET_SCANNING_PATH;
}

function resolveClientsFromArgs(args, packagesDir) {
  if (args.includes('--all')) {
    return findStandardClientDirs(packagesDir);
  }
  return args.filter((arg, idx, arr) => {
    if (arg.startsWith('--')) return false;
    if (idx > 0 && arr[idx - 1] === '--file') return false;
    return true;
  });
}

function printCliResult(changed, clients) {
  const label =
    clients.length === 1
      ? `packages/${clients[0]}/src/**`
      : `${clients.length} client(s)`;
  if (changed) {
    console.log(`Added "${label}" to .github/secret_scanning.yml`);
  } else {
    console.log(
      `"${label}" already present in .github/secret_scanning.yml - no changes made.`
    );
  }
}

function executeCli(targetClients, targetFile = DEFAULT_SECRET_SCANNING_PATH) {
  try {
    const changed = addClientExclusions(targetClients, targetFile);
    printCliResult(changed, targetClients);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

function runCli() {
  const rootPackagesDir = path.resolve(__dirname, '..', 'packages');
  const targetClients = resolveClientsFromArgs(
    process.argv.slice(2),
    rootPackagesDir
  );
  if (targetClients.length === 0) {
    console.error(
      'Usage: node add-secret-scanning-exclusion.js <client-name...> [--file <path>] | --all'
    );
    process.exit(1);
  }
  const targetFile = extractFilePathFromArgs(process.argv.slice(2));
  executeCli(targetClients, targetFile);
}

module.exports = {
  START_MARKER,
  END_MARKER,
  DEFAULT_SECRET_SCANNING_PATH,
  LOCK_TIMEOUT_MS,
  STALE_LOCK_MAX_AGE_MS,
  buildEntry,
  assertValidClientName,
  findMarkerIndices,
  extractExistingEntries,
  formatUpdatedBlock,
  insertClientExclusion,
  insertMultipleClientExclusions,
  addClientExclusion,
  addClientExclusions,
  findStandardClientDirs,
  isStandardClientPackage,
  extractFilePathFromArgs,
  resolveClientsFromArgs,
  sleepSync,
  cleanStaleLock,
  acquireLock,
  releaseLock,
  withFileLock,
  writeFileSyncAtomic,
};

if (require.main === module) {
  runCli();
}
