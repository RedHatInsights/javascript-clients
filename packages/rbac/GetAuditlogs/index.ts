// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { AuditLogPagination } from '../types';


export type GetAuditlogsParams = {
  /**
  * Parameter for selecting the amount of data returned.
  * @type { number }
  * @memberof GetAuditlogsApi
  */
  limit?: number,
  /**
  * Parameter for selecting the offset of data.
  * @type { number }
  * @memberof GetAuditlogsApi
  */
  offset?: number,
  /**
  * Parameter for ordering resource by database id so that latest actions appear first
  * @type { GetAuditlogsOrderByEnum }
  * @memberof GetAuditlogsApi
  */
  orderBy?: GetAuditlogsOrderByEnum,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const GetAuditlogsOrderByEnum = {
    Id: 'id'
} as const;
export type GetAuditlogsOrderByEnum = typeof GetAuditlogsOrderByEnum[keyof typeof GetAuditlogsOrderByEnum];

export type GetAuditlogsReturnType = AxiosPromise<AuditLogPagination>;

const isGetAuditlogsObjectParams = (params: [GetAuditlogsParams] | unknown[]): params is [GetAuditlogsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* A list of all of the Admin User\'s actions logged in Audit Logs
* @param {GetAuditlogsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getAuditlogsParamCreator = async (...config: ([GetAuditlogsParams] | [number, number, GetAuditlogsOrderByEnum, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isGetAuditlogsObjectParams(config) ? config[0] : ['limit', 'offset', 'orderBy', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetAuditlogsParams;
    const { limit, offset, orderBy, options = {} } = params;
    const localVarPath = `/auditlogs/`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }

    if (orderBy !== undefined) {
        localVarQueryParameter['order_by'] = orderBy;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        auth:[
        {
        // authentication basic_auth required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };
}

export default getAuditlogsParamCreator;
