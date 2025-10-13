// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { DisabledRules } from '../types';


export type DisabledRulesRetrieveParams = {
  /**
  *
  * @type { string }
  * @memberof DisabledRulesRetrieveApi
  */
  ruleId: string,
  options?: AxiosRequestConfig
}

export type DisabledRulesRetrieveReturnType = AxiosPromise<DisabledRules>;

const isDisabledRulesRetrieveObjectParams = (params: [DisabledRulesRetrieveParams] | unknown[]): params is [DisabledRulesRetrieveParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'ruleId')
  }
  return false
}
/**
* Get the detail on whether the given rule is disabled, and the scope, by rule_id.  A 404 only means that the rule is not disabled - it may also not exist.  The account-wide scope will be returned first, if the rule has both an account-wide and a system-specific acknowledgement.
* @param {DisabledRulesRetrieveParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const disabledRulesRetrieveParamCreator = async (...config: ([DisabledRulesRetrieveParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isDisabledRulesRetrieveObjectParams(config) ? config[0] : ['ruleId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DisabledRulesRetrieveParams;
    const { ruleId, options = {} } = params;
    const localVarPath = `/api/insights/v1/disabled-rules/{rule_id}/`
        .replace(`{${"rule_id"}}`, encodeURIComponent(String(ruleId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        auth:[
        {
        // authentication x-rh-identity required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };
}

export default disabledRulesRetrieveParamCreator;
