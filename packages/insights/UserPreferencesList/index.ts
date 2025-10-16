// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { SettingsDDF } from '../types';


export type UserPreferencesListParams = {
  options?: AxiosRequestConfig
}

export type UserPreferencesListReturnType = Array<SettingsDDF>;

const isUserPreferencesListObjectParams = (params: [UserPreferencesListParams] | unknown[]): params is [UserPreferencesListParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Describe the settings we have in a Data-Driven Forms way.  This simply compiles the \'show_satellite_hosts\' account-wide setting and the weekly report \'is_subscribed\' user-specific setting into one handy view, with the description metadata necessary to use Data-Driven Forms to display it.
* @param {UserPreferencesListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const userPreferencesListParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([UserPreferencesListParams] | [AxiosRequestConfig])) => {
    const params = isUserPreferencesListObjectParams(config) ? config[0] : ['options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as UserPreferencesListParams;
    const { options = {} } = params;
    const localVarPath = `/api/insights/v1/user-preferences/`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        auth:[
        {
        // authentication x-rh-identity required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };

    return sendRequest<UserPreferencesListReturnType>(Promise.resolve(args));
}

export default userPreferencesListParamCreator;
