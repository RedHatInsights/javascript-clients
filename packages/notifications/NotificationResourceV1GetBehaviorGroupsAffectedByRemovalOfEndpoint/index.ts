// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

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
* Lists the behavior groups that are affected by the removal of an endpoint. Use this endpoint to understand how removing an endpoint affects existing behavior groups.
* @summary List the behavior groups affected by the removal of an endpoint
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
