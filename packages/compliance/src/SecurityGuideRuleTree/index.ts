// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Errors } from '../types';


export type SecurityGuideRuleTreeParams = {
  /**
  *
  * @type { any }
  * @memberof SecurityGuideRuleTreeApi
  */
  securityGuideId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof SecurityGuideRuleTreeApi
  */
  xRHIDENTITY?: any,
  options?: AxiosRequestConfig
}

export type SecurityGuideRuleTreeReturnType = any;

const isSecurityGuideRuleTreeObjectParams = (params: [SecurityGuideRuleTreeParams] | unknown[]): params is [SecurityGuideRuleTreeParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'securityGuideId')
  }
  return false
}
/**
* Returns rule tree of a security guide.
* @summary Request the Rule Tree of a Security Guide
* @param {SecurityGuideRuleTreeParams} config with all available params.
* @param {*} [options] Override http request option.
* @deprecated
* @throws {RequiredError}
*/
export const securityGuideRuleTreeParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([SecurityGuideRuleTreeParams] | [any, any, AxiosRequestConfig])) => {
    const params = isSecurityGuideRuleTreeObjectParams(config) ? config[0] : ['securityGuideId', 'xRHIDENTITY', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as SecurityGuideRuleTreeParams;
    const { securityGuideId, xRHIDENTITY, options = {} } = params;
    const localVarPath = `/security_guides/{security_guide_id}/rule_tree`
        .replace(`{${"security_guide_id"}}`, encodeURIComponent(String(securityGuideId)));
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

    return sendRequest<SecurityGuideRuleTreeReturnType>(Promise.resolve(args));
}

export default securityGuideRuleTreeParamCreator;
