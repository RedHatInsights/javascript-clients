import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

import type {  } from '../types';


export type EndpointResourceV3DeleteEndpointSecretsParams = {
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV3DeleteEndpointSecretsApi
  */
  id: any,
  options?: AxiosRequestConfig
}

export type EndpointResourceV3DeleteEndpointSecretsReturnType = void;

const isEndpointResourceV3DeleteEndpointSecretsObjectParams = (params: [EndpointResourceV3DeleteEndpointSecretsParams] | unknown[]): params is [EndpointResourceV3DeleteEndpointSecretsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
* Deletes all the secrets (secret token, bearer authentication) associated with an endpoint.
* @summary Delete an endpoint\'s secrets
* @param {EndpointResourceV3DeleteEndpointSecretsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV3DeleteEndpointSecretsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([EndpointResourceV3DeleteEndpointSecretsParams] | [any, AxiosRequestConfig])) => {
    const params = isEndpointResourceV3DeleteEndpointSecretsObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV3DeleteEndpointSecretsParams;
    const { id, options = {} } = params;
    const localVarPath = `/endpoints/{id}/secrets`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'DELETE' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<EndpointResourceV3DeleteEndpointSecretsReturnType>(Promise.resolve(args));
}

export default endpointResourceV3DeleteEndpointSecretsParamCreator;
