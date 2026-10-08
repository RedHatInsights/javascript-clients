import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

import type { EndpointPage } from '../types';


export type EndpointResourceV3GetEndpointsParams = {
  /**
  * Number of items per page. If the value is 0, it will return all elements
  * @type { any }
  * @memberof EndpointResourceV3GetEndpointsApi
  */
  limit?: any,
  /**
  * Page number. Starts at first page (0), if not specified starts at first page.
  * @type { any }
  * @memberof EndpointResourceV3GetEndpointsApi
  */
  pageNumber?: any,
  /**
  * Filter by endpoint type (can be repeated for multiple types)
  * @type { any }
  * @memberof EndpointResourceV3GetEndpointsApi
  */
  type?: any,
  /**
  * Filter by enabled/disabled status
  * @type { any }
  * @memberof EndpointResourceV3GetEndpointsApi
  */
  active?: any,
  /**
  * Filter by endpoint name (partial match)
  * @type { any }
  * @memberof EndpointResourceV3GetEndpointsApi
  */
  name?: any,
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV3GetEndpointsApi
  */
  offset?: any,
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV3GetEndpointsApi
  */
  sortBy?: any,
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV3GetEndpointsApi
  */
  sortBy2?: any,
  options?: AxiosRequestConfig
}

export type EndpointResourceV3GetEndpointsReturnType = EndpointPage;

const isEndpointResourceV3GetEndpointsObjectParams = (params: [EndpointResourceV3GetEndpointsParams] | unknown[]): params is [EndpointResourceV3GetEndpointsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Provides a list of endpoints. Use this endpoint to find specific endpoints.
* @summary List endpoints
* @param {EndpointResourceV3GetEndpointsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV3GetEndpointsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([EndpointResourceV3GetEndpointsParams] | [any, any, any, any, any, any, any, any, AxiosRequestConfig])) => {
    const params = isEndpointResourceV3GetEndpointsObjectParams(config) ? config[0] : ['limit', 'pageNumber', 'type', 'active', 'name', 'offset', 'sortBy', 'sortBy2', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV3GetEndpointsParams;
    const { limit, pageNumber, type, active, name, offset, sortBy, sortBy2, options = {} } = params;
    const localVarPath = `/endpoints`;
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

    if (type !== undefined) {
        localVarQueryParameter['type'] = type;
    }

    if (active !== undefined) {
        localVarQueryParameter['active'] = active;
    }

    if (name !== undefined) {
        localVarQueryParameter['name'] = name;
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

    return sendRequest<EndpointResourceV3GetEndpointsReturnType>(Promise.resolve(args));
}

export default endpointResourceV3GetEndpointsParamCreator;
