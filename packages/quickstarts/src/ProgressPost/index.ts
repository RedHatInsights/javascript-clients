// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { BadRequest, QuickstartProgress, QuickstartProgressRequest } from '../types';


export type ProgressPostParams = {
  /**
  *
  * @type { QuickstartProgressRequest }
  * @memberof ProgressPostApi
  */
  quickstartProgressRequest?: QuickstartProgressRequest,
  options?: AxiosRequestConfig
}

export type ProgressPostReturnType = QuickstartProgress;

const isProgressPostObjectParams = (params: [ProgressPostParams] | unknown[]): params is [ProgressPostParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
*
* @summary Create or update progress record
* @param {ProgressPostParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const progressPostParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ProgressPostParams] | [QuickstartProgressRequest, AxiosRequestConfig])) => {
    const params = isProgressPostObjectParams(config) ? config[0] : ['quickstartProgressRequest', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ProgressPostParams;
    const { quickstartProgressRequest, options = {} } = params;
    const localVarPath = `/progress`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: quickstartProgressRequest,
    };

    return sendRequest<ProgressPostReturnType>(Promise.resolve(args));
}

export default progressPostParamCreator;
