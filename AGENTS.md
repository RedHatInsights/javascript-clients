# AGENTS.md — AI Agent Onboarding

## Project Overview

This is an Nx monorepo that auto-generates TypeScript API clients for Red Hat Hybrid Cloud Console (HCC) services. Each HCC service gets a published npm package (`@redhat-cloud-services/<service>-client`) generated from its OpenAPI spec.

**Key packages:**
- **15 service clients** (rbac, patch, vulnerabilities, insights, notifications, integrations, etc.)
- **build-utils** — Custom Nx executors for code generation and building
- **shared** — Runtime utilities (APIFactory, Axios interceptors) used by all clients

## Documentation Index

| Document | Purpose |
|----------|---------|
| [docs/testing-guidelines.md](docs/testing-guidelines.md) | Test types, integration test patterns, executor test conventions |
| [docs/api-contracts-guidelines.md](docs/api-contracts-guidelines.md) | OpenAPI spec management, code generation pipeline, dual module builds |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | System design, dependency graph, data flows, directory layout |

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Language | TypeScript (see `package.json`), Node.js (see `.nvmrc`) |
| Monorepo | Nx (see `package.json`) |
| HTTP Client | Axios |
| Code Generation | Custom Java OpenAPI generator (Maven), Mustache templates |
| Testing | Jest (unit + integration), Prism mock server |
| Linting | ESLint + Prettier |
| CI/CD | GitHub Actions |
| Release | Nx Release (independent per package, conventional commits) |
| Module System | Dual CJS + ESM builds |

## Cross-Cutting Conventions

### Generated Code is Read-Only

Files in `packages/<client>/src/` are auto-generated. Never edit them directly. To change generated output:
- Modify Mustache templates in `src/main/resources/typescript-axios-webpack-module-federation/`
- Update `postProcess.sh` for post-generation cleanups
- Modify the Java generator in `src/main/java/`

### Package Structure

Every client package follows the same structure (scaffolded via `npm run create-client`):

```
packages/<client>/
  src/                  # Generated TypeScript (DO NOT EDIT)
  dist/                 # Build output (CJS + ESM)
  tests/integration/    # Integration tests
  project.json          # Nx targets (generate, build, lint, test)
  package.json          # NPM metadata + exports
  tsconfig.json         # Base TS config
  tsconfig.esm.json     # ESM build config
  tsconfig.cjs.json     # CJS build config
  jest.config.ts        # Unit test config
  jest.integration.*.config.ts  # Integration test configs
  typedoc.json          # API docs generation
```

### Naming Conventions

- NPM package: `@redhat-cloud-services/<service>-client`
- Nx project name: `@redhat-cloud-services/<service>-client`
- Generated class: `<Service>Client` (PascalCase)
- Branch for bot work: `bot/<TICKET-KEY>`

### Commit Messages

Conventional Commits enforced by Commitlint + Husky:

```
type(scope): message

# Types: feat, fix, docs, style, refactor, perf, test, chore, ci, build, revert
# Scope: package name or area (e.g., rbac, build-utils, shared)
```

### npm Scripts (Use These, Not Direct CLI Calls)

```bash
npm install              # Install deps + build Maven generator
npm run generate         # Generate all clients from OpenAPI specs
npm run build            # Build all packages (dual CJS/ESM)
npm run build:no-cache   # Force rebuild without Nx cache
npm run build:generator  # Rebuild the Java OpenAPI generator
npm run test:unit        # Unit tests
npm run test:integration # Integration tests (Prism mocks)
npm test                 # All tests
npm run lint             # Lint all affected
npm run lint:fix         # Auto-fix lint issues
npm run create-client    # Scaffold a new client package
npm run nx:reset         # Reset Nx daemon (if it crashes)
```

### Common Pitfalls

1. **Wrong Node version** — Project requires Node version in `.nvmrc`. Check version match at session start:
   ```bash
   cat .nvmrc
   node --version
   ```
   If mismatch, switch version:
   ```bash
   nvm use                    # Switch to .nvmrc version
   # Or if version not installed:
   nvm install                # Install + switch to .nvmrc version
   ```
   After switching Node versions, clean install:
   ```bash
   rm -r .nx node_modules packages/*/node_modules
   nvm use
   npm install
   ```

2. **Editing generated code** — Changes in `src/` will be overwritten. Use templates instead.

3. **Stale Nx cache** — If builds seem wrong, run `npm run build:no-cache` or `npm run nx:reset`.

4. **Wrong spec URL domain** — Use `console.redhat.com`, not `cloud.redhat.com` (returns 404).

5. **Missing Java/Maven** — The custom generator requires Java (see `.java-version`) + Maven. `npm install` triggers `mvn clean package`.

6. **Pre-commit hook runs tests** — Husky runs `npm test` before every commit. Fix failing tests first.

7. **Package-lock.json mismatch** — Use the exact Node version from `.nvmrc` when running `npm install`.

8. **Shared package changes** — `@redhat-cloud-services/javascript-clients-shared` is a runtime dependency of all clients. Changes propagate everywhere.
