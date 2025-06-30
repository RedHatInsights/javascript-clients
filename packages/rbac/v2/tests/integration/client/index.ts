import { AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  WorkspacesWorkspaceListResponse,
  WorkspacesPatchWorkspaceRequest,
  WorkspacesUpdateWorkspaceRequest,
  WorkspacesCreateWorkspaceRequest,
  WorkspacesWorkspaceTypesQueryParam,
  WorkspacesRead200Response,
} from '../../../types';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';
import { RbacClient } from '../../../api';

export const WORKSPACES_API_BASE = 'http://localhost:3002/api/rbac/v2';
export const config: Configuration = new Configuration();
export const composedWorkspacesApi = RbacClient(WORKSPACES_API_BASE);

// --- convenience wrappers for workspace operations ---

export const createWorkspace = async (parentId: string, name: string, description: string, config: AxiosRequestConfig) => {
  const req: WorkspacesCreateWorkspaceRequest = {
    parent_id: parentId,
    name: name,
    description: description,
  };
  const response: AxiosResponse = await composedWorkspacesApi.workspacesCreate(req, config);
  return response;
};

export const deleteWorkspace = async (workspaceId: string, config: AxiosRequestConfig) => {
  const response: AxiosResponse = await composedWorkspacesApi.workspacesDelete(workspaceId, config);
  return response;
};

export const listWorkspaces = async (limit: number, offset: number, query: WorkspacesWorkspaceTypesQueryParam, config: AxiosRequestConfig) => {
  const response: AxiosResponse<WorkspacesWorkspaceListResponse> = await composedWorkspacesApi
  .workspacesList(limit, offset, query, '', config)
    .catch((error: string | undefined) => {
      console.log(error);
      throw new Error(error);
    });
  return response;
};

export const readWorkspace = async (uuid: string, includeAncestry: boolean, config: AxiosRequestConfig) => {
  const response: AxiosResponse<WorkspacesRead200Response> = await composedWorkspacesApi.workspacesRead(uuid, includeAncestry, config);
  return response;
};

export const updateWorkspace = async (uuid: string, workspacesUpdateReq: WorkspacesUpdateWorkspaceRequest, config: AxiosRequestConfig) => {
  const response: AxiosResponse = await composedWorkspacesApi.workspacesUpdate(uuid, workspacesUpdateReq, config).catch((error) => {
    console.log(error);
    throw new Error(error);
  });
  return response;
};

export const patchWorkspace = async (uuid: string, workspacesPatchReq: WorkspacesPatchWorkspaceRequest, config: AxiosRequestConfig) => {
  const response: AxiosResponse = await composedWorkspacesApi.workspacesPatch(uuid, workspacesPatchReq, config);
  return response;
};
