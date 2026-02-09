// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ProblemsProblem403, RoleBindingsList401Response, RoleBindingsList500Response, RoleBindingsListBySubject200Response } from '../types';


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
  * Control which fields are included in the response to optimize payload size and improve performance.
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

export type RoleBindingsListBySubjectReturnType = RoleBindingsListBySubject200Response;

const isRoleBindingsListBySubjectObjectParams = (params: [RoleBindingsListBySubjectParams] | unknown[]): params is [RoleBindingsListBySubjectParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'resourceId') && Object.prototype.hasOwnProperty.call(params[0], 'resourceType')
  }
  return false
}
/**
* List role bindings grouped by subject
* @summary List role bindings grouped by subject
* @param {RoleBindingsListBySubjectParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const roleBindingsListBySubjectParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([RoleBindingsListBySubjectParams] | [string, string, number, string, string, string, boolean, string, string, AxiosRequestConfig])) => {
    const params = isRoleBindingsListBySubjectObjectParams(config) ? config[0] : ['resourceId', 'resourceType', 'limit', 'cursor', 'subjectType', 'subjectId', 'parentRoleBindings', 'fields', 'orderBy', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RoleBindingsListBySubjectParams;
    const { resourceId, resourceType, limit, cursor, subjectType, subjectId, parentRoleBindings, fields, orderBy, options = {} } = params;
    const localVarPath = `/role-bindings/by-subject/`;
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

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<RoleBindingsListBySubjectReturnType>(Promise.resolve(args));
}

export default roleBindingsListBySubjectParamCreator;
