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


export type ApiGroupGetGroupsByIdParams = {
  /**
  * A comma-separated list of group IDs.
  * @type { Array<string> }
  * @memberof ApiGroupGetGroupsByIdApi
  */
  groupIdList: Array<string>,
  /**
  * A number of items to return per page.
  * @type { number }
  * @memberof ApiGroupGetGroupsByIdApi
  */
  perPage?: number,
  /**
  * A page number of the items to return.
  * @type { number }
  * @memberof ApiGroupGetGroupsByIdApi
  */
  page?: number,
  /**
  * Ordering field name
  * @type { ApiGroupGetGroupsByIdOrderByEnum }
  * @memberof ApiGroupGetGroupsByIdApi
  */
  orderBy?: ApiGroupGetGroupsByIdOrderByEnum,
  /**
  * Direction of the ordering; defaults to ASC for name, and to DESC for host_count
  * @type { ApiGroupGetGroupsByIdOrderHowEnum }
  * @memberof ApiGroupGetGroupsByIdApi
  */
  orderHow?: ApiGroupGetGroupsByIdOrderHowEnum,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ApiGroupGetGroupsByIdOrderByEnum = {
    Name: 'name',
    HostCount: 'host_count',
    Updated: 'updated'
} as const;
export type ApiGroupGetGroupsByIdOrderByEnum = typeof ApiGroupGetGroupsByIdOrderByEnum[keyof typeof ApiGroupGetGroupsByIdOrderByEnum];
/**
  * @export
  * @enum {string}
  */
export const ApiGroupGetGroupsByIdOrderHowEnum = {
    Asc: 'ASC',
    Desc: 'DESC'
} as const;
export type ApiGroupGetGroupsByIdOrderHowEnum = typeof ApiGroupGetGroupsByIdOrderHowEnum[keyof typeof ApiGroupGetGroupsByIdOrderHowEnum];

const isApiGroupGetGroupsByIdObjectParams = (params: [ApiGroupGetGroupsByIdParams] | unknown[]): params is [ApiGroupGetGroupsByIdParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'groupIdList') && true && true && true && true
}
/**
* Find one or more groups by their IDs. <br /><br /> Required permissions: inventory:groups:read
* @summary Find groups by their IDs
* @param {ApiGroupGetGroupsByIdParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiGroupGetGroupsByIdParamCreator = async (...config: ([ApiGroupGetGroupsByIdParams] | [Array<string>, number, number, ApiGroupGetGroupsByIdOrderByEnum, ApiGroupGetGroupsByIdOrderHowEnum, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isApiGroupGetGroupsByIdObjectParams(config) ? config[0] : ['groupIdList', 'perPage', 'page', 'orderBy', 'orderHow', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiGroupGetGroupsByIdParams;
    const { groupIdList, perPage, page, orderBy, orderHow, options = {} } = params;
    const localVarPath = `/groups/{group_id_list}`
        .replace(`{${"group_id_list"}}`, encodeURIComponent(String(groupIdList)));
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

export default apiGroupGetGroupsByIdParamCreator;
