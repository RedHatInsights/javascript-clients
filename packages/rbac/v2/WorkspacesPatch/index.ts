// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ProblemsProblem403, WorkspacesCreate401Response, WorkspacesCreate500Response, WorkspacesPatchWorkspaceRequest, WorkspacesPatchWorkspaceResponse, WorkspacesUpdate400Response } from '../types';


export type WorkspacesPatchParams = {
  /**
  * Unique identification
  * @type { string }
  * @memberof WorkspacesPatchApi
  */
  uuid: string,
  /**
  *
  * @type { WorkspacesPatchWorkspaceRequest }
  * @memberof WorkspacesPatchApi
  */
  workspacesPatchWorkspaceRequest: WorkspacesPatchWorkspaceRequest,
  options?: AxiosRequestConfig
}

const isWorkspacesPatchObjectParams = (params: [WorkspacesPatchParams] | unknown[]): params is [WorkspacesPatchParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'uuid') && Object.prototype.hasOwnProperty.call(params, 'workspacesPatchWorkspaceRequest')
}
/**
*
* @param {WorkspacesPatchParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const workspacesPatchParamCreator = async (...config: ([WorkspacesPatchParams] | [string, WorkspacesPatchWorkspaceRequest, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isWorkspacesPatchObjectParams(config) ? config[0] : ['uuid', 'workspacesPatchWorkspaceRequest', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as WorkspacesPatchParams;
    const { uuid, workspacesPatchWorkspaceRequest, options = {} } = params;
    const localVarPath = `/workspaces/{uuid}`
        .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PATCH' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: workspacesPatchWorkspaceRequest,
    };
}

export default workspacesPatchParamCreator;
