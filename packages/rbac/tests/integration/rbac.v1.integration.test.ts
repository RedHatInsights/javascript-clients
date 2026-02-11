/**
 * Using CommonJS require() for consistency with Jest's default behavior.
 * ESM support in Jest remains experimental as of 2026.
 * @todo Migrate to Vitest for native ESM support and better performance
 */
const { describe, expect, test } = require('@jest/globals');
const { randomUUID } = require('crypto');

const { RbacClient } = require('../../src/api');
const axios = require('axios');

// TypeScript type imports (compile-time only)
import type { Group, GroupPrincipalIn, GroupRoleIn, RoleIn } from '../../src/types';

// Simple data generators using Node.js built-ins
// Note: Using these instead of faker due to CommonJS/ESM compatibility issues
const generateTestData = {
  uuid: () => randomUUID(),
  name: () => `test-${Math.random().toString(36).substring(7)}`,
  description: () => `Test description ${Date.now()}`,
  application: () => `app-${Math.random().toString(36).substring(7)}`,
  jobTitle: () => `role-${Math.random().toString(36).substring(7)}`,
};

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

describe('RBAC API (v1)', () => {
  test('access', async () => {
    const getRoleAccessParams = { uuid: generateTestData.uuid() };
    const roleAccessResp = await client.getRoleAccess(getRoleAccessParams);
    expect(roleAccessResp.status).toEqual(200);

    const getPrincipalAccessParams = {
      application: generateTestData.application(),
    };
    const getPrincipalAccessResp = await client.getPrincipalAccess(getPrincipalAccessParams);
    expect(getPrincipalAccessResp.status).toEqual(200);
  });

  test('groups crud operations', async () => {
    const groupData: Group = {
      name: generateTestData.name(),
      description: generateTestData.description(),
    };
    const response = await client.createGroup({ group: groupData });
    expect(response.status).toEqual(201);
    expect(response.data.name).toBeTruthy();
    expect(response.data.description).toBeTruthy();

    const getGroupParams = {
      uuid: response.data.uuid,
    };
    const getResponse = await client.getGroup(getGroupParams);
    expect(getResponse.status).toEqual(200);
    expect(getResponse.data.name).toBeTruthy();
    expect(getResponse.data.description).toBeTruthy();

    const listParams = {};
    const listResponse = await client.listGroups(listParams);
    expect(listResponse.status).toEqual(200);
    expect(listResponse.data).toBeTruthy();

    const delParams = {
      uuid: generateTestData.uuid(),
    };
    const delResponse = await client.deleteGroup(delParams);
    expect(delResponse.status).toEqual(204);
  });

  test('roles crud operations', async () => {
    const roleData: RoleIn = {
      name: generateTestData.jobTitle(),
      access: [],
    };
    const createRoleParams = {
      roleIn: roleData,
    };
    const response = await client.createRole(createRoleParams);
    expect(response.status).toEqual(201);
    expect(response.data.name).toBeTruthy();
    expect(response.data.description).toBeTruthy();
    expect(response.data.display_name).toBeTruthy();

    const getRoleParams = {
      uuid: generateTestData.uuid(),
    };
    const getResponse = await client.getRole(getRoleParams);
    expect(getResponse.status).toEqual(200);
    expect(getResponse.data.name).toBeTruthy();

    const listParams = {};
    const listResponse = await client.listRoles(listParams);
    expect(listResponse.status).toEqual(200);
    expect(listResponse.data).toBeTruthy();

    const deleteRoleParams = {
      uuid: generateTestData.uuid(),
    };
    const delResponse = await client.deleteRole(deleteRoleParams);
    expect(delResponse.status).toEqual(204);

    const groupRoleInTest: GroupRoleIn = {
      roles: [],
    };
    const addRoleToGroupParams = {
      uuid: generateTestData.uuid(),
      groupRoleIn: groupRoleInTest,
    };
    const addRoleToGroupResponse = await client.addRoleToGroup(addRoleToGroupParams);
    expect(addRoleToGroupResponse.status).toEqual(200);

    const delRoleFromGroupParams = {
      uuid: generateTestData.uuid(),
      roles: `${generateTestData.jobTitle()},${generateTestData.jobTitle()}`,
    };
    const delRoleFromGroupResp = await client.deleteRoleFromGroup(delRoleFromGroupParams);
    expect(delRoleFromGroupResp.status).toEqual(204);
  });

  test('principals', async () => {
    const listParams = {};
    const listResponse = await client.listPrincipals(listParams);
    expect(listResponse.status).toEqual(200);

    const getPrincipalsFromGroupParams = {
      uuid: generateTestData.uuid(),
    };
    const getPrincipalsFromGroupResp = await client.getPrincipalsFromGroup(getPrincipalsFromGroupParams);
    expect(getPrincipalsFromGroupResp.status).toEqual(200);

    const delPrincipalFromGroupParams = {
      uuid: generateTestData.uuid(),
    };

    const delFromGroupResp = await client.deletePrincipalFromGroup(delPrincipalFromGroupParams);
    expect(delFromGroupResp.status).toEqual(204);

    const groupPrincipalIn: GroupPrincipalIn = {
      principals: [],
    };
    const addPrincipalToGroupParams = {
      uuid: generateTestData.uuid(),
      groupPrincipalIn: groupPrincipalIn,
    };

    const addToGroupResp = await client.addPrincipalToGroup(addPrincipalToGroupParams);
    expect(addToGroupResp.status).toEqual(200);
  });
});
