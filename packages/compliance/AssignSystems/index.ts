// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { AssignRulesRequest, Systems200Response } from '../types';


export type AssignSystemsParams = {
  /**
  *
  * @type { any }
  * @memberof AssignSystemsApi
  */
  policyId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof AssignSystemsApi
  */
  xRHIDENTITY?: any,
  /**
  *
  * @type { AssignRulesRequest }
  * @memberof AssignSystemsApi
  */
  assignRulesRequest?: AssignRulesRequest,
  options?: AxiosRequestConfig
}

export type AssignSystemsReturnType = AxiosPromise<Systems200Response>;

const isAssignSystemsObjectParams = (params: [AssignSystemsParams] | unknown[]): params is [AssignSystemsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true  && Object.prototype.hasOwnProperty.call(params[0], 'policyId')
  }
  return false
}
/**
* This feature is exclusively used by the frontend
* @summary Bulk assign Systems to a Policy
* @param {AssignSystemsParams} config with all available params.
* @param {*} [options] Override http request option.
* @deprecated
* @throws {RequiredError}
*/
export const assignSystemsParamCreator = async (...config: ([AssignSystemsParams] | [any, any, AssignRulesRequest, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isAssignSystemsObjectParams(config) ? config[0] : ['policyId', 'xRHIDENTITY', 'assignRulesRequest', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as AssignSystemsParams;
    const { policyId, xRHIDENTITY, assignRulesRequest, options = {} } = params;
    const localVarPath = `/policies/{policy_id}/systems`
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
        serializeData: assignRulesRequest,
    };
}

export default assignSystemsParamCreator;
