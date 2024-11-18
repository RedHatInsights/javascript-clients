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
  * @type { Array<RuleSystemsRetrieveRhelVersionEnum> }
  * @memberof RuleSystemsRetrieveApi
  */
  rhelVersion?: Array<RuleSystemsRetrieveRhelVersionEnum>,
  /**
  * Order by this field
  * @type { Array<RuleSystemsRetrieveSortEnum> }
  * @memberof RuleSystemsRetrieveApi
  */
  sort?: Array<RuleSystemsRetrieveSortEnum>,
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
export const RuleSystemsRetrieveRhelVersionEnum = {
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
export type RuleSystemsRetrieveRhelVersionEnum = typeof RuleSystemsRetrieveRhelVersionEnum[keyof typeof RuleSystemsRetrieveRhelVersionEnum];
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
export const RuleSystemsRetrieveUpdateMethodEnum = {
    Dnfyum: 'dnfyum',
    Ostree: 'ostree'
} as const;
export type RuleSystemsRetrieveUpdateMethodEnum = typeof RuleSystemsRetrieveUpdateMethodEnum[keyof typeof RuleSystemsRetrieveUpdateMethodEnum];

export type RuleSystemsRetrieveReturnType = AxiosPromise<SystemsForRule>;

const isRuleSystemsRetrieveObjectParams = (params: [RuleSystemsRetrieveParams] | unknown[]): params is [RuleSystemsRetrieveParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'ruleId') && true && true && true && true && true && true && true && true && true && true && true
}
/**
* List all systems affected by this rule.  All systems owned by the user\'s account, with a current upload reporting the given rule, are listed.  Systems are simply listed by Insights Inventory UUID.
* @param {RuleSystemsRetrieveParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const ruleSystemsRetrieveParamCreator = async (...config: ([RuleSystemsRetrieveParams] | [string, boolean, boolean, Array<string>, boolean, RuleSystemsRetrieveFormatEnum, Array<string>, string, Array<RuleSystemsRetrieveRhelVersionEnum>, Array<RuleSystemsRetrieveSortEnum>, Array<string>, Array<RuleSystemsRetrieveUpdateMethodEnum>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isRuleSystemsRetrieveObjectParams(config) ? config[0] : ['ruleId', 'filterSystemProfileAnsible', 'filterSystemProfileMssql', 'filterSystemProfileSapSidsContains', 'filterSystemProfileSapSystem', 'format', 'groups', 'name', 'rhelVersion', 'sort', 'tags', 'updateMethod', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RuleSystemsRetrieveParams;
    const { ruleId, filterSystemProfileAnsible, filterSystemProfileMssql, filterSystemProfileSapSidsContains, filterSystemProfileSapSystem, format, groups, name, rhelVersion, sort, tags, updateMethod, options = {} } = params;
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

export default ruleSystemsRetrieveParamCreator;
