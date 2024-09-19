// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersIDsStatusResponse, UtilsErrorResponse } from '../types';


export type ListAdvisorySystemsIdsParams = {
  /**
  * Advisory ID
  * @type { string }
  * @memberof ListAdvisorySystemsIdsApi
  */
  advisoryId: string,
  /**
  * Limit for paging
  * @type { number }
  * @memberof ListAdvisorySystemsIdsApi
  */
  limit?: number,
  /**
  * Offset for paging
  * @type { number }
  * @memberof ListAdvisorySystemsIdsApi
  */
  offset?: number,
  /**
  * Sort field
  * @type { ListAdvisorySystemsIdsSortEnum }
  * @memberof ListAdvisorySystemsIdsApi
  */
  sort?: ListAdvisorySystemsIdsSortEnum,
  /**
  * Find matching text
  * @type { string }
  * @memberof ListAdvisorySystemsIdsApi
  */
  search?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisorySystemsIdsApi
  */
  filterId?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisorySystemsIdsApi
  */
  filterInsightsId?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisorySystemsIdsApi
  */
  filterDisplayName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisorySystemsIdsApi
  */
  filterLastEvaluation?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisorySystemsIdsApi
  */
  filterLastUpload?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisorySystemsIdsApi
  */
  filterRhsaCount?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisorySystemsIdsApi
  */
  filterRhbaCount?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisorySystemsIdsApi
  */
  filterRheaCount?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisorySystemsIdsApi
  */
  filterOtherCount?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisorySystemsIdsApi
  */
  filterSatelliteManaged?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisorySystemsIdsApi
  */
  filterStale?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisorySystemsIdsApi
  */
  filterStaleTimestamp?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisorySystemsIdsApi
  */
  filterStaleWarningTimestamp?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisorySystemsIdsApi
  */
  filterCulledTimestamp?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisorySystemsIdsApi
  */
  filterCreated?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisorySystemsIdsApi
  */
  filterOsname?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisorySystemsIdsApi
  */
  filterOsminor?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisorySystemsIdsApi
  */
  filterOsmajor?: string,
  /**
  * Filter OS version
  * @type { string }
  * @memberof ListAdvisorySystemsIdsApi
  */
  filterOs?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListAdvisorySystemsIdsApi
  */
  filterBuiltPkgcache?: string,
  /**
  * Tag filter
  * @type { Array<string> }
  * @memberof ListAdvisorySystemsIdsApi
  */
  tags?: Array<string>,
  /**
  * Filter systems by inventory groups
  * @type { Array<string> }
  * @memberof ListAdvisorySystemsIdsApi
  */
  filterGroupName?: Array<string>,
  /**
  * Filter only SAP systems
  * @type { string }
  * @memberof ListAdvisorySystemsIdsApi
  */
  filterSystemProfileSapSystem?: string,
  /**
  * Filter systems by their SAP SIDs
  * @type { Array<string> }
  * @memberof ListAdvisorySystemsIdsApi
  */
  filterSystemProfileSapSids?: Array<string>,
  /**
  * Filter systems by ansible
  * @type { string }
  * @memberof ListAdvisorySystemsIdsApi
  */
  filterSystemProfileAnsible?: string,
  /**
  * Filter systems by ansible version
  * @type { string }
  * @memberof ListAdvisorySystemsIdsApi
  */
  filterSystemProfileAnsibleControllerVersion?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof ListAdvisorySystemsIdsApi
  */
  filterSystemProfileMssql?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof ListAdvisorySystemsIdsApi
  */
  filterSystemProfileMssqlVersion?: string,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ListAdvisorySystemsIdsSortEnum = {
    Id: 'id',
    DisplayName: 'display_name',
    LastEvaluation: 'last_evaluation',
    LastUpload: 'last_upload',
    RhsaCount: 'rhsa_count',
    RhbaCount: 'rhba_count',
    RheaCount: 'rhea_count',
    OtherCount: 'other_count',
    SatelliteManaged: 'satellite_managed',
    Stale: 'stale',
    BuiltPkgcache: 'built_pkgcache'
} as const;
export type ListAdvisorySystemsIdsSortEnum = typeof ListAdvisorySystemsIdsSortEnum[keyof typeof ListAdvisorySystemsIdsSortEnum];

const isListAdvisorySystemsIdsObjectParams = (params: [ListAdvisorySystemsIdsParams] | unknown[]): params is [ListAdvisorySystemsIdsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'advisoryId') && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true
}
/**
* Show me systems on which the given advisory is applicable
* @summary Show me systems on which the given advisory is applicable
* @param {ListAdvisorySystemsIdsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listAdvisorySystemsIdsParamCreator = async (...config: ([ListAdvisorySystemsIdsParams] | [string, number, number, ListAdvisorySystemsIdsSortEnum, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, Array<string>, Array<string>, string, Array<string>, string, string, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListAdvisorySystemsIdsObjectParams(config) ? config[0] : ['advisoryId', 'limit', 'offset', 'sort', 'search', 'filterId', 'filterInsightsId', 'filterDisplayName', 'filterLastEvaluation', 'filterLastUpload', 'filterRhsaCount', 'filterRhbaCount', 'filterRheaCount', 'filterOtherCount', 'filterSatelliteManaged', 'filterStale', 'filterStaleTimestamp', 'filterStaleWarningTimestamp', 'filterCulledTimestamp', 'filterCreated', 'filterOsname', 'filterOsminor', 'filterOsmajor', 'filterOs', 'filterBuiltPkgcache', 'tags', 'filterGroupName', 'filterSystemProfileSapSystem', 'filterSystemProfileSapSids', 'filterSystemProfileAnsible', 'filterSystemProfileAnsibleControllerVersion', 'filterSystemProfileMssql', 'filterSystemProfileMssqlVersion', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListAdvisorySystemsIdsParams;
    const { advisoryId, limit, offset, sort, search, filterId, filterInsightsId, filterDisplayName, filterLastEvaluation, filterLastUpload, filterRhsaCount, filterRhbaCount, filterRheaCount, filterOtherCount, filterSatelliteManaged, filterStale, filterStaleTimestamp, filterStaleWarningTimestamp, filterCulledTimestamp, filterCreated, filterOsname, filterOsminor, filterOsmajor, filterOs, filterBuiltPkgcache, tags, filterGroupName, filterSystemProfileSapSystem, filterSystemProfileSapSids, filterSystemProfileAnsible, filterSystemProfileAnsibleControllerVersion, filterSystemProfileMssql, filterSystemProfileMssqlVersion, options = {} } = params;
    const localVarPath = `/ids/advisories/{advisory_id}/systems`
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

    if (filterInsightsId !== undefined) {
        localVarQueryParameter['filter[insights_id]'] = filterInsightsId;
    }

    if (filterDisplayName !== undefined) {
        localVarQueryParameter['filter[display_name]'] = filterDisplayName;
    }

    if (filterLastEvaluation !== undefined) {
        localVarQueryParameter['filter[last_evaluation]'] = filterLastEvaluation;
    }

    if (filterLastUpload !== undefined) {
        localVarQueryParameter['filter[last_upload]'] = filterLastUpload;
    }

    if (filterRhsaCount !== undefined) {
        localVarQueryParameter['filter[rhsa_count]'] = filterRhsaCount;
    }

    if (filterRhbaCount !== undefined) {
        localVarQueryParameter['filter[rhba_count]'] = filterRhbaCount;
    }

    if (filterRheaCount !== undefined) {
        localVarQueryParameter['filter[rhea_count]'] = filterRheaCount;
    }

    if (filterOtherCount !== undefined) {
        localVarQueryParameter['filter[other_count]'] = filterOtherCount;
    }

    if (filterSatelliteManaged !== undefined) {
        localVarQueryParameter['filter[satellite_managed]'] = filterSatelliteManaged;
    }

    if (filterStale !== undefined) {
        localVarQueryParameter['filter[stale]'] = filterStale;
    }

    if (filterStaleTimestamp !== undefined) {
        localVarQueryParameter['filter[stale_timestamp]'] = filterStaleTimestamp;
    }

    if (filterStaleWarningTimestamp !== undefined) {
        localVarQueryParameter['filter[stale_warning_timestamp]'] = filterStaleWarningTimestamp;
    }

    if (filterCulledTimestamp !== undefined) {
        localVarQueryParameter['filter[culled_timestamp]'] = filterCulledTimestamp;
    }

    if (filterCreated !== undefined) {
        localVarQueryParameter['filter[created]'] = filterCreated;
    }

    if (filterOsname !== undefined) {
        localVarQueryParameter['filter[osname]'] = filterOsname;
    }

    if (filterOsminor !== undefined) {
        localVarQueryParameter['filter[osminor]'] = filterOsminor;
    }

    if (filterOsmajor !== undefined) {
        localVarQueryParameter['filter[osmajor]'] = filterOsmajor;
    }

    if (filterOs !== undefined) {
        localVarQueryParameter['filter[os]'] = filterOs;
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

export default listAdvisorySystemsIdsParamCreator;
