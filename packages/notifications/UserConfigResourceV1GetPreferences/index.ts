// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../utils/common';
import type { RequestArgs } from '../utils/base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, AuthTypeEnum } from '../utils/base';
import { Configuration } from '../utils/configuration';

// @ts-ignore
import type { UserConfigPreferences } from '../types';


export type UserConfigResourceV1GetPreferencesParams = {
  /**
  *
  * @type { string }
  * @memberof UserConfigResourceV1GetPreferencesApi
  */
  applicationName: string,
  /**
  *
  * @type { string }
  * @memberof UserConfigResourceV1GetPreferencesApi
  */
  bundleName: string,
  options?: AxiosRequestConfig
}

const isUserConfigResourceV1GetPreferencesObjectParams = (params: [UserConfigResourceV1GetPreferencesParams] | unknown[]): params is [UserConfigResourceV1GetPreferencesParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'applicationName') && Object.prototype.hasOwnProperty.call(params, 'bundleName')
}
/**
*
* @param {UserConfigResourceV1GetPreferencesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const userConfigResourceV1GetPreferencesParamCreator = async (...config: ([UserConfigResourceV1GetPreferencesParams] | [string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isUserConfigResourceV1GetPreferencesObjectParams(config) ? config[0] : ['applicationName', 'bundleName', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as UserConfigResourceV1GetPreferencesParams;
    const { applicationName, bundleName, options = {} } = params;
    const localVarPath = `/user-config/notification-preference/{bundleName}/{applicationName}`
        .replace(`{${"applicationName"}}`, encodeURIComponent(String(applicationName)))
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

export default userConfigResourceV1GetPreferencesParamCreator;
