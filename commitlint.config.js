const { execSync } = require('child_process');

function getNxProjects() {
  try {
    const output = execSync('npx nx show projects --json', {
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe'],
    });
    return JSON.parse(output);
  } catch {
    console.warn(
      'commitlint: Could not load Nx projects — scope validation skipped.'
    );
    return null;
  }
}

const validProjects = getNxProjects();

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [0],
    'body-max-length': [0],
    'body-max-line-length': [0],
    'header-max-length': [2, 'always', 256],
    'scope-full-name-for-versioning': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'scope-full-name-for-versioning': (parsed) => {
          if (!validProjects) {
            return [true];
          }

          const { type, header, notes } = parsed;

          // Detect breaking change: header `!:` marker OR BREAKING CHANGE footer
          const isBreaking =
            !!(header && header.includes('!:')) ||
            !!(notes && notes.some((n) => n.title === 'BREAKING CHANGE'));
          const requiresFullScope = type === 'feat' || isBreaking;

          if (!requiresFullScope) {
            return [true];
          }

          // Use parsed scope if available, otherwise extract from raw header
          // (fallback handles parsers that don't support the ! marker)
          let scope = parsed.scope;
          if (!scope && header) {
            const match = header.match(/^\w+\(([^)]+)\)/);
            if (match) {
              scope = match[1];
            }
          }

          if (!scope) {
            const commitType = isBreaking ? 'breaking (!)/feat' : 'feat';
            return [
              false,
              `Scope required for ${commitType} commits.\n` +
                `Use: ${type}(@redhat-cloud-services/rbac-client): ...`
            ];
          }

          const projectSet = new Set(validProjects);
          const scopes = scope.split(',');

          for (const s of scopes) {
            if (!projectSet.has(s)) {
              const commitType = isBreaking ? 'breaking (!)/feat' : 'feat';
              const hint = s.startsWith('@redhat-cloud-services/')
                ? `Project "${s}" not found. Run: npx nx show projects`
                : `Use full project name like: ${type}(@redhat-cloud-services/rbac-client)${isBreaking ? '!' : ''}: ...`;
              return [
                false,
                `Scope "${s}" must be a full Nx project name for ${commitType} commits.\n${hint}`,
              ];
            }
          }

          return [true];
        },
      },
    },
  ],
};
