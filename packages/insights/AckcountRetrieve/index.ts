// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { AckCount } from '../types';


export type AckcountRetrieveParams = {
  /**
  *
  * @type { string }
  * @memberof AckcountRetrieveApi
  */
  ruleId: string,
  options?: AxiosRequestConfig
}

export type AckcountRetrieveReturnType = AckCount;

const isAckcountRetrieveObjectParams = (params: [AckcountRetrieveParams] | unknown[]): params is [AckcountRetrieveParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'ruleId')
  }
  return false
}
/**
* Get the ack count for the given rule_id  Returns the rule_id and its ack count
* @param {AckcountRetrieveParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const ackcountRetrieveParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([AckcountRetrieveParams] | [string, AxiosRequestConfig])) => {
    const params = isAckcountRetrieveObjectParams(config) ? config[0] : ['ruleId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as AckcountRetrieveParams;
    const { ruleId, options = {} } = params;
    const localVarPath = `/api/insights/v1/ackcount/{rule_id}/`
        .replace(`{${"rule_id"}}`, encodeURIComponent(String(ruleId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



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

    return sendRequest<AckcountRetrieveReturnType>(Promise.resolve(args));
}

export default ackcountRetrieveParamCreator;
