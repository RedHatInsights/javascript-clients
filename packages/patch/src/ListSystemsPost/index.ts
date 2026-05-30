// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersSystemsListPostRequest, ControllersSystemsResponse, UtilsErrorResponse } from '../types';


export type ListSystemsPostParams = {
  /**
  * Inventory IDs
  * @type { ControllersSystemsListPostRequest }
  * @memberof ListSystemsPostApi
  */
  body: ControllersSystemsListPostRequest,
  /**
  * Limit for paging
  * @type { number }
  * @memberof ListSystemsPostApi
  */
  limit?: number,
  /**
  * Offset for paging
  * @type { number }
  * @memberof ListSystemsPostApi
  */
  offset?: number,
  /**
  * Sort field
  * @type { ListSystemsPostSortEnum }
  * @memberof ListSystemsPostApi
  */
  sort?: ListSystemsPostSortEnum,
  /**
  * Find matching text
  * @type { string }
  * @memberof ListSystemsPostApi
  */
  search?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsPostApi
  */
  filterDisplayName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsPostApi
  */
  filterLastEvaluation?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsPostApi
  */
  filterLastUpload?: string,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsPostApi
  */
  filterRhsaCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsPostApi
  */
  filterRhbaCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsPostApi
  */
  filterRheaCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsPostApi
  */
  filterOtherCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsPostApi
  */
  filterInstallableRhsaCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsPostApi
  */
  filterInstallableRhbaCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsPostApi
  */
  filterInstallableRheaCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsPostApi
  */
  filterInstallableOtherCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsPostApi
  */
  filterApplicableRhsaCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsPostApi
  */
  filterApplicableRhbaCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsPostApi
  */
  filterApplicableRheaCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsPostApi
  */
  filterApplicableOtherCount?: number,
  /**
  * Filter
  * @type { boolean }
  * @memberof ListSystemsPostApi
  */
  filterStale?: boolean,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsPostApi
  */
  filterPackagesInstalled?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsPostApi
  */
  filterPackagesInstallable?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsPostApi
  */
  filterPackagesApplicable?: number,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsPostApi
  */
  filterStaleTimestamp?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsPostApi
  */
  filterStaleWarningTimestamp?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsPostApi
  */
  filterCulledTimestamp?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsPostApi
  */
  filterCreated?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsPostApi
  */
  filterBaselineName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsPostApi
  */
  filterTemplateName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsPostApi
  */
  filterTemplateUuid?: string,
  /**
  * Filter
  * @type { boolean }
  * @memberof ListSystemsPostApi
  */
  filterSatelliteManaged?: boolean,
  /**
  * Filter
  * @type { boolean }
  * @memberof ListSystemsPostApi
  */
  filterBuiltPkgcache?: boolean,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsPostApi
  */
  filterArch?: string,
  /**
  * Filter OS version
  * @type { string }
  * @memberof ListSystemsPostApi
  */
  filterOs?: string,
  /**
  * Filter OS name
  * @type { string }
  * @memberof ListSystemsPostApi
  */
  filterOsname?: string,
  /**
  * Filter OS major version
  * @type { string }
  * @memberof ListSystemsPostApi
  */
  filterOsmajor?: string,
  /**
  * Filter OS minor version
  * @type { string }
  * @memberof ListSystemsPostApi
  */
  filterOsminor?: string,
  /**
  * Tag filter
  * @type { Array<string> }
  * @memberof ListSystemsPostApi
  */
  tags?: Array<string>,
  /**
  * Filter systems by inventory groups
  * @type { Array<string> }
  * @memberof ListSystemsPostApi
  */
  filterGroupName?: Array<string>,
  /**
  * Filter only SAP systems
  * @type { boolean }
  * @memberof ListSystemsPostApi
  */
  filterSystemProfileSapSystem?: boolean,
  /**
  * Filter systems by their SAP SIDs
  * @type { Array<string> }
  * @memberof ListSystemsPostApi
  */
  filterSystemProfileSapSids?: Array<string>,
  /**
  * Filter systems by ansible
  * @type { string }
  * @memberof ListSystemsPostApi
  */
  filterSystemProfileAnsible?: string,
  /**
  * Filter systems by ansible version
  * @type { string }
  * @memberof ListSystemsPostApi
  */
  filterSystemProfileAnsibleControllerVersion?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof ListSystemsPostApi
  */
  filterSystemProfileMssql?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof ListSystemsPostApi
  */
  filterSystemProfileMssqlVersion?: string,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ListSystemsPostSortEnum = {
    Id: 'id',
    DisplayName: 'display_name',
    LastUpload: 'last_upload',
    RhsaCount: 'rhsa_count',
    RhbaCount: 'rhba_count',
    RheaCount: 'rhea_count',
    OtherCount: 'other_count',
    Stale: 'stale',
    PackagesInstalled: 'packages_installed',
    BaselineName: 'baseline_name',
    Groups: 'groups',
    SatelliteManaged: 'satellite_managed',
    BuiltPkgcache: 'built_pkgcache'
} as const;
export type ListSystemsPostSortEnum = typeof ListSystemsPostSortEnum[keyof typeof ListSystemsPostSortEnum];

export type ListSystemsPostReturnType = ControllersSystemsResponse;

const isListSystemsPostObjectParams = (params: [ListSystemsPostParams] | unknown[]): params is [ListSystemsPostParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'body')
  }
  return false
}
/**
* Same response as GET /systems, restricted to the given inventory IDs. Use query parameters for paging, sort, search, and filters.
* @summary List systems by inventory IDs
* @param {ListSystemsPostParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listSystemsPostParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ListSystemsPostParams] | [ControllersSystemsListPostRequest, number, number, ListSystemsPostSortEnum, string, string, string, string, number, number, number, number, number, number, number, number, number, number, number, number, boolean, number, number, number, string, string, string, string, string, string, string, boolean, boolean, string, string, string, string, string, Array<string>, Array<string>, boolean, Array<string>, string, string, string, string, AxiosRequestConfig])) => {
    const params = isListSystemsPostObjectParams(config) ? config[0] : ['body', 'limit', 'offset', 'sort', 'search', 'filterDisplayName', 'filterLastEvaluation', 'filterLastUpload', 'filterRhsaCount', 'filterRhbaCount', 'filterRheaCount', 'filterOtherCount', 'filterInstallableRhsaCount', 'filterInstallableRhbaCount', 'filterInstallableRheaCount', 'filterInstallableOtherCount', 'filterApplicableRhsaCount', 'filterApplicableRhbaCount', 'filterApplicableRheaCount', 'filterApplicableOtherCount', 'filterStale', 'filterPackagesInstalled', 'filterPackagesInstallable', 'filterPackagesApplicable', 'filterStaleTimestamp', 'filterStaleWarningTimestamp', 'filterCulledTimestamp', 'filterCreated', 'filterBaselineName', 'filterTemplateName', 'filterTemplateUuid', 'filterSatelliteManaged', 'filterBuiltPkgcache', 'filterArch', 'filterOs', 'filterOsname', 'filterOsmajor', 'filterOsminor', 'tags', 'filterGroupName', 'filterSystemProfileSapSystem', 'filterSystemProfileSapSids', 'filterSystemProfileAnsible', 'filterSystemProfileAnsibleControllerVersion', 'filterSystemProfileMssql', 'filterSystemProfileMssqlVersion', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListSystemsPostParams;
    const { body, limit, offset, sort, search, filterDisplayName, filterLastEvaluation, filterLastUpload, filterRhsaCount, filterRhbaCount, filterRheaCount, filterOtherCount, filterInstallableRhsaCount, filterInstallableRhbaCount, filterInstallableRheaCount, filterInstallableOtherCount, filterApplicableRhsaCount, filterApplicableRhbaCount, filterApplicableRheaCount, filterApplicableOtherCount, filterStale, filterPackagesInstalled, filterPackagesInstallable, filterPackagesApplicable, filterStaleTimestamp, filterStaleWarningTimestamp, filterCulledTimestamp, filterCreated, filterBaselineName, filterTemplateName, filterTemplateUuid, filterSatelliteManaged, filterBuiltPkgcache, filterArch, filterOs, filterOsname, filterOsmajor, filterOsminor, tags, filterGroupName, filterSystemProfileSapSystem, filterSystemProfileSapSids, filterSystemProfileAnsible, filterSystemProfileAnsibleControllerVersion, filterSystemProfileMssql, filterSystemProfileMssqlVersion, options = {} } = params;
    const localVarPath = `/systems`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
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

    if (filterInstallableRhsaCount !== undefined) {
        localVarQueryParameter['filter[installable_rhsa_count]'] = filterInstallableRhsaCount;
    }

    if (filterInstallableRhbaCount !== undefined) {
        localVarQueryParameter['filter[installable_rhba_count]'] = filterInstallableRhbaCount;
    }

    if (filterInstallableRheaCount !== undefined) {
        localVarQueryParameter['filter[installable_rhea_count]'] = filterInstallableRheaCount;
    }

    if (filterInstallableOtherCount !== undefined) {
        localVarQueryParameter['filter[installable_other_count]'] = filterInstallableOtherCount;
    }

    if (filterApplicableRhsaCount !== undefined) {
        localVarQueryParameter['filter[applicable_rhsa_count]'] = filterApplicableRhsaCount;
    }

    if (filterApplicableRhbaCount !== undefined) {
        localVarQueryParameter['filter[applicable_rhba_count]'] = filterApplicableRhbaCount;
    }

    if (filterApplicableRheaCount !== undefined) {
        localVarQueryParameter['filter[applicable_rhea_count]'] = filterApplicableRheaCount;
    }

    if (filterApplicableOtherCount !== undefined) {
        localVarQueryParameter['filter[applicable_other_count]'] = filterApplicableOtherCount;
    }

    if (filterStale !== undefined) {
        localVarQueryParameter['filter[stale]'] = filterStale;
    }

    if (filterPackagesInstalled !== undefined) {
        localVarQueryParameter['filter[packages_installed]'] = filterPackagesInstalled;
    }

    if (filterPackagesInstallable !== undefined) {
        localVarQueryParameter['filter[packages_installable]'] = filterPackagesInstallable;
    }

    if (filterPackagesApplicable !== undefined) {
        localVarQueryParameter['filter[packages_applicable]'] = filterPackagesApplicable;
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

    if (filterBaselineName !== undefined) {
        localVarQueryParameter['filter[baseline_name]'] = filterBaselineName;
    }

    if (filterTemplateName !== undefined) {
        localVarQueryParameter['filter[template_name]'] = filterTemplateName;
    }

    if (filterTemplateUuid !== undefined) {
        localVarQueryParameter['filter[template_uuid]'] = filterTemplateUuid;
    }

    if (filterSatelliteManaged !== undefined) {
        localVarQueryParameter['filter[satellite_managed]'] = filterSatelliteManaged;
    }

    if (filterBuiltPkgcache !== undefined) {
        localVarQueryParameter['filter[built_pkgcache]'] = filterBuiltPkgcache;
    }

    if (filterArch !== undefined) {
        localVarQueryParameter['filter[arch]'] = filterArch;
    }

    if (filterOs !== undefined) {
        localVarQueryParameter['filter[os]'] = filterOs;
    }

    if (filterOsname !== undefined) {
        localVarQueryParameter['filter[osname]'] = filterOsname;
    }

    if (filterOsmajor !== undefined) {
        localVarQueryParameter['filter[osmajor]'] = filterOsmajor;
    }

    if (filterOsminor !== undefined) {
        localVarQueryParameter['filter[osminor]'] = filterOsminor;
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



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: body,
        auth:[
        {
        // authentication RhIdentity required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };

    return sendRequest<ListSystemsPostReturnType>(Promise.resolve(args));
}

export default listSystemsPostParamCreator;
