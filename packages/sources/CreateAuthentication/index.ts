// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Authentication } from '../types';


export type CreateAuthenticationParams = {
  /**
  * Authentication attributes to create
  * @type { Authentication }
  * @memberof CreateAuthenticationApi
  */
  authentication: Authentication,
  options?: AxiosRequestConfig
}

export type CreateAuthenticationReturnType = AxiosPromise<Authentication>;

const isCreateAuthenticationObjectParams = (params: [CreateAuthenticationParams] | unknown[]): params is [CreateAuthenticationParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'authentication')
}
/**
* Creates a Authentication object
* @summary Create a new Authentication
* @param {CreateAuthenticationParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const createAuthenticationParamCreator = async (...config: ([CreateAuthenticationParams] | [Authentication, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isCreateAuthenticationObjectParams(config) ? config[0] : ['authentication', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as CreateAuthenticationParams;
    const { authentication, options = {} } = params;
    const localVarPath = `/authentications`;
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
        serializeData: authentication,
        auth:[
        {
        // authentication UserSecurity required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };
}

export default createAuthenticationParamCreator;
