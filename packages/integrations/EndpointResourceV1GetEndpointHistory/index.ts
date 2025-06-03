// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type {  } from '../types';


export type EndpointResourceV1GetEndpointHistoryParams = {
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV1GetEndpointHistoryApi
  */
  id: any,
  /**
  * Number of items per page, if not specified or 0 is used, returns a maximum of 500 elements.
  * @type { any }
  * @memberof EndpointResourceV1GetEndpointHistoryApi
  */
  limit?: any,
  /**
  * Page number. Starts at first page (0), if not specified starts at first page.
  * @type { any }
  * @memberof EndpointResourceV1GetEndpointHistoryApi
  */
  pageNumber?: any,
  /**
  * Include the detail in the reply
  * @type { any }
  * @memberof EndpointResourceV1GetEndpointHistoryApi
  */
  includeDetail?: any,
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV1GetEndpointHistoryApi
  */
  offset?: any,
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV1GetEndpointHistoryApi
  */
  sortBy?: any,
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV1GetEndpointHistoryApi
  */
  sortBy2?: any,
  options?: AxiosRequestConfig
}

export type EndpointResourceV1GetEndpointHistoryReturnType = AxiosPromise<any>;

const isEndpointResourceV1GetEndpointHistoryObjectParams = (params: [EndpointResourceV1GetEndpointHistoryParams] | unknown[]): params is [EndpointResourceV1GetEndpointHistoryParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'id') && true && true && true && true && true && true
}
/**
*
* @summary Get Endpoint History
* @param {EndpointResourceV1GetEndpointHistoryParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV1GetEndpointHistoryParamCreator = async (...config: ([EndpointResourceV1GetEndpointHistoryParams] | [any, any, any, any, any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isEndpointResourceV1GetEndpointHistoryObjectParams(config) ? config[0] : ['id', 'limit', 'pageNumber', 'includeDetail', 'offset', 'sortBy', 'sortBy2', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV1GetEndpointHistoryParams;
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

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default endpointResourceV1GetEndpointHistoryParamCreator;
