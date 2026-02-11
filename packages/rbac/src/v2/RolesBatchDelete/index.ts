// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ProblemsProblem400, ProblemsProblem403, ProblemsProblem404, RoleBindingsList401Response, RoleBindingsList500Response, RolesBatchDeleteRolesRequest } from '../types';


export type RolesBatchDeleteParams = {
  /**
  *
  * @type { RolesBatchDeleteRolesRequest }
  * @memberof RolesBatchDeleteApi
  */
  rolesBatchDeleteRolesRequest: RolesBatchDeleteRolesRequest,
  options?: AxiosRequestConfig
}

export type RolesBatchDeleteReturnType = void;

const isRolesBatchDeleteObjectParams = (params: [RolesBatchDeleteParams] | unknown[]): params is [RolesBatchDeleteParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'rolesBatchDeleteRolesRequest')
  }
  return false
}
/**
* Delete multiple roles by ID atomically.
* @param {RolesBatchDeleteParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const rolesBatchDeleteParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([RolesBatchDeleteParams] | [RolesBatchDeleteRolesRequest, AxiosRequestConfig])) => {
    const params = isRolesBatchDeleteObjectParams(config) ? config[0] : ['rolesBatchDeleteRolesRequest', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RolesBatchDeleteParams;
    const { rolesBatchDeleteRolesRequest, options = {} } = params;
    const localVarPath = `/roles:batchDelete`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: rolesBatchDeleteRolesRequest,
    };

    return sendRequest<RolesBatchDeleteReturnType>(Promise.resolve(args));
}

export default rolesBatchDeleteParamCreator;
