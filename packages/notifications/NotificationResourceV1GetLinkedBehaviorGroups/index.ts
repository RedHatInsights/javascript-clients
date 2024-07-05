// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { BehaviorGroup } from '../types';


export type NotificationResourceV1GetLinkedBehaviorGroupsParams = {
  /**
  *
  * @type { string }
  * @memberof NotificationResourceV1GetLinkedBehaviorGroupsApi
  */
  eventTypeId: string,
  /**
  *
  * @type { number }
  * @memberof NotificationResourceV1GetLinkedBehaviorGroupsApi
  */
  limit?: number,
  /**
  *
  * @type { number }
  * @memberof NotificationResourceV1GetLinkedBehaviorGroupsApi
  */
  offset?: number,
  /**
  *
  * @type { number }
  * @memberof NotificationResourceV1GetLinkedBehaviorGroupsApi
  */
  pageNumber?: number,
  /**
  *
  * @type { string }
  * @memberof NotificationResourceV1GetLinkedBehaviorGroupsApi
  */
  sortBy?: string,
  /**
  *
  * @type { string }
  * @memberof NotificationResourceV1GetLinkedBehaviorGroupsApi
  */
  sortBy2?: string,
  options?: AxiosRequestConfig
}

const isNotificationResourceV1GetLinkedBehaviorGroupsObjectParams = (params: [NotificationResourceV1GetLinkedBehaviorGroupsParams] | unknown[]): params is [NotificationResourceV1GetLinkedBehaviorGroupsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'eventTypeId') && true && true && true && true && true
}
/**
* Lists the behavior groups that are linked to an event type. Use this endpoint to see which behavior groups will be affected if you delete an event type.
* @summary List the behavior groups linked to an event type
* @param {NotificationResourceV1GetLinkedBehaviorGroupsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1GetLinkedBehaviorGroupsParamCreator = async (...config: ([NotificationResourceV1GetLinkedBehaviorGroupsParams] | [string, number, number, number, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
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

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default notificationResourceV1GetLinkedBehaviorGroupsParamCreator;
