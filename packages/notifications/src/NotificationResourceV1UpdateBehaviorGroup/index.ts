// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { UpdateBehaviorGroupRequest } from '../types';


export type NotificationResourceV1UpdateBehaviorGroupParams = {
  /**
  * The UUID of the behavior group to update
  * @type { any }
  * @memberof NotificationResourceV1UpdateBehaviorGroupApi
  */
  id: any,
  /**
  * New parameters
  * @type { UpdateBehaviorGroupRequest }
  * @memberof NotificationResourceV1UpdateBehaviorGroupApi
  */
  updateBehaviorGroupRequest: UpdateBehaviorGroupRequest,
  options?: AxiosRequestConfig
}

export type NotificationResourceV1UpdateBehaviorGroupReturnType = any;

const isNotificationResourceV1UpdateBehaviorGroupObjectParams = (params: [NotificationResourceV1UpdateBehaviorGroupParams] | unknown[]): params is [NotificationResourceV1UpdateBehaviorGroupParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id') && Object.prototype.hasOwnProperty.call(params[0], 'updateBehaviorGroupRequest')
  }
  return false
}
/**
* Updates the details of a behavior group. Use this endpoint to update the list of related endpoints and event types associated with this behavior group.
* @summary Update a behavior group
* @param {NotificationResourceV1UpdateBehaviorGroupParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1UpdateBehaviorGroupParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([NotificationResourceV1UpdateBehaviorGroupParams] | [any, UpdateBehaviorGroupRequest, AxiosRequestConfig])) => {
    const params = isNotificationResourceV1UpdateBehaviorGroupObjectParams(config) ? config[0] : ['id', 'updateBehaviorGroupRequest', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV1UpdateBehaviorGroupParams;
    const { id, updateBehaviorGroupRequest, options = {} } = params;
    const localVarPath = `/notifications/behaviorGroups/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
        serializeData: updateBehaviorGroupRequest,
    };

    return sendRequest<NotificationResourceV1UpdateBehaviorGroupReturnType>(Promise.resolve(args));
}

export default notificationResourceV1UpdateBehaviorGroupParamCreator;
