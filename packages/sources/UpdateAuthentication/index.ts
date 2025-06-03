// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Authentication, ErrorNotFound } from '../types';


export type UpdateAuthenticationParams = {
  /**
  * ID of the resource
  * @type { string }
  * @memberof UpdateAuthenticationApi
  */
  id: string,
  /**
  * Authentication attributes to update
  * @type { Authentication }
  * @memberof UpdateAuthenticationApi
  */
  authentication: Authentication,
  options?: AxiosRequestConfig
}

export type UpdateAuthenticationReturnType = AxiosPromise<void>;

const isUpdateAuthenticationObjectParams = (params: [UpdateAuthenticationParams] | unknown[]): params is [UpdateAuthenticationParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'id') && Object.prototype.hasOwnProperty.call(params[0], 'authentication')
}
/**
* Updates a Authentication object
* @summary Update an existing Authentication
* @param {UpdateAuthenticationParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const updateAuthenticationParamCreator = async (...config: ([UpdateAuthenticationParams] | [string, Authentication, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isUpdateAuthenticationObjectParams(config) ? config[0] : ['id', 'authentication', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as UpdateAuthenticationParams;
    const { id, authentication, options = {} } = params;
    const localVarPath = `/authentications/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PATCH' as Method, ...options};
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

export default updateAuthenticationParamCreator;
