// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../utils/common';
import type { RequestArgs } from '../utils/base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, AuthTypeEnum } from '../utils/base';
import { Configuration } from '../utils/configuration';

// @ts-ignore
import type { BehaviorGroup } from '../types';


export type NotificationResourceV1FindBehaviorGroupsByBundleIdParams = {
  /**
  * UUID of the bundle to retrieve the behavior groups for.
  * @type { string }
  * @memberof NotificationResourceV1FindBehaviorGroupsByBundleIdApi
  */
  bundleId: string,
  options?: AxiosRequestConfig
}

const isNotificationResourceV1FindBehaviorGroupsByBundleIdObjectParams = (params: [NotificationResourceV1FindBehaviorGroupsByBundleIdParams] | unknown[]): params is [NotificationResourceV1FindBehaviorGroupsByBundleIdParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'bundleId')
}
/**
*
* @summary Retrieve the behavior groups of a bundle.
* @param {NotificationResourceV1FindBehaviorGroupsByBundleIdParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1FindBehaviorGroupsByBundleIdParamCreator = async (...config: ([NotificationResourceV1FindBehaviorGroupsByBundleIdParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isNotificationResourceV1FindBehaviorGroupsByBundleIdObjectParams(config) ? config[0] : ['bundleId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV1FindBehaviorGroupsByBundleIdParams;
    const { bundleId, options = {} } = params;
    const localVarPath = `/notifications/bundles/{bundleId}/behaviorGroups`
        .replace(`{${"bundleId"}}`, encodeURIComponent(String(bundleId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET', ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default notificationResourceV1FindBehaviorGroupsByBundleIdParamCreator;
