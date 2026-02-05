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


export type EndpointResourceV1GetEndpointParams = {
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV1GetEndpointApi
  */
  id: any,
  options?: AxiosRequestConfig
}

export type EndpointResourceV1GetEndpointReturnType = Endpoint;

const isEndpointResourceV1GetEndpointObjectParams = (params: [EndpointResourceV1GetEndpointParams] | unknown[]): params is [EndpointResourceV1GetEndpointParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
* Retrieves the public information associated with an endpoint such as its description, name, and properties.
* @summary Retrieve an endpoint
* @param {EndpointResourceV1GetEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV1GetEndpointParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([EndpointResourceV1GetEndpointParams] | [any, AxiosRequestConfig])) => {
    const params = isEndpointResourceV1GetEndpointObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV1GetEndpointParams;
    const { id, options = {} } = params;
    const localVarPath = `/endpoints/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<EndpointResourceV1GetEndpointReturnType>(Promise.resolve(args));
}

export default endpointResourceV1GetEndpointParamCreator;
