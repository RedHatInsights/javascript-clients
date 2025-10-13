// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { EndpointPage } from '../types';


export type EndpointResourceV1GetEndpointsParams = {
  /**
  * Number of items per page, if not specified 20 is used
  * @type { any }
  * @memberof EndpointResourceV1GetEndpointsApi
  */
  limit?: any,
  /**
  * Page number. Starts at first page (0), if not specified starts at first page.
  * @type { any }
  * @memberof EndpointResourceV1GetEndpointsApi
  */
  pageNumber?: any,
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV1GetEndpointsApi
  */
  active?: any,
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV1GetEndpointsApi
  */
  name?: any,
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV1GetEndpointsApi
  */
  offset?: any,
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV1GetEndpointsApi
  */
  sortBy?: any,
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV1GetEndpointsApi
  */
  sortBy2?: any,
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV1GetEndpointsApi
  */
  type?: any,
  options?: AxiosRequestConfig
}

export type EndpointResourceV1GetEndpointsReturnType = EndpointPage;

const isEndpointResourceV1GetEndpointsObjectParams = (params: [EndpointResourceV1GetEndpointsParams] | unknown[]): params is [EndpointResourceV1GetEndpointsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Provides a list of endpoints. Use this endpoint to find specific endpoints.
* @summary List endpoints
* @param {EndpointResourceV1GetEndpointsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV1GetEndpointsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([EndpointResourceV1GetEndpointsParams] | [any, any, any, any, any, any, any, any, AxiosRequestConfig])) => {
    const params = isEndpointResourceV1GetEndpointsObjectParams(config) ? config[0] : ['limit', 'pageNumber', 'active', 'name', 'offset', 'sortBy', 'sortBy2', 'type', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV1GetEndpointsParams;
    const { limit, pageNumber, active, name, offset, sortBy, sortBy2, type, options = {} } = params;
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

    if (type !== undefined) {
        localVarQueryParameter['type'] = type;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<EndpointResourceV1GetEndpointsReturnType>(Promise.resolve(args));
}

export default endpointResourceV1GetEndpointsParamCreator;
