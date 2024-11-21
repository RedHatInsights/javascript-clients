// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Error403, RolePaginationDynamic } from '../types';


export type ListRolesParams = {
  /**
  * Parameter for selecting the amount of data returned.
  * @type { number }
  * @memberof ListRolesApi
  */
  limit?: number,
  /**
  * Parameter for selecting the offset of data.
  * @type { number }
  * @memberof ListRolesApi
  */
  offset?: number,
  /**
  * Parameter for filtering resource by name using string contains search.
  * @type { string }
  * @memberof ListRolesApi
  */
  name?: string,
  /**
  * Parameter for filtering resource by system flag.
  * @type { boolean }
  * @memberof ListRolesApi
  */
  system?: boolean,
  /**
  * Parameter for filtering resource by display_name using string contains search.
  * @type { string }
  * @memberof ListRolesApi
  */
  displayName?: string,
  /**
  * Parameter for specifying the matching criteria for an object\'s name or display_name.
  * @type { ListRolesNameMatchEnum }
  * @memberof ListRolesApi
  */
  nameMatch?: ListRolesNameMatchEnum,
  /**
  * Parameter for filtering resource by scope.
  * @type { ListRolesScopeEnum }
  * @memberof ListRolesApi
  */
  scope?: ListRolesScopeEnum,
  /**
  * Parameter for ordering roles by value. For inverse ordering, supply \'-\' before the param value, such as: ?order_by=-name
  * @type { ListRolesOrderByEnum }
  * @memberof ListRolesApi
  */
  orderBy?: ListRolesOrderByEnum,
  /**
  * Parameter for add list of fields to display for roles.
  * @type { Array<ListRolesAddFieldsEnum> }
  * @memberof ListRolesApi
  */
  addFields?: Array<ListRolesAddFieldsEnum>,
  /**
  * Unique username of the principal to obtain roles for (only available for admins, and if supplied, takes precedence over the identity header).
  * @type { string }
  * @memberof ListRolesApi
  */
  username?: string,
  /**
  * The application name(s) to filter roles by, from permissions or external tenant name. This is an exact match. You may also use a comma-separated list to match on multiple applications.
  * @type { string }
  * @memberof ListRolesApi
  */
  application?: string,
  /**
  * The permission(s) to filter roles by. This is an exact match. You may also use a comma-separated list to match on multiple permissions.
  * @type { string }
  * @memberof ListRolesApi
  */
  permission?: string,
  /**
  * Parameter for filtering roles by external tenant name using string search.
  * @type { string }
  * @memberof ListRolesApi
  */
  externalTenant?: string,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ListRolesNameMatchEnum = {
    Partial: 'partial',
    Exact: 'exact'
} as const;
export type ListRolesNameMatchEnum = typeof ListRolesNameMatchEnum[keyof typeof ListRolesNameMatchEnum];
/**
  * @export
  * @enum {string}
  */
export const ListRolesScopeEnum = {
    OrgId: 'org_id',
    Principal: 'principal'
} as const;
export type ListRolesScopeEnum = typeof ListRolesScopeEnum[keyof typeof ListRolesScopeEnum];
/**
  * @export
  * @enum {string}
  */
export const ListRolesOrderByEnum = {
    Name: 'name',
    DisplayName: 'display_name',
    Modified: 'modified',
    PolicyCount: 'policyCount'
} as const;
export type ListRolesOrderByEnum = typeof ListRolesOrderByEnum[keyof typeof ListRolesOrderByEnum];
/**
  * @export
  * @enum {string}
  */
export const ListRolesAddFieldsEnum = {
    GroupsIn: 'groups_in',
    GroupsInCount: 'groups_in_count',
    Access: 'access'
} as const;
export type ListRolesAddFieldsEnum = typeof ListRolesAddFieldsEnum[keyof typeof ListRolesAddFieldsEnum];

export type ListRolesReturnType = AxiosPromise<RolePaginationDynamic>;

const isListRolesObjectParams = (params: [ListRolesParams] | unknown[]): params is [ListRolesParams] => {
  return params.length === 1 && true && true && true && true && true && true && true && true && true && true && true && true && true
}
/**
* By default, responses are sorted in ascending order by role name
* @summary List the roles for a tenant
* @param {ListRolesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listRolesParamCreator = async (...config: ([ListRolesParams] | [number, number, string, boolean, string, ListRolesNameMatchEnum, ListRolesScopeEnum, ListRolesOrderByEnum, Array<ListRolesAddFieldsEnum>, string, string, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListRolesObjectParams(config) ? config[0] : ['limit', 'offset', 'name', 'system', 'displayName', 'nameMatch', 'scope', 'orderBy', 'addFields', 'username', 'application', 'permission', 'externalTenant', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListRolesParams;
    const { limit, offset, name, system, displayName, nameMatch, scope, orderBy, addFields, username, application, permission, externalTenant, options = {} } = params;
    const localVarPath = `/roles/`;
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

    if (system !== undefined) {
        localVarQueryParameter['system'] = system;
    }

    if (displayName !== undefined) {
        localVarQueryParameter['display_name'] = displayName;
    }

    if (nameMatch !== undefined) {
        localVarQueryParameter['name_match'] = nameMatch;
    }

    if (scope !== undefined) {
        localVarQueryParameter['scope'] = scope;
    }

    if (orderBy !== undefined) {
        localVarQueryParameter['order_by'] = orderBy;
    }

    if (addFields) {
        localVarQueryParameter['add_fields'] = addFields.join(COLLECTION_FORMATS.csv);
    }

    if (username !== undefined) {
        localVarQueryParameter['username'] = username;
    }

    if (application !== undefined) {
        localVarQueryParameter['application'] = application;
    }

    if (permission !== undefined) {
        localVarQueryParameter['permission'] = permission;
    }

    if (externalTenant !== undefined) {
        localVarQueryParameter['external_tenant'] = externalTenant;
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

export default listRolesParamCreator;
