// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ViewOut } from '../types';


export type ApiViewsGetViewByIdParams = {
  /**
  * View ID.
  * @type { string }
  * @memberof ApiViewsGetViewByIdApi
  */
  viewId: string,
  options?: AxiosRequestConfig
}

export type ApiViewsGetViewByIdReturnType = ViewOut;

const isApiViewsGetViewByIdObjectParams = (params: [ApiViewsGetViewByIdParams] | unknown[]): params is [ApiViewsGetViewByIdParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'viewId')
  }
  return false
}
/**
* Returns the full details and configuration for a single inventory view. The view must be visible to the requesting user. <br /><br /> Required permissions: inventory:views:read <br /><br /> <b>NOTE:</b> This endpoint is not yet implemented and will return HTTP 501.
* @summary Get a single inventory view
* @param {ApiViewsGetViewByIdParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiViewsGetViewByIdParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiViewsGetViewByIdParams] | [string, AxiosRequestConfig])) => {
    const params = isApiViewsGetViewByIdObjectParams(config) ? config[0] : ['viewId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiViewsGetViewByIdParams;
    const { viewId, options = {} } = params;
    const localVarPath = `/beta/views/{view_id}`
        .replace(`{${"view_id"}}`, encodeURIComponent(String(viewId)));
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
        }
        ]
    };

    return sendRequest<ApiViewsGetViewByIdReturnType>(Promise.resolve(args));
}

export default apiViewsGetViewByIdParamCreator;
