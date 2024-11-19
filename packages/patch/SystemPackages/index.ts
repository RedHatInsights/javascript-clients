// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersSystemPackageResponse, UtilsErrorResponse } from '../types';


export type SystemPackagesParams = {
  /**
  * Inventory ID
  * @type { string }
  * @memberof SystemPackagesApi
  */
  inventoryId: string,
  /**
  * Limit for paging
  * @type { number }
  * @memberof SystemPackagesApi
  */
  limit?: number,
  /**
  * Offset for paging
  * @type { number }
  * @memberof SystemPackagesApi
  */
  offset?: number,
  /**
  * Find matching text
  * @type { string }
  * @memberof SystemPackagesApi
  */
  search?: string,
  /**
  * Filter
  * @type { string }
  * @memberof SystemPackagesApi
  */
  filterName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof SystemPackagesApi
  */
  filterDescription?: string,
  /**
  * Filter
  * @type { string }
  * @memberof SystemPackagesApi
  */
  filterEvra?: string,
  /**
  * Filter
  * @type { string }
  * @memberof SystemPackagesApi
  */
  filterSummary?: string,
  /**
  * Filter
  * @type { boolean }
  * @memberof SystemPackagesApi
  */
  filterUpdatable?: boolean,
  /**
  * Filter
  * @type { string }
  * @memberof SystemPackagesApi
  */
  filterUpdateStatus?: string,
  options?: AxiosRequestConfig
}

export type SystemPackagesReturnType = AxiosPromise<ControllersSystemPackageResponse>;

const isSystemPackagesObjectParams = (params: [SystemPackagesParams] | unknown[]): params is [SystemPackagesParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'inventoryId') && true && true && true && true && true && true && true && true && true
}
/**
* Show me details about a system packages by given inventory id
* @summary Show me details about a system packages by given inventory id
* @param {SystemPackagesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const systemPackagesParamCreator = async (...config: ([SystemPackagesParams] | [string, number, number, string, string, string, string, string, boolean, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isSystemPackagesObjectParams(config) ? config[0] : ['inventoryId', 'limit', 'offset', 'search', 'filterName', 'filterDescription', 'filterEvra', 'filterSummary', 'filterUpdatable', 'filterUpdateStatus', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as SystemPackagesParams;
    const { inventoryId, limit, offset, search, filterName, filterDescription, filterEvra, filterSummary, filterUpdatable, filterUpdateStatus, options = {} } = params;
    const localVarPath = `/systems/{inventory_id}/packages`
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

    if (search !== undefined) {
        localVarQueryParameter['search'] = search;
    }

    if (filterName !== undefined) {
        localVarQueryParameter['filter[name]'] = filterName;
    }

    if (filterDescription !== undefined) {
        localVarQueryParameter['filter[description]'] = filterDescription;
    }

    if (filterEvra !== undefined) {
        localVarQueryParameter['filter[evra]'] = filterEvra;
    }

    if (filterSummary !== undefined) {
        localVarQueryParameter['filter[summary]'] = filterSummary;
    }

    if (filterUpdatable !== undefined) {
        localVarQueryParameter['filter[updatable]'] = filterUpdatable;
    }

    if (filterUpdateStatus !== undefined) {
        localVarQueryParameter['filter[update_status]'] = filterUpdateStatus;
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

export default systemPackagesParamCreator;
