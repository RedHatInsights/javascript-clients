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


export type RatingRetrieveParams = {
  /**
  *
  * @type { string }
  * @memberof RatingRetrieveApi
  */
  rule: string,
  options?: AxiosRequestConfig
}

const isRatingRetrieveObjectParams = (params: [RatingRetrieveParams] | unknown[]): params is [RatingRetrieveParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'rule')
}
/**
* Retrieve the ratings for a single rule, by Insights Rule ID
* @summary Retrieve the ratings for a single rule
* @param {RatingRetrieveParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const ratingRetrieveParamCreator = async (...config: ([RatingRetrieveParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isRatingRetrieveObjectParams(config) ? config[0] : ['rule', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RatingRetrieveParams;
    const { rule, options = {} } = params;
    const localVarPath = `/api/insights/v1/rating/{rule}/`
        .replace(`{${"rule"}}`, encodeURIComponent(String(rule)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



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

export default ratingRetrieveParamCreator;
