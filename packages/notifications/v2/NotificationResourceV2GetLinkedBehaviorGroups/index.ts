// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PageBehaviorGroup } from '../types';


export type NotificationResourceV2GetLinkedBehaviorGroupsParams = {
  /**
  *
  * @type { string }
  * @memberof NotificationResourceV2GetLinkedBehaviorGroupsApi
  */
  eventTypeId: string,
  /**
  *
  * @type { number }
  * @memberof NotificationResourceV2GetLinkedBehaviorGroupsApi
  */
  limit?: number,
  /**
  *
  * @type { number }
  * @memberof NotificationResourceV2GetLinkedBehaviorGroupsApi
  */
  offset?: number,
  /**
  *
  * @type { number }
  * @memberof NotificationResourceV2GetLinkedBehaviorGroupsApi
  */
  pageNumber?: number,
  /**
  *
  * @type { string }
  * @memberof NotificationResourceV2GetLinkedBehaviorGroupsApi
  */
  sortBy?: string,
  /**
  *
  * @type { string }
  * @memberof NotificationResourceV2GetLinkedBehaviorGroupsApi
  */
  sortBy2?: string,
  options?: AxiosRequestConfig
}

export type NotificationResourceV2GetLinkedBehaviorGroupsReturnType = AxiosPromise<PageBehaviorGroup>;

const isNotificationResourceV2GetLinkedBehaviorGroupsObjectParams = (params: [NotificationResourceV2GetLinkedBehaviorGroupsParams] | unknown[]): params is [NotificationResourceV2GetLinkedBehaviorGroupsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'eventTypeId') && true && true && true && true && true
}
/**
* Get Linked Behavior Groups
* @summary Retrieve the behavior groups linked to an event type.
* @param {NotificationResourceV2GetLinkedBehaviorGroupsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV2GetLinkedBehaviorGroupsParamCreator = async (...config: ([NotificationResourceV2GetLinkedBehaviorGroupsParams] | [string, number, number, number, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isNotificationResourceV2GetLinkedBehaviorGroupsObjectParams(config) ? config[0] : ['eventTypeId', 'limit', 'offset', 'pageNumber', 'sortBy', 'sortBy2', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV2GetLinkedBehaviorGroupsParams;
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

export default notificationResourceV2GetLinkedBehaviorGroupsParamCreator;
