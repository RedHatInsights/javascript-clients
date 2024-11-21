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

export type CreateSourceReturnType = AxiosPromise<Source>;

const isCreateSourceObjectParams = (params: [CreateSourceParams] | unknown[]): params is [CreateSourceParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'source')
}
/**
* Creates a Source object
* @summary Create a new Source
* @param {CreateSourceParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const createSourceParamCreator = async (...config: ([CreateSourceParams] | [Source, AxiosRequestConfig])): Promise<RequestArgs> => {
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

    return {
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
}

export default createSourceParamCreator;
