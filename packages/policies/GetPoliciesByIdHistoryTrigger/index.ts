// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PagedResponseOfHistoryItem } from '../types';


export type GetPoliciesByIdHistoryTriggerParams = {
  /**
  * UUID of the policy
  * @type { string }
  * @memberof GetPoliciesByIdHistoryTriggerApi
  */
  id: string,
  /**
  * Page number, starts 0, if not specified uses 0.
  * @type { number }
  * @memberof GetPoliciesByIdHistoryTriggerApi
  */
  offset?: number,
  /**
  * Number of items per page, if not specified uses 50. Maximum value is 200.
  * @type { number }
  * @memberof GetPoliciesByIdHistoryTriggerApi
  */
  limit?: number,
  /**
  * Filtering history entries by the host name depending on the Filter operator used.
  * @type { string }
  * @memberof GetPoliciesByIdHistoryTriggerApi
  */
  filterName?: string,
  /**
  * Operations used with the name filter
  * @type { GetPoliciesByIdHistoryTriggerFilteropNameEnum }
  * @memberof GetPoliciesByIdHistoryTriggerApi
  */
  filteropName?: GetPoliciesByIdHistoryTriggerFilteropNameEnum,
  /**
  * Filtering history entries by the id depending on the Filter operator used.
  * @type { string }
  * @memberof GetPoliciesByIdHistoryTriggerApi
  */
  filterId?: string,
  /**
  * Operations used with the name filter
  * @type { GetPoliciesByIdHistoryTriggerFilteropIdEnum }
  * @memberof GetPoliciesByIdHistoryTriggerApi
  */
  filteropId?: GetPoliciesByIdHistoryTriggerFilteropIdEnum,
  /**
  * Column to sort the results by
  * @type { GetPoliciesByIdHistoryTriggerSortColumnEnum }
  * @memberof GetPoliciesByIdHistoryTriggerApi
  */
  sortColumn?: GetPoliciesByIdHistoryTriggerSortColumnEnum,
  /**
  * Sort direction used
  * @type { GetPoliciesByIdHistoryTriggerSortDirectionEnum }
  * @memberof GetPoliciesByIdHistoryTriggerApi
  */
  sortDirection?: GetPoliciesByIdHistoryTriggerSortDirectionEnum,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const GetPoliciesByIdHistoryTriggerFilteropNameEnum = {
    Equal: 'equal',
    Like: 'like',
    NotEqual: 'not_equal'
} as const;
export type GetPoliciesByIdHistoryTriggerFilteropNameEnum = typeof GetPoliciesByIdHistoryTriggerFilteropNameEnum[keyof typeof GetPoliciesByIdHistoryTriggerFilteropNameEnum];
/**
  * @export
  * @enum {string}
  */
export const GetPoliciesByIdHistoryTriggerFilteropIdEnum = {
    Equal: 'equal',
    NotEqual: 'not_equal',
    Like: 'like'
} as const;
export type GetPoliciesByIdHistoryTriggerFilteropIdEnum = typeof GetPoliciesByIdHistoryTriggerFilteropIdEnum[keyof typeof GetPoliciesByIdHistoryTriggerFilteropIdEnum];
/**
  * @export
  * @enum {string}
  */
export const GetPoliciesByIdHistoryTriggerSortColumnEnum = {
    HostName: 'hostName',
    Ctime: 'ctime'
} as const;
export type GetPoliciesByIdHistoryTriggerSortColumnEnum = typeof GetPoliciesByIdHistoryTriggerSortColumnEnum[keyof typeof GetPoliciesByIdHistoryTriggerSortColumnEnum];
/**
  * @export
  * @enum {string}
  */
export const GetPoliciesByIdHistoryTriggerSortDirectionEnum = {
    Asc: 'asc',
    Desc: 'desc'
} as const;
export type GetPoliciesByIdHistoryTriggerSortDirectionEnum = typeof GetPoliciesByIdHistoryTriggerSortDirectionEnum[keyof typeof GetPoliciesByIdHistoryTriggerSortDirectionEnum];

export type GetPoliciesByIdHistoryTriggerReturnType = AxiosPromise<PagedResponseOfHistoryItem>;

const isGetPoliciesByIdHistoryTriggerObjectParams = (params: [GetPoliciesByIdHistoryTriggerParams] | unknown[]): params is [GetPoliciesByIdHistoryTriggerParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id') && true && true && true && true && true && true && true && true
}
/**
*
* @summary Retrieve the trigger history of a single policy
* @param {GetPoliciesByIdHistoryTriggerParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getPoliciesByIdHistoryTriggerParamCreator = async (...config: ([GetPoliciesByIdHistoryTriggerParams] | [string, number, number, string, GetPoliciesByIdHistoryTriggerFilteropNameEnum, string, GetPoliciesByIdHistoryTriggerFilteropIdEnum, GetPoliciesByIdHistoryTriggerSortColumnEnum, GetPoliciesByIdHistoryTriggerSortDirectionEnum, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isGetPoliciesByIdHistoryTriggerObjectParams(config) ? config[0] : ['id', 'offset', 'limit', 'filterName', 'filteropName', 'filterId', 'filteropId', 'sortColumn', 'sortDirection', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetPoliciesByIdHistoryTriggerParams;
    const { id, offset, limit, filterName, filteropName, filterId, filteropId, sortColumn, sortDirection, options = {} } = params;
    const localVarPath = `/policies/{id}/history/trigger`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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

    if (filterName !== undefined) {
        localVarQueryParameter['filter[name]'] = filterName;
    }

    if (filteropName !== undefined) {
        localVarQueryParameter['filter:op[name]'] = filteropName;
    }

    if (filterId !== undefined) {
        localVarQueryParameter['filter[id]'] = filterId;
    }

    if (filteropId !== undefined) {
        localVarQueryParameter['filter:op[id]'] = filteropId;
    }

    if (sortColumn !== undefined) {
        localVarQueryParameter['sortColumn'] = sortColumn;
    }

    if (sortDirection !== undefined) {
        localVarQueryParameter['sortDirection'] = sortDirection;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default getPoliciesByIdHistoryTriggerParamCreator;
