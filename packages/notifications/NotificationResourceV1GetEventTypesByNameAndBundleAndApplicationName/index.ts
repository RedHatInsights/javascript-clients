// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

// @ts-ignore
import type { EventType } from '../types';


export type NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParams = {
  /**
  * 
  * @type { string }
  * @memberof NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameApi
  */
  applicationName: string, 
  /**
  * 
  * @type { string }
  * @memberof NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameApi
  */
  bundleName: string, 
  /**
  * 
  * @type { string }
  * @memberof NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameApi
  */
  eventTypeName: string, 
  options?: AxiosRequestConfig
}

const isNotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameObjectParams = (params: [NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParams] | unknown[]): params is [NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'applicationName') && Object.prototype.hasOwnProperty.call(params, 'bundleName') && Object.prototype.hasOwnProperty.call(params, 'eventTypeName')
}
/**
* Retrieves the details of an event type by specifying the bundle name, the application name, and the event type name.
* @summary Retrieve an event type by bundle, application and event type name
* @param {NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParamCreator = async (...config: ([NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParams] | [string, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isNotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameObjectParams(config) ? config[0] : ['applicationName', 'bundleName', 'eventTypeName', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParams;
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

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default notificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParamCreator;
