// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../utils/common';
import type { RequestArgs } from '../utils/base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, AuthTypeEnum } from '../utils/base';
import { Configuration } from '../utils/configuration';

// @ts-ignore
import type {  } from '../types';


export type EndpointResourceV1TestEndpointParams = {
  /**
  * The UUID of the endpoint to test
  * @type { string }
  * @memberof EndpointResourceV1TestEndpointApi
  */
  uuid: string,
  options?: AxiosRequestConfig
}

const isEndpointResourceV1TestEndpointObjectParams = (params: [EndpointResourceV1TestEndpointParams] | unknown[]): params is [EndpointResourceV1TestEndpointParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'uuid')
}
/**
*
* @param {EndpointResourceV1TestEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV1TestEndpointParamCreator = async (...config: ([EndpointResourceV1TestEndpointParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isEndpointResourceV1TestEndpointObjectParams(config) ? config[0] : ['uuid', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV1TestEndpointParams;
    const { uuid, options = {} } = params;
    const localVarPath = `/endpoints/{uuid}/test`
        .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST', ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default endpointResourceV1TestEndpointParamCreator;
