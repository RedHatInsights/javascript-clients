// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { HostQueryOutput, SystemProfileNestedObjectValue } from '../types';


export type ApiHostGetHostByIdParams = {
  /**
  * A comma-separated list of host IDs.
  * @type { Array<string> }
  * @memberof ApiHostGetHostByIdApi
  */
  hostIdList: Array<string>,
  /**
  * Filter by branch_id
  * @type { string }
  * @memberof ApiHostGetHostByIdApi
  */
  branchId?: string,
  /**
  * A number of items to return per page.
  * @type { number }
  * @memberof ApiHostGetHostByIdApi
  */
  perPage?: number,
  /**
  * A page number of the items to return.
  * @type { number }
  * @memberof ApiHostGetHostByIdApi
  */
  page?: number,
  /**
  * Ordering field name
  * @type { ApiHostGetHostByIdOrderByEnum }
  * @memberof ApiHostGetHostByIdApi
  */
  orderBy?: ApiHostGetHostByIdOrderByEnum,
  /**
  * Direction of the ordering; defaults to ASC for display_name, and to DESC for updated and operating_system
  * @type { ApiHostGetHostByIdOrderHowEnum }
  * @memberof ApiHostGetHostByIdApi
  */
  orderHow?: ApiHostGetHostByIdOrderHowEnum,
  /**
  * Fetches only mentioned system_profile fields. For example, <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;{\"system_profile\": [\"arch\", \"host_type\"]} <br /><br /> which equates to the URL param: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;\"?fields[system_profile]=arch,host_type\"
  * @type { { [key: string]: SystemProfileNestedObjectValue; } }
  * @memberof ApiHostGetHostByIdApi
  */
  fields?: { [key: string]: SystemProfileNestedObjectValue; },
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ApiHostGetHostByIdOrderByEnum = {
    DisplayName: 'display_name',
    GroupName: 'group_name',
    Updated: 'updated',
    OperatingSystem: 'operating_system'
} as const;
export type ApiHostGetHostByIdOrderByEnum = typeof ApiHostGetHostByIdOrderByEnum[keyof typeof ApiHostGetHostByIdOrderByEnum];
/**
  * @export
  * @enum {string}
  */
export const ApiHostGetHostByIdOrderHowEnum = {
    Asc: 'ASC',
    Desc: 'DESC'
} as const;
export type ApiHostGetHostByIdOrderHowEnum = typeof ApiHostGetHostByIdOrderHowEnum[keyof typeof ApiHostGetHostByIdOrderHowEnum];

const isApiHostGetHostByIdObjectParams = (params: [ApiHostGetHostByIdParams] | unknown[]): params is [ApiHostGetHostByIdParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'hostIdList') && true && true && true && true && true && true
}
/**
* Find one or more hosts by their ID. <br /><br /> Required permissions: inventory:hosts:read
* @summary Find hosts by their IDs
* @param {ApiHostGetHostByIdParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiHostGetHostByIdParamCreator = async (...config: ([ApiHostGetHostByIdParams] | [Array<string>, string, number, number, ApiHostGetHostByIdOrderByEnum, ApiHostGetHostByIdOrderHowEnum, { [key: string]: SystemProfileNestedObjectValue; }, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isApiHostGetHostByIdObjectParams(config) ? config[0] : ['hostIdList', 'branchId', 'perPage', 'page', 'orderBy', 'orderHow', 'fields', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiHostGetHostByIdParams;
    const { hostIdList, branchId, perPage, page, orderBy, orderHow, fields, options = {} } = params;
    const localVarPath = `/hosts/{host_id_list}`
        .replace(`{${"host_id_list"}}`, encodeURIComponent(String(hostIdList)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (branchId !== undefined) {
        localVarQueryParameter['branch_id'] = branchId;
    }

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

    if (fields !== undefined) {
        localVarQueryParameter['fields'] = fields;
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

export default apiHostGetHostByIdParamCreator;
