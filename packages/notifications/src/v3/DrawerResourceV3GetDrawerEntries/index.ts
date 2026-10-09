import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

import type { PageDrawerEntryPayload } from '../types';


export type DrawerResourceV3GetDrawerEntriesParams = {
  /**
  *
  * @type { any }
  * @memberof DrawerResourceV3GetDrawerEntriesApi
  */
  appIds?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceV3GetDrawerEntriesApi
  */
  bundleIds?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceV3GetDrawerEntriesApi
  */
  endDate?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceV3GetDrawerEntriesApi
  */
  eventTypeIds?: any,
  /**
  * Number of items per page, if not specified 20 is used
  * @type { any }
  * @memberof DrawerResourceV3GetDrawerEntriesApi
  */
  limit?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceV3GetDrawerEntriesApi
  */
  offset?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceV3GetDrawerEntriesApi
  */
  pageNumber?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceV3GetDrawerEntriesApi
  */
  readStatus?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceV3GetDrawerEntriesApi
  */
  sortBy?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceV3GetDrawerEntriesApi
  */
  sortBy2?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceV3GetDrawerEntriesApi
  */
  startDate?: any,
  options?: AxiosRequestConfig
}

export type DrawerResourceV3GetDrawerEntriesReturnType = PageDrawerEntryPayload;

const isDrawerResourceV3GetDrawerEntriesObjectParams = (params: [DrawerResourceV3GetDrawerEntriesParams] | unknown[]): params is [DrawerResourceV3GetDrawerEntriesParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Retrieve paginated drawer notifications with optional filtering and sorting. Available filters: `bundleIds`, `appIds`, `eventTypeIds`, `startDate`, `endDate`, `readStatus`. Allowed `sort_by` fields: `bundle`, `application`, `event`, `created`, `severity`. Sorting can be specified by appending `:asc` or `:desc` to the field, e.g. `bundle:desc`. Defaults to `created:desc`.
* @summary Retrieve drawer notifications entries.
* @param {DrawerResourceV3GetDrawerEntriesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const drawerResourceV3GetDrawerEntriesParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([DrawerResourceV3GetDrawerEntriesParams] | [any, any, any, any, any, any, any, any, any, any, any, AxiosRequestConfig])) => {
    const params = isDrawerResourceV3GetDrawerEntriesObjectParams(config) ? config[0] : ['appIds', 'bundleIds', 'endDate', 'eventTypeIds', 'limit', 'offset', 'pageNumber', 'readStatus', 'sortBy', 'sortBy2', 'startDate', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DrawerResourceV3GetDrawerEntriesParams;
    const { appIds, bundleIds, endDate, eventTypeIds, limit, offset, pageNumber, readStatus, sortBy, sortBy2, startDate, options = {} } = params;
    const localVarPath = `/notifications/drawer`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (appIds !== undefined) {
        localVarQueryParameter['appIds'] = appIds;
    }

    if (bundleIds !== undefined) {
        localVarQueryParameter['bundleIds'] = bundleIds;
    }

    if (endDate !== undefined) {
        localVarQueryParameter['endDate'] = endDate;
    }

    if (eventTypeIds !== undefined) {
        localVarQueryParameter['eventTypeIds'] = eventTypeIds;
    }

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }

    if (pageNumber !== undefined) {
        localVarQueryParameter['pageNumber'] = pageNumber;
    }

    if (readStatus !== undefined) {
        localVarQueryParameter['readStatus'] = readStatus;
    }

    if (sortBy !== undefined) {
        localVarQueryParameter['sortBy'] = sortBy;
    }

    if (sortBy2 !== undefined) {
        localVarQueryParameter['sort_by'] = sortBy2;
    }

    if (startDate !== undefined) {
        localVarQueryParameter['startDate'] = startDate;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<DrawerResourceV3GetDrawerEntriesReturnType>(Promise.resolve(args));
}

export default drawerResourceV3GetDrawerEntriesParamCreator;
