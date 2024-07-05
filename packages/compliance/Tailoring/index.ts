// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Errors, Tailoring200Response } from '../types';


export type TailoringParams = {
  /**
  *
  * @type { any }
  * @memberof TailoringApi
  */
  policyId: any,
  /**
  * UUID or OS minor version number
  * @type { any }
  * @memberof TailoringApi
  */
  tailoringId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof TailoringApi
  */
  xRHIDENTITY?: any,
  options?: AxiosRequestConfig
}

const isTailoringObjectParams = (params: [TailoringParams] | unknown[]): params is [TailoringParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'policyId') && Object.prototype.hasOwnProperty.call(params, 'tailoringId') && true
}
/**
* Returns a Tailoring
* @summary Request a Tailoring
* @param {TailoringParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const tailoringParamCreator = async (...config: ([TailoringParams] | [any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isTailoringObjectParams(config) ? config[0] : ['policyId', 'tailoringId', 'xRHIDENTITY', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as TailoringParams;
    const { policyId, tailoringId, xRHIDENTITY, options = {} } = params;
    const localVarPath = `/policies/{policy_id}/tailorings/{tailoring_id}`
        .replace(`{${"policy_id"}}`, encodeURIComponent(String(policyId)))
        .replace(`{${"tailoring_id"}}`, encodeURIComponent(String(tailoringId)));
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

export default tailoringParamCreator;
