// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PageNotificationHistory } from '../types';


export type EndpointResourceV2GetEndpointHistoryParams = {
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV2GetEndpointHistoryApi
  */
  id: any,
  /**
  * Number of items per page, if not specified 20 is used.
  * @type { any }
  * @memberof EndpointResourceV2GetEndpointHistoryApi
  */
  limit?: any,
  /**
  * Page number. Starts at first page (0), if not specified starts at first page.
  * @type { any }
  * @memberof EndpointResourceV2GetEndpointHistoryApi
  */
  pageNumber?: any,
  /**
  * Include the detail in the reply
  * @type { any }
  * @memberof EndpointResourceV2GetEndpointHistoryApi
  */
  includeDetail?: any,
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV2GetEndpointHistoryApi
  */
  offset?: any,
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV2GetEndpointHistoryApi
  */
  sortBy?: any,
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV2GetEndpointHistoryApi
  */
  sortBy2?: any,
  options?: AxiosRequestConfig
}

export type EndpointResourceV2GetEndpointHistoryReturnType = PageNotificationHistory;

const isEndpointResourceV2GetEndpointHistoryObjectParams = (params: [EndpointResourceV2GetEndpointHistoryParams] | unknown[]): params is [EndpointResourceV2GetEndpointHistoryParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
*
* @param {EndpointResourceV2GetEndpointHistoryParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV2GetEndpointHistoryParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([EndpointResourceV2GetEndpointHistoryParams] | [any, any, any, any, any, any, any, AxiosRequestConfig])) => {
    const params = isEndpointResourceV2GetEndpointHistoryObjectParams(config) ? config[0] : ['id', 'limit', 'pageNumber', 'includeDetail', 'offset', 'sortBy', 'sortBy2', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV2GetEndpointHistoryParams;
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

    return sendRequest<EndpointResourceV2GetEndpointHistoryReturnType>(Promise.resolve(args));
}

export default endpointResourceV2GetEndpointHistoryParamCreator;
