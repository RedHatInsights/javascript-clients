// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Facet } from '../types';


export type NotificationResourceV2GetBundleFacetsParams = {
  /**
  *
  * @type { boolean }
  * @memberof NotificationResourceV2GetBundleFacetsApi
  */
  includeApplications?: boolean,
  options?: AxiosRequestConfig
}

export type NotificationResourceV2GetBundleFacetsReturnType = AxiosPromise<Array<Facet>>;

const isNotificationResourceV2GetBundleFacetsObjectParams = (params: [NotificationResourceV2GetBundleFacetsParams] | unknown[]): params is [NotificationResourceV2GetBundleFacetsParams] => {
  return params.length === 1 && true
}
/**
* Returns a list of configured bundles that includes the bundle name, the display name, and the ID. You can use this list to configure a filter in the UI.
* @summary List configured bundles
* @param {NotificationResourceV2GetBundleFacetsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV2GetBundleFacetsParamCreator = async (...config: ([NotificationResourceV2GetBundleFacetsParams] | [boolean, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isNotificationResourceV2GetBundleFacetsObjectParams(config) ? config[0] : ['includeApplications', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV2GetBundleFacetsParams;
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

export default notificationResourceV2GetBundleFacetsParamCreator;
