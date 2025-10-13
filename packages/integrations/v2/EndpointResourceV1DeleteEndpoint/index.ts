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


export type EndpointResourceV1DeleteEndpointParams = {
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV1DeleteEndpointApi
  */
  id: any,
  options?: AxiosRequestConfig
}

export type EndpointResourceV1DeleteEndpointReturnType = AxiosPromise<void>;

const isEndpointResourceV1DeleteEndpointObjectParams = (params: [EndpointResourceV1DeleteEndpointParams] | unknown[]): params is [EndpointResourceV1DeleteEndpointParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
* Deletes an endpoint. Use this endpoint to delete an endpoint that is no longer needed. Deleting an endpoint that is already linked to a behavior group will unlink it from the behavior group. You cannot delete system endpoints.
* @summary Delete an endpoint
* @param {EndpointResourceV1DeleteEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV1DeleteEndpointParamCreator = async (...config: ([EndpointResourceV1DeleteEndpointParams] | [any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isEndpointResourceV1DeleteEndpointObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV1DeleteEndpointParams;
    const { id, options = {} } = params;
    const localVarPath = `/endpoints/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'DELETE' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default endpointResourceV1DeleteEndpointParamCreator;
