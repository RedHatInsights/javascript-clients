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

export type EndpointResourceV1UpdateEventTypesLinkedToEndpointReturnType = AxiosPromise<any>;

const isEndpointResourceV1UpdateEventTypesLinkedToEndpointObjectParams = (params: [EndpointResourceV1UpdateEventTypesLinkedToEndpointParams] | unknown[]): params is [EndpointResourceV1UpdateEventTypesLinkedToEndpointParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'endpointId') && Object.prototype.hasOwnProperty.call(params, 'body')
}
/**
* Update  links between an endpoint and event types.
* @summary Update  links between an endpoint and event types
* @param {EndpointResourceV1UpdateEventTypesLinkedToEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV1UpdateEventTypesLinkedToEndpointParamCreator = async (...config: ([EndpointResourceV1UpdateEventTypesLinkedToEndpointParams] | [any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
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

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: body,
    };
}

export default endpointResourceV1UpdateEventTypesLinkedToEndpointParamCreator;
