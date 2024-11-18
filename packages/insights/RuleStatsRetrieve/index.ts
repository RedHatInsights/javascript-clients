// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { RuleUsageStats } from '../types';


export type RuleStatsRetrieveParams = {
  /**
  *
  * @type { string }
  * @memberof RuleStatsRetrieveApi
  */
  ruleId: string,
  options?: AxiosRequestConfig
}

const isRuleStatsRetrieveObjectParams = (params: [RuleStatsRetrieveParams] | unknown[]): params is [RuleStatsRetrieveParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'ruleId')
}
/**
* Display usage and impact statistics for this rule.  For internal use only.  This allows rule developers to see the number of systems and accounts impacted by a rule.
* @param {RuleStatsRetrieveParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const ruleStatsRetrieveParamCreator = async (...config: ([RuleStatsRetrieveParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isRuleStatsRetrieveObjectParams(config) ? config[0] : ['ruleId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RuleStatsRetrieveParams;
    const { ruleId, options = {} } = params;
    const localVarPath = `/api/insights/v1/rule/{rule_id}/stats/`
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

export default ruleStatsRetrieveParamCreator;
