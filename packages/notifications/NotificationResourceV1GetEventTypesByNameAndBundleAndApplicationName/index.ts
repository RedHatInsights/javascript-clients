// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { EventType } from '../types';


export type NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParams = {
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameApi
  */
  applicationName: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameApi
  */
  bundleName: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameApi
  */
  eventTypeName: any,
  options?: AxiosRequestConfig
}

export type NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameReturnType = AxiosPromise<EventType>;

const isNotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameObjectParams = (params: [NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParams] | unknown[]): params is [NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'applicationName') && Object.prototype.hasOwnProperty.call(params[0], 'bundleName') && Object.prototype.hasOwnProperty.call(params[0], 'eventTypeName')
}
/**
* Retrieves the details of an event type by specifying the bundle name, the application name, and the event type name.
* @summary Retrieve an event type by bundle, application and event type names
* @param {NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParamCreator = async (...config: ([NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParams] | [any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
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
