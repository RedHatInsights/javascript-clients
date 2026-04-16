# Architecture

## System Overview

javascript-clients is an Nx monorepo that auto-generates TypeScript API clients for Red Hat Hybrid Cloud Console (HCC) services. Each service gets its own npm package (`@redhat-cloud-services/<service>-client`) published independently.

## Key Design Decisions

### Custom OpenAPI Generator

Instead of using the stock `typescript-axios` generator, this repo uses a **custom Java-based generator** (`typescript-axios-webpack-module-federation`) that creates one folder per API endpoint. This enables tree-shaking in webpack module federation environments — consumers only bundle the endpoints they import.

- Generator source: `src/main/java/.../TypescriptAxiosWebpackModuleFederationGenerator.java`
- Mustache templates: `src/main/resources/typescript-axios-webpack-module-federation/`
- Built via Maven: `npm run build:generator` (runs `mvn clean package`)
- Output JAR: `target/typescript-axios-webpack-module-federation-openapi-generator-1.0.0.jar`

### Custom Nx Executors

Two custom executors in `packages/build-utils`:

1. **`client-generator`** — Orchestrates spec validation + code generation. Supports multiple spec versions per client (e.g., v1/v2). Uses Zod for options validation.
2. **`builder`** — Compiles TypeScript to dual CJS+ESM output. Copies package metadata to `dist/`.

### Independent Package Versioning

Each package is versioned and released independently via Nx Release with conventional commits. A change to `rbac-client` doesn't bump `patch-client`. Version tags follow `{packageName}-{version}` format.

## Package Dependency Graph

```
Consumer App
    |
    v
@redhat-cloud-services/<service>-client  (generated client)
    |
    v
@redhat-cloud-services/javascript-clients-shared  (APIFactory, interceptors)
    |
    v
axios  (HTTP client)
```

`build-utils` is a dev-time dependency only — it provides the Nx executors for generating and building clients.

## Data Flow

### Generation Flow

```
OpenAPI Spec (remote URL / local file)
        |
        v
  Spec Validation (openapi-generator-cli validate)
        |
        v
  Code Generation (custom JAR + Mustache templates)
        |
        v
  Post-Processing (postProcess.sh — sed cleanups)
        |
        v
  TypeScript source in packages/<client>/src/
```

### Build Flow

```
TypeScript source (src/)
        |
   +---------+----------+
   |                     |
   v                     v
tsconfig.cjs.json    tsconfig.esm.json
   |                     |
   v                     v
dist/ (CJS)         dist/esm/ (ESM)
```

### CI/CD Flow

```
Push/PR to main
    |
    v
install → [lint, test, integration, build] (parallel, affected only)
    |
    v (main branch, all pass)
release → nx release → npm publish (per changed package)
```

## Directory Layout

| Path | Purpose |
|------|---------|
| `packages/<client>/` | Individual client packages (generated + config) |
| `packages/build-utils/` | Custom Nx executors (client-generator, builder) |
| `packages/shared/` | Shared runtime utilities (APIFactory, interceptors) |
| `apps/test-app/` | React demo app for testing clients |
| `src/main/java/` | Custom OpenAPI generator (Java) |
| `src/main/resources/` | Mustache templates for code generation |
| `utils/nx-base/` | Template for scaffolding new client packages |
| `bin/serve.sh` | Prism mock server launcher |

## Key Invariants

- Generated code in `src/` is never manually edited — changes go through templates or postProcess.sh
- All clients share the same `shared` package for HTTP configuration
- Dual CJS/ESM builds are required for all published packages
- Spec URLs must be `console.redhat.com` (not legacy `cloud.redhat.com`)
- Package names follow `@redhat-cloud-services/<service>-client` convention
- Nx caching is enabled by default; use `--skip-nx-cache` when debugging build issues
