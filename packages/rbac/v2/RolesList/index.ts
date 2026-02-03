// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ProblemsProblem403, RoleBindingsCreate401Response, RoleBindingsCreate500Response, RolesList200Response } from '../types';


export type RolesListParams = {
  /**
  *
  * @type { number }
  * @memberof RolesListApi
  */
  limit?: number,
  /**
  * Cursor for cursor-based pagination.
  * @type { string }
  * @memberof RolesListApi
  */
  cursor?: string,
  /**
  * Filter by role name using case sensitive exact match.
  * @type { string }
  * @memberof RolesListApi
  */
  name?: string,
  /**
  * Control which fields are included in the response to optimize payload size.
  * @type { string }
  * @memberof RolesListApi
  */
  fields?: string,
  /**
  * Sort by specified field(s), prefix with \'-\' for descending order. Allowed fields: name, last_modified.
  * @type { string }
  * @memberof RolesListApi
  */
  orderBy?: string,
  options?: AxiosRequestConfig
}

export type RolesListReturnType = RolesList200Response;

const isRolesListObjectParams = (params: [RolesListParams] | unknown[]): params is [RolesListParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* List the roles for a tenant
* @summary List the roles for a tenant
* @param {RolesListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const rolesListParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([RolesListParams] | [number, string, string, string, string, AxiosRequestConfig])) => {
    const params = isRolesListObjectParams(config) ? config[0] : ['limit', 'cursor', 'name', 'fields', 'orderBy', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RolesListParams;
    const { limit, cursor, name, fields, orderBy, options = {} } = params;
    const localVarPath = `/roles/`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (cursor !== undefined) {
        localVarQueryParameter['cursor'] = cursor;
    }

    if (name !== undefined) {
        localVarQueryParameter['name'] = name;
    }

    if (fields !== undefined) {
        localVarQueryParameter['fields'] = fields;
    }

    if (orderBy !== undefined) {
        localVarQueryParameter['order_by'] = orderBy;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<RolesListReturnType>(Promise.resolve(args));
}

export default rolesListParamCreator;
