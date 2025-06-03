// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PaginatedSystemList } from '../types';


export type PathwaySystemsListParams = {
  /**
  *
  * @type { string }
  * @memberof PathwaySystemsListApi
  */
  slug: string,
  /**
  * Filter rules of this category (number)
  * @type { Array<PathwaySystemsListCategoryEnum> }
  * @memberof PathwaySystemsListApi
  */
  category?: Array<PathwaySystemsListCategoryEnum>,
  /**
  * Is this an Ansible system?
  * @type { boolean }
  * @memberof PathwaySystemsListApi
  */
  filterSystemProfileAnsible?: boolean,
  /**
  * Is this a Microsoft SQL system?
  * @type { boolean }
  * @memberof PathwaySystemsListApi
  */
  filterSystemProfileMssql?: boolean,
  /**
  * Are there systems which contain these SAP SIDs?
  * @type { Array<string> }
  * @memberof PathwaySystemsListApi
  */
  filterSystemProfileSapSidsContains?: Array<string>,
  /**
  * Is this a SAP system?
  * @type { boolean }
  * @memberof PathwaySystemsListApi
  */
  filterSystemProfileSapSystem?: boolean,
  /**
  * List of Inventory host group names
  * @type { Array<string> }
  * @memberof PathwaySystemsListApi
  */
  groups?: Array<string>,
  /**
  * Number of results to return per page.
  * @type { number }
  * @memberof PathwaySystemsListApi
  */
  limit?: number,
  /**
  * The initial index from which to return the results.
  * @type { number }
  * @memberof PathwaySystemsListApi
  */
  offset?: number,
  /**
  * Tags have a namespace, key and value in the form namespace/key=value
  * @type { Array<string> }
  * @memberof PathwaySystemsListApi
  */
  tags?: Array<string>,
  /**
  * Filter pathway names with this text. If viewing details for a pathway for rules, reports and systems, additional filter on their text fields
  * @type { string }
  * @memberof PathwaySystemsListApi
  */
  text?: string,
  /**
  * Search for systems with this updater type
  * @type { Array<PathwaySystemsListUpdateMethodEnum> }
  * @memberof PathwaySystemsListApi
  */
  updateMethod?: Array<PathwaySystemsListUpdateMethodEnum>,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const PathwaySystemsListCategoryEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type PathwaySystemsListCategoryEnum = typeof PathwaySystemsListCategoryEnum[keyof typeof PathwaySystemsListCategoryEnum];
/**
  * @export
  * @enum {string}
  */
export const PathwaySystemsListUpdateMethodEnum = {
    Dnfyum: 'dnfyum',
    Ostree: 'ostree'
} as const;
export type PathwaySystemsListUpdateMethodEnum = typeof PathwaySystemsListUpdateMethodEnum[keyof typeof PathwaySystemsListUpdateMethodEnum];

export type PathwaySystemsListReturnType = AxiosPromise<PaginatedSystemList>;

const isPathwaySystemsListObjectParams = (params: [PathwaySystemsListParams] | unknown[]): params is [PathwaySystemsListParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'slug') && true && true && true && true && true && true && true && true && true && true && true
}
/**
* This view will retrieve/list in paginated format, all impacted systems for an account, for a specific Pathway. The specific Pathway is requested by its slug.
* @summary Get all impacted systems for an account for a specific Pathway
* @param {PathwaySystemsListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const pathwaySystemsListParamCreator = async (...config: ([PathwaySystemsListParams] | [string, Array<PathwaySystemsListCategoryEnum>, boolean, boolean, Array<string>, boolean, Array<string>, number, number, Array<string>, string, Array<PathwaySystemsListUpdateMethodEnum>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isPathwaySystemsListObjectParams(config) ? config[0] : ['slug', 'category', 'filterSystemProfileAnsible', 'filterSystemProfileMssql', 'filterSystemProfileSapSidsContains', 'filterSystemProfileSapSystem', 'groups', 'limit', 'offset', 'tags', 'text', 'updateMethod', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as PathwaySystemsListParams;
    const { slug, category, filterSystemProfileAnsible, filterSystemProfileMssql, filterSystemProfileSapSidsContains, filterSystemProfileSapSystem, groups, limit, offset, tags, text, updateMethod, options = {} } = params;
    const localVarPath = `/api/insights/v1/pathway/{slug}/systems/`
        .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
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

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }

    if (tags) {
        localVarQueryParameter['tags'] = tags;
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

export default pathwaySystemsListParamCreator;
