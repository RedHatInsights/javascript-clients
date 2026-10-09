import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

import type { PageEventType } from '../types';


export type NotificationResourceV3GetEventTypesParams = {
  /**
  * Set of application IDs to filter by
  * @type { any }
  * @memberof NotificationResourceV3GetEventTypesApi
  */
  applicationIds?: any,
  /**
  * UUID of the bundle to filter by
  * @type { any }
  * @memberof NotificationResourceV3GetEventTypesApi
  */
  bundleId?: any,
  /**
  * Filter by event type name (case-insensitive, partial match)
  * @type { any }
  * @memberof NotificationResourceV3GetEventTypesApi
  */
  eventTypeName?: any,
  /**
  * Whether to exclude muted event types
  * @type { any }
  * @memberof NotificationResourceV3GetEventTypesApi
  */
  excludeMutedTypes?: any,
  /**
  * Number of items per page, if not specified 20 is used.
  * @type { any }
  * @memberof NotificationResourceV3GetEventTypesApi
  */
  limit?: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV3GetEventTypesApi
  */
  offset?: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV3GetEventTypesApi
  */
  pageNumber?: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV3GetEventTypesApi
  */
  sortBy?: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV3GetEventTypesApi
  */
  sortBy2?: any,
  options?: AxiosRequestConfig
}

export type NotificationResourceV3GetEventTypesReturnType = PageEventType;

const isNotificationResourceV3GetEventTypesObjectParams = (params: [NotificationResourceV3GetEventTypesParams] | unknown[]): params is [NotificationResourceV3GetEventTypesParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Lists all event types. You can filter the returned list by bundle, application name, or unmuted types.
* @summary List all event types
* @param {NotificationResourceV3GetEventTypesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV3GetEventTypesParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([NotificationResourceV3GetEventTypesParams] | [any, any, any, any, any, any, any, any, any, AxiosRequestConfig])) => {
    const params = isNotificationResourceV3GetEventTypesObjectParams(config) ? config[0] : ['applicationIds', 'bundleId', 'eventTypeName', 'excludeMutedTypes', 'limit', 'offset', 'pageNumber', 'sortBy', 'sortBy2', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV3GetEventTypesParams;
    const { applicationIds, bundleId, eventTypeName, excludeMutedTypes, limit, offset, pageNumber, sortBy, sortBy2, options = {} } = params;
    const localVarPath = `/notifications/eventTypes`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (applicationIds !== undefined) {
        localVarQueryParameter['applicationIds'] = applicationIds;
    }

    if (bundleId !== undefined) {
        localVarQueryParameter['bundleId'] = bundleId;
    }

    if (eventTypeName !== undefined) {
        localVarQueryParameter['eventTypeName'] = eventTypeName;
    }

    if (excludeMutedTypes !== undefined) {
        localVarQueryParameter['excludeMutedTypes'] = excludeMutedTypes;
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

    if (sortBy !== undefined) {
        localVarQueryParameter['sortBy'] = sortBy;
    }

    if (sortBy2 !== undefined) {
        localVarQueryParameter['sort_by'] = sortBy2;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<NotificationResourceV3GetEventTypesReturnType>(Promise.resolve(args));
}

export default notificationResourceV3GetEventTypesParamCreator;
