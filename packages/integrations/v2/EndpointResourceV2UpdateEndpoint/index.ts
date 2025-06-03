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


export type EndpointResourceV2UpdateEndpointParams = {
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV2UpdateEndpointApi
  */
  id: any,
  /**
  *
  * @type { Endpoint }
  * @memberof EndpointResourceV2UpdateEndpointApi
  */
  endpoint: Endpoint,
  options?: AxiosRequestConfig
}

export type EndpointResourceV2UpdateEndpointReturnType = AxiosPromise<any>;

const isEndpointResourceV2UpdateEndpointObjectParams = (params: [EndpointResourceV2UpdateEndpointParams] | unknown[]): params is [EndpointResourceV2UpdateEndpointParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'id') && Object.prototype.hasOwnProperty.call(params[0], 'endpoint')
}
/**
* Updates the endpoint configuration. Use this to update an existing endpoint. Any changes to the endpoint take place immediately.
* @summary Update an endpoint
* @param {EndpointResourceV2UpdateEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV2UpdateEndpointParamCreator = async (...config: ([EndpointResourceV2UpdateEndpointParams] | [any, Endpoint, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isEndpointResourceV2UpdateEndpointObjectParams(config) ? config[0] : ['id', 'endpoint', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV2UpdateEndpointParams;
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

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: endpoint,
    };
}

export default endpointResourceV2UpdateEndpointParamCreator;
