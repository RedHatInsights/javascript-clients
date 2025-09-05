/* tslint:disable */
/* eslint-disable */
import type { AxiosStatic } from 'axios'
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    roleBindingsListBySubject,RoleBindingsListBySubjectReturnType,
    workspacesCreate,WorkspacesCreateReturnType,
    workspacesDelete,WorkspacesDeleteReturnType,
    workspacesList,WorkspacesListReturnType,
    workspacesMove,WorkspacesMoveReturnType,
    workspacesPatch,WorkspacesPatchReturnType,
    workspacesRead,WorkspacesReadReturnType,
    workspacesUpdate,WorkspacesUpdateReturnType,

  } from './index';

const endpointList = {
      roleBindingsListBySubject,
    workspacesCreate,
    workspacesDelete,
    workspacesList,
    workspacesMove,
    workspacesPatch,
    workspacesRead,
    workspacesUpdate,


};

type endpointReturnTypes = {
      roleBindingsListBySubject: RoleBindingsListBySubjectReturnType,
    workspacesCreate: WorkspacesCreateReturnType,
    workspacesDelete: WorkspacesDeleteReturnType,
    workspacesList: WorkspacesListReturnType,
    workspacesMove: WorkspacesMoveReturnType,
    workspacesPatch: WorkspacesPatchReturnType,
    workspacesRead: WorkspacesReadReturnType,
    workspacesUpdate: WorkspacesUpdateReturnType,


};

export const RbacClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory<typeof endpointList, endpointReturnTypes>(BASE_PATH, endpointList, instance);
}

export default RbacClient;
