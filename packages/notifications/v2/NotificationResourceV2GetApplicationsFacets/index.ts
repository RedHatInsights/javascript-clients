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


export type NotificationResourceV2GetApplicationsFacetsParams = {
  /**
  *
  * @type { string }
  * @memberof NotificationResourceV2GetApplicationsFacetsApi
  */
  bundleName?: string,
  options?: AxiosRequestConfig
}

export type NotificationResourceV2GetApplicationsFacetsReturnType = AxiosPromise<Array<Facet>>;

const isNotificationResourceV2GetApplicationsFacetsObjectParams = (params: [NotificationResourceV2GetApplicationsFacetsParams] | unknown[]): params is [NotificationResourceV2GetApplicationsFacetsParams] => {
  return params.length === 1 && true
}
/**
* Returns a list of configured applications that includes the application name, the display name, and the ID. You can use this list to configure a filter in the UI.
* @summary List configured applications
* @param {NotificationResourceV2GetApplicationsFacetsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV2GetApplicationsFacetsParamCreator = async (...config: ([NotificationResourceV2GetApplicationsFacetsParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isNotificationResourceV2GetApplicationsFacetsObjectParams(config) ? config[0] : ['bundleName', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV2GetApplicationsFacetsParams;
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

export default notificationResourceV2GetApplicationsFacetsParamCreator;
