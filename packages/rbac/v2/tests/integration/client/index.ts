import { expect } from '@jest/globals';
// import all the workspaces operations
import WorkspacesRead from '../../../WorkspacesRead';
import WorkspacesList from '../../../WorkspacesList';
import WorkspacesCreate from '../../../WorkspacesCreate';
import WorkspacesDelete from '../../../WorkspacesDelete';
import WorkspacesPatch from '../../../WorkspacesPatch';
import WorkspacesUpdate from '../../../WorkspacesUpdate';

import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { WorkspacesWorkspace, WorkspacesWorkspaceListResponse } from '../../../api';
import { WorkspacesPatchWorkspaceRequest, WorkspacesUpdateWorkspaceRequest, WorkspacesWorkspaceTypesQueryParam } from '../../..';

import axios from 'axios';

import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/utils';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

export const WORKSPACES_API_BASE = 'http://localhost:3000/api/rbac/v2';
export const config: Configuration = new Configuration();
const axiosInstance = axios.create();

export const composedWorkspacesApi = APIFactory(
  WORKSPACES_API_BASE,
  {
    WorkspacesRead: WorkspacesRead,
    WorkspacesList: WorkspacesList,
    WorkspacesCreate: WorkspacesCreate,
    WorkspacesDelete: WorkspacesDelete,
    WorkspacesPatch: WorkspacesPatch,
    WorkspacesUpdate: WorkspacesUpdate,
  },
  { axios: axiosInstance, configuration: config },
);

// --- convenience wrappers for workspace operations ---

export const createWorkspace = async (name: string, description: string, config?: AxiosRequestConfig) => {
  // @ts-ignore
  const response: AxiosResponse = await composedWorkspacesApi.WorkspacesCreate({ name: name, description: description }, config);
  expect(response.status).toBe(201);
  return response;
};

export const deleteWorkspace = async (workspaceId: string, config?: AxiosRequestConfig) => {
  // @ts-ignore
  const response: AxiosResponse = await composedWorkspacesApi.WorkspacesDelete(workspaceId, config);
  expect(response.status).toBe(204);
  return response;
};

export const listWorkspaces = async (limit: number, offset: number, query: WorkspacesWorkspaceTypesQueryParam, config?: AxiosRequestConfig) => {
  if (config) {
    // @ts-ignore
    const response: AxiosResponse<WorkspacesWorkspaceListResponse> = await composedWorkspacesApi
      .WorkspacesList(limit, offset, query, config)
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
    return response;
  } else {
    //@ts-ignore
    const response: AxiosResponse<WorkspacesWorkspaceListResponse> = await composedWorkspacesApi
      //@ts-ignore
      .WorkspacesList(limit, offset, query)
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
    return response;
  }
};

export const readWorkspace = async (uuid: string, includeAncestry: boolean, config?: AxiosRequestConfig) => {
  // @ts-ignore
  const response: AxiosResponse<any> = await composedWorkspacesApi.WorkspacesRead(uuid, includeAncestry, config);
  expect(response.status).toBe(200);
  return response;
};

export const updateWorkspace = async (uuid: string, workspacesUpdateReq: WorkspacesUpdateWorkspaceRequest, config?: AxiosRequestConfig) => {
  // @ts-ignore
  const response: AxiosResponse = await composedWorkspacesApi.WorkspacesUpdate(uuid, workspacesUpdateReq, config).catch((error) => {
    console.log(error);
    throw new Error(error);
  });
  expect(response.status).toBe(200);
  return response;
};

export const patchWorkspace = async (uuid: string, workspacesPatchReq: WorkspacesPatchWorkspaceRequest, config?: AxiosRequestConfig) => {
  // @ts-ignore
  const response: AxiosResponse = await composedWorkspacesApi.WorkspacesPatch(uuid, workspacesPatchReq, config);
  expect(response.status).toBe(200);
  return response;
};

export const findWorkspaceByName = async (
  workspaceName: string,
  query: WorkspacesWorkspaceTypesQueryParam,
  axiosConfig?: AxiosRequestConfig,
): Promise<WorkspacesWorkspace | null> => {
  const workspaceList = await listWorkspaces(1000, 0, query, axiosConfig);
  if (workspaceList.data.data) {
    for (const workspace of workspaceList.data.data) {
      if (workspace.name === workspaceName) {
        return workspace;
      }
    }
  }
  return null;
};
