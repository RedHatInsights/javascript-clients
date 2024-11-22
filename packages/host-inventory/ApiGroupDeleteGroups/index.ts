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


export type ApiGroupDeleteGroupsParams = {
  /**
  * A comma-separated list of group IDs.
  * @type { Array<string> }
  * @memberof ApiGroupDeleteGroupsApi
  */
  groupIdList: Array<string>,
  options?: AxiosRequestConfig
}

export type ApiGroupDeleteGroupsReturnType = AxiosPromise<void>;

const isApiGroupDeleteGroupsObjectParams = (params: [ApiGroupDeleteGroupsParams] | unknown[]): params is [ApiGroupDeleteGroupsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'groupIdList')
}
/**
* Delete a list of groups. <br /><br /> Required permissions: inventory:groups:write
* @summary Delete a list of groups
* @param {ApiGroupDeleteGroupsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiGroupDeleteGroupsParamCreator = async (...config: ([ApiGroupDeleteGroupsParams] | [Array<string>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isApiGroupDeleteGroupsObjectParams(config) ? config[0] : ['groupIdList', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiGroupDeleteGroupsParams;
    const { groupIdList, options = {} } = params;
    const localVarPath = `/groups/{group_id_list}`
        .replace(`{${"group_id_list"}}`, encodeURIComponent(String(groupIdList)));
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

export default apiGroupDeleteGroupsParamCreator;
