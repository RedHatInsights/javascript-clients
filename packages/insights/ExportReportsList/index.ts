// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ReportExport } from '../types';


export type ExportReportsListParams = {
  /**
  * Display rules of this category (number)
  * @type { Array<ExportReportsListCategoryEnum> }
  * @memberof ExportReportsListApi
  */
  category?: Array<ExportReportsListCategoryEnum>,
  /**
  * Display systems with this text in their display_name
  * @type { string }
  * @memberof ExportReportsListApi
  */
  displayName?: string,
  /**
  * Are there systems which contain these SAP SIDs?
  * @type { Array<string> }
  * @memberof ExportReportsListApi
  */
  filterSystemProfileSapSidsContains?: Array<string>,
  /**
  * Is this a SAP system?
  * @type { boolean }
  * @memberof ExportReportsListApi
  */
  filterSystemProfileSapSystem?: boolean,
  /**
  * List of Inventory host group names
  * @type { Array<string> }
  * @memberof ExportReportsListApi
  */
  groups?: Array<string>,
  /**
  * Display rules that have a playbook
  * @type { boolean }
  * @memberof ExportReportsListApi
  */
  hasPlaybook?: boolean,
  /**
  * Display rules of this impact level (1..4)
  * @type { Array<ExportReportsListImpactEnum> }
  * @memberof ExportReportsListApi
  */
  impact?: Array<ExportReportsListImpactEnum>,
  /**
  * Display only rules that cause an incident
  * @type { boolean }
  * @memberof ExportReportsListApi
  */
  incident?: boolean,
  /**
  * Display only rules of this likelihood level (1..4)
  * @type { Array<ExportReportsListLikelihoodEnum> }
  * @memberof ExportReportsListApi
  */
  likelihood?: Array<ExportReportsListLikelihoodEnum>,
  /**
  * Display rules that require a reboot to fix
  * @type { boolean }
  * @memberof ExportReportsListApi
  */
  reboot?: boolean,
  /**
  * Display rules with this resolution risk level (1..4)
  * @type { Array<ExportReportsListResRiskEnum> }
  * @memberof ExportReportsListApi
  */
  resRisk?: Array<ExportReportsListResRiskEnum>,
  /**
  * Tags have a namespace, key and value in the form namespace/key=value
  * @type { Array<string> }
  * @memberof ExportReportsListApi
  */
  tags?: Array<string>,
  /**
  * Display rules with this text in their text fields
  * @type { string }
  * @memberof ExportReportsListApi
  */
  text?: string,
  /**
  * Display rules with this total risk level (1..4)
  * @type { Array<ExportReportsListTotalRiskEnum> }
  * @memberof ExportReportsListApi
  */
  totalRisk?: Array<ExportReportsListTotalRiskEnum>,
  /**
  * Search for systems with this updater type
  * @type { Array<ExportReportsListUpdateMethodEnum> }
  * @memberof ExportReportsListApi
  */
  updateMethod?: Array<ExportReportsListUpdateMethodEnum>,
  /**
  * Display a system with this uuid
  * @type { string }
  * @memberof ExportReportsListApi
  */
  uuid?: string,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ExportReportsListCategoryEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type ExportReportsListCategoryEnum = typeof ExportReportsListCategoryEnum[keyof typeof ExportReportsListCategoryEnum];
/**
  * @export
  * @enum {string}
  */
export const ExportReportsListImpactEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type ExportReportsListImpactEnum = typeof ExportReportsListImpactEnum[keyof typeof ExportReportsListImpactEnum];
/**
  * @export
  * @enum {string}
  */
export const ExportReportsListLikelihoodEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type ExportReportsListLikelihoodEnum = typeof ExportReportsListLikelihoodEnum[keyof typeof ExportReportsListLikelihoodEnum];
/**
  * @export
  * @enum {string}
  */
export const ExportReportsListResRiskEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type ExportReportsListResRiskEnum = typeof ExportReportsListResRiskEnum[keyof typeof ExportReportsListResRiskEnum];
/**
  * @export
  * @enum {string}
  */
export const ExportReportsListTotalRiskEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type ExportReportsListTotalRiskEnum = typeof ExportReportsListTotalRiskEnum[keyof typeof ExportReportsListTotalRiskEnum];
/**
  * @export
  * @enum {string}
  */
export const ExportReportsListUpdateMethodEnum = {
    Dnfyum: 'dnfyum',
    Ostree: 'ostree'
} as const;
export type ExportReportsListUpdateMethodEnum = typeof ExportReportsListUpdateMethodEnum[keyof typeof ExportReportsListUpdateMethodEnum];

const isExportReportsListObjectParams = (params: [ExportReportsListParams] | unknown[]): params is [ExportReportsListParams] => {
  return params.length === 1 && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true
}
/**
* List the report details of each rule affecting each system.  System and Rule are referred to by ID only, to be correlated with the Rule and System export data.  It\'s like the hits output but much less repetitive.
* @param {ExportReportsListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const exportReportsListParamCreator = async (...config: ([ExportReportsListParams] | [Array<ExportReportsListCategoryEnum>, string, Array<string>, boolean, Array<string>, boolean, Array<ExportReportsListImpactEnum>, boolean, Array<ExportReportsListLikelihoodEnum>, boolean, Array<ExportReportsListResRiskEnum>, Array<string>, string, Array<ExportReportsListTotalRiskEnum>, Array<ExportReportsListUpdateMethodEnum>, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isExportReportsListObjectParams(config) ? config[0] : ['category', 'displayName', 'filterSystemProfileSapSidsContains', 'filterSystemProfileSapSystem', 'groups', 'hasPlaybook', 'impact', 'incident', 'likelihood', 'reboot', 'resRisk', 'tags', 'text', 'totalRisk', 'updateMethod', 'uuid', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ExportReportsListParams;
    const { category, displayName, filterSystemProfileSapSidsContains, filterSystemProfileSapSystem, groups, hasPlaybook, impact, incident, likelihood, reboot, resRisk, tags, text, totalRisk, updateMethod, uuid, options = {} } = params;
    const localVarPath = `/api/insights/v1/export/reports/`;
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

export default exportReportsListParamCreator;
