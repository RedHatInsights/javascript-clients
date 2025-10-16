// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ResourceTypesGroupsQueryOutput } from '../types';


export type ApiResourceTypeGetResourceTypeGroupsListParams = {
  /**
  * Filter by group name
  * @type { string }
  * @memberof ApiResourceTypeGetResourceTypeGroupsListApi
  */
  name?: string,
  /**
  * A number of items to return per page.
  * @type { number }
  * @memberof ApiResourceTypeGetResourceTypeGroupsListApi
  */
  perPage?: number,
  /**
  * A page number of the items to return.
  * @type { number }
  * @memberof ApiResourceTypeGetResourceTypeGroupsListApi
  */
  page?: number,
  options?: AxiosRequestConfig
}

export type ApiResourceTypeGetResourceTypeGroupsListReturnType = ResourceTypesGroupsQueryOutput;

const isApiResourceTypeGetResourceTypeGroupsListObjectParams = (params: [ApiResourceTypeGetResourceTypeGroupsListParams] | unknown[]): params is [ApiResourceTypeGetResourceTypeGroupsListParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Returns the list of groups in the current account. <br /><br /> Required permissions: rbac:*:*
* @summary Get the list of inventory groups in resource-types format
* @param {ApiResourceTypeGetResourceTypeGroupsListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiResourceTypeGetResourceTypeGroupsListParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiResourceTypeGetResourceTypeGroupsListParams] | [string, number, number, AxiosRequestConfig])) => {
    const params = isApiResourceTypeGetResourceTypeGroupsListObjectParams(config) ? config[0] : ['name', 'perPage', 'page', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiResourceTypeGetResourceTypeGroupsListParams;
    const { name, perPage, page, options = {} } = params;
    const localVarPath = `/resource-types/inventory-groups`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (name !== undefined) {
        localVarQueryParameter['name'] = name;
    }

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

    return sendRequest<ApiResourceTypeGetResourceTypeGroupsListReturnType>(Promise.resolve(args));
}

export default apiResourceTypeGetResourceTypeGroupsListParamCreator;
