import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

import type { ErrorResponse, PaginatedJobRunsResponse } from '../types';


export type GetJobRunsParams = {
  /**
  * Job ID
  * @type { string }
  * @memberof GetJobRunsApi
  */
  id: string,
  /**
  * Number of items to skip (for pagination)
  * @type { number }
  * @memberof GetJobRunsApi
  */
  offset?: number,
  /**
  * Maximum number of items to return (max 100)
  * @type { number }
  * @memberof GetJobRunsApi
  */
  limit?: number,
  /**
  * Sort runs by a field, in the form \'field:direction\'. Direction is optional and defaults to \'asc\'. Allowed fields: start_time, end_time, status, created_at. Defaults to \'start_time:desc\'.
  * @type { string }
  * @memberof GetJobRunsApi
  */
  sortBy?: string,
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
export const getJobRunsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([GetJobRunsParams] | [string, number, number, string, AxiosRequestConfig])) => {
    const params = isGetJobRunsObjectParams(config) ? config[0] : ['id', 'offset', 'limit', 'sortBy', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetJobRunsParams;
    const { id, offset, limit, sortBy, options = {} } = params;
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

    if (sortBy !== undefined) {
        localVarQueryParameter['sort_by'] = sortBy;
    }



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

    return sendRequest<GetJobRunsReturnType>(Promise.resolve(args));
}

export default getJobRunsParamCreator;
