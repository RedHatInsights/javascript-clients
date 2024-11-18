// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PaginatedAckList } from '../types';


export type AckListParams = {
  /**
  * Number of results to return per page.
  * @type { number }
  * @memberof AckListApi
  */
  limit?: number,
  /**
  * The initial index from which to return the results.
  * @type { number }
  * @memberof AckListApi
  */
  offset?: number,
  options?: AxiosRequestConfig
}

export type AckListReturnType = AxiosPromise<PaginatedAckList>;

const isAckListObjectParams = (params: [AckListParams] | unknown[]): params is [AckListParams] => {
  return params.length === 1 && true && true
}
/**
* List acks from this account by org_id where the rule is active  Will return an empty list if this account has no acks.
* @param {AckListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const ackListParamCreator = async (...config: ([AckListParams] | [number, number, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isAckListObjectParams(config) ? config[0] : ['limit', 'offset', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as AckListParams;
    const { limit, offset, options = {} } = params;
    const localVarPath = `/api/insights/v1/ack/`;
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

export default ackListParamCreator;
