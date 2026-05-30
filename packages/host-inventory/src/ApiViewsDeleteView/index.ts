// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type {  } from '../types';


export type ApiViewsDeleteViewParams = {
  /**
  * View ID.
  * @type { string }
  * @memberof ApiViewsDeleteViewApi
  */
  viewId: string,
  options?: AxiosRequestConfig
}

export type ApiViewsDeleteViewReturnType = void;

const isApiViewsDeleteViewObjectParams = (params: [ApiViewsDeleteViewParams] | unknown[]): params is [ApiViewsDeleteViewParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'viewId')
  }
  return false
}
/**
* Deletes an existing inventory view. Only the view creator can delete a view. System views cannot be deleted. <br /><br /> Required permissions: inventory:views:write <br /><br /> <b>NOTE:</b> This endpoint is not yet implemented and will return HTTP 501.
* @summary Delete an inventory view
* @param {ApiViewsDeleteViewParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiViewsDeleteViewParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiViewsDeleteViewParams] | [string, AxiosRequestConfig])) => {
    const params = isApiViewsDeleteViewObjectParams(config) ? config[0] : ['viewId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiViewsDeleteViewParams;
    const { viewId, options = {} } = params;
    const localVarPath = `/beta/views/{view_id}`
        .replace(`{${"view_id"}}`, encodeURIComponent(String(viewId)));
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

    return sendRequest<ApiViewsDeleteViewReturnType>(Promise.resolve(args));
}

export default apiViewsDeleteViewParamCreator;
