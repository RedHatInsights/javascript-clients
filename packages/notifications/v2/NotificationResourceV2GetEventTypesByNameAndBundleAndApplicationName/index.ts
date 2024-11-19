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


export type NotificationResourceV2GetEventTypesByNameAndBundleAndApplicationNameParams = {
  /**
  *
  * @type { string }
  * @memberof NotificationResourceV2GetEventTypesByNameAndBundleAndApplicationNameApi
  */
  applicationName: string,
  /**
  *
  * @type { string }
  * @memberof NotificationResourceV2GetEventTypesByNameAndBundleAndApplicationNameApi
  */
  bundleName: string,
  /**
  *
  * @type { string }
  * @memberof NotificationResourceV2GetEventTypesByNameAndBundleAndApplicationNameApi
  */
  eventTypeName: string,
  options?: AxiosRequestConfig
}

export type NotificationResourceV2GetEventTypesByNameAndBundleAndApplicationNameReturnType = AxiosPromise<EventType>;

const isNotificationResourceV2GetEventTypesByNameAndBundleAndApplicationNameObjectParams = (params: [NotificationResourceV2GetEventTypesByNameAndBundleAndApplicationNameParams] | unknown[]): params is [NotificationResourceV2GetEventTypesByNameAndBundleAndApplicationNameParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'applicationName') && Object.prototype.hasOwnProperty.call(params, 'bundleName') && Object.prototype.hasOwnProperty.call(params, 'eventTypeName')
}
/**
* Retrieves the details of an event type by specifying the bundle name, the application name, and the event type name.
* @summary Retrieve an event type by bundle, application and event type names
* @param {NotificationResourceV2GetEventTypesByNameAndBundleAndApplicationNameParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV2GetEventTypesByNameAndBundleAndApplicationNameParamCreator = async (...config: ([NotificationResourceV2GetEventTypesByNameAndBundleAndApplicationNameParams] | [string, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isNotificationResourceV2GetEventTypesByNameAndBundleAndApplicationNameObjectParams(config) ? config[0] : ['applicationName', 'bundleName', 'eventTypeName', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV2GetEventTypesByNameAndBundleAndApplicationNameParams;
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

export default notificationResourceV2GetEventTypesByNameAndBundleAndApplicationNameParamCreator;
