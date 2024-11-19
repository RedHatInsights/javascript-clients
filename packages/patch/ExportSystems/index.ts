// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersSystemDBLookup, UtilsErrorResponse } from '../types';


export type ExportSystemsParams = {
  /**
  * Find matching text
  * @type { string }
  * @memberof ExportSystemsApi
  */
  search?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterId?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterDisplayName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterLastEvaluation?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterLastUpload?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterRhsaCount?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterRhbaCount?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterRheaCount?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterOtherCount?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterInstallableRhsaCount?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterInstallableRhbaCount?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterInstallableRheaCount?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterInstallableOtherCount?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterApplicableRhsaCount?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterApplicableRhbaCount?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterApplicableRheaCount?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterApplicableOtherCount?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterStale?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterPackagesInstalled?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterPackagesInstallable?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterPackagesApplicable?: string,
  /**
  * Filter systems by inventory groups
  * @type { Array<string> }
  * @memberof ExportSystemsApi
  */
  filterGroupName?: Array<string>,
  /**
  * Filter only SAP systems
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterSystemProfileSapSystem?: string,
  /**
  * Filter systems by their SAP SIDs
  * @type { Array<string> }
  * @memberof ExportSystemsApi
  */
  filterSystemProfileSapSids?: Array<string>,
  /**
  * Filter systems by ansible
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterSystemProfileAnsible?: string,
  /**
  * Filter systems by ansible version
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterSystemProfileAnsibleControllerVersion?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterSystemProfileMssql?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterSystemProfileMssqlVersion?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterBaselineName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterTemplateName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterTemplateUuid?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterArch?: string,
  /**
  * Filter OS version
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterOs?: string,
  /**
  * Filter OS name
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterOsname?: string,
  /**
  * Filter OS major version
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterOsmajor?: string,
  /**
  * Filter OS minor version
  * @type { string }
  * @memberof ExportSystemsApi
  */
  filterOsminor?: string,
  /**
  * Tag filter
  * @type { Array<string> }
  * @memberof ExportSystemsApi
  */
  tags?: Array<string>,
  options?: AxiosRequestConfig
}

export type ExportSystemsReturnType = AxiosPromise<Array<ControllersSystemDBLookup>>;

const isExportSystemsObjectParams = (params: [ExportSystemsParams] | unknown[]): params is [ExportSystemsParams] => {
  return params.length === 1 && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true
}
/**
* Export systems for my account. Export endpoints are not paginated.
* @summary Export systems for my account
* @param {ExportSystemsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const exportSystemsParamCreator = async (...config: ([ExportSystemsParams] | [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, Array<string>, string, Array<string>, string, string, string, string, string, string, string, string, string, string, string, string, Array<string>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isExportSystemsObjectParams(config) ? config[0] : ['search', 'filterId', 'filterDisplayName', 'filterLastEvaluation', 'filterLastUpload', 'filterRhsaCount', 'filterRhbaCount', 'filterRheaCount', 'filterOtherCount', 'filterInstallableRhsaCount', 'filterInstallableRhbaCount', 'filterInstallableRheaCount', 'filterInstallableOtherCount', 'filterApplicableRhsaCount', 'filterApplicableRhbaCount', 'filterApplicableRheaCount', 'filterApplicableOtherCount', 'filterStale', 'filterPackagesInstalled', 'filterPackagesInstallable', 'filterPackagesApplicable', 'filterGroupName', 'filterSystemProfileSapSystem', 'filterSystemProfileSapSids', 'filterSystemProfileAnsible', 'filterSystemProfileAnsibleControllerVersion', 'filterSystemProfileMssql', 'filterSystemProfileMssqlVersion', 'filterBaselineName', 'filterTemplateName', 'filterTemplateUuid', 'filterArch', 'filterOs', 'filterOsname', 'filterOsmajor', 'filterOsminor', 'tags', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ExportSystemsParams;
    const { search, filterId, filterDisplayName, filterLastEvaluation, filterLastUpload, filterRhsaCount, filterRhbaCount, filterRheaCount, filterOtherCount, filterInstallableRhsaCount, filterInstallableRhbaCount, filterInstallableRheaCount, filterInstallableOtherCount, filterApplicableRhsaCount, filterApplicableRhbaCount, filterApplicableRheaCount, filterApplicableOtherCount, filterStale, filterPackagesInstalled, filterPackagesInstallable, filterPackagesApplicable, filterGroupName, filterSystemProfileSapSystem, filterSystemProfileSapSids, filterSystemProfileAnsible, filterSystemProfileAnsibleControllerVersion, filterSystemProfileMssql, filterSystemProfileMssqlVersion, filterBaselineName, filterTemplateName, filterTemplateUuid, filterArch, filterOs, filterOsname, filterOsmajor, filterOsminor, tags, options = {} } = params;
    const localVarPath = `/export/systems`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

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

    if (filterBaselineName !== undefined) {
        localVarQueryParameter['filter[baseline_name]'] = filterBaselineName;
    }

    if (filterTemplateName !== undefined) {
        localVarQueryParameter['filter[template_name]'] = filterTemplateName;
    }

    if (filterTemplateUuid !== undefined) {
        localVarQueryParameter['filter[template_uuid]'] = filterTemplateUuid;
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

export default exportSystemsParamCreator;
