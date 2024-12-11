// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { TailoringFile } from '../types';


export type TailoringFileParams = {
  /**
  *
  * @type { any }
  * @memberof TailoringFileApi
  */
  policyId: any,
  /**
  * UUID or OS minor version number
  * @type { any }
  * @memberof TailoringFileApi
  */
  tailoringId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof TailoringFileApi
  */
  xRHIDENTITY?: any,
  options?: AxiosRequestConfig
}

export type TailoringFileReturnType = AxiosPromise<TailoringFile>;

const isTailoringFileObjectParams = (params: [TailoringFileParams] | unknown[]): params is [TailoringFileParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'policyId') && Object.prototype.hasOwnProperty.call(params, 'tailoringId') && true
}
/**
* Retrieve a tailoring file of a specific tailoring.
* @summary Request a Tailoring file
* @param {TailoringFileParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const tailoringFileParamCreator = async (...config: ([TailoringFileParams] | [any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isTailoringFileObjectParams(config) ? config[0] : ['policyId', 'tailoringId', 'xRHIDENTITY', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as TailoringFileParams;
    const { policyId, tailoringId, xRHIDENTITY, options = {} } = params;
    const localVarPath = `/policies/{policy_id}/tailorings/{tailoring_id}/tailoring_file.json`
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

export default tailoringFileParamCreator;
