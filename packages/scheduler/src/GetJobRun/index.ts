import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

import type { ErrorResponse, JobRun } from '../types';


export type GetJobRunParams = {
  /**
  * Job ID
  * @type { string }
  * @memberof GetJobRunApi
  */
  id: string,
  /**
  * Job run ID
  * @type { string }
  * @memberof GetJobRunApi
  */
  runId: string,
  options?: AxiosRequestConfig
}

export type GetJobRunReturnType = JobRun;

const isGetJobRunObjectParams = (params: [GetJobRunParams] | unknown[]): params is [GetJobRunParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id') && Object.prototype.hasOwnProperty.call(params[0], 'runId')
  }
  return false
}
/**
* Retrieve details of a specific job execution run.
* @summary Get a specific job run
* @param {GetJobRunParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getJobRunParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([GetJobRunParams] | [string, string, AxiosRequestConfig])) => {
    const params = isGetJobRunObjectParams(config) ? config[0] : ['id', 'runId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetJobRunParams;
    const { id, runId, options = {} } = params;
    const localVarPath = `/jobs/{id}/runs/{run_id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)))
        .replace(`{${"run_id"}}`, encodeURIComponent(String(runId)));
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
        // authentication ApiKeyAuth required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "X-Rh-Identity"
        }
        ]
    };

    return sendRequest<GetJobRunReturnType>(Promise.resolve(args));
}

export default getJobRunParamCreator;
