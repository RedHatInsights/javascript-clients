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
  * Parameter for filtering audit logs by principal username. Supports partial and exact matching via name_match parameter.
  * @type { string }
  * @memberof GetAuditlogsApi
  */
  principalUsername?: string,
  /**
  * Parameter for filtering audit logs by resource type. Multiple values can be provided.
  * @type { Array<GetAuditlogsResourceTypeEnum> }
  * @memberof GetAuditlogsApi
  */
  resourceType?: Array<GetAuditlogsResourceTypeEnum>,
  /**
  * Parameter for filtering audit logs by action. Multiple values can be provided.
  * @type { Array<GetAuditlogsActionEnum> }
  * @memberof GetAuditlogsApi
  */
  action?: Array<GetAuditlogsActionEnum>,
  /**
  * Parameter for specifying the matching type for principal_username filter. Default is partial.
  * @type { GetAuditlogsNameMatchEnum }
  * @memberof GetAuditlogsApi
  */
  nameMatch?: GetAuditlogsNameMatchEnum,
  /**
  * Parameter for ordering audit logs. Prefix with \'-\' for descending order. Default is \'-created\'.
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
export const GetAuditlogsResourceTypeEnum = {
    Group: 'group',
    Role: 'role',
    User: 'user',
    Permission: 'permission'
} as const;
export type GetAuditlogsResourceTypeEnum = typeof GetAuditlogsResourceTypeEnum[keyof typeof GetAuditlogsResourceTypeEnum];
/**
  * @export
  * @enum {string}
  */
export const GetAuditlogsActionEnum = {
    Delete: 'delete',
    Add: 'add',
    Edit: 'edit',
    Create: 'create',
    Remove: 'remove'
} as const;
export type GetAuditlogsActionEnum = typeof GetAuditlogsActionEnum[keyof typeof GetAuditlogsActionEnum];
/**
  * @export
  * @enum {string}
  */
export const GetAuditlogsNameMatchEnum = {
    Partial: 'partial',
    Exact: 'exact'
} as const;
export type GetAuditlogsNameMatchEnum = typeof GetAuditlogsNameMatchEnum[keyof typeof GetAuditlogsNameMatchEnum];
/**
  * @export
  * @enum {string}
  */
export const GetAuditlogsOrderByEnum = {
    Created: 'created',
    NotCreated: '-created',
    PrincipalUsername: 'principal_username',
    NotPrincipalUsername: '-principal_username',
    ResourceType: 'resource_type',
    NotResourceType: '-resource_type',
    Action: 'action',
    NotAction: '-action'
} as const;
export type GetAuditlogsOrderByEnum = typeof GetAuditlogsOrderByEnum[keyof typeof GetAuditlogsOrderByEnum];

export type GetAuditlogsReturnType = AuditLogPagination;

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
export const getAuditlogsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([GetAuditlogsParams] | [number, number, string, Array<GetAuditlogsResourceTypeEnum>, Array<GetAuditlogsActionEnum>, GetAuditlogsNameMatchEnum, GetAuditlogsOrderByEnum, AxiosRequestConfig])) => {
    const params = isGetAuditlogsObjectParams(config) ? config[0] : ['limit', 'offset', 'principalUsername', 'resourceType', 'action', 'nameMatch', 'orderBy', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetAuditlogsParams;
    const { limit, offset, principalUsername, resourceType, action, nameMatch, orderBy, options = {} } = params;
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

    if (principalUsername !== undefined) {
        localVarQueryParameter['principal_username'] = principalUsername;
    }

    if (resourceType) {
        localVarQueryParameter['resource_type'] = resourceType;
    }

    if (action) {
        localVarQueryParameter['action'] = action;
    }

    if (nameMatch !== undefined) {
        localVarQueryParameter['name_match'] = nameMatch;
    }

    if (orderBy !== undefined) {
        localVarQueryParameter['order_by'] = orderBy;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
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

    return sendRequest<GetAuditlogsReturnType>(Promise.resolve(args));
}

export default getAuditlogsParamCreator;
