// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { GetVersion200Response } from '../types';


export type GetVersionParams = {
  options?: AxiosRequestConfig
}

export type GetVersionReturnType = AxiosPromise<GetVersion200Response>;

const isGetVersionObjectParams = (params: [GetVersionParams] | unknown[]): params is [GetVersionParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Provides information about the version of the service
* @summary Get service version
* @param {GetVersionParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getVersionParamCreator = async (...config: ([GetVersionParams] | [AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isGetVersionObjectParams(config) ? config[0] : ['options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetVersionParams;
    const { options = {} } = params;
    const localVarPath = `/version`;
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

export default getVersionParamCreator;
