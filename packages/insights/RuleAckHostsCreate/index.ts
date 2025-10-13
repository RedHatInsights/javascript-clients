// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { MultiAckResponse, MultiHostAck } from '../types';


export type RuleAckHostsCreateParams = {
  /**
  *
  * @type { string }
  * @memberof RuleAckHostsCreateApi
  */
  ruleId: string,
  /**
  *
  * @type { MultiHostAck }
  * @memberof RuleAckHostsCreateApi
  */
  multiHostAck: MultiHostAck,
  options?: AxiosRequestConfig
}

export type RuleAckHostsCreateReturnType = AxiosPromise<MultiAckResponse>;

const isRuleAckHostsCreateObjectParams = (params: [RuleAckHostsCreateParams] | unknown[]): params is [RuleAckHostsCreateParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'ruleId') && Object.prototype.hasOwnProperty.call(params[0], 'multiHostAck')
  }
  return false
}
/**
* Add acknowledgements for one or more hosts to this rule.  Host acknowledgements will be added to this rule in this account for the system UUIDs supplied.  The justification supplied will be given for all host acks created.  Any existing host acknowledgements for a host on this rule will be updated.  The count of created hosts acknowledgements, and the list of systems now impacted by this rule, will be returned.  Account-wide acks are unaffected.
* @param {RuleAckHostsCreateParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const ruleAckHostsCreateParamCreator = async (...config: ([RuleAckHostsCreateParams] | [string, MultiHostAck, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isRuleAckHostsCreateObjectParams(config) ? config[0] : ['ruleId', 'multiHostAck', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RuleAckHostsCreateParams;
    const { ruleId, multiHostAck, options = {} } = params;
    const localVarPath = `/api/insights/v1/rule/{rule_id}/ack_hosts/`
        .replace(`{${"rule_id"}}`, encodeURIComponent(String(ruleId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: multiHostAck,
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

export default ruleAckHostsCreateParamCreator;
