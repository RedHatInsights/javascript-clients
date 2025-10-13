// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Application } from '../types';


export type CreateApplicationParams = {
  /**
  * Application attributes to create
  * @type { Application }
  * @memberof CreateApplicationApi
  */
  application: Application,
  options?: AxiosRequestConfig
}

export type CreateApplicationReturnType = AxiosPromise<Application>;

const isCreateApplicationObjectParams = (params: [CreateApplicationParams] | unknown[]): params is [CreateApplicationParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true  && Object.prototype.hasOwnProperty.call(params[0], 'application')
  }
  return false
}
/**
* Creates a Application object
* @summary Create a new Application
* @param {CreateApplicationParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const createApplicationParamCreator = async (...config: ([CreateApplicationParams] | [Application, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isCreateApplicationObjectParams(config) ? config[0] : ['application', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as CreateApplicationParams;
    const { application, options = {} } = params;
    const localVarPath = `/applications`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: application,
        auth:[
        {
        // authentication UserSecurity required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };
}

export default createApplicationParamCreator;
