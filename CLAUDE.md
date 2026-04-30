@AGENTS.md

## Session Startup Checklist

**Always check Node version matches `.nvmrc` at session start:**

```bash
cat .nvmrc
node --version
```

If mismatch:
```bash
nvm use           # Switch to .nvmrc version (or nvm install if not installed)
```

If Node version changed, clean reinstall:
```bash
rm -r .nx node_modules packages/*/node_modules
nvm use
npm install
```

## Build & Test Commands

```bash
npm install              # Install deps + build Maven generator JAR
npm run generate         # Generate all clients from OpenAPI specs
npm run build            # Build all packages (Nx, dual CJS/ESM)
npm run build:no-cache   # Force rebuild without Nx cache
npm run build:generator  # Rebuild Java OpenAPI generator (mvn clean package)
npm test                 # Run all tests (unit)
npm run test:unit        # Unit tests only
npm run test:integration # Integration tests (Prism mock servers)
npm run lint             # Lint affected packages
npm run lint:fix         # Auto-fix lint issues
npm run nx:reset         # Reset Nx daemon if it crashes
```

## Pre-commit Hooks

Husky is configured:
- **pre-commit**: Runs `npm test` (unit tests must pass)
- **commit-msg**: Validates conventional commit format via Commitlint

## CI Requirements

- Node.js version must match `.nvmrc`
- Java (version in `.java-version`) + Maven required for generator builds
- `npm ci` is used in CI (not `npm install`)
- Only affected packages are linted/tested/built (`nx affected`)

## Nx Release Configuration

**CRITICAL: Do not change `useCommitScope` in `nx.json`**

`nx.json` has `"conventionalCommits": { "useCommitScope": true }` (line 73). This controls how breaking changes affect version bumps:

- `useCommitScope: true` (current, REQUIRED) — Breaking changes only bump packages named in commit scope. Example: `feat(rbac)!: breaking change` bumps rbac to major, other packages get patch for dependency update.
- `useCommitScope: false` (DANGEROUS) — Breaking changes bump ALL packages with modified files to major, regardless of commit scope. Causes `preserveMatchingDependencyRanges` failures when shared package jumps major but clients depend on `^2.x`.

**Why this matters:** Shared package is a dependency of all clients. With `useCommitScope: false`, any breaking change touching shared's files triggers major bumps across all 15 packages, breaking semver ranges and failing releases.

See: Nx source `packages/nx/src/command-line/release/utils/semver.ts:44`

## Working with This Repo

- Never directly call CLI tools (`jest`, `eslint`, `tsc`). Use npm scripts.
- Generated code in `packages/<client>/src/` is read-only. Modify templates or postProcess.sh instead.
- Run `npm run build:no-cache` if you suspect stale Nx cache.
- When modifying `packages/shared/`, test multiple client packages since all depend on it.
