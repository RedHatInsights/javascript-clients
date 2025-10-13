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


export type ApiHostMergeFactsParams = {
  /**
  * A comma-separated list of host IDs.
  * @type { Array<string> }
  * @memberof ApiHostMergeFactsApi
  */
  hostIdList: Array<string>,
  /**
  * A namespace of the merged facts.
  * @type { string }
  * @memberof ApiHostMergeFactsApi
  */
  namespace: string,
  /**
  * A dictionary with the new facts to merge with the original ones.
  * @type { object }
  * @memberof ApiHostMergeFactsApi
  */
  body: object,
  /**
  * Filter by branch_id
  * @type { string }
  * @memberof ApiHostMergeFactsApi
  */
  branchId?: string,
  options?: AxiosRequestConfig
}

export type ApiHostMergeFactsReturnType = void;

const isApiHostMergeFactsObjectParams = (params: [ApiHostMergeFactsParams] | unknown[]): params is [ApiHostMergeFactsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'hostIdList') && Object.prototype.hasOwnProperty.call(params[0], 'namespace') && Object.prototype.hasOwnProperty.call(params[0], 'body')
  }
  return false
}
/**
* Merge one or multiple hosts facts under a namespace. <br /><br /> Required permissions: inventory:hosts:write
* @summary Merge facts under a namespace
* @param {ApiHostMergeFactsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiHostMergeFactsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiHostMergeFactsParams] | [Array<string>, string, object, string, AxiosRequestConfig])) => {
    const params = isApiHostMergeFactsObjectParams(config) ? config[0] : ['hostIdList', 'namespace', 'body', 'branchId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiHostMergeFactsParams;
    const { hostIdList, namespace, body, branchId, options = {} } = params;
    const localVarPath = `/hosts/{host_id_list}/facts/{namespace}`
        .replace(`{${"host_id_list"}}`, encodeURIComponent(String(hostIdList)))
        .replace(`{${"namespace"}}`, encodeURIComponent(String(namespace)));
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
        serializeData: body,
        auth:[
        {
        // authentication ApiKeyAuth required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };

    return sendRequest<ApiHostMergeFactsReturnType>(Promise.resolve(args));
}

export default apiHostMergeFactsParamCreator;
