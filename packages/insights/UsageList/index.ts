// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Usage } from '../types';


export type UsageListParams = {
  /**
  * Allow `hydrauser` to view any account
  * @type { Array<string> }
  * @memberof UsageListApi
  */
  account?: Array<string>,
  /**
  * End date for statistics range
  * @type { string }
  * @memberof UsageListApi
  */
  end?: string,
  /**
  * Allow `hydrauser` to view any org_id
  * @type { string }
  * @memberof UsageListApi
  */
  orgId?: string,
  /**
  * Start date for statistics range
  * @type { string }
  * @memberof UsageListApi
  */
  start?: string,
  options?: AxiosRequestConfig
}

export type UsageListReturnType = AxiosPromise<Usage>;

const isUsageListObjectParams = (params: [UsageListParams] | unknown[]): params is [UsageListParams] => {
  return params.length === 1 && true && true && true && true
}
/**
* List the unique rule hits for this account over the given time range  This uses a HashLogLog structure to record number of hits, and this is therefore an approximation.
* @param {UsageListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const usageListParamCreator = async (...config: ([UsageListParams] | [Array<string>, string, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isUsageListObjectParams(config) ? config[0] : ['account', 'end', 'orgId', 'start', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as UsageListParams;
    const { account, end, orgId, start, options = {} } = params;
    const localVarPath = `/api/insights/v1/usage/`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (account) {
        localVarQueryParameter['account'] = account;
    }

    if (end !== undefined) {
        localVarQueryParameter['end'] = (end as any instanceof Date) ?
            (end as any).toISOString().substr(0,10) :
            end;
    }

    if (orgId !== undefined) {
        localVarQueryParameter['org_id'] = orgId;
    }

    if (start !== undefined) {
        localVarQueryParameter['start'] = (start as any instanceof Date) ?
            (start as any).toISOString().substr(0,10) :
            start;
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

export default usageListParamCreator;
