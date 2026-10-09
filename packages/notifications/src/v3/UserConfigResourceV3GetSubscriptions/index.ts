import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

import type {  } from '../types';


export type UserConfigResourceV3GetSubscriptionsParams = {
  /**
  * Restrict the response to this bundle
  * @type { any }
  * @memberof UserConfigResourceV3GetSubscriptionsApi
  */
  bundle?: any,
  /**
  * Restrict the response to this application; requires \'bundle\'
  * @type { any }
  * @memberof UserConfigResourceV3GetSubscriptionsApi
  */
  application?: any,
  /**
  * Restrict the response to this event type; requires \'bundle\' and \'application\'
  * @type { any }
  * @memberof UserConfigResourceV3GetSubscriptionsApi
  */
  eventType?: any,
  options?: AxiosRequestConfig
}

export type UserConfigResourceV3GetSubscriptionsReturnType = any;

const isUserConfigResourceV3GetSubscriptionsObjectParams = (params: [UserConfigResourceV3GetSubscriptionsParams] | unknown[]): params is [UserConfigResourceV3GetSubscriptionsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Returns the authenticated user\'s subscriptions as a bundle/application/event type/channel tree. Query params progressively narrow the returned tree; each requires its parent to also be specified.
* @summary Retrieve the authenticated user\'s notification subscriptions
* @param {UserConfigResourceV3GetSubscriptionsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const userConfigResourceV3GetSubscriptionsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([UserConfigResourceV3GetSubscriptionsParams] | [any, any, any, AxiosRequestConfig])) => {
    const params = isUserConfigResourceV3GetSubscriptionsObjectParams(config) ? config[0] : ['bundle', 'application', 'eventType', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as UserConfigResourceV3GetSubscriptionsParams;
    const { bundle, application, eventType, options = {} } = params;
    const localVarPath = `/user-config/subscriptions`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (bundle !== undefined) {
        localVarQueryParameter['bundle'] = bundle;
    }

    if (application !== undefined) {
        localVarQueryParameter['application'] = application;
    }

    if (eventType !== undefined) {
        localVarQueryParameter['event_type'] = eventType;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<UserConfigResourceV3GetSubscriptionsReturnType>(Promise.resolve(args));
}

export default userConfigResourceV3GetSubscriptionsParamCreator;
