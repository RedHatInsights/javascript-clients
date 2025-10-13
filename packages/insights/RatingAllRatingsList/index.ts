// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PaginatedAllRuleRatingsList } from '../types';


export type RatingAllRatingsListParams = {
  /**
  * Number of results to return per page.
  * @type { number }
  * @memberof RatingAllRatingsListApi
  */
  limit?: number,
  /**
  * The initial index from which to return the results.
  * @type { number }
  * @memberof RatingAllRatingsListApi
  */
  offset?: number,
  options?: AxiosRequestConfig
}

export type RatingAllRatingsListReturnType = PaginatedAllRuleRatingsList;

const isRatingAllRatingsListObjectParams = (params: [RatingAllRatingsListParams] | unknown[]): params is [RatingAllRatingsListParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Show all ratings.  Available only to internal users.
* @param {RatingAllRatingsListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const ratingAllRatingsListParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([RatingAllRatingsListParams] | [number, number, AxiosRequestConfig])) => {
    const params = isRatingAllRatingsListObjectParams(config) ? config[0] : ['limit', 'offset', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RatingAllRatingsListParams;
    const { limit, offset, options = {} } = params;
    const localVarPath = `/api/insights/v1/rating/all_ratings/`;
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

    const args = {
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

    return sendRequest<RatingAllRatingsListReturnType>(Promise.resolve(args));
}

export default ratingAllRatingsListParamCreator;
