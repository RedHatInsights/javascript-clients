// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { CreatePolicy201Response, PolicyUpdate } from '../types';


export type UpdatePolicyParams = {
  /**
  *
  * @type { any }
  * @memberof UpdatePolicyApi
  */
  policyId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof UpdatePolicyApi
  */
  xRHIDENTITY?: any,
  /**
  *
  * @type { PolicyUpdate }
  * @memberof UpdatePolicyApi
  */
  policyUpdate?: PolicyUpdate,
  options?: AxiosRequestConfig
}

export type UpdatePolicyReturnType = AxiosPromise<CreatePolicy201Response>;

const isUpdatePolicyObjectParams = (params: [UpdatePolicyParams] | unknown[]): params is [UpdatePolicyParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true  && Object.prototype.hasOwnProperty.call(params[0], 'policyId')
  }
  return false
}
/**
* Edit or update an existing policy.
* @summary Update a Policy
* @param {UpdatePolicyParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const updatePolicyParamCreator = async (...config: ([UpdatePolicyParams] | [any, any, PolicyUpdate, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isUpdatePolicyObjectParams(config) ? config[0] : ['policyId', 'xRHIDENTITY', 'policyUpdate', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as UpdatePolicyParams;
    const { policyId, xRHIDENTITY, policyUpdate, options = {} } = params;
    const localVarPath = `/policies/{policy_id}`
        .replace(`{${"policy_id"}}`, encodeURIComponent(String(policyId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PATCH' as Method, ...options};
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
        serializeData: policyUpdate,
    };
}

export default updatePolicyParamCreator;
