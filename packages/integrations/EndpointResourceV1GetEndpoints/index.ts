// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../utils/common';
import type { RequestArgs } from '../utils/base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, AuthTypeEnum } from '../utils/base';
import { Configuration } from '../utils/configuration';

// @ts-ignore
import type { EndpointPage } from '../types';


export type EndpointResourceV1GetEndpointsParams = {
  /**
  * Number of items per page. If the value is 0, it will return all elements
  * @type { number }
  * @memberof EndpointResourceV1GetEndpointsApi
  */
  limit?: number,
  /**
  * Page number. Starts at first page (0), if not specified starts at first page.
  * @type { number }
  * @memberof EndpointResourceV1GetEndpointsApi
  */
  pageNumber?: number,
  /**
  *
  * @type { boolean }
  * @memberof EndpointResourceV1GetEndpointsApi
  */
  active?: boolean,
  /**
  *
  * @type { string }
  * @memberof EndpointResourceV1GetEndpointsApi
  */
  name?: string,
  /**
  *
  * @type { number }
  * @memberof EndpointResourceV1GetEndpointsApi
  */
  offset?: number,
  /**
  *
  * @type { string }
  * @memberof EndpointResourceV1GetEndpointsApi
  */
  sortBy?: string,
  /**
  *
  * @type { string }
  * @memberof EndpointResourceV1GetEndpointsApi
  */
  sortBy2?: string,
  /**
  *
  * @type { Array<string> }
  * @memberof EndpointResourceV1GetEndpointsApi
  */
  type?: Array<string>,
  options?: AxiosRequestConfig
}

const isEndpointResourceV1GetEndpointsObjectParams = (params: [EndpointResourceV1GetEndpointsParams] | unknown[]): params is [EndpointResourceV1GetEndpointsParams] => {
  return params.length === 1 && true && true && true && true && true && true && true && true
}
/**
* Get a list of endpoints filtered down by the passed parameters.
* @summary List endpoints
* @param {EndpointResourceV1GetEndpointsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV1GetEndpointsParamCreator = async (...config: ([EndpointResourceV1GetEndpointsParams] | [number, number, boolean, string, number, string, string, Array<string>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isEndpointResourceV1GetEndpointsObjectParams(config) ? config[0] : ['limit', 'pageNumber', 'active', 'name', 'offset', 'sortBy', 'sortBy2', 'type', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV1GetEndpointsParams;
    const { limit, pageNumber, active, name, offset, sortBy, sortBy2, type, options = {} } = params;
    const localVarPath = `/endpoints`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET', ...options};
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

    if (type) {
        localVarQueryParameter['type'] = type;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default endpointResourceV1GetEndpointsParamCreator;
