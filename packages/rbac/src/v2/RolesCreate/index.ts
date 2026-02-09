// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ProblemsProblem400, ProblemsProblem403, Role, RoleBindingsList401Response, RoleBindingsList500Response, RolesCreateOrUpdateRoleRequest } from '../types';


export type RolesCreateParams = {
  /**
  *
  * @type { RolesCreateOrUpdateRoleRequest }
  * @memberof RolesCreateApi
  */
  rolesCreateOrUpdateRoleRequest: RolesCreateOrUpdateRoleRequest,
  /**
  * Control which fields are included in the response to optimize payload size.  **When fields parameter is provided:** Only explicitly specified fields are returned. All response fields become optional.  **Examples:** - `?fields=id,name,permissions_count` - Include id, name, and count (no permissions array) - `?fields=permissions_count,last_modified` - Include only count and timestamp
  * @type { string }
  * @memberof RolesCreateApi
  */
  fields?: string,
  options?: AxiosRequestConfig
}

export type RolesCreateReturnType = Role;

const isRolesCreateObjectParams = (params: [RolesCreateParams] | unknown[]): params is [RolesCreateParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'rolesCreateOrUpdateRoleRequest')
  }
  return false
}
/**
* Create a custom role in tenant
* @summary Create a custom role in tenant
* @param {RolesCreateParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const rolesCreateParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([RolesCreateParams] | [RolesCreateOrUpdateRoleRequest, string, AxiosRequestConfig])) => {
    const params = isRolesCreateObjectParams(config) ? config[0] : ['rolesCreateOrUpdateRoleRequest', 'fields', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RolesCreateParams;
    const { rolesCreateOrUpdateRoleRequest, fields, options = {} } = params;
    const localVarPath = `/roles/`;
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
        serializeData: rolesCreateOrUpdateRoleRequest,
    };

    return sendRequest<RolesCreateReturnType>(Promise.resolve(args));
}

export default rolesCreateParamCreator;
