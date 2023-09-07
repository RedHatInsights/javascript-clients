// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../utils/common';
import type { RequestArgs } from '../utils/base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, AuthTypeEnum } from '../utils/base';
import { Configuration } from '../utils/configuration';

// @ts-ignore
import type { Facet } from '../types';


export type NotificationResourceV1GetApplicationsFacetsParams = {
  /**
  *
  * @type { string }
  * @memberof NotificationResourceV1GetApplicationsFacetsApi
  */
  bundleName?: string,
  options?: AxiosRequestConfig
}

const isNotificationResourceV1GetApplicationsFacetsObjectParams = (params: [NotificationResourceV1GetApplicationsFacetsParams] | unknown[]): params is [NotificationResourceV1GetApplicationsFacetsParams] => {
  return params.length === 1 && true
}
/**
*
* @summary Return a thin list of configured applications. This can be used to configure a filter in the UI
* @param {NotificationResourceV1GetApplicationsFacetsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1GetApplicationsFacetsParamCreator = async (...config: ([NotificationResourceV1GetApplicationsFacetsParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
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

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default notificationResourceV1GetApplicationsFacetsParamCreator;
