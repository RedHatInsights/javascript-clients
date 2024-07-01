// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Error403, GroupPagination } from '../types';


export type ListGroupsParams = {
  /**
  * Parameter for selecting the amount of data returned.
  * @type { number }
  * @memberof ListGroupsApi
  */
  limit?: number, 
  /**
  * Parameter for selecting the offset of data.
  * @type { number }
  * @memberof ListGroupsApi
  */
  offset?: number, 
  /**
  * Parameter for filtering resource by name using string contains search.
  * @type { string }
  * @memberof ListGroupsApi
  */
  name?: string, 
  /**
  * Parameter for specifying the matching criteria for an object\'s name or display_name.
  * @type { ListGroupsNameMatchEnum }
  * @memberof ListGroupsApi
  */
  nameMatch?: ListGroupsNameMatchEnum, 
  /**
  * Parameter for filtering resource by scope.
  * @type { ListGroupsScopeEnum }
  * @memberof ListGroupsApi
  */
  scope?: ListGroupsScopeEnum, 
  /**
  * A username for a principal to filter for group
  * @type { string }
  * @memberof ListGroupsApi
  */
  username?: string, 
  /**
  * A username for a principal to filter for groups where principal is not a member and can be added manually
  * @type { string }
  * @memberof ListGroupsApi
  */
  excludeUsername?: string, 
  /**
  * A list of UUIDs to filter listed groups.
  * @type { Array<string> }
  * @memberof ListGroupsApi
  */
  uuid?: Array<string>, 
  /**
  * List of role name to filter for groups. It is exact match but case-insensitive
  * @type { Array<string> }
  * @memberof ListGroupsApi
  */
  roleNames?: Array<string>, 
  /**
  * Discriminator that works with role_names to indicate matching all/any of the role name
  * @type { ListGroupsRoleDiscriminatorEnum }
  * @memberof ListGroupsApi
  */
  roleDiscriminator?: ListGroupsRoleDiscriminatorEnum, 
  /**
  * Parameter for ordering groups by value. For inverse ordering, supply \'-\' before the param value, such as: ?order_by=-name
  * @type { ListGroupsOrderByEnum }
  * @memberof ListGroupsApi
  */
  orderBy?: ListGroupsOrderByEnum, 
  /**
  * An optional flag to return either platform default or non-platform default groups.
  * @type { boolean }
  * @memberof ListGroupsApi
  */
  platformDefault?: boolean, 
  /**
  * An optional flag to return either admin default or non-admin default groups.
  * @type { boolean }
  * @memberof ListGroupsApi
  */
  adminDefault?: boolean, 
  /**
  * An optional flag to return either system or non-system groups.
  * @type { boolean }
  * @memberof ListGroupsApi
  */
  system?: boolean, 
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ListGroupsNameMatchEnum = {
    Partial: 'partial',
    Exact: 'exact'
} as const;
export type ListGroupsNameMatchEnum = typeof ListGroupsNameMatchEnum[keyof typeof ListGroupsNameMatchEnum];
/**
  * @export
  * @enum {string}
  */
export const ListGroupsScopeEnum = {
    OrgId: 'org_id',
    Principal: 'principal'
} as const;
export type ListGroupsScopeEnum = typeof ListGroupsScopeEnum[keyof typeof ListGroupsScopeEnum];
/**
  * @export
  * @enum {string}
  */
export const ListGroupsRoleDiscriminatorEnum = {
    All: 'all',
    Any: 'any'
} as const;
export type ListGroupsRoleDiscriminatorEnum = typeof ListGroupsRoleDiscriminatorEnum[keyof typeof ListGroupsRoleDiscriminatorEnum];
/**
  * @export
  * @enum {string}
  */
export const ListGroupsOrderByEnum = {
    Name: 'name',
    Modified: 'modified',
    PrincipalCount: 'principalCount',
    PolicyCount: 'policyCount'
} as const;
export type ListGroupsOrderByEnum = typeof ListGroupsOrderByEnum[keyof typeof ListGroupsOrderByEnum];

const isListGroupsObjectParams = (params: [ListGroupsParams] | unknown[]): params is [ListGroupsParams] => {
  return params.length === 1 && true && true && true && true && true && true && true && true && true && true && true && true && true && true
}
/**
* By default, responses are sorted in ascending order by group name
* @summary List the groups for a tenant
* @param {ListGroupsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listGroupsParamCreator = async (...config: ([ListGroupsParams] | [number, number, string, ListGroupsNameMatchEnum, ListGroupsScopeEnum, string, string, Array<string>, Array<string>, ListGroupsRoleDiscriminatorEnum, ListGroupsOrderByEnum, boolean, boolean, boolean, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListGroupsObjectParams(config) ? config[0] : ['limit', 'offset', 'name', 'nameMatch', 'scope', 'username', 'excludeUsername', 'uuid', 'roleNames', 'roleDiscriminator', 'orderBy', 'platformDefault', 'adminDefault', 'system', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListGroupsParams;
    const { limit, offset, name, nameMatch, scope, username, excludeUsername, uuid, roleNames, roleDiscriminator, orderBy, platformDefault, adminDefault, system, options = {} } = params;
    const localVarPath = `/groups/`;
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

    if (name !== undefined) {
        localVarQueryParameter['name'] = name;
    }

    if (nameMatch !== undefined) {
        localVarQueryParameter['name_match'] = nameMatch;
    }

    if (scope !== undefined) {
        localVarQueryParameter['scope'] = scope;
    }

    if (username !== undefined) {
        localVarQueryParameter['username'] = username;
    }

    if (excludeUsername !== undefined) {
        localVarQueryParameter['exclude_username'] = excludeUsername;
    }

    if (uuid) {
        localVarQueryParameter['uuid'] = uuid.join(COLLECTION_FORMATS.csv);
    }

    if (roleNames) {
        localVarQueryParameter['role_names'] = roleNames.join(COLLECTION_FORMATS.csv);
    }

    if (roleDiscriminator !== undefined) {
        localVarQueryParameter['role_discriminator'] = roleDiscriminator;
    }

    if (orderBy !== undefined) {
        localVarQueryParameter['order_by'] = orderBy;
    }

    if (platformDefault !== undefined) {
        localVarQueryParameter['platform_default'] = platformDefault;
    }

    if (adminDefault !== undefined) {
        localVarQueryParameter['admin_default'] = adminDefault;
    }

    if (system !== undefined) {
        localVarQueryParameter['system'] = system;
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

export default listGroupsParamCreator;
