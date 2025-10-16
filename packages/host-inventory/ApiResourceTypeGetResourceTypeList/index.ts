// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ResourceTypesQueryOutput } from '../types';


export type ApiResourceTypeGetResourceTypeListParams = {
  /**
  * A number of items to return per page.
  * @type { number }
  * @memberof ApiResourceTypeGetResourceTypeListApi
  */
  perPage?: number,
  /**
  * A page number of the items to return.
  * @type { number }
  * @memberof ApiResourceTypeGetResourceTypeListApi
  */
  page?: number,
  options?: AxiosRequestConfig
}

export type ApiResourceTypeGetResourceTypeListReturnType = ResourceTypesQueryOutput;

const isApiResourceTypeGetResourceTypeListObjectParams = (params: [ApiResourceTypeGetResourceTypeListParams] | unknown[]): params is [ApiResourceTypeGetResourceTypeListParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Returns the list of available RBAC resource types. <br /><br /> Required permissions: rbac:*:*
* @summary Get the list of resource types
* @param {ApiResourceTypeGetResourceTypeListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiResourceTypeGetResourceTypeListParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiResourceTypeGetResourceTypeListParams] | [number, number, AxiosRequestConfig])) => {
    const params = isApiResourceTypeGetResourceTypeListObjectParams(config) ? config[0] : ['perPage', 'page', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiResourceTypeGetResourceTypeListParams;
    const { perPage, page, options = {} } = params;
    const localVarPath = `/resource-types`;
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

    return sendRequest<ApiResourceTypeGetResourceTypeListReturnType>(Promise.resolve(args));
}

export default apiResourceTypeGetResourceTypeListParamCreator;
