// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { MultiAckResponse, MultiHostUnAck } from '../types';


export type RuleUnackHostsCreateParams = {
  /**
  *
  * @type { string }
  * @memberof RuleUnackHostsCreateApi
  */
  ruleId: string,
  /**
  *
  * @type { MultiHostUnAck }
  * @memberof RuleUnackHostsCreateApi
  */
  multiHostUnAck: MultiHostUnAck,
  options?: AxiosRequestConfig
}

export type RuleUnackHostsCreateReturnType = MultiAckResponse;

const isRuleUnackHostsCreateObjectParams = (params: [RuleUnackHostsCreateParams] | unknown[]): params is [RuleUnackHostsCreateParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'ruleId') && Object.prototype.hasOwnProperty.call(params[0], 'multiHostUnAck')
  }
  return false
}
/**
* Delete acknowledgements for one or more hosts to this rule.  Any host acknowledgements for this rule in this account for the given system are deleted.  Hosts that do not have an acknowledgement for this rule in this account are ignored.  The count of deleted host acknowledgements, and the list of hosts now impacted by this rule, will be returned.  Account-wide acks are unaffected.
* @param {RuleUnackHostsCreateParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const ruleUnackHostsCreateParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([RuleUnackHostsCreateParams] | [string, MultiHostUnAck, AxiosRequestConfig])) => {
    const params = isRuleUnackHostsCreateObjectParams(config) ? config[0] : ['ruleId', 'multiHostUnAck', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RuleUnackHostsCreateParams;
    const { ruleId, multiHostUnAck, options = {} } = params;
    const localVarPath = `/api/insights/v1/rule/{rule_id}/unack_hosts/`
        .replace(`{${"rule_id"}}`, encodeURIComponent(String(ruleId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: multiHostUnAck,
        auth:[
        {
        // authentication x-rh-identity required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };

    return sendRequest<RuleUnackHostsCreateReturnType>(Promise.resolve(args));
}

export default ruleUnackHostsCreateParamCreator;
