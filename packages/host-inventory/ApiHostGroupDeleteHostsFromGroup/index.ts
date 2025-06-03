// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type {  } from '../types';


export type ApiHostGroupDeleteHostsFromGroupParams = {
  /**
  * Group ID.
  * @type { string }
  * @memberof ApiHostGroupDeleteHostsFromGroupApi
  */
  groupId: string,
  /**
  * A comma-separated list of host IDs.
  * @type { Array<string> }
  * @memberof ApiHostGroupDeleteHostsFromGroupApi
  */
  hostIdList: Array<string>,
  options?: AxiosRequestConfig
}

export type ApiHostGroupDeleteHostsFromGroupReturnType = AxiosPromise<void>;

const isApiHostGroupDeleteHostsFromGroupObjectParams = (params: [ApiHostGroupDeleteHostsFromGroupParams] | unknown[]): params is [ApiHostGroupDeleteHostsFromGroupParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'groupId') && Object.prototype.hasOwnProperty.call(params[0], 'hostIdList')
}
/**
* Delete one or more hosts from a group. <br /><br /> Required permissions: inventory:groups:write
* @summary Delete one or more hosts from a group
* @param {ApiHostGroupDeleteHostsFromGroupParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiHostGroupDeleteHostsFromGroupParamCreator = async (...config: ([ApiHostGroupDeleteHostsFromGroupParams] | [string, Array<string>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isApiHostGroupDeleteHostsFromGroupObjectParams(config) ? config[0] : ['groupId', 'hostIdList', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiHostGroupDeleteHostsFromGroupParams;
    const { groupId, hostIdList, options = {} } = params;
    const localVarPath = `/groups/{group_id}/hosts/{host_id_list}`
        .replace(`{${"group_id"}}`, encodeURIComponent(String(groupId)))
        .replace(`{${"host_id_list"}}`, encodeURIComponent(String(hostIdList)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'DELETE' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        auth:[
        {
        // authentication ApiKeyAuth required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };
}

export default apiHostGroupDeleteHostsFromGroupParamCreator;
