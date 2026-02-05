// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

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

export type EndpointResourceV1CreateEndpointReturnType = Endpoint;

const isEndpointResourceV1CreateEndpointObjectParams = (params: [EndpointResourceV1CreateEndpointParams] | unknown[]): params is [EndpointResourceV1CreateEndpointParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'endpoint')
  }
  return false
}
/**
* Creates a new endpoint by providing data such as a description, a name, and the endpoint properties. Use this endpoint to create endpoints for integration with third-party services such as webhooks, Slack, or Google Chat.
* @summary Create a new endpoint
* @param {EndpointResourceV1CreateEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV1CreateEndpointParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([EndpointResourceV1CreateEndpointParams] | [Endpoint, AxiosRequestConfig])) => {
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

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: endpoint,
    };

    return sendRequest<EndpointResourceV1CreateEndpointReturnType>(Promise.resolve(args));
}

export default endpointResourceV1CreateEndpointParamCreator;
