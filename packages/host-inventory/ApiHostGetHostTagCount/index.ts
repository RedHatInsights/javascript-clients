// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { TagCountOut } from '../types';


export type ApiHostGetHostTagCountParams = {
  /**
  * A comma-separated list of host IDs.
  * @type { Array<string> }
  * @memberof ApiHostGetHostTagCountApi
  */
  hostIdList: Array<string>,
  /**
  * A number of items to return per page.
  * @type { number }
  * @memberof ApiHostGetHostTagCountApi
  */
  perPage?: number,
  /**
  * A page number of the items to return.
  * @type { number }
  * @memberof ApiHostGetHostTagCountApi
  */
  page?: number,
  /**
  * Ordering field name
  * @type { ApiHostGetHostTagCountOrderByEnum }
  * @memberof ApiHostGetHostTagCountApi
  */
  orderBy?: ApiHostGetHostTagCountOrderByEnum,
  /**
  * Direction of the ordering; defaults to ASC for display_name, and to DESC for updated and operating_system
  * @type { ApiHostGetHostTagCountOrderHowEnum }
  * @memberof ApiHostGetHostTagCountApi
  */
  orderHow?: ApiHostGetHostTagCountOrderHowEnum,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ApiHostGetHostTagCountOrderByEnum = {
    DisplayName: 'display_name',
    GroupName: 'group_name',
    Updated: 'updated',
    OperatingSystem: 'operating_system'
} as const;
export type ApiHostGetHostTagCountOrderByEnum = typeof ApiHostGetHostTagCountOrderByEnum[keyof typeof ApiHostGetHostTagCountOrderByEnum];
/**
  * @export
  * @enum {string}
  */
export const ApiHostGetHostTagCountOrderHowEnum = {
    Asc: 'ASC',
    Desc: 'DESC'
} as const;
export type ApiHostGetHostTagCountOrderHowEnum = typeof ApiHostGetHostTagCountOrderHowEnum[keyof typeof ApiHostGetHostTagCountOrderHowEnum];

const isApiHostGetHostTagCountObjectParams = (params: [ApiHostGetHostTagCountParams] | unknown[]): params is [ApiHostGetHostTagCountParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'hostIdList') && true && true && true && true
}
/**
* Get the number of tags on a host or hosts <br /><br /> Required permissions: inventory:hosts:read
* @summary Get the number of tags on a host or hosts
* @param {ApiHostGetHostTagCountParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiHostGetHostTagCountParamCreator = async (...config: ([ApiHostGetHostTagCountParams] | [Array<string>, number, number, ApiHostGetHostTagCountOrderByEnum, ApiHostGetHostTagCountOrderHowEnum, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isApiHostGetHostTagCountObjectParams(config) ? config[0] : ['hostIdList', 'perPage', 'page', 'orderBy', 'orderHow', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiHostGetHostTagCountParams;
    const { hostIdList, perPage, page, orderBy, orderHow, options = {} } = params;
    const localVarPath = `/hosts/{host_id_list}/tags/count`
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



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
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
}

export default apiHostGetHostTagCountParamCreator;
