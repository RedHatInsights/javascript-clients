// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { BadRequest, ProgressGet200Response } from '../types';


export type ProgressGetParams = {
  /**
  * Filter by account
  * @type { string }
  * @memberof ProgressGetApi
  */
  account: string,
  /**
  * Filter by quickstart name
  * @type { string }
  * @memberof ProgressGetApi
  */
  quickstart?: string,
  options?: AxiosRequestConfig
}

export type ProgressGetReturnType = ProgressGet200Response;

const isProgressGetObjectParams = (params: [ProgressGetParams] | unknown[]): params is [ProgressGetParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'account')
  }
  return false
}
/**
*
* @summary Returns list of progress records
* @param {ProgressGetParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const progressGetParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ProgressGetParams] | [string, string, AxiosRequestConfig])) => {
    const params = isProgressGetObjectParams(config) ? config[0] : ['account', 'quickstart', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ProgressGetParams;
    const { account, quickstart, options = {} } = params;
    const localVarPath = `/progress`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (account !== undefined) {
        localVarQueryParameter['account'] = account;
    }

    if (quickstart !== undefined) {
        localVarQueryParameter['quickstart'] = quickstart;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<ProgressGetReturnType>(Promise.resolve(args));
}

export default progressGetParamCreator;
