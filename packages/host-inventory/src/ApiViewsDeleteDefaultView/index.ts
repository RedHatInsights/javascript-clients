import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

import type {  } from '../types';


export type ApiViewsDeleteDefaultViewParams = {
  options?: AxiosRequestConfig
}

export type ApiViewsDeleteDefaultViewReturnType = void;

const isApiViewsDeleteDefaultViewObjectParams = (params: [ApiViewsDeleteDefaultViewParams] | unknown[]): params is [ApiViewsDeleteDefaultViewParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Removes the requesting user\'s default view preference. After deletion the default falls back to the \"All systems\" system view. Idempotent — returns 204 even if no preference exists. <br /><br /> Required permissions: inventory:views:write
* @summary Unpin the default view
* @param {ApiViewsDeleteDefaultViewParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiViewsDeleteDefaultViewParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiViewsDeleteDefaultViewParams] | [AxiosRequestConfig])) => {
    const params = isApiViewsDeleteDefaultViewObjectParams(config) ? config[0] : ['options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiViewsDeleteDefaultViewParams;
    const { options = {} } = params;
    const localVarPath = `/beta/views/default`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'DELETE' as Method, ...options};
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
        }
        ]
    };

    return sendRequest<ApiViewsDeleteDefaultViewReturnType>(Promise.resolve(args));
}

export default apiViewsDeleteDefaultViewParamCreator;
