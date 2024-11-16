/* tslint:disable */
/* eslint-disable */
import type { AxiosStatic } from 'axios'
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

  } from './index';

export const RbacClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory(BASE_PATH, {
    addPrincipalToGroup,
    addRoleToGroup,
    createCrossAccountRequests,
    createGroup,
    createRole,
    deleteGroup,
    deletePrincipalFromGroup,
    deleteRole,
    deleteRoleFromGroup,
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

  },
  instance);
}

export default RbacClient;
