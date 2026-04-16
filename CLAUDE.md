@AGENTS.md

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

- Node.js version must match `.nvmrc` (20.19.5)
- Java 21 + Maven required for generator builds
- `npm ci` is used in CI (not `npm install`)
- Only affected packages are linted/tested/built (`nx affected`)

## Working with This Repo

- Never directly call CLI tools (`jest`, `eslint`, `tsc`). Use npm scripts.
- Generated code in `packages/<client>/src/` is read-only. Modify templates or postProcess.sh instead.
- Run `npm run build:no-cache` if you suspect stale Nx cache.
- When modifying `packages/shared/`, test multiple client packages since all depend on it.
