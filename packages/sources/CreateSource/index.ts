// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Source } from '../types';


export type CreateSourceParams = {
  /**
  * Source attributes to create
  * @type { Source }
  * @memberof CreateSourceApi
  */
  source: Source,
  options?: AxiosRequestConfig
}

export type CreateSourceReturnType = Source;

const isCreateSourceObjectParams = (params: [CreateSourceParams] | unknown[]): params is [CreateSourceParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'source')
  }
  return false
}
/**
* Creates a Source object
* @summary Create a new Source
* @param {CreateSourceParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const createSourceParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([CreateSourceParams] | [Source, AxiosRequestConfig])) => {
    const params = isCreateSourceObjectParams(config) ? config[0] : ['source', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as CreateSourceParams;
    const { source, options = {} } = params;
    const localVarPath = `/sources`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: source,
        auth:[
        {
        // authentication UserSecurity required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };

    return sendRequest<CreateSourceReturnType>(Promise.resolve(args));
}

export default createSourceParamCreator;
