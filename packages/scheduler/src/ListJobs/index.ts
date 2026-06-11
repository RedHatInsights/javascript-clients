// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PaginatedJobsResponse } from '../types';


export type ListJobsParams = {
  /**
  * Filter jobs by status
  * @type { any }
  * @memberof ListJobsApi
  */
  status?: any,
  /**
  * Filter jobs by name (partial match)
  * @type { any }
  * @memberof ListJobsApi
  */
  name?: any,
  /**
  * Number of items to skip (for pagination)
  * @type { any }
  * @memberof ListJobsApi
  */
  offset?: any,
  /**
  * Maximum number of items to return (max 100)
  * @type { any }
  * @memberof ListJobsApi
  */
  limit?: any,
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
export const listJobsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ListJobsParams] | [any, any, any, any, AxiosRequestConfig])) => {
    const params = isListJobsObjectParams(config) ? config[0] : ['status', 'name', 'offset', 'limit', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListJobsParams;
    const { status, name, offset, limit, options = {} } = params;
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



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<ListJobsReturnType>(Promise.resolve(args));
}

export default listJobsParamCreator;
