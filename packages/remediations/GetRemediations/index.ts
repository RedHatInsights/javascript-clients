// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { GetRemediations200Response, GetRemediationsFilterParameter, RequestError } from '../types';


export type GetRemediationsParams = {
  /**
  * Sort order. Use `-` before a field name for descending order (e.g., `?-system_count`).
  * @type { GetRemediationsSortEnum }
  * @memberof GetRemediationsApi
  */
  sort?: GetRemediationsSortEnum,
  /**
  * For filtering by various criteria.  There are two styles of filter: legacy and new.  Legacy filtering allows for filtering by remediation plan name and is of the form: `?filter=plan name`. If specified, only remediations whose name matches the given string will be returned.  New style filters allow for filtering by various criteria and are of the form: `?filter[<field>]=<value>`.  Available filter fields: - name: plan names matching string, `?filter[name]=my plan name` - created_after: created on or after date-time, `filter[created_after]=2025-03-31T08:19:36.641Z` - updated_after: modified on or after date-time, `filter[updated_after]=2025-03-31T08:19:36.641Z` - last_run_after: executed on or after date-time or \'never\', `filter[last_run_after]=never`  - status: status matching one of [running, success, failure], `filter[status]=failure`
  * @type { GetRemediationsFilterParameter }
  * @memberof GetRemediationsApi
  */
  filter?: GetRemediationsFilterParameter,
  /**
  * Maximum number of results to return
  * @type { number }
  * @memberof GetRemediationsApi
  */
  limit?: number,
  /**
  * Indicates the starting position of the query relative to the complete set of items that match the query
  * @type { number }
  * @memberof GetRemediationsApi
  */
  offset?: number,
  /**
  * System identifier. If specified only remediations that involve the given system will be returned.
  * @type { string }
  * @memberof GetRemediationsApi
  */
  system?: string,
  /**
  * Hide archived playbooks
  * @type { boolean }
  * @memberof GetRemediationsApi
  */
  hideArchived?: boolean,
  /**
  * Include specified items - name: list all remediation plan names in organization (cannot be combined with other fields) - playbook_runs: include playbook run data in the response
  * @type { Array<GetRemediationsFieldsDataEnum> }
  * @memberof GetRemediationsApi
  */
  fieldsData?: Array<GetRemediationsFieldsDataEnum>,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const GetRemediationsSortEnum = {
    UpdatedAt: 'updated_at',
    NotUpdatedAt: '-updated_at',
    CreatedAt: 'created_at',
    NotCreatedAt: '-created_at',
    LastRunAt: 'last_run_at',
    NotLastRunAt: '-last_run_at',
    Name: 'name',
    NotName: '-name',
    SystemCount: 'system_count',
    NotSystemCount: '-system_count',
    IssueCount: 'issue_count',
    NotIssueCount: '-issue_count',
    Status: 'status',
    NotStatus: '-status'
} as const;
export type GetRemediationsSortEnum = typeof GetRemediationsSortEnum[keyof typeof GetRemediationsSortEnum];
/**
  * @export
  * @enum {string}
  */
export const GetRemediationsFieldsDataEnum = {
    Name: 'name',
    PlaybookRuns: 'playbook_runs'
} as const;
export type GetRemediationsFieldsDataEnum = typeof GetRemediationsFieldsDataEnum[keyof typeof GetRemediationsFieldsDataEnum];

export type GetRemediationsReturnType = AxiosPromise<GetRemediations200Response>;

const isGetRemediationsObjectParams = (params: [GetRemediationsParams] | unknown[]): params is [GetRemediationsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Provides information about Remediations, RBAC permission {remediations:remediation:read}
* @summary List Remediations
* @param {GetRemediationsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getRemediationsParamCreator = async (...config: ([GetRemediationsParams] | [GetRemediationsSortEnum, GetRemediationsFilterParameter, number, number, string, boolean, Array<GetRemediationsFieldsDataEnum>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isGetRemediationsObjectParams(config) ? config[0] : ['sort', 'filter', 'limit', 'offset', 'system', 'hideArchived', 'fieldsData', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetRemediationsParams;
    const { sort, filter, limit, offset, system, hideArchived, fieldsData, options = {} } = params;
    const localVarPath = `/remediations`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort;
    }

    if (filter !== undefined) {
        localVarQueryParameter['filter'] = filter;
    }

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }

    if (system !== undefined) {
        localVarQueryParameter['system'] = system;
    }

    if (hideArchived !== undefined) {
        localVarQueryParameter['hide_archived'] = hideArchived;
    }

    if (fieldsData) {
        localVarQueryParameter['fields[data]'] = fieldsData;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default getRemediationsParamCreator;
