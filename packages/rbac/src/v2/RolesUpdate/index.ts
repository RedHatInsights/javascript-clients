// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ProblemsProblem400, ProblemsProblem403, ProblemsProblem404, Role, RoleBindingsList401Response, RoleBindingsList500Response, RolesCreateOrUpdateRoleRequest } from '../types';


export type RolesUpdateParams = {
  /**
  * UUID that uniquely identifies the role
  * @type { string }
  * @memberof RolesUpdateApi
  */
  id: string,
  /**
  *
  * @type { RolesCreateOrUpdateRoleRequest }
  * @memberof RolesUpdateApi
  */
  rolesCreateOrUpdateRoleRequest: RolesCreateOrUpdateRoleRequest,
  /**
  * Control which fields are included in the response to optimize payload size.
  * @type { string }
  * @memberof RolesUpdateApi
  */
  fields?: string,
  options?: AxiosRequestConfig
}

export type RolesUpdateReturnType = Role;

const isRolesUpdateObjectParams = (params: [RolesUpdateParams] | unknown[]): params is [RolesUpdateParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id') && Object.prototype.hasOwnProperty.call(params[0], 'rolesCreateOrUpdateRoleRequest')
  }
  return false
}
/**
* Update a custom role in tenant
* @summary Update a custom role in tenant
* @param {RolesUpdateParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const rolesUpdateParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([RolesUpdateParams] | [string, RolesCreateOrUpdateRoleRequest, string, AxiosRequestConfig])) => {
    const params = isRolesUpdateObjectParams(config) ? config[0] : ['id', 'rolesCreateOrUpdateRoleRequest', 'fields', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RolesUpdateParams;
    const { id, rolesCreateOrUpdateRoleRequest, fields, options = {} } = params;
    const localVarPath = `/roles/{id}/`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PUT' as Method, ...options};
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

    return sendRequest<RolesUpdateReturnType>(Promise.resolve(args));
}

export default rolesUpdateParamCreator;
