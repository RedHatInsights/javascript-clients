// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

// @ts-ignore
import type {  } from '../types';


export type UnassignRuleParams = {
  /**
  *
  * @type { any }
  * @memberof UnassignRuleApi
  */
  policyId: any,
  /**
  *
  * @type { any }
  * @memberof UnassignRuleApi
  */
  tailoringId: any,
  /**
  *
  * @type { any }
  * @memberof UnassignRuleApi
  */
  id: any,
  /**
  *
  * @type { any }
  * @memberof UnassignRuleApi
  */
  xRHIDENTITY?: any,
  options?: AxiosRequestConfig
}

const isUnassignRuleObjectParams = (params: [UnassignRuleParams] | unknown[]): params is [UnassignRuleParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'policyId') && Object.prototype.hasOwnProperty.call(params, 'tailoringId') && Object.prototype.hasOwnProperty.call(params, 'id') && true
}
/**
* Unassigns a Rule from a Tailoring
* @summary Unassign a Rule from a Tailoring
* @param {UnassignRuleParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const unassignRuleParamCreator = async (...config: ([UnassignRuleParams] | [any, any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isUnassignRuleObjectParams(config) ? config[0] : ['policyId', 'tailoringId', 'id', 'xRHIDENTITY', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as UnassignRuleParams;
    const { policyId, tailoringId, id, xRHIDENTITY, options = {} } = params;
    const localVarPath = `/policies/{policy_id}/tailorings/{tailoring_id}/rules/{id}`
        .replace(`{${"policy_id"}}`, encodeURIComponent(String(policyId)))
        .replace(`{${"tailoring_id"}}`, encodeURIComponent(String(tailoringId)))
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'DELETE' as Method, ...options};
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

export default unassignRuleParamCreator;
