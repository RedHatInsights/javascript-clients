// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { SystemsForRule } from '../types';


export type RuleSystemsRetrieveParams = {
  /**
  *
  * @type { string }
  * @memberof RuleSystemsRetrieveApi
  */
  ruleId: string,
  /**
  * Is this an Ansible system?
  * @type { boolean }
  * @memberof RuleSystemsRetrieveApi
  */
  filterSystemProfileAnsible?: boolean,
  /**
  * Is this a Microsoft SQL system?
  * @type { boolean }
  * @memberof RuleSystemsRetrieveApi
  */
  filterSystemProfileMssql?: boolean,
  /**
  * Are there systems which contain these SAP SIDs?
  * @type { Array<string> }
  * @memberof RuleSystemsRetrieveApi
  */
  filterSystemProfileSapSidsContains?: Array<string>,
  /**
  * Is this a SAP system?
  * @type { boolean }
  * @memberof RuleSystemsRetrieveApi
  */
  filterSystemProfileSapSystem?: boolean,
  /**
  *
  * @type { RuleSystemsRetrieveFormatEnum }
  * @memberof RuleSystemsRetrieveApi
  */
  format?: RuleSystemsRetrieveFormatEnum,
  /**
  * List of Inventory host group names
  * @type { Array<string> }
  * @memberof RuleSystemsRetrieveApi
  */
  groups?: Array<string>,
  /**
  * Search for systems that include this in their display name
  * @type { string }
  * @memberof RuleSystemsRetrieveApi
  */
  name?: string,
  /**
  * Display only systems with these versions of RHEL
  * @type { Array<string> }
  * @memberof RuleSystemsRetrieveApi
  */
  rhelVersion?: Array<string>,
  /**
  * Order by this field
  * @type { Array<RuleSystemsRetrieveSortEnum> }
  * @memberof RuleSystemsRetrieveApi
  */
  sort?: Array<RuleSystemsRetrieveSortEnum>,
  /**
  * Display only systems with this type (\'all\' = both types)
  * @type { RuleSystemsRetrieveSystemTypeEnum }
  * @memberof RuleSystemsRetrieveApi
  */
  systemType?: RuleSystemsRetrieveSystemTypeEnum,
  /**
  * Tags have a namespace, key and value in the form namespace/key=value
  * @type { Array<string> }
  * @memberof RuleSystemsRetrieveApi
  */
  tags?: Array<string>,
  /**
  * Search for systems with this updater type
  * @type { Array<RuleSystemsRetrieveUpdateMethodEnum> }
  * @memberof RuleSystemsRetrieveApi
  */
  updateMethod?: Array<RuleSystemsRetrieveUpdateMethodEnum>,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const RuleSystemsRetrieveFormatEnum = {
    Csv: 'csv',
    Json: 'json'
} as const;
export type RuleSystemsRetrieveFormatEnum = typeof RuleSystemsRetrieveFormatEnum[keyof typeof RuleSystemsRetrieveFormatEnum];
/**
  * @export
  * @enum {string}
  */
export const RuleSystemsRetrieveSortEnum = {
    NotDisplayName: '-display_name',
    NotLastSeen: '-last_seen',
    NotStaleAt: '-stale_at',
    NotSystemUuid: '-system_uuid',
    NotUpdated: '-updated',
    DisplayName: 'display_name',
    LastSeen: 'last_seen',
    StaleAt: 'stale_at',
    SystemUuid: 'system_uuid',
    Updated: 'updated'
} as const;
export type RuleSystemsRetrieveSortEnum = typeof RuleSystemsRetrieveSortEnum[keyof typeof RuleSystemsRetrieveSortEnum];
/**
  * @export
  * @enum {string}
  */
export const RuleSystemsRetrieveSystemTypeEnum = {
    All: 'all',
    Bootc: 'bootc',
    Conventional: 'conventional',
    Edge: 'edge'
} as const;
export type RuleSystemsRetrieveSystemTypeEnum = typeof RuleSystemsRetrieveSystemTypeEnum[keyof typeof RuleSystemsRetrieveSystemTypeEnum];
/**
  * @export
  * @enum {string}
  */
export const RuleSystemsRetrieveUpdateMethodEnum = {
    Dnfyum: 'dnfyum',
    Ostree: 'ostree'
} as const;
export type RuleSystemsRetrieveUpdateMethodEnum = typeof RuleSystemsRetrieveUpdateMethodEnum[keyof typeof RuleSystemsRetrieveUpdateMethodEnum];

export type RuleSystemsRetrieveReturnType = SystemsForRule;

const isRuleSystemsRetrieveObjectParams = (params: [RuleSystemsRetrieveParams] | unknown[]): params is [RuleSystemsRetrieveParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'ruleId')
  }
  return false
}
/**
* List all systems affected by this rule.  All systems owned by the user\'s account, with a current upload reporting the given rule, are listed.  Systems are simply listed by Insights Inventory UUID.
* @param {RuleSystemsRetrieveParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const ruleSystemsRetrieveParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([RuleSystemsRetrieveParams] | [string, boolean, boolean, Array<string>, boolean, RuleSystemsRetrieveFormatEnum, Array<string>, string, Array<string>, Array<RuleSystemsRetrieveSortEnum>, RuleSystemsRetrieveSystemTypeEnum, Array<string>, Array<RuleSystemsRetrieveUpdateMethodEnum>, AxiosRequestConfig])) => {
    const params = isRuleSystemsRetrieveObjectParams(config) ? config[0] : ['ruleId', 'filterSystemProfileAnsible', 'filterSystemProfileMssql', 'filterSystemProfileSapSidsContains', 'filterSystemProfileSapSystem', 'format', 'groups', 'name', 'rhelVersion', 'sort', 'systemType', 'tags', 'updateMethod', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RuleSystemsRetrieveParams;
    const { ruleId, filterSystemProfileAnsible, filterSystemProfileMssql, filterSystemProfileSapSidsContains, filterSystemProfileSapSystem, format, groups, name, rhelVersion, sort, systemType, tags, updateMethod, options = {} } = params;
    const localVarPath = `/api/insights/v1/rule/{rule_id}/systems/`
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

    if (format !== undefined) {
        localVarQueryParameter['format'] = format;
    }

    if (groups) {
        localVarQueryParameter['groups'] = groups;
    }

    if (name !== undefined) {
        localVarQueryParameter['name'] = name;
    }

    if (rhelVersion) {
        localVarQueryParameter['rhel_version'] = rhelVersion;
    }

    if (sort) {
        localVarQueryParameter['sort'] = sort;
    }

    if (systemType !== undefined) {
        localVarQueryParameter['system_type'] = systemType;
    }

    if (tags) {
        localVarQueryParameter['tags'] = tags;
    }

    if (updateMethod) {
        localVarQueryParameter['update_method'] = updateMethod;
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

    return sendRequest<RuleSystemsRetrieveReturnType>(Promise.resolve(args));
}

export default ruleSystemsRetrieveParamCreator;
