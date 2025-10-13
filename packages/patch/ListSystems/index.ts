// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersSystemsResponse, UtilsErrorResponse } from '../types';


export type ListSystemsParams = {
  /**
  * Limit for paging
  * @type { number }
  * @memberof ListSystemsApi
  */
  limit?: number,
  /**
  * Offset for paging
  * @type { number }
  * @memberof ListSystemsApi
  */
  offset?: number,
  /**
  * Sort field
  * @type { ListSystemsSortEnum }
  * @memberof ListSystemsApi
  */
  sort?: ListSystemsSortEnum,
  /**
  * Find matching text
  * @type { string }
  * @memberof ListSystemsApi
  */
  search?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsApi
  */
  filterId?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsApi
  */
  filterDisplayName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsApi
  */
  filterLastEvaluation?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsApi
  */
  filterLastUpload?: string,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsApi
  */
  filterRhsaCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsApi
  */
  filterRhbaCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsApi
  */
  filterRheaCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsApi
  */
  filterOtherCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsApi
  */
  filterInstallableRhsaCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsApi
  */
  filterInstallableRhbaCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsApi
  */
  filterInstallableRheaCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsApi
  */
  filterInstallableOtherCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsApi
  */
  filterApplicableRhsaCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsApi
  */
  filterApplicableRhbaCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsApi
  */
  filterApplicableRheaCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsApi
  */
  filterApplicableOtherCount?: number,
  /**
  * Filter
  * @type { boolean }
  * @memberof ListSystemsApi
  */
  filterStale?: boolean,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsApi
  */
  filterPackagesInstalled?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsApi
  */
  filterPackagesInstallable?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsApi
  */
  filterPackagesApplicable?: number,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsApi
  */
  filterStaleTimestamp?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsApi
  */
  filterStaleWarningTimestamp?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsApi
  */
  filterCulledTimestamp?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsApi
  */
  filterCreated?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsApi
  */
  filterBaselineName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsApi
  */
  filterTemplateName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsApi
  */
  filterTemplateUuid?: string,
  /**
  * Filter
  * @type { boolean }
  * @memberof ListSystemsApi
  */
  filterSatelliteManaged?: boolean,
  /**
  * Filter
  * @type { boolean }
  * @memberof ListSystemsApi
  */
  filterBuiltPkgcache?: boolean,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsApi
  */
  filterArch?: string,
  /**
  * Filter OS version
  * @type { string }
  * @memberof ListSystemsApi
  */
  filterOs?: string,
  /**
  * Filter OS name
  * @type { string }
  * @memberof ListSystemsApi
  */
  filterOsname?: string,
  /**
  * Filter OS major version
  * @type { string }
  * @memberof ListSystemsApi
  */
  filterOsmajor?: string,
  /**
  * Filter OS minor version
  * @type { string }
  * @memberof ListSystemsApi
  */
  filterOsminor?: string,
  /**
  * Tag filter
  * @type { Array<string> }
  * @memberof ListSystemsApi
  */
  tags?: Array<string>,
  /**
  * Filter systems by inventory groups
  * @type { Array<string> }
  * @memberof ListSystemsApi
  */
  filterGroupName?: Array<string>,
  /**
  * Filter only SAP systems
  * @type { boolean }
  * @memberof ListSystemsApi
  */
  filterSystemProfileSapSystem?: boolean,
  /**
  * Filter systems by their SAP SIDs
  * @type { Array<string> }
  * @memberof ListSystemsApi
  */
  filterSystemProfileSapSids?: Array<string>,
  /**
  * Filter systems by ansible
  * @type { string }
  * @memberof ListSystemsApi
  */
  filterSystemProfileAnsible?: string,
  /**
  * Filter systems by ansible version
  * @type { string }
  * @memberof ListSystemsApi
  */
  filterSystemProfileAnsibleControllerVersion?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof ListSystemsApi
  */
  filterSystemProfileMssql?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof ListSystemsApi
  */
  filterSystemProfileMssqlVersion?: string,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ListSystemsSortEnum = {
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
export type ListSystemsSortEnum = typeof ListSystemsSortEnum[keyof typeof ListSystemsSortEnum];

export type ListSystemsReturnType = AxiosPromise<ControllersSystemsResponse>;

const isListSystemsObjectParams = (params: [ListSystemsParams] | unknown[]): params is [ListSystemsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Show me all my systems
* @summary Show me all my systems
* @param {ListSystemsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listSystemsParamCreator = async (...config: ([ListSystemsParams] | [number, number, ListSystemsSortEnum, string, string, string, string, string, number, number, number, number, number, number, number, number, number, number, number, number, boolean, number, number, number, string, string, string, string, string, string, string, boolean, boolean, string, string, string, string, string, Array<string>, Array<string>, boolean, Array<string>, string, string, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListSystemsObjectParams(config) ? config[0] : ['limit', 'offset', 'sort', 'search', 'filterId', 'filterDisplayName', 'filterLastEvaluation', 'filterLastUpload', 'filterRhsaCount', 'filterRhbaCount', 'filterRheaCount', 'filterOtherCount', 'filterInstallableRhsaCount', 'filterInstallableRhbaCount', 'filterInstallableRheaCount', 'filterInstallableOtherCount', 'filterApplicableRhsaCount', 'filterApplicableRhbaCount', 'filterApplicableRheaCount', 'filterApplicableOtherCount', 'filterStale', 'filterPackagesInstalled', 'filterPackagesInstallable', 'filterPackagesApplicable', 'filterStaleTimestamp', 'filterStaleWarningTimestamp', 'filterCulledTimestamp', 'filterCreated', 'filterBaselineName', 'filterTemplateName', 'filterTemplateUuid', 'filterSatelliteManaged', 'filterBuiltPkgcache', 'filterArch', 'filterOs', 'filterOsname', 'filterOsmajor', 'filterOsminor', 'tags', 'filterGroupName', 'filterSystemProfileSapSystem', 'filterSystemProfileSapSids', 'filterSystemProfileAnsible', 'filterSystemProfileAnsibleControllerVersion', 'filterSystemProfileMssql', 'filterSystemProfileMssqlVersion', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListSystemsParams;
    const { limit, offset, sort, search, filterId, filterDisplayName, filterLastEvaluation, filterLastUpload, filterRhsaCount, filterRhbaCount, filterRheaCount, filterOtherCount, filterInstallableRhsaCount, filterInstallableRhbaCount, filterInstallableRheaCount, filterInstallableOtherCount, filterApplicableRhsaCount, filterApplicableRhbaCount, filterApplicableRheaCount, filterApplicableOtherCount, filterStale, filterPackagesInstalled, filterPackagesInstallable, filterPackagesApplicable, filterStaleTimestamp, filterStaleWarningTimestamp, filterCulledTimestamp, filterCreated, filterBaselineName, filterTemplateName, filterTemplateUuid, filterSatelliteManaged, filterBuiltPkgcache, filterArch, filterOs, filterOsname, filterOsmajor, filterOsminor, tags, filterGroupName, filterSystemProfileSapSystem, filterSystemProfileSapSids, filterSystemProfileAnsible, filterSystemProfileAnsibleControllerVersion, filterSystemProfileMssql, filterSystemProfileMssqlVersion, options = {} } = params;
    const localVarPath = `/systems`;
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

export default listSystemsParamCreator;
