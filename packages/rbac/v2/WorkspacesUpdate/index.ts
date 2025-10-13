// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ProblemsProblem403, RoleBindingsListBySubject401Response, RoleBindingsListBySubject500Response, WorkspacesUpdate400Response, WorkspacesUpdateWorkspaceRequest, WorkspacesUpdateWorkspaceResponse } from '../types';


export type WorkspacesUpdateParams = {
  /**
  * Unique identification
  * @type { string }
  * @memberof WorkspacesUpdateApi
  */
  id: string,
  /**
  *
  * @type { WorkspacesUpdateWorkspaceRequest }
  * @memberof WorkspacesUpdateApi
  */
  workspacesUpdateWorkspaceRequest: WorkspacesUpdateWorkspaceRequest,
  options?: AxiosRequestConfig
}

export type WorkspacesUpdateReturnType = WorkspacesUpdateWorkspaceResponse;

const isWorkspacesUpdateObjectParams = (params: [WorkspacesUpdateParams] | unknown[]): params is [WorkspacesUpdateParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id') && Object.prototype.hasOwnProperty.call(params[0], 'workspacesUpdateWorkspaceRequest')
  }
  return false
}
/**
* Edit a workspace
* @summary Edit the workspace name or description
* @param {WorkspacesUpdateParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const workspacesUpdateParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([WorkspacesUpdateParams] | [string, WorkspacesUpdateWorkspaceRequest, AxiosRequestConfig])) => {
    const params = isWorkspacesUpdateObjectParams(config) ? config[0] : ['id', 'workspacesUpdateWorkspaceRequest', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as WorkspacesUpdateParams;
    const { id, workspacesUpdateWorkspaceRequest, options = {} } = params;
    const localVarPath = `/workspaces/{id}/`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PUT' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: workspacesUpdateWorkspaceRequest,
    };

    return sendRequest<WorkspacesUpdateReturnType>(Promise.resolve(args));
}

export default workspacesUpdateParamCreator;
