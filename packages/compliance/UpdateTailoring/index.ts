// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

// @ts-ignore
import type { Tailoring, Tailoring200Response } from '../types';


export type UpdateTailoringParams = {
  /**
  * 
  * @type { any }
  * @memberof UpdateTailoringApi
  */
  policyId: any, 
  /**
  * 
  * @type { any }
  * @memberof UpdateTailoringApi
  */
  id: any, 
  /**
  * For internal use only
  * @type { any }
  * @memberof UpdateTailoringApi
  */
  xRHIDENTITY?: any, 
  /**
  * 
  * @type { Tailoring }
  * @memberof UpdateTailoringApi
  */
  tailoring?: Tailoring, 
  options?: AxiosRequestConfig
}

const isUpdateTailoringObjectParams = (params: [UpdateTailoringParams] | unknown[]): params is [UpdateTailoringParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'policyId') && Object.prototype.hasOwnProperty.call(params, 'id') && true && true
}
/**
* Updates a Tailoring with the provided value_override
* @summary Update a Tailoring
* @param {UpdateTailoringParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const updateTailoringParamCreator = async (...config: ([UpdateTailoringParams] | [any, any, any, Tailoring, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isUpdateTailoringObjectParams(config) ? config[0] : ['policyId', 'id', 'xRHIDENTITY', 'tailoring', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as UpdateTailoringParams;
    const { policyId, id, xRHIDENTITY, tailoring, options = {} } = params;
    const localVarPath = `/policies/{policy_id}/tailorings/{id}`
        .replace(`{${"policy_id"}}`, encodeURIComponent(String(policyId)))
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
        serializeData: tailoring,
    };
}

export default updateTailoringParamCreator;
