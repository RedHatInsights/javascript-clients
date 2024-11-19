// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { RuleRating } from '../types';


export type RatingCreateParams = {
  /**
  *
  * @type { RuleRating }
  * @memberof RatingCreateApi
  */
  ruleRating: RuleRating,
  options?: AxiosRequestConfig
}

export type RatingCreateReturnType = AxiosPromise<RuleRating>;

const isRatingCreateObjectParams = (params: [RatingCreateParams] | unknown[]): params is [RatingCreateParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'ruleRating')
}
/**
* Add or update a rating for a rule, by rule ID.  Return the new rating.  Any previous rating for this rule by this user is amended to the current value.  This does not attempt to delete a rating by this user of this rule if the rating is zero.
* @param {RatingCreateParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const ratingCreateParamCreator = async (...config: ([RatingCreateParams] | [RuleRating, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isRatingCreateObjectParams(config) ? config[0] : ['ruleRating', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RatingCreateParams;
    const { ruleRating, options = {} } = params;
    const localVarPath = `/api/insights/v1/rating/`;
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
        serializeData: ruleRating,
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

export default ratingCreateParamCreator;
