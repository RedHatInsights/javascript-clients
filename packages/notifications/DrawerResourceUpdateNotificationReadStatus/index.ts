// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { UpdateNotificationDrawerStatus } from '../types';


export type DrawerResourceUpdateNotificationReadStatusParams = {
  /**
  *
  * @type { UpdateNotificationDrawerStatus }
  * @memberof DrawerResourceUpdateNotificationReadStatusApi
  */
  updateNotificationDrawerStatus: UpdateNotificationDrawerStatus,
  options?: AxiosRequestConfig
}

export type DrawerResourceUpdateNotificationReadStatusReturnType = AxiosPromise<any>;

const isDrawerResourceUpdateNotificationReadStatusObjectParams = (params: [DrawerResourceUpdateNotificationReadStatusParams] | unknown[]): params is [DrawerResourceUpdateNotificationReadStatusParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'updateNotificationDrawerStatus')
}
/**
* Update drawer notifications status.
* @summary Update drawer notifications status.
* @param {DrawerResourceUpdateNotificationReadStatusParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const drawerResourceUpdateNotificationReadStatusParamCreator = async (...config: ([DrawerResourceUpdateNotificationReadStatusParams] | [UpdateNotificationDrawerStatus, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isDrawerResourceUpdateNotificationReadStatusObjectParams(config) ? config[0] : ['updateNotificationDrawerStatus', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DrawerResourceUpdateNotificationReadStatusParams;
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

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: updateNotificationDrawerStatus,
    };
}

export default drawerResourceUpdateNotificationReadStatusParamCreator;
