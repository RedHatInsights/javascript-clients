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


export type NotificationResourceV2AppendBehaviorGroupToEventTypeParams = {
  /**
  *
  * @type { string }
  * @memberof NotificationResourceV2AppendBehaviorGroupToEventTypeApi
  */
  behaviorGroupUuid: string,
  /**
  *
  * @type { string }
  * @memberof NotificationResourceV2AppendBehaviorGroupToEventTypeApi
  */
  eventTypeUuid: string,
  options?: AxiosRequestConfig
}

export type NotificationResourceV2AppendBehaviorGroupToEventTypeReturnType = AxiosPromise<void>;

const isNotificationResourceV2AppendBehaviorGroupToEventTypeObjectParams = (params: [NotificationResourceV2AppendBehaviorGroupToEventTypeParams] | unknown[]): params is [NotificationResourceV2AppendBehaviorGroupToEventTypeParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'behaviorGroupUuid') && Object.prototype.hasOwnProperty.call(params, 'eventTypeUuid')
}
/**
*
* @summary Add a behavior group to the given event type.
* @param {NotificationResourceV2AppendBehaviorGroupToEventTypeParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV2AppendBehaviorGroupToEventTypeParamCreator = async (...config: ([NotificationResourceV2AppendBehaviorGroupToEventTypeParams] | [string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isNotificationResourceV2AppendBehaviorGroupToEventTypeObjectParams(config) ? config[0] : ['behaviorGroupUuid', 'eventTypeUuid', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV2AppendBehaviorGroupToEventTypeParams;
    const { behaviorGroupUuid, eventTypeUuid, options = {} } = params;
    const localVarPath = `/notifications/eventTypes/{eventTypeUuid}/behaviorGroups/{behaviorGroupUuid}`
        .replace(`{${"behaviorGroupUuid"}}`, encodeURIComponent(String(behaviorGroupUuid)))
        .replace(`{${"eventTypeUuid"}}`, encodeURIComponent(String(eventTypeUuid)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PUT' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default notificationResourceV2AppendBehaviorGroupToEventTypeParamCreator;
