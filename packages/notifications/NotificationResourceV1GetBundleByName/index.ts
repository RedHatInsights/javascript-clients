// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../utils/common';
import type { RequestArgs } from '../utils/base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, AuthTypeEnum } from '../utils/base';
import { Configuration } from '../utils/configuration';

// @ts-ignore
import type { Bundle } from '../types';


export type NotificationResourceV1GetBundleByNameParams = {
  /**
  *
  * @type { string }
  * @memberof NotificationResourceV1GetBundleByNameApi
  */
  bundleName: string,
  options?: AxiosRequestConfig
}

const isNotificationResourceV1GetBundleByNameObjectParams = (params: [NotificationResourceV1GetBundleByNameParams] | unknown[]): params is [NotificationResourceV1GetBundleByNameParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'bundleName')
}
/**
* Retrieves the details of a bundle by searching by its name.
* @summary Retrieve a bundle by name
* @param {NotificationResourceV1GetBundleByNameParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1GetBundleByNameParamCreator = async (...config: ([NotificationResourceV1GetBundleByNameParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isNotificationResourceV1GetBundleByNameObjectParams(config) ? config[0] : ['bundleName', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV1GetBundleByNameParams;
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

export default notificationResourceV1GetBundleByNameParamCreator;
