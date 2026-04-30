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
  * @type { Array<string> }
  * @memberof RuleSystemsDetailListApi
  */
  rhelVersion?: Array<string>,
  /**
  * Order by this field
  * @type { RuleSystemsDetailListSortEnum }
  * @memberof RuleSystemsDetailListApi
  */
  sort?: RuleSystemsDetailListSortEnum,
  /**
  * Display only systems with this type (\'all\' = both types)
  * @type { RuleSystemsDetailListSystemTypeEnum }
  * @memberof RuleSystemsDetailListApi
  */
  systemType?: RuleSystemsDetailListSystemTypeEnum,
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
/**
  * @export
  * @enum {string}
  */
export const RuleSystemsDetailListSystemTypeEnum = {
    All: 'all',
    Bootc: 'bootc',
    Conventional: 'conventional',
    Edge: 'edge'
} as const;
export type RuleSystemsDetailListSystemTypeEnum = typeof RuleSystemsDetailListSystemTypeEnum[keyof typeof RuleSystemsDetailListSystemTypeEnum];

export type RuleSystemsDetailListReturnType = PaginatedSystemsDetailList;

const isRuleSystemsDetailListObjectParams = (params: [RuleSystemsDetailListParams] | unknown[]): params is [RuleSystemsDetailListParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'ruleId')
  }
  return false
}
/**
* List systems affected by this rule with additional information about each system  All systems owned by the user\'s account, with a current upload reporting the given rule, are listed in a paginated format.  Additional information includes hit counts and upload/stale timestamps.
* @param {RuleSystemsDetailListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const ruleSystemsDetailListParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([RuleSystemsDetailListParams] | [string, boolean, boolean, Array<string>, boolean, Array<string>, number, string, number, Array<string>, RuleSystemsDetailListSortEnum, RuleSystemsDetailListSystemTypeEnum, Array<string>, AxiosRequestConfig])) => {
    const params = isRuleSystemsDetailListObjectParams(config) ? config[0] : ['ruleId', 'filterSystemProfileAnsible', 'filterSystemProfileMssql', 'filterSystemProfileSapSidsContains', 'filterSystemProfileSapSystem', 'groups', 'limit', 'name', 'offset', 'rhelVersion', 'sort', 'systemType', 'tags', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RuleSystemsDetailListParams;
    const { ruleId, filterSystemProfileAnsible, filterSystemProfileMssql, filterSystemProfileSapSidsContains, filterSystemProfileSapSystem, groups, limit, name, offset, rhelVersion, sort, systemType, tags, options = {} } = params;
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

    if (systemType !== undefined) {
        localVarQueryParameter['system_type'] = systemType;
    }

    if (tags) {
        localVarQueryParameter['tags'] = tags;
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

    return sendRequest<RuleSystemsDetailListReturnType>(Promise.resolve(args));
}

export default ruleSystemsDetailListParamCreator;
