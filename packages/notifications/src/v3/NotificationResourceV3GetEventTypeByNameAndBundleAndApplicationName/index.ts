import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

import type { EventType } from '../types';


export type NotificationResourceV3GetEventTypeByNameAndBundleAndApplicationNameParams = {
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV3GetEventTypeByNameAndBundleAndApplicationNameApi
  */
  applicationName: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV3GetEventTypeByNameAndBundleAndApplicationNameApi
  */
  bundleName: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV3GetEventTypeByNameAndBundleAndApplicationNameApi
  */
  eventTypeName: any,
  options?: AxiosRequestConfig
}

export type NotificationResourceV3GetEventTypeByNameAndBundleAndApplicationNameReturnType = EventType;

const isNotificationResourceV3GetEventTypeByNameAndBundleAndApplicationNameObjectParams = (params: [NotificationResourceV3GetEventTypeByNameAndBundleAndApplicationNameParams] | unknown[]): params is [NotificationResourceV3GetEventTypeByNameAndBundleAndApplicationNameParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'applicationName') && Object.prototype.hasOwnProperty.call(params[0], 'bundleName') && Object.prototype.hasOwnProperty.call(params[0], 'eventTypeName')
  }
  return false
}
/**
* Retrieves the details of an event type by specifying the bundle name, the application name, and the event type name.
* @summary Retrieve an event type by bundle, application and event type names
* @param {NotificationResourceV3GetEventTypeByNameAndBundleAndApplicationNameParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV3GetEventTypeByNameAndBundleAndApplicationNameParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([NotificationResourceV3GetEventTypeByNameAndBundleAndApplicationNameParams] | [any, any, any, AxiosRequestConfig])) => {
    const params = isNotificationResourceV3GetEventTypeByNameAndBundleAndApplicationNameObjectParams(config) ? config[0] : ['applicationName', 'bundleName', 'eventTypeName', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV3GetEventTypeByNameAndBundleAndApplicationNameParams;
    const { applicationName, bundleName, eventTypeName, options = {} } = params;
    const localVarPath = `/notifications/bundles/{bundleName}/applications/{applicationName}/eventTypes/{eventTypeName}`
        .replace(`{${"applicationName"}}`, encodeURIComponent(String(applicationName)))
        .replace(`{${"bundleName"}}`, encodeURIComponent(String(bundleName)))
        .replace(`{${"eventTypeName"}}`, encodeURIComponent(String(eventTypeName)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<NotificationResourceV3GetEventTypeByNameAndBundleAndApplicationNameReturnType>(Promise.resolve(args));
}

export default notificationResourceV3GetEventTypeByNameAndBundleAndApplicationNameParamCreator;
