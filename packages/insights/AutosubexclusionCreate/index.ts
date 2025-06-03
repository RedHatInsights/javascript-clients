// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { SubscriptionExcludedAccount } from '../types';


export type AutosubexclusionCreateParams = {
  /**
  *
  * @type { SubscriptionExcludedAccount }
  * @memberof AutosubexclusionCreateApi
  */
  subscriptionExcludedAccount: SubscriptionExcludedAccount,
  options?: AxiosRequestConfig
}

export type AutosubexclusionCreateReturnType = AxiosPromise<SubscriptionExcludedAccount>;

const isAutosubexclusionCreateObjectParams = (params: [AutosubexclusionCreateParams] | unknown[]): params is [AutosubexclusionCreateParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'subscriptionExcludedAccount')
}
/**
* Create a new subscription exclusion for an account.  This creates a new subscription exclusion for an account. This should contain an org_id and account. Only org_id is required. Account is optional.
* @param {AutosubexclusionCreateParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const autosubexclusionCreateParamCreator = async (...config: ([AutosubexclusionCreateParams] | [SubscriptionExcludedAccount, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isAutosubexclusionCreateObjectParams(config) ? config[0] : ['subscriptionExcludedAccount', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as AutosubexclusionCreateParams;
    const { subscriptionExcludedAccount, options = {} } = params;
    const localVarPath = `/api/insights/v1/autosubexclusion/`;
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
        serializeData: subscriptionExcludedAccount,
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

export default autosubexclusionCreateParamCreator;
