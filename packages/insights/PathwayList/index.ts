// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PaginatedPathwayList } from '../types';


export type PathwayListParams = {
  /**
  * Filter rules of this category (number)
  * @type { Array<PathwayListCategoryEnum> }
  * @memberof PathwayListApi
  */
  category?: Array<PathwayListCategoryEnum>,
  /**
  * Is this an Ansible system?
  * @type { boolean }
  * @memberof PathwayListApi
  */
  filterSystemProfileAnsible?: boolean,
  /**
  * Is this a Microsoft SQL system?
  * @type { boolean }
  * @memberof PathwayListApi
  */
  filterSystemProfileMssql?: boolean,
  /**
  * Are there systems which contain these SAP SIDs?
  * @type { Array<string> }
  * @memberof PathwayListApi
  */
  filterSystemProfileSapSidsContains?: Array<string>,
  /**
  * Is this a SAP system?
  * @type { boolean }
  * @memberof PathwayListApi
  */
  filterSystemProfileSapSystem?: boolean,
  /**
  * List of Inventory host group names
  * @type { Array<string> }
  * @memberof PathwayListApi
  */
  groups?: Array<string>,
  /**
  * Display only pathways where there are incidents.
  * @type { boolean }
  * @memberof PathwayListApi
  */
  hasIncident?: boolean,
  /**
  * Display pathways even if they aren\'t impacting systems currently
  * @type { boolean }
  * @memberof PathwayListApi
  */
  impacting?: boolean,
  /**
  * Number of results to return per page.
  * @type { number }
  * @memberof PathwayListApi
  */
  limit?: number,
  /**
  * The initial index from which to return the results.
  * @type { number }
  * @memberof PathwayListApi
  */
  offset?: number,
  /**
  * Display only pathways where reboot is required.
  * @type { boolean }
  * @memberof PathwayListApi
  */
  rebootRequired?: boolean,
  /**
  * Order by this field
  * @type { PathwayListSortEnum }
  * @memberof PathwayListApi
  */
  sort?: PathwayListSortEnum,
  /**
  * Tags have a namespace, key and value in the form namespace/key=value
  * @type { Array<string> }
  * @memberof PathwayListApi
  */
  tags?: Array<string>,
  /**
  * Filter pathway names with this text. If viewing details for a pathway for rules, reports and systems, additional filter on their text fields
  * @type { string }
  * @memberof PathwayListApi
  */
  text?: string,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const PathwayListCategoryEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type PathwayListCategoryEnum = typeof PathwayListCategoryEnum[keyof typeof PathwayListCategoryEnum];
/**
  * @export
  * @enum {string}
  */
export const PathwayListSortEnum = {
    NotImpactedSystemsCount: '-impacted_systems_count',
    NotName: '-name',
    NotRecommendationLevel: '-recommendation_level',
    ImpactedSystemsCount: 'impacted_systems_count',
    Name: 'name',
    RecommendationLevel: 'recommendation_level'
} as const;
export type PathwayListSortEnum = typeof PathwayListSortEnum[keyof typeof PathwayListSortEnum];

export type PathwayListReturnType = PaginatedPathwayList;

const isPathwayListObjectParams = (params: [PathwayListParams] | unknown[]): params is [PathwayListParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* This returns a list of all Pathways. Will display the same information as is provided in the retrieve view, but has all Pathways listed.
* @summary Return all pathways
* @param {PathwayListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const pathwayListParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([PathwayListParams] | [Array<PathwayListCategoryEnum>, boolean, boolean, Array<string>, boolean, Array<string>, boolean, boolean, number, number, boolean, PathwayListSortEnum, Array<string>, string, AxiosRequestConfig])) => {
    const params = isPathwayListObjectParams(config) ? config[0] : ['category', 'filterSystemProfileAnsible', 'filterSystemProfileMssql', 'filterSystemProfileSapSidsContains', 'filterSystemProfileSapSystem', 'groups', 'hasIncident', 'impacting', 'limit', 'offset', 'rebootRequired', 'sort', 'tags', 'text', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as PathwayListParams;
    const { category, filterSystemProfileAnsible, filterSystemProfileMssql, filterSystemProfileSapSidsContains, filterSystemProfileSapSystem, groups, hasIncident, impacting, limit, offset, rebootRequired, sort, tags, text, options = {} } = params;
    const localVarPath = `/api/insights/v1/pathway/`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (category) {
        localVarQueryParameter['category'] = category;
    }

    if (filterSystemProfileAnsible !== undefined) {
        localVarQueryParameter['filter[system_profile][ansible]'] = filterSystemProfileAnsible;
    }

    if (filterSystemProfileMssql !== undefined) {
        localVarQueryParameter['filter[system_profile][mssql]'] = filterSystemProfileMssql;
    }

    if (filterSystemProfileSapSidsContains) {
        localVarQueryParameter['filter[system_profile][sap_sids][contains]'] = filterSystemProfileSapSidsContains;
    }

    if (filterSystemProfileSapSystem !== undefined) {
        localVarQueryParameter['filter[system_profile][sap_system]'] = filterSystemProfileSapSystem;
    }

    if (groups) {
        localVarQueryParameter['groups'] = groups;
    }

    if (hasIncident !== undefined) {
        localVarQueryParameter['has_incident'] = hasIncident;
    }

    if (impacting !== undefined) {
        localVarQueryParameter['impacting'] = impacting;
    }

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }

    if (rebootRequired !== undefined) {
        localVarQueryParameter['reboot_required'] = rebootRequired;
    }

    if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort;
    }

    if (tags) {
        localVarQueryParameter['tags'] = tags;
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

    return sendRequest<PathwayListReturnType>(Promise.resolve(args));
}

export default pathwayListParamCreator;
