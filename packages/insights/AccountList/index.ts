// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PaginatedOrgIdList } from '../types';


export type AccountListParams = {
  /**
  * Number of results to return per page.
  * @type { number }
  * @memberof AccountListApi
  */
  limit?: number,
  /**
  * The initial index from which to return the results.
  * @type { number }
  * @memberof AccountListApi
  */
  offset?: number,
  options?: AxiosRequestConfig
}

export type AccountListReturnType = AxiosPromise<PaginatedOrgIdList>;

const isAccountListObjectParams = (params: [AccountListParams] | unknown[]): params is [AccountListParams] => {
  return params.length === 1 && true && true
}
/**
* List all accounts by org_id we know about (through the host table).  No other information about the accounts is provided in this view.
* @param {AccountListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const accountListParamCreator = async (...config: ([AccountListParams] | [number, number, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isAccountListObjectParams(config) ? config[0] : ['limit', 'offset', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as AccountListParams;
    const { limit, offset, options = {} } = params;
    const localVarPath = `/api/insights/v1/account/`;
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

export default accountListParamCreator;
