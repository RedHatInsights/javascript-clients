/* tslint:disable */
/* eslint-disable */
import type { AxiosStatic } from 'axios'
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    addPrincipalToGroup,AddPrincipalToGroupReturnType,
    addRoleToGroup,AddRoleToGroupReturnType,
    createCrossAccountRequests,CreateCrossAccountRequestsReturnType,
    createGroup,CreateGroupReturnType,
    createRole,CreateRoleReturnType,
    deleteGroup,DeleteGroupReturnType,
    deletePrincipalFromGroup,DeletePrincipalFromGroupReturnType,
    deleteRole,DeleteRoleReturnType,
    deleteRoleFromGroup,DeleteRoleFromGroupReturnType,
    getAuditlogs,GetAuditlogsReturnType,
    getCrossAccountRequest,GetCrossAccountRequestReturnType,
    getGroup,GetGroupReturnType,
    getPrincipalAccess,GetPrincipalAccessReturnType,
    getPrincipalsFromGroup,GetPrincipalsFromGroupReturnType,
    getRole,GetRoleReturnType,
    getRoleAccess,GetRoleAccessReturnType,
    getStatus,GetStatusReturnType,
    listCrossAccountRequests,ListCrossAccountRequestsReturnType,
    listGroups,ListGroupsReturnType,
    listPermissionOptions,ListPermissionOptionsReturnType,
    listPermissions,ListPermissionsReturnType,
    listPrincipals,ListPrincipalsReturnType,
    listRoles,ListRolesReturnType,
    listRolesForGroup,ListRolesForGroupReturnType,
    patchCrossAccountRequest,PatchCrossAccountRequestReturnType,
    patchRole,PatchRoleReturnType,
    putCrossAccountRequest,PutCrossAccountRequestReturnType,
    updateGroup,UpdateGroupReturnType,
    updateRole,UpdateRoleReturnType,

  } from './index';

const endpointList = {
      addPrincipalToGroup,
    addRoleToGroup,
    createCrossAccountRequests,
    createGroup,
    createRole,
    deleteGroup,
    deletePrincipalFromGroup,
    deleteRole,
    deleteRoleFromGroup,
    getAuditlogs,
    getCrossAccountRequest,
    getGroup,
    getPrincipalAccess,
    getPrincipalsFromGroup,
    getRole,
    getRoleAccess,
    getStatus,
    listCrossAccountRequests,
    listGroups,
    listPermissionOptions,
    listPermissions,
    listPrincipals,
    listRoles,
    listRolesForGroup,
    patchCrossAccountRequest,
    patchRole,
    putCrossAccountRequest,
    updateGroup,
    updateRole,


};

type endpointReturnTypes = {
      addPrincipalToGroup: AddPrincipalToGroupReturnType,
    addRoleToGroup: AddRoleToGroupReturnType,
    createCrossAccountRequests: CreateCrossAccountRequestsReturnType,
    createGroup: CreateGroupReturnType,
    createRole: CreateRoleReturnType,
    deleteGroup: DeleteGroupReturnType,
    deletePrincipalFromGroup: DeletePrincipalFromGroupReturnType,
    deleteRole: DeleteRoleReturnType,
    deleteRoleFromGroup: DeleteRoleFromGroupReturnType,
    getAuditlogs: GetAuditlogsReturnType,
    getCrossAccountRequest: GetCrossAccountRequestReturnType,
    getGroup: GetGroupReturnType,
    getPrincipalAccess: GetPrincipalAccessReturnType,
    getPrincipalsFromGroup: GetPrincipalsFromGroupReturnType,
    getRole: GetRoleReturnType,
    getRoleAccess: GetRoleAccessReturnType,
    getStatus: GetStatusReturnType,
    listCrossAccountRequests: ListCrossAccountRequestsReturnType,
    listGroups: ListGroupsReturnType,
    listPermissionOptions: ListPermissionOptionsReturnType,
    listPermissions: ListPermissionsReturnType,
    listPrincipals: ListPrincipalsReturnType,
    listRoles: ListRolesReturnType,
    listRolesForGroup: ListRolesForGroupReturnType,
    patchCrossAccountRequest: PatchCrossAccountRequestReturnType,
    patchRole: PatchRoleReturnType,
    putCrossAccountRequest: PutCrossAccountRequestReturnType,
    updateGroup: UpdateGroupReturnType,
    updateRole: UpdateRoleReturnType,


};

export const RbacClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory<typeof endpointList, endpointReturnTypes>(BASE_PATH, endpointList, instance);
}

export default RbacClient;
