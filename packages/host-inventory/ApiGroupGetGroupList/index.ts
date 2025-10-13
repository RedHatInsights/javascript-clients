// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { GroupQueryOutput } from '../types';


export type ApiGroupGetGroupListParams = {
  /**
  * Filter by group name
  * @type { string }
  * @memberof ApiGroupGetGroupListApi
  */
  name?: string,
  /**
  * A number of items to return per page.
  * @type { number }
  * @memberof ApiGroupGetGroupListApi
  */
  perPage?: number,
  /**
  * A page number of the items to return.
  * @type { number }
  * @memberof ApiGroupGetGroupListApi
  */
  page?: number,
  /**
  * Ordering field name
  * @type { ApiGroupGetGroupListOrderByEnum }
  * @memberof ApiGroupGetGroupListApi
  */
  orderBy?: ApiGroupGetGroupListOrderByEnum,
  /**
  * Direction of the ordering (case-insensitive); defaults to ASC for name, and to DESC for host_count
  * @type { string }
  * @memberof ApiGroupGetGroupListApi
  */
  orderHow?: string,
  /**
  * The type of workspaces that should be returned.
  * @type { ApiGroupGetGroupListGroupTypeEnum }
  * @memberof ApiGroupGetGroupListApi
  */
  groupType?: ApiGroupGetGroupListGroupTypeEnum,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ApiGroupGetGroupListOrderByEnum = {
    Name: 'name',
    HostCount: 'host_count',
    Updated: 'updated'
} as const;
export type ApiGroupGetGroupListOrderByEnum = typeof ApiGroupGetGroupListOrderByEnum[keyof typeof ApiGroupGetGroupListOrderByEnum];
/**
  * @export
  * @enum {string}
  */
export const ApiGroupGetGroupListGroupTypeEnum = {
    Standard: 'standard',
    UngroupedHosts: 'ungrouped-hosts',
    All: 'all'
} as const;
export type ApiGroupGetGroupListGroupTypeEnum = typeof ApiGroupGetGroupListGroupTypeEnum[keyof typeof ApiGroupGetGroupListGroupTypeEnum];

export type ApiGroupGetGroupListReturnType = GroupQueryOutput;

const isApiGroupGetGroupListObjectParams = (params: [ApiGroupGetGroupListParams] | unknown[]): params is [ApiGroupGetGroupListParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Read the entire list of all groups available to the account. <br /><br /> Required permissions: inventory:groups:read
* @summary Read the entire list of groups
* @param {ApiGroupGetGroupListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiGroupGetGroupListParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiGroupGetGroupListParams] | [string, number, number, ApiGroupGetGroupListOrderByEnum, string, ApiGroupGetGroupListGroupTypeEnum, AxiosRequestConfig])) => {
    const params = isApiGroupGetGroupListObjectParams(config) ? config[0] : ['name', 'perPage', 'page', 'orderBy', 'orderHow', 'groupType', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiGroupGetGroupListParams;
    const { name, perPage, page, orderBy, orderHow, groupType, options = {} } = params;
    const localVarPath = `/groups`;
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

    if (orderBy !== undefined) {
        localVarQueryParameter['order_by'] = orderBy;
    }

    if (orderHow !== undefined) {
        localVarQueryParameter['order_how'] = orderHow;
    }

    if (groupType !== undefined) {
        localVarQueryParameter['group_type'] = groupType;
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

    return sendRequest<ApiGroupGetGroupListReturnType>(Promise.resolve(args));
}

export default apiGroupGetGroupListParamCreator;
