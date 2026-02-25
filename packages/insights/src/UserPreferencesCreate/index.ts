// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PreferencesInput } from '../types';


export type UserPreferencesCreateParams = {
  /**
  *
  * @type { PreferencesInput }
  * @memberof UserPreferencesCreateApi
  */
  preferencesInput: PreferencesInput,
  options?: AxiosRequestConfig
}

export type UserPreferencesCreateReturnType = PreferencesInput;

const isUserPreferencesCreateObjectParams = (params: [UserPreferencesCreateParams] | unknown[]): params is [UserPreferencesCreateParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'preferencesInput')
  }
  return false
}
/**
* Accept the settings as input, and adjust the actual models accordingly.  The current account settings will be updated, or one will be created, with the
* @param {UserPreferencesCreateParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const userPreferencesCreateParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([UserPreferencesCreateParams] | [PreferencesInput, AxiosRequestConfig])) => {
    const params = isUserPreferencesCreateObjectParams(config) ? config[0] : ['preferencesInput', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as UserPreferencesCreateParams;
    const { preferencesInput, options = {} } = params;
    const localVarPath = `/api/insights/v1/user-preferences/`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: preferencesInput,
        auth:[
        {
        // authentication x-rh-identity required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };

    return sendRequest<UserPreferencesCreateReturnType>(Promise.resolve(args));
}

export default userPreferencesCreateParamCreator;
