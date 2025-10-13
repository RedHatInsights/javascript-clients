// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Errors, RuleGroup200Response } from '../types';


export type RuleGroupParams = {
  /**
  *
  * @type { any }
  * @memberof RuleGroupApi
  */
  securityGuideId: any,
  /**
  *
  * @type { any }
  * @memberof RuleGroupApi
  */
  ruleGroupId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof RuleGroupApi
  */
  xRHIDENTITY?: any,
  options?: AxiosRequestConfig
}

export type RuleGroupReturnType = AxiosPromise<RuleGroup200Response>;

const isRuleGroupObjectParams = (params: [RuleGroupParams] | unknown[]): params is [RuleGroupParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true  && Object.prototype.hasOwnProperty.call(params[0], 'securityGuideId') && Object.prototype.hasOwnProperty.call(params[0], 'ruleGroupId')
  }
  return false
}
/**
* Retrieve a specific rule group.
* @summary Request a Rule Group
* @param {RuleGroupParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const ruleGroupParamCreator = async (...config: ([RuleGroupParams] | [any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isRuleGroupObjectParams(config) ? config[0] : ['securityGuideId', 'ruleGroupId', 'xRHIDENTITY', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RuleGroupParams;
    const { securityGuideId, ruleGroupId, xRHIDENTITY, options = {} } = params;
    const localVarPath = `/security_guides/{security_guide_id}/rule_groups/{rule_group_id}`
        .replace(`{${"security_guide_id"}}`, encodeURIComponent(String(securityGuideId)))
        .replace(`{${"rule_group_id"}}`, encodeURIComponent(String(ruleGroupId)));
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

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default ruleGroupParamCreator;
