// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PagedResponseOfPolicy } from '../types';


export type GetPoliciesParams = {
  /**
  * Page number, starts 0, if not specified uses 0.
  * @type { number }
  * @memberof GetPoliciesApi
  */
  offset?: number,
  /**
  * Number of items per page, if not specified uses 50. -1 can be used to specify an unlimited page, when specified it ignores the offset
  * @type { number }
  * @memberof GetPoliciesApi
  */
  limit?: number,
  /**
  * Column to sort the results by
  * @type { GetPoliciesSortColumnEnum }
  * @memberof GetPoliciesApi
  */
  sortColumn?: GetPoliciesSortColumnEnum,
  /**
  * Sort direction used
  * @type { GetPoliciesSortDirectionEnum }
  * @memberof GetPoliciesApi
  */
  sortDirection?: GetPoliciesSortDirectionEnum,
  /**
  * Filtering policies by the name depending on the Filter operator used.
  * @type { string }
  * @memberof GetPoliciesApi
  */
  filterName?: string,
  /**
  * Operations used with the filter
  * @type { GetPoliciesFilteropNameEnum }
  * @memberof GetPoliciesApi
  */
  filteropName?: GetPoliciesFilteropNameEnum,
  /**
  * Filtering policies by the description depending on the Filter operator used.
  * @type { string }
  * @memberof GetPoliciesApi
  */
  filterDescription?: string,
  /**
  * Operations used with the filter
  * @type { GetPoliciesFilteropDescriptionEnum }
  * @memberof GetPoliciesApi
  */
  filteropDescription?: GetPoliciesFilteropDescriptionEnum,
  /**
  * Filtering policies by the is_enabled field.Defaults to true if no operand is given.
  * @type { GetPoliciesFilterIsEnabledEnum }
  * @memberof GetPoliciesApi
  */
  filterIsEnabled?: GetPoliciesFilterIsEnabledEnum,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const GetPoliciesSortColumnEnum = {
    Name: 'name',
    Description: 'description',
    IsEnabled: 'is_enabled',
    Mtime: 'mtime',
    LastTriggered: 'last_triggered'
} as const;
export type GetPoliciesSortColumnEnum = typeof GetPoliciesSortColumnEnum[keyof typeof GetPoliciesSortColumnEnum];
/**
  * @export
  * @enum {string}
  */
export const GetPoliciesSortDirectionEnum = {
    Asc: 'asc',
    Desc: 'desc'
} as const;
export type GetPoliciesSortDirectionEnum = typeof GetPoliciesSortDirectionEnum[keyof typeof GetPoliciesSortDirectionEnum];
/**
  * @export
  * @enum {string}
  */
export const GetPoliciesFilteropNameEnum = {
    Equal: 'equal',
    Like: 'like',
    Ilike: 'ilike',
    NotEqual: 'not_equal'
} as const;
export type GetPoliciesFilteropNameEnum = typeof GetPoliciesFilteropNameEnum[keyof typeof GetPoliciesFilteropNameEnum];
/**
  * @export
  * @enum {string}
  */
export const GetPoliciesFilteropDescriptionEnum = {
    Equal: 'equal',
    Like: 'like',
    Ilike: 'ilike',
    NotEqual: 'not_equal'
} as const;
export type GetPoliciesFilteropDescriptionEnum = typeof GetPoliciesFilteropDescriptionEnum[keyof typeof GetPoliciesFilteropDescriptionEnum];
/**
  * @export
  * @enum {string}
  */
export const GetPoliciesFilterIsEnabledEnum = {
    True: 'true',
    False: 'false'
} as const;
export type GetPoliciesFilterIsEnabledEnum = typeof GetPoliciesFilterIsEnabledEnum[keyof typeof GetPoliciesFilterIsEnabledEnum];

const isGetPoliciesObjectParams = (params: [GetPoliciesParams] | unknown[]): params is [GetPoliciesParams] => {
  return params.length === 1 && true && true && true && true && true && true && true && true && true
}
/**
*
* @summary Return all policies for a given account
* @param {GetPoliciesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getPoliciesParamCreator = async (...config: ([GetPoliciesParams] | [number, number, GetPoliciesSortColumnEnum, GetPoliciesSortDirectionEnum, string, GetPoliciesFilteropNameEnum, string, GetPoliciesFilteropDescriptionEnum, GetPoliciesFilterIsEnabledEnum, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isGetPoliciesObjectParams(config) ? config[0] : ['offset', 'limit', 'sortColumn', 'sortDirection', 'filterName', 'filteropName', 'filterDescription', 'filteropDescription', 'filterIsEnabled', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetPoliciesParams;
    const { offset, limit, sortColumn, sortDirection, filterName, filteropName, filterDescription, filteropDescription, filterIsEnabled, options = {} } = params;
    const localVarPath = `/policies`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (sortColumn !== undefined) {
        localVarQueryParameter['sortColumn'] = sortColumn;
    }

    if (sortDirection !== undefined) {
        localVarQueryParameter['sortDirection'] = sortDirection;
    }

    if (filterName !== undefined) {
        localVarQueryParameter['filter[name]'] = filterName;
    }

    if (filteropName !== undefined) {
        localVarQueryParameter['filter:op[name]'] = filteropName;
    }

    if (filterDescription !== undefined) {
        localVarQueryParameter['filter[description]'] = filterDescription;
    }

    if (filteropDescription !== undefined) {
        localVarQueryParameter['filter:op[description]'] = filteropDescription;
    }

    if (filterIsEnabled !== undefined) {
        localVarQueryParameter['filter[is_enabled]'] = filterIsEnabled;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default getPoliciesParamCreator;
