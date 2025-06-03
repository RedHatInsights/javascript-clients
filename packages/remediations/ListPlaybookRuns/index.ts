// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PlaybookRunsList, RequestError } from '../types';


export type ListPlaybookRunsParams = {
  /**
  * Remediation identifier
  * @type { string }
  * @memberof ListPlaybookRunsApi
  */
  id: string,
  /**
  * Maximum number of results to return
  * @type { number }
  * @memberof ListPlaybookRunsApi
  */
  limit?: number,
  /**
  * Indicates the starting position of the query relative to the complete set of items that match the query
  * @type { number }
  * @memberof ListPlaybookRunsApi
  */
  offset?: number,
  /**
  * Sort Order for Playbook Run
  * @type { ListPlaybookRunsSortEnum }
  * @memberof ListPlaybookRunsApi
  */
  sort?: ListPlaybookRunsSortEnum,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ListPlaybookRunsSortEnum = {
    UpdatedAt: 'updated_at',
    NotUpdatedAt: '-updated_at'
} as const;
export type ListPlaybookRunsSortEnum = typeof ListPlaybookRunsSortEnum[keyof typeof ListPlaybookRunsSortEnum];

export type ListPlaybookRunsReturnType = AxiosPromise<PlaybookRunsList>;

const isListPlaybookRunsObjectParams = (params: [ListPlaybookRunsParams] | unknown[]): params is [ListPlaybookRunsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'id') && true && true && true
}
/**
* List of executions of this remediation
* @summary List of executions of this remediation
* @param {ListPlaybookRunsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listPlaybookRunsParamCreator = async (...config: ([ListPlaybookRunsParams] | [string, number, number, ListPlaybookRunsSortEnum, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListPlaybookRunsObjectParams(config) ? config[0] : ['id', 'limit', 'offset', 'sort', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListPlaybookRunsParams;
    const { id, limit, offset, sort, options = {} } = params;
    const localVarPath = `/remediations/{id}/playbook_runs`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }

    if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default listPlaybookRunsParamCreator;
