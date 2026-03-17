// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ErrorNotFound, SourceRegion } from '../types';


export type ShowSourceRegionParams = {
  /**
  * ID of the resource
  * @type { string }
  * @memberof ShowSourceRegionApi
  */
  id: string,
  options?: AxiosRequestConfig
}

export type ShowSourceRegionReturnType = SourceRegion;

const isShowSourceRegionObjectParams = (params: [ShowSourceRegionParams] | unknown[]): params is [ShowSourceRegionParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
* Returns a SourceRegion object
* @summary Show an existing SourceRegion
* @param {ShowSourceRegionParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const showSourceRegionParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ShowSourceRegionParams] | [string, AxiosRequestConfig])) => {
    const params = isShowSourceRegionObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ShowSourceRegionParams;
    const { id, options = {} } = params;
    const localVarPath = `/source_regions/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
        auth:[
        {
        // authentication UserSecurity required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };

    return sendRequest<ShowSourceRegionReturnType>(Promise.resolve(args));
}

export default showSourceRegionParamCreator;
