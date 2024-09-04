// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersSystemAdvisoriesResponse, UtilsErrorResponse } from '../types';


export type ListSystemAdvisoriesParams = {
  /**
  * Inventory ID
  * @type { string }
  * @memberof ListSystemAdvisoriesApi
  */
  inventoryId: string,
  /**
  * Limit for paging
  * @type { number }
  * @memberof ListSystemAdvisoriesApi
  */
  limit?: number,
  /**
  * Offset for paging
  * @type { number }
  * @memberof ListSystemAdvisoriesApi
  */
  offset?: number,
  /**
  * Sort field
  * @type { ListSystemAdvisoriesSortEnum }
  * @memberof ListSystemAdvisoriesApi
  */
  sort?: ListSystemAdvisoriesSortEnum,
  /**
  * Find matching text
  * @type { string }
  * @memberof ListSystemAdvisoriesApi
  */
  search?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemAdvisoriesApi
  */
  filterId?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemAdvisoriesApi
  */
  filterDescription?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemAdvisoriesApi
  */
  filterPublicDate?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemAdvisoriesApi
  */
  filterSynopsis?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemAdvisoriesApi
  */
  filterAdvisoryType?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemAdvisoriesApi
  */
  filterAdvisoryTypeName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemAdvisoriesApi
  */
  filterSeverity?: string,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ListSystemAdvisoriesSortEnum = {
    Id: 'id',
    Name: 'name',
    Type: 'type',
    Synopsis: 'synopsis',
    PublicDate: 'public_date'
} as const;
export type ListSystemAdvisoriesSortEnum = typeof ListSystemAdvisoriesSortEnum[keyof typeof ListSystemAdvisoriesSortEnum];

const isListSystemAdvisoriesObjectParams = (params: [ListSystemAdvisoriesParams] | unknown[]): params is [ListSystemAdvisoriesParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'inventoryId') && true && true && true && true && true && true && true && true && true && true && true
}
/**
* Show me advisories for a system by given inventory id
* @summary Show me advisories for a system by given inventory id
* @param {ListSystemAdvisoriesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listSystemAdvisoriesParamCreator = async (...config: ([ListSystemAdvisoriesParams] | [string, number, number, ListSystemAdvisoriesSortEnum, string, string, string, string, string, string, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListSystemAdvisoriesObjectParams(config) ? config[0] : ['inventoryId', 'limit', 'offset', 'sort', 'search', 'filterId', 'filterDescription', 'filterPublicDate', 'filterSynopsis', 'filterAdvisoryType', 'filterAdvisoryTypeName', 'filterSeverity', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListSystemAdvisoriesParams;
    const { inventoryId, limit, offset, sort, search, filterId, filterDescription, filterPublicDate, filterSynopsis, filterAdvisoryType, filterAdvisoryTypeName, filterSeverity, options = {} } = params;
    const localVarPath = `/systems/{inventory_id}/advisories`
        .replace(`{${"inventory_id"}}`, encodeURIComponent(String(inventoryId)));
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

    if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort;
    }

    if (search !== undefined) {
        localVarQueryParameter['search'] = search;
    }

    if (filterId !== undefined) {
        localVarQueryParameter['filter[id]'] = filterId;
    }

    if (filterDescription !== undefined) {
        localVarQueryParameter['filter[description]'] = filterDescription;
    }

    if (filterPublicDate !== undefined) {
        localVarQueryParameter['filter[public_date]'] = filterPublicDate;
    }

    if (filterSynopsis !== undefined) {
        localVarQueryParameter['filter[synopsis]'] = filterSynopsis;
    }

    if (filterAdvisoryType !== undefined) {
        localVarQueryParameter['filter[advisory_type]'] = filterAdvisoryType;
    }

    if (filterAdvisoryTypeName !== undefined) {
        localVarQueryParameter['filter[advisory_type_name]'] = filterAdvisoryTypeName;
    }

    if (filterSeverity !== undefined) {
        localVarQueryParameter['filter[severity]'] = filterSeverity;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        auth:[
        {
        // authentication RhIdentity required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };
}

export default listSystemAdvisoriesParamCreator;
