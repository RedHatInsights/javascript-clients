// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { AddRoleToGroup200Response, Error403, GroupRoleIn } from '../types';


export type AddRoleToGroupParams = {
  /**
  * ID of group to update
  * @type { any }
  * @memberof AddRoleToGroupApi
  */
  uuid: any,
  /**
  * Role to add to a group
  * @type { GroupRoleIn }
  * @memberof AddRoleToGroupApi
  */
  groupRoleIn: GroupRoleIn,
  options?: AxiosRequestConfig
}

export type AddRoleToGroupReturnType = AxiosPromise<AddRoleToGroup200Response>;

const isAddRoleToGroupObjectParams = (params: [AddRoleToGroupParams] | unknown[]): params is [AddRoleToGroupParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'uuid') && Object.prototype.hasOwnProperty.call(params[0], 'groupRoleIn')
}
/**
*
* @summary Add a role to a group in the tenant
* @param {AddRoleToGroupParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const addRoleToGroupParamCreator = async (...config: ([AddRoleToGroupParams] | [any, GroupRoleIn, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isAddRoleToGroupObjectParams(config) ? config[0] : ['uuid', 'groupRoleIn', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as AddRoleToGroupParams;
    const { uuid, groupRoleIn, options = {} } = params;
    const localVarPath = `/groups/{uuid}/roles/`
        .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
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
        serializeData: groupRoleIn,
        auth:[
        {
        // authentication basic_auth required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };
}

export default addRoleToGroupParamCreator;
