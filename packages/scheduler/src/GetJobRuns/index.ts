// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PaginatedJobRunsResponse } from '../types';


export type GetJobRunsParams = {
  /**
  * Job ID
  * @type { any }
  * @memberof GetJobRunsApi
  */
  id: any,
  /**
  * Number of items to skip (for pagination)
  * @type { any }
  * @memberof GetJobRunsApi
  */
  offset?: any,
  /**
  * Maximum number of items to return (max 100)
  * @type { any }
  * @memberof GetJobRunsApi
  */
  limit?: any,
  options?: AxiosRequestConfig
}

export type GetJobRunsReturnType = PaginatedJobRunsResponse;

const isGetJobRunsObjectParams = (params: [GetJobRunsParams] | unknown[]): params is [GetJobRunsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
* Retrieve all execution runs for a specific job. Returns runs in reverse chronological order (most recent first), with pagination support.
* @summary List all runs for a job
* @param {GetJobRunsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getJobRunsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([GetJobRunsParams] | [any, any, any, AxiosRequestConfig])) => {
    const params = isGetJobRunsObjectParams(config) ? config[0] : ['id', 'offset', 'limit', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetJobRunsParams;
    const { id, offset, limit, options = {} } = params;
    const localVarPath = `/jobs/{id}/runs`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<GetJobRunsReturnType>(Promise.resolve(args));
}

export default getJobRunsParamCreator;
