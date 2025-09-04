// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ProblemsProblem400, ProblemsProblem403, RoleBindingsListBySubject401Response, RoleBindingsListBySubject500Response, WorkspacesCreateWorkspaceRequest, WorkspacesCreateWorkspaceResponse } from '../types';


export type WorkspacesCreateParams = {
  /**
  *
  * @type { WorkspacesCreateWorkspaceRequest }
  * @memberof WorkspacesCreateApi
  */
  workspacesCreateWorkspaceRequest: WorkspacesCreateWorkspaceRequest,
  options?: AxiosRequestConfig
}

export type WorkspacesCreateReturnType = AxiosPromise<WorkspacesCreateWorkspaceResponse>;

const isWorkspacesCreateObjectParams = (params: [WorkspacesCreateParams] | unknown[]): params is [WorkspacesCreateParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'workspacesCreateWorkspaceRequest')
}
/**
* Create workspace in tenant
* @summary Create workspace in tenant
* @param {WorkspacesCreateParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const workspacesCreateParamCreator = async (...config: ([WorkspacesCreateParams] | [WorkspacesCreateWorkspaceRequest, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isWorkspacesCreateObjectParams(config) ? config[0] : ['workspacesCreateWorkspaceRequest', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as WorkspacesCreateParams;
    const { workspacesCreateWorkspaceRequest, options = {} } = params;
    const localVarPath = `/workspaces/`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: workspacesCreateWorkspaceRequest,
    };
}

export default workspacesCreateParamCreator;
