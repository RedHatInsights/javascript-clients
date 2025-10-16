// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PageEventType } from '../types';


export type NotificationResourceV1GetEventTypesParams = {
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV1GetEventTypesApi
  */
  applicationIds?: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV1GetEventTypesApi
  */
  bundleId?: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV1GetEventTypesApi
  */
  eventTypeName?: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV1GetEventTypesApi
  */
  excludeMutedTypes?: any,
  /**
  * Number of items per page, if not specified 20 is used.
  * @type { any }
  * @memberof NotificationResourceV1GetEventTypesApi
  */
  limit?: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV1GetEventTypesApi
  */
  offset?: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV1GetEventTypesApi
  */
  pageNumber?: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV1GetEventTypesApi
  */
  sortBy?: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV1GetEventTypesApi
  */
  sortBy2?: any,
  options?: AxiosRequestConfig
}

export type NotificationResourceV1GetEventTypesReturnType = PageEventType;

const isNotificationResourceV1GetEventTypesObjectParams = (params: [NotificationResourceV1GetEventTypesParams] | unknown[]): params is [NotificationResourceV1GetEventTypesParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Lists all event types. You can filter the returned list by bundle, application name, or unmuted types.
* @summary List all event types
* @param {NotificationResourceV1GetEventTypesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1GetEventTypesParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([NotificationResourceV1GetEventTypesParams] | [any, any, any, any, any, any, any, any, any, AxiosRequestConfig])) => {
    const params = isNotificationResourceV1GetEventTypesObjectParams(config) ? config[0] : ['applicationIds', 'bundleId', 'eventTypeName', 'excludeMutedTypes', 'limit', 'offset', 'pageNumber', 'sortBy', 'sortBy2', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV1GetEventTypesParams;
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

    return sendRequest<NotificationResourceV1GetEventTypesReturnType>(Promise.resolve(args));
}

export default notificationResourceV1GetEventTypesParamCreator;
