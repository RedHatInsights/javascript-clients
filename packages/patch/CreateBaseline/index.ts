// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersCreateBaselineRequest, ControllersCreateBaselineResponse, UtilsErrorResponse } from '../types';


export type CreateBaselineParams = {
  /**
  * Request body
  * @type { ControllersCreateBaselineRequest }
  * @memberof CreateBaselineApi
  */
  body: ControllersCreateBaselineRequest,
  options?: AxiosRequestConfig
}

export type CreateBaselineReturnType = AxiosPromise<ControllersCreateBaselineResponse>;

const isCreateBaselineObjectParams = (params: [CreateBaselineParams] | unknown[]): params is [CreateBaselineParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'body')
}
/**
* Create a baseline for my set of systems. System cannot be satellite managed.
* @summary Create a baseline for my set of systems
* @param {CreateBaselineParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const createBaselineParamCreator = async (...config: ([CreateBaselineParams] | [ControllersCreateBaselineRequest, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isCreateBaselineObjectParams(config) ? config[0] : ['body', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as CreateBaselineParams;
    const { body, options = {} } = params;
    const localVarPath = `/baselines`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PUT' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: body,
        auth:[
        {
        // authentication RhIdentity required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };
}

export default createBaselineParamCreator;
