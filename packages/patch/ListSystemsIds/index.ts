// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersIDsSatelliteManagedResponse, UtilsErrorResponse } from '../types';


export type ListSystemsIdsParams = {
  /**
  * Limit for paging
  * @type { number }
  * @memberof ListSystemsIdsApi
  */
  limit?: number,
  /**
  * Offset for paging
  * @type { number }
  * @memberof ListSystemsIdsApi
  */
  offset?: number,
  /**
  * Sort field
  * @type { ListSystemsIdsSortEnum }
  * @memberof ListSystemsIdsApi
  */
  sort?: ListSystemsIdsSortEnum,
  /**
  * Find matching text
  * @type { string }
  * @memberof ListSystemsIdsApi
  */
  search?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsIdsApi
  */
  filterId?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsIdsApi
  */
  filterDisplayName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsIdsApi
  */
  filterLastEvaluation?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsIdsApi
  */
  filterLastUpload?: string,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsIdsApi
  */
  filterRhsaCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsIdsApi
  */
  filterRhbaCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsIdsApi
  */
  filterRheaCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsIdsApi
  */
  filterOtherCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsIdsApi
  */
  filterInstallableRhsaCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsIdsApi
  */
  filterInstallableRhbaCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsIdsApi
  */
  filterInstallableRheaCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsIdsApi
  */
  filterInstallableOtherCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsIdsApi
  */
  filterApplicableRhsaCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsIdsApi
  */
  filterApplicableRhbaCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsIdsApi
  */
  filterApplicableRheaCount?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsIdsApi
  */
  filterApplicableOtherCount?: number,
  /**
  * Filter
  * @type { boolean }
  * @memberof ListSystemsIdsApi
  */
  filterStale?: boolean,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsIdsApi
  */
  filterPackagesInstalled?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsIdsApi
  */
  filterPackagesInstallable?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListSystemsIdsApi
  */
  filterPackagesApplicable?: number,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsIdsApi
  */
  filterStaleTimestamp?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsIdsApi
  */
  filterStaleWarningTimestamp?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsIdsApi
  */
  filterCulledTimestamp?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsIdsApi
  */
  filterCreated?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsIdsApi
  */
  filterBaselineName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsIdsApi
  */
  filterTemplateName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsIdsApi
  */
  filterTemplateUuid?: string,
  /**
  * Filter OS version
  * @type { string }
  * @memberof ListSystemsIdsApi
  */
  filterOs?: string,
  /**
  * Filter OS name
  * @type { string }
  * @memberof ListSystemsIdsApi
  */
  filterOsname?: string,
  /**
  * Filter OS major version
  * @type { string }
  * @memberof ListSystemsIdsApi
  */
  filterOsmajor?: string,
  /**
  * Filter OS minor version
  * @type { string }
  * @memberof ListSystemsIdsApi
  */
  filterOsminor?: string,
  /**
  * Filter
  * @type { boolean }
  * @memberof ListSystemsIdsApi
  */
  filterSatelliteManaged?: boolean,
  /**
  * Filter
  * @type { boolean }
  * @memberof ListSystemsIdsApi
  */
  filterBuiltPkgcache?: boolean,
  /**
  * Filter
  * @type { string }
  * @memberof ListSystemsIdsApi
  */
  filterArch?: string,
  /**
  * Tag filter
  * @type { Array<string> }
  * @memberof ListSystemsIdsApi
  */
  tags?: Array<string>,
  /**
  * Filter systems by inventory groups
  * @type { Array<string> }
  * @memberof ListSystemsIdsApi
  */
  filterGroupName?: Array<string>,
  /**
  * Filter only SAP systems
  * @type { boolean }
  * @memberof ListSystemsIdsApi
  */
  filterSystemProfileSapSystem?: boolean,
  /**
  * Filter systems by their SAP SIDs
  * @type { Array<string> }
  * @memberof ListSystemsIdsApi
  */
  filterSystemProfileSapSids?: Array<string>,
  /**
  * Filter systems by ansible
  * @type { string }
  * @memberof ListSystemsIdsApi
  */
  filterSystemProfileAnsible?: string,
  /**
  * Filter systems by ansible version
  * @type { string }
  * @memberof ListSystemsIdsApi
  */
  filterSystemProfileAnsibleControllerVersion?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof ListSystemsIdsApi
  */
  filterSystemProfileMssql?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof ListSystemsIdsApi
  */
  filterSystemProfileMssqlVersion?: string,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ListSystemsIdsSortEnum = {
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
    SatelliteManaged: 'satellite_managed',
    BuiltPkgcache: 'built_pkgcache'
} as const;
export type ListSystemsIdsSortEnum = typeof ListSystemsIdsSortEnum[keyof typeof ListSystemsIdsSortEnum];

export type ListSystemsIdsReturnType = AxiosPromise<ControllersIDsSatelliteManagedResponse>;

const isListSystemsIdsObjectParams = (params: [ListSystemsIdsParams] | unknown[]): params is [ListSystemsIdsParams] => {
  return params.length === 1 && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true
}
/**
* Show me all my systems
* @summary Show me all my systems
* @param {ListSystemsIdsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listSystemsIdsParamCreator = async (...config: ([ListSystemsIdsParams] | [number, number, ListSystemsIdsSortEnum, string, string, string, string, string, number, number, number, number, number, number, number, number, number, number, number, number, boolean, number, number, number, string, string, string, string, string, string, string, string, string, string, string, boolean, boolean, string, Array<string>, Array<string>, boolean, Array<string>, string, string, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListSystemsIdsObjectParams(config) ? config[0] : ['limit', 'offset', 'sort', 'search', 'filterId', 'filterDisplayName', 'filterLastEvaluation', 'filterLastUpload', 'filterRhsaCount', 'filterRhbaCount', 'filterRheaCount', 'filterOtherCount', 'filterInstallableRhsaCount', 'filterInstallableRhbaCount', 'filterInstallableRheaCount', 'filterInstallableOtherCount', 'filterApplicableRhsaCount', 'filterApplicableRhbaCount', 'filterApplicableRheaCount', 'filterApplicableOtherCount', 'filterStale', 'filterPackagesInstalled', 'filterPackagesInstallable', 'filterPackagesApplicable', 'filterStaleTimestamp', 'filterStaleWarningTimestamp', 'filterCulledTimestamp', 'filterCreated', 'filterBaselineName', 'filterTemplateName', 'filterTemplateUuid', 'filterOs', 'filterOsname', 'filterOsmajor', 'filterOsminor', 'filterSatelliteManaged', 'filterBuiltPkgcache', 'filterArch', 'tags', 'filterGroupName', 'filterSystemProfileSapSystem', 'filterSystemProfileSapSids', 'filterSystemProfileAnsible', 'filterSystemProfileAnsibleControllerVersion', 'filterSystemProfileMssql', 'filterSystemProfileMssqlVersion', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListSystemsIdsParams;
    const { limit, offset, sort, search, filterId, filterDisplayName, filterLastEvaluation, filterLastUpload, filterRhsaCount, filterRhbaCount, filterRheaCount, filterOtherCount, filterInstallableRhsaCount, filterInstallableRhbaCount, filterInstallableRheaCount, filterInstallableOtherCount, filterApplicableRhsaCount, filterApplicableRhbaCount, filterApplicableRheaCount, filterApplicableOtherCount, filterStale, filterPackagesInstalled, filterPackagesInstallable, filterPackagesApplicable, filterStaleTimestamp, filterStaleWarningTimestamp, filterCulledTimestamp, filterCreated, filterBaselineName, filterTemplateName, filterTemplateUuid, filterOs, filterOsname, filterOsmajor, filterOsminor, filterSatelliteManaged, filterBuiltPkgcache, filterArch, tags, filterGroupName, filterSystemProfileSapSystem, filterSystemProfileSapSids, filterSystemProfileAnsible, filterSystemProfileAnsibleControllerVersion, filterSystemProfileMssql, filterSystemProfileMssqlVersion, options = {} } = params;
    const localVarPath = `/ids/systems`;
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

    if (filterSatelliteManaged !== undefined) {
        localVarQueryParameter['filter[satellite_managed]'] = filterSatelliteManaged;
    }

    if (filterBuiltPkgcache !== undefined) {
        localVarQueryParameter['filter[built_pkgcache]'] = filterBuiltPkgcache;
    }

    if (filterArch !== undefined) {
        localVarQueryParameter['filter[arch]'] = filterArch;
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

export default listSystemsIdsParamCreator;
