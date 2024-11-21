/* tslint:disable */
/* eslint-disable */
import type { AxiosStatic } from 'axios'
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    workspacesCreate,WorkspacesCreateReturnType,
    workspacesDelete,WorkspacesDeleteReturnType,
    workspacesList,WorkspacesListReturnType,
    workspacesPatch,WorkspacesPatchReturnType,
    workspacesRead,WorkspacesReadReturnType,
    workspacesUpdate,WorkspacesUpdateReturnType,

  } from './index';

const endpointList = {
      workspacesCreate,
    workspacesDelete,
    workspacesList,
    workspacesPatch,
    workspacesRead,
    workspacesUpdate,


};

type endpointReturnTypes = {
      workspacesCreate: WorkspacesCreateReturnType,
    workspacesDelete: WorkspacesDeleteReturnType,
    workspacesList: WorkspacesListReturnType,
    workspacesPatch: WorkspacesPatchReturnType,
    workspacesRead: WorkspacesReadReturnType,
    workspacesUpdate: WorkspacesUpdateReturnType,


};

export const RbacClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory<typeof endpointList, endpointReturnTypes>(BASE_PATH, endpointList, instance);
}

export default RbacClient;
