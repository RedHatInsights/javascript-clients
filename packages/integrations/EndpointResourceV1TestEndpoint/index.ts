// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { EndpointTestRequest } from '../types';


export type EndpointResourceV1TestEndpointParams = {
  /**
  * The UUID of the endpoint to test
  * @type { any }
  * @memberof EndpointResourceV1TestEndpointApi
  */
  uuid: any,
  /**
  *
  * @type { EndpointTestRequest }
  * @memberof EndpointResourceV1TestEndpointApi
  */
  endpointTestRequest: EndpointTestRequest,
  options?: AxiosRequestConfig
}

export type EndpointResourceV1TestEndpointReturnType = AxiosPromise<void>;

const isEndpointResourceV1TestEndpointObjectParams = (params: [EndpointResourceV1TestEndpointParams] | unknown[]): params is [EndpointResourceV1TestEndpointParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'uuid') && Object.prototype.hasOwnProperty.call(params, 'endpointTestRequest')
}
/**
* Generates a test notification for a particular endpoint. Use this endpoint to test that an integration that you created works as expected. This endpoint triggers a test notification that should be received by the target recipient. For example, if you set up a webhook as the action to take upon receiving a notification, you should receive a test notification when using this endpoint.
* @summary Generate a test notification
* @param {EndpointResourceV1TestEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV1TestEndpointParamCreator = async (...config: ([EndpointResourceV1TestEndpointParams] | [any, EndpointTestRequest, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isEndpointResourceV1TestEndpointObjectParams(config) ? config[0] : ['uuid', 'endpointTestRequest', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV1TestEndpointParams;
    const { uuid, endpointTestRequest, options = {} } = params;
    const localVarPath = `/endpoints/{uuid}/test`
        .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: endpointTestRequest,
    };
}

export default endpointResourceV1TestEndpointParamCreator;
