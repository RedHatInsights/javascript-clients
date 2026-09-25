const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PACKAGES_DIR = path.join(ROOT, 'packages');
const SECRET_SCANNING_FILE = path.join(ROOT, '.github', 'secret_scanning.yml');
const GENERATOR = '@redhat-cloud-services/build-utils:client-generator';
const HANDWRITTEN_PACKAGES = {
  'build-utils': '@redhat-cloud-services/build-utils',
  shared: '@redhat-cloud-services/javascript-clients-shared',
};
const LEGACY_CLIENT = 'vulnerabilities';
const REGISTRATION_TARGET = 'configure-secret-scanning';
const LITERAL_PATH = '[a-zA-Z0-9_./*-]+';
const IGNORE_ENTRY = new RegExp(`^ {2}- (?:"(${LITERAL_PATH})"|'(${LITERAL_PATH})'|(${LITERAL_PATH}))\\s*$`);

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function isClientPackage(dirName, manifest) {
  if (manifest.name === `@redhat-cloud-services/${dirName}-client`) return true;
  if (HANDWRITTEN_PACKAGES[dirName] === manifest.name) return false;
  throw new Error(`Unexpected package manifest for packages/${dirName}: ${manifest.name}`);
}

function clientPackageDirs(packagesDir = PACKAGES_DIR) {
  return fs.readdirSync(packagesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((dir) => isClientPackage(dir, readJson(path.join(packagesDir, dir, 'package.json'))))
    .sort();
}

function parseIgnoreEntry(line) {
  const match = line.match(IGNORE_ENTRY);
  if (!match) throw new Error(`Unsupported paths-ignore entry: ${line}`);
  return match[1] || match[2] || match[3];
}

function parseIgnoreLines(lines) {
  const entries = [];
  for (const line of lines) {
    if (/^\S/.test(line)) {
      if (/^[a-zA-Z][\w-]*:/.test(line)) break;
      throw new Error(`Unexpected paths-ignore content: ${line}`);
    }
    if (!line.trim() || /^\s*#/.test(line)) continue;
    entries.push(parseIgnoreEntry(line));
  }
  return entries;
}

function parseIgnorePaths(yaml) {
  const lines = yaml.split(/\r?\n/);
  const keys = lines.map((line, index) => /^paths-ignore\s*:/.test(line) ? index : -1)
    .filter((index) => index !== -1);
  if (keys.length !== 1 || lines[keys[0]] !== 'paths-ignore:') {
    throw new Error('Expected exactly one paths-ignore: list');
  }
  return parseIgnoreLines(lines.slice(keys[0] + 1));
}

function validateNoRegistration(project, dirName) {
  const hasTarget = Object.hasOwn(project.targets ?? {}, REGISTRATION_TARGET);
  const isDependency = project.targets?.generate?.dependsOn?.includes(REGISTRATION_TARGET);
  if (hasTarget || isDependency) {
    throw new Error(`packages/${dirName} still runs ${REGISTRATION_TARGET}`);
  }
}

function validateStandardProject(project, dirName) {
  const generate = project.targets?.generate;
  if (generate?.executor !== GENERATOR) {
    throw new Error(`packages/${dirName}: expected client-generator executor`);
  }
  if (generate?.options?.outputPath !== `packages/${dirName}/src`) {
    throw new Error(`packages/${dirName}: expected generated output in src/`);
  }
  if (!generate?.dependsOn?.includes('clean-generate') || !project.targets['clean-generate']) {
    throw new Error(`packages/${dirName}: expected clean-generate dependency`);
  }
  validateNoRegistration(project, dirName);
}

function validateSafePaths(paths) {
  const forbidden = ['docs/**', 'packages/*', 'packages/**',
    'packages/*/src/**', 'packages/**/src/**', 'packages/*/**'];
  for (const entry of paths) {
    const handwritten = /^packages\/(?:shared|build-utils)(?:\/|$)/.test(entry);
    if (handwritten || forbidden.includes(entry)) {
      throw new Error(`Unsafe paths-ignore exclusion: ${entry}`);
    }
  }
}

function validateClientPaths(paths, clientNames) {
  const allowed = new Set(clientNames.map((name) => `packages/${name}/src/**`));
  for (const entry of paths) {
    if (!/^packages\/[^/]+\/src\/\*\*$/.test(entry)) continue;
    if (!allowed.has(entry)) throw new Error(`Unexpected client exclusion: ${entry}`);
  }
}

function validateClientExclusion(paths, dirName) {
  const expected = `packages/${dirName}/src/**`;
  const count = paths.filter((entry) => entry === expected).length;
  if (count !== 1) {
    throw new Error(`Expected exactly one paths-ignore entry for ${expected}; found ${count}`);
  }
}

const clientDirs = clientPackageDirs();
const standardClientDirs = clientDirs.filter((dir) => dir !== LEGACY_CLIENT);

describe('read-only secret-scanning coverage', () => {
  let paths;

  beforeAll(() => {
    paths = parseIgnorePaths(fs.readFileSync(SECRET_SCANNING_FILE, 'utf8'));
  });

  it('discovers standard clients independently of their generate executor', () => {
    expect(standardClientDirs.length).toBeGreaterThan(0);
    expect(clientDirs).toContain(LEGACY_CLIENT);
    expect(clientDirs).not.toContain('shared');
    expect(clientDirs).not.toContain('build-utils');
  });

  it.each(standardClientDirs)('covers packages/%s/src/** without generation-time writes', (dir) => {
    validateStandardProject(readJson(path.join(PACKAGES_DIR, dir, 'project.json')), dir);
    validateClientExclusion(paths, dir);
  });

  it('retains the legacy client separately from the standard client policy', () => {
    const legacyProject = readJson(path.join(PACKAGES_DIR, LEGACY_CLIENT, 'project.json'));
    validateNoRegistration(legacyProject, LEGACY_CLIENT);
    expect(legacyProject.targets.generate.dependsOn).toContain('preGenerate');
    validateClientExclusion(paths, LEGACY_CLIENT);
  });

  it('keeps handwritten code and docs scanned while ignoring generated docs', () => {
    validateSafePaths(paths);
    validateClientPaths(paths, clientDirs);
    expect(paths).toContain('packages/**/doc/**');
    expect(paths).toContain('package-lock.json');
    expect(paths).not.toContain('**/package-lock.json');
  });

  it('scaffolds clients with src output and no registration target', () => {
    const template = readJson(path.join(__dirname, 'nx-base', 'project.json'));
    validateStandardProject(template, 'CLIENTNAME');
  });
});

describe('policy check edge cases', () => {
  it('recognizes only active literal paths-ignore entries in three quote styles', () => {
    const yaml = 'paths-ignore:\n  # - "packages/old/src/**"\n  - "packages/a/src/**"\n  - \'packages/b/src/**\'\n  - packages/c/src/**\n';
    expect(parseIgnorePaths(yaml)).toEqual([
      'packages/a/src/**', 'packages/b/src/**', 'packages/c/src/**',
    ]);
  });

  it.each(['', 'paths-ignore: []\n', 'paths-ignore:\npaths-ignore:\n'])('rejects missing or ambiguous paths-ignore lists', (yaml) => {
    expect(() => parseIgnorePaths(yaml)).toThrow(/exactly one paths-ignore/);
  });

  it('fails closed on unsupported entries rather than silently dropping them', () => {
    expect(() => parseIgnorePaths('paths-ignore:\n  - &anchor packages/a/src/**'))
      .toThrow(/Unsupported paths-ignore entry/);
  });

  it('reports the exact missing or duplicated exclusion', () => {
    const expected = 'packages/new-client/src/**';
    expect(() => validateClientExclusion([], 'new-client')).toThrow(expected);
    expect(() => validateClientExclusion([expected, expected], 'new-client'))
      .toThrow(/found 2/);
  });

  it('does not mistake a commented-out client entry for an exclusion', () => {
    const paths = parseIgnorePaths('paths-ignore:\n  # - packages/new-client/src/**\n');
    expect(() => validateClientExclusion(paths, 'new-client')).toThrow(/found 0/);
  });

  it.each(['- docs/**', '- packages/*/src/**', '- packages/**/src/**'])('rejects an unsafe unquoted exclusion: %s', (line) => {
    const paths = parseIgnorePaths(`paths-ignore:\n  ${line}\n`);
    expect(() => validateSafePaths(paths)).toThrow(/Unsafe paths-ignore/);
  });

  it('selects a client by its manifest even when its executor has changed', () => {
    expect(isClientPackage('new-client', { name: '@redhat-cloud-services/new-client-client' })).toBe(true);
    expect(() => validateStandardProject({ targets: { generate: { executor: 'other' } } }, 'new-client'))
      .toThrow(/packages\/new-client: expected client-generator/);
  });

  it('fails on unexpected package manifests instead of skipping them', () => {
    expect(() => isClientPackage('new-client', { name: '@other/new-client' }))
      .toThrow(/Unexpected package manifest/);
  });

  it('rejects a registration target even without a generate dependency', () => {
    const project = { targets: { [REGISTRATION_TARGET]: {}, generate: {} } };
    expect(() => validateNoRegistration(project, 'new-client'))
      .toThrow(/still runs configure-secret-scanning/);
  });

  it('rejects handwritten or unrecognized client source exclusions', () => {
    expect(() => validateSafePaths(['packages/shared/src/**']))
      .toThrow(/Unsafe paths-ignore/);
    expect(() => validateClientPaths(['packages/unknown/src/**'], ['rbac']))
      .toThrow(/Unexpected client exclusion/);
  });
});
