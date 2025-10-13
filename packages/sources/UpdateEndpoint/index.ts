// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Endpoint, ErrorNotFound } from '../types';


export type UpdateEndpointParams = {
  /**
  * ID of the resource
  * @type { string }
  * @memberof UpdateEndpointApi
  */
  id: string,
  /**
  * Endpoint attributes to update
  * @type { Endpoint }
  * @memberof UpdateEndpointApi
  */
  endpoint: Endpoint,
  options?: AxiosRequestConfig
}

export type UpdateEndpointReturnType = void;

const isUpdateEndpointObjectParams = (params: [UpdateEndpointParams] | unknown[]): params is [UpdateEndpointParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id') && Object.prototype.hasOwnProperty.call(params[0], 'endpoint')
  }
  return false
}
/**
* Updates a Endpoint object
* @summary Update an existing Endpoint
* @param {UpdateEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const updateEndpointParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([UpdateEndpointParams] | [string, Endpoint, AxiosRequestConfig])) => {
    const params = isUpdateEndpointObjectParams(config) ? config[0] : ['id', 'endpoint', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as UpdateEndpointParams;
    const { id, endpoint, options = {} } = params;
    const localVarPath = `/endpoints/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PATCH' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: endpoint,
        auth:[
        {
        // authentication UserSecurity required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };

    return sendRequest<UpdateEndpointReturnType>(Promise.resolve(args));
}

export default updateEndpointParamCreator;
