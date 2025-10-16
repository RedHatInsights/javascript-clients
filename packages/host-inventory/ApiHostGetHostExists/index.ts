// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { HostIdOut } from '../types';


export type ApiHostGetHostExistsParams = {
  /**
  * Filter by insights_id
  * @type { string }
  * @memberof ApiHostGetHostExistsApi
  */
  insightsId?: string,
  options?: AxiosRequestConfig
}

export type ApiHostGetHostExistsReturnType = HostIdOut;

const isApiHostGetHostExistsObjectParams = (params: [ApiHostGetHostExistsParams] | unknown[]): params is [ApiHostGetHostExistsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Find one host by insights_id, if it exists. <br /><br /> Required permissions: inventory:hosts:read
* @summary Find one host by insights_id, if it exists
* @param {ApiHostGetHostExistsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiHostGetHostExistsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiHostGetHostExistsParams] | [string, AxiosRequestConfig])) => {
    const params = isApiHostGetHostExistsObjectParams(config) ? config[0] : ['insightsId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiHostGetHostExistsParams;
    const { insightsId, options = {} } = params;
    const localVarPath = `/host_exists`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (insightsId !== undefined) {
        localVarQueryParameter['insights_id'] = insightsId;
    }



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
        }
        ]
    };

    return sendRequest<ApiHostGetHostExistsReturnType>(Promise.resolve(args));
}

export default apiHostGetHostExistsParamCreator;
