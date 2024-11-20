// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { HelptopicsGet200Response } from '../types';


export type HelptopicsGetParams = {
  options?: AxiosRequestConfig
}

export type HelptopicsGetReturnType = AxiosPromise<HelptopicsGet200Response>;

const isHelptopicsGetObjectParams = (params: [HelptopicsGetParams] | unknown[]): params is [HelptopicsGetParams] => {
  return params.length === 1
}
/**
*
* @summary Returns list of all help topics
* @param {HelptopicsGetParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const helptopicsGetParamCreator = async (...config: ([HelptopicsGetParams] | [AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isHelptopicsGetObjectParams(config) ? config[0] : ['options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as HelptopicsGetParams;
    const { options = {} } = params;
    const localVarPath = `/helptopics`;
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

export default helptopicsGetParamCreator;
