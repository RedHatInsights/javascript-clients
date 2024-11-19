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


export type EndpointResourceV2CreateEndpointParams = {
  /**
  *
  * @type { Endpoint }
  * @memberof EndpointResourceV2CreateEndpointApi
  */
  endpoint: Endpoint,
  options?: AxiosRequestConfig
}

export type EndpointResourceV2CreateEndpointReturnType = AxiosPromise<Endpoint>;

const isEndpointResourceV2CreateEndpointObjectParams = (params: [EndpointResourceV2CreateEndpointParams] | unknown[]): params is [EndpointResourceV2CreateEndpointParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'endpoint')
}
/**
* Creates a new endpoint by providing data such as a description, a name, and the endpoint properties. Use this endpoint to create endpoints for integration with third-party services such as webhooks, Slack, or Google Chat.
* @summary Create a new endpoint
* @param {EndpointResourceV2CreateEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV2CreateEndpointParamCreator = async (...config: ([EndpointResourceV2CreateEndpointParams] | [Endpoint, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isEndpointResourceV2CreateEndpointObjectParams(config) ? config[0] : ['endpoint', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV2CreateEndpointParams;
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

export default endpointResourceV2CreateEndpointParamCreator;
