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
  *
  * @type { number }
  * @memberof WorkspacesListApi
  */
  offset?: number,
  /**
  * Cursor for cursor-based pagination. When provided, offset parameter is ignored.
  * @type { string }
  * @memberof WorkspacesListApi
  */
  cursor?: string,
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

export type WorkspacesListReturnType = AxiosPromise<WorkspacesWorkspaceListResponse>;

const isWorkspacesListObjectParams = (params: [WorkspacesListParams] | unknown[]): params is [WorkspacesListParams] => {
  return params.length === 1 && true && true && true && true && true
}
/**
* List workspaces in a tenant
* @summary List workspaces in a tenant
* @param {WorkspacesListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const workspacesListParamCreator = async (...config: ([WorkspacesListParams] | [number, number, string, WorkspacesWorkspaceTypesQueryParam, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isWorkspacesListObjectParams(config) ? config[0] : ['limit', 'offset', 'cursor', 'type', 'name', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as WorkspacesListParams;
    const { limit, offset, cursor, type, name, options = {} } = params;
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

    if (cursor !== undefined) {
        localVarQueryParameter['cursor'] = cursor;
    }

    if (type !== undefined) {
        localVarQueryParameter['type'] = type;
    }

    if (name !== undefined) {
        localVarQueryParameter['name'] = name;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default workspacesListParamCreator;
