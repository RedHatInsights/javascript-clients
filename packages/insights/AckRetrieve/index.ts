// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Ack } from '../types';


export type AckRetrieveParams = {
  /**
  *
  * @type { string }
  * @memberof AckRetrieveApi
  */
  ruleId: string,
  options?: AxiosRequestConfig
}

export type AckRetrieveReturnType = AxiosPromise<Ack>;

const isAckRetrieveObjectParams = (params: [AckRetrieveParams] | unknown[]): params is [AckRetrieveParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'ruleId')
}
/**
* Acks acknowledge (and therefore hide) a rule from view in an account.  This view handles listing, retrieving, creating and deleting acks.  Acks are created and deleted by Insights rule ID, not by their own ack ID.  param: rule_id: Rule ID defined by Insights ruleset
* @param {AckRetrieveParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const ackRetrieveParamCreator = async (...config: ([AckRetrieveParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isAckRetrieveObjectParams(config) ? config[0] : ['ruleId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as AckRetrieveParams;
    const { ruleId, options = {} } = params;
    const localVarPath = `/api/insights/v1/ack/{rule_id}/`
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

export default ackRetrieveParamCreator;
