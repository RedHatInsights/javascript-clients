import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

import type { UpdateNotificationDrawerStatus } from '../types';


export type DrawerResourceV3UpdateNotificationReadStatusParams = {
  /**
  *
  * @type { UpdateNotificationDrawerStatus }
  * @memberof DrawerResourceV3UpdateNotificationReadStatusApi
  */
  updateNotificationDrawerStatus: UpdateNotificationDrawerStatus,
  options?: AxiosRequestConfig
}

export type DrawerResourceV3UpdateNotificationReadStatusReturnType = any;

const isDrawerResourceV3UpdateNotificationReadStatusObjectParams = (params: [DrawerResourceV3UpdateNotificationReadStatusParams] | unknown[]): params is [DrawerResourceV3UpdateNotificationReadStatusParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'updateNotificationDrawerStatus')
  }
  return false
}
/**
* Update drawer notifications status.
* @summary Update drawer notifications status.
* @param {DrawerResourceV3UpdateNotificationReadStatusParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const drawerResourceV3UpdateNotificationReadStatusParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([DrawerResourceV3UpdateNotificationReadStatusParams] | [UpdateNotificationDrawerStatus, AxiosRequestConfig])) => {
    const params = isDrawerResourceV3UpdateNotificationReadStatusObjectParams(config) ? config[0] : ['updateNotificationDrawerStatus', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DrawerResourceV3UpdateNotificationReadStatusParams;
    const { updateNotificationDrawerStatus, options = {} } = params;
    const localVarPath = `/notifications/drawer/read`;
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
        serializeData: updateNotificationDrawerStatus,
    };

    return sendRequest<DrawerResourceV3UpdateNotificationReadStatusReturnType>(Promise.resolve(args));
}

export default drawerResourceV3UpdateNotificationReadStatusParamCreator;
