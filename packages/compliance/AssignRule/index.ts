// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type {  } from '../types';


export type AssignRuleParams = {
  /**
  *
  * @type { any }
  * @memberof AssignRuleApi
  */
  policyId: any,
  /**
  *
  * @type { any }
  * @memberof AssignRuleApi
  */
  tailoringId: any,
  /**
  * UUID or a ref_id with \'.\' characters replaced with \'-\'
  * @type { any }
  * @memberof AssignRuleApi
  */
  ruleId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof AssignRuleApi
  */
  xRHIDENTITY?: any,
  options?: AxiosRequestConfig
}

export type AssignRuleReturnType = void;

const isAssignRuleObjectParams = (params: [AssignRuleParams] | unknown[]): params is [AssignRuleParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'policyId') && Object.prototype.hasOwnProperty.call(params[0], 'tailoringId') && Object.prototype.hasOwnProperty.call(params[0], 'ruleId')
  }
  return false
}
/**
* Add a rule to a specific tailoring.
* @summary Assign a Rule to a Tailoring
* @param {AssignRuleParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const assignRuleParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([AssignRuleParams] | [any, any, any, any, AxiosRequestConfig])) => {
    const params = isAssignRuleObjectParams(config) ? config[0] : ['policyId', 'tailoringId', 'ruleId', 'xRHIDENTITY', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as AssignRuleParams;
    const { policyId, tailoringId, ruleId, xRHIDENTITY, options = {} } = params;
    const localVarPath = `/policies/{policy_id}/tailorings/{tailoring_id}/rules/{rule_id}`
        .replace(`{${"policy_id"}}`, encodeURIComponent(String(policyId)))
        .replace(`{${"tailoring_id"}}`, encodeURIComponent(String(tailoringId)))
        .replace(`{${"rule_id"}}`, encodeURIComponent(String(ruleId)));
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

    return sendRequest<AssignRuleReturnType>(Promise.resolve(args));
}

export default assignRuleParamCreator;
