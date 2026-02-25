// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { BadRequest, HelptopicsNameGet200Response, NotFound } from '../types';


export type HelptopicsNameGetParams = {
  /**
  * identifier
  * @type { string }
  * @memberof HelptopicsNameGetApi
  */
  name: string,
  options?: AxiosRequestConfig
}

export type HelptopicsNameGetReturnType = HelptopicsNameGet200Response;

const isHelptopicsNameGetObjectParams = (params: [HelptopicsNameGetParams] | unknown[]): params is [HelptopicsNameGetParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'name')
  }
  return false
}
/**
*
* @summary Return a help topics set by topic name
* @param {HelptopicsNameGetParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const helptopicsNameGetParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([HelptopicsNameGetParams] | [string, AxiosRequestConfig])) => {
    const params = isHelptopicsNameGetObjectParams(config) ? config[0] : ['name', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as HelptopicsNameGetParams;
    const { name, options = {} } = params;
    const localVarPath = `/helptopics/{name}`
        .replace(`{${"name"}}`, encodeURIComponent(String(name)));
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

    return sendRequest<HelptopicsNameGetReturnType>(Promise.resolve(args));
}

export default helptopicsNameGetParamCreator;
