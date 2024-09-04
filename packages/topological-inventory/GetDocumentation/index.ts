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


export type GetDocumentationParams = {
  options?: AxiosRequestConfig
}

const isGetDocumentationObjectParams = (params: [GetDocumentationParams] | unknown[]): params is [GetDocumentationParams] => {
  return params.length === 1
}
/**
*
* @summary Return this API document in JSON format
* @param {GetDocumentationParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getDocumentationParamCreator = async (...config: ([GetDocumentationParams] | [AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isGetDocumentationObjectParams(config) ? config[0] : ['options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetDocumentationParams;
    const { options = {} } = params;
    const localVarPath = `/openapi.json`;
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

export default getDocumentationParamCreator;
