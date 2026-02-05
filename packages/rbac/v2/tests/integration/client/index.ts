import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { RbacClient } from '../../../api';
import {
  WorkspacesCreateWorkspaceRequest,
  WorkspacesCreateWorkspaceResponse,
  WorkspacesWorkspaceTypesQueryParam,
  WorkspacesWorkspaceListResponse,
  WorkspacesRead200Response,
  WorkspacesUpdateWorkspaceRequest,
  WorkspacesPatchWorkspaceRequest,
} from '../../../types';

export const WORKSPACES_API_BASE = 'http://localhost:3002/api/rbac/v2';
export const config = new Configuration();
export const composedWorkspacesApi = RbacClient(WORKSPACES_API_BASE);

// --- convenience wrappers for workspace operations ---

export const createWorkspace = async (
  parentId: string,
  name: string,
  description: string,
  config: AxiosRequestConfig
): Promise<AxiosResponse<WorkspacesCreateWorkspaceResponse>> => {
  const req: WorkspacesCreateWorkspaceRequest = {
    parent_id: parentId,
    name: name,
    description: description,
  };
  const response = await composedWorkspacesApi.workspacesCreate(req, config);
  return response;
};

export const deleteWorkspace = async (workspaceId: string, config: AxiosRequestConfig): Promise<AxiosResponse<void>> => {
  const response = await composedWorkspacesApi.workspacesDelete(workspaceId, config);
  return response;
};

export const listWorkspaces = async (
  limit: number,
  offset: number,
  query: WorkspacesWorkspaceTypesQueryParam,
  config: AxiosRequestConfig
): Promise<AxiosResponse<WorkspacesWorkspaceListResponse>> => {
  const response = await composedWorkspacesApi
    .workspacesList(limit, offset, query, config)
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
  return response;
};

export const readWorkspace = async (
  uuid: string,
  includeAncestry: boolean,
  config: AxiosRequestConfig
): Promise<AxiosResponse<WorkspacesRead200Response>> => {
  const response = await composedWorkspacesApi.workspacesRead(uuid, includeAncestry, config);
  return response;
};

export const updateWorkspace = async (
  uuid: string,
  workspacesUpdateReq: WorkspacesUpdateWorkspaceRequest,
  config: AxiosRequestConfig
): Promise<AxiosResponse<WorkspacesRead200Response>> => {
  const response = await composedWorkspacesApi.workspacesUpdate(uuid, workspacesUpdateReq, config).catch((error) => {
    console.log(error);
    throw new Error(error);
  });
  return response;
};

export const patchWorkspace = async (
  uuid: string,
  workspacesPatchReq: WorkspacesPatchWorkspaceRequest,
  config: AxiosRequestConfig
): Promise<AxiosResponse<WorkspacesRead200Response>> => {
  const response = await composedWorkspacesApi.workspacesPatch(uuid, workspacesPatchReq, config);
  return response;
};
