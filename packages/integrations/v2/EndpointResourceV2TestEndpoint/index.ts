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


export type EndpointResourceV2TestEndpointParams = {
  /**
  * The UUID of the endpoint to test
  * @type { any }
  * @memberof EndpointResourceV2TestEndpointApi
  */
  uuid: any,
  /**
  *
  * @type { EndpointTestRequest }
  * @memberof EndpointResourceV2TestEndpointApi
  */
  endpointTestRequest: EndpointTestRequest,
  options?: AxiosRequestConfig
}

export type EndpointResourceV2TestEndpointReturnType = AxiosPromise<void>;

const isEndpointResourceV2TestEndpointObjectParams = (params: [EndpointResourceV2TestEndpointParams] | unknown[]): params is [EndpointResourceV2TestEndpointParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'uuid') && Object.prototype.hasOwnProperty.call(params[0], 'endpointTestRequest')
}
/**
* Generates a test notification for a particular endpoint. Use this endpoint to test that an integration that you created works as expected. This endpoint triggers a test notification that should be received by the target recipient. For example, if you set up a webhook as the action to take upon receiving a notification, you should receive a test notification when using this endpoint.
* @summary Generate a test notification
* @param {EndpointResourceV2TestEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV2TestEndpointParamCreator = async (...config: ([EndpointResourceV2TestEndpointParams] | [any, EndpointTestRequest, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isEndpointResourceV2TestEndpointObjectParams(config) ? config[0] : ['uuid', 'endpointTestRequest', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV2TestEndpointParams;
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

export default endpointResourceV2TestEndpointParamCreator;
