// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ProblemsProblem403, ProblemsProblem404, WorkspacesCreate401Response, WorkspacesCreate500Response, WorkspacesReadWorkspaceResponse } from '../types';


export type WorkspacesReadParams = {
  /**
  * Unique identification
  * @type { string }
  * @memberof WorkspacesReadApi
  */
  uuid: string,
  options?: AxiosRequestConfig
}

const isWorkspacesReadObjectParams = (params: [WorkspacesReadParams] | unknown[]): params is [WorkspacesReadParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'uuid')
}
/**
* Get a workspace in tenant
* @summary Get a workspace in tenant
* @param {WorkspacesReadParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const workspacesReadParamCreator = async (...config: ([WorkspacesReadParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isWorkspacesReadObjectParams(config) ? config[0] : ['uuid', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as WorkspacesReadParams;
    const { uuid, options = {} } = params;
    const localVarPath = `/workspaces/{uuid}`
        .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default workspacesReadParamCreator;
