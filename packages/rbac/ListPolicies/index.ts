// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PolicyPagination } from '../types';


export type ListPoliciesParams = {
  /**
  * Parameter for selecting the amount of data returned.
  * @type { number }
  * @memberof ListPoliciesApi
  */
  limit?: number,
  /**
  * Parameter for selecting the offset of data.
  * @type { number }
  * @memberof ListPoliciesApi
  */
  offset?: number,
  /**
  * Parameter for filtering resource by name using string contains search.
  * @type { string }
  * @memberof ListPoliciesApi
  */
  name?: string,
  /**
  * Parameter for filtering resource by scope.
  * @type { ListPoliciesScopeEnum }
  * @memberof ListPoliciesApi
  */
  scope?: ListPoliciesScopeEnum,
  /**
  * Parameter for filtering resource by group name using string contains search.
  * @type { string }
  * @memberof ListPoliciesApi
  */
  groupName?: string,
  /**
  * Parameter for filtering resource by group uuid using UUID exact match.
  * @type { string }
  * @memberof ListPoliciesApi
  */
  groupUuid?: string,
  /**
  * Parameter for ordering policies by value. For inverse ordering, supply \'-\' before the param value, such as: ?order_by=-name
  * @type { ListPoliciesOrderByEnum }
  * @memberof ListPoliciesApi
  */
  orderBy?: ListPoliciesOrderByEnum,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ListPoliciesScopeEnum = {
    OrgId: 'org_id',
    Principal: 'principal'
} as const;
export type ListPoliciesScopeEnum = typeof ListPoliciesScopeEnum[keyof typeof ListPoliciesScopeEnum];
/**
  * @export
  * @enum {string}
  */
export const ListPoliciesOrderByEnum = {
    Name: 'name',
    Modified: 'modified'
} as const;
export type ListPoliciesOrderByEnum = typeof ListPoliciesOrderByEnum[keyof typeof ListPoliciesOrderByEnum];

const isListPoliciesObjectParams = (params: [ListPoliciesParams] | unknown[]): params is [ListPoliciesParams] => {
  return params.length === 1 && true && true && true && true && true && true && true
}
/**
* By default, responses are sorted in ascending order by policy name
* @summary List the policies in the tenant
* @param {ListPoliciesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listPoliciesParamCreator = async (...config: ([ListPoliciesParams] | [number, number, string, ListPoliciesScopeEnum, string, string, ListPoliciesOrderByEnum, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListPoliciesObjectParams(config) ? config[0] : ['limit', 'offset', 'name', 'scope', 'groupName', 'groupUuid', 'orderBy', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListPoliciesParams;
    const { limit, offset, name, scope, groupName, groupUuid, orderBy, options = {} } = params;
    const localVarPath = `/policies/`;
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

    if (name !== undefined) {
        localVarQueryParameter['name'] = name;
    }

    if (scope !== undefined) {
        localVarQueryParameter['scope'] = scope;
    }

    if (groupName !== undefined) {
        localVarQueryParameter['group_name'] = groupName;
    }

    if (groupUuid !== undefined) {
        localVarQueryParameter['group_uuid'] = groupUuid;
    }

    if (orderBy !== undefined) {
        localVarQueryParameter['order_by'] = orderBy;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        auth:[
        {
        // authentication basic_auth required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };
}

export default listPoliciesParamCreator;
