// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Errors, System200Response } from '../types';


export type AssignSystemParams = {
  /**
  *
  * @type { any }
  * @memberof AssignSystemApi
  */
  systemId: any,
  /**
  *
  * @type { any }
  * @memberof AssignSystemApi
  */
  policyId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof AssignSystemApi
  */
  xRHIDENTITY?: any,
  options?: AxiosRequestConfig
}

export type AssignSystemReturnType = System200Response;

const isAssignSystemObjectParams = (params: [AssignSystemParams] | unknown[]): params is [AssignSystemParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'systemId') && Object.prototype.hasOwnProperty.call(params[0], 'policyId')
  }
  return false
}
/**
* Assign a specific system to a specific policy.
* @summary Assign a System to a Policy
* @param {AssignSystemParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const assignSystemParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([AssignSystemParams] | [any, any, any, AxiosRequestConfig])) => {
    const params = isAssignSystemObjectParams(config) ? config[0] : ['systemId', 'policyId', 'xRHIDENTITY', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as AssignSystemParams;
    const { systemId, policyId, xRHIDENTITY, options = {} } = params;
    const localVarPath = `/policies/{policy_id}/systems/{system_id}`
        .replace(`{${"system_id"}}`, encodeURIComponent(String(systemId)))
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



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<AssignSystemReturnType>(Promise.resolve(args));
}

export default assignSystemParamCreator;
