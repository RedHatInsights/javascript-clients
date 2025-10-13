// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Error403, RoleIn, RoleWithAccess } from '../types';


export type CreateRoleParams = {
  /**
  * Role to create
  * @type { RoleIn }
  * @memberof CreateRoleApi
  */
  roleIn: RoleIn,
  options?: AxiosRequestConfig
}

export type CreateRoleReturnType = AxiosPromise<RoleWithAccess>;

const isCreateRoleObjectParams = (params: [CreateRoleParams] | unknown[]): params is [CreateRoleParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'roleIn')
  }
  return false
}
/**
*
* @summary Create a role for a tenant
* @param {CreateRoleParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const createRoleParamCreator = async (...config: ([CreateRoleParams] | [RoleIn, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isCreateRoleObjectParams(config) ? config[0] : ['roleIn', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as CreateRoleParams;
    const { roleIn, options = {} } = params;
    const localVarPath = `/roles/`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: roleIn,
        auth:[
        {
        // authentication basic_auth required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };
}

export default createRoleParamCreator;
