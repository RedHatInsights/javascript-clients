// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { BadRequest, HelptopicsNameGet200Response, NotFound } from '../types';


export type HelptopicsNameGetParams = {
  options?: AxiosRequestConfig
}

const isHelptopicsNameGetObjectParams = (params: [HelptopicsNameGetParams] | unknown[]): params is [HelptopicsNameGetParams] => {
  return params.length === 1
}
/**
*
* @summary Return a help topics set by topic name
* @param {HelptopicsNameGetParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const helptopicsNameGetParamCreator = async (...config: ([HelptopicsNameGetParams] | [AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isHelptopicsNameGetObjectParams(config) ? config[0] : ['options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as HelptopicsNameGetParams;
    const { options = {} } = params;
    const localVarPath = `/helptopics/{name}`;
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
    };
}

export default helptopicsNameGetParamCreator;
