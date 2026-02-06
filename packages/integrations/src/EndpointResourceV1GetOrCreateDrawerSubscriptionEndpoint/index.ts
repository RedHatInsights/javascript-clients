// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

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

export type EndpointResourceV1GetOrCreateDrawerSubscriptionEndpointReturnType = Endpoint;

const isEndpointResourceV1GetOrCreateDrawerSubscriptionEndpointObjectParams = (params: [EndpointResourceV1GetOrCreateDrawerSubscriptionEndpointParams] | unknown[]): params is [EndpointResourceV1GetOrCreateDrawerSubscriptionEndpointParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'requestSystemSubscriptionProperties')
  }
  return false
}
/**
* Adds the drawer system endpoint into the system and specifies the role-based access control (RBAC) group that will receive notifications. Use this endpoint to add an animation as a notification in the UI.
* @summary Add a drawer endpoint
* @param {EndpointResourceV1GetOrCreateDrawerSubscriptionEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV1GetOrCreateDrawerSubscriptionEndpointParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([EndpointResourceV1GetOrCreateDrawerSubscriptionEndpointParams] | [RequestSystemSubscriptionProperties, AxiosRequestConfig])) => {
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

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: requestSystemSubscriptionProperties,
    };

    return sendRequest<EndpointResourceV1GetOrCreateDrawerSubscriptionEndpointReturnType>(Promise.resolve(args));
}

export default endpointResourceV1GetOrCreateDrawerSubscriptionEndpointParamCreator;
