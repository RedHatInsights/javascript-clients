// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../utils/common';
import type { RequestArgs } from '../utils/base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, AuthTypeEnum } from '../utils/base';
import { Configuration } from '../utils/configuration';

// @ts-ignore
import type { BehaviorGroup } from '../types';


export type NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParams = {
  /**
  *
  * @type { string }
  * @memberof NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointApi
  */
  endpointId: string,
  options?: AxiosRequestConfig
}

const isNotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointObjectParams = (params: [NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParams] | unknown[]): params is [NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'endpointId')
}
/**
*
* @summary Retrieve the behavior groups affected by the removal of an endpoint.
* @param {NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParamCreator = async (...config: ([NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isNotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointObjectParams(config) ? config[0] : ['endpointId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParams;
    const { endpointId, options = {} } = params;
    const localVarPath = `/notifications/behaviorGroups/affectedByRemovalOfEndpoint/{endpointId}`
        .replace(`{${"endpointId"}}`, encodeURIComponent(String(endpointId)));
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

export default notificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParamCreator;
