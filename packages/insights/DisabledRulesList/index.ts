// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PaginatedDisabledRulesList } from '../types';


export type DisabledRulesListParams = {
  /**
  * Number of results to return per page.
  * @type { number }
  * @memberof DisabledRulesListApi
  */
  limit?: number,
  /**
  * The initial index from which to return the results.
  * @type { number }
  * @memberof DisabledRulesListApi
  */
  offset?: number,
  options?: AxiosRequestConfig
}

export type DisabledRulesListReturnType = AxiosPromise<PaginatedDisabledRulesList>;

const isDisabledRulesListObjectParams = (params: [DisabledRulesListParams] | unknown[]): params is [DisabledRulesListParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Shows a list of rules that are disabled, either organisation-wide (Ack) or system-specific (HostAck).  The status flag indicates which of these causes this rule to be disabled.  To find which systems have disabled a rule, use the \'rule_id\' query parameter in the hostack/ endpoint.
* @param {DisabledRulesListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const disabledRulesListParamCreator = async (...config: ([DisabledRulesListParams] | [number, number, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isDisabledRulesListObjectParams(config) ? config[0] : ['limit', 'offset', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DisabledRulesListParams;
    const { limit, offset, options = {} } = params;
    const localVarPath = `/api/insights/v1/disabled-rules/`;
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

export default disabledRulesListParamCreator;
