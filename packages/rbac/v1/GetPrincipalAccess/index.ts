// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { AccessPagination } from '../types';


export type GetPrincipalAccessParams = {
  /**
  * The application name(s) to obtain access for the principal. This is an exact match. When no application is supplied, all permissions for the principal are returned. You may also use a comma-separated list to match on multiple applications.
  * @type { string }
  * @memberof GetPrincipalAccessApi
  */
  application: string, 
  /**
  * Unique username of the principal to obtain access for (only available for admins, and if supplied, takes precedence over the identity header).
  * @type { string }
  * @memberof GetPrincipalAccessApi
  */
  username?: string, 
  /**
  * Parameter for ordering roles by value. For inverse ordering, supply \'-\' before the param value, such as: ?order_by=-application
  * @type { GetPrincipalAccessOrderByEnum }
  * @memberof GetPrincipalAccessApi
  */
  orderBy?: GetPrincipalAccessOrderByEnum, 
  /**
  * Set the status of users to get back.
  * @type { GetPrincipalAccessStatusEnum }
  * @memberof GetPrincipalAccessApi
  */
  status?: GetPrincipalAccessStatusEnum, 
  /**
  * Parameter for selecting the amount of data returned.
  * @type { number }
  * @memberof GetPrincipalAccessApi
  */
  limit?: number, 
  /**
  * Parameter for selecting the offset of data.
  * @type { number }
  * @memberof GetPrincipalAccessApi
  */
  offset?: number, 
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const GetPrincipalAccessOrderByEnum = {
    Application: 'application',
    ResourceType: 'resource_type',
    Verb: 'verb'
} as const;
export type GetPrincipalAccessOrderByEnum = typeof GetPrincipalAccessOrderByEnum[keyof typeof GetPrincipalAccessOrderByEnum];
/**
  * @export
  * @enum {string}
  */
export const GetPrincipalAccessStatusEnum = {
    Enabled: 'enabled',
    Disabled: 'disabled',
    All: 'all'
} as const;
export type GetPrincipalAccessStatusEnum = typeof GetPrincipalAccessStatusEnum[keyof typeof GetPrincipalAccessStatusEnum];

const isGetPrincipalAccessObjectParams = (params: [GetPrincipalAccessParams] | unknown[]): params is [GetPrincipalAccessParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'application') && true && true && true && true && true
}
/**
* Access responses are sorted in ascending order by an ID internal to the database
* @summary Get the permitted access for a principal in the tenant (defaults to principal from the identity header)
* @param {GetPrincipalAccessParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getPrincipalAccessParamCreator = async (...config: ([GetPrincipalAccessParams] | [string, string, GetPrincipalAccessOrderByEnum, GetPrincipalAccessStatusEnum, number, number, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isGetPrincipalAccessObjectParams(config) ? config[0] : ['application', 'username', 'orderBy', 'status', 'limit', 'offset', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetPrincipalAccessParams;
    const { application, username, orderBy, status, limit, offset, options = {} } = params;
    const localVarPath = `/access/`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (application !== undefined) {
        localVarQueryParameter['application'] = application;
    }

    if (username !== undefined) {
        localVarQueryParameter['username'] = username;
    }

    if (orderBy !== undefined) {
        localVarQueryParameter['order_by'] = orderBy;
    }

    if (status !== undefined) {
        localVarQueryParameter['status'] = status;
    }

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
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

export default getPrincipalAccessParamCreator;
