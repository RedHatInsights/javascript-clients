// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PaginatedRuleForAccountList } from '../types';


export type PathwayRulesListParams = {
  /**
  *
  * @type { string }
  * @memberof PathwayRulesListApi
  */
  slug: string,
  /**
  * Filter rules of this category (number)
  * @type { Array<PathwayRulesListCategoryEnum> }
  * @memberof PathwayRulesListApi
  */
  category?: Array<PathwayRulesListCategoryEnum>,
  /**
  * Number of results to return per page.
  * @type { number }
  * @memberof PathwayRulesListApi
  */
  limit?: number,
  /**
  * The initial index from which to return the results.
  * @type { number }
  * @memberof PathwayRulesListApi
  */
  offset?: number,
  /**
  * Filter pathway names with this text. If viewing details for a pathway for rules, reports and systems, additional filter on their text fields
  * @type { string }
  * @memberof PathwayRulesListApi
  */
  text?: string,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const PathwayRulesListCategoryEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type PathwayRulesListCategoryEnum = typeof PathwayRulesListCategoryEnum[keyof typeof PathwayRulesListCategoryEnum];

export type PathwayRulesListReturnType = PaginatedRuleForAccountList;

const isPathwayRulesListObjectParams = (params: [PathwayRulesListParams] | unknown[]): params is [PathwayRulesListParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'slug')
  }
  return false
}
/**
* This view will retrieve/list in paginated format, all rules for a specific Pathway. This does not take into account acks or host asks. The Specific Pathway is requested by its slug
* @summary Get all rules in a Pathway
* @param {PathwayRulesListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const pathwayRulesListParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([PathwayRulesListParams] | [string, Array<PathwayRulesListCategoryEnum>, number, number, string, AxiosRequestConfig])) => {
    const params = isPathwayRulesListObjectParams(config) ? config[0] : ['slug', 'category', 'limit', 'offset', 'text', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as PathwayRulesListParams;
    const { slug, category, limit, offset, text, options = {} } = params;
    const localVarPath = `/api/insights/v1/pathway/{slug}/rules/`
        .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (category) {
        localVarQueryParameter['category'] = category;
    }

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }

    if (text !== undefined) {
        localVarQueryParameter['text'] = text;
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

    return sendRequest<PathwayRulesListReturnType>(Promise.resolve(args));
}

export default pathwayRulesListParamCreator;
