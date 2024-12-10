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


export type EndpointResourceV1DeleteEventTypeFromEndpointParams = {
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV1DeleteEventTypeFromEndpointApi
  */
  endpointId: any,
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV1DeleteEventTypeFromEndpointApi
  */
  eventTypeId: any,
  options?: AxiosRequestConfig
}

export type EndpointResourceV1DeleteEventTypeFromEndpointReturnType = AxiosPromise<any>;

const isEndpointResourceV1DeleteEventTypeFromEndpointObjectParams = (params: [EndpointResourceV1DeleteEventTypeFromEndpointParams] | unknown[]): params is [EndpointResourceV1DeleteEventTypeFromEndpointParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'endpointId') && Object.prototype.hasOwnProperty.call(params, 'eventTypeId')
}
/**
* Delete the link between an endpoint and an event type.
* @summary Delete the link between an endpoint and an event type
* @param {EndpointResourceV1DeleteEventTypeFromEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV1DeleteEventTypeFromEndpointParamCreator = async (...config: ([EndpointResourceV1DeleteEventTypeFromEndpointParams] | [any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isEndpointResourceV1DeleteEventTypeFromEndpointObjectParams(config) ? config[0] : ['endpointId', 'eventTypeId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV1DeleteEventTypeFromEndpointParams;
    const { endpointId, eventTypeId, options = {} } = params;
    const localVarPath = `/endpoints/{endpointId}/eventType/{eventTypeId}`
        .replace(`{${"endpointId"}}`, encodeURIComponent(String(endpointId)))
        .replace(`{${"eventTypeId"}}`, encodeURIComponent(String(eventTypeId)));
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

export default endpointResourceV1DeleteEventTypeFromEndpointParamCreator;
