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


export type EndpointResourceV1GetOrCreateEmailSubscriptionEndpointParams = {
  /**
  *
  * @type { RequestSystemSubscriptionProperties }
  * @memberof EndpointResourceV1GetOrCreateEmailSubscriptionEndpointApi
  */
  requestSystemSubscriptionProperties: RequestSystemSubscriptionProperties,
  options?: AxiosRequestConfig
}

export type EndpointResourceV1GetOrCreateEmailSubscriptionEndpointReturnType = Endpoint;

const isEndpointResourceV1GetOrCreateEmailSubscriptionEndpointObjectParams = (params: [EndpointResourceV1GetOrCreateEmailSubscriptionEndpointParams] | unknown[]): params is [EndpointResourceV1GetOrCreateEmailSubscriptionEndpointParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'requestSystemSubscriptionProperties')
  }
  return false
}
/**
* Adds the email subscription endpoint into the system and specifies the role-based access control (RBAC) group that will receive email notifications. Use this endpoint in behavior groups to send emails when an action linked to the behavior group is triggered.
* @summary Create an email subscription endpoint
* @param {EndpointResourceV1GetOrCreateEmailSubscriptionEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV1GetOrCreateEmailSubscriptionEndpointParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([EndpointResourceV1GetOrCreateEmailSubscriptionEndpointParams] | [RequestSystemSubscriptionProperties, AxiosRequestConfig])) => {
    const params = isEndpointResourceV1GetOrCreateEmailSubscriptionEndpointObjectParams(config) ? config[0] : ['requestSystemSubscriptionProperties', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV1GetOrCreateEmailSubscriptionEndpointParams;
    const { requestSystemSubscriptionProperties, options = {} } = params;
    const localVarPath = `/endpoints/system/email_subscription`;
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

    return sendRequest<EndpointResourceV1GetOrCreateEmailSubscriptionEndpointReturnType>(Promise.resolve(args));
}

export default endpointResourceV1GetOrCreateEmailSubscriptionEndpointParamCreator;
