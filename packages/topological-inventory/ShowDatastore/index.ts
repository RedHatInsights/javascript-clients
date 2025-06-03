// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Datastore, ErrorNotFound } from '../types';


export type ShowDatastoreParams = {
  /**
  * ID of the resource
  * @type { string }
  * @memberof ShowDatastoreApi
  */
  id: string,
  options?: AxiosRequestConfig
}

export type ShowDatastoreReturnType = AxiosPromise<Datastore>;

const isShowDatastoreObjectParams = (params: [ShowDatastoreParams] | unknown[]): params is [ShowDatastoreParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'id')
}
/**
* Returns a Datastore object
* @summary Show an existing Datastore
* @param {ShowDatastoreParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const showDatastoreParamCreator = async (...config: ([ShowDatastoreParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isShowDatastoreObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ShowDatastoreParams;
    const { id, options = {} } = params;
    const localVarPath = `/datastores/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
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

export default showDatastoreParamCreator;
