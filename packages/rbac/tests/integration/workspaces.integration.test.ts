/**
 * Using CommonJS require() for consistency with Jest's default behavior.
 * ESM support in Jest remains experimental as of 2026.
 * @todo Migrate to Vitest for native ESM support and better performance
 */
const { describe, expect, test } = require('@jest/globals');
const { randomUUID } = require('crypto');

const { RbacClient } = require('../../src/v2/api');
const axios = require('axios');

// TypeScript type imports (compile-time only)
import type { WorkspacesUpdateParams } from '../../src/v2/WorkspacesUpdate';
import type { WorkspacesPatchParams } from '../../src/v2/WorkspacesPatch';

// Generate valid test data for OpenAPI validation
const generateTestData = {
  uuid: () => randomUUID(),
  name: () => `test-${Math.random().toString(36).substring(7)}`,
  description: () => `Test description ${Date.now()}`,
};

// Prism serves mock endpoints at root level
const BASE_PATH = 'http://localhost:3001';

// RBAC API requires basic auth - Prism validates the security scheme format
const authHeaders = {
  'Content-Type': 'application/json',
  Authorization: 'Basic ' + Buffer.from('testuser:testpass').toString('base64'),
};

const axiosConfig = {
  axios: axios.create({
    headers: authHeaders,
    withCredentials: false,
  }),
};

const client = RbacClient(BASE_PATH, axiosConfig);

describe('Workspaces API (v2)', () => {
  test('update workspace (PUT)', async () => {
    const params: WorkspacesUpdateParams = {
      id: generateTestData.uuid(),
      workspacesUpdateWorkspaceRequest: {
        name: generateTestData.name(),
        description: generateTestData.description(),
        parent_id: generateTestData.uuid(),
      },
    };
    const resp = await client.workspacesUpdate(params);
    expect(resp.status).toEqual(200);
  });

  test('patch workspace (PATCH)', async () => {
    const params: WorkspacesPatchParams = {
      id: generateTestData.uuid(),
      workspacesPatchWorkspaceRequest: {
        name: generateTestData.name(),
      },
    };
    const resp = await client.workspacesPatch(params);
    expect(resp.status).toEqual(200);
  });
});
