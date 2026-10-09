import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

import type {  } from '../types';


export type NotificationResourceV3GetApplicationsParams = {
  /**
  * Filter applications by bundle name
  * @type { any }
  * @memberof NotificationResourceV3GetApplicationsApi
  */
  bundleName?: any,
  options?: AxiosRequestConfig
}

export type NotificationResourceV3GetApplicationsReturnType = any;

const isNotificationResourceV3GetApplicationsObjectParams = (params: [NotificationResourceV3GetApplicationsParams] | unknown[]): params is [NotificationResourceV3GetApplicationsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Returns a list of configured applications that includes the application name, the display name, and the ID. You can use this list to configure a filter in the UI. Optionally filter by bundle name.
* @summary List configured applications
* @param {NotificationResourceV3GetApplicationsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV3GetApplicationsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([NotificationResourceV3GetApplicationsParams] | [any, AxiosRequestConfig])) => {
    const params = isNotificationResourceV3GetApplicationsObjectParams(config) ? config[0] : ['bundleName', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV3GetApplicationsParams;
    const { bundleName, options = {} } = params;
    const localVarPath = `/notifications/applications`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (bundleName !== undefined) {
        localVarQueryParameter['bundleName'] = bundleName;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<NotificationResourceV3GetApplicationsReturnType>(Promise.resolve(args));
}

export default notificationResourceV3GetApplicationsParamCreator;
