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
  * @type { any }
  * @memberof EndpointResourceV1UpdateEventTypesLinkedToEndpointApi
  */
  endpointId: any,
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV1UpdateEventTypesLinkedToEndpointApi
  */
  body: any,
  options?: AxiosRequestConfig
}

export type EndpointResourceV1UpdateEventTypesLinkedToEndpointReturnType = any;

const isEndpointResourceV1UpdateEventTypesLinkedToEndpointObjectParams = (params: [EndpointResourceV1UpdateEventTypesLinkedToEndpointParams] | unknown[]): params is [EndpointResourceV1UpdateEventTypesLinkedToEndpointParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'endpointId') && Object.prototype.hasOwnProperty.call(params[0], 'body')
  }
  return false
}
/**
* Update  links between an endpoint and event types.
* @summary Update  links between an endpoint and event types
* @param {EndpointResourceV1UpdateEventTypesLinkedToEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV1UpdateEventTypesLinkedToEndpointParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([EndpointResourceV1UpdateEventTypesLinkedToEndpointParams] | [any, any, AxiosRequestConfig])) => {
    const params = isEndpointResourceV1UpdateEventTypesLinkedToEndpointObjectParams(config) ? config[0] : ['endpointId', 'body', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV1UpdateEventTypesLinkedToEndpointParams;
    const { endpointId, body, options = {} } = params;
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

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: body,
    };

    return sendRequest<EndpointResourceV1UpdateEventTypesLinkedToEndpointReturnType>(Promise.resolve(args));
}

export default endpointResourceV1UpdateEventTypesLinkedToEndpointParamCreator;
