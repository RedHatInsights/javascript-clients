// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

// @ts-ignore
import type { PageDrawerEntryPayload } from '../types';


export type DrawerResourceV1GetDrawerEntriesParams = {
  /**
  *
  * @type { Set<string> }
  * @memberof DrawerResourceV1GetDrawerEntriesApi
  */
  appIds?: Set<string>,
  /**
  *
  * @type { Set<string> }
  * @memberof DrawerResourceV1GetDrawerEntriesApi
  */
  bundleIds?: Set<string>,
  /**
  *
  * @type { string }
  * @memberof DrawerResourceV1GetDrawerEntriesApi
  */
  endDate?: string,
  /**
  *
  * @type { Set<string> }
  * @memberof DrawerResourceV1GetDrawerEntriesApi
  */
  eventTypeIds?: Set<string>,
  /**
  *
  * @type { number }
  * @memberof DrawerResourceV1GetDrawerEntriesApi
  */
  limit?: number,
  /**
  *
  * @type { number }
  * @memberof DrawerResourceV1GetDrawerEntriesApi
  */
  offset?: number,
  /**
  *
  * @type { number }
  * @memberof DrawerResourceV1GetDrawerEntriesApi
  */
  pageNumber?: number,
  /**
  *
  * @type { boolean }
  * @memberof DrawerResourceV1GetDrawerEntriesApi
  */
  readStatus?: boolean,
  /**
  *
  * @type { string }
  * @memberof DrawerResourceV1GetDrawerEntriesApi
  */
  sortBy?: string,
  /**
  *
  * @type { string }
  * @memberof DrawerResourceV1GetDrawerEntriesApi
  */
  sortBy2?: string,
  /**
  *
  * @type { string }
  * @memberof DrawerResourceV1GetDrawerEntriesApi
  */
  startDate?: string,
  options?: AxiosRequestConfig
}

const isDrawerResourceV1GetDrawerEntriesObjectParams = (params: [DrawerResourceV1GetDrawerEntriesParams] | unknown[]): params is [DrawerResourceV1GetDrawerEntriesParams] => {
  return params.length === 1 && true && true && true && true && true && true && true && true && true && true && true
}
/**
* Allowed `sort_by` fields are `bundleIds`, `applicationIds`, `eventTypeIds`, `startTime`, `endTime` and `read`. The ordering can be optionally specified by appending `:asc` or `:desc` to the field, e.g. `bundle:desc`. Defaults to `desc` for the `created` field and to `asc` for all other fields.
* @summary Retrieve drawer notifications entries.
* @param {DrawerResourceV1GetDrawerEntriesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const drawerResourceV1GetDrawerEntriesParamCreator = async (...config: ([DrawerResourceV1GetDrawerEntriesParams] | [Set<string>, Set<string>, string, Set<string>, number, number, number, boolean, string, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isDrawerResourceV1GetDrawerEntriesObjectParams(config) ? config[0] : ['appIds', 'bundleIds', 'endDate', 'eventTypeIds', 'limit', 'offset', 'pageNumber', 'readStatus', 'sortBy', 'sortBy2', 'startDate', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DrawerResourceV1GetDrawerEntriesParams;
    const { appIds, bundleIds, endDate, eventTypeIds, limit, offset, pageNumber, readStatus, sortBy, sortBy2, startDate, options = {} } = params;
    const localVarPath = `/notifications/drawer`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (appIds) {
        localVarQueryParameter['appIds'] = Array.from(appIds);
    }

    if (bundleIds) {
        localVarQueryParameter['bundleIds'] = Array.from(bundleIds);
    }

    if (endDate !== undefined) {
        localVarQueryParameter['endDate'] = (endDate as any instanceof Date) ?
            (endDate as any).toISOString() :
            endDate;
    }

    if (eventTypeIds) {
        localVarQueryParameter['eventTypeIds'] = Array.from(eventTypeIds);
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
        localVarQueryParameter['startDate'] = (startDate as any instanceof Date) ?
            (startDate as any).toISOString() :
            startDate;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default drawerResourceV1GetDrawerEntriesParamCreator;
