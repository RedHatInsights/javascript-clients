// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersBaselinesResponse, UtilsErrorResponse } from '../types';


export type ListBaselineParams = {
  /**
  * Limit for paging
  * @type { number }
  * @memberof ListBaselineApi
  */
  limit?: number,
  /**
  * Offset for paging
  * @type { number }
  * @memberof ListBaselineApi
  */
  offset?: number,
  /**
  * Sort field
  * @type { ListBaselineSortEnum }
  * @memberof ListBaselineApi
  */
  sort?: ListBaselineSortEnum,
  /**
  * Find matching text
  * @type { string }
  * @memberof ListBaselineApi
  */
  search?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListBaselineApi
  */
  filterId?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListBaselineApi
  */
  filterName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListBaselineApi
  */
  filterSystems?: string,
  /**
  * Tag filter
  * @type { Array<string> }
  * @memberof ListBaselineApi
  */
  tags?: Array<string>,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ListBaselineSortEnum = {
    Id: 'id',
    Name: 'name',
    Systems: 'systems',
    Published: 'published',
    LastEdited: 'last_edited',
    Creator: 'creator'
} as const;
export type ListBaselineSortEnum = typeof ListBaselineSortEnum[keyof typeof ListBaselineSortEnum];

const isListBaselineObjectParams = (params: [ListBaselineParams] | unknown[]): params is [ListBaselineParams] => {
  return params.length === 1 && true && true && true && true && true && true && true && true
}
/**
* Show me all baselines for all my systems
* @summary Show me all baselines for all my systems
* @param {ListBaselineParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listBaselineParamCreator = async (...config: ([ListBaselineParams] | [number, number, ListBaselineSortEnum, string, string, string, string, Array<string>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListBaselineObjectParams(config) ? config[0] : ['limit', 'offset', 'sort', 'search', 'filterId', 'filterName', 'filterSystems', 'tags', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListBaselineParams;
    const { limit, offset, sort, search, filterId, filterName, filterSystems, tags, options = {} } = params;
    const localVarPath = `/baselines`;
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

    if (filterName !== undefined) {
        localVarQueryParameter['filter[name]'] = filterName;
    }

    if (filterSystems !== undefined) {
        localVarQueryParameter['filter[systems]'] = filterSystems;
    }

    if (tags) {
        localVarQueryParameter['tags'] = tags;
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

export default listBaselineParamCreator;
