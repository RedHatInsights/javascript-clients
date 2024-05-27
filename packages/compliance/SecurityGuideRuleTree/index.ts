// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

// @ts-ignore
import type { Errors } from '../types';


export type SecurityGuideRuleTreeParams = {
  /**
  * 
  * @type { any }
  * @memberof SecurityGuideRuleTreeApi
  */
  id: any, 
  /**
  * For internal use only
  * @type { any }
  * @memberof SecurityGuideRuleTreeApi
  */
  xRHIDENTITY?: any, 
  options?: AxiosRequestConfig
}

const isSecurityGuideRuleTreeObjectParams = (params: [SecurityGuideRuleTreeParams] | unknown[]): params is [SecurityGuideRuleTreeParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id') && true
}
/**
* Returns the Rule Tree of a Security Guide
* @summary Request the Rule Tree of a Security Guide
* @param {SecurityGuideRuleTreeParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const securityGuideRuleTreeParamCreator = async (...config: ([SecurityGuideRuleTreeParams] | [any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isSecurityGuideRuleTreeObjectParams(config) ? config[0] : ['id', 'xRHIDENTITY', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as SecurityGuideRuleTreeParams;
    const { id, xRHIDENTITY, options = {} } = params;
    const localVarPath = `/security_guides/{id}/rule_tree`
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

export default securityGuideRuleTreeParamCreator;
