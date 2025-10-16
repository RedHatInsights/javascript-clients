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


export type DeletePoliciesIdsParams = {
  /**
  *
  * @type { Array<string> }
  * @memberof DeletePoliciesIdsApi
  */
  requestBody: Array<string>,
  options?: AxiosRequestConfig
}

export type DeletePoliciesIdsReturnType = Array<string>;

const isDeletePoliciesIdsObjectParams = (params: [DeletePoliciesIdsParams] | unknown[]): params is [DeletePoliciesIdsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'requestBody')
  }
  return false
}
/**
*
* @summary Delete policies for a customer by the ids passed in the body. Result will be a list of deleted UUIDs
* @param {DeletePoliciesIdsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const deletePoliciesIdsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([DeletePoliciesIdsParams] | [Array<string>, AxiosRequestConfig])) => {
    const params = isDeletePoliciesIdsObjectParams(config) ? config[0] : ['requestBody', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DeletePoliciesIdsParams;
    const { requestBody, options = {} } = params;
    const localVarPath = `/policies/ids`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'DELETE' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: requestBody,
    };

    return sendRequest<DeletePoliciesIdsReturnType>(Promise.resolve(args));
}

export default deletePoliciesIdsParamCreator;
