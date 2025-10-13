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


export type NotificationResourceV1UpdateEventTypeEndpointsParams = {
  /**
  * UUID of the eventType to associate with the endpoint(s)
  * @type { any }
  * @memberof NotificationResourceV1UpdateEventTypeEndpointsApi
  */
  eventTypeId: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV1UpdateEventTypeEndpointsApi
  */
  body: any,
  options?: AxiosRequestConfig
}

export type NotificationResourceV1UpdateEventTypeEndpointsReturnType = any;

const isNotificationResourceV1UpdateEventTypeEndpointsObjectParams = (params: [NotificationResourceV1UpdateEventTypeEndpointsParams] | unknown[]): params is [NotificationResourceV1UpdateEventTypeEndpointsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'eventTypeId') && Object.prototype.hasOwnProperty.call(params[0], 'body')
  }
  return false
}
/**
* Updates the list of endpoints associated with an event type.
* @summary Update the list of endpoints for an event type
* @param {NotificationResourceV1UpdateEventTypeEndpointsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1UpdateEventTypeEndpointsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([NotificationResourceV1UpdateEventTypeEndpointsParams] | [any, any, AxiosRequestConfig])) => {
    const params = isNotificationResourceV1UpdateEventTypeEndpointsObjectParams(config) ? config[0] : ['eventTypeId', 'body', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV1UpdateEventTypeEndpointsParams;
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

    return sendRequest<NotificationResourceV1UpdateEventTypeEndpointsReturnType>(Promise.resolve(args));
}

export default notificationResourceV1UpdateEventTypeEndpointsParamCreator;
