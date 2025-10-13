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


export type RuleListParams = {
  /**
  * Display rules of this category (number)
  * @type { Array<RuleListCategoryEnum> }
  * @memberof RuleListApi
  */
  category?: Array<RuleListCategoryEnum>,
  /**
  * Is this an Ansible system?
  * @type { boolean }
  * @memberof RuleListApi
  */
  filterSystemProfileAnsible?: boolean,
  /**
  * Is this a Microsoft SQL system?
  * @type { boolean }
  * @memberof RuleListApi
  */
  filterSystemProfileMssql?: boolean,
  /**
  * Are there systems which contain these SAP SIDs?
  * @type { Array<string> }
  * @memberof RuleListApi
  */
  filterSystemProfileSapSidsContains?: Array<string>,
  /**
  * Is this a SAP system?
  * @type { boolean }
  * @memberof RuleListApi
  */
  filterSystemProfileSapSystem?: boolean,
  /**
  * List of Inventory host group names
  * @type { Array<string> }
  * @memberof RuleListApi
  */
  groups?: Array<string>,
  /**
  * Display rules that have a playbook
  * @type { boolean }
  * @memberof RuleListApi
  */
  hasPlaybook?: boolean,
  /**
  * Display rules that have (one or more) tags
  * @type { Array<string> }
  * @memberof RuleListApi
  */
  hasTag?: Array<string>,
  /**
  * Display rules of this impact level (1..4)
  * @type { Array<RuleListImpactEnum> }
  * @memberof RuleListApi
  */
  impact?: Array<RuleListImpactEnum>,
  /**
  * Display only rules that are impacting systems currently
  * @type { boolean }
  * @memberof RuleListApi
  */
  impacting?: boolean,
  /**
  * Display only rules that cause an incident
  * @type { boolean }
  * @memberof RuleListApi
  */
  incident?: boolean,
  /**
  * Display only rules of this likelihood level (1..4)
  * @type { Array<RuleListLikelihoodEnum> }
  * @memberof RuleListApi
  */
  likelihood?: Array<RuleListLikelihoodEnum>,
  /**
  * Number of results to return per page.
  * @type { number }
  * @memberof RuleListApi
  */
  limit?: number,
  /**
  * The initial index from which to return the results.
  * @type { number }
  * @memberof RuleListApi
  */
  offset?: number,
  /**
  * Display rules of this Pathway
  * @type { string }
  * @memberof RuleListApi
  */
  pathway?: string,
  /**
  * Display rules that require a reboot to fix
  * @type { boolean }
  * @memberof RuleListApi
  */
  reboot?: boolean,
  /**
  * Display rules where reports are shown or not
  * @type { boolean }
  * @memberof RuleListApi
  */
  reportsShown?: boolean,
  /**
  * Display rules with this resolution risk level (1..4)
  * @type { Array<RuleListResRiskEnum> }
  * @memberof RuleListApi
  */
  resRisk?: Array<RuleListResRiskEnum>,
  /**
  * Display rules which are enabled, disabled (acked) by user, or disabled (acked) by Red Hat
  * @type { RuleListRuleStatusEnum }
  * @memberof RuleListApi
  */
  ruleStatus?: RuleListRuleStatusEnum,
  /**
  * Order by this field
  * @type { Array<RuleListSortEnum> }
  * @memberof RuleListApi
  */
  sort?: Array<RuleListSortEnum>,
  /**
  * Tags have a namespace, key and value in the form namespace/key=value
  * @type { Array<string> }
  * @memberof RuleListApi
  */
  tags?: Array<string>,
  /**
  * Display rules with this text in their text fields
  * @type { string }
  * @memberof RuleListApi
  */
  text?: string,
  /**
  * Display rules in this topic (slug)
  * @type { string }
  * @memberof RuleListApi
  */
  topic?: string,
  /**
  * Display rules with this total risk level (1..4)
  * @type { Array<RuleListTotalRiskEnum> }
  * @memberof RuleListApi
  */
  totalRisk?: Array<RuleListTotalRiskEnum>,
  /**
  * Search for systems with this updater type
  * @type { Array<RuleListUpdateMethodEnum> }
  * @memberof RuleListApi
  */
  updateMethod?: Array<RuleListUpdateMethodEnum>,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const RuleListCategoryEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type RuleListCategoryEnum = typeof RuleListCategoryEnum[keyof typeof RuleListCategoryEnum];
/**
  * @export
  * @enum {string}
  */
export const RuleListImpactEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type RuleListImpactEnum = typeof RuleListImpactEnum[keyof typeof RuleListImpactEnum];
/**
  * @export
  * @enum {string}
  */
export const RuleListLikelihoodEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type RuleListLikelihoodEnum = typeof RuleListLikelihoodEnum[keyof typeof RuleListLikelihoodEnum];
/**
  * @export
  * @enum {string}
  */
export const RuleListResRiskEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type RuleListResRiskEnum = typeof RuleListResRiskEnum[keyof typeof RuleListResRiskEnum];
/**
  * @export
  * @enum {string}
  */
export const RuleListRuleStatusEnum = {
    All: 'all',
    Disabled: 'disabled',
    Enabled: 'enabled',
    Rhdisabled: 'rhdisabled'
} as const;
export type RuleListRuleStatusEnum = typeof RuleListRuleStatusEnum[keyof typeof RuleListRuleStatusEnum];
/**
  * @export
  * @enum {string}
  */
export const RuleListSortEnum = {
    NotCategory: '-category',
    NotDescription: '-description',
    NotImpact: '-impact',
    NotImpactedCount: '-impacted_count',
    NotLikelihood: '-likelihood',
    NotPlaybookCount: '-playbook_count',
    NotPublishDate: '-publish_date',
    NotResolutionRisk: '-resolution_risk',
    NotRuleId: '-rule_id',
    NotTotalRisk: '-total_risk',
    Category: 'category',
    Description: 'description',
    Impact: 'impact',
    ImpactedCount: 'impacted_count',
    Likelihood: 'likelihood',
    PlaybookCount: 'playbook_count',
    PublishDate: 'publish_date',
    ResolutionRisk: 'resolution_risk',
    RuleId: 'rule_id',
    TotalRisk: 'total_risk'
} as const;
export type RuleListSortEnum = typeof RuleListSortEnum[keyof typeof RuleListSortEnum];
/**
  * @export
  * @enum {string}
  */
export const RuleListTotalRiskEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type RuleListTotalRiskEnum = typeof RuleListTotalRiskEnum[keyof typeof RuleListTotalRiskEnum];
/**
  * @export
  * @enum {string}
  */
export const RuleListUpdateMethodEnum = {
    Dnfyum: 'dnfyum',
    Ostree: 'ostree'
} as const;
export type RuleListUpdateMethodEnum = typeof RuleListUpdateMethodEnum[keyof typeof RuleListUpdateMethodEnum];

export type RuleListReturnType = AxiosPromise<PaginatedRuleForAccountList>;

const isRuleListObjectParams = (params: [RuleListParams] | unknown[]): params is [RuleListParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* List all active rules for this account.  If \'acked\' is False or not given, then only rules that are not acked will be shown.  If acked is set and \'true\' as a string or evaluates to a true value, then all rules including those that are acked will be shown.
* @param {RuleListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const ruleListParamCreator = async (...config: ([RuleListParams] | [Array<RuleListCategoryEnum>, boolean, boolean, Array<string>, boolean, Array<string>, boolean, Array<string>, Array<RuleListImpactEnum>, boolean, boolean, Array<RuleListLikelihoodEnum>, number, number, string, boolean, boolean, Array<RuleListResRiskEnum>, RuleListRuleStatusEnum, Array<RuleListSortEnum>, Array<string>, string, string, Array<RuleListTotalRiskEnum>, Array<RuleListUpdateMethodEnum>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isRuleListObjectParams(config) ? config[0] : ['category', 'filterSystemProfileAnsible', 'filterSystemProfileMssql', 'filterSystemProfileSapSidsContains', 'filterSystemProfileSapSystem', 'groups', 'hasPlaybook', 'hasTag', 'impact', 'impacting', 'incident', 'likelihood', 'limit', 'offset', 'pathway', 'reboot', 'reportsShown', 'resRisk', 'ruleStatus', 'sort', 'tags', 'text', 'topic', 'totalRisk', 'updateMethod', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RuleListParams;
    const { category, filterSystemProfileAnsible, filterSystemProfileMssql, filterSystemProfileSapSidsContains, filterSystemProfileSapSystem, groups, hasPlaybook, hasTag, impact, impacting, incident, likelihood, limit, offset, pathway, reboot, reportsShown, resRisk, ruleStatus, sort, tags, text, topic, totalRisk, updateMethod, options = {} } = params;
    const localVarPath = `/api/insights/v1/rule/`;
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

    if (hasPlaybook !== undefined) {
        localVarQueryParameter['has_playbook'] = hasPlaybook;
    }

    if (hasTag) {
        localVarQueryParameter['has_tag'] = hasTag;
    }

    if (impact) {
        localVarQueryParameter['impact'] = impact;
    }

    if (impacting !== undefined) {
        localVarQueryParameter['impacting'] = impacting;
    }

    if (incident !== undefined) {
        localVarQueryParameter['incident'] = incident;
    }

    if (likelihood) {
        localVarQueryParameter['likelihood'] = likelihood;
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

    if (reboot !== undefined) {
        localVarQueryParameter['reboot'] = reboot;
    }

    if (reportsShown !== undefined) {
        localVarQueryParameter['reports_shown'] = reportsShown;
    }

    if (resRisk) {
        localVarQueryParameter['res_risk'] = resRisk;
    }

    if (ruleStatus !== undefined) {
        localVarQueryParameter['rule_status'] = ruleStatus;
    }

    if (sort) {
        localVarQueryParameter['sort'] = sort;
    }

    if (tags) {
        localVarQueryParameter['tags'] = tags;
    }

    if (text !== undefined) {
        localVarQueryParameter['text'] = text;
    }

    if (topic !== undefined) {
        localVarQueryParameter['topic'] = topic;
    }

    if (totalRisk) {
        localVarQueryParameter['total_risk'] = totalRisk;
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

export default ruleListParamCreator;
