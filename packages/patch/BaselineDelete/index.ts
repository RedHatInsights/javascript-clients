// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersDeleteBaselineResponse, UtilsErrorResponse } from '../types';


export type BaselineDeleteParams = {
  /**
  * Baseline ID
  * @type { number }
  * @memberof BaselineDeleteApi
  */
  baselineId: number,
  options?: AxiosRequestConfig
}

export type BaselineDeleteReturnType = AxiosPromise<ControllersDeleteBaselineResponse>;

const isBaselineDeleteObjectParams = (params: [BaselineDeleteParams] | unknown[]): params is [BaselineDeleteParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'baselineId')
}
/**
* Delete a baseline
* @summary Delete a baseline
* @param {BaselineDeleteParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const baselineDeleteParamCreator = async (...config: ([BaselineDeleteParams] | [number, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isBaselineDeleteObjectParams(config) ? config[0] : ['baselineId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as BaselineDeleteParams;
    const { baselineId, options = {} } = params;
    const localVarPath = `/baselines/{baseline_id}`
        .replace(`{${"baseline_id"}}`, encodeURIComponent(String(baselineId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'DELETE' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
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

export default baselineDeleteParamCreator;
