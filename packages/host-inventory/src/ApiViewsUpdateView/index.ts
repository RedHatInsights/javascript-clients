// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ViewOut, ViewPatch } from '../types';


export type ApiViewsUpdateViewParams = {
  /**
  * View ID.
  * @type { string }
  * @memberof ApiViewsUpdateViewApi
  */
  viewId: string,
  /**
  * Data with which to update the inventory view.
  * @type { ViewPatch }
  * @memberof ApiViewsUpdateViewApi
  */
  viewPatch: ViewPatch,
  options?: AxiosRequestConfig
}

export type ApiViewsUpdateViewReturnType = ViewOut;

const isApiViewsUpdateViewObjectParams = (params: [ApiViewsUpdateViewParams] | unknown[]): params is [ApiViewsUpdateViewParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'viewId') && Object.prototype.hasOwnProperty.call(params[0], 'viewPatch')
  }
  return false
}
/**
* Updates an existing inventory view\'s name, description, configuration, or sharing settings. Only the view creator can update a view. System views cannot be updated. <br /><br /> Required permissions: inventory:views:write <br /><br /> <b>NOTE:</b> This endpoint is not yet implemented and will return HTTP 501.
* @summary Update an inventory view
* @param {ApiViewsUpdateViewParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiViewsUpdateViewParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiViewsUpdateViewParams] | [string, ViewPatch, AxiosRequestConfig])) => {
    const params = isApiViewsUpdateViewObjectParams(config) ? config[0] : ['viewId', 'viewPatch', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiViewsUpdateViewParams;
    const { viewId, viewPatch, options = {} } = params;
    const localVarPath = `/beta/views/{view_id}`
        .replace(`{${"view_id"}}`, encodeURIComponent(String(viewId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PUT' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: viewPatch,
        auth:[
        {
        // authentication ApiKeyAuth required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };

    return sendRequest<ApiViewsUpdateViewReturnType>(Promise.resolve(args));
}

export default apiViewsUpdateViewParamCreator;
