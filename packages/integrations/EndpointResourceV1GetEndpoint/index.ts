// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../utils/common';
import type { RequestArgs } from '../utils/base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, AuthTypeEnum } from '../utils/base';
import { Configuration } from '../utils/configuration';

// @ts-ignore
import type { Endpoint } from '../types';


export type EndpointResourceV1GetEndpointParams = {
  /**
  *
  * @type { string }
  * @memberof EndpointResourceV1GetEndpointApi
  */
  id: string,
  options?: AxiosRequestConfig
}

const isEndpointResourceV1GetEndpointObjectParams = (params: [EndpointResourceV1GetEndpointParams] | unknown[]): params is [EndpointResourceV1GetEndpointParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id')
}
/**
* Retrieves the public information associated with an endpoint such as its description, name, and properties.
* @summary Retrieve an endpoint
* @param {EndpointResourceV1GetEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV1GetEndpointParamCreator = async (...config: ([EndpointResourceV1GetEndpointParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
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

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default endpointResourceV1GetEndpointParamCreator;
