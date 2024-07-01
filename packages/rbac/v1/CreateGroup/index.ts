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


export type CreateGroupParams = {
  /**
  * Group to create in tenant
  * @type { Group }
  * @memberof CreateGroupApi
  */
  group: Group, 
  options?: AxiosRequestConfig
}

const isCreateGroupObjectParams = (params: [CreateGroupParams] | unknown[]): params is [CreateGroupParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'group')
}
/**
* 
* @summary Create a group in a tenant
* @param {CreateGroupParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const createGroupParamCreator = async (...config: ([CreateGroupParams] | [Group, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isCreateGroupObjectParams(config) ? config[0] : ['group', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as CreateGroupParams;
    const { group, options = {} } = params;
    const localVarPath = `/groups/`;
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

export default createGroupParamCreator;
