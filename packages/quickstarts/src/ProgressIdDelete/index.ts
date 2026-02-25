// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { BadRequest, NotFound } from '../types';


export type ProgressIdDeleteParams = {
  /**
  * Progress record ID
  * @type { number }
  * @memberof ProgressIdDeleteApi
  */
  id: number,
  options?: AxiosRequestConfig
}

export type ProgressIdDeleteReturnType = void;

const isProgressIdDeleteObjectParams = (params: [ProgressIdDeleteParams] | unknown[]): params is [ProgressIdDeleteParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
*
* @summary Delete progress record by ID
* @param {ProgressIdDeleteParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const progressIdDeleteParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ProgressIdDeleteParams] | [number, AxiosRequestConfig])) => {
    const params = isProgressIdDeleteObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ProgressIdDeleteParams;
    const { id, options = {} } = params;
    const localVarPath = `/progress/{id}`
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

    return sendRequest<ProgressIdDeleteReturnType>(Promise.resolve(args));
}

export default progressIdDeleteParamCreator;
