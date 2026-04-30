# Contributing

## Prerequisites

- Node.js (version specified in `.nvmrc`)
- npm 7.0+
- Java (version specified in `.java-version`) + Maven (for the custom OpenAPI generator)
- Git

## Setup

```bash
git clone https://github.com/RedHatInsights/javascript-clients.git
cd javascript-clients

# Verify Node version matches .nvmrc
cat .nvmrc
node --version

# Switch to correct Node version (or install if missing)
nvm use           # If version installed
# OR
nvm install       # If version not installed (installs + switches)

npm install       # Install npm deps + build Maven generator
```

### Switching Node Versions

If you need to switch Node versions after initial setup:

```bash
# Clean all caches and node_modules
rm -r .nx node_modules packages/*/node_modules

# Switch to .nvmrc version
nvm use

# Reinstall dependencies
npm install
```

## Development Workflow

### Adding a New Client

1. Run `npm run create-client` and enter the service name
2. Add OpenAPI spec URLs to `packages/<service>/project.json` under `generate.options.specs`
3. Run `npm run generate` to create TypeScript source
4. Run `npm run build` to create distributable output
5. Add integration tests in `packages/<service>/tests/integration/`

### Modifying Generated Output

Generated client code in `packages/<client>/src/` is overwritten on every generation. To change output:

- **Mustache templates**: `src/main/resources/typescript-axios-webpack-module-federation/`
- **Post-process script**: `postProcess.sh`
- **Generator source**: `src/main/java/.../TypescriptAxiosWebpackModuleFederationGenerator.java`

After changes, rebuild the generator: `npm run build:generator`

### Modifying Shared Runtime

The `packages/shared/` package is used by all clients at runtime. Changes here affect every consumer. Test thoroughly before merging.

### Modifying Build Executors

The `packages/build-utils/` package contains custom Nx executors. Run executor unit tests after changes:

```bash
npx nx test @redhat-cloud-services/build-utils
```

## Commit Conventions

This repo uses [Conventional Commits](https://www.conventionalcommits.org/). Commitlint enforces the format via a Husky `commit-msg` hook.

```
type(scope): description

# Examples:
feat(rbac): add v2 endpoint support
fix(build-utils): handle missing spec file gracefully
chore(deps): update axios to 1.13.5
docs(readme): add troubleshooting section
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`, `build`, `revert`

**Scope**: Package name (e.g., `rbac`, `build-utils`, `shared`) or area (`deps`, `ci`, `readme`).

## Testing

```bash
npm test                 # All unit tests (also runs on pre-commit)
npm run test:unit        # Unit tests only
npm run test:integration # Integration tests with Prism mock servers
```

See [docs/testing-guidelines.md](docs/testing-guidelines.md) for details on test patterns and conventions.

## Pull Requests

- PRs trigger CI: lint, unit tests, integration tests, and build (affected packages only)
- Ensure `npm run lint` passes before pushing
- Include integration tests for new client packages or endpoint changes
- PR descriptions should reference the Jira ticket if applicable

## Release Process

Releases are automated via Nx Release on the `main` branch. Each package is independently versioned based on conventional commit history. Do not manually bump versions.

### Critical Configuration: `useCommitScope`

**Do not change `"useCommitScope": true` in `nx.json` (line 73).**

This setting controls how breaking changes affect version bumps:

- **`true` (current)**: Breaking changes only bump packages named in commit scope
  - Example: `feat(rbac)!: breaking change` → rbac gets major bump, other packages get patch for dependency update
  - Prevents cascading major bumps across unrelated packages

- **`false` (dangerous)**: Breaking changes bump ALL packages with modified files to major
  - Causes `preserveMatchingDependencyRanges` failures when shared package jumps major but clients still depend on `^2.x`
  - Results in failed releases

Since `packages/shared/` is a dependency of all 15 client packages, setting `useCommitScope: false` would cause any breaking change touching shared files to trigger major bumps across the entire monorepo.
