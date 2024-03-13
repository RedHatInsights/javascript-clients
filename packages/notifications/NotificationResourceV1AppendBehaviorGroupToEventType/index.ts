// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../utils/common';
import type { RequestArgs } from '../utils/base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, AuthTypeEnum } from '../utils/base';
import { Configuration } from '../utils/configuration';

// @ts-ignore
import type {  } from '../types';


export type NotificationResourceV1AppendBehaviorGroupToEventTypeParams = {
  /**
  *
  * @type { string }
  * @memberof NotificationResourceV1AppendBehaviorGroupToEventTypeApi
  */
  behaviorGroupUuid: string,
  /**
  *
  * @type { string }
  * @memberof NotificationResourceV1AppendBehaviorGroupToEventTypeApi
  */
  eventTypeUuid: string,
  options?: AxiosRequestConfig
}

const isNotificationResourceV1AppendBehaviorGroupToEventTypeObjectParams = (params: [NotificationResourceV1AppendBehaviorGroupToEventTypeParams] | unknown[]): params is [NotificationResourceV1AppendBehaviorGroupToEventTypeParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'behaviorGroupUuid') && Object.prototype.hasOwnProperty.call(params, 'eventTypeUuid')
}
/**
*
* @summary Add a behavior group to the given event type.
* @param {NotificationResourceV1AppendBehaviorGroupToEventTypeParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1AppendBehaviorGroupToEventTypeParamCreator = async (...config: ([NotificationResourceV1AppendBehaviorGroupToEventTypeParams] | [string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isNotificationResourceV1AppendBehaviorGroupToEventTypeObjectParams(config) ? config[0] : ['behaviorGroupUuid', 'eventTypeUuid', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV1AppendBehaviorGroupToEventTypeParams;
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

export default notificationResourceV1AppendBehaviorGroupToEventTypeParamCreator;
