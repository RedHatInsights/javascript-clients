// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ProblemsProblem403, ProblemsWorkspaceProblem400WorkspaceNotEmpty, WorkspacesList401Response, WorkspacesList500Response } from '../types';


export type WorkspacesDeleteParams = {
  /**
  * Unique identification
  * @type { string }
  * @memberof WorkspacesDeleteApi
  */
  id: string,
  options?: AxiosRequestConfig
}

const isWorkspacesDeleteObjectParams = (params: [WorkspacesDeleteParams] | unknown[]): params is [WorkspacesDeleteParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id')
}
/**
* Delete a workspace
* @summary Delete the workspace
* @param {WorkspacesDeleteParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const workspacesDeleteParamCreator = async (...config: ([WorkspacesDeleteParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isWorkspacesDeleteObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as WorkspacesDeleteParams;
    const { id, options = {} } = params;
    const localVarPath = `/workspaces/{id}/`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'DELETE' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default workspacesDeleteParamCreator;
