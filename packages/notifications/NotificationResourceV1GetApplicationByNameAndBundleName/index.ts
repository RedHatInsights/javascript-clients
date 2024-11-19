// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Application } from '../types';


export type NotificationResourceV1GetApplicationByNameAndBundleNameParams = {
  /**
  *
  * @type { string }
  * @memberof NotificationResourceV1GetApplicationByNameAndBundleNameApi
  */
  applicationName: string,
  /**
  *
  * @type { string }
  * @memberof NotificationResourceV1GetApplicationByNameAndBundleNameApi
  */
  bundleName: string,
  options?: AxiosRequestConfig
}

export type NotificationResourceV1GetApplicationByNameAndBundleNameReturnType = AxiosPromise<Application>;

const isNotificationResourceV1GetApplicationByNameAndBundleNameObjectParams = (params: [NotificationResourceV1GetApplicationByNameAndBundleNameParams] | unknown[]): params is [NotificationResourceV1GetApplicationByNameAndBundleNameParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'applicationName') && Object.prototype.hasOwnProperty.call(params, 'bundleName')
}
/**
* Retrieves an application by bundle and application names. Use this endpoint to  find an application by searching for the bundle that the application is part of. This is useful if you do not know the UUID of the bundle or application.
* @summary Retrieve an application by bundle and application names
* @param {NotificationResourceV1GetApplicationByNameAndBundleNameParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1GetApplicationByNameAndBundleNameParamCreator = async (...config: ([NotificationResourceV1GetApplicationByNameAndBundleNameParams] | [string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isNotificationResourceV1GetApplicationByNameAndBundleNameObjectParams(config) ? config[0] : ['applicationName', 'bundleName', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV1GetApplicationByNameAndBundleNameParams;
    const { applicationName, bundleName, options = {} } = params;
    const localVarPath = `/notifications/bundles/{bundleName}/applications/{applicationName}`
        .replace(`{${"applicationName"}}`, encodeURIComponent(String(applicationName)))
        .replace(`{${"bundleName"}}`, encodeURIComponent(String(bundleName)));
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

export default notificationResourceV1GetApplicationByNameAndBundleNameParamCreator;
