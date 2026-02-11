// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ProblemsProblem400, ProblemsProblem403, RoleBindingsBatchCreateRoleBindingsRequest, RoleBindingsBatchCreateRoleBindingsResponse, RoleBindingsList401Response, RoleBindingsList500Response } from '../types';


export type RoleBindingsBatchCreateParams = {
  /**
  *
  * @type { RoleBindingsBatchCreateRoleBindingsRequest }
  * @memberof RoleBindingsBatchCreateApi
  */
  roleBindingsBatchCreateRoleBindingsRequest: RoleBindingsBatchCreateRoleBindingsRequest,
  /**
  *
  * @type { string }
  * @memberof RoleBindingsBatchCreateApi
  */
  fields?: string,
  options?: AxiosRequestConfig
}

export type RoleBindingsBatchCreateReturnType = RoleBindingsBatchCreateRoleBindingsResponse;

const isRoleBindingsBatchCreateObjectParams = (params: [RoleBindingsBatchCreateParams] | unknown[]): params is [RoleBindingsBatchCreateParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'roleBindingsBatchCreateRoleBindingsRequest')
  }
  return false
}
/**
* Grant access to a resource to a set of subjects with a set of roles
* @summary Grant access to a resource to a set of subjects with a set of roles
* @param {RoleBindingsBatchCreateParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const roleBindingsBatchCreateParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([RoleBindingsBatchCreateParams] | [RoleBindingsBatchCreateRoleBindingsRequest, string, AxiosRequestConfig])) => {
    const params = isRoleBindingsBatchCreateObjectParams(config) ? config[0] : ['roleBindingsBatchCreateRoleBindingsRequest', 'fields', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RoleBindingsBatchCreateParams;
    const { roleBindingsBatchCreateRoleBindingsRequest, fields, options = {} } = params;
    const localVarPath = `/role-bindings:batchCreate`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (fields !== undefined) {
        localVarQueryParameter['fields'] = fields;
    }



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: roleBindingsBatchCreateRoleBindingsRequest,
    };

    return sendRequest<RoleBindingsBatchCreateReturnType>(Promise.resolve(args));
}

export default roleBindingsBatchCreateParamCreator;
