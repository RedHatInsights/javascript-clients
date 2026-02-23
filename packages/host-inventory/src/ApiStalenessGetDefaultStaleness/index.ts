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


export type ApiStalenessGetDefaultStalenessParams = {
  options?: AxiosRequestConfig
}

export type ApiStalenessGetDefaultStalenessReturnType = StalenessOutput;

const isApiStalenessGetDefaultStalenessObjectParams = (params: [ApiStalenessGetDefaultStalenessParams] | unknown[]): params is [ApiStalenessGetDefaultStalenessParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Read the entire list of all accounts staleness available. Required permissions: staleness:staleness:read
* @summary Read the entire list of account staleness
* @param {ApiStalenessGetDefaultStalenessParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiStalenessGetDefaultStalenessParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiStalenessGetDefaultStalenessParams] | [AxiosRequestConfig])) => {
    const params = isApiStalenessGetDefaultStalenessObjectParams(config) ? config[0] : ['options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiStalenessGetDefaultStalenessParams;
    const { options = {} } = params;
    const localVarPath = `/account/staleness/defaults`;
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

    return sendRequest<ApiStalenessGetDefaultStalenessReturnType>(Promise.resolve(args));
}

export default apiStalenessGetDefaultStalenessParamCreator;
