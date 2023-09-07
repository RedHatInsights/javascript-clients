// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../utils/common';
import type { RequestArgs } from '../utils/base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, AuthTypeEnum } from '../utils/base';
import { Configuration } from '../utils/configuration';

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
*
* @summary Retrieve the event type by name of a given bundle name and application name
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
