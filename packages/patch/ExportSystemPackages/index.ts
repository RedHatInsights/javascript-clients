// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersSystemPackageInline, UtilsErrorResponse } from '../types';


export type ExportSystemPackagesParams = {
  /**
  * Inventory ID
  * @type { string }
  * @memberof ExportSystemPackagesApi
  */
  inventoryId: string,
  /**
  * Find matching text
  * @type { string }
  * @memberof ExportSystemPackagesApi
  */
  search?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemPackagesApi
  */
  filterName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemPackagesApi
  */
  filterDescription?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemPackagesApi
  */
  filterEvra?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemPackagesApi
  */
  filterSummary?: string,
  /**
  * Filter
  * @type { boolean }
  * @memberof ExportSystemPackagesApi
  */
  filterUpdatable?: boolean,
  options?: AxiosRequestConfig
}

export type ExportSystemPackagesReturnType = Array<ControllersSystemPackageInline>;

const isExportSystemPackagesObjectParams = (params: [ExportSystemPackagesParams] | unknown[]): params is [ExportSystemPackagesParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'inventoryId')
  }
  return false
}
/**
* Show me details about a system packages by given inventory id. Export endpoints are not paginated.
* @summary Show me details about a system packages by given inventory id
* @param {ExportSystemPackagesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const exportSystemPackagesParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ExportSystemPackagesParams] | [string, string, string, string, string, string, boolean, AxiosRequestConfig])) => {
    const params = isExportSystemPackagesObjectParams(config) ? config[0] : ['inventoryId', 'search', 'filterName', 'filterDescription', 'filterEvra', 'filterSummary', 'filterUpdatable', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ExportSystemPackagesParams;
    const { inventoryId, search, filterName, filterDescription, filterEvra, filterSummary, filterUpdatable, options = {} } = params;
    const localVarPath = `/export/systems/{inventory_id}/packages`
        .replace(`{${"inventory_id"}}`, encodeURIComponent(String(inventoryId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (search !== undefined) {
        localVarQueryParameter['search'] = search;
    }

    if (filterName !== undefined) {
        localVarQueryParameter['filter[name]'] = filterName;
    }

    if (filterDescription !== undefined) {
        localVarQueryParameter['filter[description]'] = filterDescription;
    }

    if (filterEvra !== undefined) {
        localVarQueryParameter['filter[evra]'] = filterEvra;
    }

    if (filterSummary !== undefined) {
        localVarQueryParameter['filter[summary]'] = filterSummary;
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

    return sendRequest<ExportSystemPackagesReturnType>(Promise.resolve(args));
}

export default exportSystemPackagesParamCreator;
