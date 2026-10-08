import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

import type {  } from '../types';


export type EndpointResourceV3GetEndpointHistoryParams = {
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV3GetEndpointHistoryApi
  */
  id: any,
  /**
  * Number of items per page, if not specified 20 is used.
  * @type { any }
  * @memberof EndpointResourceV3GetEndpointHistoryApi
  */
  limit?: any,
  /**
  * Page number. Starts at first page (0), if not specified starts at first page.
  * @type { any }
  * @memberof EndpointResourceV3GetEndpointHistoryApi
  */
  pageNumber?: any,
  /**
  * Include the detail in the reply
  * @type { any }
  * @memberof EndpointResourceV3GetEndpointHistoryApi
  */
  includeDetail?: any,
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV3GetEndpointHistoryApi
  */
  offset?: any,
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV3GetEndpointHistoryApi
  */
  sortBy?: any,
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV3GetEndpointHistoryApi
  */
  sortBy2?: any,
  options?: AxiosRequestConfig
}

export type EndpointResourceV3GetEndpointHistoryReturnType = void;

const isEndpointResourceV3GetEndpointHistoryObjectParams = (params: [EndpointResourceV3GetEndpointHistoryParams] | unknown[]): params is [EndpointResourceV3GetEndpointHistoryParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
*
* @param {EndpointResourceV3GetEndpointHistoryParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV3GetEndpointHistoryParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([EndpointResourceV3GetEndpointHistoryParams] | [any, any, any, any, any, any, any, AxiosRequestConfig])) => {
    const params = isEndpointResourceV3GetEndpointHistoryObjectParams(config) ? config[0] : ['id', 'limit', 'pageNumber', 'includeDetail', 'offset', 'sortBy', 'sortBy2', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV3GetEndpointHistoryParams;
    const { id, limit, pageNumber, includeDetail, offset, sortBy, sortBy2, options = {} } = params;
    const localVarPath = `/endpoints/{id}/history`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (pageNumber !== undefined) {
        localVarQueryParameter['pageNumber'] = pageNumber;
    }

    if (includeDetail !== undefined) {
        localVarQueryParameter['includeDetail'] = includeDetail;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }

    if (sortBy !== undefined) {
        localVarQueryParameter['sortBy'] = sortBy;
    }

    if (sortBy2 !== undefined) {
        localVarQueryParameter['sort_by'] = sortBy2;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<EndpointResourceV3GetEndpointHistoryReturnType>(Promise.resolve(args));
}

export default endpointResourceV3GetEndpointHistoryParamCreator;
