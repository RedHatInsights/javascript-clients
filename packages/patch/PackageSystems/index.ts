// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersPackageSystemsResponse, UtilsErrorResponse } from '../types';


export type PackageSystemsParams = {
  /**
  * Package name
  * @type { string }
  * @memberof PackageSystemsApi
  */
  packageName: string,
  /**
  * Limit for paging
  * @type { number }
  * @memberof PackageSystemsApi
  */
  limit?: number,
  /**
  * Offset for paging
  * @type { number }
  * @memberof PackageSystemsApi
  */
  offset?: number,
  /**
  * Tag filter
  * @type { Array<string> }
  * @memberof PackageSystemsApi
  */
  tags?: Array<string>,
  /**
  * Filter systems by inventory groups
  * @type { Array<string> }
  * @memberof PackageSystemsApi
  */
  filterGroupName?: Array<string>,
  /**
  * Filter only SAP systems
  * @type { boolean }
  * @memberof PackageSystemsApi
  */
  filterSystemProfileSapSystem?: boolean,
  /**
  * Filter systems by their SAP SIDs
  * @type { Array<string> }
  * @memberof PackageSystemsApi
  */
  filterSystemProfileSapSids?: Array<string>,
  /**
  * Filter systems by ansible
  * @type { string }
  * @memberof PackageSystemsApi
  */
  filterSystemProfileAnsible?: string,
  /**
  * Filter systems by ansible version
  * @type { string }
  * @memberof PackageSystemsApi
  */
  filterSystemProfileAnsibleControllerVersion?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof PackageSystemsApi
  */
  filterSystemProfileMssql?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof PackageSystemsApi
  */
  filterSystemProfileMssqlVersion?: string,
  /**
  * Filter systems managed by satellite
  * @type { string }
  * @memberof PackageSystemsApi
  */
  filterSatelliteManaged?: string,
  /**
  * Filter
  * @type { boolean }
  * @memberof PackageSystemsApi
  */
  filterUpdatable?: boolean,
  options?: AxiosRequestConfig
}

export type PackageSystemsReturnType = ControllersPackageSystemsResponse;

const isPackageSystemsObjectParams = (params: [PackageSystemsParams] | unknown[]): params is [PackageSystemsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'packageName')
  }
  return false
}
/**
* Show me all my systems which have a package installed
* @summary Show me all my systems which have a package installed
* @param {PackageSystemsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const packageSystemsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([PackageSystemsParams] | [string, number, number, Array<string>, Array<string>, boolean, Array<string>, string, string, string, string, string, boolean, AxiosRequestConfig])) => {
    const params = isPackageSystemsObjectParams(config) ? config[0] : ['packageName', 'limit', 'offset', 'tags', 'filterGroupName', 'filterSystemProfileSapSystem', 'filterSystemProfileSapSids', 'filterSystemProfileAnsible', 'filterSystemProfileAnsibleControllerVersion', 'filterSystemProfileMssql', 'filterSystemProfileMssqlVersion', 'filterSatelliteManaged', 'filterUpdatable', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as PackageSystemsParams;
    const { packageName, limit, offset, tags, filterGroupName, filterSystemProfileSapSystem, filterSystemProfileSapSids, filterSystemProfileAnsible, filterSystemProfileAnsibleControllerVersion, filterSystemProfileMssql, filterSystemProfileMssqlVersion, filterSatelliteManaged, filterUpdatable, options = {} } = params;
    const localVarPath = `/packages/{package_name}/systems`
        .replace(`{${"package_name"}}`, encodeURIComponent(String(packageName)));
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

    if (filterSatelliteManaged !== undefined) {
        localVarQueryParameter['filter[satellite_managed]'] = filterSatelliteManaged;
    }

    if (filterUpdatable !== undefined) {
        localVarQueryParameter['filter[updatable]'] = filterUpdatable;
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

    return sendRequest<PackageSystemsReturnType>(Promise.resolve(args));
}

export default packageSystemsParamCreator;
