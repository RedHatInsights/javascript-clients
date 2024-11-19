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


export type SystemListParams = {
  /**
  * Display systems with this text in their display_name
  * @type { string }
  * @memberof SystemListApi
  */
  displayName?: string,
  /**
  * Is this an Ansible system?
  * @type { boolean }
  * @memberof SystemListApi
  */
  filterSystemProfileAnsible?: boolean,
  /**
  * Is this a Microsoft SQL system?
  * @type { boolean }
  * @memberof SystemListApi
  */
  filterSystemProfileMssql?: boolean,
  /**
  * Are there systems which contain these SAP SIDs?
  * @type { Array<string> }
  * @memberof SystemListApi
  */
  filterSystemProfileSapSidsContains?: Array<string>,
  /**
  * Is this a SAP system?
  * @type { boolean }
  * @memberof SystemListApi
  */
  filterSystemProfileSapSystem?: boolean,
  /**
  * List of Inventory host group names
  * @type { Array<string> }
  * @memberof SystemListApi
  */
  groups?: Array<string>,
  /**
  * Display systems which has at least one disabled recommendation
  * @type { boolean }
  * @memberof SystemListApi
  */
  hasDisabledRecommendation?: boolean,
  /**
  * Display systems with hits of the given total_risk value (1..4), or 0 to display all systems
  * @type { Array<SystemListHitsEnum> }
  * @memberof SystemListApi
  */
  hits?: Array<SystemListHitsEnum>,
  /**
  * Display only systems reporting an incident
  * @type { boolean }
  * @memberof SystemListApi
  */
  incident?: boolean,
  /**
  * Number of results to return per page.
  * @type { number }
  * @memberof SystemListApi
  */
  limit?: number,
  /**
  * The initial index from which to return the results.
  * @type { number }
  * @memberof SystemListApi
  */
  offset?: number,
  /**
  * Display systems with rule hits for this Pathway
  * @type { string }
  * @memberof SystemListApi
  */
  pathway?: string,
  /**
  * Display only systems with these versions of RHEL
  * @type { Array<SystemListRhelVersionEnum> }
  * @memberof SystemListApi
  */
  rhelVersion?: Array<SystemListRhelVersionEnum>,
  /**
  * Order by this field
  * @type { SystemListSortEnum }
  * @memberof SystemListApi
  */
  sort?: SystemListSortEnum,
  /**
  * Tags have a namespace, key and value in the form namespace/key=value
  * @type { Array<string> }
  * @memberof SystemListApi
  */
  tags?: Array<string>,
  /**
  * Search for systems with this updater type
  * @type { Array<SystemListUpdateMethodEnum> }
  * @memberof SystemListApi
  */
  updateMethod?: Array<SystemListUpdateMethodEnum>,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const SystemListHitsEnum = {
    _1: '1',
    _2: '2',
    _3: '3',
    _4: '4',
    All: 'all',
    No: 'no',
    Yes: 'yes'
} as const;
export type SystemListHitsEnum = typeof SystemListHitsEnum[keyof typeof SystemListHitsEnum];
/**
  * @export
  * @enum {string}
  */
export const SystemListRhelVersionEnum = {
    _100: '10.0',
    _60: '6.0',
    _61: '6.1',
    _610: '6.10',
    _62: '6.2',
    _63: '6.3',
    _64: '6.4',
    _65: '6.5',
    _66: '6.6',
    _67: '6.7',
    _68: '6.8',
    _69: '6.9',
    _70: '7.0',
    _71: '7.1',
    _710: '7.10',
    _72: '7.2',
    _73: '7.3',
    _74: '7.4',
    _75: '7.5',
    _76: '7.6',
    _77: '7.7',
    _78: '7.8',
    _79: '7.9',
    _80: '8.0',
    _81: '8.1',
    _810: '8.10',
    _82: '8.2',
    _83: '8.3',
    _84: '8.4',
    _85: '8.5',
    _86: '8.6',
    _87: '8.7',
    _88: '8.8',
    _89: '8.9',
    _90: '9.0',
    _91: '9.1',
    _92: '9.2',
    _93: '9.3',
    _94: '9.4',
    _95: '9.5',
    _96: '9.6'
} as const;
export type SystemListRhelVersionEnum = typeof SystemListRhelVersionEnum[keyof typeof SystemListRhelVersionEnum];
/**
  * @export
  * @enum {string}
  */
export const SystemListSortEnum = {
    NotCriticalHits: '-critical_hits',
    NotDisplayName: '-display_name',
    NotGroupName: '-group_name',
    NotHits: '-hits',
    NotImportantHits: '-important_hits',
    NotLastSeen: '-last_seen',
    NotLowHits: '-low_hits',
    NotModerateHits: '-moderate_hits',
    NotRhelVersion: '-rhel_version',
    CriticalHits: 'critical_hits',
    DisplayName: 'display_name',
    GroupName: 'group_name',
    Hits: 'hits',
    ImportantHits: 'important_hits',
    LastSeen: 'last_seen',
    LowHits: 'low_hits',
    ModerateHits: 'moderate_hits',
    RhelVersion: 'rhel_version'
} as const;
export type SystemListSortEnum = typeof SystemListSortEnum[keyof typeof SystemListSortEnum];
/**
  * @export
  * @enum {string}
  */
export const SystemListUpdateMethodEnum = {
    Dnfyum: 'dnfyum',
    Ostree: 'ostree'
} as const;
export type SystemListUpdateMethodEnum = typeof SystemListUpdateMethodEnum[keyof typeof SystemListUpdateMethodEnum];

export type SystemListReturnType = AxiosPromise<PaginatedSystemList>;

const isSystemListObjectParams = (params: [SystemListParams] | unknown[]): params is [SystemListParams] => {
  return params.length === 1 && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true
}
/**
* Returns systems with their hit count and last upload time.  Results can be sorted and systems can be filtered by display name and hits
* @param {SystemListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const systemListParamCreator = async (...config: ([SystemListParams] | [string, boolean, boolean, Array<string>, boolean, Array<string>, boolean, Array<SystemListHitsEnum>, boolean, number, number, string, Array<SystemListRhelVersionEnum>, SystemListSortEnum, Array<string>, Array<SystemListUpdateMethodEnum>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isSystemListObjectParams(config) ? config[0] : ['displayName', 'filterSystemProfileAnsible', 'filterSystemProfileMssql', 'filterSystemProfileSapSidsContains', 'filterSystemProfileSapSystem', 'groups', 'hasDisabledRecommendation', 'hits', 'incident', 'limit', 'offset', 'pathway', 'rhelVersion', 'sort', 'tags', 'updateMethod', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as SystemListParams;
    const { displayName, filterSystemProfileAnsible, filterSystemProfileMssql, filterSystemProfileSapSidsContains, filterSystemProfileSapSystem, groups, hasDisabledRecommendation, hits, incident, limit, offset, pathway, rhelVersion, sort, tags, updateMethod, options = {} } = params;
    const localVarPath = `/api/insights/v1/system/`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (displayName !== undefined) {
        localVarQueryParameter['display_name'] = displayName;
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

    if (hasDisabledRecommendation !== undefined) {
        localVarQueryParameter['has_disabled_recommendation'] = hasDisabledRecommendation;
    }

    if (hits) {
        localVarQueryParameter['hits'] = hits;
    }

    if (incident !== undefined) {
        localVarQueryParameter['incident'] = incident;
    }

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }

    if (pathway !== undefined) {
        localVarQueryParameter['pathway'] = pathway;
    }

    if (rhelVersion) {
        localVarQueryParameter['rhel_version'] = rhelVersion;
    }

    if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort;
    }

    if (tags) {
        localVarQueryParameter['tags'] = tags;
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

export default systemListParamCreator;
