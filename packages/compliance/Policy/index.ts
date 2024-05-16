// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

// @ts-ignore
import type { CreatePolicy201Response, Errors } from '../types';


export type PolicyParams = {
  /**
  *
  * @type { any }
  * @memberof PolicyApi
  */
  id: any,
  /**
  *
  * @type { any }
  * @memberof PolicyApi
  */
  xRHIDENTITY?: any,
  options?: AxiosRequestConfig
}

const isPolicyObjectParams = (params: [PolicyParams] | unknown[]): params is [PolicyParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id') && true
}
/**
* Returns a Policy
* @summary Request a Policy
* @param {PolicyParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const policyParamCreator = async (...config: ([PolicyParams] | [any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isPolicyObjectParams(config) ? config[0] : ['id', 'xRHIDENTITY', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as PolicyParams;
    const { id, xRHIDENTITY, options = {} } = params;
    const localVarPath = `/policies/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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

export default policyParamCreator;
