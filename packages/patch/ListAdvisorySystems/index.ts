// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersAdvisorySystemsResponse, UtilsErrorResponse } from '../types';


export type ListAdvisorySystemsParams = {
  /**
  * Advisory ID
  * @type { string }
  * @memberof ListAdvisorySystemsApi
  */
  advisoryId: string,
  /**
  * Limit for paging
  * @type { number }
  * @memberof ListAdvisorySystemsApi
  */
  limit?: number,
  /**
  * Offset for paging
  * @type { number }
  * @memberof ListAdvisorySystemsApi
  */
  offset?: number,
  /**
  * Sort field
  * @type { ListAdvisorySystemsSortEnum }
  * @memberof ListAdvisorySystemsApi
  */
  sort?: ListAdvisorySystemsSortEnum,
  /**
  * Find matching text
  * @type { string }
  * @memberof ListAdvisorySystemsApi
  */
  search?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisorySystemsApi
  */
  filterId?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisorySystemsApi
  */
  filterDisplayName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisorySystemsApi
  */
  filterStale?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisorySystemsApi
  */
  filterStatus?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisorySystemsApi
  */
  filterTemplate?: string,
  /**
  * Filter OS version
  * @type { string }
  * @memberof ListAdvisorySystemsApi
  */
  filterOs?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisorySystemsApi
  */
  filterSatelliteManaged?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisorySystemsApi
  */
  filterBuiltPkgcache?: string,
  /**
  * Tag filter
  * @type { Array<string> }
  * @memberof ListAdvisorySystemsApi
  */
  tags?: Array<string>,
  /**
  * Filter systems by inventory groups
  * @type { Array<string> }
  * @memberof ListAdvisorySystemsApi
  */
  filterGroupName?: Array<string>,
  /**
  * Filter only SAP systems
  * @type { string }
  * @memberof ListAdvisorySystemsApi
  */
  filterSystemProfileSapSystem?: string,
  /**
  * Filter systems by their SAP SIDs
  * @type { Array<string> }
  * @memberof ListAdvisorySystemsApi
  */
  filterSystemProfileSapSids?: Array<string>,
  /**
  * Filter systems by ansible
  * @type { string }
  * @memberof ListAdvisorySystemsApi
  */
  filterSystemProfileAnsible?: string,
  /**
  * Filter systems by ansible version
  * @type { string }
  * @memberof ListAdvisorySystemsApi
  */
  filterSystemProfileAnsibleControllerVersion?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof ListAdvisorySystemsApi
  */
  filterSystemProfileMssql?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof ListAdvisorySystemsApi
  */
  filterSystemProfileMssqlVersion?: string,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ListAdvisorySystemsSortEnum = {
    Id: 'id',
    DisplayName: 'display_name',
    LastEvaluation: 'last_evaluation',
    LastUpload: 'last_upload',
    Stale: 'stale',
    Status: 'status',
    Template: 'template',
    Groups: 'groups',
    SatelliteManaged: 'satellite_managed',
    BuiltPkgcache: 'built_pkgcache'
} as const;
export type ListAdvisorySystemsSortEnum = typeof ListAdvisorySystemsSortEnum[keyof typeof ListAdvisorySystemsSortEnum];

export type ListAdvisorySystemsReturnType = AxiosPromise<ControllersAdvisorySystemsResponse>;

const isListAdvisorySystemsObjectParams = (params: [ListAdvisorySystemsParams] | unknown[]): params is [ListAdvisorySystemsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'advisoryId') && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true
}
/**
* Show me systems on which the given advisory is applicable
* @summary Show me systems on which the given advisory is applicable
* @param {ListAdvisorySystemsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listAdvisorySystemsParamCreator = async (...config: ([ListAdvisorySystemsParams] | [string, number, number, ListAdvisorySystemsSortEnum, string, string, string, string, string, string, string, string, string, Array<string>, Array<string>, string, Array<string>, string, string, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListAdvisorySystemsObjectParams(config) ? config[0] : ['advisoryId', 'limit', 'offset', 'sort', 'search', 'filterId', 'filterDisplayName', 'filterStale', 'filterStatus', 'filterTemplate', 'filterOs', 'filterSatelliteManaged', 'filterBuiltPkgcache', 'tags', 'filterGroupName', 'filterSystemProfileSapSystem', 'filterSystemProfileSapSids', 'filterSystemProfileAnsible', 'filterSystemProfileAnsibleControllerVersion', 'filterSystemProfileMssql', 'filterSystemProfileMssqlVersion', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListAdvisorySystemsParams;
    const { advisoryId, limit, offset, sort, search, filterId, filterDisplayName, filterStale, filterStatus, filterTemplate, filterOs, filterSatelliteManaged, filterBuiltPkgcache, tags, filterGroupName, filterSystemProfileSapSystem, filterSystemProfileSapSids, filterSystemProfileAnsible, filterSystemProfileAnsibleControllerVersion, filterSystemProfileMssql, filterSystemProfileMssqlVersion, options = {} } = params;
    const localVarPath = `/advisories/{advisory_id}/systems`
        .replace(`{${"advisory_id"}}`, encodeURIComponent(String(advisoryId)));
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

    if (filterDisplayName !== undefined) {
        localVarQueryParameter['filter[display_name]'] = filterDisplayName;
    }

    if (filterStale !== undefined) {
        localVarQueryParameter['filter[stale]'] = filterStale;
    }

    if (filterStatus !== undefined) {
        localVarQueryParameter['filter[status]'] = filterStatus;
    }

    if (filterTemplate !== undefined) {
        localVarQueryParameter['filter[template]'] = filterTemplate;
    }

    if (filterOs !== undefined) {
        localVarQueryParameter['filter[os]'] = filterOs;
    }

    if (filterSatelliteManaged !== undefined) {
        localVarQueryParameter['filter[satellite_managed]'] = filterSatelliteManaged;
    }

    if (filterBuiltPkgcache !== undefined) {
        localVarQueryParameter['filter[built_pkgcache]'] = filterBuiltPkgcache;
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

export default listAdvisorySystemsParamCreator;
