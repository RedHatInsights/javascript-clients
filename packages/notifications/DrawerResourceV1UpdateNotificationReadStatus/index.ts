// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../utils/common';
import type { RequestArgs } from '../utils/base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, AuthTypeEnum } from '../utils/base';
import { Configuration } from '../utils/configuration';

// @ts-ignore
import type { UpdateNotificationDrawerStatus } from '../types';


export type DrawerResourceV1UpdateNotificationReadStatusParams = {
  /**
  *
  * @type { UpdateNotificationDrawerStatus }
  * @memberof DrawerResourceV1UpdateNotificationReadStatusApi
  */
  updateNotificationDrawerStatus?: UpdateNotificationDrawerStatus,
  options?: AxiosRequestConfig
}

const isDrawerResourceV1UpdateNotificationReadStatusObjectParams = (params: [DrawerResourceV1UpdateNotificationReadStatusParams] | unknown[]): params is [DrawerResourceV1UpdateNotificationReadStatusParams] => {
  return params.length === 1 && true
}
/**
* Update drawer notifications status.
* @summary Update drawer notifications status.
* @param {DrawerResourceV1UpdateNotificationReadStatusParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const drawerResourceV1UpdateNotificationReadStatusParamCreator = async (...config: ([DrawerResourceV1UpdateNotificationReadStatusParams] | [UpdateNotificationDrawerStatus, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isDrawerResourceV1UpdateNotificationReadStatusObjectParams(config) ? config[0] : ['updateNotificationDrawerStatus', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DrawerResourceV1UpdateNotificationReadStatusParams;
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

export default drawerResourceV1UpdateNotificationReadStatusParamCreator;
