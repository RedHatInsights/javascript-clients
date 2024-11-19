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
  * @type { string }
  * @memberof EndpointResourceV2GetEndpointHistoryApi
  */
  id: string,
  /**
  * Number of items per page, if not specified or 0 is used, returns a maximum of 500 elements.
  * @type { number }
  * @memberof EndpointResourceV2GetEndpointHistoryApi
  */
  limit?: number,
  /**
  * Page number. Starts at first page (0), if not specified starts at first page.
  * @type { number }
  * @memberof EndpointResourceV2GetEndpointHistoryApi
  */
  pageNumber?: number,
  /**
  * Include the detail in the reply
  * @type { boolean }
  * @memberof EndpointResourceV2GetEndpointHistoryApi
  */
  includeDetail?: boolean,
  /**
  *
  * @type { number }
  * @memberof EndpointResourceV2GetEndpointHistoryApi
  */
  offset?: number,
  /**
  *
  * @type { string }
  * @memberof EndpointResourceV2GetEndpointHistoryApi
  */
  sortBy?: string,
  /**
  *
  * @type { string }
  * @memberof EndpointResourceV2GetEndpointHistoryApi
  */
  sortBy2?: string,
  options?: AxiosRequestConfig
}

export type EndpointResourceV2GetEndpointHistoryReturnType = AxiosPromise<PageNotificationHistory>;

const isEndpointResourceV2GetEndpointHistoryObjectParams = (params: [EndpointResourceV2GetEndpointHistoryParams] | unknown[]): params is [EndpointResourceV2GetEndpointHistoryParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id') && true && true && true && true && true && true
}
/**
* Get Endpoint History
* @param {EndpointResourceV2GetEndpointHistoryParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV2GetEndpointHistoryParamCreator = async (...config: ([EndpointResourceV2GetEndpointHistoryParams] | [string, number, number, boolean, number, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
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

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default endpointResourceV2GetEndpointHistoryParamCreator;
