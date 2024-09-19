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


export type PackageSystemsIdsParams = {
  /**
  * Package name
  * @type { string }
  * @memberof PackageSystemsIdsApi
  */
  packageName: string,
  /**
  * Limit for paging
  * @type { number }
  * @memberof PackageSystemsIdsApi
  */
  limit?: number,
  /**
  * Offset for paging
  * @type { number }
  * @memberof PackageSystemsIdsApi
  */
  offset?: number,
  /**
  * Tag filter
  * @type { Array<string> }
  * @memberof PackageSystemsIdsApi
  */
  tags?: Array<string>,
  /**
  * Filter systems by inventory groups
  * @type { Array<string> }
  * @memberof PackageSystemsIdsApi
  */
  filterGroupName?: Array<string>,
  /**
  * Filter only SAP systems
  * @type { string }
  * @memberof PackageSystemsIdsApi
  */
  filterSystemProfileSapSystem?: string,
  /**
  * Filter systems by their SAP SIDs
  * @type { Array<string> }
  * @memberof PackageSystemsIdsApi
  */
  filterSystemProfileSapSids?: Array<string>,
  /**
  * Filter systems by ansible
  * @type { string }
  * @memberof PackageSystemsIdsApi
  */
  filterSystemProfileAnsible?: string,
  /**
  * Filter systems by ansible version
  * @type { string }
  * @memberof PackageSystemsIdsApi
  */
  filterSystemProfileAnsibleControllerVersion?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof PackageSystemsIdsApi
  */
  filterSystemProfileMssql?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof PackageSystemsIdsApi
  */
  filterSystemProfileMssqlVersion?: string,
  /**
  * Filter systems managed by satellite
  * @type { string }
  * @memberof PackageSystemsIdsApi
  */
  filterSatelliteManaged?: string,
  options?: AxiosRequestConfig
}

const isPackageSystemsIdsObjectParams = (params: [PackageSystemsIdsParams] | unknown[]): params is [PackageSystemsIdsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'packageName') && true && true && true && true && true && true && true && true && true && true && true
}
/**
* Show me all my systems which have a package installed
* @summary Show me all my systems which have a package installed
* @param {PackageSystemsIdsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const packageSystemsIdsParamCreator = async (...config: ([PackageSystemsIdsParams] | [string, number, number, Array<string>, Array<string>, string, Array<string>, string, string, string, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isPackageSystemsIdsObjectParams(config) ? config[0] : ['packageName', 'limit', 'offset', 'tags', 'filterGroupName', 'filterSystemProfileSapSystem', 'filterSystemProfileSapSids', 'filterSystemProfileAnsible', 'filterSystemProfileAnsibleControllerVersion', 'filterSystemProfileMssql', 'filterSystemProfileMssqlVersion', 'filterSatelliteManaged', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as PackageSystemsIdsParams;
    const { packageName, limit, offset, tags, filterGroupName, filterSystemProfileSapSystem, filterSystemProfileSapSids, filterSystemProfileAnsible, filterSystemProfileAnsibleControllerVersion, filterSystemProfileMssql, filterSystemProfileMssqlVersion, filterSatelliteManaged, options = {} } = params;
    const localVarPath = `/ids/packages/{package_name}/systems`
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

export default packageSystemsIdsParamCreator;
