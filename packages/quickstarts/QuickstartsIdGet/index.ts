// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { BadRequest, NotFound, Quickstart } from '../types';


export type QuickstartsIdGetParams = {
  /**
  * identifier
  * @type { number }
  * @memberof QuickstartsIdGetApi
  */
  id: number,
  options?: AxiosRequestConfig
}

export type QuickstartsIdGetReturnType = Quickstart;

const isQuickstartsIdGetObjectParams = (params: [QuickstartsIdGetParams] | unknown[]): params is [QuickstartsIdGetParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
*
* @summary Return a quickstarts by ID
* @param {QuickstartsIdGetParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const quickstartsIdGetParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([QuickstartsIdGetParams] | [number, AxiosRequestConfig])) => {
    const params = isQuickstartsIdGetObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as QuickstartsIdGetParams;
    const { id, options = {} } = params;
    const localVarPath = `/quickstarts/{id}`
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

    return sendRequest<QuickstartsIdGetReturnType>(Promise.resolve(args));
}

export default quickstartsIdGetParamCreator;
