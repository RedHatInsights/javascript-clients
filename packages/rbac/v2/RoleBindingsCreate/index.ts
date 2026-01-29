// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ProblemsProblem400, ProblemsProblem403, RoleBindingsCreate401Response, RoleBindingsCreate500Response, RoleBindingsCreateRoleBindingsRequest, RoleBindingsCreateRoleBindingsResponse } from '../types';


export type RoleBindingsCreateParams = {
  /**
  *
  * @type { RoleBindingsCreateRoleBindingsRequest }
  * @memberof RoleBindingsCreateApi
  */
  roleBindingsCreateRoleBindingsRequest: RoleBindingsCreateRoleBindingsRequest,
  /**
  *
  * @type { string }
  * @memberof RoleBindingsCreateApi
  */
  fields?: string,
  options?: AxiosRequestConfig
}

export type RoleBindingsCreateReturnType = RoleBindingsCreateRoleBindingsResponse;

const isRoleBindingsCreateObjectParams = (params: [RoleBindingsCreateParams] | unknown[]): params is [RoleBindingsCreateParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'roleBindingsCreateRoleBindingsRequest')
  }
  return false
}
/**
* Grant access to a resource to a set of subjects with a set of roles
* @summary Grant access to a resource to a set of subjects with a set of roles
* @param {RoleBindingsCreateParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const roleBindingsCreateParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([RoleBindingsCreateParams] | [RoleBindingsCreateRoleBindingsRequest, string, AxiosRequestConfig])) => {
    const params = isRoleBindingsCreateObjectParams(config) ? config[0] : ['roleBindingsCreateRoleBindingsRequest', 'fields', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RoleBindingsCreateParams;
    const { roleBindingsCreateRoleBindingsRequest, fields, options = {} } = params;
    const localVarPath = `/role-bindings/`;
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
        serializeData: roleBindingsCreateRoleBindingsRequest,
    };

    return sendRequest<RoleBindingsCreateReturnType>(Promise.resolve(args));
}

export default roleBindingsCreateParamCreator;
