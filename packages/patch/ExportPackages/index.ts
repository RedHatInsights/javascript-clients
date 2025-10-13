// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersPackageItem, UtilsErrorResponse } from '../types';


export type ExportPackagesParams = {
  /**
  * Sort field
  * @type { ExportPackagesSortEnum }
  * @memberof ExportPackagesApi
  */
  sort?: ExportPackagesSortEnum,
  /**
  * Find matching text
  * @type { string }
  * @memberof ExportPackagesApi
  */
  search?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportPackagesApi
  */
  filterName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportPackagesApi
  */
  filterSystemsInstalled?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportPackagesApi
  */
  filterSystemsInstallable?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportPackagesApi
  */
  filterSystemsApplicable?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportPackagesApi
  */
  filterSummary?: string,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ExportPackagesSortEnum = {
    Id: 'id',
    Name: 'name',
    SystemsInstalled: 'systems_installed',
    SystemsInstallable: 'systems_installable',
    SystemsApplicable: 'systems_applicable'
} as const;
export type ExportPackagesSortEnum = typeof ExportPackagesSortEnum[keyof typeof ExportPackagesSortEnum];

export type ExportPackagesReturnType = Array<ControllersPackageItem>;

const isExportPackagesObjectParams = (params: [ExportPackagesParams] | unknown[]): params is [ExportPackagesParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Show me all installed packages across my systems. Export endpoints are not paginated.
* @summary Show me all installed packages across my systems
* @param {ExportPackagesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const exportPackagesParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ExportPackagesParams] | [ExportPackagesSortEnum, string, string, string, string, string, string, AxiosRequestConfig])) => {
    const params = isExportPackagesObjectParams(config) ? config[0] : ['sort', 'search', 'filterName', 'filterSystemsInstalled', 'filterSystemsInstallable', 'filterSystemsApplicable', 'filterSummary', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ExportPackagesParams;
    const { sort, search, filterName, filterSystemsInstalled, filterSystemsInstallable, filterSystemsApplicable, filterSummary, options = {} } = params;
    const localVarPath = `/export/packages`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

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



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
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

    return sendRequest<ExportPackagesReturnType>(Promise.resolve(args));
}

export default exportPackagesParamCreator;
