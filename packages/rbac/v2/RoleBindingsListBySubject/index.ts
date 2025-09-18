// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ProblemsProblem403, RoleBindingsListBySubject401Response, RoleBindingsListBySubject500Response, RoleBindingsRoleBindingBySubjectListResponse } from '../types';


export type RoleBindingsListBySubjectParams = {
  /**
  * Filter by resource ID
  * @type { string }
  * @memberof RoleBindingsListBySubjectApi
  */
  resourceId: string,
  /**
  * Filter by resource type
  * @type { string }
  * @memberof RoleBindingsListBySubjectApi
  */
  resourceType: string,
  /**
  *
  * @type { number }
  * @memberof RoleBindingsListBySubjectApi
  */
  limit?: number,
  /**
  * Cursor for cursor-based pagination.
  * @type { string }
  * @memberof RoleBindingsListBySubjectApi
  */
  cursor?: string,
  /**
  * Filter by subject type
  * @type { string }
  * @memberof RoleBindingsListBySubjectApi
  */
  subjectType?: string,
  /**
  * Filter by subject ID
  * @type { string }
  * @memberof RoleBindingsListBySubjectApi
  */
  subjectId?: string,
  /**
  * Include role bindings inherited from parent resources
  * @type { boolean }
  * @memberof RoleBindingsListBySubjectApi
  */
  parentRoleBindings?: boolean,
  /**
  * Control which fields are included in the response to optimize payload size and improve performance.  **Default Behavior (no fields parameter):** Basic required fields are always included: subject.id, subject.type, role.id, resource.id  **When fields parameter is provided:** Only explicitly specified fields are included in the response. Subject type field (subject.type) is always required and included even if not specified.  **Syntax:** - Use parentheses to specify fields for nested objects: `object(field1,field2)` - Use comma to separate multiple field specifications: `subject(name),resource(name),last_modified` - Fields not in parentheses apply to the root level  **Available Fields:**  **subject object (polymorphic - available fields depend on type):** - id (UUID) - always included - type (string) - always included, cannot be excluded (determines which additional fields are available)  *When type = \"user\":* - user.username (string) - username of the user  *When type = \"group\":* - group.name (string) - name of the group - group.description (string) - description of the group - group.user_count (integer) - number of users in the group  **role object:** - id (UUID) - always included - name (string) - role display name  **resource object:** - id (UUID) - always included - name (string) - resource name - type (string) - resource type  **root level:** - last_modified (datetime) - timestamp of last modification - inherited_from (object) - resource from which this role binding is inherited (only present when parent_role_bindings=true)  **Examples:** - `subject(group.name,group.user_count)` - Include group name and user count (only for group subjects) - `subject(user.username)` - Include username (only for user subjects) - `role(name)` - Include role name - `resource(name,type)` - Include resource name and type - `subject(group.name),role(name),resource(name)` - Combine multiple object field specifications - `subject(user.username),role(name),last_modified` - Include user details, role name, and modification timestamp - `last_modified` - Include only modification timestamp (plus required fields) - `subject(group.name,group.user_count),resource(name,type)` - Mix group and resource specific fields - `inherited_from(name,type)` - Include inherited resource name and type (only relevant when parent_role_bindings=true)
  * @type { string }
  * @memberof RoleBindingsListBySubjectApi
  */
  fields?: string,
  /**
  * Sort by specified field(s), prefix with \'-\' for descending order
  * @type { string }
  * @memberof RoleBindingsListBySubjectApi
  */
  orderBy?: string,
  options?: AxiosRequestConfig
}

export type RoleBindingsListBySubjectReturnType = AxiosPromise<RoleBindingsRoleBindingBySubjectListResponse>;

const isRoleBindingsListBySubjectObjectParams = (params: [RoleBindingsListBySubjectParams] | unknown[]): params is [RoleBindingsListBySubjectParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'resourceId') && Object.prototype.hasOwnProperty.call(params, 'resourceType') && true && true && true && true && true && true && true
}
/**
* List role bindings grouped by subject
* @summary List role bindings grouped by subject
* @param {RoleBindingsListBySubjectParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const roleBindingsListBySubjectParamCreator = async (...config: ([RoleBindingsListBySubjectParams] | [string, string, number, string, string, string, boolean, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isRoleBindingsListBySubjectObjectParams(config) ? config[0] : ['resourceId', 'resourceType', 'limit', 'cursor', 'subjectType', 'subjectId', 'parentRoleBindings', 'fields', 'orderBy', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RoleBindingsListBySubjectParams;
    const { resourceId, resourceType, limit, cursor, subjectType, subjectId, parentRoleBindings, fields, orderBy, options = {} } = params;
    const localVarPath = `/role-bindings/by-subject`;
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

    if (parentRoleBindings !== undefined) {
        localVarQueryParameter['parent_role_bindings'] = parentRoleBindings;
    }

    if (fields !== undefined) {
        localVarQueryParameter['fields'] = fields;
    }

    if (orderBy !== undefined) {
        localVarQueryParameter['order_by'] = orderBy;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default roleBindingsListBySubjectParamCreator;
