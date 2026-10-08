import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

import type { EndpointSecrets } from '../types';


export type EndpointResourceV3UpdateEndpointSecretsParams = {
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV3UpdateEndpointSecretsApi
  */
  id: any,
  /**
  *
  * @type { EndpointSecrets }
  * @memberof EndpointResourceV3UpdateEndpointSecretsApi
  */
  endpointSecrets: EndpointSecrets,
  options?: AxiosRequestConfig
}

export type EndpointResourceV3UpdateEndpointSecretsReturnType = any;

const isEndpointResourceV3UpdateEndpointSecretsObjectParams = (params: [EndpointResourceV3UpdateEndpointSecretsParams] | unknown[]): params is [EndpointResourceV3UpdateEndpointSecretsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id') && Object.prototype.hasOwnProperty.call(params[0], 'endpointSecrets')
  }
  return false
}
/**
* Creates or replaces the secrets (secret token, bearer authentication) associated with an endpoint. The secrets are never returned by the API: use this endpoint to set them, and \"DELETE .../secrets\" to clear them. Omitting a field clears that secret.
* @summary Create or update an endpoint\'s secrets
* @param {EndpointResourceV3UpdateEndpointSecretsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV3UpdateEndpointSecretsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([EndpointResourceV3UpdateEndpointSecretsParams] | [any, EndpointSecrets, AxiosRequestConfig])) => {
    const params = isEndpointResourceV3UpdateEndpointSecretsObjectParams(config) ? config[0] : ['id', 'endpointSecrets', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV3UpdateEndpointSecretsParams;
    const { id, endpointSecrets, options = {} } = params;
    const localVarPath = `/endpoints/{id}/secrets`
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
        serializeData: endpointSecrets,
    };

    return sendRequest<EndpointResourceV3UpdateEndpointSecretsReturnType>(Promise.resolve(args));
}

export default endpointResourceV3UpdateEndpointSecretsParamCreator;
