// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

// @ts-ignore
import type { CreatePolicy201Response, PolicyUpdate } from '../types';


export type UpdatePolicyParams = {
  /**
  *
  * @type { any }
  * @memberof UpdatePolicyApi
  */
  id: any,
  /**
  *
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

const isUpdatePolicyObjectParams = (params: [UpdatePolicyParams] | unknown[]): params is [UpdatePolicyParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id') && true && true
}
/**
* Updates a Policy with the provided attributes
* @summary Update a Policy
* @param {UpdatePolicyParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const updatePolicyParamCreator = async (...config: ([UpdatePolicyParams] | [any, any, PolicyUpdate, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isUpdatePolicyObjectParams(config) ? config[0] : ['id', 'xRHIDENTITY', 'policyUpdate', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as UpdatePolicyParams;
    const { id, xRHIDENTITY, policyUpdate, options = {} } = params;
    const localVarPath = `/policies/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
