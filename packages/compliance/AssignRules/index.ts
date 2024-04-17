// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../utils/common';
import type { RequestArgs } from '../utils/base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, AuthTypeEnum } from '../utils/base';
import { Configuration } from '../utils/configuration';

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
  *
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

const isAssignRulesObjectParams = (params: [AssignRulesParams] | unknown[]): params is [AssignRulesParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'policyId') && Object.prototype.hasOwnProperty.call(params, 'tailoringId') && true && true
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
