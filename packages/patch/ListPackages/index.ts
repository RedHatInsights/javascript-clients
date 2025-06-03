// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersPackagesResponse, UtilsErrorResponse } from '../types';


export type ListPackagesParams = {
  /**
  * Limit for paging
  * @type { number }
  * @memberof ListPackagesApi
  */
  limit?: number,
  /**
  * Offset for paging
  * @type { number }
  * @memberof ListPackagesApi
  */
  offset?: number,
  /**
  * Sort field
  * @type { ListPackagesSortEnum }
  * @memberof ListPackagesApi
  */
  sort?: ListPackagesSortEnum,
  /**
  * Find matching text
  * @type { string }
  * @memberof ListPackagesApi
  */
  search?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListPackagesApi
  */
  filterName?: string,
  /**
  * Filter
  * @type { number }
  * @memberof ListPackagesApi
  */
  filterSystemsInstalled?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListPackagesApi
  */
  filterSystemsInstallable?: number,
  /**
  * Filter
  * @type { number }
  * @memberof ListPackagesApi
  */
  filterSystemsApplicable?: number,
  /**
  * Filter
  * @type { string }
  * @memberof ListPackagesApi
  */
  filterSummary?: string,
  /**
  * Tag filter
  * @type { Array<string> }
  * @memberof ListPackagesApi
  */
  tags?: Array<string>,
  /**
  * Filter systems by inventory groups
  * @type { Array<string> }
  * @memberof ListPackagesApi
  */
  filterGroupName?: Array<string>,
  /**
  * Filter only SAP systems
  * @type { boolean }
  * @memberof ListPackagesApi
  */
  filterSystemProfileSapSystem?: boolean,
  /**
  * Filter systems by their SAP SIDs
  * @type { Array<string> }
  * @memberof ListPackagesApi
  */
  filterSystemProfileSapSids?: Array<string>,
  /**
  * Filter systems by ansible
  * @type { string }
  * @memberof ListPackagesApi
  */
  filterSystemProfileAnsible?: string,
  /**
  * Filter systems by ansible version
  * @type { string }
  * @memberof ListPackagesApi
  */
  filterSystemProfileAnsibleControllerVersion?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof ListPackagesApi
  */
  filterSystemProfileMssql?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof ListPackagesApi
  */
  filterSystemProfileMssqlVersion?: string,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ListPackagesSortEnum = {
    Id: 'id',
    Name: 'name',
    SystemsInstalled: 'systems_installed',
    SystemsInstallable: 'systems_installable',
    SystemsApplicable: 'systems_applicable'
} as const;
export type ListPackagesSortEnum = typeof ListPackagesSortEnum[keyof typeof ListPackagesSortEnum];

export type ListPackagesReturnType = AxiosPromise<ControllersPackagesResponse>;

const isListPackagesObjectParams = (params: [ListPackagesParams] | unknown[]): params is [ListPackagesParams] => {
  return params.length === 1 && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true
}
/**
* Show me all installed packages across my systems
* @summary Show me all installed packages across my systems
* @param {ListPackagesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listPackagesParamCreator = async (...config: ([ListPackagesParams] | [number, number, ListPackagesSortEnum, string, string, number, number, number, string, Array<string>, Array<string>, boolean, Array<string>, string, string, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListPackagesObjectParams(config) ? config[0] : ['limit', 'offset', 'sort', 'search', 'filterName', 'filterSystemsInstalled', 'filterSystemsInstallable', 'filterSystemsApplicable', 'filterSummary', 'tags', 'filterGroupName', 'filterSystemProfileSapSystem', 'filterSystemProfileSapSids', 'filterSystemProfileAnsible', 'filterSystemProfileAnsibleControllerVersion', 'filterSystemProfileMssql', 'filterSystemProfileMssqlVersion', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListPackagesParams;
    const { limit, offset, sort, search, filterName, filterSystemsInstalled, filterSystemsInstallable, filterSystemsApplicable, filterSummary, tags, filterGroupName, filterSystemProfileSapSystem, filterSystemProfileSapSids, filterSystemProfileAnsible, filterSystemProfileAnsibleControllerVersion, filterSystemProfileMssql, filterSystemProfileMssqlVersion, options = {} } = params;
    const localVarPath = `/packages/`;
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

    if (filterName !== undefined) {
        localVarQueryParameter['filter[name]'] = filterName;
    }

    if (filterSystemsInstalled !== undefined) {
        localVarQueryParameter['filter[systems_installed]'] = filterSystemsInstalled;
    }

    if (filterSystemsInstallable !== undefined) {
        localVarQueryParameter['filter[systems_installable]'] = filterSystemsInstallable;
    }

    if (filterSystemsApplicable !== undefined) {
        localVarQueryParameter['filter[systems_applicable]'] = filterSystemsApplicable;
    }

    if (filterSummary !== undefined) {
        localVarQueryParameter['filter[summary]'] = filterSummary;
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

export default listPackagesParamCreator;
