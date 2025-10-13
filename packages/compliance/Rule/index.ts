// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Errors, Rule200Response } from '../types';


export type RuleParams = {
  /**
  *
  * @type { any }
  * @memberof RuleApi
  */
  securityGuideId: any,
  /**
  * UUID or a ref_id with \'.\' characters replaced with \'-\'
  * @type { any }
  * @memberof RuleApi
  */
  ruleId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof RuleApi
  */
  xRHIDENTITY?: any,
  options?: AxiosRequestConfig
}

export type RuleReturnType = Rule200Response;

const isRuleObjectParams = (params: [RuleParams] | unknown[]): params is [RuleParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'securityGuideId') && Object.prototype.hasOwnProperty.call(params[0], 'ruleId')
  }
  return false
}
/**
* Retrieve a specific rule from a specific security guide.
* @summary Request a Rule
* @param {RuleParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const ruleParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([RuleParams] | [any, any, any, AxiosRequestConfig])) => {
    const params = isRuleObjectParams(config) ? config[0] : ['securityGuideId', 'ruleId', 'xRHIDENTITY', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RuleParams;
    const { securityGuideId, ruleId, xRHIDENTITY, options = {} } = params;
    const localVarPath = `/security_guides/{security_guide_id}/rules/{rule_id}`
        .replace(`{${"security_guide_id"}}`, encodeURIComponent(String(securityGuideId)))
        .replace(`{${"rule_id"}}`, encodeURIComponent(String(ruleId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
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

    return sendRequest<RuleReturnType>(Promise.resolve(args));
}

export default ruleParamCreator;
