import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

import type { DefaultViewIn, ViewOut } from '../types';


export type ApiViewsSetDefaultViewParams = {
  /**
  * The view to pin as default.
  * @type { DefaultViewIn }
  * @memberof ApiViewsSetDefaultViewApi
  */
  defaultViewIn: DefaultViewIn,
  options?: AxiosRequestConfig
}

export type ApiViewsSetDefaultViewReturnType = ViewOut;

const isApiViewsSetDefaultViewObjectParams = (params: [ApiViewsSetDefaultViewParams] | unknown[]): params is [ApiViewsSetDefaultViewParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'defaultViewIn')
  }
  return false
}
/**
* Pins a visible view as the requesting user\'s default. The default view is the one loaded automatically when the user opens the inventory page. If a preference already exists it is replaced (upsert). <br /><br /> Required permissions: inventory:views:write
* @summary Set the default view
* @param {ApiViewsSetDefaultViewParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiViewsSetDefaultViewParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiViewsSetDefaultViewParams] | [DefaultViewIn, AxiosRequestConfig])) => {
    const params = isApiViewsSetDefaultViewObjectParams(config) ? config[0] : ['defaultViewIn', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiViewsSetDefaultViewParams;
    const { defaultViewIn, options = {} } = params;
    const localVarPath = `/beta/views/default`;
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
        serializeData: defaultViewIn,
        auth:[
        {
        // authentication ApiKeyAuth required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };

    return sendRequest<ApiViewsSetDefaultViewReturnType>(Promise.resolve(args));
}

export default apiViewsSetDefaultViewParamCreator;
