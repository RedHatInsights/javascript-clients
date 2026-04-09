// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ExcludeSources, ProblemsProblem403, RoleBindingsBindingSubjectType, RoleBindingsGrantedSubjectFilterType, RoleBindingsList200Response, RoleBindingsList401Response, RoleBindingsList500Response } from '../types';


export type RoleBindingsListParams = {
  /**
  *
  * @type { number }
  * @memberof RoleBindingsListApi
  */
  limit?: number,
  /**
  * Cursor for cursor-based pagination.
  * @type { string }
  * @memberof RoleBindingsListApi
  */
  cursor?: string,
  /**
  * Filter by role ID
  * @type { string }
  * @memberof RoleBindingsListApi
  */
  roleId?: string,
  /**
  * Filter by resource ID
  * @type { string }
  * @memberof RoleBindingsListApi
  */
  resourceId?: string,
  /**
  * Filter by resource type
  * @type { string }
  * @memberof RoleBindingsListApi
  */
  resourceType?: string,
  /**
  * Org ID of the tenant resource to filter by. Cannot be combined with resource_id. When provided, resource_type is implicitly \'tenant\'.
  * @type { string }
  * @memberof RoleBindingsListApi
  */
  resourceTenantOrgId?: string,
  /**
  * Filter by binding subject type (group or user) on each row. Distinct from granted_subject_type.
  * @type { RoleBindingsBindingSubjectType }
  * @memberof RoleBindingsListApi
  */
  subjectType?: RoleBindingsBindingSubjectType,
  /**
  * Filter by subject ID
  * @type { string }
  * @memberof RoleBindingsListApi
  */
  subjectId?: string,
  /**
  *
  * @type { ExcludeSources }
  * @memberof RoleBindingsListApi
  */
  excludeSources?: ExcludeSources,
  /**
  * Filter by the type of subject effectively granted access. When \'user\', returns role bindings granted directly to the user and through their group memberships. When \'group\', returns role bindings granted to the group. When \'principal\', filters by external user ID via granted_subject.principal.user_id. Cannot be combined with subject_type/subject_id.
  * @type { RoleBindingsGrantedSubjectFilterType }
  * @memberof RoleBindingsListApi
  */
  grantedSubjectType?: RoleBindingsGrantedSubjectFilterType,
  /**
  * ID of the subject effectively granted access. Accepts a principal UUID or group UUID. Required when granted_subject_type is \'user\' or \'group\'.
  * @type { string }
  * @memberof RoleBindingsListApi
  */
  grantedSubjectId?: string,
  /**
  * External user ID of the principal effectively granted access. Required when granted_subject_type is \'principal\'.
  * @type { string }
  * @memberof RoleBindingsListApi
  */
  grantedSubjectPrincipalUserId?: string,
  /**
  * Control which fields are included in the response to optimize payload size.
  * @type { string }
  * @memberof RoleBindingsListApi
  */
  fields?: string,
  /**
  * Default sort is by the time the role was first created. Prefix with \'-\' for descending order.
  * @type { string }
  * @memberof RoleBindingsListApi
  */
  orderBy?: string,
  options?: AxiosRequestConfig
}

export type RoleBindingsListReturnType = RoleBindingsList200Response;

const isRoleBindingsListObjectParams = (params: [RoleBindingsListParams] | unknown[]): params is [RoleBindingsListParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* List role bindings
* @summary List role bindings
* @param {RoleBindingsListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const roleBindingsListParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([RoleBindingsListParams] | [number, string, string, string, string, string, RoleBindingsBindingSubjectType, string, ExcludeSources, RoleBindingsGrantedSubjectFilterType, string, string, string, string, AxiosRequestConfig])) => {
    const params = isRoleBindingsListObjectParams(config) ? config[0] : ['limit', 'cursor', 'roleId', 'resourceId', 'resourceType', 'resourceTenantOrgId', 'subjectType', 'subjectId', 'excludeSources', 'grantedSubjectType', 'grantedSubjectId', 'grantedSubjectPrincipalUserId', 'fields', 'orderBy', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RoleBindingsListParams;
    const { limit, cursor, roleId, resourceId, resourceType, resourceTenantOrgId, subjectType, subjectId, excludeSources, grantedSubjectType, grantedSubjectId, grantedSubjectPrincipalUserId, fields, orderBy, options = {} } = params;
    const localVarPath = `/role-bindings/`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (cursor !== undefined) {
        localVarQueryParameter['cursor'] = cursor;
    }

    if (roleId !== undefined) {
        localVarQueryParameter['role_id'] = roleId;
    }

    if (resourceId !== undefined) {
        localVarQueryParameter['resource_id'] = resourceId;
    }

    if (resourceType !== undefined) {
        localVarQueryParameter['resource_type'] = resourceType;
    }

    if (resourceTenantOrgId !== undefined) {
        localVarQueryParameter['resource.tenant.org_id'] = resourceTenantOrgId;
    }

    if (subjectType !== undefined) {
        localVarQueryParameter['subject_type'] = subjectType;
    }

    if (subjectId !== undefined) {
        localVarQueryParameter['subject_id'] = subjectId;
    }

    if (excludeSources !== undefined) {
        localVarQueryParameter['exclude_sources'] = excludeSources;
    }

    if (grantedSubjectType !== undefined) {
        localVarQueryParameter['granted_subject_type'] = grantedSubjectType;
    }

    if (grantedSubjectId !== undefined) {
        localVarQueryParameter['granted_subject_id'] = grantedSubjectId;
    }

    if (grantedSubjectPrincipalUserId !== undefined) {
        localVarQueryParameter['granted_subject.principal.user_id'] = grantedSubjectPrincipalUserId;
    }

    if (fields !== undefined) {
        localVarQueryParameter['fields'] = fields;
    }

    if (orderBy !== undefined) {
        localVarQueryParameter['order_by'] = orderBy;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<RoleBindingsListReturnType>(Promise.resolve(args));
}

export default roleBindingsListParamCreator;
