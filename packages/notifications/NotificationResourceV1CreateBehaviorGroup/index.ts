// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../utils/common';
import type { RequestArgs } from '../utils/base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, AuthTypeEnum } from '../utils/base';
import { Configuration } from '../utils/configuration';

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

const isNotificationResourceV1CreateBehaviorGroupObjectParams = (params: [NotificationResourceV1CreateBehaviorGroupParams] | unknown[]): params is [NotificationResourceV1CreateBehaviorGroupParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'createBehaviorGroupRequest')
}
/**
* Creates a behavior group that defines which notifications will be sent to external services after an event is received. Use this endpoint to control the types of events users are notified about.
* @summary Create a behavior group
* @param {NotificationResourceV1CreateBehaviorGroupParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1CreateBehaviorGroupParamCreator = async (...config: ([NotificationResourceV1CreateBehaviorGroupParams] | [CreateBehaviorGroupRequest, AxiosRequestConfig])): Promise<RequestArgs> => {
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

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: createBehaviorGroupRequest,
    };
}

export default notificationResourceV1CreateBehaviorGroupParamCreator;
