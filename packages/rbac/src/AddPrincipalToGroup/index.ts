// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Error403, ErrorNotFound, GroupPrincipalIn, GroupWithPrincipalsAndRoles } from '../types';


export type AddPrincipalToGroupParams = {
  /**
  * ID of group to update
  * @type { string }
  * @memberof AddPrincipalToGroupApi
  */
  uuid: string,
  /**
  * Principal to add to a group
  * @type { GroupPrincipalIn }
  * @memberof AddPrincipalToGroupApi
  */
  groupPrincipalIn: GroupPrincipalIn,
  options?: AxiosRequestConfig
}

export type AddPrincipalToGroupReturnType = GroupWithPrincipalsAndRoles;

const isAddPrincipalToGroupObjectParams = (params: [AddPrincipalToGroupParams] | unknown[]): params is [AddPrincipalToGroupParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'uuid') && Object.prototype.hasOwnProperty.call(params[0], 'groupPrincipalIn')
  }
  return false
}
/**
*
* @summary Add a principal to a group in the tenant
* @param {AddPrincipalToGroupParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const addPrincipalToGroupParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([AddPrincipalToGroupParams] | [string, GroupPrincipalIn, AxiosRequestConfig])) => {
    const params = isAddPrincipalToGroupObjectParams(config) ? config[0] : ['uuid', 'groupPrincipalIn', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as AddPrincipalToGroupParams;
    const { uuid, groupPrincipalIn, options = {} } = params;
    const localVarPath = `/groups/{uuid}/principals/`
        .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
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
        serializeData: groupPrincipalIn,
        auth:[
        {
        // authentication basic_auth required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };

    return sendRequest<AddPrincipalToGroupReturnType>(Promise.resolve(args));
}

export default addPrincipalToGroupParamCreator;
