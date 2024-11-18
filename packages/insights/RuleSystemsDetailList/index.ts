// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PaginatedSystemsDetailList } from '../types';


export type RuleSystemsDetailListParams = {
  /**
  *
  * @type { string }
  * @memberof RuleSystemsDetailListApi
  */
  ruleId: string,
  /**
  * Is this an Ansible system?
  * @type { boolean }
  * @memberof RuleSystemsDetailListApi
  */
  filterSystemProfileAnsible?: boolean,
  /**
  * Is this a Microsoft SQL system?
  * @type { boolean }
  * @memberof RuleSystemsDetailListApi
  */
  filterSystemProfileMssql?: boolean,
  /**
  * Are there systems which contain these SAP SIDs?
  * @type { Array<string> }
  * @memberof RuleSystemsDetailListApi
  */
  filterSystemProfileSapSidsContains?: Array<string>,
  /**
  * Is this a SAP system?
  * @type { boolean }
  * @memberof RuleSystemsDetailListApi
  */
  filterSystemProfileSapSystem?: boolean,
  /**
  * List of Inventory host group names
  * @type { Array<string> }
  * @memberof RuleSystemsDetailListApi
  */
  groups?: Array<string>,
  /**
  * Number of results to return per page.
  * @type { number }
  * @memberof RuleSystemsDetailListApi
  */
  limit?: number,
  /**
  * Search for systems that include this in their display name
  * @type { string }
  * @memberof RuleSystemsDetailListApi
  */
  name?: string,
  /**
  * The initial index from which to return the results.
  * @type { number }
  * @memberof RuleSystemsDetailListApi
  */
  offset?: number,
  /**
  * Display only systems with these versions of RHEL
  * @type { Array<RuleSystemsDetailListRhelVersionEnum> }
  * @memberof RuleSystemsDetailListApi
  */
  rhelVersion?: Array<RuleSystemsDetailListRhelVersionEnum>,
  /**
  * Order by this field
  * @type { RuleSystemsDetailListSortEnum }
  * @memberof RuleSystemsDetailListApi
  */
  sort?: RuleSystemsDetailListSortEnum,
  /**
  * Tags have a namespace, key and value in the form namespace/key=value
  * @type { Array<string> }
  * @memberof RuleSystemsDetailListApi
  */
  tags?: Array<string>,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const RuleSystemsDetailListRhelVersionEnum = {
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
export type RuleSystemsDetailListRhelVersionEnum = typeof RuleSystemsDetailListRhelVersionEnum[keyof typeof RuleSystemsDetailListRhelVersionEnum];
/**
  * @export
  * @enum {string}
  */
export const RuleSystemsDetailListSortEnum = {
    NotCriticalHits: '-critical_hits',
    NotDisplayName: '-display_name',
    NotGroupName: '-group_name',
    NotHits: '-hits',
    NotImpactedDate: '-impacted_date',
    NotImportantHits: '-important_hits',
    NotLastSeen: '-last_seen',
    NotLowHits: '-low_hits',
    NotModerateHits: '-moderate_hits',
    NotRhelVersion: '-rhel_version',
    CriticalHits: 'critical_hits',
    DisplayName: 'display_name',
    GroupName: 'group_name',
    Hits: 'hits',
    ImpactedDate: 'impacted_date',
    ImportantHits: 'important_hits',
    LastSeen: 'last_seen',
    LowHits: 'low_hits',
    ModerateHits: 'moderate_hits',
    RhelVersion: 'rhel_version'
} as const;
export type RuleSystemsDetailListSortEnum = typeof RuleSystemsDetailListSortEnum[keyof typeof RuleSystemsDetailListSortEnum];

const isRuleSystemsDetailListObjectParams = (params: [RuleSystemsDetailListParams] | unknown[]): params is [RuleSystemsDetailListParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'ruleId') && true && true && true && true && true && true && true && true && true && true && true
}
/**
* List systems affected by this rule with additional information about each system  All systems owned by the user\'s account, with a current upload reporting the given rule, are listed in a paginated format.  Additional information includes hit counts and upload/stale timestamps.
* @param {RuleSystemsDetailListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const ruleSystemsDetailListParamCreator = async (...config: ([RuleSystemsDetailListParams] | [string, boolean, boolean, Array<string>, boolean, Array<string>, number, string, number, Array<RuleSystemsDetailListRhelVersionEnum>, RuleSystemsDetailListSortEnum, Array<string>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isRuleSystemsDetailListObjectParams(config) ? config[0] : ['ruleId', 'filterSystemProfileAnsible', 'filterSystemProfileMssql', 'filterSystemProfileSapSidsContains', 'filterSystemProfileSapSystem', 'groups', 'limit', 'name', 'offset', 'rhelVersion', 'sort', 'tags', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RuleSystemsDetailListParams;
    const { ruleId, filterSystemProfileAnsible, filterSystemProfileMssql, filterSystemProfileSapSidsContains, filterSystemProfileSapSystem, groups, limit, name, offset, rhelVersion, sort, tags, options = {} } = params;
    const localVarPath = `/api/insights/v1/rule/{rule_id}/systems_detail/`
        .replace(`{${"rule_id"}}`, encodeURIComponent(String(ruleId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

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

    if (name !== undefined) {
        localVarQueryParameter['name'] = name;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
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

export default ruleSystemsDetailListParamCreator;
