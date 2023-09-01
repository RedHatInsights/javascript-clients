// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../utils/common';
import type { RequestArgs } from '../utils/base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, AuthTypeEnum } from '../utils/base';
import { Configuration } from '../utils/configuration';

// @ts-ignore
import type {  } from '../types';


export type NotificationResourceV1UpdateEventTypeBehaviorsParams = {
  /**
  * UUID of the eventType to associate with the behavior group(s)
  * @type { string }
  * @memberof NotificationResourceV1UpdateEventTypeBehaviorsApi
  */
  eventTypeId: string,
  /**
  *
  * @type { Set<string> }
  * @memberof NotificationResourceV1UpdateEventTypeBehaviorsApi
  */
  requestBody?: Set<string>,
  options?: AxiosRequestConfig
}

const isNotificationResourceV1UpdateEventTypeBehaviorsObjectParams = (params: [NotificationResourceV1UpdateEventTypeBehaviorsParams] | unknown[]): params is [NotificationResourceV1UpdateEventTypeBehaviorsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'eventTypeId') && true
}
/**
*
* @summary Update the list of behavior groups of an event type.
* @param {NotificationResourceV1UpdateEventTypeBehaviorsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1UpdateEventTypeBehaviorsParamCreator = async (...config: ([NotificationResourceV1UpdateEventTypeBehaviorsParams] | [string, Set<string>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isNotificationResourceV1UpdateEventTypeBehaviorsObjectParams(config) ? config[0] : ['eventTypeId', 'requestBody', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV1UpdateEventTypeBehaviorsParams;
    const { eventTypeId, requestBody, options = {} } = params;
    const localVarPath = `/notifications/eventTypes/{eventTypeId}/behaviorGroups`
        .replace(`{${"eventTypeId"}}`, encodeURIComponent(String(eventTypeId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PUT', ...options};
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

export default notificationResourceV1UpdateEventTypeBehaviorsParamCreator;
