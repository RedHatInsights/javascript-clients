// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../utils/common';
import type { RequestArgs } from '../utils/base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, AuthTypeEnum } from '../utils/base';
import { Configuration } from '../utils/configuration';

// @ts-ignore
import type {  } from '../types';


export type NotificationResourceV1UpdateBehaviorGroupActionsParams = {
  /**
  * The UUID of the behavior group to update
  * @type { string }
  * @memberof NotificationResourceV1UpdateBehaviorGroupActionsApi
  */
  behaviorGroupId: string,
  /**
  *
  * @type { Array<string> }
  * @memberof NotificationResourceV1UpdateBehaviorGroupActionsApi
  */
  requestBody?: Array<string>,
  options?: AxiosRequestConfig
}

const isNotificationResourceV1UpdateBehaviorGroupActionsObjectParams = (params: [NotificationResourceV1UpdateBehaviorGroupActionsParams] | unknown[]): params is [NotificationResourceV1UpdateBehaviorGroupActionsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'behaviorGroupId') && true
}
/**
* Updates the list of actions to be executed in that particular behavior group after an event is received.
* @summary Update the list of behavior group actions
* @param {NotificationResourceV1UpdateBehaviorGroupActionsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1UpdateBehaviorGroupActionsParamCreator = async (...config: ([NotificationResourceV1UpdateBehaviorGroupActionsParams] | [string, Array<string>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isNotificationResourceV1UpdateBehaviorGroupActionsObjectParams(config) ? config[0] : ['behaviorGroupId', 'requestBody', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV1UpdateBehaviorGroupActionsParams;
    const { behaviorGroupId, requestBody, options = {} } = params;
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
        serializeData: requestBody,
    };
}

export default notificationResourceV1UpdateBehaviorGroupActionsParamCreator;
