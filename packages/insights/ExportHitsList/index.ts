// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ExportHits } from '../types';


export type ExportHitsListParams = {
  /**
  * Display rules of this category (number)
  * @type { Array<ExportHitsListCategoryEnum> }
  * @memberof ExportHitsListApi
  */
  category?: Array<ExportHitsListCategoryEnum>,
  /**
  * Display systems with this text in their display_name
  * @type { string }
  * @memberof ExportHitsListApi
  */
  displayName?: string,
  /**
  * Are there systems which contain these SAP SIDs?
  * @type { Array<string> }
  * @memberof ExportHitsListApi
  */
  filterSystemProfileSapSidsContains?: Array<string>,
  /**
  * Is this a SAP system?
  * @type { boolean }
  * @memberof ExportHitsListApi
  */
  filterSystemProfileSapSystem?: boolean,
  /**
  *
  * @type { ExportHitsListFormatEnum }
  * @memberof ExportHitsListApi
  */
  format?: ExportHitsListFormatEnum,
  /**
  * List of Inventory host group names
  * @type { Array<string> }
  * @memberof ExportHitsListApi
  */
  groups?: Array<string>,
  /**
  * Display rules that have a playbook
  * @type { boolean }
  * @memberof ExportHitsListApi
  */
  hasPlaybook?: boolean,
  /**
  * Display rules of this impact level (1..4)
  * @type { Array<ExportHitsListImpactEnum> }
  * @memberof ExportHitsListApi
  */
  impact?: Array<ExportHitsListImpactEnum>,
  /**
  * Display only rules that cause an incident
  * @type { boolean }
  * @memberof ExportHitsListApi
  */
  incident?: boolean,
  /**
  * Display only rules of this likelihood level (1..4)
  * @type { Array<ExportHitsListLikelihoodEnum> }
  * @memberof ExportHitsListApi
  */
  likelihood?: Array<ExportHitsListLikelihoodEnum>,
  /**
  * Display rules that require a reboot to fix
  * @type { boolean }
  * @memberof ExportHitsListApi
  */
  reboot?: boolean,
  /**
  * Display rules with this resolution risk level (1..4)
  * @type { Array<ExportHitsListResRiskEnum> }
  * @memberof ExportHitsListApi
  */
  resRisk?: Array<ExportHitsListResRiskEnum>,
  /**
  * Tags have a namespace, key and value in the form namespace/key=value
  * @type { Array<string> }
  * @memberof ExportHitsListApi
  */
  tags?: Array<string>,
  /**
  * Display rules with this text in their text fields
  * @type { string }
  * @memberof ExportHitsListApi
  */
  text?: string,
  /**
  * Display rules with this total risk level (1..4)
  * @type { Array<ExportHitsListTotalRiskEnum> }
  * @memberof ExportHitsListApi
  */
  totalRisk?: Array<ExportHitsListTotalRiskEnum>,
  /**
  * Search for systems with this updater type
  * @type { Array<ExportHitsListUpdateMethodEnum> }
  * @memberof ExportHitsListApi
  */
  updateMethod?: Array<ExportHitsListUpdateMethodEnum>,
  /**
  * Display a system with this uuid
  * @type { string }
  * @memberof ExportHitsListApi
  */
  uuid?: string,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ExportHitsListCategoryEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type ExportHitsListCategoryEnum = typeof ExportHitsListCategoryEnum[keyof typeof ExportHitsListCategoryEnum];
/**
  * @export
  * @enum {string}
  */
export const ExportHitsListFormatEnum = {
    Csv: 'csv',
    Json: 'json'
} as const;
export type ExportHitsListFormatEnum = typeof ExportHitsListFormatEnum[keyof typeof ExportHitsListFormatEnum];
/**
  * @export
  * @enum {string}
  */
export const ExportHitsListImpactEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type ExportHitsListImpactEnum = typeof ExportHitsListImpactEnum[keyof typeof ExportHitsListImpactEnum];
/**
  * @export
  * @enum {string}
  */
export const ExportHitsListLikelihoodEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type ExportHitsListLikelihoodEnum = typeof ExportHitsListLikelihoodEnum[keyof typeof ExportHitsListLikelihoodEnum];
/**
  * @export
  * @enum {string}
  */
export const ExportHitsListResRiskEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type ExportHitsListResRiskEnum = typeof ExportHitsListResRiskEnum[keyof typeof ExportHitsListResRiskEnum];
/**
  * @export
  * @enum {string}
  */
export const ExportHitsListTotalRiskEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type ExportHitsListTotalRiskEnum = typeof ExportHitsListTotalRiskEnum[keyof typeof ExportHitsListTotalRiskEnum];
/**
  * @export
  * @enum {string}
  */
export const ExportHitsListUpdateMethodEnum = {
    Dnfyum: 'dnfyum',
    Ostree: 'ostree'
} as const;
export type ExportHitsListUpdateMethodEnum = typeof ExportHitsListUpdateMethodEnum[keyof typeof ExportHitsListUpdateMethodEnum];

export type ExportHitsListReturnType = AxiosPromise<Array<ExportHits>>;

const isExportHitsListObjectParams = (params: [ExportHitsListParams] | unknown[]): params is [ExportHitsListParams] => {
  return params.length === 1 && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true
}
/**
* Get each host and all rules currently affecting it.  We also only present active, non-acked (on an account AND host level) rules.  Inventory data may be requested if Advisor has not seen all the hosts. The accepted content type supplied in the request headers is used to determine the supplied content type.
* @param {ExportHitsListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const exportHitsListParamCreator = async (...config: ([ExportHitsListParams] | [Array<ExportHitsListCategoryEnum>, string, Array<string>, boolean, ExportHitsListFormatEnum, Array<string>, boolean, Array<ExportHitsListImpactEnum>, boolean, Array<ExportHitsListLikelihoodEnum>, boolean, Array<ExportHitsListResRiskEnum>, Array<string>, string, Array<ExportHitsListTotalRiskEnum>, Array<ExportHitsListUpdateMethodEnum>, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isExportHitsListObjectParams(config) ? config[0] : ['category', 'displayName', 'filterSystemProfileSapSidsContains', 'filterSystemProfileSapSystem', 'format', 'groups', 'hasPlaybook', 'impact', 'incident', 'likelihood', 'reboot', 'resRisk', 'tags', 'text', 'totalRisk', 'updateMethod', 'uuid', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ExportHitsListParams;
    const { category, displayName, filterSystemProfileSapSidsContains, filterSystemProfileSapSystem, format, groups, hasPlaybook, impact, incident, likelihood, reboot, resRisk, tags, text, totalRisk, updateMethod, uuid, options = {} } = params;
    const localVarPath = `/api/insights/v1/export/hits/`;
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

    if (format !== undefined) {
        localVarQueryParameter['format'] = format;
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

export default exportHitsListParamCreator;
