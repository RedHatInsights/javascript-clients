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


export type EndpointResourceV2GetOrCreateDrawerSubscriptionEndpointParams = {
  /**
  *
  * @type { RequestSystemSubscriptionProperties }
  * @memberof EndpointResourceV2GetOrCreateDrawerSubscriptionEndpointApi
  */
  requestSystemSubscriptionProperties: RequestSystemSubscriptionProperties,
  options?: AxiosRequestConfig
}

export type EndpointResourceV2GetOrCreateDrawerSubscriptionEndpointReturnType = AxiosPromise<Endpoint>;

const isEndpointResourceV2GetOrCreateDrawerSubscriptionEndpointObjectParams = (params: [EndpointResourceV2GetOrCreateDrawerSubscriptionEndpointParams] | unknown[]): params is [EndpointResourceV2GetOrCreateDrawerSubscriptionEndpointParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'requestSystemSubscriptionProperties')
}
/**
* Adds the drawer system endpoint into the system and specifies the role-based access control (RBAC) group that will receive notifications. Use this endpoint to add an animation as a notification in the UI.
* @summary Add a drawer endpoint
* @param {EndpointResourceV2GetOrCreateDrawerSubscriptionEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV2GetOrCreateDrawerSubscriptionEndpointParamCreator = async (...config: ([EndpointResourceV2GetOrCreateDrawerSubscriptionEndpointParams] | [RequestSystemSubscriptionProperties, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isEndpointResourceV2GetOrCreateDrawerSubscriptionEndpointObjectParams(config) ? config[0] : ['requestSystemSubscriptionProperties', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV2GetOrCreateDrawerSubscriptionEndpointParams;
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

export default endpointResourceV2GetOrCreateDrawerSubscriptionEndpointParamCreator;
