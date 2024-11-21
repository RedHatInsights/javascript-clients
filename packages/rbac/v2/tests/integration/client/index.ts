import { expect } from '@jest/globals';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  WorkspacesWorkspace,
  WorkspacesWorkspaceListResponse,
  WorkspacesPatchWorkspaceRequest, 
  WorkspacesUpdateWorkspaceRequest, 
  WorkspacesWorkspaceTypesQueryParam 
} from '../../../types';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';
import { RbacClient } from '../../../api';

export const WORKSPACES_API_BASE = 'http://localhost:3000/api/rbac/v2';
export const config: Configuration = new Configuration();
export const composedWorkspacesApi = RbacClient(WORKSPACES_API_BASE);

// --- convenience wrappers for workspace operations ---

export const createWorkspace = async (name: string, description: string, config?: AxiosRequestConfig) => {
  // @ts-ignore
  const response: AxiosResponse = await composedWorkspacesApi.workspacesCreate({ name: name, description: description }, config);
  expect(response.status).toBe(201);
  return response;
};

export const deleteWorkspace = async (workspaceId: string, config?: AxiosRequestConfig) => {
  // @ts-ignore
  const response: AxiosResponse = await composedWorkspacesApi.workspacesDelete(workspaceId, config);
  expect(response.status).toBe(204);
  return response;
};

export const listWorkspaces = async (limit: number, offset: number, query: WorkspacesWorkspaceTypesQueryParam, config?: AxiosRequestConfig) => {
  if (config) {
    // @ts-ignore
    const response: AxiosResponse<WorkspacesWorkspaceListResponse> = await composedWorkspacesApi.workspacesList(limit, offset, query, config)
      .catch((error: string | undefined) => {
        console.log(error);
        throw new Error(error);
      });
    return response;
  } else {
    //@ts-ignore
    const response: AxiosResponse<WorkspacesWorkspaceListResponse> = await composedWorkspacesApi.workspacesList(limit, offset, query)
      .catch((error: string | undefined) => {
        console.log(error);
        throw new Error(error);
      });
    return response;
  }
};

export const readWorkspace = async (uuid: string, includeAncestry: boolean, config?: AxiosRequestConfig) => {
  // @ts-ignore
  const response: AxiosResponse<any> = await composedWorkspacesApi.workspacesRead(uuid, includeAncestry, config);
  expect(response.status).toBe(200);
  return response;
};

export const updateWorkspace = async (uuid: string, workspacesUpdateReq: WorkspacesUpdateWorkspaceRequest, config?: AxiosRequestConfig) => {
  // @ts-ignore
  const response: AxiosResponse = await composedWorkspacesApi.workspacesUpdate(uuid, workspacesUpdateReq, config).catch((error) => {
    console.log(error);
    throw new Error(error);
  });
  expect(response.status).toBe(200);
  return response;
};

export const patchWorkspace = async (uuid: string, workspacesPatchReq: WorkspacesPatchWorkspaceRequest, config?: AxiosRequestConfig) => {
  // @ts-ignore
  const response: AxiosResponse = await composedWorkspacesApi.workspacesPatch(uuid, workspacesPatchReq, config);
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
