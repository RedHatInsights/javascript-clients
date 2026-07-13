import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

import type { ErrorResponse, RunJobResponse } from '../types';


export type RunJobParams = {
  /**
  * Job ID
  * @type { string }
  * @memberof RunJobApi
  */
  id: string,
  options?: AxiosRequestConfig
}

export type RunJobReturnType = RunJobResponse;

const isRunJobObjectParams = (params: [RunJobParams] | unknown[]): params is [RunJobParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
* Trigger an immediate execution of a job, regardless of its schedule.
* @summary Manually run a job
* @param {RunJobParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const runJobParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([RunJobParams] | [string, AxiosRequestConfig])) => {
    const params = isRunJobObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RunJobParams;
    const { id, options = {} } = params;
    const localVarPath = `/jobs/{id}/run`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        auth:[
        {
        // authentication ApiKeyAuth required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "X-Rh-Identity"
        }
        ]
    };

    return sendRequest<RunJobReturnType>(Promise.resolve(args));
}

export default runJobParamCreator;
