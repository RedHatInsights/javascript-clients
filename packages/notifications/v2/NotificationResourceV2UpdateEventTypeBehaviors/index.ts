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


export type NotificationResourceV2UpdateEventTypeBehaviorsParams = {
  /**
  * UUID of the eventType to associate with the behavior group(s)
  * @type { any }
  * @memberof NotificationResourceV2UpdateEventTypeBehaviorsApi
  */
  eventTypeId: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV2UpdateEventTypeBehaviorsApi
  */
  body: any,
  options?: AxiosRequestConfig
}

export type NotificationResourceV2UpdateEventTypeBehaviorsReturnType = AxiosPromise<any>;

const isNotificationResourceV2UpdateEventTypeBehaviorsObjectParams = (params: [NotificationResourceV2UpdateEventTypeBehaviorsParams] | unknown[]): params is [NotificationResourceV2UpdateEventTypeBehaviorsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'eventTypeId') && Object.prototype.hasOwnProperty.call(params, 'body')
}
/**
* Updates the list of behavior groups associated with an event type.
* @summary Update the list of behavior groups for an event type
* @param {NotificationResourceV2UpdateEventTypeBehaviorsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV2UpdateEventTypeBehaviorsParamCreator = async (...config: ([NotificationResourceV2UpdateEventTypeBehaviorsParams] | [any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isNotificationResourceV2UpdateEventTypeBehaviorsObjectParams(config) ? config[0] : ['eventTypeId', 'body', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV2UpdateEventTypeBehaviorsParams;
    const { eventTypeId, body, options = {} } = params;
    const localVarPath = `/notifications/eventTypes/{eventTypeId}/behaviorGroups`
        .replace(`{${"eventTypeId"}}`, encodeURIComponent(String(eventTypeId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PUT' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: body,
    };
}

export default notificationResourceV2UpdateEventTypeBehaviorsParamCreator;
