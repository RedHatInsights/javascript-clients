import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

import type {  } from '../types';


export type UserConfigResourceV3UpdateSubscriptionsParams = {
  /**
  *
  * @type { any }
  * @memberof UserConfigResourceV3UpdateSubscriptionsApi
  */
  body: any,
  options?: AxiosRequestConfig
}

export type UserConfigResourceV3UpdateSubscriptionsReturnType = void;

const isUserConfigResourceV3UpdateSubscriptionsObjectParams = (params: [UserConfigResourceV3UpdateSubscriptionsParams] | unknown[]): params is [UserConfigResourceV3UpdateSubscriptionsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'body')
  }
  return false
}
/**
* Partial update, not a full replace: any bundle, application, event type or channel omitted from the request tree is left untouched rather than reset or unsubscribed.
* @summary Bulk-update the authenticated user\'s notification subscriptions
* @param {UserConfigResourceV3UpdateSubscriptionsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const userConfigResourceV3UpdateSubscriptionsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([UserConfigResourceV3UpdateSubscriptionsParams] | [any, AxiosRequestConfig])) => {
    const params = isUserConfigResourceV3UpdateSubscriptionsObjectParams(config) ? config[0] : ['body', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as UserConfigResourceV3UpdateSubscriptionsParams;
    const { body, options = {} } = params;
    const localVarPath = `/user-config/subscriptions`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PUT' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: body,
    };

    return sendRequest<UserConfigResourceV3UpdateSubscriptionsReturnType>(Promise.resolve(args));
}

export default userConfigResourceV3UpdateSubscriptionsParamCreator;
