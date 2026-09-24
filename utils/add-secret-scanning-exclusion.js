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
 * This runs automatically as the `configure-secret-scanning` target that
 * every standard client's `generate` target depends on (see
 * packages/<name>/project.json), so it fires on every `nx run <pkg>:generate`
 * / `npm run generate`, regardless of how the package was created. It can
 * also be run manually:
 *
 *   node utils/add-secret-scanning-exclusion.js my-new-client
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

/**
 * Validate a client/package directory name.
 * Mirrors npm package name safety constraints closely enough to prevent
 * path traversal or YAML-breaking characters from being written to the file.
 */
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

/**
 * Pure string transform: given the full text of secret_scanning.yml and a
 * client name, returns the updated file text with the new exclusion entry
 * inserted (alphabetically) into the auto-managed block.
 *
 * Idempotent: if the entry already exists, the input is returned unchanged.
 */
function insertClientExclusion(yamlContent, clientName) {
  assertValidClientName(clientName);

  const startIdx = yamlContent.indexOf(START_MARKER);
  const endIdx = yamlContent.indexOf(END_MARKER);

  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    throw new Error(
      `Could not find "${START_MARKER}" / "${END_MARKER}" markers in ` +
        'secret_scanning.yml. The file structure may have changed - update ' +
        'this script (or restore the markers) before scaffolding new clients.'
    );
  }

  const before = yamlContent.slice(0, startIdx + START_MARKER.length);
  const block = yamlContent.slice(startIdx + START_MARKER.length, endIdx);
  const after = yamlContent.slice(endIdx);

  const entry = buildEntry(clientName);

  const existingEntries = block
    .split('\n')
    .map((line) => line.trimEnd())
    .filter((line) => line.trim().startsWith('- "packages/'));

  if (existingEntries.includes(entry)) {
    return yamlContent;
  }

  const sortedEntries = [...existingEntries, entry].sort((a, b) =>
    a.localeCompare(b)
  );

  const newBlock = `\n${sortedEntries.join('\n')}\n`;

  return `${before}${newBlock}${after}`;
}

/**
 * Reads, updates, and writes secret_scanning.yml on disk.
 * Returns true if the file changed, false if the entry already existed.
 */
function addClientExclusion(
  clientName,
  filePath = DEFAULT_SECRET_SCANNING_PATH
) {
  const original = fs.readFileSync(filePath, 'utf8');
  const updated = insertClientExclusion(original, clientName);

  if (updated === original) {
    return false;
  }

  fs.writeFileSync(filePath, updated, 'utf8');
  return true;
}

module.exports = {
  START_MARKER,
  END_MARKER,
  buildEntry,
  assertValidClientName,
  insertClientExclusion,
  addClientExclusion,
  DEFAULT_SECRET_SCANNING_PATH,
};

if (require.main === module) {
  const clientName = process.argv[2];

  if (!clientName) {
    console.error('Usage: node add-secret-scanning-exclusion.js <client-name>');
    process.exit(1);
  }

  try {
    const changed = addClientExclusion(clientName);
    if (changed) {
      console.log(
        `Added "packages/${clientName}/src/**" to .github/secret_scanning.yml`
      );
    } else {
      console.log(
        `"packages/${clientName}/src/**" already present in ` +
          '.github/secret_scanning.yml - no changes made.'
      );
    }
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
