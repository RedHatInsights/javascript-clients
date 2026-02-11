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


export type NotificationResourceV1DeleteBehaviorGroupFromEventTypeParams = {
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV1DeleteBehaviorGroupFromEventTypeApi
  */
  behaviorGroupId: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV1DeleteBehaviorGroupFromEventTypeApi
  */
  eventTypeId: any,
  options?: AxiosRequestConfig
}

export type NotificationResourceV1DeleteBehaviorGroupFromEventTypeReturnType = void;

const isNotificationResourceV1DeleteBehaviorGroupFromEventTypeObjectParams = (params: [NotificationResourceV1DeleteBehaviorGroupFromEventTypeParams] | unknown[]): params is [NotificationResourceV1DeleteBehaviorGroupFromEventTypeParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'behaviorGroupId') && Object.prototype.hasOwnProperty.call(params[0], 'eventTypeId')
  }
  return false
}
/**
* Delete a behavior group from the specified event type.
* @summary Delete a behavior group from an event type
* @param {NotificationResourceV1DeleteBehaviorGroupFromEventTypeParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1DeleteBehaviorGroupFromEventTypeParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([NotificationResourceV1DeleteBehaviorGroupFromEventTypeParams] | [any, any, AxiosRequestConfig])) => {
    const params = isNotificationResourceV1DeleteBehaviorGroupFromEventTypeObjectParams(config) ? config[0] : ['behaviorGroupId', 'eventTypeId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV1DeleteBehaviorGroupFromEventTypeParams;
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

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<NotificationResourceV1DeleteBehaviorGroupFromEventTypeReturnType>(Promise.resolve(args));
}

export default notificationResourceV1DeleteBehaviorGroupFromEventTypeParamCreator;
