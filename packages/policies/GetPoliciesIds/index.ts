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


export type GetPoliciesIdsParams = {
  /**
  * Filtering policies by the name depending on the Filter operator used.
  * @type { string }
  * @memberof GetPoliciesIdsApi
  */
  filterName?: string,
  /**
  * Operations used with the filter
  * @type { GetPoliciesIdsFilteropNameEnum }
  * @memberof GetPoliciesIdsApi
  */
  filteropName?: GetPoliciesIdsFilteropNameEnum,
  /**
  * Filtering policies by the description depending on the Filter operator used.
  * @type { string }
  * @memberof GetPoliciesIdsApi
  */
  filterDescription?: string,
  /**
  * Operations used with the filter
  * @type { GetPoliciesIdsFilteropDescriptionEnum }
  * @memberof GetPoliciesIdsApi
  */
  filteropDescription?: GetPoliciesIdsFilteropDescriptionEnum,
  /**
  * Filtering policies by the is_enabled field.Defaults to true if no operand is given.
  * @type { GetPoliciesIdsFilterIsEnabledEnum }
  * @memberof GetPoliciesIdsApi
  */
  filterIsEnabled?: GetPoliciesIdsFilterIsEnabledEnum,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const GetPoliciesIdsFilteropNameEnum = {
    Equal: 'equal',
    Like: 'like',
    Ilike: 'ilike',
    NotEqual: 'not_equal'
} as const;
export type GetPoliciesIdsFilteropNameEnum = typeof GetPoliciesIdsFilteropNameEnum[keyof typeof GetPoliciesIdsFilteropNameEnum];
/**
  * @export
  * @enum {string}
  */
export const GetPoliciesIdsFilteropDescriptionEnum = {
    Equal: 'equal',
    Like: 'like',
    Ilike: 'ilike',
    NotEqual: 'not_equal'
} as const;
export type GetPoliciesIdsFilteropDescriptionEnum = typeof GetPoliciesIdsFilteropDescriptionEnum[keyof typeof GetPoliciesIdsFilteropDescriptionEnum];
/**
  * @export
  * @enum {string}
  */
export const GetPoliciesIdsFilterIsEnabledEnum = {
    True: 'true',
    False: 'false'
} as const;
export type GetPoliciesIdsFilterIsEnabledEnum = typeof GetPoliciesIdsFilterIsEnabledEnum[keyof typeof GetPoliciesIdsFilterIsEnabledEnum];

export type GetPoliciesIdsReturnType = Array<string>;

const isGetPoliciesIdsObjectParams = (params: [GetPoliciesIdsParams] | unknown[]): params is [GetPoliciesIdsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
*
* @summary Return all policy ids for a given account after applying the filters
* @param {GetPoliciesIdsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getPoliciesIdsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([GetPoliciesIdsParams] | [string, GetPoliciesIdsFilteropNameEnum, string, GetPoliciesIdsFilteropDescriptionEnum, GetPoliciesIdsFilterIsEnabledEnum, AxiosRequestConfig])) => {
    const params = isGetPoliciesIdsObjectParams(config) ? config[0] : ['filterName', 'filteropName', 'filterDescription', 'filteropDescription', 'filterIsEnabled', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetPoliciesIdsParams;
    const { filterName, filteropName, filterDescription, filteropDescription, filterIsEnabled, options = {} } = params;
    const localVarPath = `/policies/ids`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (filterName !== undefined) {
        localVarQueryParameter['filter[name]'] = filterName;
    }

    if (filteropName !== undefined) {
        localVarQueryParameter['filter:op[name]'] = filteropName;
    }

    if (filterDescription !== undefined) {
        localVarQueryParameter['filter[description]'] = filterDescription;
    }

    if (filteropDescription !== undefined) {
        localVarQueryParameter['filter:op[description]'] = filteropDescription;
    }

    if (filterIsEnabled !== undefined) {
        localVarQueryParameter['filter[is_enabled]'] = filterIsEnabled;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<GetPoliciesIdsReturnType>(Promise.resolve(args));
}

export default getPoliciesIdsParamCreator;
