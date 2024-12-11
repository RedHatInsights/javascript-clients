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


export type NotificationResourceV2GetEventTypesAffectedByRemovalOfBehaviorGroupParams = {
  /**
  * The UUID of the behavior group to check
  * @type { any }
  * @memberof NotificationResourceV2GetEventTypesAffectedByRemovalOfBehaviorGroupApi
  */
  behaviorGroupId: any,
  options?: AxiosRequestConfig
}

export type NotificationResourceV2GetEventTypesAffectedByRemovalOfBehaviorGroupReturnType = AxiosPromise<any>;

const isNotificationResourceV2GetEventTypesAffectedByRemovalOfBehaviorGroupObjectParams = (params: [NotificationResourceV2GetEventTypesAffectedByRemovalOfBehaviorGroupParams] | unknown[]): params is [NotificationResourceV2GetEventTypesAffectedByRemovalOfBehaviorGroupParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'behaviorGroupId')
}
/**
* Lists the event types that will be affected by the removal of a behavior group. Use this endpoint to see which event types will be removed if you delete a behavior group.
* @summary List the event types affected by the removal of a behavior group
* @param {NotificationResourceV2GetEventTypesAffectedByRemovalOfBehaviorGroupParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV2GetEventTypesAffectedByRemovalOfBehaviorGroupParamCreator = async (...config: ([NotificationResourceV2GetEventTypesAffectedByRemovalOfBehaviorGroupParams] | [any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isNotificationResourceV2GetEventTypesAffectedByRemovalOfBehaviorGroupObjectParams(config) ? config[0] : ['behaviorGroupId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV2GetEventTypesAffectedByRemovalOfBehaviorGroupParams;
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

export default notificationResourceV2GetEventTypesAffectedByRemovalOfBehaviorGroupParamCreator;
