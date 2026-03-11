// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { NotFoundErrorResponse, PatchHostIn } from '../types';


export type ApiHostPatchHostByIdParams = {
  /**
  * A comma-separated list of host IDs.
  * @type { Array<string> }
  * @memberof ApiHostPatchHostByIdApi
  */
  hostIdList: Array<string>,
  /**
  * A group of fields to be updated on the hosts
  * @type { PatchHostIn }
  * @memberof ApiHostPatchHostByIdApi
  */
  patchHostIn: PatchHostIn,
  /**
  * Filter by branch_id
  * @type { string }
  * @memberof ApiHostPatchHostByIdApi
  */
  branchId?: string,
  options?: AxiosRequestConfig
}

export type ApiHostPatchHostByIdReturnType = object;

const isApiHostPatchHostByIdObjectParams = (params: [ApiHostPatchHostByIdParams] | unknown[]): params is [ApiHostPatchHostByIdParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'hostIdList') && Object.prototype.hasOwnProperty.call(params[0], 'patchHostIn')
  }
  return false
}
/**
* Update hosts <br /><br /> Required permissions: inventory:hosts:write
* @summary Update hosts
* @param {ApiHostPatchHostByIdParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiHostPatchHostByIdParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiHostPatchHostByIdParams] | [Array<string>, PatchHostIn, string, AxiosRequestConfig])) => {
    const params = isApiHostPatchHostByIdObjectParams(config) ? config[0] : ['hostIdList', 'patchHostIn', 'branchId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiHostPatchHostByIdParams;
    const { hostIdList, patchHostIn, branchId, options = {} } = params;
    const localVarPath = `/hosts/{host_id_list}`
        .replace(`{${"host_id_list"}}`, encodeURIComponent(String(hostIdList)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PATCH' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (branchId !== undefined) {
        localVarQueryParameter['branch_id'] = branchId;
    }



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: patchHostIn,
        auth:[
        {
        // authentication ApiKeyAuth required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };

    return sendRequest<ApiHostPatchHostByIdReturnType>(Promise.resolve(args));
}

export default apiHostPatchHostByIdParamCreator;
