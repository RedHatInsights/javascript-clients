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

`nx.json` has `"conventionalCommits": { "useCommitScope": true }` (line 73). This requires commit scopes to **exactly match** the full Nx project name for version bumps:

- `useCommitScope: true` (current, REQUIRED) — Scope must match full project name (e.g., `@redhat-cloud-services/rbac-client`). Standard conventional commits rules apply: `fix` → patch, `feat` → minor, `!` → major. Non-matching scopes (e.g., `feat(rbac)!:`) are treated as indirect changes and capped at patch.
- `useCommitScope: false` — Ignores scope, uses Nx affected graph. Risk: breaking change touching `packages/shared/` → major bumps all 15 client packages, breaking `preserveMatchingDependencyRanges`.

**Commit scope convention:** Always use full project name as scope:
```
feat(@redhat-cloud-services/scheduler-client)!: remove v1 endpoints
```

Multiple packages (comma-separated, **no spaces**):
```
feat(@redhat-cloud-services/rbac-client,@redhat-cloud-services/scheduler-client)!: breaking change
```

Not: `feat(scheduler)!:` (scope mismatch, capped at patch)
Not: `feat(rbac, scheduler)!:` (spaces break match)

See: Nx source `node_modules/nx/src/command-line/release/utils/semver.js` (determineSemverChange)

## Package Publishing

Root `.npmignore` is copied into each package's `dist/` during build. Excludes tests, configs, docs, source maps, and OpenAPI files from published packages. Protected by CODEOWNERS.

Packages publish from `{projectRoot}/dist` (see `nx-release-publish` in `project.json`).

To verify package contents before publish:

```bash
npm run build -- @redhat-cloud-services/<package>-client
cd packages/<package>/dist
npm pack --dry-run
```

Expected output: `.js`, `.d.ts`, `.map`, `package.json`. No `src/`, `tests/`, `tsconfig.*`, etc.

## Working with This Repo

- Never directly call CLI tools (`jest`, `eslint`, `tsc`). Use npm scripts.
- Generated code in `packages/<client>/src/` is read-only. Modify templates or postProcess.sh instead.
- Run `npm run build:no-cache` if you suspect stale Nx cache.
- When modifying `packages/shared/`, test multiple client packages since all depend on it.
