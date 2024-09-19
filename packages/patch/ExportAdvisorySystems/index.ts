// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersAdvisorySystemDBLookup, UtilsErrorResponse } from '../types';


export type ExportAdvisorySystemsParams = {
  /**
  * Advisory ID
  * @type { string }
  * @memberof ExportAdvisorySystemsApi
  */
  advisoryId: string,
  /**
  * Find matching text
  * @type { string }
  * @memberof ExportAdvisorySystemsApi
  */
  search?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportAdvisorySystemsApi
  */
  filterId?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportAdvisorySystemsApi
  */
  filterDisplayName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportAdvisorySystemsApi
  */
  filterStale?: string,
  /**
  * Filter systems by inventory groups
  * @type { Array<string> }
  * @memberof ExportAdvisorySystemsApi
  */
  filterGroupName?: Array<string>,
  /**
  * Filter only SAP systems
  * @type { string }
  * @memberof ExportAdvisorySystemsApi
  */
  filterSystemProfileSapSystem?: string,
  /**
  * Filter systems by their SAP SIDs
  * @type { Array<string> }
  * @memberof ExportAdvisorySystemsApi
  */
  filterSystemProfileSapSids?: Array<string>,
  /**
  * Filter systems by ansible
  * @type { string }
  * @memberof ExportAdvisorySystemsApi
  */
  filterSystemProfileAnsible?: string,
  /**
  * Filter systems by ansible version
  * @type { string }
  * @memberof ExportAdvisorySystemsApi
  */
  filterSystemProfileAnsibleControllerVersion?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof ExportAdvisorySystemsApi
  */
  filterSystemProfileMssql?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof ExportAdvisorySystemsApi
  */
  filterSystemProfileMssqlVersion?: string,
  /**
  * Filter OS version
  * @type { string }
  * @memberof ExportAdvisorySystemsApi
  */
  filterOs?: string,
  /**
  * Tag filter
  * @type { Array<string> }
  * @memberof ExportAdvisorySystemsApi
  */
  tags?: Array<string>,
  options?: AxiosRequestConfig
}

const isExportAdvisorySystemsObjectParams = (params: [ExportAdvisorySystemsParams] | unknown[]): params is [ExportAdvisorySystemsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'advisoryId') && true && true && true && true && true && true && true && true && true && true && true && true && true
}
/**
* Export systems for my account. Export endpoints are not paginated.
* @summary Export systems for my account
* @param {ExportAdvisorySystemsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const exportAdvisorySystemsParamCreator = async (...config: ([ExportAdvisorySystemsParams] | [string, string, string, string, string, Array<string>, string, Array<string>, string, string, string, string, string, Array<string>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isExportAdvisorySystemsObjectParams(config) ? config[0] : ['advisoryId', 'search', 'filterId', 'filterDisplayName', 'filterStale', 'filterGroupName', 'filterSystemProfileSapSystem', 'filterSystemProfileSapSids', 'filterSystemProfileAnsible', 'filterSystemProfileAnsibleControllerVersion', 'filterSystemProfileMssql', 'filterSystemProfileMssqlVersion', 'filterOs', 'tags', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ExportAdvisorySystemsParams;
    const { advisoryId, search, filterId, filterDisplayName, filterStale, filterGroupName, filterSystemProfileSapSystem, filterSystemProfileSapSids, filterSystemProfileAnsible, filterSystemProfileAnsibleControllerVersion, filterSystemProfileMssql, filterSystemProfileMssqlVersion, filterOs, tags, options = {} } = params;
    const localVarPath = `/export/advisories/{advisory_id}/systems`
        .replace(`{${"advisory_id"}}`, encodeURIComponent(String(advisoryId)));
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

    if (filterStale !== undefined) {
        localVarQueryParameter['filter[stale]'] = filterStale;
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

    if (filterOs !== undefined) {
        localVarQueryParameter['filter[os]'] = filterOs;
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

export default exportAdvisorySystemsParamCreator;
