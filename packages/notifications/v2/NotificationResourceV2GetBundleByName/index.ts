// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Bundle } from '../types';


export type NotificationResourceV2GetBundleByNameParams = {
  /**
  *
  * @type { string }
  * @memberof NotificationResourceV2GetBundleByNameApi
  */
  bundleName: string,
  options?: AxiosRequestConfig
}

export type NotificationResourceV2GetBundleByNameReturnType = AxiosPromise<Bundle>;

const isNotificationResourceV2GetBundleByNameObjectParams = (params: [NotificationResourceV2GetBundleByNameParams] | unknown[]): params is [NotificationResourceV2GetBundleByNameParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'bundleName')
}
/**
* Retrieves the details of a bundle by searching by its name.
* @summary Retrieve a bundle by name
* @param {NotificationResourceV2GetBundleByNameParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV2GetBundleByNameParamCreator = async (...config: ([NotificationResourceV2GetBundleByNameParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isNotificationResourceV2GetBundleByNameObjectParams(config) ? config[0] : ['bundleName', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV2GetBundleByNameParams;
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

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default notificationResourceV2GetBundleByNameParamCreator;
