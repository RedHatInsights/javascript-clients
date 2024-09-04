// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Application, ErrorNotFound } from '../types';


export type UpdateApplicationParams = {
  /**
  * ID of the resource
  * @type { string }
  * @memberof UpdateApplicationApi
  */
  id: string,
  /**
  * Application attributes to update
  * @type { Application }
  * @memberof UpdateApplicationApi
  */
  application: Application,
  options?: AxiosRequestConfig
}

const isUpdateApplicationObjectParams = (params: [UpdateApplicationParams] | unknown[]): params is [UpdateApplicationParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id') && Object.prototype.hasOwnProperty.call(params, 'application')
}
/**
* Updates a Application object
* @summary Update an existing Application
* @param {UpdateApplicationParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const updateApplicationParamCreator = async (...config: ([UpdateApplicationParams] | [string, Application, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isUpdateApplicationObjectParams(config) ? config[0] : ['id', 'application', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as UpdateApplicationParams;
    const { id, application, options = {} } = params;
    const localVarPath = `/applications/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PATCH' as Method, ...options};
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

export default updateApplicationParamCreator;
