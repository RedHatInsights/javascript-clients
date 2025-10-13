// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Msg, Policy } from '../types';


export type GetPoliciesByIdParams = {
  /**
  * UUID of the policy
  * @type { string }
  * @memberof GetPoliciesByIdApi
  */
  id: string,
  options?: AxiosRequestConfig
}

export type GetPoliciesByIdReturnType = Policy;

const isGetPoliciesByIdObjectParams = (params: [GetPoliciesByIdParams] | unknown[]): params is [GetPoliciesByIdParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
*
* @summary Retrieve a single policy for a customer by its id
* @param {GetPoliciesByIdParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getPoliciesByIdParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([GetPoliciesByIdParams] | [string, AxiosRequestConfig])) => {
    const params = isGetPoliciesByIdObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetPoliciesByIdParams;
    const { id, options = {} } = params;
    const localVarPath = `/policies/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<GetPoliciesByIdReturnType>(Promise.resolve(args));
}

export default getPoliciesByIdParamCreator;
