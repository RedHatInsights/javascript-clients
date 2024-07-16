// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PolicyExtended, PolicyIn } from '../types';


export type CreatePoliciesParams = {
  /**
  * Policy to create
  * @type { PolicyIn }
  * @memberof CreatePoliciesApi
  */
  policyIn: PolicyIn,
  options?: AxiosRequestConfig
}

const isCreatePoliciesObjectParams = (params: [CreatePoliciesParams] | unknown[]): params is [CreatePoliciesParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'policyIn')
}
/**
*
* @summary Create a policy in a tenant
* @param {CreatePoliciesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const createPoliciesParamCreator = async (...config: ([CreatePoliciesParams] | [PolicyIn, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isCreatePoliciesObjectParams(config) ? config[0] : ['policyIn', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as CreatePoliciesParams;
    const { policyIn, options = {} } = params;
    const localVarPath = `/policies/`;
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
        serializeData: policyIn,
        auth:[
        {
        // authentication basic_auth required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };
}

export default createPoliciesParamCreator;
