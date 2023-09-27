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


export type NotificationResourceV1GetBundleFacetsParams = {
  /**
  *
  * @type { boolean }
  * @memberof NotificationResourceV1GetBundleFacetsApi
  */
  includeApplications?: boolean,
  options?: AxiosRequestConfig
}

const isNotificationResourceV1GetBundleFacetsObjectParams = (params: [NotificationResourceV1GetBundleFacetsParams] | unknown[]): params is [NotificationResourceV1GetBundleFacetsParams] => {
  return params.length === 1 && true
}
/**
* Returns a list of configured bundles that includes the bundle name, the display name, and the ID. You can use this list to configure a filter in the UI.
* @summary List configured bundles
* @param {NotificationResourceV1GetBundleFacetsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1GetBundleFacetsParamCreator = async (...config: ([NotificationResourceV1GetBundleFacetsParams] | [boolean, AxiosRequestConfig])): Promise<RequestArgs> => {
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

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default notificationResourceV1GetBundleFacetsParamCreator;
