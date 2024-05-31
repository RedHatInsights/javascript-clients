// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

// @ts-ignore
import type { Endpoint, EndpointDTO } from '../types';


export type EndpointResourceV1CreateEndpointParams = {
  /**
  *
  * @type { EndpointDTO }
  * @memberof EndpointResourceV1CreateEndpointApi
  */
  endpointDTO: EndpointDTO,
  options?: AxiosRequestConfig
}

const isEndpointResourceV1CreateEndpointObjectParams = (params: [EndpointResourceV1CreateEndpointParams] | unknown[]): params is [EndpointResourceV1CreateEndpointParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'endpointDTO')
}
/**
* Creates a new endpoint by providing data such as a description, a name, and the endpoint properties. Use this endpoint to create endpoints for integration with third-party services such as webhooks, Slack, or Google Chat.
* @summary Create a new endpoint
* @param {EndpointResourceV1CreateEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV1CreateEndpointParamCreator = async (...config: ([EndpointResourceV1CreateEndpointParams] | [EndpointDTO, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isEndpointResourceV1CreateEndpointObjectParams(config) ? config[0] : ['endpointDTO', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV1CreateEndpointParams;
    const { endpointDTO, options = {} } = params;
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
        serializeData: endpointDTO,
    };
}

export default endpointResourceV1CreateEndpointParamCreator;
