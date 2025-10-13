// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ErrorNotFound, OrchestrationStack } from '../types';


export type ShowOrchestrationStackParams = {
  /**
  * ID of the resource
  * @type { string }
  * @memberof ShowOrchestrationStackApi
  */
  id: string,
  options?: AxiosRequestConfig
}

export type ShowOrchestrationStackReturnType = AxiosPromise<OrchestrationStack>;

const isShowOrchestrationStackObjectParams = (params: [ShowOrchestrationStackParams] | unknown[]): params is [ShowOrchestrationStackParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
* Returns a OrchestrationStack object
* @summary Show an existing OrchestrationStack
* @param {ShowOrchestrationStackParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const showOrchestrationStackParamCreator = async (...config: ([ShowOrchestrationStackParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isShowOrchestrationStackObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ShowOrchestrationStackParams;
    const { id, options = {} } = params;
    const localVarPath = `/orchestration_stacks/{id}`
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

export default showOrchestrationStackParamCreator;
