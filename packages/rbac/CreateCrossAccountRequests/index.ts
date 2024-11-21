// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { CrossAccountRequestIn, CrossAccountRequestOut, Error403 } from '../types';


export type CreateCrossAccountRequestsParams = {
  /**
  * CrossAccountRequest to create
  * @type { CrossAccountRequestIn }
  * @memberof CreateCrossAccountRequestsApi
  */
  crossAccountRequestIn: CrossAccountRequestIn,
  options?: AxiosRequestConfig
}

export type CreateCrossAccountRequestsReturnType = AxiosPromise<CrossAccountRequestOut>;

const isCreateCrossAccountRequestsObjectParams = (params: [CreateCrossAccountRequestsParams] | unknown[]): params is [CreateCrossAccountRequestsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'crossAccountRequestIn')
}
/**
*
* @summary Create a cross account request
* @param {CreateCrossAccountRequestsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const createCrossAccountRequestsParamCreator = async (...config: ([CreateCrossAccountRequestsParams] | [CrossAccountRequestIn, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isCreateCrossAccountRequestsObjectParams(config) ? config[0] : ['crossAccountRequestIn', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as CreateCrossAccountRequestsParams;
    const { crossAccountRequestIn, options = {} } = params;
    const localVarPath = `/cross-account-requests/`;
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
        serializeData: crossAccountRequestIn,
        auth:[
        {
        // authentication basic_auth required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };
}

export default createCrossAccountRequestsParamCreator;
