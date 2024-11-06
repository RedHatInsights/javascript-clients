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
  * Direction of the ordering; defaults to ASC for name, and to DESC for host_count
  * @type { ApiGroupGetGroupListOrderHowEnum }
  * @memberof ApiGroupGetGroupListApi
  */
  orderHow?: ApiGroupGetGroupListOrderHowEnum,
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
export const ApiGroupGetGroupListOrderHowEnum = {
    Asc: 'ASC',
    Desc: 'DESC'
} as const;
export type ApiGroupGetGroupListOrderHowEnum = typeof ApiGroupGetGroupListOrderHowEnum[keyof typeof ApiGroupGetGroupListOrderHowEnum];

const isApiGroupGetGroupListObjectParams = (params: [ApiGroupGetGroupListParams] | unknown[]): params is [ApiGroupGetGroupListParams] => {
  return params.length === 1 && true && true && true && true && true
}
/**
* Read the entire list of all groups available to the account. <br /><br /> Required permissions: inventory:groups:read
* @summary Read the entire list of groups
* @param {ApiGroupGetGroupListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiGroupGetGroupListParamCreator = async (...config: ([ApiGroupGetGroupListParams] | [string, number, number, ApiGroupGetGroupListOrderByEnum, ApiGroupGetGroupListOrderHowEnum, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isApiGroupGetGroupListObjectParams(config) ? config[0] : ['name', 'perPage', 'page', 'orderBy', 'orderHow', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiGroupGetGroupListParams;
    const { name, perPage, page, orderBy, orderHow, options = {} } = params;
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

export default apiGroupGetGroupListParamCreator;
