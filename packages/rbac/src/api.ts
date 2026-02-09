/* tslint:disable */
/* eslint-disable */
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
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
    getOpenAPISpec,
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
    getOpenAPISpec,
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

export const RbacClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory(BASE_PATH, endpointList, instance);
}

export default RbacClient;
