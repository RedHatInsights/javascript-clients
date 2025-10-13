// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type {  } from '../types';


export type NotificationResourceV1GetLinkedBehaviorGroupsParams = {
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV1GetLinkedBehaviorGroupsApi
  */
  eventTypeId: any,
  /**
  * Number of items per page, if not specified 20 is used.
  * @type { any }
  * @memberof NotificationResourceV1GetLinkedBehaviorGroupsApi
  */
  limit?: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV1GetLinkedBehaviorGroupsApi
  */
  offset?: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV1GetLinkedBehaviorGroupsApi
  */
  pageNumber?: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV1GetLinkedBehaviorGroupsApi
  */
  sortBy?: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV1GetLinkedBehaviorGroupsApi
  */
  sortBy2?: any,
  options?: AxiosRequestConfig
}

export type NotificationResourceV1GetLinkedBehaviorGroupsReturnType = any;

const isNotificationResourceV1GetLinkedBehaviorGroupsObjectParams = (params: [NotificationResourceV1GetLinkedBehaviorGroupsParams] | unknown[]): params is [NotificationResourceV1GetLinkedBehaviorGroupsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'eventTypeId')
  }
  return false
}
/**
* Lists the behavior groups that are linked to an event type. Use this endpoint to see which behavior groups will be affected if you delete an event type.
* @summary List the behavior groups linked to an event type
* @param {NotificationResourceV1GetLinkedBehaviorGroupsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1GetLinkedBehaviorGroupsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([NotificationResourceV1GetLinkedBehaviorGroupsParams] | [any, any, any, any, any, any, AxiosRequestConfig])) => {
    const params = isNotificationResourceV1GetLinkedBehaviorGroupsObjectParams(config) ? config[0] : ['eventTypeId', 'limit', 'offset', 'pageNumber', 'sortBy', 'sortBy2', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV1GetLinkedBehaviorGroupsParams;
    const { eventTypeId, limit, offset, pageNumber, sortBy, sortBy2, options = {} } = params;
    const localVarPath = `/notifications/eventTypes/{eventTypeId}/behaviorGroups`
        .replace(`{${"eventTypeId"}}`, encodeURIComponent(String(eventTypeId)));
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

    return sendRequest<NotificationResourceV1GetLinkedBehaviorGroupsReturnType>(Promise.resolve(args));
}

export default notificationResourceV1GetLinkedBehaviorGroupsParamCreator;
