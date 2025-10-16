// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ContainerProject, ErrorNotFound } from '../types';


export type ShowContainerProjectParams = {
  /**
  * ID of the resource
  * @type { string }
  * @memberof ShowContainerProjectApi
  */
  id: string,
  options?: AxiosRequestConfig
}

export type ShowContainerProjectReturnType = ContainerProject;

const isShowContainerProjectObjectParams = (params: [ShowContainerProjectParams] | unknown[]): params is [ShowContainerProjectParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
* Returns a ContainerProject object
* @summary Show an existing ContainerProject
* @param {ShowContainerProjectParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const showContainerProjectParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ShowContainerProjectParams] | [string, AxiosRequestConfig])) => {
    const params = isShowContainerProjectObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ShowContainerProjectParams;
    const { id, options = {} } = params;
    const localVarPath = `/container_projects/{id}`
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

    return sendRequest<ShowContainerProjectReturnType>(Promise.resolve(args));
}

export default showContainerProjectParamCreator;
