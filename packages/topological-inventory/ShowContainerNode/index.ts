// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ContainerNode, ErrorNotFound } from '../types';


export type ShowContainerNodeParams = {
  /**
  * ID of the resource
  * @type { string }
  * @memberof ShowContainerNodeApi
  */
  id: string,
  options?: AxiosRequestConfig
}

const isShowContainerNodeObjectParams = (params: [ShowContainerNodeParams] | unknown[]): params is [ShowContainerNodeParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id')
}
/**
* Returns a ContainerNode object
* @summary Show an existing ContainerNode
* @param {ShowContainerNodeParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const showContainerNodeParamCreator = async (...config: ([ShowContainerNodeParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isShowContainerNodeObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ShowContainerNodeParams;
    const { id, options = {} } = params;
    const localVarPath = `/container_nodes/{id}`
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

export default showContainerNodeParamCreator;
