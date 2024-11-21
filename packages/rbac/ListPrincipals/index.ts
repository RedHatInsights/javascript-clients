// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Error403, ListPrincipals200Response } from '../types';


export type ListPrincipalsParams = {
  /**
  * Parameter for selecting the amount of data returned.
  * @type { number }
  * @memberof ListPrincipalsApi
  */
  limit?: number,
  /**
  * Parameter for selecting the offset of data.
  * @type { number }
  * @memberof ListPrincipalsApi
  */
  offset?: number,
  /**
  * Parameter for specifying the matching criteria for an object\'s name and/or email. Currently, match_criteria of partial searches for a username/email using \"starts with\" pattern.
  * @type { ListPrincipalsMatchCriteriaEnum }
  * @memberof ListPrincipalsApi
  */
  matchCriteria?: ListPrincipalsMatchCriteriaEnum,
  /**
  * Comma separated usernames of principals to get. If match_criteria is specified, only the first username will be picked up for search.
  * @type { string }
  * @memberof ListPrincipalsApi
  */
  usernames?: string,
  /**
  * The sort order of the query, either ascending or descending. Defaults to ascending.
  * @type { ListPrincipalsSortOrderEnum }
  * @memberof ListPrincipalsApi
  */
  sortOrder?: ListPrincipalsSortOrderEnum,
  /**
  * E-mail address of principal to search for. Could be combined with match_criteria for searching.
  * @type { string }
  * @memberof ListPrincipalsApi
  */
  email?: string,
  /**
  * Set the status of users to get back.
  * @type { ListPrincipalsStatusEnum }
  * @memberof ListPrincipalsApi
  */
  status?: ListPrincipalsStatusEnum,
  /**
  * Get only admin users within an account. Setting this would ignore the parameters: usernames, email
  * @type { boolean }
  * @memberof ListPrincipalsApi
  */
  adminOnly?: boolean,
  /**
  * Parameter for ordering principals by value. For inverse ordering, supply \'-\' before the param value, such as: ?order_by=-username
  * @type { ListPrincipalsOrderByEnum }
  * @memberof ListPrincipalsApi
  */
  orderBy?: ListPrincipalsOrderByEnum,
  /**
  * Parameter for optionally returning only usernames for principals, bypassing a call to IT.
  * @type { boolean }
  * @memberof ListPrincipalsApi
  */
  usernameOnly?: boolean,
  /**
  * Parameter for selecting the type of principal to be returned.
  * @type { ListPrincipalsTypeEnum }
  * @memberof ListPrincipalsApi
  */
  type?: ListPrincipalsTypeEnum,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ListPrincipalsMatchCriteriaEnum = {
    Partial: 'partial',
    Exact: 'exact'
} as const;
export type ListPrincipalsMatchCriteriaEnum = typeof ListPrincipalsMatchCriteriaEnum[keyof typeof ListPrincipalsMatchCriteriaEnum];
/**
  * @export
  * @enum {string}
  */
export const ListPrincipalsSortOrderEnum = {
    Asc: 'asc',
    Desc: 'desc'
} as const;
export type ListPrincipalsSortOrderEnum = typeof ListPrincipalsSortOrderEnum[keyof typeof ListPrincipalsSortOrderEnum];
/**
  * @export
  * @enum {string}
  */
export const ListPrincipalsStatusEnum = {
    Enabled: 'enabled',
    Disabled: 'disabled',
    All: 'all'
} as const;
export type ListPrincipalsStatusEnum = typeof ListPrincipalsStatusEnum[keyof typeof ListPrincipalsStatusEnum];
/**
  * @export
  * @enum {string}
  */
export const ListPrincipalsOrderByEnum = {
    Username: 'username'
} as const;
export type ListPrincipalsOrderByEnum = typeof ListPrincipalsOrderByEnum[keyof typeof ListPrincipalsOrderByEnum];
/**
  * @export
  * @enum {string}
  */
export const ListPrincipalsTypeEnum = {
    ServiceAccount: 'service-account',
    User: 'user'
} as const;
export type ListPrincipalsTypeEnum = typeof ListPrincipalsTypeEnum[keyof typeof ListPrincipalsTypeEnum];

export type ListPrincipalsReturnType = AxiosPromise<ListPrincipals200Response>;

const isListPrincipalsObjectParams = (params: [ListPrincipalsParams] | unknown[]): params is [ListPrincipalsParams] => {
  return params.length === 1 && true && true && true && true && true && true && true && true && true && true && true
}
/**
* By default, responses are sorted in ascending order by username
* @summary List the principals for a tenant
* @param {ListPrincipalsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listPrincipalsParamCreator = async (...config: ([ListPrincipalsParams] | [number, number, ListPrincipalsMatchCriteriaEnum, string, ListPrincipalsSortOrderEnum, string, ListPrincipalsStatusEnum, boolean, ListPrincipalsOrderByEnum, boolean, ListPrincipalsTypeEnum, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListPrincipalsObjectParams(config) ? config[0] : ['limit', 'offset', 'matchCriteria', 'usernames', 'sortOrder', 'email', 'status', 'adminOnly', 'orderBy', 'usernameOnly', 'type', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListPrincipalsParams;
    const { limit, offset, matchCriteria, usernames, sortOrder, email, status, adminOnly, orderBy, usernameOnly, type, options = {} } = params;
    const localVarPath = `/principals/`;
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

    if (matchCriteria !== undefined) {
        localVarQueryParameter['match_criteria'] = matchCriteria;
    }

    if (usernames !== undefined) {
        localVarQueryParameter['usernames'] = usernames;
    }

    if (sortOrder !== undefined) {
        localVarQueryParameter['sort_order'] = sortOrder;
    }

    if (email !== undefined) {
        localVarQueryParameter['email'] = email;
    }

    if (status !== undefined) {
        localVarQueryParameter['status'] = status;
    }

    if (adminOnly !== undefined) {
        localVarQueryParameter['admin_only'] = adminOnly;
    }

    if (orderBy !== undefined) {
        localVarQueryParameter['order_by'] = orderBy;
    }

    if (usernameOnly !== undefined) {
        localVarQueryParameter['username_only'] = usernameOnly;
    }

    if (type !== undefined) {
        localVarQueryParameter['type'] = type;
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

export default listPrincipalsParamCreator;
