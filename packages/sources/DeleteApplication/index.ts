// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ErrorNotFound } from '../types';


export type DeleteApplicationParams = {
  /**
  * ID of the resource
  * @type { string }
  * @memberof DeleteApplicationApi
  */
  id: string,
  options?: AxiosRequestConfig
}

export type DeleteApplicationReturnType = AxiosPromise<void>;

const isDeleteApplicationObjectParams = (params: [DeleteApplicationParams] | unknown[]): params is [DeleteApplicationParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true  && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
* Deletes a Application object
* @summary Delete an existing Application
* @param {DeleteApplicationParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const deleteApplicationParamCreator = async (...config: ([DeleteApplicationParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isDeleteApplicationObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DeleteApplicationParams;
    const { id, options = {} } = params;
    const localVarPath = `/applications/{id}`
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
        auth:[
        {
        // authentication UserSecurity required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };
}

export default deleteApplicationParamCreator;
