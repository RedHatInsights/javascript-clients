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


export type PostPoliciesValidateParams = {
  /**
  *
  * @type { Policy }
  * @memberof PostPoliciesValidateApi
  */
  policy?: Policy,
  options?: AxiosRequestConfig
}

export type PostPoliciesValidateReturnType = AxiosPromise<Msg>;

const isPostPoliciesValidateObjectParams = (params: [PostPoliciesValidateParams] | unknown[]): params is [PostPoliciesValidateParams] => {
  return params.length === 1 && true
}
/**
*
* @summary Validates a Policy condition
* @param {PostPoliciesValidateParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const postPoliciesValidateParamCreator = async (...config: ([PostPoliciesValidateParams] | [Policy, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isPostPoliciesValidateObjectParams(config) ? config[0] : ['policy', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as PostPoliciesValidateParams;
    const { policy, options = {} } = params;
    const localVarPath = `/policies/validate`;
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
        serializeData: policy,
    };
}

export default postPoliciesValidateParamCreator;
