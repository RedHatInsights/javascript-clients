const fs = require('fs');
const os = require('os');
const path = require('path');
const { Worker } = require('worker_threads');

const {
  START_MARKER,
  END_MARKER,
  buildEntry,
  assertValidClientName,
  insertClientExclusion,
  insertMultipleClientExclusions,
  addClientExclusion,
  addClientExclusions,
  findStandardClientDirs,
  extractFilePathFromArgs,
  resolveClientsFromArgs,
  cleanStaleLock,
  isLockStale,
  reclaimStaleLock,
  acquireLock,
  releaseLock,
  withFileLock,
} = require('./add-secret-scanning-exclusion');

function backdateLock(lockPath, ageMs) {
  const past = (Date.now() - ageMs) / 1000;
  fs.utimesSync(lockPath, past, past);
}

function fixtureHeader() {
  return '# GitHub Secret Scanning Exclusions\n\npaths-ignore:\n  - "package-lock.json"\n\n  # Auto-generated clients\n';
}

function fixtureYaml(blockLines) {
  const content = blockLines.map((line) => `  ${line}`).join('\n');
  const legacy = '\n\n  # Legacy\n  - "packages/vulnerabilities/api.ts"\n';
  return `${fixtureHeader()}  ${START_MARKER}\n${content}\n  ${END_MARKER}${legacy}`;
}

function createTempFixture(blockLines = ['- "packages/compliance/src/**"']) {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'secret-scanning-'));
  const tmpFile = path.join(tmpDir, 'secret_scanning.yml');
  fs.writeFileSync(tmpFile, fixtureYaml(blockLines), 'utf8');
  return { tmpDir, tmpFile };
}

function runConcurrentClientRegistration(clientName, filePath) {
  return new Promise((resolve, reject) => {
    const scriptPath = path.resolve(__dirname, 'add-secret-scanning-exclusion');
    const workerScript = `
      const { addClientExclusion } = require(${JSON.stringify(scriptPath)});
      addClientExclusion(${JSON.stringify(clientName)}, ${JSON.stringify(filePath)});
    `;
    const worker = new Worker(workerScript, { eval: true });
    worker.on('exit', (code) => {
      code === 0 ? resolve() : reject(new Error(`Worker exited with code ${code}`));
    });
    worker.on('error', reject);
  });
}

function verifyClientsPresentInFile(filePath, clientNames) {
  const content = fs.readFileSync(filePath, 'utf8');
  for (const clientName of clientNames) {
    expect(content).toContain(`- "packages/${clientName}/src/**"`);
  }
}

function extractBlockOrder(yamlContent, names) {
  const blockStart = yamlContent.indexOf(START_MARKER);
  const blockEnd = yamlContent.indexOf(END_MARKER);
  const block = yamlContent.slice(blockStart, blockEnd);
  return names.map((name) => block.indexOf(`packages/${name}/src`));
}

function extractOutsideBlock(yamlContent) {
  const start = yamlContent.indexOf(START_MARKER);
  const end = yamlContent.indexOf(END_MARKER) + END_MARKER.length;
  return {
    before: yamlContent.slice(0, start),
    after: yamlContent.slice(end),
  };
}

describe('buildEntry', () => {
  it('formats a packages/<name>/src/** exclusion entry', () => {
    expect(buildEntry('my-client')).toBe('  - "packages/my-client/src/**"');
  });
});

describe('assertValidClientName', () => {
  it('accepts lowercase, numbers, and hyphens', () => {
    expect(() => assertValidClientName('host-inventory')).not.toThrow();
    expect(() => assertValidClientName('client2')).not.toThrow();
  });

  it.each([
    [undefined, 'undefined'],
    ['', 'empty string'],
    ['Host-Inventory', 'uppercase letters'],
    ['../../etc/passwd', 'path traversal'],
    ['my client', 'spaces'],
    ['my"client', 'quote characters'],
    ['-leading-hyphen', 'leading hyphen'],
  ])('rejects %s (%s)', (invalidName) => {
    expect(() => assertValidClientName(invalidName)).toThrow(/Invalid client name/);
  });
});

describe('insertClientExclusion', () => {
  it('inserts a new entry into the auto-managed block', () => {
    const original = fixtureYaml([
      '- "packages/compliance/src/**"',
      '- "packages/rbac/src/**"',
    ]);

    const updated = insertClientExclusion(original, 'new-service');

    expect(updated).toContain('- "packages/new-service/src/**"');
  });

  it('inserts entries alphabetically within the block', () => {
    const original = fixtureYaml([
      '- "packages/compliance/src/**"',
      '- "packages/rbac/src/**"',
    ]);
    const names = ['compliance', 'notifications', 'rbac'];

    const updated = insertClientExclusion(original, 'notifications');
    const order = extractBlockOrder(updated, names);

    expect(order).toEqual([...order].sort((a, b) => a - b));
  });

  it('is idempotent when the entry already exists', () => {
    const original = fixtureYaml([
      '- "packages/compliance/src/**"',
      '- "packages/rbac/src/**"',
    ]);

    const firstPass = insertClientExclusion(original, 'rbac');

    expect(firstPass).toBe(original);
  });

  it('does not duplicate an entry when called twice for a new client', () => {
    const original = fixtureYaml(['- "packages/compliance/src/**"']);

    const afterFirst = insertClientExclusion(original, 'scheduler');
    const afterSecond = insertClientExclusion(afterFirst, 'scheduler');

    const occurrences = (
      afterSecond.match(/packages\/scheduler\/src/g) || []
    ).length;

    expect(afterSecond).toBe(afterFirst);
    expect(occurrences).toBe(1);
  });

  it('leaves content outside the auto-managed block untouched', () => {
    const original = fixtureYaml(['- "packages/compliance/src/**"']);

    const updated = insertClientExclusion(original, 'scheduler');
    const origOutside = extractOutsideBlock(original);
    const updatedOutside = extractOutsideBlock(updated);

    expect(updatedOutside.before).toBe(origOutside.before);
    expect(updatedOutside.after).toBe(origOutside.after);
  });

  it('throws a descriptive error when markers are missing', () => {
    const originalWithoutMarkers = 'paths-ignore:\n  - "package-lock.json"\n';

    expect(() =>
      insertClientExclusion(originalWithoutMarkers, 'new-service')
    ).toThrow(/Could not find/);
  });

  it('throws for an invalid client name before touching content', () => {
    const original = fixtureYaml(['- "packages/compliance/src/**"']);

    expect(() => insertClientExclusion(original, 'Bad Name')).toThrow(
      /Invalid client name/
    );
  });
});

describe('insertMultipleClientExclusions', () => {
  it('inserts multiple clients in alphabetical order in one call', () => {
    const original = fixtureYaml(['- "packages/compliance/src/**"']);
    const clients = ['zebra-service', 'alpha-service'];

    const updated = insertMultipleClientExclusions(original, clients);

    expect(updated).toContain('- "packages/alpha-service/src/**"');
    expect(updated).toContain('- "packages/zebra-service/src/**"');
    expect(updated.indexOf('alpha-service')).toBeLessThan(updated.indexOf('zebra-service'));
  });

  it('handles existing and new clients idempotently', () => {
    const original = fixtureYaml(['- "packages/compliance/src/**"']);
    const clients = ['compliance', 'notifications'];

    const updated = insertMultipleClientExclusions(original, clients);

    expect(updated).toContain('- "packages/notifications/src/**"');
    const occurrences = (updated.match(/packages\/compliance\/src/g) || []).length;
    expect(occurrences).toBe(1);
  });
});

describe('addClientExclusion (filesystem integration)', () => {
  let tmpDir;
  let tmpFile;

  beforeEach(() => {
    ({ tmpDir, tmpFile } = createTempFixture());
  });

  afterEach(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it('writes the updated file and reports a change', () => {
    const changed = addClientExclusion('new-service', tmpFile);

    expect(changed).toBe(true);

    const written = fs.readFileSync(tmpFile, 'utf8');
    expect(written).toContain('- "packages/new-service/src/**"');
  });

  it('does not rewrite the file when the entry already exists', () => {
    addClientExclusion('new-service', tmpFile);
    const afterFirstWrite = fs.readFileSync(tmpFile, 'utf8');
    const mtimeAfterFirstWrite = fs.statSync(tmpFile).mtimeMs;

    const changed = addClientExclusion('new-service', tmpFile);

    const afterSecondCall = fs.readFileSync(tmpFile, 'utf8');

    expect(changed).toBe(false);
    expect(afterSecondCall).toBe(afterFirstWrite);
    expect(fs.statSync(tmpFile).mtimeMs).toBe(mtimeAfterFirstWrite);
  });

  it('propagates validation errors without writing the file', () => {
    const before = fs.readFileSync(tmpFile, 'utf8');

    expect(() => addClientExclusion('Invalid Name', tmpFile)).toThrow(
      /Invalid client name/
    );

    expect(fs.readFileSync(tmpFile, 'utf8')).toBe(before);
  });
});

describe('addClientExclusions (batch registration)', () => {
  let tmpDir;
  let tmpFile;

  beforeEach(() => {
    ({ tmpDir, tmpFile } = createTempFixture());
  });

  afterEach(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it('adds multiple clients in a single pass', () => {
    const clients = ['client-one', 'client-two'];
    const changed = addClientExclusions(clients, tmpFile);

    expect(changed).toBe(true);
    verifyClientsPresentInFile(tmpFile, clients);
  });

  it('returns false when all requested clients are already present', () => {
    addClientExclusions(['client-one'], tmpFile);

    const secondCallResult = addClientExclusions(['client-one'], tmpFile);

    expect(secondCallResult).toBe(false);
  });
});

describe('file locking and synchronization', () => {
  let tmpDir;
  let tmpFile;

  beforeEach(() => {
    ({ tmpDir, tmpFile } = createTempFixture());
  });

  afterEach(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it('cleans up stale locks whose owner pid is no longer alive', () => {
    const lockPath = `${tmpFile}.lock`;
    fs.writeFileSync(lockPath, 'stale-pid');
    backdateLock(lockPath, 25000);

    cleanStaleLock(lockPath, 15000);

    expect(fs.existsSync(lockPath)).toBe(false);
  });

  it('throws timeout error when lock remains held beyond timeout', () => {
    const lockPath = `${tmpFile}.lock`;
    fs.writeFileSync(lockPath, String(process.pid));

    expect(() => acquireLock(lockPath, 100, 20)).toThrow(/Timeout waiting for lock/);

    releaseLock(lockPath);
  });

  it('does not reclaim an old lock whose owner pid is still alive', () => {
    const lockPath = `${tmpFile}.lock`;
    fs.writeFileSync(lockPath, String(process.pid));
    backdateLock(lockPath, 25000);

    expect(isLockStale(lockPath, 15000)).toBe(false);
    expect(() => acquireLock(lockPath, 100, 20)).toThrow(/Timeout waiting for lock/);
    expect(fs.existsSync(lockPath)).toBe(true);

    releaseLock(lockPath);
  });

  it('lets only one of two concurrent reclaimers win over the same stale lock', () => {
    const lockPath = `${tmpFile}.lock`;
    fs.writeFileSync(lockPath, '999999'); // pid unlikely to be alive
    backdateLock(lockPath, 25000);

    reclaimStaleLock(lockPath);
    expect(() => reclaimStaleLock(lockPath)).not.toThrow();

    const staleArtifacts = fs
      .readdirSync(tmpDir)
      .filter((name) => name.includes('.lock.reclaim.'));
    expect(staleArtifacts).toEqual([]);
  });

  it('handles concurrent registrations without losing entries', async () => {
    const clients = ['concurrent-a', 'concurrent-b', 'concurrent-c', 'concurrent-d'];

    await Promise.all(
      clients.map((client) => runConcurrentClientRegistration(client, tmpFile))
    );

    verifyClientsPresentInFile(tmpFile, clients);
  });
});

describe('CLI argument resolution', () => {
  it('extracts custom file path when --file is provided', () => {
    const args = ['my-client', '--file', '/custom/path/secret_scanning.yml'];
    const resolvedPath = extractFilePathFromArgs(args);
    expect(resolvedPath).toBe(path.resolve('/custom/path/secret_scanning.yml'));
  });

  it('filters out flags and flag values from client name list', () => {
    const args = ['client-a', '--file', '/custom/path', 'client-b'];
    const packagesDir = path.resolve(__dirname, '..', 'packages');
    const clients = resolveClientsFromArgs(args, packagesDir);
    expect(clients).toEqual(['client-a', 'client-b']);
  });

  it('resolves standard client dirs when --all is specified', () => {
    const packagesDir = path.resolve(__dirname, '..', 'packages');
    const clients = resolveClientsFromArgs(['--all'], packagesDir);
    expect(clients).toContain('rbac');
    expect(clients).toContain('compliance');
    expect(clients).not.toContain('vulnerabilities');
  });
});

describe('against the real .github/secret_scanning.yml', () => {
  let realContent;

  beforeAll(() => {
    const realPath = path.resolve(__dirname, '..', '.github', 'secret_scanning.yml');
    realContent = fs.readFileSync(realPath, 'utf8');
  });

  it('contains the auto-managed exclusion markers', () => {
    expect(realContent).toContain(START_MARKER);
    expect(realContent).toContain(END_MARKER);
  });

  it('does not exclude docs/** to preserve handwritten guide scanning', () => {
    expect(realContent).not.toMatch(/^\s*-\s*["']docs\/\*\*["']/m);
  });

  it('excludes root package-lock.json without redundant wildcard', () => {
    expect(realContent).toMatch(/^\s*-\s*["']package-lock\.json["']/m);
    expect(realContent).not.toMatch(/^\s*-\s*["']\*\*\/package-lock\.json["']/m);
  });

  it('excludes generated typedoc documentation under packages', () => {
    expect(realContent).toMatch(/^\s*-\s*["']packages\/\*\*\/doc\/\*\*["']/m);
  });

  it('adding an already-scaffolded client is a no-op', () => {
    const updated = insertClientExclusion(realContent, 'rbac');
    expect(updated).toBe(realContent);
  });
});
