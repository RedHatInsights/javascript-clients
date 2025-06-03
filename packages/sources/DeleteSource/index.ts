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


export type DeleteSourceParams = {
  /**
  * ID of the resource
  * @type { string }
  * @memberof DeleteSourceApi
  */
  id: string,
  options?: AxiosRequestConfig
}

export type DeleteSourceReturnType = AxiosPromise<void>;

const isDeleteSourceObjectParams = (params: [DeleteSourceParams] | unknown[]): params is [DeleteSourceParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'id')
}
/**
* Deletes a Source object
* @summary Delete an existing Source
* @param {DeleteSourceParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const deleteSourceParamCreator = async (...config: ([DeleteSourceParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isDeleteSourceObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DeleteSourceParams;
    const { id, options = {} } = params;
    const localVarPath = `/sources/{id}`
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

export default deleteSourceParamCreator;
