// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { RuleForAccount } from '../types';


export type RuleRetrieveParams = {
  /**
  *
  * @type { string }
  * @memberof RuleRetrieveApi
  */
  ruleId: string,
  /**
  * List of Inventory host group names
  * @type { Array<string> }
  * @memberof RuleRetrieveApi
  */
  groups?: Array<string>,
  /**
  * Tags have a namespace, key and value in the form namespace/key=value
  * @type { Array<string> }
  * @memberof RuleRetrieveApi
  */
  tags?: Array<string>,
  options?: AxiosRequestConfig
}

export type RuleRetrieveReturnType = RuleForAccount;

const isRuleRetrieveObjectParams = (params: [RuleRetrieveParams] | unknown[]): params is [RuleRetrieveParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'ruleId')
  }
  return false
}
/**
* Retrieve a single rule and its associated details.  This includes the account-relevant details such as number of impacted systems and host acknowledgements.
* @param {RuleRetrieveParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const ruleRetrieveParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([RuleRetrieveParams] | [string, Array<string>, Array<string>, AxiosRequestConfig])) => {
    const params = isRuleRetrieveObjectParams(config) ? config[0] : ['ruleId', 'groups', 'tags', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RuleRetrieveParams;
    const { ruleId, groups, tags, options = {} } = params;
    const localVarPath = `/api/insights/v1/rule/{rule_id}/`
        .replace(`{${"rule_id"}}`, encodeURIComponent(String(ruleId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (groups) {
        localVarQueryParameter['groups'] = groups;
    }

    if (tags) {
        localVarQueryParameter['tags'] = tags;
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

    return sendRequest<RuleRetrieveReturnType>(Promise.resolve(args));
}

export default ruleRetrieveParamCreator;
