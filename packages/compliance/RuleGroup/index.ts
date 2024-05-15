// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

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
  id: any,
  /**
  *
  * @type { any }
  * @memberof RuleGroupApi
  */
  xRHIDENTITY?: any,
  options?: AxiosRequestConfig
}

const isRuleGroupObjectParams = (params: [RuleGroupParams] | unknown[]): params is [RuleGroupParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'securityGuideId') && Object.prototype.hasOwnProperty.call(params, 'id') && true
}
/**
* Returns a Rule Group
* @summary Request a Rule Group
* @param {RuleGroupParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const ruleGroupParamCreator = async (...config: ([RuleGroupParams] | [any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isRuleGroupObjectParams(config) ? config[0] : ['securityGuideId', 'id', 'xRHIDENTITY', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RuleGroupParams;
    const { securityGuideId, id, xRHIDENTITY, options = {} } = params;
    const localVarPath = `/security_guides/{security_guide_id}/rule_groups/{id}`
        .replace(`{${"security_guide_id"}}`, encodeURIComponent(String(securityGuideId)))
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
