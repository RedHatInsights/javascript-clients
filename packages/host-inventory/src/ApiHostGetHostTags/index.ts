// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { TagsOut } from '../types';


export type ApiHostGetHostTagsParams = {
  /**
  * A comma-separated list of host IDs.
  * @type { Array<string> }
  * @memberof ApiHostGetHostTagsApi
  */
  hostIdList: Array<string>,
  /**
  * A number of items to return per page.
  * @type { number }
  * @memberof ApiHostGetHostTagsApi
  */
  perPage?: number,
  /**
  * A page number of the items to return.
  * @type { number }
  * @memberof ApiHostGetHostTagsApi
  */
  page?: number,
  /**
  * Ordering field name
  * @type { ApiHostGetHostTagsOrderByEnum }
  * @memberof ApiHostGetHostTagsApi
  */
  orderBy?: ApiHostGetHostTagsOrderByEnum,
  /**
  * Direction of the ordering (case-insensitive); defaults to ASC for display_name, and to DESC for updated and operating_system
  * @type { string }
  * @memberof ApiHostGetHostTagsApi
  */
  orderHow?: string,
  /**
  * Used for searching tags and sap_sids that match the given search string. For searching tags, a tag\'s namespace, key, and/or value is used for matching.
  * @type { string }
  * @memberof ApiHostGetHostTagsApi
  */
  search?: string,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ApiHostGetHostTagsOrderByEnum = {
    DisplayName: 'display_name',
    GroupName: 'group_name',
    Updated: 'updated',
    LastCheckIn: 'last_check_in'
} as const;
export type ApiHostGetHostTagsOrderByEnum = typeof ApiHostGetHostTagsOrderByEnum[keyof typeof ApiHostGetHostTagsOrderByEnum];

export type ApiHostGetHostTagsReturnType = TagsOut;

const isApiHostGetHostTagsObjectParams = (params: [ApiHostGetHostTagsParams] | unknown[]): params is [ApiHostGetHostTagsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'hostIdList')
  }
  return false
}
/**
* Get the tags on a host <br /><br /> Required permissions: inventory:hosts:read
* @summary Get the tags on a host
* @param {ApiHostGetHostTagsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiHostGetHostTagsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiHostGetHostTagsParams] | [Array<string>, number, number, ApiHostGetHostTagsOrderByEnum, string, string, AxiosRequestConfig])) => {
    const params = isApiHostGetHostTagsObjectParams(config) ? config[0] : ['hostIdList', 'perPage', 'page', 'orderBy', 'orderHow', 'search', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiHostGetHostTagsParams;
    const { hostIdList, perPage, page, orderBy, orderHow, search, options = {} } = params;
    const localVarPath = `/hosts/{host_id_list}/tags`
        .replace(`{${"host_id_list"}}`, encodeURIComponent(String(hostIdList)));
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

    if (orderBy !== undefined) {
        localVarQueryParameter['order_by'] = orderBy;
    }

    if (orderHow !== undefined) {
        localVarQueryParameter['order_how'] = orderHow;
    }

    if (search !== undefined) {
        localVarQueryParameter['search'] = search;
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

    return sendRequest<ApiHostGetHostTagsReturnType>(Promise.resolve(args));
}

export default apiHostGetHostTagsParamCreator;
