// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Msg, Policy } from '../types';


export type PutPoliciesByPolicyIdParams = {
  /**
  *
  * @type { string }
  * @memberof PutPoliciesByPolicyIdApi
  */
  policyId: string,
  /**
  *
  * @type { boolean }
  * @memberof PutPoliciesByPolicyIdApi
  */
  dry?: boolean,
  /**
  *
  * @type { Policy }
  * @memberof PutPoliciesByPolicyIdApi
  */
  policy?: Policy,
  options?: AxiosRequestConfig
}

export type PutPoliciesByPolicyIdReturnType = AxiosPromise<Policy>;

const isPutPoliciesByPolicyIdObjectParams = (params: [PutPoliciesByPolicyIdParams] | unknown[]): params is [PutPoliciesByPolicyIdParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'policyId') && true && true
}
/**
*
* @summary Update a single policy for a customer by its id
* @param {PutPoliciesByPolicyIdParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const putPoliciesByPolicyIdParamCreator = async (...config: ([PutPoliciesByPolicyIdParams] | [string, boolean, Policy, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isPutPoliciesByPolicyIdObjectParams(config) ? config[0] : ['policyId', 'dry', 'policy', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as PutPoliciesByPolicyIdParams;
    const { policyId, dry, policy, options = {} } = params;
    const localVarPath = `/policies/{policyId}`
        .replace(`{${"policyId"}}`, encodeURIComponent(String(policyId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PUT' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (dry !== undefined) {
        localVarQueryParameter['dry'] = dry;
    }



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: policy,
    };
}

export default putPoliciesByPolicyIdParamCreator;
