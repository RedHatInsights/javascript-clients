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


export type NotificationResourceV2DeleteBehaviorGroupParams = {
  /**
  * The UUID of the behavior group to delete
  * @type { any }
  * @memberof NotificationResourceV2DeleteBehaviorGroupApi
  */
  id: any,
  options?: AxiosRequestConfig
}

export type NotificationResourceV2DeleteBehaviorGroupReturnType = AxiosPromise<any>;

const isNotificationResourceV2DeleteBehaviorGroupObjectParams = (params: [NotificationResourceV2DeleteBehaviorGroupParams] | unknown[]): params is [NotificationResourceV2DeleteBehaviorGroupParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id')
}
/**
* Deletes a behavior group and all of its configured actions. Use this endpoint when you no longer need a behavior group.
* @summary Delete a behavior group
* @param {NotificationResourceV2DeleteBehaviorGroupParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV2DeleteBehaviorGroupParamCreator = async (...config: ([NotificationResourceV2DeleteBehaviorGroupParams] | [any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isNotificationResourceV2DeleteBehaviorGroupObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV2DeleteBehaviorGroupParams;
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

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default notificationResourceV2DeleteBehaviorGroupParamCreator;
