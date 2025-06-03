// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { RuleSystemsExport } from '../types';


export type PathwayReportsRetrieveParams = {
  /**
  *
  * @type { string }
  * @memberof PathwayReportsRetrieveApi
  */
  slug: string,
  /**
  * Filter rules of this category (number)
  * @type { Array<PathwayReportsRetrieveCategoryEnum> }
  * @memberof PathwayReportsRetrieveApi
  */
  category?: Array<PathwayReportsRetrieveCategoryEnum>,
  /**
  * List of Inventory host group names
  * @type { Array<string> }
  * @memberof PathwayReportsRetrieveApi
  */
  groups?: Array<string>,
  /**
  * Display Pathway Reports of this/these systems
  * @type { Array<string> }
  * @memberof PathwayReportsRetrieveApi
  */
  hostId?: Array<string>,
  /**
  * Display Pathway Reports of this/these rules
  * @type { Array<string> }
  * @memberof PathwayReportsRetrieveApi
  */
  ruleId?: Array<string>,
  /**
  * Filter pathway names with this text. If viewing details for a pathway for rules, reports and systems, additional filter on their text fields
  * @type { string }
  * @memberof PathwayReportsRetrieveApi
  */
  text?: string,
  /**
  * Search for systems with this updater type
  * @type { Array<PathwayReportsRetrieveUpdateMethodEnum> }
  * @memberof PathwayReportsRetrieveApi
  */
  updateMethod?: Array<PathwayReportsRetrieveUpdateMethodEnum>,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const PathwayReportsRetrieveCategoryEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type PathwayReportsRetrieveCategoryEnum = typeof PathwayReportsRetrieveCategoryEnum[keyof typeof PathwayReportsRetrieveCategoryEnum];
/**
  * @export
  * @enum {string}
  */
export const PathwayReportsRetrieveUpdateMethodEnum = {
    Dnfyum: 'dnfyum',
    Ostree: 'ostree'
} as const;
export type PathwayReportsRetrieveUpdateMethodEnum = typeof PathwayReportsRetrieveUpdateMethodEnum[keyof typeof PathwayReportsRetrieveUpdateMethodEnum];

export type PathwayReportsRetrieveReturnType = AxiosPromise<RuleSystemsExport>;

const isPathwayReportsRetrieveObjectParams = (params: [PathwayReportsRetrieveParams] | unknown[]): params is [PathwayReportsRetrieveParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'slug') && true && true && true && true && true && true
}
/**
* Each rule is listed once, with the systems currently reporting an incidence of that rule in a list.
* @summary Get the list of systems for each rule in this pathway
* @param {PathwayReportsRetrieveParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const pathwayReportsRetrieveParamCreator = async (...config: ([PathwayReportsRetrieveParams] | [string, Array<PathwayReportsRetrieveCategoryEnum>, Array<string>, Array<string>, Array<string>, string, Array<PathwayReportsRetrieveUpdateMethodEnum>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isPathwayReportsRetrieveObjectParams(config) ? config[0] : ['slug', 'category', 'groups', 'hostId', 'ruleId', 'text', 'updateMethod', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as PathwayReportsRetrieveParams;
    const { slug, category, groups, hostId, ruleId, text, updateMethod, options = {} } = params;
    const localVarPath = `/api/insights/v1/pathway/{slug}/reports/`
        .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (category) {
        localVarQueryParameter['category'] = category;
    }

    if (groups) {
        localVarQueryParameter['groups'] = groups;
    }

    if (hostId) {
        localVarQueryParameter['host_id'] = hostId;
    }

    if (ruleId) {
        localVarQueryParameter['rule_id'] = ruleId;
    }

    if (text !== undefined) {
        localVarQueryParameter['text'] = text;
    }

    if (updateMethod) {
        localVarQueryParameter['update_method'] = updateMethod;
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

export default pathwayReportsRetrieveParamCreator;
