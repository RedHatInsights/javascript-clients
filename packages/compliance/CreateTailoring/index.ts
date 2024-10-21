// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { CreateTailoring201Response, TailoringCreate } from '../types';


export type CreateTailoringParams = {
  /**
  *
  * @type { any }
  * @memberof CreateTailoringApi
  */
  policyId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof CreateTailoringApi
  */
  xRHIDENTITY?: any,
  /**
  *
  * @type { TailoringCreate }
  * @memberof CreateTailoringApi
  */
  tailoringCreate?: TailoringCreate,
  options?: AxiosRequestConfig
}

const isCreateTailoringObjectParams = (params: [CreateTailoringParams] | unknown[]): params is [CreateTailoringParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'policyId') && true && true
}
/**
* Create a Tailoring with the provided attributes (for ImageBuilder only)
* @summary Create a Tailoring
* @param {CreateTailoringParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const createTailoringParamCreator = async (...config: ([CreateTailoringParams] | [any, any, TailoringCreate, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isCreateTailoringObjectParams(config) ? config[0] : ['policyId', 'xRHIDENTITY', 'tailoringCreate', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as CreateTailoringParams;
    const { policyId, xRHIDENTITY, tailoringCreate, options = {} } = params;
    const localVarPath = `/policies/{policy_id}/tailorings`
        .replace(`{${"policy_id"}}`, encodeURIComponent(String(policyId)));
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
        serializeData: tailoringCreate,
    };
}

export default createTailoringParamCreator;
