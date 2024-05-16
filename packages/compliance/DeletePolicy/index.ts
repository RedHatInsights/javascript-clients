// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

// @ts-ignore
import type { CreatePolicy201Response } from '../types';


export type DeletePolicyParams = {
  /**
  *
  * @type { any }
  * @memberof DeletePolicyApi
  */
  id: any,
  /**
  *
  * @type { any }
  * @memberof DeletePolicyApi
  */
  xRHIDENTITY?: any,
  options?: AxiosRequestConfig
}

const isDeletePolicyObjectParams = (params: [DeletePolicyParams] | unknown[]): params is [DeletePolicyParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id') && true
}
/**
* Deletes a Policy
* @summary Delete a Policy
* @param {DeletePolicyParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const deletePolicyParamCreator = async (...config: ([DeletePolicyParams] | [any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isDeletePolicyObjectParams(config) ? config[0] : ['id', 'xRHIDENTITY', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DeletePolicyParams;
    const { id, xRHIDENTITY, options = {} } = params;
    const localVarPath = `/policies/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'DELETE' as Method, ...options};
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

export default deletePolicyParamCreator;
