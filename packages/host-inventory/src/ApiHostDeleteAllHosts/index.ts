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


export type ApiHostDeleteAllHostsParams = {
  /**
  * Confirmation to delete all hosts on the account
  * @type { boolean }
  * @memberof ApiHostDeleteAllHostsApi
  */
  confirmDeleteAll?: boolean,
  options?: AxiosRequestConfig
}

export type ApiHostDeleteAllHostsReturnType = void;

const isApiHostDeleteAllHostsObjectParams = (params: [ApiHostDeleteAllHostsParams] | unknown[]): params is [ApiHostDeleteAllHostsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Delete all hosts on the account.  The request must include \"confirm_delete_all=true\". <br /><br /> Required permissions: inventory:hosts:write
* @summary Delete all hosts on the account
* @param {ApiHostDeleteAllHostsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiHostDeleteAllHostsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiHostDeleteAllHostsParams] | [boolean, AxiosRequestConfig])) => {
    const params = isApiHostDeleteAllHostsObjectParams(config) ? config[0] : ['confirmDeleteAll', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiHostDeleteAllHostsParams;
    const { confirmDeleteAll, options = {} } = params;
    const localVarPath = `/hosts/all`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'DELETE' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (confirmDeleteAll !== undefined) {
        localVarQueryParameter['confirm_delete_all'] = confirmDeleteAll;
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

    return sendRequest<ApiHostDeleteAllHostsReturnType>(Promise.resolve(args));
}

export default apiHostDeleteAllHostsParamCreator;
