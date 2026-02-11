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


export type NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParams = {
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointApi
  */
  endpointId: any,
  options?: AxiosRequestConfig
}

export type NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointReturnType = any;

const isNotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointObjectParams = (params: [NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParams] | unknown[]): params is [NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'endpointId')
  }
  return false
}
/**
* Lists the behavior groups that are affected by the removal of an endpoint. Use this endpoint to understand how removing an endpoint affects existing behavior groups.
* @summary List the behavior groups affected by the removal of an endpoint
* @param {NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParams] | [any, AxiosRequestConfig])) => {
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

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointReturnType>(Promise.resolve(args));
}

export default notificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParamCreator;
