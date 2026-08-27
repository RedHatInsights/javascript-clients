import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

import type { ErrorResponse, JobStatus, PaginatedJobsResponse } from '../types';


export type ListJobsParams = {
  /**
  * Filter jobs by status
  * @type { JobStatus }
  * @memberof ListJobsApi
  */
  status?: JobStatus,
  /**
  * Filter jobs by name (partial match)
  * @type { string }
  * @memberof ListJobsApi
  */
  name?: string,
  /**
  * Number of items to skip (for pagination)
  * @type { number }
  * @memberof ListJobsApi
  */
  offset?: number,
  /**
  * Maximum number of items to return (max 100)
  * @type { number }
  * @memberof ListJobsApi
  */
  limit?: number,
  /**
  * Sort jobs by a field, in the form \'field:direction\'. Direction is optional and defaults to \'asc\'. Allowed fields: name, status, created_at, next_run_at, last_run_at. Defaults to \'created_at:desc\'.
  * @type { string }
  * @memberof ListJobsApi
  */
  sortBy?: string,
  options?: AxiosRequestConfig
}

export type ListJobsReturnType = PaginatedJobsResponse;

const isListJobsObjectParams = (params: [ListJobsParams] | unknown[]): params is [ListJobsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Retrieve all jobs for the authenticated organization. Supports filtering by status and name, with pagination.
* @summary List all jobs
* @param {ListJobsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listJobsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ListJobsParams] | [JobStatus, string, number, number, string, AxiosRequestConfig])) => {
    const params = isListJobsObjectParams(config) ? config[0] : ['status', 'name', 'offset', 'limit', 'sortBy', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListJobsParams;
    const { status, name, offset, limit, sortBy, options = {} } = params;
    const localVarPath = `/jobs`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (status !== undefined) {
        localVarQueryParameter['status'] = status;
    }

    if (name !== undefined) {
        localVarQueryParameter['name'] = name;
    }

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

    return sendRequest<ListJobsReturnType>(Promise.resolve(args));
}

export default listJobsParamCreator;
