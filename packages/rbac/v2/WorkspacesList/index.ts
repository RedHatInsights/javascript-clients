// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ProblemsProblem403, RoleBindingsListBySubject401Response, RoleBindingsListBySubject500Response, WorkspacesWorkspaceListResponse, WorkspacesWorkspaceTypesQueryParam } from '../types';


export type WorkspacesListParams = {
  /**
  *
  * @type { number }
  * @memberof WorkspacesListApi
  */
  limit?: number,
  /**
  * Offset for offset-based pagination.
  * @type { number }
  * @memberof WorkspacesListApi
  */
  offset?: number,
  /**
  * Defaults to all when param is not supplied.
  * @type { WorkspacesWorkspaceTypesQueryParam }
  * @memberof WorkspacesListApi
  */
  type?: WorkspacesWorkspaceTypesQueryParam,
  /**
  * Case sensitive exact match of workspace by name.
  * @type { string }
  * @memberof WorkspacesListApi
  */
  name?: string,
  options?: AxiosRequestConfig
}

export type WorkspacesListReturnType = WorkspacesWorkspaceListResponse;

const isWorkspacesListObjectParams = (params: [WorkspacesListParams] | unknown[]): params is [WorkspacesListParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* List workspaces in a tenant
* @summary List workspaces in a tenant
* @param {WorkspacesListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const workspacesListParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([WorkspacesListParams] | [number, number, WorkspacesWorkspaceTypesQueryParam, string, AxiosRequestConfig])) => {
    const params = isWorkspacesListObjectParams(config) ? config[0] : ['limit', 'offset', 'type', 'name', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as WorkspacesListParams;
    const { limit, offset, type, name, options = {} } = params;
    const localVarPath = `/workspaces/`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }

    if (type !== undefined) {
        localVarQueryParameter['type'] = type;
    }

    if (name !== undefined) {
        localVarQueryParameter['name'] = name;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<WorkspacesListReturnType>(Promise.resolve(args));
}

export default workspacesListParamCreator;
