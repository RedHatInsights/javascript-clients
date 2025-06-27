// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ProblemsProblem400, ProblemsProblem403, ProblemsProblem404, WorkspacesList401Response, WorkspacesList500Response, WorkspacesMoveWorkspaceRequest, WorkspacesMoveWorkspaceResponse } from '../types';


export type WorkspacesMoveParams = {
  /**
  * Unique identification of the workspace to move
  * @type { string }
  * @memberof WorkspacesMoveApi
  */
  id: string,
  /**
  *
  * @type { WorkspacesMoveWorkspaceRequest }
  * @memberof WorkspacesMoveApi
  */
  workspacesMoveWorkspaceRequest: WorkspacesMoveWorkspaceRequest,
  options?: AxiosRequestConfig
}

export type WorkspacesMoveReturnType = AxiosPromise<WorkspacesMoveWorkspaceResponse>;

const isWorkspacesMoveObjectParams = (params: [WorkspacesMoveParams] | unknown[]): params is [WorkspacesMoveParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id') && Object.prototype.hasOwnProperty.call(params, 'workspacesMoveWorkspaceRequest')
}
/**
* Move a workspace to a new parent.
* @summary Move a workspace to a new parent.
* @param {WorkspacesMoveParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const workspacesMoveParamCreator = async (...config: ([WorkspacesMoveParams] | [string, WorkspacesMoveWorkspaceRequest, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isWorkspacesMoveObjectParams(config) ? config[0] : ['id', 'workspacesMoveWorkspaceRequest', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as WorkspacesMoveParams;
    const { id, workspacesMoveWorkspaceRequest, options = {} } = params;
    const localVarPath = `/workspaces/{id}/move/`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
        serializeData: workspacesMoveWorkspaceRequest,
    };
}

export default workspacesMoveParamCreator;
