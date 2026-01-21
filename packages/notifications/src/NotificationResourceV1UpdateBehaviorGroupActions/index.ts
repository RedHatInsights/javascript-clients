// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type {  } from '../types';


export type NotificationResourceV1UpdateBehaviorGroupActionsParams = {
  /**
  * The UUID of the behavior group to update
  * @type { any }
  * @memberof NotificationResourceV1UpdateBehaviorGroupActionsApi
  */
  behaviorGroupId: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV1UpdateBehaviorGroupActionsApi
  */
  body: any,
  options?: AxiosRequestConfig
}

export type NotificationResourceV1UpdateBehaviorGroupActionsReturnType = any;

const isNotificationResourceV1UpdateBehaviorGroupActionsObjectParams = (params: [NotificationResourceV1UpdateBehaviorGroupActionsParams] | unknown[]): params is [NotificationResourceV1UpdateBehaviorGroupActionsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'behaviorGroupId') && Object.prototype.hasOwnProperty.call(params[0], 'body')
  }
  return false
}
/**
* Updates the list of actions to be executed in that particular behavior group after an event is received.
* @summary Update the list of behavior group actions
* @param {NotificationResourceV1UpdateBehaviorGroupActionsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1UpdateBehaviorGroupActionsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([NotificationResourceV1UpdateBehaviorGroupActionsParams] | [any, any, AxiosRequestConfig])) => {
    const params = isNotificationResourceV1UpdateBehaviorGroupActionsObjectParams(config) ? config[0] : ['behaviorGroupId', 'body', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV1UpdateBehaviorGroupActionsParams;
    const { behaviorGroupId, body, options = {} } = params;
    const localVarPath = `/notifications/behaviorGroups/{behaviorGroupId}/actions`
        .replace(`{${"behaviorGroupId"}}`, encodeURIComponent(String(behaviorGroupId)));
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

    return sendRequest<NotificationResourceV1UpdateBehaviorGroupActionsReturnType>(Promise.resolve(args));
}

export default notificationResourceV1UpdateBehaviorGroupActionsParamCreator;
