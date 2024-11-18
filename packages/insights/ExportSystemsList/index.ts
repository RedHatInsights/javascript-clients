// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { System } from '../types';


export type ExportSystemsListParams = {
  /**
  * Display systems with this text in their display_name
  * @type { string }
  * @memberof ExportSystemsListApi
  */
  displayName?: string,
  /**
  *
  * @type { ExportSystemsListFormatEnum }
  * @memberof ExportSystemsListApi
  */
  format?: ExportSystemsListFormatEnum,
  /**
  * List of Inventory host group names
  * @type { Array<string> }
  * @memberof ExportSystemsListApi
  */
  groups?: Array<string>,
  /**
  * Display systems with this text in their rule_id
  * @type { string }
  * @memberof ExportSystemsListApi
  */
  ruleId?: string,
  /**
  * Order by this field
  * @type { ExportSystemsListSortEnum }
  * @memberof ExportSystemsListApi
  */
  sort?: ExportSystemsListSortEnum,
  /**
  * Search for systems with this updater type
  * @type { Array<ExportSystemsListUpdateMethodEnum> }
  * @memberof ExportSystemsListApi
  */
  updateMethod?: Array<ExportSystemsListUpdateMethodEnum>,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ExportSystemsListFormatEnum = {
    Csv: 'csv',
    Json: 'json'
} as const;
export type ExportSystemsListFormatEnum = typeof ExportSystemsListFormatEnum[keyof typeof ExportSystemsListFormatEnum];
/**
  * @export
  * @enum {string}
  */
export const ExportSystemsListSortEnum = {
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
export type ExportSystemsListSortEnum = typeof ExportSystemsListSortEnum[keyof typeof ExportSystemsListSortEnum];
/**
  * @export
  * @enum {string}
  */
export const ExportSystemsListUpdateMethodEnum = {
    Dnfyum: 'dnfyum',
    Ostree: 'ostree'
} as const;
export type ExportSystemsListUpdateMethodEnum = typeof ExportSystemsListUpdateMethodEnum[keyof typeof ExportSystemsListUpdateMethodEnum];

export type ExportSystemsListReturnType = AxiosPromise<Array<System>>;

const isExportSystemsListObjectParams = (params: [ExportSystemsListParams] | unknown[]): params is [ExportSystemsListParams] => {
  return params.length === 1 && true && true && true && true && true && true
}
/**
* List of systems with details and hit counts.  Systems can be sorted and filtered by display name and rule id.
* @param {ExportSystemsListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const exportSystemsListParamCreator = async (...config: ([ExportSystemsListParams] | [string, ExportSystemsListFormatEnum, Array<string>, string, ExportSystemsListSortEnum, Array<ExportSystemsListUpdateMethodEnum>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isExportSystemsListObjectParams(config) ? config[0] : ['displayName', 'format', 'groups', 'ruleId', 'sort', 'updateMethod', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ExportSystemsListParams;
    const { displayName, format, groups, ruleId, sort, updateMethod, options = {} } = params;
    const localVarPath = `/api/insights/v1/export/systems/`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (displayName !== undefined) {
        localVarQueryParameter['display_name'] = displayName;
    }

    if (format !== undefined) {
        localVarQueryParameter['format'] = format;
    }

    if (groups) {
        localVarQueryParameter['groups'] = groups;
    }

    if (ruleId !== undefined) {
        localVarQueryParameter['rule_id'] = ruleId;
    }

    if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort;
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

export default exportSystemsListParamCreator;
