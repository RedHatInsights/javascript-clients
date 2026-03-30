// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ProblemsProblem403, RoleBindingsList200Response, RoleBindingsList401Response, RoleBindingsList500Response, RoleBindingsSubjectType } from '../types';


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
  * Filter by subject type (e.g., \'group\' or \'user\')
  * @type { RoleBindingsSubjectType }
  * @memberof RoleBindingsListApi
  */
  subjectType?: RoleBindingsSubjectType,
  /**
  * Filter by subject ID
  * @type { string }
  * @memberof RoleBindingsListApi
  */
  subjectId?: string,
  /**
  * Filter by the type of subject effectively granted access. When \'user\', returns role bindings granted directly to the user and through their group memberships. When \'group\', returns role bindings granted to the group. Cannot be combined with subject_type/subject_id.
  * @type { RoleBindingsSubjectType }
  * @memberof RoleBindingsListApi
  */
  grantedSubjectType?: RoleBindingsSubjectType,
  /**
  * ID of the subject effectively granted access. Accepts a principal UUID, user_id, or group UUID. Required when granted_subject_type is provided.
  * @type { string }
  * @memberof RoleBindingsListApi
  */
  grantedSubjectId?: string,
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
export const roleBindingsListParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([RoleBindingsListParams] | [number, string, string, string, string, RoleBindingsSubjectType, string, RoleBindingsSubjectType, string, string, string, AxiosRequestConfig])) => {
    const params = isRoleBindingsListObjectParams(config) ? config[0] : ['limit', 'cursor', 'roleId', 'resourceId', 'resourceType', 'subjectType', 'subjectId', 'grantedSubjectType', 'grantedSubjectId', 'fields', 'orderBy', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RoleBindingsListParams;
    const { limit, cursor, roleId, resourceId, resourceType, subjectType, subjectId, grantedSubjectType, grantedSubjectId, fields, orderBy, options = {} } = params;
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

    if (subjectType !== undefined) {
        localVarQueryParameter['subject_type'] = subjectType;
    }

    if (subjectId !== undefined) {
        localVarQueryParameter['subject_id'] = subjectId;
    }

    if (grantedSubjectType !== undefined) {
        localVarQueryParameter['granted_subject_type'] = grantedSubjectType;
    }

    if (grantedSubjectId !== undefined) {
        localVarQueryParameter['granted_subject_id'] = grantedSubjectId;
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
