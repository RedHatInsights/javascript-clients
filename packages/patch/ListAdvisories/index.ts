// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersAdvisoriesResponse, UtilsErrorResponse } from '../types';


export type ListAdvisoriesParams = {
  /**
  * Limit for paging
  * @type { number }
  * @memberof ListAdvisoriesApi
  */
  limit?: number,
  /**
  * Offset for paging
  * @type { number }
  * @memberof ListAdvisoriesApi
  */
  offset?: number,
  /**
  * Sort field
  * @type { ListAdvisoriesSortEnum }
  * @memberof ListAdvisoriesApi
  */
  sort?: ListAdvisoriesSortEnum,
  /**
  * Find matching text
  * @type { string }
  * @memberof ListAdvisoriesApi
  */
  search?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisoriesApi
  */
  filterId?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisoriesApi
  */
  filterDescription?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisoriesApi
  */
  filterPublicDate?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisoriesApi
  */
  filterSynopsis?: string,
  /**
  * Filter
  * @type { ListAdvisoriesFilterAdvisoryTypeNameEnum }
  * @memberof ListAdvisoriesApi
  */
  filterAdvisoryTypeName?: ListAdvisoriesFilterAdvisoryTypeNameEnum,
  /**
  * Filter
  * @type { number }
  * @memberof ListAdvisoriesApi
  */
  filterSeverity?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListAdvisoriesApi
  */
  filterInstallableSystems?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListAdvisoriesApi
  */
  filterApplicableSystems?: number,
  /**
  * Tag filter
  * @type { Array<string> }
  * @memberof ListAdvisoriesApi
  */
  tags?: Array<string>,
  /**
  * Filter systems by inventory groups
  * @type { Array<string> }
  * @memberof ListAdvisoriesApi
  */
  filterGroupName?: Array<string>,
  /**
  * Filter only SAP systems
  * @type { boolean }
  * @memberof ListAdvisoriesApi
  */
  filterSystemProfileSapSystem?: boolean,
  /**
  * Filter systems by their SAP SIDs
  * @type { Array<string> }
  * @memberof ListAdvisoriesApi
  */
  filterSystemProfileSapSids?: Array<string>,
  /**
  * Filter systems by ansible
  * @type { string }
  * @memberof ListAdvisoriesApi
  */
  filterSystemProfileAnsible?: string,
  /**
  * Filter systems by ansible version
  * @type { string }
  * @memberof ListAdvisoriesApi
  */
  filterSystemProfileAnsibleControllerVersion?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof ListAdvisoriesApi
  */
  filterSystemProfileMssql?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof ListAdvisoriesApi
  */
  filterSystemProfileMssqlVersion?: string,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ListAdvisoriesSortEnum = {
    Id: 'id',
    AdvisoryTypeName: 'advisory_type_name',
    Synopsis: 'synopsis',
    PublicDate: 'public_date',
    Severity: 'severity',
    InstallableSystems: 'installable_systems',
    ApplicableSystems: 'applicable_systems'
} as const;
export type ListAdvisoriesSortEnum = typeof ListAdvisoriesSortEnum[keyof typeof ListAdvisoriesSortEnum];
/**
  * @export
  * @enum {string}
  */
export const ListAdvisoriesFilterAdvisoryTypeNameEnum = {
    Unknown: 'unknown',
    Unspecified: 'unspecified',
    Other: 'other',
    Enhancement: 'enhancement',
    Bugfix: 'bugfix',
    Security: 'security'
} as const;
export type ListAdvisoriesFilterAdvisoryTypeNameEnum = typeof ListAdvisoriesFilterAdvisoryTypeNameEnum[keyof typeof ListAdvisoriesFilterAdvisoryTypeNameEnum];

export type ListAdvisoriesReturnType = AxiosPromise<ControllersAdvisoriesResponse>;

const isListAdvisoriesObjectParams = (params: [ListAdvisoriesParams] | unknown[]): params is [ListAdvisoriesParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Show me all applicable advisories for all my systems
* @summary Show me all applicable advisories for all my systems
* @param {ListAdvisoriesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listAdvisoriesParamCreator = async (...config: ([ListAdvisoriesParams] | [number, number, ListAdvisoriesSortEnum, string, string, string, string, string, ListAdvisoriesFilterAdvisoryTypeNameEnum, number, number, number, Array<string>, Array<string>, boolean, Array<string>, string, string, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListAdvisoriesObjectParams(config) ? config[0] : ['limit', 'offset', 'sort', 'search', 'filterId', 'filterDescription', 'filterPublicDate', 'filterSynopsis', 'filterAdvisoryTypeName', 'filterSeverity', 'filterInstallableSystems', 'filterApplicableSystems', 'tags', 'filterGroupName', 'filterSystemProfileSapSystem', 'filterSystemProfileSapSids', 'filterSystemProfileAnsible', 'filterSystemProfileAnsibleControllerVersion', 'filterSystemProfileMssql', 'filterSystemProfileMssqlVersion', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListAdvisoriesParams;
    const { limit, offset, sort, search, filterId, filterDescription, filterPublicDate, filterSynopsis, filterAdvisoryTypeName, filterSeverity, filterInstallableSystems, filterApplicableSystems, tags, filterGroupName, filterSystemProfileSapSystem, filterSystemProfileSapSids, filterSystemProfileAnsible, filterSystemProfileAnsibleControllerVersion, filterSystemProfileMssql, filterSystemProfileMssqlVersion, options = {} } = params;
    const localVarPath = `/advisories`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }

    if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort;
    }

    if (search !== undefined) {
        localVarQueryParameter['search'] = search;
    }

    if (filterId !== undefined) {
        localVarQueryParameter['filter[id]'] = filterId;
    }

    if (filterDescription !== undefined) {
        localVarQueryParameter['filter[description]'] = filterDescription;
    }

    if (filterPublicDate !== undefined) {
        localVarQueryParameter['filter[public_date]'] = filterPublicDate;
    }

    if (filterSynopsis !== undefined) {
        localVarQueryParameter['filter[synopsis]'] = filterSynopsis;
    }

    if (filterAdvisoryTypeName !== undefined) {
        localVarQueryParameter['filter[advisory_type_name]'] = filterAdvisoryTypeName;
    }

    if (filterSeverity !== undefined) {
        localVarQueryParameter['filter[severity]'] = filterSeverity;
    }

    if (filterInstallableSystems !== undefined) {
        localVarQueryParameter['filter[installable_systems]'] = filterInstallableSystems;
    }

    if (filterApplicableSystems !== undefined) {
        localVarQueryParameter['filter[applicable_systems]'] = filterApplicableSystems;
    }

    if (tags) {
        localVarQueryParameter['tags'] = tags;
    }

    if (filterGroupName) {
        localVarQueryParameter['filter[group_name]'] = filterGroupName;
    }

    if (filterSystemProfileSapSystem !== undefined) {
        localVarQueryParameter['filter[system_profile][sap_system]'] = filterSystemProfileSapSystem;
    }

    if (filterSystemProfileSapSids) {
        localVarQueryParameter['filter[system_profile][sap_sids]'] = filterSystemProfileSapSids;
    }

    if (filterSystemProfileAnsible !== undefined) {
        localVarQueryParameter['filter[system_profile][ansible]'] = filterSystemProfileAnsible;
    }

    if (filterSystemProfileAnsibleControllerVersion !== undefined) {
        localVarQueryParameter['filter[system_profile][ansible][controller_version]'] = filterSystemProfileAnsibleControllerVersion;
    }

    if (filterSystemProfileMssql !== undefined) {
        localVarQueryParameter['filter[system_profile][mssql]'] = filterSystemProfileMssql;
    }

    if (filterSystemProfileMssqlVersion !== undefined) {
        localVarQueryParameter['filter[system_profile][mssql][version]'] = filterSystemProfileMssqlVersion;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        auth:[
        {
        // authentication RhIdentity required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };
}

export default listAdvisoriesParamCreator;
