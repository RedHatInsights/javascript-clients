// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ProblemsProblem400, ProblemsProblem403, ProblemsProblem404, RoleBindingsCreate401Response, RoleBindingsCreate500Response, RoleBindingsRoleBindingBySubject, RoleBindingsUpdateRoleBindingsRequest } from '../types';


export type RoleBindingsUpdateParams = {
  /**
  * Identify the resource ID for the set of role bindings to replace
  * @type { string }
  * @memberof RoleBindingsUpdateApi
  */
  resourceId: string,
  /**
  * Identify the resource type for the set of role bindings to replace
  * @type { string }
  * @memberof RoleBindingsUpdateApi
  */
  resourceType: string,
  /**
  * Identify the subject ID for the set of role bindings to replace
  * @type { string }
  * @memberof RoleBindingsUpdateApi
  */
  subjectId: string,
  /**
  * Identify the subject type for the set of role bindings to replace
  * @type { string }
  * @memberof RoleBindingsUpdateApi
  */
  subjectType: string,
  /**
  *
  * @type { RoleBindingsUpdateRoleBindingsRequest }
  * @memberof RoleBindingsUpdateApi
  */
  roleBindingsUpdateRoleBindingsRequest: RoleBindingsUpdateRoleBindingsRequest,
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
    return true && Object.prototype.hasOwnProperty.call(params[0], 'resourceId') && Object.prototype.hasOwnProperty.call(params[0], 'resourceType') && Object.prototype.hasOwnProperty.call(params[0], 'subjectId') && Object.prototype.hasOwnProperty.call(params[0], 'subjectType') && Object.prototype.hasOwnProperty.call(params[0], 'roleBindingsUpdateRoleBindingsRequest')
  }
  return false
}
/**
* Update roles for a specific subject on a resource. Replaces all existing roles with the provided roles.
* @summary Update role bindings
* @param {RoleBindingsUpdateParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const roleBindingsUpdateParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([RoleBindingsUpdateParams] | [string, string, string, string, RoleBindingsUpdateRoleBindingsRequest, string, AxiosRequestConfig])) => {
    const params = isRoleBindingsUpdateObjectParams(config) ? config[0] : ['resourceId', 'resourceType', 'subjectId', 'subjectType', 'roleBindingsUpdateRoleBindingsRequest', 'fields', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RoleBindingsUpdateParams;
    const { resourceId, resourceType, subjectId, subjectType, roleBindingsUpdateRoleBindingsRequest, fields, options = {} } = params;
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
