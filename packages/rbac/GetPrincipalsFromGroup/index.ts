// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type {  } from '../types';


export type GetPrincipalsFromGroupParams = {
  /**
  * ID of group from which to get principals
  * @type { any }
  * @memberof GetPrincipalsFromGroupApi
  */
  uuid: any,
  /**
  * Get only admin users within an account.
  * @type { GetPrincipalsFromGroupAdminOnlyEnum }
  * @memberof GetPrincipalsFromGroupApi
  */
  adminOnly?: GetPrincipalsFromGroupAdminOnlyEnum,
  /**
  * Parameter for filtering group principals by principal `username` using string contains search.
  * @type { any }
  * @memberof GetPrincipalsFromGroupApi
  */
  principalUsername?: any,
  /**
  * Parameter for selecting the amount of data returned.
  * @type { any }
  * @memberof GetPrincipalsFromGroupApi
  */
  limit?: any,
  /**
  * Parameter for selecting the offset of data.
  * @type { any }
  * @memberof GetPrincipalsFromGroupApi
  */
  offset?: any,
  /**
  * Parameter for ordering principals by value. For inverse ordering, supply \'-\' before the param value, such as: ?order_by=-username
  * @type { GetPrincipalsFromGroupOrderByEnum }
  * @memberof GetPrincipalsFromGroupApi
  */
  orderBy?: GetPrincipalsFromGroupOrderByEnum,
  /**
  * Parameter for optionally returning only usernames for principals, bypassing a call to IT.
  * @type { GetPrincipalsFromGroupUsernameOnlyEnum }
  * @memberof GetPrincipalsFromGroupApi
  */
  usernameOnly?: GetPrincipalsFromGroupUsernameOnlyEnum,
  /**
  * Parameter for selecting the type of principal to be returned.
  * @type { GetPrincipalsFromGroupPrincipalTypeEnum }
  * @memberof GetPrincipalsFromGroupApi
  */
  principalType?: GetPrincipalsFromGroupPrincipalTypeEnum,
  /**
  * By specifying a comma separated list of client IDs with this query parameter, RBAC will return an object with the specified client ID and it\'s matching boolean value to flag whether the client ID is present in the group or not. This query parameter cannot be used along with any other query parameter.
  * @type { any }
  * @memberof GetPrincipalsFromGroupApi
  */
  serviceAccountClientIds?: any,
  /**
  * Parameter for filtering the service accounts by their description.
  * @type { any }
  * @memberof GetPrincipalsFromGroupApi
  */
  serviceAccountDescription?: any,
  /**
  * Parameter for filtering the service accounts by their name.
  * @type { any }
  * @memberof GetPrincipalsFromGroupApi
  */
  serviceAccountName?: any,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const GetPrincipalsFromGroupAdminOnlyEnum = {
    True: 'true',
    False: 'false'
} as const;
export type GetPrincipalsFromGroupAdminOnlyEnum = typeof GetPrincipalsFromGroupAdminOnlyEnum[keyof typeof GetPrincipalsFromGroupAdminOnlyEnum];
/**
  * @export
  * @enum {string}
  */
export const GetPrincipalsFromGroupOrderByEnum = {
    Username: 'username'
} as const;
export type GetPrincipalsFromGroupOrderByEnum = typeof GetPrincipalsFromGroupOrderByEnum[keyof typeof GetPrincipalsFromGroupOrderByEnum];
/**
  * @export
  * @enum {string}
  */
export const GetPrincipalsFromGroupUsernameOnlyEnum = {
    True: 'true',
    False: 'false'
} as const;
export type GetPrincipalsFromGroupUsernameOnlyEnum = typeof GetPrincipalsFromGroupUsernameOnlyEnum[keyof typeof GetPrincipalsFromGroupUsernameOnlyEnum];
/**
  * @export
  * @enum {string}
  */
export const GetPrincipalsFromGroupPrincipalTypeEnum = {
    ServiceAccount: 'service-account',
    User: 'user',
    All: 'all'
} as const;
export type GetPrincipalsFromGroupPrincipalTypeEnum = typeof GetPrincipalsFromGroupPrincipalTypeEnum[keyof typeof GetPrincipalsFromGroupPrincipalTypeEnum];

export type GetPrincipalsFromGroupReturnType = AxiosPromise<any>;

const isGetPrincipalsFromGroupObjectParams = (params: [GetPrincipalsFromGroupParams] | unknown[]): params is [GetPrincipalsFromGroupParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'uuid') && true && true && true && true && true && true && true && true && true && true
}
/**
* By default, responses are sorted in ascending order by username
* @summary Get a list of principals from a group in the tenant
* @param {GetPrincipalsFromGroupParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getPrincipalsFromGroupParamCreator = async (...config: ([GetPrincipalsFromGroupParams] | [any, GetPrincipalsFromGroupAdminOnlyEnum, any, any, any, GetPrincipalsFromGroupOrderByEnum, GetPrincipalsFromGroupUsernameOnlyEnum, GetPrincipalsFromGroupPrincipalTypeEnum, any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isGetPrincipalsFromGroupObjectParams(config) ? config[0] : ['uuid', 'adminOnly', 'principalUsername', 'limit', 'offset', 'orderBy', 'usernameOnly', 'principalType', 'serviceAccountClientIds', 'serviceAccountDescription', 'serviceAccountName', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetPrincipalsFromGroupParams;
    const { uuid, adminOnly, principalUsername, limit, offset, orderBy, usernameOnly, principalType, serviceAccountClientIds, serviceAccountDescription, serviceAccountName, options = {} } = params;
    const localVarPath = `/groups/{uuid}/principals/`
        .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (adminOnly !== undefined) {
        localVarQueryParameter['admin_only'] = adminOnly;
    }

    if (principalUsername !== undefined) {
        localVarQueryParameter['principal_username'] = principalUsername;
    }

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }

    if (orderBy !== undefined) {
        localVarQueryParameter['order_by'] = orderBy;
    }

    if (usernameOnly !== undefined) {
        localVarQueryParameter['username_only'] = usernameOnly;
    }

    if (principalType !== undefined) {
        localVarQueryParameter['principal_type'] = principalType;
    }

    if (serviceAccountClientIds !== undefined) {
        localVarQueryParameter['service_account_client_ids'] = serviceAccountClientIds;
    }

    if (serviceAccountDescription !== undefined) {
        localVarQueryParameter['service_account_description'] = serviceAccountDescription;
    }

    if (serviceAccountName !== undefined) {
        localVarQueryParameter['service_account_name'] = serviceAccountName;
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

export default getPrincipalsFromGroupParamCreator;
