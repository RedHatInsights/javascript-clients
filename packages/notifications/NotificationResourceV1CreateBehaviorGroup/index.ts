// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { CreateBehaviorGroupRequest, CreateBehaviorGroupResponse } from '../types';


export type NotificationResourceV1CreateBehaviorGroupParams = {
  /**
  *
  * @type { CreateBehaviorGroupRequest }
  * @memberof NotificationResourceV1CreateBehaviorGroupApi
  */
  createBehaviorGroupRequest: CreateBehaviorGroupRequest,
  options?: AxiosRequestConfig
}

export type NotificationResourceV1CreateBehaviorGroupReturnType = CreateBehaviorGroupResponse;

const isNotificationResourceV1CreateBehaviorGroupObjectParams = (params: [NotificationResourceV1CreateBehaviorGroupParams] | unknown[]): params is [NotificationResourceV1CreateBehaviorGroupParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'createBehaviorGroupRequest')
  }
  return false
}
/**
* Creates a behavior group that defines which notifications will be sent to external services after an event is received. Use this endpoint to control the types of events users are notified about.
* @summary Create a behavior group
* @param {NotificationResourceV1CreateBehaviorGroupParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1CreateBehaviorGroupParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([NotificationResourceV1CreateBehaviorGroupParams] | [CreateBehaviorGroupRequest, AxiosRequestConfig])) => {
    const params = isNotificationResourceV1CreateBehaviorGroupObjectParams(config) ? config[0] : ['createBehaviorGroupRequest', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV1CreateBehaviorGroupParams;
    const { createBehaviorGroupRequest, options = {} } = params;
    const localVarPath = `/notifications/behaviorGroups`;
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
        serializeData: createBehaviorGroupRequest,
    };

    return sendRequest<NotificationResourceV1CreateBehaviorGroupReturnType>(Promise.resolve(args));
}

export default notificationResourceV1CreateBehaviorGroupParamCreator;
