// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { StalenessOutput } from '../types';


export type ApiStalenessGetStalenessParams = {
  options?: AxiosRequestConfig
}

export type ApiStalenessGetStalenessReturnType = StalenessOutput;

const isApiStalenessGetStalenessObjectParams = (params: [ApiStalenessGetStalenessParams] | unknown[]): params is [ApiStalenessGetStalenessParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Read the entire list of all accounts staleness available. Required permissions: staleness:staleness:read
* @summary Read the entire list of account staleness
* @param {ApiStalenessGetStalenessParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiStalenessGetStalenessParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiStalenessGetStalenessParams] | [AxiosRequestConfig])) => {
    const params = isApiStalenessGetStalenessObjectParams(config) ? config[0] : ['options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiStalenessGetStalenessParams;
    const { options = {} } = params;
    const localVarPath = `/account/staleness`;
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
        // authentication ApiKeyAuth required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        },
        {
        // authentication BearerAuth required
        // bearer auth required
        authType: AuthTypeEnum.Bearer,
        }
        ]
    };

    return sendRequest<ApiStalenessGetStalenessReturnType>(Promise.resolve(args));
}

export default apiStalenessGetStalenessParamCreator;
