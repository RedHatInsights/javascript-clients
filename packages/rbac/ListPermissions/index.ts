// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Error403, PermissionPagination } from '../types';


export type ListPermissionsParams = {
  /**
  * Parameter for selecting the amount of data returned.
  * @type { number }
  * @memberof ListPermissionsApi
  */
  limit?: number,
  /**
  * Parameter for selecting the offset of data.
  * @type { number }
  * @memberof ListPermissionsApi
  */
  offset?: number,
  /**
  * Parameter for ordering permissions by value. For inverse ordering, supply \'-\' before the param value, such as: ?order_by=-application
  * @type { ListPermissionsOrderByEnum }
  * @memberof ListPermissionsApi
  */
  orderBy?: ListPermissionsOrderByEnum,
  /**
  * Exact match for the application name of a permission. You may also use a comma-separated list to match on multiple applications.
  * @type { string }
  * @memberof ListPermissionsApi
  */
  application?: string,
  /**
  * Exact match for the resource type name of a permission. You may also use a comma-separated list to match on multiple resource_types.
  * @type { string }
  * @memberof ListPermissionsApi
  */
  resourceType?: string,
  /**
  * Exact match for the operation verb name of a permission You may also use a comma-separated list to match on multiple verbs.
  * @type { string }
  * @memberof ListPermissionsApi
  */
  verb?: string,
  /**
  * Partial match for the aggregate permission value name of a permission object.
  * @type { string }
  * @memberof ListPermissionsApi
  */
  permission?: string,
  /**
  * If set to \'true\', this will exclude any permission with a global allowance on either \'application\', \'resource_type\' or \'verb\'. The default is \'false\'.
  * @type { ListPermissionsExcludeGlobalsEnum }
  * @memberof ListPermissionsApi
  */
  excludeGlobals?: ListPermissionsExcludeGlobalsEnum,
  /**
  * An optional string filter which accepts one or more role UUIDs, comma-separated, to return permissions not associated with the supplied role(s).
  * @type { string }
  * @memberof ListPermissionsApi
  */
  excludeRoles?: string,
  /**
  * If set to \'true\', this will exclude any permission with a role where the \'application\' is not in the role create allow list.
  * @type { ListPermissionsAllowedOnlyEnum }
  * @memberof ListPermissionsApi
  */
  allowedOnly?: ListPermissionsAllowedOnlyEnum,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ListPermissionsOrderByEnum = {
    Application: 'application',
    ResourceType: 'resource_type',
    Verb: 'verb',
    Permission: 'permission'
} as const;
export type ListPermissionsOrderByEnum = typeof ListPermissionsOrderByEnum[keyof typeof ListPermissionsOrderByEnum];
/**
  * @export
  * @enum {string}
  */
export const ListPermissionsExcludeGlobalsEnum = {
    True: 'true',
    False: 'false'
} as const;
export type ListPermissionsExcludeGlobalsEnum = typeof ListPermissionsExcludeGlobalsEnum[keyof typeof ListPermissionsExcludeGlobalsEnum];
/**
  * @export
  * @enum {string}
  */
export const ListPermissionsAllowedOnlyEnum = {
    True: 'true',
    False: 'false'
} as const;
export type ListPermissionsAllowedOnlyEnum = typeof ListPermissionsAllowedOnlyEnum[keyof typeof ListPermissionsAllowedOnlyEnum];

const isListPermissionsObjectParams = (params: [ListPermissionsParams] | unknown[]): params is [ListPermissionsParams] => {
  return params.length === 1 && true && true && true && true && true && true && true && true && true && true
}
/**
* By default, responses are sorted in ascending order by permission application.
* @summary List the permissions for a tenant
* @param {ListPermissionsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listPermissionsParamCreator = async (...config: ([ListPermissionsParams] | [number, number, ListPermissionsOrderByEnum, string, string, string, string, ListPermissionsExcludeGlobalsEnum, string, ListPermissionsAllowedOnlyEnum, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListPermissionsObjectParams(config) ? config[0] : ['limit', 'offset', 'orderBy', 'application', 'resourceType', 'verb', 'permission', 'excludeGlobals', 'excludeRoles', 'allowedOnly', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListPermissionsParams;
    const { limit, offset, orderBy, application, resourceType, verb, permission, excludeGlobals, excludeRoles, allowedOnly, options = {} } = params;
    const localVarPath = `/permissions/`;
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

    if (application !== undefined) {
        localVarQueryParameter['application'] = application;
    }

    if (resourceType !== undefined) {
        localVarQueryParameter['resource_type'] = resourceType;
    }

    if (verb !== undefined) {
        localVarQueryParameter['verb'] = verb;
    }

    if (permission !== undefined) {
        localVarQueryParameter['permission'] = permission;
    }

    if (excludeGlobals !== undefined) {
        localVarQueryParameter['exclude_globals'] = excludeGlobals;
    }

    if (excludeRoles !== undefined) {
        localVarQueryParameter['exclude_roles'] = excludeRoles;
    }

    if (allowedOnly !== undefined) {
        localVarQueryParameter['allowed_only'] = allowedOnly;
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

export default listPermissionsParamCreator;
