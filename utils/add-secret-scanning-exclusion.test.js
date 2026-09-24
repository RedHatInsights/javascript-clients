const fs = require('fs');
const os = require('os');
const path = require('path');

const {
  START_MARKER,
  END_MARKER,
  buildEntry,
  assertValidClientName,
  insertClientExclusion,
  addClientExclusion,
} = require('./add-secret-scanning-exclusion');

function fixtureYaml(blockLines) {
  return [
    '# GitHub Secret Scanning Exclusions',
    '',
    'paths-ignore:',
    '  - "package-lock.json"',
    '',
    '  # Auto-generated clients',
    `  ${START_MARKER}`,
    ...blockLines.map((line) => `  ${line}`),
    `  ${END_MARKER}`,
    '',
    '  # Legacy / special-cased exclusions',
    '  - "packages/vulnerabilities/api.ts"',
    '',
  ].join('\n');
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

    const updated = insertClientExclusion(original, 'notifications');

    const blockStart = updated.indexOf(START_MARKER);
    const blockEnd = updated.indexOf(END_MARKER);
    const block = updated.slice(blockStart, blockEnd);

    const order = ['compliance', 'notifications', 'rbac'].map(
      (name) => block.indexOf(`packages/${name}/src`)
    );

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

    const originalBefore = original.slice(0, original.indexOf(START_MARKER));
    const originalAfter = original.slice(
      original.indexOf(END_MARKER) + END_MARKER.length
    );
    const updatedBefore = updated.slice(0, updated.indexOf(START_MARKER));
    const updatedAfter = updated.slice(
      updated.indexOf(END_MARKER) + END_MARKER.length
    );

    expect(updatedBefore).toBe(originalBefore);
    expect(updatedAfter).toBe(originalAfter);
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

describe('addClientExclusion (filesystem integration)', () => {
  let tmpDir;
  let tmpFile;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'secret-scanning-'));
    tmpFile = path.join(tmpDir, 'secret_scanning.yml');
    fs.writeFileSync(
      tmpFile,
      fixtureYaml(['- "packages/compliance/src/**"']),
      'utf8'
    );
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

describe('against the real .github/secret_scanning.yml', () => {
  it('contains the markers this script depends on', () => {
    const realPath = path.resolve(__dirname, '..', '.github', 'secret_scanning.yml');
    const content = fs.readFileSync(realPath, 'utf8');

    expect(content).toContain(START_MARKER);
    expect(content).toContain(END_MARKER);
  });

  it('adding an already-scaffolded client is a no-op', () => {
    const realPath = path.resolve(__dirname, '..', '.github', 'secret_scanning.yml');
    const content = fs.readFileSync(realPath, 'utf8');

    // "rbac" is one of the packages already scaffolded in this repo.
    const updated = insertClientExclusion(content, 'rbac');

    expect(updated).toBe(content);
  });
});
