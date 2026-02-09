// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type {  } from '../types';


export type GetOpenAPISpecParams = {
  options?: AxiosRequestConfig
}

export type GetOpenAPISpecReturnType = object;

const isGetOpenAPISpecObjectParams = (params: [GetOpenAPISpecParams] | unknown[]): params is [GetOpenAPISpecParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Returns the OpenAPI specification document for this API
* @summary Get the OpenAPI specification
* @param {GetOpenAPISpecParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getOpenAPISpecParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([GetOpenAPISpecParams] | [AxiosRequestConfig])) => {
    const params = isGetOpenAPISpecObjectParams(config) ? config[0] : ['options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetOpenAPISpecParams;
    const { options = {} } = params;
    const localVarPath = `/openapi.json`;
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
        // authentication basic_auth required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };

    return sendRequest<GetOpenAPISpecReturnType>(Promise.resolve(args));
}

export default getOpenAPISpecParamCreator;
