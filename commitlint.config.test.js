const { default: lint } = require('@commitlint/lint');
const config = require('./commitlint.config');

// Use the conventional-commits parser opts that support the ! breaking marker.
// In production, commitlint loads these from @commitlint/config-conventional.
const parserOpts = {
  headerPattern: /^(\w*)(?:\((.*)\))?!?: (.*)$/,
  headerCorrespondence: ['type', 'scope', 'subject'],
};

const lintMessage = (message) =>
  lint(message, config.rules, { plugins: config.plugins, parserOpts });

describe('commitlint scope-full-name-for-versioning', () => {
  describe('valid commits', () => {
    it('feat with full project name', async () => {
      const result = await lintMessage(
        'feat(@redhat-cloud-services/rbac-client): add endpoint'
      );
      expect(result.valid).toBe(true);
    });

    it('fix with full project name', async () => {
      const result = await lintMessage(
        'fix(@redhat-cloud-services/scheduler-client): handle error'
      );
      expect(result.valid).toBe(true);
    });

    it('breaking with full project name (! marker)', async () => {
      const result = await lintMessage(
        'feat(@redhat-cloud-services/rbac-client)!: remove v1'
      );
      expect(result.valid).toBe(true);
    });

    it('breaking with full project name (BREAKING CHANGE footer)', async () => {
      const result = await lintMessage(
        'feat(@redhat-cloud-services/rbac-client): remove v1\n\nBREAKING CHANGE: removes v1 API'
      );
      expect(result.valid).toBe(true);
    });

    it('multiple scopes comma-separated', async () => {
      const result = await lintMessage(
        'feat(@redhat-cloud-services/rbac-client,@redhat-cloud-services/scheduler-client): shared change'
      );
      expect(result.valid).toBe(true);
    });

    it('chore with short scope (no version impact)', async () => {
      const result = await lintMessage('chore(rbac): update docs');
      expect(result.valid).toBe(true);
    });

    it('docs with short scope (no version impact)', async () => {
      const result = await lintMessage('docs(readme): add examples');
      expect(result.valid).toBe(true);
    });

    it('chore with area scope (deps)', async () => {
      const result = await lintMessage('chore(deps): add new dep');
      expect(result.valid).toBe(true);
    });

    it('chore with area scope (ci)', async () => {
      const result = await lintMessage('chore(ci): update workflow');
      expect(result.valid).toBe(true);
    });

    it('breaking with BREAKING CHANGE footer (BREAKING CHANGE footer)', async () => {
      const result = await lintMessage(
        'feat(@redhat-cloud-services/rbac-client): remove v1\n\nBREAKING CHANGE: removes v1 API'
      );
      expect(result.valid).toBe(true);
    });

    it('chore with no scope', async () => {
      const result = await lintMessage('chore: maintenance');
      expect(result.valid).toBe(true);
    });

    it('build-utils project name (non-client package)', async () => {
      const result = await lintMessage(
        'feat(@redhat-cloud-services/build-utils): add executor'
      );
      expect(result.valid).toBe(true);
    });

    it('shared project name', async () => {
      const result = await lintMessage(
        'fix(@redhat-cloud-services/javascript-clients-shared): fix interceptor'
      );
      expect(result.valid).toBe(true);
    });
  });

  describe('invalid commits', () => {
    it('feat with short scope', async () => {
      const result = await lintMessage('feat(rbac): add endpoint');
      expect(result.valid).toBe(false);
      expect(result.errors[0].message).toContain(
        'must be a full Nx project name'
      );
      expect(result.errors[0].message).toContain('Use full project name like');
    });

    it('fix with short scope', async () => {
      const result = await lintMessage('fix(scheduler): handle error');
      expect(result.valid).toBe(false);
    });

    it('breaking chore with short scope (! marker)', async () => {
      const result = await lintMessage('chore(rbac)!: breaking change');
      expect(result.valid).toBe(false);
    });

    it('breaking chore with short scope (BREAKING CHANGE footer)', async () => {
      const result = await lintMessage(
        'chore(rbac): breaking change\n\nBREAKING CHANGE: removes old API'
      );
      expect(result.valid).toBe(false);
    });

    it('breaking type! with short scope', async () => {
      const result = await lintMessage('fix(rbac)!: breaking fix');
      expect(result.valid).toBe(false);
    });

    it('comma-separated with one invalid scope', async () => {
      const result = await lintMessage(
        'feat(@redhat-cloud-services/rbac-client,scheduler): mixed scopes'
      );
      expect(result.valid).toBe(false);
    });

    it('feat with invented project name', async () => {
      const result = await lintMessage(
        'feat(@redhat-cloud-services/nonexistent-client): add feature'
      );
      expect(result.valid).toBe(false);
      expect(result.errors[0].message).toContain('Project');
      expect(result.errors[0].message).toContain('not found');
    });

    it('feat with no scope', async () => {
      const result = await lintMessage('feat: global change');
      expect(result.valid).toBe(false);
      expect(result.errors[0].message).toContain('Scope required');
    });

    it('fix with no scope', async () => {
      const result = await lintMessage('fix: global change');
      expect(result.valid).toBe(false);
      expect(result.errors[0].message).toContain('Scope required');
    });

    it('breaking with no scope', async () => {
      const result = await lintMessage('fix!: breaking fix');
      expect(result.valid).toBe(false);
      expect(result.errors[0].message).toContain('Scope required');
    });

    it('feat with area scope (deps)', async () => {
      const result = await lintMessage('feat(deps): add new dep');
      expect(result.valid).toBe(false);
      expect(result.errors[0].message).toContain(
        'must be a full Nx project name'
      );
    });

    it('feat with area scope (ci)', async () => {
      const result = await lintMessage('feat(ci): update workflow');
      expect(result.valid).toBe(false);
      expect(result.errors[0].message).toContain(
        'must be a full Nx project name'
      );
    });

    it('fix with area scope (docs)', async () => {
      const result = await lintMessage('fix(docs): update readme');
      expect(result.valid).toBe(false);
      expect(result.errors[0].message).toContain(
        'must be a full Nx project name'
      );
    });
  });
});
