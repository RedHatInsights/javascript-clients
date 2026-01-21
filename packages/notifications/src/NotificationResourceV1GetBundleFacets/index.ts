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


export type NotificationResourceV1GetBundleFacetsParams = {
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV1GetBundleFacetsApi
  */
  includeApplications?: any,
  options?: AxiosRequestConfig
}

export type NotificationResourceV1GetBundleFacetsReturnType = any;

const isNotificationResourceV1GetBundleFacetsObjectParams = (params: [NotificationResourceV1GetBundleFacetsParams] | unknown[]): params is [NotificationResourceV1GetBundleFacetsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Returns a list of configured bundles that includes the bundle name, the display name, and the ID. You can use this list to configure a filter in the UI.
* @summary List configured bundles
* @param {NotificationResourceV1GetBundleFacetsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1GetBundleFacetsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([NotificationResourceV1GetBundleFacetsParams] | [any, AxiosRequestConfig])) => {
    const params = isNotificationResourceV1GetBundleFacetsObjectParams(config) ? config[0] : ['includeApplications', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV1GetBundleFacetsParams;
    const { includeApplications, options = {} } = params;
    const localVarPath = `/notifications/facets/bundles`;
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

    return sendRequest<NotificationResourceV1GetBundleFacetsReturnType>(Promise.resolve(args));
}

export default notificationResourceV1GetBundleFacetsParamCreator;
