// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../utils/common';
import type { RequestArgs } from '../utils/base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, AuthTypeEnum } from '../utils/base';
import { Configuration } from '../utils/configuration';

// @ts-ignore
import type { SettingsValues } from '../types';


export type UserConfigResourceV1SaveSettingsParams = {
  /**
  *
  * @type { SettingsValues }
  * @memberof UserConfigResourceV1SaveSettingsApi
  */
  settingsValues?: SettingsValues,
  options?: AxiosRequestConfig
}

const isUserConfigResourceV1SaveSettingsObjectParams = (params: [UserConfigResourceV1SaveSettingsParams] | unknown[]): params is [UserConfigResourceV1SaveSettingsParams] => {
  return params.length === 1 && true
}
/**
*
* @param {UserConfigResourceV1SaveSettingsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const userConfigResourceV1SaveSettingsParamCreator = async (...config: ([UserConfigResourceV1SaveSettingsParams] | [SettingsValues, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isUserConfigResourceV1SaveSettingsObjectParams(config) ? config[0] : ['settingsValues', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as UserConfigResourceV1SaveSettingsParams;
    const { settingsValues, options = {} } = params;
    const localVarPath = `/user-config/notification-preference`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST', ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: settingsValues,
    };
}

export default userConfigResourceV1SaveSettingsParamCreator;
