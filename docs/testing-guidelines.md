# Testing Guidelines

## Test Types

This repo has two test types with different purposes:

| Type | Purpose | Runner | Location |
|------|---------|--------|----------|
| Unit | Validate executor logic (build-utils) | `npm run test:unit` | `packages/build-utils/src/**/*.spec.ts` |
| Integration | Validate generated clients against mocked APIs | `npm run test:integration` | `packages/<client>/tests/integration/*.test.ts` |

Generated client code (`packages/<client>/src/`) does not need unit tests — it is auto-generated from OpenAPI specs. Integration tests are the primary validation mechanism for clients.

## Integration Test Setup

Each client with integration tests needs:

1. **Test files** in `packages/<client>/tests/integration/` matching `*.test.ts`
2. **Jest config** per API version: `jest.integration.v1.config.ts`, `jest.integration.v2.config.ts`
3. **TypeScript config**: `tsconfig.integration.spec.json` (or versioned: `tsconfig.integration.v1.spec.json`)
4. **Nx target** in `project.json`:
   ```json
   "integration": {
     "executor": "@nx/jest:jest",
     "options": {
       "jestConfig": "packages/<client>/jest.integration.v1.config.ts"
     }
   }
   ```

## Writing Integration Tests

Integration tests use **Prism** (`@stoplight/prism-cli`) as a mock server that generates responses from OpenAPI specs.

### Pattern

```typescript
import { Configuration } from '../../src';
import { SomeEndpointApi } from '../../src/SomeEndpoint';

const basePath = 'http://localhost:4010'; // Prism default port

describe('SomeEndpoint', () => {
  const config = new Configuration({ basePath });

  it('should call endpoint successfully', async () => {
    const api = new SomeEndpointApi(config);
    const response = await api.someOperation();
    expect(response.status).toBe(200);
  });
});
```

### Conventions

- Use `crypto.randomUUID()` for generating test data (no external faker libs)
- Test auth schemes by including headers matching the spec's security definitions
- Group tests by API version when a client has multiple spec versions
- Integration tests run in Node.js environment (not JSDOM)
- Tests are excluded from unit test runs via `testPathIgnorePatterns`

## Executor Tests (build-utils)

The `client-generator` and `builder` executors in `packages/build-utils` have unit tests:

- Mock `child_process.execSync` — never call real CLI tools in tests
- Use `classifyCalls()` helper to analyze mock call arguments instead of fragile call-count assertions
- Test validation behavior, multi-spec scenarios, error handling
- Tests live alongside source in `src/executors/<name>/*.spec.ts`

## Pre-commit Hook

Husky runs `npm test` on every commit. This executes unit tests. Expect commits to take longer if tests fail. Fix tests before committing.

## Running Tests

```bash
npm run test:unit           # Unit tests only
npm run test:integration    # Integration tests (starts Prism mock servers)
npm test                    # All tests (same as pre-commit)
npx nx test <package-name>  # Single package unit tests
```
