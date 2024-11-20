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


export type PostPoliciesParams = {
  /**
  * If passed and set to true, the passed policy is also persisted (if it is valid)
  * @type { boolean }
  * @memberof PostPoliciesApi
  */
  alsoStore?: boolean,
  /**
  *
  * @type { Policy }
  * @memberof PostPoliciesApi
  */
  policy?: Policy,
  options?: AxiosRequestConfig
}

export type PostPoliciesReturnType = AxiosPromise<void>;

const isPostPoliciesObjectParams = (params: [PostPoliciesParams] | unknown[]): params is [PostPoliciesParams] => {
  return params.length === 1 && true && true
}
/**
*
* @summary Validate (and possibly persist) a passed policy for the given account
* @param {PostPoliciesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const postPoliciesParamCreator = async (...config: ([PostPoliciesParams] | [boolean, Policy, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isPostPoliciesObjectParams(config) ? config[0] : ['alsoStore', 'policy', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as PostPoliciesParams;
    const { alsoStore, policy, options = {} } = params;
    const localVarPath = `/policies`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (alsoStore !== undefined) {
        localVarQueryParameter['alsoStore'] = alsoStore;
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

export default postPoliciesParamCreator;
