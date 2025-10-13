// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { CreatePolicy201Response, Policy } from '../types';


export type CreatePolicyParams = {
  /**
  * For internal use only
  * @type { any }
  * @memberof CreatePolicyApi
  */
  xRHIDENTITY?: any,
  /**
  *
  * @type { Policy }
  * @memberof CreatePolicyApi
  */
  policy?: Policy,
  options?: AxiosRequestConfig
}

export type CreatePolicyReturnType = AxiosPromise<CreatePolicy201Response>;

const isCreatePolicyObjectParams = (params: [CreatePolicyParams] | unknown[]): params is [CreatePolicyParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Create a new security policy.
* @summary Create a Policy
* @param {CreatePolicyParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const createPolicyParamCreator = async (...config: ([CreatePolicyParams] | [any, Policy, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isCreatePolicyObjectParams(config) ? config[0] : ['xRHIDENTITY', 'policy', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as CreatePolicyParams;
    const { xRHIDENTITY, policy, options = {} } = params;
    const localVarPath = `/policies`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (xRHIDENTITY != null) {
        localVarHeaderParameter['X-RH-IDENTITY'] = typeof xRHIDENTITY === 'string'
            ? xRHIDENTITY
            : JSON.stringify(xRHIDENTITY);
    }



    localVarHeaderParameter['Content-Type'] = 'application/vnd.api+json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: policy,
    };
}

export default createPolicyParamCreator;
