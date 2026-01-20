import { describe, expect, test } from '@jest/globals';

import { RbacClient } from '../../api';
import { Group, GroupPrincipalIn, GroupRoleIn, RoleIn } from '../../types';
import { AxiosRequestConfig } from 'axios';
import { GetGroupParams } from '../../GetGroup';
import { CreateRoleParams } from '../../CreateRole';
import { DeleteGroupParams } from '../../DeleteGroup';
import { ListGroupsParams } from '../../ListGroups';
import { GetRoleParams } from '../../GetRole';
import { ListRolesParams } from '../../ListRoles';
import { DeleteRoleParams } from '../../DeleteRole';
import { ListPrincipalsParams } from '../../ListPrincipals';
import { GetPrincipalsFromGroupParams } from '../../GetPrincipalsFromGroup';
import { DeletePrincipalFromGroupParams } from '../../DeletePrincipalFromGroup';
import { AddPrincipalToGroupParams } from '../../AddPrincipalToGroup';
import { AddRoleToGroupParams } from '../../AddRoleToGroup';
import { DeleteRoleFromGroupParams } from '../../DeleteRoleFromGroup';
import { GetRoleAccessParams } from '../../GetRoleAccess';
import { GetPrincipalAccessParams } from '../../GetPrincipalAccess';

const BASE_PATH = 'http://localhost:3001/api/rbac/v1/';

const config: AxiosRequestConfig = {
  baseURL: BASE_PATH,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
};

const client = RbacClient(BASE_PATH);

describe('RBAC API (v1)', () => {
  test('access', async () => {
    const getRoleAccessParams: GetRoleAccessParams = { uuid: 'fake-uuid' };
    const roleAccessResp = await client.getRoleAccess(getRoleAccessParams);
    expect(roleAccessResp.status).toEqual(200);

    const getPrincipalAccessParams: GetPrincipalAccessParams = {
      application: 'jeff',
      limit: 567,
    };
    const getPrincipalAccessResp = await client.getPrincipalAccess(getPrincipalAccessParams);
    expect(getPrincipalAccessResp.status).toEqual(200);

    const getPrincipalAccessRespError = await client.getPrincipalAccess(null);
    expect(getPrincipalAccessRespError.status).toEqual(400);
  });

  test('groups crud operations', async () => {
    const groupData: Group = {
      name: 'Test Group',
      description: 'Some test group',
    };
    const response = await client.createGroup(groupData, config);
    expect(response.status).toEqual(201);
    expect(response.data.name).toBeTruthy();
    expect(response.data.description).toBeTruthy();

    const getGroupParams: GetGroupParams = {
      uuid: response.data.uuid,
    };
    const getResponse = await client.getGroup(getGroupParams);
    expect(getResponse.status).toEqual(200);
    expect(getResponse.data.name).toBeTruthy();
    expect(getResponse.data.description).toBeTruthy();

    const listParams: ListGroupsParams = {};
    const listResponse = await client.listGroups(listParams);
    expect(listResponse.status).toEqual(200);
    expect(listResponse.data).toBeTruthy();

    const delParams: DeleteGroupParams = {
      uuid: 'fake-uuid',
    };
    const delResponse = await client.deleteGroup(delParams);
    expect(delResponse.status).toEqual(204);
  });

  test('roles crud operations', async () => {
    const roleData: RoleIn = {
      name: 'Test Group',
      access: [],
    };
    const createRoleParams: CreateRoleParams = {
      roleIn: roleData,
    };
    const response = await client.createRole(createRoleParams);
    expect(response.status).toEqual(201);
    expect(response.data.name).toBeTruthy();
    expect(response.data.description).toBeTruthy();
    expect(response.data.display_name).toBeTruthy();

    const getRoleParams: GetRoleParams = {
      uuid: 'fake-uuid',
    };
    const getResponse = await client.getRole(getRoleParams);
    expect(getResponse.status).toEqual(200);
    expect(getResponse.data.name).toBeTruthy();

    const listParams: ListRolesParams = {};
    const listResponse = await client.listRoles(listParams);
    expect(listResponse.status).toEqual(200);
    expect(listResponse.data).toBeTruthy();

    const deleteRoleParams: DeleteRoleParams = {
      uuid: 'fake-uuid',
    };
    const delResponse = await client.deleteRole(deleteRoleParams);
    expect(delResponse.status).toEqual(204);

    const groupRoleInTest: GroupRoleIn = {
      roles: [],
    };
    const addRoleToGroupParams: AddRoleToGroupParams = {
      uuid: 'fake-group-uuid',
      groupRoleIn: groupRoleInTest,
    };
    const addRoleToGroupResponse = await client.addRoleToGroup(addRoleToGroupParams);
    expect(addRoleToGroupResponse.status).toEqual(200);

    const delRoleFromGroupParams: DeleteRoleFromGroupParams = { uuid: 'fake-group-uuid', roles: 'role1,role2' };
    const delRoleFromGroupResp = await client.deleteRoleFromGroup(delRoleFromGroupParams);
    expect(delRoleFromGroupResp.status).toEqual(204);
  });

  test('principals', async () => {
    const listParams: ListPrincipalsParams = {};
    const listResponse = await client.listPrincipals(listParams);
    expect(listResponse.status).toEqual(200);

    const getPrincipalsFromGroupParams: GetPrincipalsFromGroupParams = {
      uuid: 'fake-group-uuid',
    };
    const getPrincipalsFromGroupResp = await client.getPrincipalsFromGroup(getPrincipalsFromGroupParams);
    expect(getPrincipalsFromGroupResp.status).toEqual(200);

    const delPrincipalFromGroupParams: DeletePrincipalFromGroupParams = {
      uuid: 'fake-group-uuid',
    };

    const delFromGroupResp = await client.deletePrincipalFromGroup(delPrincipalFromGroupParams);
    expect(delFromGroupResp.status).toEqual(204);

    const groupPrincipalIn: GroupPrincipalIn = {
      principals: [],
    };
    const addPrincipalToGroupParams: AddPrincipalToGroupParams = {
      uuid: 'fake-group-uuid',
      groupPrincipalIn: groupPrincipalIn,
    };

    const addToGroupResp = await client.addPrincipalToGroup(addPrincipalToGroupParams);
    expect(addToGroupResp.status).toEqual(200);
  });
});
