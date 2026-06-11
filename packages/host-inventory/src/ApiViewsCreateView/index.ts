// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ViewIn, ViewOut } from '../types';


export type ApiViewsCreateViewParams = {
  /**
  * Data required to create a new inventory view.
  * @type { ViewIn }
  * @memberof ApiViewsCreateViewApi
  */
  viewIn: ViewIn,
  options?: AxiosRequestConfig
}

export type ApiViewsCreateViewReturnType = ViewOut;

const isApiViewsCreateViewObjectParams = (params: [ApiViewsCreateViewParams] | unknown[]): params is [ApiViewsCreateViewParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'viewIn')
  }
  return false
}
/**
* Creates a new inventory view with the provided name and configuration. The view is owned by the requesting user. <br /><br /> Required permissions: inventory:views:write <br /><br /> <b>NOTE:</b> This endpoint is not yet implemented and will return HTTP 501.
* @summary Create a new inventory view
* @param {ApiViewsCreateViewParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiViewsCreateViewParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiViewsCreateViewParams] | [ViewIn, AxiosRequestConfig])) => {
    const params = isApiViewsCreateViewObjectParams(config) ? config[0] : ['viewIn', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiViewsCreateViewParams;
    const { viewIn, options = {} } = params;
    const localVarPath = `/beta/views`;
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
        serializeData: viewIn,
        auth:[
        {
        // authentication ApiKeyAuth required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };

    return sendRequest<ApiViewsCreateViewReturnType>(Promise.resolve(args));
}

export default apiViewsCreateViewParamCreator;
