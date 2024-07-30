// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ProblemsProblem403, WorkspacesCreate401Response, WorkspacesCreate500Response, WorkspacesUpdate400Response, WorkspacesUpdateWorkspaceRequest, WorkspacesUpdateWorkspaceResponse } from '../types';


export type WorkspacesUpdateParams = {
  /**
  * Unique identification
  * @type { string }
  * @memberof WorkspacesUpdateApi
  */
  uuid: string,
  /**
  *
  * @type { WorkspacesUpdateWorkspaceRequest }
  * @memberof WorkspacesUpdateApi
  */
  workspacesUpdateWorkspaceRequest: WorkspacesUpdateWorkspaceRequest,
  options?: AxiosRequestConfig
}

const isWorkspacesUpdateObjectParams = (params: [WorkspacesUpdateParams] | unknown[]): params is [WorkspacesUpdateParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'uuid') && Object.prototype.hasOwnProperty.call(params, 'workspacesUpdateWorkspaceRequest')
}
/**
* Edit a workspace
* @summary Edit the workspace name or description
* @param {WorkspacesUpdateParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const workspacesUpdateParamCreator = async (...config: ([WorkspacesUpdateParams] | [string, WorkspacesUpdateWorkspaceRequest, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isWorkspacesUpdateObjectParams(config) ? config[0] : ['uuid', 'workspacesUpdateWorkspaceRequest', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as WorkspacesUpdateParams;
    const { uuid, workspacesUpdateWorkspaceRequest, options = {} } = params;
    const localVarPath = `/workspaces/{uuid}`
        .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PUT' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: workspacesUpdateWorkspaceRequest,
    };
}

export default workspacesUpdateParamCreator;
