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
  *
  * @type { Policy }
  * @memberof PostPoliciesApi
  */
  policy: Policy,
  /**
  * If passed and set to true, the passed policy is also persisted (if it is valid)
  * @type { boolean }
  * @memberof PostPoliciesApi
  */
  alsoStore?: boolean,
  options?: AxiosRequestConfig
}

export type PostPoliciesReturnType = AxiosPromise<void>;

const isPostPoliciesObjectParams = (params: [PostPoliciesParams] | unknown[]): params is [PostPoliciesParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true  && Object.prototype.hasOwnProperty.call(params[0], 'policy')
  }
  return false
}
/**
*
* @summary Validate (and possibly persist) a passed policy for the given account
* @param {PostPoliciesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const postPoliciesParamCreator = async (...config: ([PostPoliciesParams] | [Policy, boolean, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isPostPoliciesObjectParams(config) ? config[0] : ['policy', 'alsoStore', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as PostPoliciesParams;
    const { policy, alsoStore, options = {} } = params;
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
