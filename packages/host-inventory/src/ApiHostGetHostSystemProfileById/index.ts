// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { NotFoundErrorResponse, SystemProfileByHostOut, SystemProfileNestedObjectValue } from '../types';


export type ApiHostGetHostSystemProfileByIdParams = {
  /**
  * A comma-separated list of host IDs.
  * @type { Array<string> }
  * @memberof ApiHostGetHostSystemProfileByIdApi
  */
  hostIdList: Array<string>,
  /**
  * A number of items to return per page.
  * @type { number }
  * @memberof ApiHostGetHostSystemProfileByIdApi
  */
  perPage?: number,
  /**
  * A page number of the items to return.
  * @type { number }
  * @memberof ApiHostGetHostSystemProfileByIdApi
  */
  page?: number,
  /**
  * Ordering field name
  * @type { ApiHostGetHostSystemProfileByIdOrderByEnum }
  * @memberof ApiHostGetHostSystemProfileByIdApi
  */
  orderBy?: ApiHostGetHostSystemProfileByIdOrderByEnum,
  /**
  * Direction of the ordering (case-insensitive); defaults to ASC for display_name, and to DESC for updated and operating_system
  * @type { string }
  * @memberof ApiHostGetHostSystemProfileByIdApi
  */
  orderHow?: string,
  /**
  * Filter by branch_id
  * @type { string }
  * @memberof ApiHostGetHostSystemProfileByIdApi
  */
  branchId?: string,
  /**
  * Fetches only mentioned system_profile fields. For example, <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;{\"system_profile\": [\"arch\", \"host_type\"]} <br /><br /> which equates to the URL param: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;\"?fields[system_profile]=arch,host_type\"
  * @type { { [key: string]: SystemProfileNestedObjectValue; } }
  * @memberof ApiHostGetHostSystemProfileByIdApi
  */
  fields?: { [key: string]: SystemProfileNestedObjectValue; },
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ApiHostGetHostSystemProfileByIdOrderByEnum = {
    DisplayName: 'display_name',
    GroupName: 'group_name',
    Updated: 'updated',
    OperatingSystem: 'operating_system',
    LastCheckIn: 'last_check_in'
} as const;
export type ApiHostGetHostSystemProfileByIdOrderByEnum = typeof ApiHostGetHostSystemProfileByIdOrderByEnum[keyof typeof ApiHostGetHostSystemProfileByIdOrderByEnum];

export type ApiHostGetHostSystemProfileByIdReturnType = SystemProfileByHostOut;

const isApiHostGetHostSystemProfileByIdObjectParams = (params: [ApiHostGetHostSystemProfileByIdParams] | unknown[]): params is [ApiHostGetHostSystemProfileByIdParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'hostIdList')
  }
  return false
}
/**
* Find one or more hosts by their ID and return the id and system profile <br /><br /> Required permissions: inventory:hosts:read
* @summary Return one or more hosts system profile
* @param {ApiHostGetHostSystemProfileByIdParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiHostGetHostSystemProfileByIdParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiHostGetHostSystemProfileByIdParams] | [Array<string>, number, number, ApiHostGetHostSystemProfileByIdOrderByEnum, string, string, { [key: string]: SystemProfileNestedObjectValue; }, AxiosRequestConfig])) => {
    const params = isApiHostGetHostSystemProfileByIdObjectParams(config) ? config[0] : ['hostIdList', 'perPage', 'page', 'orderBy', 'orderHow', 'branchId', 'fields', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiHostGetHostSystemProfileByIdParams;
    const { hostIdList, perPage, page, orderBy, orderHow, branchId, fields, options = {} } = params;
    const localVarPath = `/hosts/{host_id_list}/system_profile`
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

    if (branchId !== undefined) {
        localVarQueryParameter['branch_id'] = branchId;
    }

    if (fields !== undefined) {
        localVarQueryParameter['fields'] = fields;
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

    return sendRequest<ApiHostGetHostSystemProfileByIdReturnType>(Promise.resolve(args));
}

export default apiHostGetHostSystemProfileByIdParamCreator;
