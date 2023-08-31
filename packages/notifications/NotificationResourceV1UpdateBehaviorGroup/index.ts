// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../utils/common';
import type { RequestArgs } from '../utils/base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, AuthTypeEnum } from '../utils/base';
import { Configuration } from '../utils/configuration';

// @ts-ignore
import type { UpdateBehaviorGroupRequest } from '../types';


export type NotificationResourceV1UpdateBehaviorGroupParams = {
  /**
  * The UUID of the behavior group to update
  * @type { string }
  * @memberof NotificationResourceV1UpdateBehaviorGroupApi
  */
  id: string,
  /**
  * New parameters
  * @type { UpdateBehaviorGroupRequest }
  * @memberof NotificationResourceV1UpdateBehaviorGroupApi
  */
  updateBehaviorGroupRequest: UpdateBehaviorGroupRequest,
  options?: AxiosRequestConfig
}

const isNotificationResourceV1UpdateBehaviorGroupObjectParams = (params: [NotificationResourceV1UpdateBehaviorGroupParams] | unknown[]): params is [NotificationResourceV1UpdateBehaviorGroupParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id') && Object.prototype.hasOwnProperty.call(params, 'updateBehaviorGroupRequest')
}
/**
*
* @summary Update a behavior group.
* @param {NotificationResourceV1UpdateBehaviorGroupParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1UpdateBehaviorGroupParamCreator = async (...config: ([NotificationResourceV1UpdateBehaviorGroupParams] | [string, UpdateBehaviorGroupRequest, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isNotificationResourceV1UpdateBehaviorGroupObjectParams(config) ? config[0] : ['id', 'updateBehaviorGroupRequest', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV1UpdateBehaviorGroupParams;
    const { id, updateBehaviorGroupRequest, options = {} } = params;
    const localVarPath = `/notifications/behaviorGroups/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
        serializeData: updateBehaviorGroupRequest,
    };
}

export default notificationResourceV1UpdateBehaviorGroupParamCreator;
