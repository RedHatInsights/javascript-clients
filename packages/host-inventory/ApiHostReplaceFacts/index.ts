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


export type ApiHostReplaceFactsParams = {
  /**
  * A comma-separated list of host IDs.
  * @type { Array<string> }
  * @memberof ApiHostReplaceFactsApi
  */
  hostIdList: Array<string>,
  /**
  * A namespace of the merged facts.
  * @type { string }
  * @memberof ApiHostReplaceFactsApi
  */
  namespace: string,
  /**
  * A dictionary with the new facts to replace the original ones.
  * @type { object }
  * @memberof ApiHostReplaceFactsApi
  */
  body: object,
  /**
  * Filter by branch_id
  * @type { string }
  * @memberof ApiHostReplaceFactsApi
  */
  branchId?: string,
  options?: AxiosRequestConfig
}

export type ApiHostReplaceFactsReturnType = void;

const isApiHostReplaceFactsObjectParams = (params: [ApiHostReplaceFactsParams] | unknown[]): params is [ApiHostReplaceFactsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'hostIdList') && Object.prototype.hasOwnProperty.call(params[0], 'namespace') && Object.prototype.hasOwnProperty.call(params[0], 'body')
  }
  return false
}
/**
* Replace facts under a namespace <br /><br /> Required permissions: inventory:hosts:write
* @summary Replace facts under a namespace
* @param {ApiHostReplaceFactsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiHostReplaceFactsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiHostReplaceFactsParams] | [Array<string>, string, object, string, AxiosRequestConfig])) => {
    const params = isApiHostReplaceFactsObjectParams(config) ? config[0] : ['hostIdList', 'namespace', 'body', 'branchId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiHostReplaceFactsParams;
    const { hostIdList, namespace, body, branchId, options = {} } = params;
    const localVarPath = `/hosts/{host_id_list}/facts/{namespace}`
        .replace(`{${"host_id_list"}}`, encodeURIComponent(String(hostIdList)))
        .replace(`{${"namespace"}}`, encodeURIComponent(String(namespace)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PUT' as Method, ...options};
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

    return sendRequest<ApiHostReplaceFactsReturnType>(Promise.resolve(args));
}

export default apiHostReplaceFactsParamCreator;
