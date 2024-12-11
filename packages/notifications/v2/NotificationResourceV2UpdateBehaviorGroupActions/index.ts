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


export type NotificationResourceV2UpdateBehaviorGroupActionsParams = {
  /**
  * The UUID of the behavior group to update
  * @type { any }
  * @memberof NotificationResourceV2UpdateBehaviorGroupActionsApi
  */
  behaviorGroupId: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV2UpdateBehaviorGroupActionsApi
  */
  body: any,
  options?: AxiosRequestConfig
}

export type NotificationResourceV2UpdateBehaviorGroupActionsReturnType = AxiosPromise<any>;

const isNotificationResourceV2UpdateBehaviorGroupActionsObjectParams = (params: [NotificationResourceV2UpdateBehaviorGroupActionsParams] | unknown[]): params is [NotificationResourceV2UpdateBehaviorGroupActionsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'behaviorGroupId') && Object.prototype.hasOwnProperty.call(params, 'body')
}
/**
* Updates the list of actions to be executed in that particular behavior group after an event is received.
* @summary Update the list of behavior group actions
* @param {NotificationResourceV2UpdateBehaviorGroupActionsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV2UpdateBehaviorGroupActionsParamCreator = async (...config: ([NotificationResourceV2UpdateBehaviorGroupActionsParams] | [any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isNotificationResourceV2UpdateBehaviorGroupActionsObjectParams(config) ? config[0] : ['behaviorGroupId', 'body', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV2UpdateBehaviorGroupActionsParams;
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

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: body,
    };
}

export default notificationResourceV2UpdateBehaviorGroupActionsParamCreator;
