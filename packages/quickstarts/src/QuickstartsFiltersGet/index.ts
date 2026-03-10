// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { QuickstartsFiltersGet200Response } from '../types';


export type QuickstartsFiltersGetParams = {
  options?: AxiosRequestConfig
}

export type QuickstartsFiltersGetReturnType = QuickstartsFiltersGet200Response;

const isQuickstartsFiltersGetObjectParams = (params: [QuickstartsFiltersGetParams] | unknown[]): params is [QuickstartsFiltersGetParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
*
* @summary Returns filters for quickstarts
* @param {QuickstartsFiltersGetParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const quickstartsFiltersGetParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([QuickstartsFiltersGetParams] | [AxiosRequestConfig])) => {
    const params = isQuickstartsFiltersGetObjectParams(config) ? config[0] : ['options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as QuickstartsFiltersGetParams;
    const { options = {} } = params;
    const localVarPath = `/quickstarts/filters`;
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

    return sendRequest<QuickstartsFiltersGetReturnType>(Promise.resolve(args));
}

export default quickstartsFiltersGetParamCreator;
