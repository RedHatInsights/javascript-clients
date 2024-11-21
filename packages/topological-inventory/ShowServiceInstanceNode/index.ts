// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ErrorNotFound, ServiceInstanceNode } from '../types';


export type ShowServiceInstanceNodeParams = {
  /**
  * ID of the resource
  * @type { string }
  * @memberof ShowServiceInstanceNodeApi
  */
  id: string,
  options?: AxiosRequestConfig
}

export type ShowServiceInstanceNodeReturnType = AxiosPromise<ServiceInstanceNode>;

const isShowServiceInstanceNodeObjectParams = (params: [ShowServiceInstanceNodeParams] | unknown[]): params is [ShowServiceInstanceNodeParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id')
}
/**
* Returns a ServiceInstanceNode object
* @summary Show an existing ServiceInstanceNode
* @param {ShowServiceInstanceNodeParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const showServiceInstanceNodeParamCreator = async (...config: ([ShowServiceInstanceNodeParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isShowServiceInstanceNodeObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ShowServiceInstanceNodeParams;
    const { id, options = {} } = params;
    const localVarPath = `/service_instance_nodes/{id}`
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

export default showServiceInstanceNodeParamCreator;
