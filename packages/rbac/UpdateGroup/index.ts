// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Error403, Group, GroupOut } from '../types';


export type UpdateGroupParams = {
  /**
  * ID of group to update
  * @type { string }
  * @memberof UpdateGroupApi
  */
  uuid: string,
  /**
  * Group to update in tenant
  * @type { Group }
  * @memberof UpdateGroupApi
  */
  group: Group,
  options?: AxiosRequestConfig
}

export type UpdateGroupReturnType = AxiosPromise<GroupOut>;

const isUpdateGroupObjectParams = (params: [UpdateGroupParams] | unknown[]): params is [UpdateGroupParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'uuid') && Object.prototype.hasOwnProperty.call(params[0], 'group')
  }
  return false
}
/**
*
* @summary Update a group in the tenant
* @param {UpdateGroupParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const updateGroupParamCreator = async (...config: ([UpdateGroupParams] | [string, Group, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isUpdateGroupObjectParams(config) ? config[0] : ['uuid', 'group', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as UpdateGroupParams;
    const { uuid, group, options = {} } = params;
    const localVarPath = `/groups/{uuid}/`
        .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PUT' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: group,
        auth:[
        {
        // authentication basic_auth required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };
}

export default updateGroupParamCreator;
