// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersSystemAdvisoriesDBLookup, UtilsErrorResponse } from '../types';


export type ExportSystemAdvisoriesParams = {
  /**
  * Inventory ID
  * @type { string }
  * @memberof ExportSystemAdvisoriesApi
  */
  inventoryId: string,
  /**
  * Find matching text
  * @type { string }
  * @memberof ExportSystemAdvisoriesApi
  */
  search?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemAdvisoriesApi
  */
  filterId?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemAdvisoriesApi
  */
  filterDescription?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemAdvisoriesApi
  */
  filterPublicDate?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemAdvisoriesApi
  */
  filterSynopsis?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemAdvisoriesApi
  */
  filterAdvisoryType?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemAdvisoriesApi
  */
  filterAdvisoryTypeName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportSystemAdvisoriesApi
  */
  filterSeverity?: string,
  options?: AxiosRequestConfig
}

export type ExportSystemAdvisoriesReturnType = AxiosPromise<Array<ControllersSystemAdvisoriesDBLookup>>;

const isExportSystemAdvisoriesObjectParams = (params: [ExportSystemAdvisoriesParams] | unknown[]): params is [ExportSystemAdvisoriesParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'inventoryId') && true && true && true && true && true && true && true && true
}
/**
* Export applicable advisories for all my systems. Export endpoints are not paginated.
* @summary Export applicable advisories for all my systems
* @param {ExportSystemAdvisoriesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const exportSystemAdvisoriesParamCreator = async (...config: ([ExportSystemAdvisoriesParams] | [string, string, string, string, string, string, string, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isExportSystemAdvisoriesObjectParams(config) ? config[0] : ['inventoryId', 'search', 'filterId', 'filterDescription', 'filterPublicDate', 'filterSynopsis', 'filterAdvisoryType', 'filterAdvisoryTypeName', 'filterSeverity', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ExportSystemAdvisoriesParams;
    const { inventoryId, search, filterId, filterDescription, filterPublicDate, filterSynopsis, filterAdvisoryType, filterAdvisoryTypeName, filterSeverity, options = {} } = params;
    const localVarPath = `/export/systems/{inventory_id}/advisories`
        .replace(`{${"inventory_id"}}`, encodeURIComponent(String(inventoryId)));
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

    if (filterDescription !== undefined) {
        localVarQueryParameter['filter[description]'] = filterDescription;
    }

    if (filterPublicDate !== undefined) {
        localVarQueryParameter['filter[public_date]'] = filterPublicDate;
    }

    if (filterSynopsis !== undefined) {
        localVarQueryParameter['filter[synopsis]'] = filterSynopsis;
    }

    if (filterAdvisoryType !== undefined) {
        localVarQueryParameter['filter[advisory_type]'] = filterAdvisoryType;
    }

    if (filterAdvisoryTypeName !== undefined) {
        localVarQueryParameter['filter[advisory_type_name]'] = filterAdvisoryTypeName;
    }

    if (filterSeverity !== undefined) {
        localVarQueryParameter['filter[severity]'] = filterSeverity;
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

export default exportSystemAdvisoriesParamCreator;
