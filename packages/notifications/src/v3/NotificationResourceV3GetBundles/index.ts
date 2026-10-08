import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

import type {  } from '../types';


export type NotificationResourceV3GetBundlesParams = {
  /**
  * Whether to include applications in each bundle.
  * @type { any }
  * @memberof NotificationResourceV3GetBundlesApi
  */
  includeApplications?: any,
  options?: AxiosRequestConfig
}

export type NotificationResourceV3GetBundlesReturnType = void;

const isNotificationResourceV3GetBundlesObjectParams = (params: [NotificationResourceV3GetBundlesParams] | unknown[]): params is [NotificationResourceV3GetBundlesParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Returns a list of configured bundles that includes the bundle name, the display name, and the ID. You can use this list to configure a filter in the UI.
* @summary List configured bundles
* @param {NotificationResourceV3GetBundlesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV3GetBundlesParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([NotificationResourceV3GetBundlesParams] | [any, AxiosRequestConfig])) => {
    const params = isNotificationResourceV3GetBundlesObjectParams(config) ? config[0] : ['includeApplications', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV3GetBundlesParams;
    const { includeApplications, options = {} } = params;
    const localVarPath = `/notifications/bundles`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (includeApplications !== undefined) {
        localVarQueryParameter['includeApplications'] = includeApplications;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<NotificationResourceV3GetBundlesReturnType>(Promise.resolve(args));
}

export default notificationResourceV3GetBundlesParamCreator;
