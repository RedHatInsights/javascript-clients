// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ErrorNotFound, Flavor } from '../types';


export type ShowFlavorParams = {
  /**
  * ID of the resource
  * @type { string }
  * @memberof ShowFlavorApi
  */
  id: string,
  options?: AxiosRequestConfig
}

export type ShowFlavorReturnType = AxiosPromise<Flavor>;

const isShowFlavorObjectParams = (params: [ShowFlavorParams] | unknown[]): params is [ShowFlavorParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'id')
}
/**
* Returns a Flavor object
* @summary Show an existing Flavor
* @param {ShowFlavorParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const showFlavorParamCreator = async (...config: ([ShowFlavorParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isShowFlavorObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ShowFlavorParams;
    const { id, options = {} } = params;
    const localVarPath = `/flavors/{id}`
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

export default showFlavorParamCreator;
