/* tslint:disable */
/* eslint-disable */
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    roleBindingsBatchCreate,
    roleBindingsList,
    roleBindingsListBySubject,
    roleBindingsUpdate,
    rolesBatchDelete,
    rolesCreate,
    rolesList,
    rolesRead,
    rolesUpdate,
    workspacesCreate,
    workspacesDelete,
    workspacesList,
    workspacesMove,
    workspacesPatch,
    workspacesRead,
    workspacesUpdate,

  } from './index';

const endpointList = {
      roleBindingsBatchCreate,
    roleBindingsList,
    roleBindingsListBySubject,
    roleBindingsUpdate,
    rolesBatchDelete,
    rolesCreate,
    rolesList,
    rolesRead,
    rolesUpdate,
    workspacesCreate,
    workspacesDelete,
    workspacesList,
    workspacesMove,
    workspacesPatch,
    workspacesRead,
    workspacesUpdate,


};

export const RbacClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory(BASE_PATH, endpointList, instance);
}

export default RbacClient;
