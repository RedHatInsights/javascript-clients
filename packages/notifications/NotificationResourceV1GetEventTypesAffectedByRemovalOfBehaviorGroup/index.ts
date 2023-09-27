// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../utils/common';
import type { RequestArgs } from '../utils/base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, AuthTypeEnum } from '../utils/base';
import { Configuration } from '../utils/configuration';

// @ts-ignore
import type { EventType } from '../types';


export type NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParams = {
  /**
  * The UUID of the behavior group to check
  * @type { string }
  * @memberof NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupApi
  */
  behaviorGroupId: string,
  options?: AxiosRequestConfig
}

const isNotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupObjectParams = (params: [NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParams] | unknown[]): params is [NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'behaviorGroupId')
}
/**
* Lists the event types that will be affected by the removal of a behavior group. Use this endpoint to see which event types will be removed if you delete a behavior group.
* @summary List the event types affected by the removal of a behavior group
* @param {NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParamCreator = async (...config: ([NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isNotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupObjectParams(config) ? config[0] : ['behaviorGroupId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParams;
    const { behaviorGroupId, options = {} } = params;
    const localVarPath = `/notifications/eventTypes/affectedByRemovalOfBehaviorGroup/{behaviorGroupId}`
        .replace(`{${"behaviorGroupId"}}`, encodeURIComponent(String(behaviorGroupId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default notificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParamCreator;
