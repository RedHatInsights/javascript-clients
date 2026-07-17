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
const AREA_SCOPES = ['deps', 'ci', 'readme', 'docs'];

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [0],
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
          const isVersioningType = ['feat', 'fix'].includes(type);

          if (!isBreaking && !isVersioningType) {
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
            return [true];
          }

          const projectSet = new Set(validProjects);
          const scopes = scope.split(',');

          for (const s of scopes) {
            if (AREA_SCOPES.includes(s)) continue;
            if (!projectSet.has(s)) {
              const commitType = isBreaking
                ? 'breaking (!)/feat/fix'
                : 'feat/fix';
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
