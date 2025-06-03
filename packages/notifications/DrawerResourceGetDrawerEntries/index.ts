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


export type DrawerResourceGetDrawerEntriesParams = {
  /**
  *
  * @type { any }
  * @memberof DrawerResourceGetDrawerEntriesApi
  */
  appIds?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceGetDrawerEntriesApi
  */
  bundleIds?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceGetDrawerEntriesApi
  */
  endDate?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceGetDrawerEntriesApi
  */
  eventTypeIds?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceGetDrawerEntriesApi
  */
  limit?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceGetDrawerEntriesApi
  */
  offset?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceGetDrawerEntriesApi
  */
  pageNumber?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceGetDrawerEntriesApi
  */
  readStatus?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceGetDrawerEntriesApi
  */
  sortBy?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceGetDrawerEntriesApi
  */
  sortBy2?: any,
  /**
  *
  * @type { any }
  * @memberof DrawerResourceGetDrawerEntriesApi
  */
  startDate?: any,
  options?: AxiosRequestConfig
}

export type DrawerResourceGetDrawerEntriesReturnType = AxiosPromise<PageDrawerEntryPayload>;

const isDrawerResourceGetDrawerEntriesObjectParams = (params: [DrawerResourceGetDrawerEntriesParams] | unknown[]): params is [DrawerResourceGetDrawerEntriesParams] => {
  return params.length === 1 && true && true && true && true && true && true && true && true && true && true && true
}
/**
* Allowed `sort_by` fields are `bundleIds`, `applicationIds`, `eventTypeIds`, `startTime`, `endTime` and `read`. The ordering can be optionally specified by appending `:asc` or `:desc` to the field, e.g. `bundle:desc`. Defaults to `desc` for the `created` field and to `asc` for all other fields.
* @summary Retrieve drawer notifications entries.
* @param {DrawerResourceGetDrawerEntriesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const drawerResourceGetDrawerEntriesParamCreator = async (...config: ([DrawerResourceGetDrawerEntriesParams] | [any, any, any, any, any, any, any, any, any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isDrawerResourceGetDrawerEntriesObjectParams(config) ? config[0] : ['appIds', 'bundleIds', 'endDate', 'eventTypeIds', 'limit', 'offset', 'pageNumber', 'readStatus', 'sortBy', 'sortBy2', 'startDate', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DrawerResourceGetDrawerEntriesParams;
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

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default drawerResourceGetDrawerEntriesParamCreator;
