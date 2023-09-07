// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../utils/common';
import type { RequestArgs } from '../utils/base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, AuthTypeEnum } from '../utils/base';
import { Configuration } from '../utils/configuration';

// @ts-ignore
import type { Endpoint } from '../types';


export type EndpointResourceV1CreateEndpointParams = {
  /**
  *
  * @type { Endpoint }
  * @memberof EndpointResourceV1CreateEndpointApi
  */
  endpoint: Endpoint,
  options?: AxiosRequestConfig
}

const isEndpointResourceV1CreateEndpointObjectParams = (params: [EndpointResourceV1CreateEndpointParams] | unknown[]): params is [EndpointResourceV1CreateEndpointParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'endpoint')
}
/**
* Create a new endpoint from the passed data
* @summary Create a new endpoint
* @param {EndpointResourceV1CreateEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV1CreateEndpointParamCreator = async (...config: ([EndpointResourceV1CreateEndpointParams] | [Endpoint, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isEndpointResourceV1CreateEndpointObjectParams(config) ? config[0] : ['endpoint', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV1CreateEndpointParams;
    const { endpoint, options = {} } = params;
    const localVarPath = `/endpoints`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: endpoint,
    };
}

export default endpointResourceV1CreateEndpointParamCreator;
