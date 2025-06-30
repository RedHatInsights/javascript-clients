// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { GetPrincipalsFromGroup200Response } from '../types';


export type GetPrincipalsFromGroupParams = {
  /**
  * ID of group from which to get principals
  * @type { string }
  * @memberof GetPrincipalsFromGroupApi
  */
  uuid: string,
  /**
  * Get only admin users within an account.
  * @type { boolean }
  * @memberof GetPrincipalsFromGroupApi
  */
  adminOnly?: boolean,
  /**
  * Parameter for filtering group principals by principal `username` using string contains search.
  * @type { string }
  * @memberof GetPrincipalsFromGroupApi
  */
  principalUsername?: string,
  /**
  * Parameter for selecting the amount of data returned.
  * @type { number }
  * @memberof GetPrincipalsFromGroupApi
  */
  limit?: number,
  /**
  * Parameter for selecting the offset of data.
  * @type { number }
  * @memberof GetPrincipalsFromGroupApi
  */
  offset?: number,
  /**
  * Parameter for ordering principals by value. For inverse ordering, supply \'-\' before the param value, such as: ?order_by=-username
  * @type { GetPrincipalsFromGroupOrderByEnum }
  * @memberof GetPrincipalsFromGroupApi
  */
  orderBy?: GetPrincipalsFromGroupOrderByEnum,
  /**
  * Parameter for optionally returning only usernames for principals, bypassing a call to IT.
  * @type { boolean }
  * @memberof GetPrincipalsFromGroupApi
  */
  usernameOnly?: boolean,
  /**
  * Parameter for selecting the type of principal to be returned.
  * @type { GetPrincipalsFromGroupPrincipalTypeEnum }
  * @memberof GetPrincipalsFromGroupApi
  */
  principalType?: GetPrincipalsFromGroupPrincipalTypeEnum,
  /**
  * By specifying a comma separated list of client IDs with this query parameter, RBAC will return an object with the specified client ID and it\'s matching boolean value to flag whether the client ID is present in the group or not. This query parameter cannot be used along with any other query parameter.
  * @type { string }
  * @memberof GetPrincipalsFromGroupApi
  */
  serviceAccountClientIds?: string,
  /**
  * Parameter for filtering the service accounts by their description.
  * @type { string }
  * @memberof GetPrincipalsFromGroupApi
  */
  serviceAccountDescription?: string,
  /**
  * Parameter for filtering the service accounts by their name.
  * @type { string }
  * @memberof GetPrincipalsFromGroupApi
  */
  serviceAccountName?: string,
  options?: AxiosRequestConfig
}
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
export const GetPrincipalsFromGroupPrincipalTypeEnum = {
    ServiceAccount: 'service-account',
    User: 'user',
    All: 'all'
} as const;
export type GetPrincipalsFromGroupPrincipalTypeEnum = typeof GetPrincipalsFromGroupPrincipalTypeEnum[keyof typeof GetPrincipalsFromGroupPrincipalTypeEnum];

export type GetPrincipalsFromGroupReturnType = AxiosPromise<GetPrincipalsFromGroup200Response>;

const isGetPrincipalsFromGroupObjectParams = (params: [GetPrincipalsFromGroupParams] | unknown[]): params is [GetPrincipalsFromGroupParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'uuid') && true && true && true && true && true && true && true && true && true && true
}
/**
* By default, responses are sorted in ascending order by username
* @summary Get a list of principals from a group in the tenant
* @param {GetPrincipalsFromGroupParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getPrincipalsFromGroupParamCreator = async (...config: ([GetPrincipalsFromGroupParams] | [string, boolean, string, number, number, GetPrincipalsFromGroupOrderByEnum, boolean, GetPrincipalsFromGroupPrincipalTypeEnum, string, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
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
