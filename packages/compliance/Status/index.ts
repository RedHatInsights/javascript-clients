// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Status200Response } from '../types';


export type StatusParams = {
  options?: AxiosRequestConfig
}

export type StatusReturnType = AxiosPromise<Status200Response>;

const isStatusObjectParams = (params: [StatusParams] | unknown[]): params is [StatusParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Display Compliance status
* @summary status
* @param {StatusParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const statusParamCreator = async (...config: ([StatusParams] | [AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isStatusObjectParams(config) ? config[0] : ['options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as StatusParams;
    const { options = {} } = params;
    const localVarPath = `/status`;
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

export default statusParamCreator;
