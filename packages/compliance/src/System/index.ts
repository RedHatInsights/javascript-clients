// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Errors, System200Response } from '../types';


export type SystemParams = {
  /**
  *
  * @type { any }
  * @memberof SystemApi
  */
  systemId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof SystemApi
  */
  xRHIDENTITY?: any,
  options?: AxiosRequestConfig
}

export type SystemReturnType = System200Response;

const isSystemObjectParams = (params: [SystemParams] | unknown[]): params is [SystemParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'systemId')
  }
  return false
}
/**
* Get information about one specific system.
* @summary Request a System
* @param {SystemParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const systemParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([SystemParams] | [any, any, AxiosRequestConfig])) => {
    const params = isSystemObjectParams(config) ? config[0] : ['systemId', 'xRHIDENTITY', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as SystemParams;
    const { systemId, xRHIDENTITY, options = {} } = params;
    const localVarPath = `/systems/{system_id}`
        .replace(`{${"system_id"}}`, encodeURIComponent(String(systemId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (xRHIDENTITY != null) {
        localVarHeaderParameter['X-RH-IDENTITY'] = typeof xRHIDENTITY === 'string'
            ? xRHIDENTITY
            : JSON.stringify(xRHIDENTITY);
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<SystemReturnType>(Promise.resolve(args));
}

export default systemParamCreator;
