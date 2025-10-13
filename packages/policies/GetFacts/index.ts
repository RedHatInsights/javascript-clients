// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Fact } from '../types';


export type GetFactsParams = {
  options?: AxiosRequestConfig
}

export type GetFactsReturnType = Array<Fact>;

const isGetFactsObjectParams = (params: [GetFactsParams] | unknown[]): params is [GetFactsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
*
* @summary Retrieve a list of fact (keys) along with their data types
* @param {GetFactsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getFactsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([GetFactsParams] | [AxiosRequestConfig])) => {
    const params = isGetFactsObjectParams(config) ? config[0] : ['options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetFactsParams;
    const { options = {} } = params;
    const localVarPath = `/facts`;
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
    };

    return sendRequest<GetFactsReturnType>(Promise.resolve(args));
}

export default getFactsParamCreator;
