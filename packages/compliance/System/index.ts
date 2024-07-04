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

const isSystemObjectParams = (params: [SystemParams] | unknown[]): params is [SystemParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'systemId') && true
}
/**
* Returns a System
* @summary Request a System
* @param {SystemParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const systemParamCreator = async (...config: ([SystemParams] | [any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
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

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default systemParamCreator;
