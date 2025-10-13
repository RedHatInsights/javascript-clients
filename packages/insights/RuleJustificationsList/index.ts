// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PaginatedJustificationCountList } from '../types';


export type RuleJustificationsListParams = {
  /**
  *
  * @type { string }
  * @memberof RuleJustificationsListApi
  */
  ruleId: string,
  /**
  * Number of results to return per page.
  * @type { number }
  * @memberof RuleJustificationsListApi
  */
  limit?: number,
  /**
  * The initial index from which to return the results.
  * @type { number }
  * @memberof RuleJustificationsListApi
  */
  offset?: number,
  options?: AxiosRequestConfig
}

export type RuleJustificationsListReturnType = PaginatedJustificationCountList;

const isRuleJustificationsListObjectParams = (params: [RuleJustificationsListParams] | unknown[]): params is [RuleJustificationsListParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'ruleId')
  }
  return false
}
/**
* List all justifications given for disabling this rule.  This is an **internal-only** view that allows us to provide feedback on why rules are disabled by our customers.  It lists the justifications given in both account-wide acks and host-specific acks of a rule.
* @param {RuleJustificationsListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const ruleJustificationsListParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([RuleJustificationsListParams] | [string, number, number, AxiosRequestConfig])) => {
    const params = isRuleJustificationsListObjectParams(config) ? config[0] : ['ruleId', 'limit', 'offset', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RuleJustificationsListParams;
    const { ruleId, limit, offset, options = {} } = params;
    const localVarPath = `/api/insights/v1/rule/{rule_id}/justifications/`
        .replace(`{${"rule_id"}}`, encodeURIComponent(String(ruleId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
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

    return sendRequest<RuleJustificationsListReturnType>(Promise.resolve(args));
}

export default ruleJustificationsListParamCreator;
