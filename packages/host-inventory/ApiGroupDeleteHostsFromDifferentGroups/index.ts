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


export type ApiGroupDeleteHostsFromDifferentGroupsParams = {
  /**
  * A comma-separated list of host IDs.
  * @type { Array<string> }
  * @memberof ApiGroupDeleteHostsFromDifferentGroupsApi
  */
  hostIdList: Array<string>,
  options?: AxiosRequestConfig
}

const isApiGroupDeleteHostsFromDifferentGroupsObjectParams = (params: [ApiGroupDeleteHostsFromDifferentGroupsParams] | unknown[]): params is [ApiGroupDeleteHostsFromDifferentGroupsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'hostIdList')
}
/**
* Delete a list of hosts from the groups they are in. <br /><br /> Required permissions: inventory:groups:write
* @summary Delete a list of hosts from the groups they are in
* @param {ApiGroupDeleteHostsFromDifferentGroupsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiGroupDeleteHostsFromDifferentGroupsParamCreator = async (...config: ([ApiGroupDeleteHostsFromDifferentGroupsParams] | [Array<string>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isApiGroupDeleteHostsFromDifferentGroupsObjectParams(config) ? config[0] : ['hostIdList', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiGroupDeleteHostsFromDifferentGroupsParams;
    const { hostIdList, options = {} } = params;
    const localVarPath = `/groups/hosts/{host_id_list}`
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

export default apiGroupDeleteHostsFromDifferentGroupsParamCreator;
