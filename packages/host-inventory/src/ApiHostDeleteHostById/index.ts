// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { NotFoundErrorResponse } from '../types';


export type ApiHostDeleteHostByIdParams = {
  /**
  * A comma-separated list of host IDs.
  * @type { Array<string> }
  * @memberof ApiHostDeleteHostByIdApi
  */
  hostIdList: Array<string>,
  /**
  * Filter by branch_id
  * @type { string }
  * @memberof ApiHostDeleteHostByIdApi
  */
  branchId?: string,
  options?: AxiosRequestConfig
}

export type ApiHostDeleteHostByIdReturnType = object;

const isApiHostDeleteHostByIdObjectParams = (params: [ApiHostDeleteHostByIdParams] | unknown[]): params is [ApiHostDeleteHostByIdParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'hostIdList')
  }
  return false
}
/**
* Delete hosts by IDs <br /><br /> Required permissions: inventory:hosts:write
* @summary Delete hosts by IDs
* @param {ApiHostDeleteHostByIdParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiHostDeleteHostByIdParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiHostDeleteHostByIdParams] | [Array<string>, string, AxiosRequestConfig])) => {
    const params = isApiHostDeleteHostByIdObjectParams(config) ? config[0] : ['hostIdList', 'branchId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiHostDeleteHostByIdParams;
    const { hostIdList, branchId, options = {} } = params;
    const localVarPath = `/hosts/{host_id_list}`
        .replace(`{${"host_id_list"}}`, encodeURIComponent(String(hostIdList)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'DELETE' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (branchId !== undefined) {
        localVarQueryParameter['branch_id'] = branchId;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
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

    return sendRequest<ApiHostDeleteHostByIdReturnType>(Promise.resolve(args));
}

export default apiHostDeleteHostByIdParamCreator;
