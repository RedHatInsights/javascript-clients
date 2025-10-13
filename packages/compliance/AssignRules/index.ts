// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { AssignRulesRequest, Rules200Response } from '../types';


export type AssignRulesParams = {
  /**
  *
  * @type { any }
  * @memberof AssignRulesApi
  */
  policyId: any,
  /**
  *
  * @type { any }
  * @memberof AssignRulesApi
  */
  tailoringId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof AssignRulesApi
  */
  xRHIDENTITY?: any,
  /**
  *
  * @type { AssignRulesRequest }
  * @memberof AssignRulesApi
  */
  assignRulesRequest?: AssignRulesRequest,
  options?: AxiosRequestConfig
}

export type AssignRulesReturnType = AxiosPromise<Rules200Response>;

const isAssignRulesObjectParams = (params: [AssignRulesParams] | unknown[]): params is [AssignRulesParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true  && Object.prototype.hasOwnProperty.call(params[0], 'policyId') && Object.prototype.hasOwnProperty.call(params[0], 'tailoringId')
  }
  return false
}
/**
* This feature is exclusively used by the frontend
* @summary Bulk assign Rules to a Tailoring
* @param {AssignRulesParams} config with all available params.
* @param {*} [options] Override http request option.
* @deprecated
* @throws {RequiredError}
*/
export const assignRulesParamCreator = async (...config: ([AssignRulesParams] | [any, any, any, AssignRulesRequest, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isAssignRulesObjectParams(config) ? config[0] : ['policyId', 'tailoringId', 'xRHIDENTITY', 'assignRulesRequest', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as AssignRulesParams;
    const { policyId, tailoringId, xRHIDENTITY, assignRulesRequest, options = {} } = params;
    const localVarPath = `/policies/{policy_id}/tailorings/{tailoring_id}/rules`
        .replace(`{${"policy_id"}}`, encodeURIComponent(String(policyId)))
        .replace(`{${"tailoring_id"}}`, encodeURIComponent(String(tailoringId)));
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

export default assignRulesParamCreator;
