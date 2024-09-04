// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersIDsStatusResponse, UtilsErrorResponse } from '../types';


export type ListSystemAdvisoriesIdsParams = {
  /**
  * Inventory ID
  * @type { string }
  * @memberof ListSystemAdvisoriesIdsApi
  */
  inventoryId: string,
  /**
  * Limit for paging
  * @type { number }
  * @memberof ListSystemAdvisoriesIdsApi
  */
  limit?: number,
  /**
  * Offset for paging
  * @type { number }
  * @memberof ListSystemAdvisoriesIdsApi
  */
  offset?: number,
  /**
  * Sort field
  * @type { ListSystemAdvisoriesIdsSortEnum }
  * @memberof ListSystemAdvisoriesIdsApi
  */
  sort?: ListSystemAdvisoriesIdsSortEnum,
  /**
  * Find matching text
  * @type { string }
  * @memberof ListSystemAdvisoriesIdsApi
  */
  search?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemAdvisoriesIdsApi
  */
  filterId?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemAdvisoriesIdsApi
  */
  filterDescription?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemAdvisoriesIdsApi
  */
  filterPublicDate?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemAdvisoriesIdsApi
  */
  filterSynopsis?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemAdvisoriesIdsApi
  */
  filterAdvisoryType?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemAdvisoriesIdsApi
  */
  filterAdvisoryTypeName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemAdvisoriesIdsApi
  */
  filterSeverity?: string,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ListSystemAdvisoriesIdsSortEnum = {
    Id: 'id',
    Name: 'name',
    Type: 'type',
    Synopsis: 'synopsis',
    PublicDate: 'public_date'
} as const;
export type ListSystemAdvisoriesIdsSortEnum = typeof ListSystemAdvisoriesIdsSortEnum[keyof typeof ListSystemAdvisoriesIdsSortEnum];

const isListSystemAdvisoriesIdsObjectParams = (params: [ListSystemAdvisoriesIdsParams] | unknown[]): params is [ListSystemAdvisoriesIdsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'inventoryId') && true && true && true && true && true && true && true && true && true && true && true
}
/**
* Show me advisories for a system by given inventory id
* @summary Show me advisories for a system by given inventory id
* @param {ListSystemAdvisoriesIdsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listSystemAdvisoriesIdsParamCreator = async (...config: ([ListSystemAdvisoriesIdsParams] | [string, number, number, ListSystemAdvisoriesIdsSortEnum, string, string, string, string, string, string, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListSystemAdvisoriesIdsObjectParams(config) ? config[0] : ['inventoryId', 'limit', 'offset', 'sort', 'search', 'filterId', 'filterDescription', 'filterPublicDate', 'filterSynopsis', 'filterAdvisoryType', 'filterAdvisoryTypeName', 'filterSeverity', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListSystemAdvisoriesIdsParams;
    const { inventoryId, limit, offset, sort, search, filterId, filterDescription, filterPublicDate, filterSynopsis, filterAdvisoryType, filterAdvisoryTypeName, filterSeverity, options = {} } = params;
    const localVarPath = `/ids/systems/{inventory_id}/advisories`
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

export default listSystemAdvisoriesIdsParamCreator;
