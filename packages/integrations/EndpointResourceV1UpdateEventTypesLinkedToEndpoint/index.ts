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


export type EndpointResourceV1UpdateEventTypesLinkedToEndpointParams = {
  /**
  *
  * @type { string }
  * @memberof EndpointResourceV1UpdateEventTypesLinkedToEndpointApi
  */
  endpointId: string,
  /**
  *
  * @type { Set<string> }
  * @memberof EndpointResourceV1UpdateEventTypesLinkedToEndpointApi
  */
  requestBody?: Set<string>,
  options?: AxiosRequestConfig
}

const isEndpointResourceV1UpdateEventTypesLinkedToEndpointObjectParams = (params: [EndpointResourceV1UpdateEventTypesLinkedToEndpointParams] | unknown[]): params is [EndpointResourceV1UpdateEventTypesLinkedToEndpointParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'endpointId') && true
}
/**
* Update  links between an endpoint and event types.
* @summary Update  links between an endpoint and event types
* @param {EndpointResourceV1UpdateEventTypesLinkedToEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV1UpdateEventTypesLinkedToEndpointParamCreator = async (...config: ([EndpointResourceV1UpdateEventTypesLinkedToEndpointParams] | [string, Set<string>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isEndpointResourceV1UpdateEventTypesLinkedToEndpointObjectParams(config) ? config[0] : ['endpointId', 'requestBody', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV1UpdateEventTypesLinkedToEndpointParams;
    const { endpointId, requestBody, options = {} } = params;
    const localVarPath = `/endpoints/{endpointId}/eventTypes`
        .replace(`{${"endpointId"}}`, encodeURIComponent(String(endpointId)));
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
        serializeData: requestBody,
    };
}

export default endpointResourceV1UpdateEventTypesLinkedToEndpointParamCreator;
