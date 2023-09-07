// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../utils/common';
import type { RequestArgs } from '../utils/base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, AuthTypeEnum } from '../utils/base';
import { Configuration } from '../utils/configuration';

// @ts-ignore
import type {  } from '../types';


export type NotificationResourceV1DeleteBehaviorGroupParams = {
  /**
  * The UUID of the behavior group to delete
  * @type { string }
  * @memberof NotificationResourceV1DeleteBehaviorGroupApi
  */
  id: string,
  options?: AxiosRequestConfig
}

const isNotificationResourceV1DeleteBehaviorGroupObjectParams = (params: [NotificationResourceV1DeleteBehaviorGroupParams] | unknown[]): params is [NotificationResourceV1DeleteBehaviorGroupParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id')
}
/**
*
* @summary Delete a behavior group.
* @param {NotificationResourceV1DeleteBehaviorGroupParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1DeleteBehaviorGroupParamCreator = async (...config: ([NotificationResourceV1DeleteBehaviorGroupParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
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

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default notificationResourceV1DeleteBehaviorGroupParamCreator;
