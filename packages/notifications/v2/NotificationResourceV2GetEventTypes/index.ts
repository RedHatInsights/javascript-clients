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


export type NotificationResourceV2GetEventTypesParams = {
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV2GetEventTypesApi
  */
  applicationIds?: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV2GetEventTypesApi
  */
  bundleId?: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV2GetEventTypesApi
  */
  eventTypeName?: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV2GetEventTypesApi
  */
  excludeMutedTypes?: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV2GetEventTypesApi
  */
  limit?: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV2GetEventTypesApi
  */
  offset?: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV2GetEventTypesApi
  */
  pageNumber?: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV2GetEventTypesApi
  */
  sortBy?: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV2GetEventTypesApi
  */
  sortBy2?: any,
  options?: AxiosRequestConfig
}

export type NotificationResourceV2GetEventTypesReturnType = AxiosPromise<PageEventType>;

const isNotificationResourceV2GetEventTypesObjectParams = (params: [NotificationResourceV2GetEventTypesParams] | unknown[]): params is [NotificationResourceV2GetEventTypesParams] => {
  return params.length === 1 && true && true && true && true && true && true && true && true && true
}
/**
* Lists all event types. You can filter the returned list by bundle, application name, or unmuted types.
* @summary List all event types
* @param {NotificationResourceV2GetEventTypesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV2GetEventTypesParamCreator = async (...config: ([NotificationResourceV2GetEventTypesParams] | [any, any, any, any, any, any, any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isNotificationResourceV2GetEventTypesObjectParams(config) ? config[0] : ['applicationIds', 'bundleId', 'eventTypeName', 'excludeMutedTypes', 'limit', 'offset', 'pageNumber', 'sortBy', 'sortBy2', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV2GetEventTypesParams;
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

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default notificationResourceV2GetEventTypesParamCreator;
