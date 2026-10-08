import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

import type {  } from '../types';


export type NotificationResourceV3UpdateEventTypeEndpointsParams = {
  /**
  * UUID of the eventType to associate with the endpoint(s)
  * @type { any }
  * @memberof NotificationResourceV3UpdateEventTypeEndpointsApi
  */
  eventTypeId: any,
  /**
  * Set of endpoint ids to associate
  * @type { any }
  * @memberof NotificationResourceV3UpdateEventTypeEndpointsApi
  */
  body: any,
  options?: AxiosRequestConfig
}

export type NotificationResourceV3UpdateEventTypeEndpointsReturnType = any;

const isNotificationResourceV3UpdateEventTypeEndpointsObjectParams = (params: [NotificationResourceV3UpdateEventTypeEndpointsParams] | unknown[]): params is [NotificationResourceV3UpdateEventTypeEndpointsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'eventTypeId') && Object.prototype.hasOwnProperty.call(params[0], 'body')
  }
  return false
}
/**
* Updates the list of endpoints associated with an event type.
* @summary Update the list of endpoints for an event type
* @param {NotificationResourceV3UpdateEventTypeEndpointsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV3UpdateEventTypeEndpointsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([NotificationResourceV3UpdateEventTypeEndpointsParams] | [any, any, AxiosRequestConfig])) => {
    const params = isNotificationResourceV3UpdateEventTypeEndpointsObjectParams(config) ? config[0] : ['eventTypeId', 'body', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV3UpdateEventTypeEndpointsParams;
    const { eventTypeId, body, options = {} } = params;
    const localVarPath = `/notifications/eventTypes/{eventTypeId}/endpoints`
        .replace(`{${"eventTypeId"}}`, encodeURIComponent(String(eventTypeId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PUT' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: body,
    };

    return sendRequest<NotificationResourceV3UpdateEventTypeEndpointsReturnType>(Promise.resolve(args));
}

export default notificationResourceV3UpdateEventTypeEndpointsParamCreator;
