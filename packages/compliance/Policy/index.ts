// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { CreatePolicy201Response, Errors } from '../types';


export type PolicyParams = {
  /**
  *
  * @type { any }
  * @memberof PolicyApi
  */
  policyId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof PolicyApi
  */
  xRHIDENTITY?: any,
  options?: AxiosRequestConfig
}

export type PolicyReturnType = CreatePolicy201Response;

const isPolicyObjectParams = (params: [PolicyParams] | unknown[]): params is [PolicyParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'policyId')
  }
  return false
}
/**
* Retrieve a specific policy.
* @summary Request a Policy
* @param {PolicyParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const policyParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([PolicyParams] | [any, any, AxiosRequestConfig])) => {
    const params = isPolicyObjectParams(config) ? config[0] : ['policyId', 'xRHIDENTITY', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as PolicyParams;
    const { policyId, xRHIDENTITY, options = {} } = params;
    const localVarPath = `/policies/{policy_id}`
        .replace(`{${"policy_id"}}`, encodeURIComponent(String(policyId)));
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

    return sendRequest<PolicyReturnType>(Promise.resolve(args));
}

export default policyParamCreator;
