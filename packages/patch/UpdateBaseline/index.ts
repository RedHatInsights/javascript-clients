// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersUpdateBaselineRequest, ControllersUpdateBaselineResponse, UtilsErrorResponse } from '../types';


export type UpdateBaselineParams = {
  /**
  * Baseline ID
  * @type { number }
  * @memberof UpdateBaselineApi
  */
  baselineId: number,
  /**
  * Request body
  * @type { ControllersUpdateBaselineRequest }
  * @memberof UpdateBaselineApi
  */
  body: ControllersUpdateBaselineRequest,
  options?: AxiosRequestConfig
}

export type UpdateBaselineReturnType = AxiosPromise<ControllersUpdateBaselineResponse>;

const isUpdateBaselineObjectParams = (params: [UpdateBaselineParams] | unknown[]): params is [UpdateBaselineParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'baselineId') && Object.prototype.hasOwnProperty.call(params[0], 'body')
}
/**
* Update a baseline for my set of systems. System cannot be satellite managed.
* @summary Update a baseline for my set of systems
* @param {UpdateBaselineParams} config with all available params.
* @param {*} [options] Override http request option.
* @deprecated
* @throws {RequiredError}
*/
export const updateBaselineParamCreator = async (...config: ([UpdateBaselineParams] | [number, ControllersUpdateBaselineRequest, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isUpdateBaselineObjectParams(config) ? config[0] : ['baselineId', 'body', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as UpdateBaselineParams;
    const { baselineId, body, options = {} } = params;
    const localVarPath = `/baselines/{baseline_id}`
        .replace(`{${"baseline_id"}}`, encodeURIComponent(String(baselineId)));
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

export default updateBaselineParamCreator;
