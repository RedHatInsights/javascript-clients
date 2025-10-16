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


export type NotificationResourceV1FindBehaviorGroupsByBundleIdParams = {
  /**
  * UUID of the bundle to retrieve the behavior groups for.
  * @type { any }
  * @memberof NotificationResourceV1FindBehaviorGroupsByBundleIdApi
  */
  bundleId: any,
  options?: AxiosRequestConfig
}

export type NotificationResourceV1FindBehaviorGroupsByBundleIdReturnType = any;

const isNotificationResourceV1FindBehaviorGroupsByBundleIdObjectParams = (params: [NotificationResourceV1FindBehaviorGroupsByBundleIdParams] | unknown[]): params is [NotificationResourceV1FindBehaviorGroupsByBundleIdParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'bundleId')
  }
  return false
}
/**
* Lists the behavior groups associated with a bundle. Use this endpoint to see the behavior groups that are configured for a particular bundle for a particular tenant.
* @summary List behavior groups in a bundle
* @param {NotificationResourceV1FindBehaviorGroupsByBundleIdParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1FindBehaviorGroupsByBundleIdParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([NotificationResourceV1FindBehaviorGroupsByBundleIdParams] | [any, AxiosRequestConfig])) => {
    const params = isNotificationResourceV1FindBehaviorGroupsByBundleIdObjectParams(config) ? config[0] : ['bundleId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV1FindBehaviorGroupsByBundleIdParams;
    const { bundleId, options = {} } = params;
    const localVarPath = `/notifications/bundles/{bundleId}/behaviorGroups`
        .replace(`{${"bundleId"}}`, encodeURIComponent(String(bundleId)));
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

    return sendRequest<NotificationResourceV1FindBehaviorGroupsByBundleIdReturnType>(Promise.resolve(args));
}

export default notificationResourceV1FindBehaviorGroupsByBundleIdParamCreator;
