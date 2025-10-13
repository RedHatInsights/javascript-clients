// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Error403, RoleWithAccess } from '../types';


export type GetRoleParams = {
  /**
  * ID of role to get
  * @type { string }
  * @memberof GetRoleApi
  */
  uuid: string,
  /**
  * Parameter for filtering resource by scope.
  * @type { GetRoleScopeEnum }
  * @memberof GetRoleApi
  */
  scope?: GetRoleScopeEnum,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const GetRoleScopeEnum = {
    OrgId: 'org_id',
    Principal: 'principal'
} as const;
export type GetRoleScopeEnum = typeof GetRoleScopeEnum[keyof typeof GetRoleScopeEnum];

export type GetRoleReturnType = AxiosPromise<RoleWithAccess>;

const isGetRoleObjectParams = (params: [GetRoleParams] | unknown[]): params is [GetRoleParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'uuid')
  }
  return false
}
/**
*
* @summary Get a role in the tenant
* @param {GetRoleParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getRoleParamCreator = async (...config: ([GetRoleParams] | [string, GetRoleScopeEnum, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isGetRoleObjectParams(config) ? config[0] : ['uuid', 'scope', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetRoleParams;
    const { uuid, scope, options = {} } = params;
    const localVarPath = `/roles/{uuid}/`
        .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (scope !== undefined) {
        localVarQueryParameter['scope'] = scope;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        auth:[
        {
        // authentication basic_auth required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };
}

export default getRoleParamCreator;
