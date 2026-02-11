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


export type NotificationResourceV1GetApplicationsFacetsParams = {
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV1GetApplicationsFacetsApi
  */
  bundleName?: any,
  options?: AxiosRequestConfig
}

export type NotificationResourceV1GetApplicationsFacetsReturnType = any;

const isNotificationResourceV1GetApplicationsFacetsObjectParams = (params: [NotificationResourceV1GetApplicationsFacetsParams] | unknown[]): params is [NotificationResourceV1GetApplicationsFacetsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Returns a list of configured applications that includes the application name, the display name, and the ID. You can use this list to configure a filter in the UI.
* @summary List configured applications
* @param {NotificationResourceV1GetApplicationsFacetsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1GetApplicationsFacetsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([NotificationResourceV1GetApplicationsFacetsParams] | [any, AxiosRequestConfig])) => {
    const params = isNotificationResourceV1GetApplicationsFacetsObjectParams(config) ? config[0] : ['bundleName', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV1GetApplicationsFacetsParams;
    const { bundleName, options = {} } = params;
    const localVarPath = `/notifications/facets/applications`;
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

    return sendRequest<NotificationResourceV1GetApplicationsFacetsReturnType>(Promise.resolve(args));
}

export default notificationResourceV1GetApplicationsFacetsParamCreator;
