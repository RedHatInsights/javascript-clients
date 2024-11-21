// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Error403, GroupRolesPagination } from '../types';


export type ListRolesForGroupParams = {
  /**
  * ID of group
  * @type { string }
  * @memberof ListRolesForGroupApi
  */
  uuid: string,
  /**
  * If this is set to true, the result would be roles excluding the ones in the group
  * @type { boolean }
  * @memberof ListRolesForGroupApi
  */
  exclude?: boolean,
  /**
  * Parameter for filtering group roles by role `name` using string contains search.
  * @type { string }
  * @memberof ListRolesForGroupApi
  */
  roleName?: string,
  /**
  * Parameter for filtering group roles by role `display_name` using string contains search.
  * @type { string }
  * @memberof ListRolesForGroupApi
  */
  roleDisplayName?: string,
  /**
  * Parameter for filtering group roles by role `description` using string contains search.
  * @type { string }
  * @memberof ListRolesForGroupApi
  */
  roleDescription?: string,
  /**
  * Parameter for filtering group roles by system flag.
  * @type { boolean }
  * @memberof ListRolesForGroupApi
  */
  roleSystem?: boolean,
  /**
  * Parameter for filtering group roles by role `external_tenant` using string search.
  * @type { string }
  * @memberof ListRolesForGroupApi
  */
  roleExternalTenant?: string,
  /**
  * Parameter for selecting the amount of data returned.
  * @type { number }
  * @memberof ListRolesForGroupApi
  */
  limit?: number,
  /**
  * Parameter for selecting the offset of data.
  * @type { number }
  * @memberof ListRolesForGroupApi
  */
  offset?: number,
  /**
  * Parameter for ordering roles by value. For inverse ordering, supply \'-\' before the param value, such as: ?order_by=-name
  * @type { ListRolesForGroupOrderByEnum }
  * @memberof ListRolesForGroupApi
  */
  orderBy?: ListRolesForGroupOrderByEnum,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ListRolesForGroupOrderByEnum = {
    Name: 'name',
    DisplayName: 'display_name',
    Modified: 'modified',
    PolicyCount: 'policyCount'
} as const;
export type ListRolesForGroupOrderByEnum = typeof ListRolesForGroupOrderByEnum[keyof typeof ListRolesForGroupOrderByEnum];

export type ListRolesForGroupReturnType = AxiosPromise<GroupRolesPagination>;

const isListRolesForGroupObjectParams = (params: [ListRolesForGroupParams] | unknown[]): params is [ListRolesForGroupParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'uuid') && true && true && true && true && true && true && true && true && true
}
/**
* By default, responses are sorted in ascending order by role name
* @summary List the roles for a group in the tenant
* @param {ListRolesForGroupParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listRolesForGroupParamCreator = async (...config: ([ListRolesForGroupParams] | [string, boolean, string, string, string, boolean, string, number, number, ListRolesForGroupOrderByEnum, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListRolesForGroupObjectParams(config) ? config[0] : ['uuid', 'exclude', 'roleName', 'roleDisplayName', 'roleDescription', 'roleSystem', 'roleExternalTenant', 'limit', 'offset', 'orderBy', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListRolesForGroupParams;
    const { uuid, exclude, roleName, roleDisplayName, roleDescription, roleSystem, roleExternalTenant, limit, offset, orderBy, options = {} } = params;
    const localVarPath = `/groups/{uuid}/roles/`
        .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (exclude !== undefined) {
        localVarQueryParameter['exclude'] = exclude;
    }

    if (roleName !== undefined) {
        localVarQueryParameter['role_name'] = roleName;
    }

    if (roleDisplayName !== undefined) {
        localVarQueryParameter['role_display_name'] = roleDisplayName;
    }

    if (roleDescription !== undefined) {
        localVarQueryParameter['role_description'] = roleDescription;
    }

    if (roleSystem !== undefined) {
        localVarQueryParameter['role_system'] = roleSystem;
    }

    if (roleExternalTenant !== undefined) {
        localVarQueryParameter['role_external_tenant'] = roleExternalTenant;
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

export default listRolesForGroupParamCreator;
