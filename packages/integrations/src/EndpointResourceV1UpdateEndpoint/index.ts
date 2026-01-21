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


export type EndpointResourceV1UpdateEndpointParams = {
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV1UpdateEndpointApi
  */
  id: any,
  /**
  *
  * @type { Endpoint }
  * @memberof EndpointResourceV1UpdateEndpointApi
  */
  endpoint: Endpoint,
  options?: AxiosRequestConfig
}

export type EndpointResourceV1UpdateEndpointReturnType = any;

const isEndpointResourceV1UpdateEndpointObjectParams = (params: [EndpointResourceV1UpdateEndpointParams] | unknown[]): params is [EndpointResourceV1UpdateEndpointParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id') && Object.prototype.hasOwnProperty.call(params[0], 'endpoint')
  }
  return false
}
/**
* Updates the endpoint configuration. Use this to update an existing endpoint. Any changes to the endpoint take place immediately.
* @summary Update an endpoint
* @param {EndpointResourceV1UpdateEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV1UpdateEndpointParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([EndpointResourceV1UpdateEndpointParams] | [any, Endpoint, AxiosRequestConfig])) => {
    const params = isEndpointResourceV1UpdateEndpointObjectParams(config) ? config[0] : ['id', 'endpoint', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV1UpdateEndpointParams;
    const { id, endpoint, options = {} } = params;
    const localVarPath = `/endpoints/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PUT' as Method, ...options};
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

    return sendRequest<EndpointResourceV1UpdateEndpointReturnType>(Promise.resolve(args));
}

export default endpointResourceV1UpdateEndpointParamCreator;
