// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

// @ts-ignore
import type { EndpointDTO, RequestSystemSubscriptionProperties } from '../types';


export type EndpointResourceV1GetOrCreateEmailSubscriptionEndpointParams = {
  /**
  *
  * @type { RequestSystemSubscriptionProperties }
  * @memberof EndpointResourceV1GetOrCreateEmailSubscriptionEndpointApi
  */
  requestSystemSubscriptionProperties: RequestSystemSubscriptionProperties,
  options?: AxiosRequestConfig
}

const isEndpointResourceV1GetOrCreateEmailSubscriptionEndpointObjectParams = (params: [EndpointResourceV1GetOrCreateEmailSubscriptionEndpointParams] | unknown[]): params is [EndpointResourceV1GetOrCreateEmailSubscriptionEndpointParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'requestSystemSubscriptionProperties')
}
/**
* Adds the email subscription endpoint into the system and specifies the role-based access control (RBAC) group that will receive email notifications. Use this endpoint in behavior groups to send emails when an action linked to the behavior group is triggered.
* @summary Create an email subscription endpoint
* @param {EndpointResourceV1GetOrCreateEmailSubscriptionEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV1GetOrCreateEmailSubscriptionEndpointParamCreator = async (...config: ([EndpointResourceV1GetOrCreateEmailSubscriptionEndpointParams] | [RequestSystemSubscriptionProperties, AxiosRequestConfig])): Promise<RequestArgs> => {
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

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: requestSystemSubscriptionProperties,
    };
}

export default endpointResourceV1GetOrCreateEmailSubscriptionEndpointParamCreator;
