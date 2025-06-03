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


export type NotificationResourceV2DeleteBehaviorGroupFromEventTypeParams = {
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV2DeleteBehaviorGroupFromEventTypeApi
  */
  behaviorGroupId: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV2DeleteBehaviorGroupFromEventTypeApi
  */
  eventTypeId: any,
  options?: AxiosRequestConfig
}

export type NotificationResourceV2DeleteBehaviorGroupFromEventTypeReturnType = AxiosPromise<void>;

const isNotificationResourceV2DeleteBehaviorGroupFromEventTypeObjectParams = (params: [NotificationResourceV2DeleteBehaviorGroupFromEventTypeParams] | unknown[]): params is [NotificationResourceV2DeleteBehaviorGroupFromEventTypeParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'behaviorGroupId') && Object.prototype.hasOwnProperty.call(params[0], 'eventTypeId')
}
/**
* Delete a behavior group from the specified event type.
* @summary Delete a behavior group from an event type
* @param {NotificationResourceV2DeleteBehaviorGroupFromEventTypeParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV2DeleteBehaviorGroupFromEventTypeParamCreator = async (...config: ([NotificationResourceV2DeleteBehaviorGroupFromEventTypeParams] | [any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isNotificationResourceV2DeleteBehaviorGroupFromEventTypeObjectParams(config) ? config[0] : ['behaviorGroupId', 'eventTypeId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV2DeleteBehaviorGroupFromEventTypeParams;
    const { behaviorGroupId, eventTypeId, options = {} } = params;
    const localVarPath = `/notifications/eventTypes/{eventTypeId}/behaviorGroups/{behaviorGroupId}`
        .replace(`{${"behaviorGroupId"}}`, encodeURIComponent(String(behaviorGroupId)))
        .replace(`{${"eventTypeId"}}`, encodeURIComponent(String(eventTypeId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'DELETE' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default notificationResourceV2DeleteBehaviorGroupFromEventTypeParamCreator;
