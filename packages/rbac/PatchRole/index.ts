// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Error403, RolePatch, RoleWithAccess } from '../types';


export type PatchRoleParams = {
  /**
  * ID of role to update
  * @type { string }
  * @memberof PatchRoleApi
  */
  uuid: string,
  /**
  * Patch to a role
  * @type { RolePatch }
  * @memberof PatchRoleApi
  */
  rolePatch?: RolePatch,
  options?: AxiosRequestConfig
}

export type PatchRoleReturnType = RoleWithAccess;

const isPatchRoleObjectParams = (params: [PatchRoleParams] | unknown[]): params is [PatchRoleParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'uuid')
  }
  return false
}
/**
*
* @summary Patch a role in the tenant
* @param {PatchRoleParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const patchRoleParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([PatchRoleParams] | [string, RolePatch, AxiosRequestConfig])) => {
    const params = isPatchRoleObjectParams(config) ? config[0] : ['uuid', 'rolePatch', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as PatchRoleParams;
    const { uuid, rolePatch, options = {} } = params;
    const localVarPath = `/roles/{uuid}/`
        .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PATCH' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: rolePatch,
        auth:[
        {
        // authentication basic_auth required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };

    return sendRequest<PatchRoleReturnType>(Promise.resolve(args));
}

export default patchRoleParamCreator;
