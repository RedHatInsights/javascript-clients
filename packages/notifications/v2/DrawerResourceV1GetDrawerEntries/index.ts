// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PageDrawerEntryPayload } from '../types';


export type DrawerResourceV1GetDrawerEntriesParams = {
  /**
  *
  * @type { any }
  * @memberof DrawerResourceV1GetDrawerEntriesApi
  */
  appIds?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceV1GetDrawerEntriesApi
  */
  bundleIds?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceV1GetDrawerEntriesApi
  */
  endDate?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceV1GetDrawerEntriesApi
  */
  eventTypeIds?: any,
  /**
  * Number of items per page, if not specified 20 is used
  * @type { any }
  * @memberof DrawerResourceV1GetDrawerEntriesApi
  */
  limit?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceV1GetDrawerEntriesApi
  */
  offset?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceV1GetDrawerEntriesApi
  */
  pageNumber?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceV1GetDrawerEntriesApi
  */
  readStatus?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceV1GetDrawerEntriesApi
  */
  sortBy?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceV1GetDrawerEntriesApi
  */
  sortBy2?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceV1GetDrawerEntriesApi
  */
  startDate?: any,
  options?: AxiosRequestConfig
}

export type DrawerResourceV1GetDrawerEntriesReturnType = PageDrawerEntryPayload;

const isDrawerResourceV1GetDrawerEntriesObjectParams = (params: [DrawerResourceV1GetDrawerEntriesParams] | unknown[]): params is [DrawerResourceV1GetDrawerEntriesParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Allowed `sort_by` fields are `bundleIds`, `applicationIds`, `eventTypeIds`, `startTime`, `endTime` and `read`. The ordering can be optionally specified by appending `:asc` or `:desc` to the field, e.g. `bundle:desc`. Defaults to `desc` for the `created` field and to `asc` for all other fields.
* @summary Retrieve drawer notifications entries.
* @param {DrawerResourceV1GetDrawerEntriesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const drawerResourceV1GetDrawerEntriesParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([DrawerResourceV1GetDrawerEntriesParams] | [any, any, any, any, any, any, any, any, any, any, any, AxiosRequestConfig])) => {
    const params = isDrawerResourceV1GetDrawerEntriesObjectParams(config) ? config[0] : ['appIds', 'bundleIds', 'endDate', 'eventTypeIds', 'limit', 'offset', 'pageNumber', 'readStatus', 'sortBy', 'sortBy2', 'startDate', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DrawerResourceV1GetDrawerEntriesParams;
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

    return sendRequest<DrawerResourceV1GetDrawerEntriesReturnType>(Promise.resolve(args));
}

export default drawerResourceV1GetDrawerEntriesParamCreator;
