// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PaginatedSubscriptionExcludedAccountList } from '../types';


export type AutosubexclusionListParams = {
  /**
  * Number of results to return per page.
  * @type { number }
  * @memberof AutosubexclusionListApi
  */
  limit?: number,
  /**
  * The initial index from which to return the results.
  * @type { number }
  * @memberof AutosubexclusionListApi
  */
  offset?: number,
  options?: AxiosRequestConfig
}

export type AutosubexclusionListReturnType = AxiosPromise<PaginatedSubscriptionExcludedAccountList>;

const isAutosubexclusionListObjectParams = (params: [AutosubexclusionListParams] | unknown[]): params is [AutosubexclusionListParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Returns all subscription exclusions for accounts  This returns a list of all subscription exclusions. This contains exclusions and their account and org_id. These are all accounts that are excluded from the autosub subscription path for weekly report subscriptions.
* @param {AutosubexclusionListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const autosubexclusionListParamCreator = async (...config: ([AutosubexclusionListParams] | [number, number, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isAutosubexclusionListObjectParams(config) ? config[0] : ['limit', 'offset', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as AutosubexclusionListParams;
    const { limit, offset, options = {} } = params;
    const localVarPath = `/api/insights/v1/autosubexclusion/`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }



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

export default autosubexclusionListParamCreator;
