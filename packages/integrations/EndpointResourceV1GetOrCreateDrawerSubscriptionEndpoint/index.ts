// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

// @ts-ignore
import type { Endpoint, RequestSystemSubscriptionProperties } from '../types';


export type EndpointResourceV1GetOrCreateDrawerSubscriptionEndpointParams = {
  /**
  * 
  * @type { RequestSystemSubscriptionProperties }
  * @memberof EndpointResourceV1GetOrCreateDrawerSubscriptionEndpointApi
  */
  requestSystemSubscriptionProperties: RequestSystemSubscriptionProperties, 
  options?: AxiosRequestConfig
}

const isEndpointResourceV1GetOrCreateDrawerSubscriptionEndpointObjectParams = (params: [EndpointResourceV1GetOrCreateDrawerSubscriptionEndpointParams] | unknown[]): params is [EndpointResourceV1GetOrCreateDrawerSubscriptionEndpointParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'requestSystemSubscriptionProperties')
}
/**
* Adds the drawer system endpoint into the system and specifies the role-based access control (RBAC) group that will receive notifications. Use this endpoint to add an animation as a notification in the UI.
* @summary Add a drawer endpoint
* @param {EndpointResourceV1GetOrCreateDrawerSubscriptionEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV1GetOrCreateDrawerSubscriptionEndpointParamCreator = async (...config: ([EndpointResourceV1GetOrCreateDrawerSubscriptionEndpointParams] | [RequestSystemSubscriptionProperties, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isEndpointResourceV1GetOrCreateDrawerSubscriptionEndpointObjectParams(config) ? config[0] : ['requestSystemSubscriptionProperties', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV1GetOrCreateDrawerSubscriptionEndpointParams;
    const { requestSystemSubscriptionProperties, options = {} } = params;
    const localVarPath = `/endpoints/system/drawer_subscription`;
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
        serializeData: requestSystemSubscriptionProperties,
    };
}

export default endpointResourceV1GetOrCreateDrawerSubscriptionEndpointParamCreator;
