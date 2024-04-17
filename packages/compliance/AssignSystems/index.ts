// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../utils/common';
import type { RequestArgs } from '../utils/base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, AuthTypeEnum } from '../utils/base';
import { Configuration } from '../utils/configuration';

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
  *
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

const isAssignSystemsObjectParams = (params: [AssignSystemsParams] | unknown[]): params is [AssignSystemsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'policyId') && true && true
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
