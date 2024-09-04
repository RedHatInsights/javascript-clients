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


export type ShowAuthenticationParams = {
  /**
  * ID of the resource
  * @type { string }
  * @memberof ShowAuthenticationApi
  */
  id: string,
  options?: AxiosRequestConfig
}

const isShowAuthenticationObjectParams = (params: [ShowAuthenticationParams] | unknown[]): params is [ShowAuthenticationParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id')
}
/**
* Returns a Authentication object
* @summary Show an existing Authentication
* @param {ShowAuthenticationParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const showAuthenticationParamCreator = async (...config: ([ShowAuthenticationParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isShowAuthenticationObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ShowAuthenticationParams;
    const { id, options = {} } = params;
    const localVarPath = `/authentications/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
        auth:[
        {
        // authentication UserSecurity required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };
}

export default showAuthenticationParamCreator;
