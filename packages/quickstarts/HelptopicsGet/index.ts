// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { HelptopicsGet200Response } from '../types';


export type HelptopicsGetParams = {
  /**
  * If set, content is associated with a specific CRC bundle
  * @type { Array<string> }
  * @memberof HelptopicsGetApi
  */
  bundle?: Array<string>,
  /**
  * If set, content is associated with a specific CRC application
  * @type { Array<string> }
  * @memberof HelptopicsGetApi
  */
  application?: Array<string>,
  /**
  * Search content by name
  * @type { Array<string> }
  * @memberof HelptopicsGetApi
  */
  name?: Array<string>,
  options?: AxiosRequestConfig
}

export type HelptopicsGetReturnType = HelptopicsGet200Response;

const isHelptopicsGetObjectParams = (params: [HelptopicsGetParams] | unknown[]): params is [HelptopicsGetParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
*
* @summary Returns list of all help topics
* @param {HelptopicsGetParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const helptopicsGetParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([HelptopicsGetParams] | [Array<string>, Array<string>, Array<string>, AxiosRequestConfig])) => {
    const params = isHelptopicsGetObjectParams(config) ? config[0] : ['bundle', 'application', 'name', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as HelptopicsGetParams;
    const { bundle, application, name, options = {} } = params;
    const localVarPath = `/helptopics`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (bundle) {
        localVarQueryParameter['bundle'] = bundle;
    }

    if (application) {
        localVarQueryParameter['application'] = application;
    }

    if (name) {
        localVarQueryParameter['name'] = name;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<HelptopicsGetReturnType>(Promise.resolve(args));
}

export default helptopicsGetParamCreator;
