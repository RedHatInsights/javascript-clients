// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { CreateProfileRequest, Profile } from '../types';


export type CreateProfileParams = {
  /**
  *
  * @type { CreateProfileRequest }
  * @memberof CreateProfileApi
  */
  createProfileRequest: CreateProfileRequest,
  options?: AxiosRequestConfig
}

export type CreateProfileReturnType = AxiosPromise<Profile>;

const isCreateProfileObjectParams = (params: [CreateProfileParams] | unknown[]): params is [CreateProfileParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'createProfileRequest')
}
/**
* Create and optionally activate a new profile.
* @summary Create a new profile
* @param {CreateProfileParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const createProfileParamCreator = async (...config: ([CreateProfileParams] | [CreateProfileRequest, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isCreateProfileObjectParams(config) ? config[0] : ['createProfileRequest', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as CreateProfileParams;
    const { createProfileRequest, options = {} } = params;
    const localVarPath = `/profiles`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: createProfileRequest,
    };
}

export default createProfileParamCreator;
