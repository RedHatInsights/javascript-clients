// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../utils/common';
import type { RequestArgs } from '../utils/base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, AuthTypeEnum } from '../utils/base';
import { Configuration } from '../utils/configuration';

// @ts-ignore
import type {  } from '../types';


export type EndpointResourceV1DisableEndpointParams = {
  /**
  *
  * @type { string }
  * @memberof EndpointResourceV1DisableEndpointApi
  */
  id: string,
  options?: AxiosRequestConfig
}

const isEndpointResourceV1DisableEndpointObjectParams = (params: [EndpointResourceV1DisableEndpointParams] | unknown[]): params is [EndpointResourceV1DisableEndpointParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id')
}
/**
* Disables an endpoint so that the endpoint will not be executed after an operation that uses the endpoint is started. An operation that is already running can still execute the endpoint. Disable an endpoint when you want to stop it from running and might want to re-enable it in the future.
* @summary Disable an endpoint
* @param {EndpointResourceV1DisableEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV1DisableEndpointParamCreator = async (...config: ([EndpointResourceV1DisableEndpointParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isEndpointResourceV1DisableEndpointObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV1DisableEndpointParams;
    const { id, options = {} } = params;
    const localVarPath = `/endpoints/{id}/enable`
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

export default endpointResourceV1DisableEndpointParamCreator;
