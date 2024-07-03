// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

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
  * UUID or OS minor version number
  * @type { any }
  * @memberof UpdateTailoringApi
  */
  tailoringId: any,
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
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'policyId') && Object.prototype.hasOwnProperty.call(params, 'tailoringId') && true && true
}
/**
* Updates a Tailoring with the provided value_overrides
* @summary Update a Tailoring
* @param {UpdateTailoringParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const updateTailoringParamCreator = async (...config: ([UpdateTailoringParams] | [any, any, any, Tailoring, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isUpdateTailoringObjectParams(config) ? config[0] : ['policyId', 'tailoringId', 'xRHIDENTITY', 'tailoring', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as UpdateTailoringParams;
    const { policyId, tailoringId, xRHIDENTITY, tailoring, options = {} } = params;
    const localVarPath = `/policies/{policy_id}/tailorings/{tailoring_id}`
        .replace(`{${"policy_id"}}`, encodeURIComponent(String(policyId)))
        .replace(`{${"tailoring_id"}}`, encodeURIComponent(String(tailoringId)));
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
