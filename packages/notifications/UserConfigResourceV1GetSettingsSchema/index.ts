// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../utils/common';
import type { RequestArgs } from '../utils/base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, AuthTypeEnum } from '../utils/base';
import { Configuration } from '../utils/configuration';

// @ts-ignore
import type {  } from '../types';


export type UserConfigResourceV1GetSettingsSchemaParams = {
  /**
  *
  * @type { string }
  * @memberof UserConfigResourceV1GetSettingsSchemaApi
  */
  bundleName?: string,
  options?: AxiosRequestConfig
}

const isUserConfigResourceV1GetSettingsSchemaObjectParams = (params: [UserConfigResourceV1GetSettingsSchemaParams] | unknown[]): params is [UserConfigResourceV1GetSettingsSchemaParams] => {
  return params.length === 1 && true
}
/**
*
* @param {UserConfigResourceV1GetSettingsSchemaParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const userConfigResourceV1GetSettingsSchemaParamCreator = async (...config: ([UserConfigResourceV1GetSettingsSchemaParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isUserConfigResourceV1GetSettingsSchemaObjectParams(config) ? config[0] : ['bundleName', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as UserConfigResourceV1GetSettingsSchemaParams;
    const { bundleName, options = {} } = params;
    const localVarPath = `/user-config/notification-preference`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET', ...options};
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

export default userConfigResourceV1GetSettingsSchemaParamCreator;
