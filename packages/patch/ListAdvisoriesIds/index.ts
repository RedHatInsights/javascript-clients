// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersIDsPlainResponse, UtilsErrorResponse } from '../types';


export type ListAdvisoriesIdsParams = {
  /**
  * Limit for paging
  * @type { number }
  * @memberof ListAdvisoriesIdsApi
  */
  limit?: number,
  /**
  * Offset for paging
  * @type { number }
  * @memberof ListAdvisoriesIdsApi
  */
  offset?: number,
  /**
  * Sort field
  * @type { ListAdvisoriesIdsSortEnum }
  * @memberof ListAdvisoriesIdsApi
  */
  sort?: ListAdvisoriesIdsSortEnum,
  /**
  * Find matching text
  * @type { string }
  * @memberof ListAdvisoriesIdsApi
  */
  search?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisoriesIdsApi
  */
  filterId?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisoriesIdsApi
  */
  filterDescription?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisoriesIdsApi
  */
  filterPublicDate?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisoriesIdsApi
  */
  filterSynopsis?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisoriesIdsApi
  */
  filterAdvisoryType?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisoriesIdsApi
  */
  filterAdvisoryTypeName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisoriesIdsApi
  */
  filterSeverity?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisoriesIdsApi
  */
  filterInstallableSystems?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisoriesIdsApi
  */
  filterApplicableSystems?: string,
  /**
  * Tag filter
  * @type { Array<string> }
  * @memberof ListAdvisoriesIdsApi
  */
  tags?: Array<string>,
  /**
  * Filter systems by inventory groups
  * @type { Array<string> }
  * @memberof ListAdvisoriesIdsApi
  */
  filterGroupName?: Array<string>,
  /**
  * Filter only SAP systems
  * @type { string }
  * @memberof ListAdvisoriesIdsApi
  */
  filterSystemProfileSapSystem?: string,
  /**
  * Filter systems by their SAP SIDs
  * @type { Array<string> }
  * @memberof ListAdvisoriesIdsApi
  */
  filterSystemProfileSapSids?: Array<string>,
  /**
  * Filter systems by ansible
  * @type { string }
  * @memberof ListAdvisoriesIdsApi
  */
  filterSystemProfileAnsible?: string,
  /**
  * Filter systems by ansible version
  * @type { string }
  * @memberof ListAdvisoriesIdsApi
  */
  filterSystemProfileAnsibleControllerVersion?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof ListAdvisoriesIdsApi
  */
  filterSystemProfileMssql?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof ListAdvisoriesIdsApi
  */
  filterSystemProfileMssqlVersion?: string,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ListAdvisoriesIdsSortEnum = {
    Id: 'id',
    Name: 'name',
    AdvisoryType: 'advisory_type',
    Synopsis: 'synopsis',
    PublicDate: 'public_date',
    ApplicableSystems: 'applicable_systems'
} as const;
export type ListAdvisoriesIdsSortEnum = typeof ListAdvisoriesIdsSortEnum[keyof typeof ListAdvisoriesIdsSortEnum];

export type ListAdvisoriesIdsReturnType = AxiosPromise<ControllersIDsPlainResponse>;

const isListAdvisoriesIdsObjectParams = (params: [ListAdvisoriesIdsParams] | unknown[]): params is [ListAdvisoriesIdsParams] => {
  return params.length === 1 && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true
}
/**
* Show me all applicable advisories for all my systems
* @summary Show me all applicable advisories for all my systems
* @param {ListAdvisoriesIdsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listAdvisoriesIdsParamCreator = async (...config: ([ListAdvisoriesIdsParams] | [number, number, ListAdvisoriesIdsSortEnum, string, string, string, string, string, string, string, string, string, string, Array<string>, Array<string>, string, Array<string>, string, string, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListAdvisoriesIdsObjectParams(config) ? config[0] : ['limit', 'offset', 'sort', 'search', 'filterId', 'filterDescription', 'filterPublicDate', 'filterSynopsis', 'filterAdvisoryType', 'filterAdvisoryTypeName', 'filterSeverity', 'filterInstallableSystems', 'filterApplicableSystems', 'tags', 'filterGroupName', 'filterSystemProfileSapSystem', 'filterSystemProfileSapSids', 'filterSystemProfileAnsible', 'filterSystemProfileAnsibleControllerVersion', 'filterSystemProfileMssql', 'filterSystemProfileMssqlVersion', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListAdvisoriesIdsParams;
    const { limit, offset, sort, search, filterId, filterDescription, filterPublicDate, filterSynopsis, filterAdvisoryType, filterAdvisoryTypeName, filterSeverity, filterInstallableSystems, filterApplicableSystems, tags, filterGroupName, filterSystemProfileSapSystem, filterSystemProfileSapSids, filterSystemProfileAnsible, filterSystemProfileAnsibleControllerVersion, filterSystemProfileMssql, filterSystemProfileMssqlVersion, options = {} } = params;
    const localVarPath = `/ids/advisories`;
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

    if (filterAdvisoryType !== undefined) {
        localVarQueryParameter['filter[advisory_type]'] = filterAdvisoryType;
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

export default listAdvisoriesIdsParamCreator;
