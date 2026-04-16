# API Contracts Guidelines

## OpenAPI Spec Management

Each client package is generated from one or more OpenAPI specs. Specs are defined in `project.json`:

```json
"specs": {
  "default": "https://console.redhat.com/api/<service>/v1/openapi.json",
  "v2": "https://console.redhat.com/api/<service>/v2/openapi.yaml"
}
```

- `default` key exports endpoints at the package root
- Other keys (e.g., `v2`) export to a subdirectory matching the key name
- Spec URLs must use `console.redhat.com` (not `cloud.redhat.com`, which returns 404)
- Both JSON and YAML specs are supported
- Specs are validated before generation via `openapi-generator-cli validate`

## Code Generation Pipeline

```
OpenAPI Spec (URL or local file)
     |
     v
openapi-generator-cli validate
     |
     v
openapi-generator-cli generate (custom Java generator JAR)
     |
     v
postProcess.sh (sed cleanups: OneOf types, whitespace)
     |
     v
Generated TypeScript in packages/<client>/src/
```

The custom generator (`typescript-axios-webpack-module-federation`) creates one folder per endpoint for webpack tree-shaking. Consumers import individual endpoints:

```typescript
// Tree-shakeable import (preferred)
import { GetGroup } from '@redhat-cloud-services/rbac-client/GetGroup';

// Full import (pulls everything)
import { GetGroup } from '@redhat-cloud-services/rbac-client';
```

## Generated Code Structure

```
packages/<client>/src/
  index.ts           # Re-exports all endpoints
  api.ts             # Pre-configured APIFactory instance
  types/index.ts     # All model type definitions
  GetGroup/index.ts  # Per-endpoint module
  CreateRole/index.ts
  ...
```

Do NOT manually edit files in `src/` — they are overwritten on every `npm run generate`. Changes to generated output must be made in:
- Mustache templates: `src/main/resources/typescript-axios-webpack-module-federation/`
- Post-process script: `postProcess.sh`
- Generator Java source: `src/main/java/.../TypescriptAxiosWebpackModuleFederationGenerator.java`

## Dual Module Builds

Every client is built in two formats:

| Format | Output Dir | Config | Module |
|--------|-----------|--------|--------|
| CJS | `dist/` | `tsconfig.cjs.json` | CommonJS |
| ESM | `dist/esm/` | `tsconfig.esm.json` | ESNext (ES2021 target) |

Package exports use conditional exports:
```json
"exports": {
  ".": { "types": "./index.d.ts", "import": "./esm/index.js", "default": "./index.js" }
}
```

## Adding a New Client

1. Run `npm run create-client` and enter the service name
2. Add spec URLs to the generated `project.json`
3. Run `npm run generate` to create `src/`
4. Run `npm run build` to create `dist/`
5. Add integration tests if the service has stable APIs

## Shared Package

All clients depend on `@redhat-cloud-services/javascript-clients-shared`:
- `APIFactory` — creates pre-configured Axios instances
- Base interceptors for request/response handling
- Configuration utilities

Changes to `shared` affect all client packages. Test thoroughly.

## Spec Sync

The `sync-apis.yml` GitHub Action runs nightly (or manually) to pull latest specs, regenerate all clients, and open a PR for review. Regenerated code is committed — review diffs for breaking changes.
