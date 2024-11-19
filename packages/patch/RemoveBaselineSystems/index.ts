// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersBaselineSystemsRemoveRequest, UtilsErrorResponse } from '../types';


export type RemoveBaselineSystemsParams = {
  /**
  * Request body
  * @type { ControllersBaselineSystemsRemoveRequest }
  * @memberof RemoveBaselineSystemsApi
  */
  body: ControllersBaselineSystemsRemoveRequest,
  options?: AxiosRequestConfig
}

export type RemoveBaselineSystemsReturnType = AxiosPromise<void>;

const isRemoveBaselineSystemsObjectParams = (params: [RemoveBaselineSystemsParams] | unknown[]): params is [RemoveBaselineSystemsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'body')
}
/**
* Remove systems from baseline
* @summary Remove systems from baseline
* @param {RemoveBaselineSystemsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const removeBaselineSystemsParamCreator = async (...config: ([RemoveBaselineSystemsParams] | [ControllersBaselineSystemsRemoveRequest, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isRemoveBaselineSystemsObjectParams(config) ? config[0] : ['body', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RemoveBaselineSystemsParams;
    const { body, options = {} } = params;
    const localVarPath = `/baselines/systems/remove`;
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

export default removeBaselineSystemsParamCreator;
