// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

// @ts-ignore
import type { Errors, System200Response } from '../types';


export type UnassignSystemParams = {
  /**
  *
  * @type { any }
  * @memberof UnassignSystemApi
  */
  id: any,
  /**
  *
  * @type { any }
  * @memberof UnassignSystemApi
  */
  policyId: any,
  /**
  *
  * @type { any }
  * @memberof UnassignSystemApi
  */
  xRHIDENTITY?: any,
  options?: AxiosRequestConfig
}

const isUnassignSystemObjectParams = (params: [UnassignSystemParams] | unknown[]): params is [UnassignSystemParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id') && Object.prototype.hasOwnProperty.call(params, 'policyId') && true
}
/**
* Unassigns a System from a Policy
* @summary Unassign a System from a Policy
* @param {UnassignSystemParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const unassignSystemParamCreator = async (...config: ([UnassignSystemParams] | [any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isUnassignSystemObjectParams(config) ? config[0] : ['id', 'policyId', 'xRHIDENTITY', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as UnassignSystemParams;
    const { id, policyId, xRHIDENTITY, options = {} } = params;
    const localVarPath = `/policies/{policy_id}/systems/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)))
        .replace(`{${"policy_id"}}`, encodeURIComponent(String(policyId)));
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

export default unassignSystemParamCreator;
