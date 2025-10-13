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


export type DeletePoliciesByIdParams = {
  /**
  * UUID of the policy
  * @type { string }
  * @memberof DeletePoliciesByIdApi
  */
  id: string,
  options?: AxiosRequestConfig
}

export type DeletePoliciesByIdReturnType = void;

const isDeletePoliciesByIdObjectParams = (params: [DeletePoliciesByIdParams] | unknown[]): params is [DeletePoliciesByIdParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
*
* @summary Delete a single policy for a customer by its id
* @param {DeletePoliciesByIdParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const deletePoliciesByIdParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([DeletePoliciesByIdParams] | [string, AxiosRequestConfig])) => {
    const params = isDeletePoliciesByIdObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DeletePoliciesByIdParams;
    const { id, options = {} } = params;
    const localVarPath = `/policies/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'DELETE' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<DeletePoliciesByIdReturnType>(Promise.resolve(args));
}

export default deletePoliciesByIdParamCreator;
