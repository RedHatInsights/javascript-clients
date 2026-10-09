import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

import type { Bundle } from '../types';


export type NotificationResourceV3GetBundleByNameParams = {
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV3GetBundleByNameApi
  */
  bundleName: any,
  options?: AxiosRequestConfig
}

export type NotificationResourceV3GetBundleByNameReturnType = Bundle;

const isNotificationResourceV3GetBundleByNameObjectParams = (params: [NotificationResourceV3GetBundleByNameParams] | unknown[]): params is [NotificationResourceV3GetBundleByNameParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'bundleName')
  }
  return false
}
/**
* Retrieves the details of a bundle by searching by its name.
* @summary Retrieve a bundle by name
* @param {NotificationResourceV3GetBundleByNameParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV3GetBundleByNameParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([NotificationResourceV3GetBundleByNameParams] | [any, AxiosRequestConfig])) => {
    const params = isNotificationResourceV3GetBundleByNameObjectParams(config) ? config[0] : ['bundleName', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV3GetBundleByNameParams;
    const { bundleName, options = {} } = params;
    const localVarPath = `/notifications/bundles/{bundleName}`
        .replace(`{${"bundleName"}}`, encodeURIComponent(String(bundleName)));
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

    return sendRequest<NotificationResourceV3GetBundleByNameReturnType>(Promise.resolve(args));
}

export default notificationResourceV3GetBundleByNameParamCreator;
