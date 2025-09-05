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
  * Filter by resource type
  * @type { string }
  * @memberof RoleBindingsListBySubjectApi
  */
  resourceType?: string,
  /**
  * Filter by resource ID
  * @type { string }
  * @memberof RoleBindingsListBySubjectApi
  */
  resourceId?: string,
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
  * Control which fields are included in the response to optimize payload size and improve performance.  **Default Behavior (no fields parameter):** Basic required fields are always included: subject.id, subject.type, role.id, resource.type  **When fields parameter is provided:** Only explicitly specified fields are included in the response. Type fields (subject.type, resource.type) are always required and included even if not specified.  **Syntax:** - Use parentheses to specify fields for nested objects: `object(field1,field2)` - Use comma to separate multiple field specifications: `subject(name),resource(name),last_modified` - Fields not in parentheses apply to the root level  **Available Fields:**  **subject object (polymorphic - available fields depend on type):** - id (UUID) - always included - type (string) - always included, cannot be excluded (determines which additional fields are available)  *When type = \"user\":* - user.username (string) - username of the user  *When type = \"group\":* - group.name (string) - name of the group - group.description (string) - description of the group - group.user_count (integer) - number of users in the group  **role object:** - id (UUID) - always included - name (string) - role display name  **resource object (polymorphic - available fields depend on type):** - id (UUID) - always included - type (string) - always included, cannot be excluded (determines which additional fields are available)  *When type = \"workspace\":* - workspace.name (string) - name of the workspace - workspace.type (string) - type of workspace (e.g., \"default\", \"standard\") - workspace.description (string) - description of the workspace  **root level:** - last_modified (datetime) - timestamp of last modification  **Examples:** - `subject(group.name,group.user_count)` - Include group name and user count (only for group subjects) - `subject(user.username)` - Include username (only for user subjects) - `role(name)` - Include role name - `resource(workspace.name,workspace.description)` - Include workspace name and description (only for workspace resources) - `subject(group.name),role(name),resource(workspace.name)` - Combine multiple object field specifications - `subject(user.username),role(name),last_modified` - Include user details, role name, and modification timestamp - `last_modified` - Include only modification timestamp (plus required fields) - `subject(group.name,group.user_count),resource(workspace.type)` - Mix group and workspace specific fields
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
  return params.length === 1 && true && true && true && true && true && true && true && true
}
/**
* List role bindings grouped by subject
* @summary List role bindings grouped by subject
* @param {RoleBindingsListBySubjectParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const roleBindingsListBySubjectParamCreator = async (...config: ([RoleBindingsListBySubjectParams] | [number, string, string, string, string, string, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isRoleBindingsListBySubjectObjectParams(config) ? config[0] : ['limit', 'cursor', 'resourceType', 'resourceId', 'subjectType', 'subjectId', 'fields', 'orderBy', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RoleBindingsListBySubjectParams;
    const { limit, cursor, resourceType, resourceId, subjectType, subjectId, fields, orderBy, options = {} } = params;
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

    if (resourceType !== undefined) {
        localVarQueryParameter['resource_type'] = resourceType;
    }

    if (resourceId !== undefined) {
        localVarQueryParameter['resource_id'] = resourceId;
    }

    if (subjectType !== undefined) {
        localVarQueryParameter['subject_type'] = subjectType;
    }

    if (subjectId !== undefined) {
        localVarQueryParameter['subject_id'] = subjectId;
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
