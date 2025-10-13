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

export type CreateTailoringReturnType = CreateTailoring201Response;

const isCreateTailoringObjectParams = (params: [CreateTailoringParams] | unknown[]): params is [CreateTailoringParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'policyId')
  }
  return false
}
/**
* Create a Tailoring with the provided attributes (for ImageBuilder only)
* @summary Create a Tailoring
* @param {CreateTailoringParams} config with all available params.
* @param {*} [options] Override http request option.
* @deprecated
* @throws {RequiredError}
*/
export const createTailoringParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([CreateTailoringParams] | [any, any, TailoringCreate, AxiosRequestConfig])) => {
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

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: tailoringCreate,
    };

    return sendRequest<CreateTailoringReturnType>(Promise.resolve(args));
}

export default createTailoringParamCreator;
