import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

import type { ErrorResponse, PaginatedJobRunsResponse } from '../types';


export type ListAllRunsParams = {
  /**
  * Number of items to skip (for pagination)
  * @type { number }
  * @memberof ListAllRunsApi
  */
  offset?: number,
  /**
  * Maximum number of items to return (max 100)
  * @type { number }
  * @memberof ListAllRunsApi
  */
  limit?: number,
  /**
  * Sort runs by a field, in the form \'field:direction\'. Direction is optional and defaults to \'asc\'. Allowed fields: start_time, end_time, status, created_at. Defaults to \'start_time:desc\'.
  * @type { string }
  * @memberof ListAllRunsApi
  */
  sortBy?: string,
  options?: AxiosRequestConfig
}

export type ListAllRunsReturnType = PaginatedJobRunsResponse;

const isListAllRunsObjectParams = (params: [ListAllRunsParams] | unknown[]): params is [ListAllRunsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Retrieve all job execution runs for jobs owned by the authenticated user. Returns runs in reverse chronological order (most recent first), with pagination support.
* @summary List all runs for the authenticated user
* @param {ListAllRunsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listAllRunsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ListAllRunsParams] | [number, number, string, AxiosRequestConfig])) => {
    const params = isListAllRunsObjectParams(config) ? config[0] : ['offset', 'limit', 'sortBy', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListAllRunsParams;
    const { offset, limit, sortBy, options = {} } = params;
    const localVarPath = `/runs`;
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

    return sendRequest<ListAllRunsReturnType>(Promise.resolve(args));
}

export default listAllRunsParamCreator;
