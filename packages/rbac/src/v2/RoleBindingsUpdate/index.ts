// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ProblemsProblem400, ProblemsProblem403, ProblemsProblem404, ResourceType, RoleBindingsBindingSubjectType, RoleBindingsList401Response, RoleBindingsList500Response, RoleBindingsRoleBindingBySubject, RoleBindingsUpdateRoleBindingsRequest } from '../types';


export type RoleBindingsUpdateParams = {
  /**
  * Identify the subject ID for the set of role bindings to replace
  * @type { string }
  * @memberof RoleBindingsUpdateApi
  */
  subjectId: string,
  /**
  * Subject kind: group or user (principal UUID). No granted_subject.* params on this path.
  * @type { RoleBindingsBindingSubjectType }
  * @memberof RoleBindingsUpdateApi
  */
  subjectType: RoleBindingsBindingSubjectType,
  /**
  *
  * @type { RoleBindingsUpdateRoleBindingsRequest }
  * @memberof RoleBindingsUpdateApi
  */
  roleBindingsUpdateRoleBindingsRequest: RoleBindingsUpdateRoleBindingsRequest,
  /**
  * Identify the resource ID for the set of role bindings to replace. For workspace: UUID. For tenant: tenant resource ID (format: {domain}/{org_id}). Required unless resource.tenant.org_id is provided.
  * @type { string }
  * @memberof RoleBindingsUpdateApi
  */
  resourceId?: string,
  /**
  * Identify the resource type for the set of role bindings to replace. Required unless resource.tenant.org_id is provided.
  * @type { ResourceType }
  * @memberof RoleBindingsUpdateApi
  */
  resourceType?: ResourceType,
  /**
  * Org ID of the tenant resource. Cannot be combined with resource_id. When provided, resource_type is implicitly \'tenant\'.
  * @type { string }
  * @memberof RoleBindingsUpdateApi
  */
  resourceTenantOrgId?: string,
  /**
  *
  * @type { string }
  * @memberof RoleBindingsUpdateApi
  */
  fields?: string,
  options?: AxiosRequestConfig
}

export type RoleBindingsUpdateReturnType = RoleBindingsRoleBindingBySubject;

const isRoleBindingsUpdateObjectParams = (params: [RoleBindingsUpdateParams] | unknown[]): params is [RoleBindingsUpdateParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'subjectId') && Object.prototype.hasOwnProperty.call(params[0], 'subjectType') && Object.prototype.hasOwnProperty.call(params[0], 'roleBindingsUpdateRoleBindingsRequest')
  }
  return false
}
/**
* Update roles for a specific subject on a resource. Replaces all existing roles with the provided roles. subject_type is user or group only (UUID via subject_id). granted_subject.* query params are not supported here; use GET /role-bindings/ to filter by external user ID.
* @summary Update role bindings
* @param {RoleBindingsUpdateParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const roleBindingsUpdateParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([RoleBindingsUpdateParams] | [string, RoleBindingsBindingSubjectType, RoleBindingsUpdateRoleBindingsRequest, string, ResourceType, string, string, AxiosRequestConfig])) => {
    const params = isRoleBindingsUpdateObjectParams(config) ? config[0] : ['subjectId', 'subjectType', 'roleBindingsUpdateRoleBindingsRequest', 'resourceId', 'resourceType', 'resourceTenantOrgId', 'fields', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RoleBindingsUpdateParams;
    const { subjectId, subjectType, roleBindingsUpdateRoleBindingsRequest, resourceId, resourceType, resourceTenantOrgId, fields, options = {} } = params;
    const localVarPath = `/role-bindings/by-subject/`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PUT' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (resourceId !== undefined) {
        localVarQueryParameter['resource_id'] = resourceId;
    }

    if (resourceType !== undefined) {
        localVarQueryParameter['resource_type'] = resourceType;
    }

    if (resourceTenantOrgId !== undefined) {
        localVarQueryParameter['resource.tenant.org_id'] = resourceTenantOrgId;
    }

    if (subjectId !== undefined) {
        localVarQueryParameter['subject_id'] = subjectId;
    }

    if (subjectType !== undefined) {
        localVarQueryParameter['subject_type'] = subjectType;
    }

    if (fields !== undefined) {
        localVarQueryParameter['fields'] = fields;
    }



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: roleBindingsUpdateRoleBindingsRequest,
    };

    return sendRequest<RoleBindingsUpdateReturnType>(Promise.resolve(args));
}

export default roleBindingsUpdateParamCreator;
