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


export type NotificationResourceV1DeleteBehaviorGroupParams = {
  /**
  * The UUID of the behavior group to delete
  * @type { any }
  * @memberof NotificationResourceV1DeleteBehaviorGroupApi
  */
  id: any,
  options?: AxiosRequestConfig
}

export type NotificationResourceV1DeleteBehaviorGroupReturnType = any;

const isNotificationResourceV1DeleteBehaviorGroupObjectParams = (params: [NotificationResourceV1DeleteBehaviorGroupParams] | unknown[]): params is [NotificationResourceV1DeleteBehaviorGroupParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
* Deletes a behavior group and all of its configured actions. Use this endpoint when you no longer need a behavior group.
* @summary Delete a behavior group
* @param {NotificationResourceV1DeleteBehaviorGroupParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1DeleteBehaviorGroupParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([NotificationResourceV1DeleteBehaviorGroupParams] | [any, AxiosRequestConfig])) => {
    const params = isNotificationResourceV1DeleteBehaviorGroupObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV1DeleteBehaviorGroupParams;
    const { id, options = {} } = params;
    const localVarPath = `/notifications/behaviorGroups/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'DELETE' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<NotificationResourceV1DeleteBehaviorGroupReturnType>(Promise.resolve(args));
}

export default notificationResourceV1DeleteBehaviorGroupParamCreator;
