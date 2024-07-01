// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Error403, PermissionOptionsPagination } from '../types';


export type ListPermissionOptionsParams = {
  /**
  * specify which fields of permission to display
  * @type { ListPermissionOptionsFieldEnum }
  * @memberof ListPermissionOptionsApi
  */
  field: ListPermissionOptionsFieldEnum, 
  /**
  * Parameter for selecting the amount of data returned.
  * @type { number }
  * @memberof ListPermissionOptionsApi
  */
  limit?: number, 
  /**
  * Parameter for selecting the offset of data.
  * @type { number }
  * @memberof ListPermissionOptionsApi
  */
  offset?: number, 
  /**
  * Filter returned options based on application. You may also use a comma-separated list to filter on multiple applications.
  * @type { string }
  * @memberof ListPermissionOptionsApi
  */
  application?: string, 
  /**
  * Filter returned options based on resource_type. You may also use a comma-separated list to filter on multiple resource_types.
  * @type { string }
  * @memberof ListPermissionOptionsApi
  */
  resourceType?: string, 
  /**
  * Filter returned options based on verb. You may also use a comma-separated list to filter on multiple verbs.
  * @type { string }
  * @memberof ListPermissionOptionsApi
  */
  verb?: string, 
  /**
  * If set to \'true\', this will exclude any permission option with a global allowance on the supplied \'?field=\' value of \'application\', \'resource_type\' or \'verb\'. The default is \'false\'.
  * @type { ListPermissionOptionsExcludeGlobalsEnum }
  * @memberof ListPermissionOptionsApi
  */
  excludeGlobals?: ListPermissionOptionsExcludeGlobalsEnum, 
  /**
  * If set to \'true\', this will exclude any permission with a role where the \'application\' is not in the role create allow list.
  * @type { ListPermissionOptionsAllowedOnlyEnum }
  * @memberof ListPermissionOptionsApi
  */
  allowedOnly?: ListPermissionOptionsAllowedOnlyEnum, 
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ListPermissionOptionsFieldEnum = {
    Application: 'application',
    ResourceType: 'resource_type',
    Verb: 'verb'
} as const;
export type ListPermissionOptionsFieldEnum = typeof ListPermissionOptionsFieldEnum[keyof typeof ListPermissionOptionsFieldEnum];
/**
  * @export
  * @enum {string}
  */
export const ListPermissionOptionsExcludeGlobalsEnum = {
    True: 'true',
    False: 'false'
} as const;
export type ListPermissionOptionsExcludeGlobalsEnum = typeof ListPermissionOptionsExcludeGlobalsEnum[keyof typeof ListPermissionOptionsExcludeGlobalsEnum];
/**
  * @export
  * @enum {string}
  */
export const ListPermissionOptionsAllowedOnlyEnum = {
    True: 'true',
    False: 'false'
} as const;
export type ListPermissionOptionsAllowedOnlyEnum = typeof ListPermissionOptionsAllowedOnlyEnum[keyof typeof ListPermissionOptionsAllowedOnlyEnum];

const isListPermissionOptionsObjectParams = (params: [ListPermissionOptionsParams] | unknown[]): params is [ListPermissionOptionsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'field') && true && true && true && true && true && true && true
}
/**
* By default, options of application is returned. And could be resource_type or verb on demand.
* @summary List the available options for fields of permissions for a tenant
* @param {ListPermissionOptionsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listPermissionOptionsParamCreator = async (...config: ([ListPermissionOptionsParams] | [ListPermissionOptionsFieldEnum, number, number, string, string, string, ListPermissionOptionsExcludeGlobalsEnum, ListPermissionOptionsAllowedOnlyEnum, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListPermissionOptionsObjectParams(config) ? config[0] : ['field', 'limit', 'offset', 'application', 'resourceType', 'verb', 'excludeGlobals', 'allowedOnly', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListPermissionOptionsParams;
    const { field, limit, offset, application, resourceType, verb, excludeGlobals, allowedOnly, options = {} } = params;
    const localVarPath = `/permissions/options/`;
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

    if (field !== undefined) {
        localVarQueryParameter['field'] = field;
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

    if (excludeGlobals !== undefined) {
        localVarQueryParameter['exclude_globals'] = excludeGlobals;
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

export default listPermissionOptionsParamCreator;
