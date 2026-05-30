// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ViewsListOut } from '../types';


export type ApiViewsGetViewsListParams = {
  /**
  * A number of items to return per page.
  * @type { number }
  * @memberof ApiViewsGetViewsListApi
  */
  perPage?: number,
  /**
  * A page number of the items to return.
  * @type { number }
  * @memberof ApiViewsGetViewsListApi
  */
  page?: number,
  options?: AxiosRequestConfig
}

export type ApiViewsGetViewsListReturnType = ViewsListOut;

const isApiViewsGetViewsListObjectParams = (params: [ApiViewsGetViewsListParams] | unknown[]): params is [ApiViewsGetViewsListParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Read the list of all inventory views visible to the requesting user. This includes system views, org-wide views, and private views owned by the requester. <br /><br /> Required permissions: inventory:views:read <br /><br /> <b>NOTE:</b> This endpoint is not yet implemented and will return HTTP 501.
* @summary Read the list of inventory views
* @param {ApiViewsGetViewsListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiViewsGetViewsListParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiViewsGetViewsListParams] | [number, number, AxiosRequestConfig])) => {
    const params = isApiViewsGetViewsListObjectParams(config) ? config[0] : ['perPage', 'page', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiViewsGetViewsListParams;
    const { perPage, page, options = {} } = params;
    const localVarPath = `/beta/views`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (perPage !== undefined) {
        localVarQueryParameter['per_page'] = perPage;
    }

    if (page !== undefined) {
        localVarQueryParameter['page'] = page;
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

    return sendRequest<ApiViewsGetViewsListReturnType>(Promise.resolve(args));
}

export default apiViewsGetViewsListParamCreator;
