// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type {  } from '../types';


export type EndpointResourceV1EnableEndpointParams = {
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV1EnableEndpointApi
  */
  id: any,
  options?: AxiosRequestConfig
}

export type EndpointResourceV1EnableEndpointReturnType = any;

const isEndpointResourceV1EnableEndpointObjectParams = (params: [EndpointResourceV1EnableEndpointParams] | unknown[]): params is [EndpointResourceV1EnableEndpointParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
* Enables an endpoint that is disabled so that the endpoint will be executed on the following operations that use the endpoint. An operation must be restarted to use the enabled endpoint.
* @summary Enable an endpoint
* @param {EndpointResourceV1EnableEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV1EnableEndpointParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([EndpointResourceV1EnableEndpointParams] | [any, AxiosRequestConfig])) => {
    const params = isEndpointResourceV1EnableEndpointObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV1EnableEndpointParams;
    const { id, options = {} } = params;
    const localVarPath = `/endpoints/{id}/enable`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PUT' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<EndpointResourceV1EnableEndpointReturnType>(Promise.resolve(args));
}

export default endpointResourceV1EnableEndpointParamCreator;
