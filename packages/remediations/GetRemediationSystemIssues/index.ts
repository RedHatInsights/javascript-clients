// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { GetRemediationSystemIssuesFilterParameter, RequestError, SystemIssuesList } from '../types';


export type GetRemediationSystemIssuesParams = {
  /**
  * Remediation identifier
  * @type { string }
  * @memberof GetRemediationSystemIssuesApi
  */
  id: string,
  /**
  * System identifier
  * @type { string }
  * @memberof GetRemediationSystemIssuesApi
  */
  system: string,
  /**
  * Maximum number of results to return
  * @type { number }
  * @memberof GetRemediationSystemIssuesApi
  */
  limit?: number,
  /**
  * Indicates the starting position of the query relative to the complete set of items that match the query
  * @type { number }
  * @memberof GetRemediationSystemIssuesApi
  */
  offset?: number,
  /**
  * Sort order
  * @type { GetRemediationSystemIssuesSortEnum }
  * @memberof GetRemediationSystemIssuesApi
  */
  sort?: GetRemediationSystemIssuesSortEnum,
  /**
  * For filtering by various criteria.  Available filter fields: - id: issue ids matching string (supports partial match) - resolution.id: selected resolution type (e.g., fix)
  * @type { GetRemediationSystemIssuesFilterParameter }
  * @memberof GetRemediationSystemIssuesApi
  */
  filter?: GetRemediationSystemIssuesFilterParameter,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const GetRemediationSystemIssuesSortEnum = {
    Id: 'id',
    NotId: '-id'
} as const;
export type GetRemediationSystemIssuesSortEnum = typeof GetRemediationSystemIssuesSortEnum[keyof typeof GetRemediationSystemIssuesSortEnum];

export type GetRemediationSystemIssuesReturnType = AxiosPromise<SystemIssuesList>;

const isGetRemediationSystemIssuesObjectParams = (params: [GetRemediationSystemIssuesParams] | unknown[]): params is [GetRemediationSystemIssuesParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true  && Object.prototype.hasOwnProperty.call(params[0], 'id') && Object.prototype.hasOwnProperty.call(params[0], 'system')
  }
  return false
}
/**
* Get a paginated list of issues for a specific system in a remediation plan, RBAC permission {remediations:remediation:read}
* @summary Get Remediation System Issues
* @param {GetRemediationSystemIssuesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getRemediationSystemIssuesParamCreator = async (...config: ([GetRemediationSystemIssuesParams] | [string, string, number, number, GetRemediationSystemIssuesSortEnum, GetRemediationSystemIssuesFilterParameter, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isGetRemediationSystemIssuesObjectParams(config) ? config[0] : ['id', 'system', 'limit', 'offset', 'sort', 'filter', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetRemediationSystemIssuesParams;
    const { id, system, limit, offset, sort, filter, options = {} } = params;
    const localVarPath = `/remediations/{id}/systems/{system}/issues`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)))
        .replace(`{${"system"}}`, encodeURIComponent(String(system)));
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

    if (filter !== undefined) {
        localVarQueryParameter['filter'] = filter;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default getRemediationSystemIssuesParamCreator;
