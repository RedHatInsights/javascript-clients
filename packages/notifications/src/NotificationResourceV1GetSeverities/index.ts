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


export type NotificationResourceV1GetSeveritiesParams = {
  options?: AxiosRequestConfig
}

export type NotificationResourceV1GetSeveritiesReturnType = any;

const isNotificationResourceV1GetSeveritiesObjectParams = (params: [NotificationResourceV1GetSeveritiesParams] | unknown[]): params is [NotificationResourceV1GetSeveritiesParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Returns the list of available notification severities
* @summary List configured severities
* @param {NotificationResourceV1GetSeveritiesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV1GetSeveritiesParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([NotificationResourceV1GetSeveritiesParams] | [AxiosRequestConfig])) => {
    const params = isNotificationResourceV1GetSeveritiesObjectParams(config) ? config[0] : ['options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV1GetSeveritiesParams;
    const { options = {} } = params;
    const localVarPath = `/notifications/severities`;
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

    return sendRequest<NotificationResourceV1GetSeveritiesReturnType>(Promise.resolve(args));
}

export default notificationResourceV1GetSeveritiesParamCreator;
