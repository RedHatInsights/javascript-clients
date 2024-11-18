// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PaginatedRuleRatingStatsList } from '../types';


export type RatingStatsListParams = {
  /**
  * Number of results to return per page.
  * @type { number }
  * @memberof RatingStatsListApi
  */
  limit?: number,
  /**
  * The initial index from which to return the results.
  * @type { number }
  * @memberof RatingStatsListApi
  */
  offset?: number,
  options?: AxiosRequestConfig
}

export type RatingStatsListReturnType = AxiosPromise<PaginatedRuleRatingStatsList>;

const isRatingStatsListObjectParams = (params: [RatingStatsListParams] | unknown[]): params is [RatingStatsListParams] => {
  return params.length === 1 && true && true
}
/**
* Summarise the ratings for a rule.  This summarises the statistics for each rule.  Available only to internal users.
* @param {RatingStatsListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const ratingStatsListParamCreator = async (...config: ([RatingStatsListParams] | [number, number, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isRatingStatsListObjectParams(config) ? config[0] : ['limit', 'offset', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RatingStatsListParams;
    const { limit, offset, options = {} } = params;
    const localVarPath = `/api/insights/v1/rating/stats/`;
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

export default ratingStatsListParamCreator;
