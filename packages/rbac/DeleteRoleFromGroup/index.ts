// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Error403 } from '../types';


export type DeleteRoleFromGroupParams = {
  /**
  * ID of group to update
  * @type { string }
  * @memberof DeleteRoleFromGroupApi
  */
  uuid: string,
  /**
  * A comma separated list of role UUIDs for roles to remove from the group
  * @type { string }
  * @memberof DeleteRoleFromGroupApi
  */
  roles: string,
  options?: AxiosRequestConfig
}

export type DeleteRoleFromGroupReturnType = void;

const isDeleteRoleFromGroupObjectParams = (params: [DeleteRoleFromGroupParams] | unknown[]): params is [DeleteRoleFromGroupParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'uuid') && Object.prototype.hasOwnProperty.call(params[0], 'roles')
  }
  return false
}
/**
*
* @summary Remove a role from a group in the tenant
* @param {DeleteRoleFromGroupParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const deleteRoleFromGroupParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([DeleteRoleFromGroupParams] | [string, string, AxiosRequestConfig])) => {
    const params = isDeleteRoleFromGroupObjectParams(config) ? config[0] : ['uuid', 'roles', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DeleteRoleFromGroupParams;
    const { uuid, roles, options = {} } = params;
    const localVarPath = `/groups/{uuid}/roles/`
        .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'DELETE' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (roles !== undefined) {
        localVarQueryParameter['roles'] = roles;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
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

    return sendRequest<DeleteRoleFromGroupReturnType>(Promise.resolve(args));
}

export default deleteRoleFromGroupParamCreator;
