const fs = require('fs');
const path = require('path');

const PACKAGES_DIR = path.resolve(__dirname, '..', 'packages');
const NX_BASE_PROJECT_JSON = path.resolve(__dirname, 'nx-base', 'project.json');

const LEGACY_PACKAGES_WITHOUT_CONFIGURE_SECRET_SCANNING = ['vulnerabilities'];

function readProjectJson(pkgDir) {
  const file = path.join(PACKAGES_DIR, pkgDir, 'project.json');
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function standardPackageDirs() {
  return fs
    .readdirSync(PACKAGES_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => fs.existsSync(path.join(PACKAGES_DIR, name, 'project.json')))
    .filter((name) => readProjectJson(name).targets?.generate?.executor === '@redhat-cloud-services/build-utils:client-generator')
    .filter((name) => !LEGACY_PACKAGES_WITHOUT_CONFIGURE_SECRET_SCANNING.includes(name));
}

describe('generate target secret-scanning wiring', () => {
  describe.each(standardPackageDirs())('%s', (pkgDir) => {
    let projectJson;

    beforeAll(() => {
      projectJson = readProjectJson(pkgDir);
    });

    it('has a configure-secret-scanning target running the registration script for this directory', () => {
      const target = projectJson.targets['configure-secret-scanning'];
      expect(target).toBeDefined();
      expect(target.command).toBe(`node utils/add-secret-scanning-exclusion.js ${pkgDir}`);
    });

    it('lists configure-secret-scanning as a generate dependency', () => {
      expect(projectJson.targets.generate.dependsOn).toEqual(expect.arrayContaining(['configure-secret-scanning']));
    });
  });

  describe('legacy packages', () => {
    it.each(LEGACY_PACKAGES_WITHOUT_CONFIGURE_SECRET_SCANNING)('%s does not have configure-secret-scanning wired up', (pkgDir) => {
      const projectJson = readProjectJson(pkgDir);
      expect(projectJson.targets['configure-secret-scanning']).toBeUndefined();
      expect(projectJson.targets.generate.dependsOn ?? []).not.toEqual(expect.arrayContaining(['configure-secret-scanning']));
    });
  });

  describe('nx-base scaffold template', () => {
    let projectJson;

    beforeAll(() => {
      projectJson = JSON.parse(fs.readFileSync(NX_BASE_PROJECT_JSON, 'utf8'));
    });

    it('has a configure-secret-scanning target using the CLIENTNAME placeholder', () => {
      expect(projectJson.targets['configure-secret-scanning'].command).toBe('node utils/add-secret-scanning-exclusion.js CLIENTNAME');
    });

    it('lists configure-secret-scanning and clean-generate as generate dependencies', () => {
      expect(projectJson.targets.generate.dependsOn).toEqual(expect.arrayContaining(['clean-generate', 'configure-secret-scanning']));
    });

    it('has a clean-generate target and a src-based outputPath', () => {
      expect(projectJson.targets['clean-generate']).toBeDefined();
      expect(projectJson.targets.generate.options.outputPath).toBe('packages/CLIENTNAME/src');
    });
  });
});
