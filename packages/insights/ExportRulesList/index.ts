// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { RuleExport } from '../types';


export type ExportRulesListParams = {
  /**
  * Display rules of this category (number)
  * @type { Array<ExportRulesListCategoryEnum> }
  * @memberof ExportRulesListApi
  */
  category?: Array<ExportRulesListCategoryEnum>,
  /**
  * Display systems with this text in their display_name
  * @type { string }
  * @memberof ExportRulesListApi
  */
  displayName?: string,
  /**
  * Are there systems which contain these SAP SIDs?
  * @type { Array<string> }
  * @memberof ExportRulesListApi
  */
  filterSystemProfileSapSidsContains?: Array<string>,
  /**
  * Is this a SAP system?
  * @type { boolean }
  * @memberof ExportRulesListApi
  */
  filterSystemProfileSapSystem?: boolean,
  /**
  * List of Inventory host group names
  * @type { Array<string> }
  * @memberof ExportRulesListApi
  */
  groups?: Array<string>,
  /**
  * Display rules that have a playbook
  * @type { boolean }
  * @memberof ExportRulesListApi
  */
  hasPlaybook?: boolean,
  /**
  * Display rules of this impact level (1..4)
  * @type { Array<ExportRulesListImpactEnum> }
  * @memberof ExportRulesListApi
  */
  impact?: Array<ExportRulesListImpactEnum>,
  /**
  * Display only rules that cause an incident
  * @type { boolean }
  * @memberof ExportRulesListApi
  */
  incident?: boolean,
  /**
  * Display only rules of this likelihood level (1..4)
  * @type { Array<ExportRulesListLikelihoodEnum> }
  * @memberof ExportRulesListApi
  */
  likelihood?: Array<ExportRulesListLikelihoodEnum>,
  /**
  * Display rules that require a reboot to fix
  * @type { boolean }
  * @memberof ExportRulesListApi
  */
  reboot?: boolean,
  /**
  * Display rules with this resolution risk level (1..4)
  * @type { Array<ExportRulesListResRiskEnum> }
  * @memberof ExportRulesListApi
  */
  resRisk?: Array<ExportRulesListResRiskEnum>,
  /**
  * Tags have a namespace, key and value in the form namespace/key=value
  * @type { Array<string> }
  * @memberof ExportRulesListApi
  */
  tags?: Array<string>,
  /**
  * Display rules with this text in their text fields
  * @type { string }
  * @memberof ExportRulesListApi
  */
  text?: string,
  /**
  * Display rules with this total risk level (1..4)
  * @type { Array<ExportRulesListTotalRiskEnum> }
  * @memberof ExportRulesListApi
  */
  totalRisk?: Array<ExportRulesListTotalRiskEnum>,
  /**
  * Search for systems with this updater type
  * @type { Array<ExportRulesListUpdateMethodEnum> }
  * @memberof ExportRulesListApi
  */
  updateMethod?: Array<ExportRulesListUpdateMethodEnum>,
  /**
  * Display a system with this uuid
  * @type { string }
  * @memberof ExportRulesListApi
  */
  uuid?: string,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ExportRulesListCategoryEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type ExportRulesListCategoryEnum = typeof ExportRulesListCategoryEnum[keyof typeof ExportRulesListCategoryEnum];
/**
  * @export
  * @enum {string}
  */
export const ExportRulesListImpactEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type ExportRulesListImpactEnum = typeof ExportRulesListImpactEnum[keyof typeof ExportRulesListImpactEnum];
/**
  * @export
  * @enum {string}
  */
export const ExportRulesListLikelihoodEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type ExportRulesListLikelihoodEnum = typeof ExportRulesListLikelihoodEnum[keyof typeof ExportRulesListLikelihoodEnum];
/**
  * @export
  * @enum {string}
  */
export const ExportRulesListResRiskEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type ExportRulesListResRiskEnum = typeof ExportRulesListResRiskEnum[keyof typeof ExportRulesListResRiskEnum];
/**
  * @export
  * @enum {string}
  */
export const ExportRulesListTotalRiskEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type ExportRulesListTotalRiskEnum = typeof ExportRulesListTotalRiskEnum[keyof typeof ExportRulesListTotalRiskEnum];
/**
  * @export
  * @enum {string}
  */
export const ExportRulesListUpdateMethodEnum = {
    Dnfyum: 'dnfyum',
    Ostree: 'ostree'
} as const;
export type ExportRulesListUpdateMethodEnum = typeof ExportRulesListUpdateMethodEnum[keyof typeof ExportRulesListUpdateMethodEnum];

export type ExportRulesListReturnType = Array<RuleExport>;

const isExportRulesListObjectParams = (params: [ExportRulesListParams] | unknown[]): params is [ExportRulesListParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* List the report details of each rule affecting each system.  System and Rule are referred to by ID only, to be correlated with the Rule and System export data.  It\'s like the hits output but much less repetitive.
* @param {ExportRulesListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const exportRulesListParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ExportRulesListParams] | [Array<ExportRulesListCategoryEnum>, string, Array<string>, boolean, Array<string>, boolean, Array<ExportRulesListImpactEnum>, boolean, Array<ExportRulesListLikelihoodEnum>, boolean, Array<ExportRulesListResRiskEnum>, Array<string>, string, Array<ExportRulesListTotalRiskEnum>, Array<ExportRulesListUpdateMethodEnum>, string, AxiosRequestConfig])) => {
    const params = isExportRulesListObjectParams(config) ? config[0] : ['category', 'displayName', 'filterSystemProfileSapSidsContains', 'filterSystemProfileSapSystem', 'groups', 'hasPlaybook', 'impact', 'incident', 'likelihood', 'reboot', 'resRisk', 'tags', 'text', 'totalRisk', 'updateMethod', 'uuid', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ExportRulesListParams;
    const { category, displayName, filterSystemProfileSapSidsContains, filterSystemProfileSapSystem, groups, hasPlaybook, impact, incident, likelihood, reboot, resRisk, tags, text, totalRisk, updateMethod, uuid, options = {} } = params;
    const localVarPath = `/api/insights/v1/export/rules/`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (category) {
        localVarQueryParameter['category'] = category;
    }

    if (displayName !== undefined) {
        localVarQueryParameter['display_name'] = displayName;
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

    if (impact) {
        localVarQueryParameter['impact'] = impact;
    }

    if (incident !== undefined) {
        localVarQueryParameter['incident'] = incident;
    }

    if (likelihood) {
        localVarQueryParameter['likelihood'] = likelihood;
    }

    if (reboot !== undefined) {
        localVarQueryParameter['reboot'] = reboot;
    }

    if (resRisk) {
        localVarQueryParameter['res_risk'] = resRisk;
    }

    if (tags) {
        localVarQueryParameter['tags'] = tags;
    }

    if (text !== undefined) {
        localVarQueryParameter['text'] = text;
    }

    if (totalRisk) {
        localVarQueryParameter['total_risk'] = totalRisk;
    }

    if (updateMethod) {
        localVarQueryParameter['update_method'] = updateMethod;
    }

    if (uuid !== undefined) {
        localVarQueryParameter['uuid'] = uuid;
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

    return sendRequest<ExportRulesListReturnType>(Promise.resolve(args));
}

export default exportRulesListParamCreator;
