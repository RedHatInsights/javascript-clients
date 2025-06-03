// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type {  } from '../types';


export type AckDestroyParams = {
  /**
  *
  * @type { string }
  * @memberof AckDestroyApi
  */
  ruleId: string,
  options?: AxiosRequestConfig
}

export type AckDestroyReturnType = AxiosPromise<string>;

const isAckDestroyObjectParams = (params: [AckDestroyParams] | unknown[]): params is [AckDestroyParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'ruleId')
}
/**
* Delete an acknowledgement for a rule, by its rule ID.  If the ack existed, it is deleted and a 204 is returned.  Otherwise, a 404 is returned.
* @param {AckDestroyParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const ackDestroyParamCreator = async (...config: ([AckDestroyParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isAckDestroyObjectParams(config) ? config[0] : ['ruleId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as AckDestroyParams;
    const { ruleId, options = {} } = params;
    const localVarPath = `/api/insights/v1/ack/{rule_id}/`
        .replace(`{${"rule_id"}}`, encodeURIComponent(String(ruleId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'DELETE' as Method, ...options};
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

export default ackDestroyParamCreator;
