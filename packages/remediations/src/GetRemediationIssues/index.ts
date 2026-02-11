// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { GetRemediationIssuesFilterParameter, RemediationIssueList } from '../types';


export type GetRemediationIssuesParams = {
  /**
  * Remediation identifier
  * @type { string }
  * @memberof GetRemediationIssuesApi
  */
  id: string,
  /**
  * Maximum number of results to return
  * @type { number }
  * @memberof GetRemediationIssuesApi
  */
  limit?: number,
  /**
  * Indicates the starting position of the query relative to the complete set of items that match the query
  * @type { number }
  * @memberof GetRemediationIssuesApi
  */
  offset?: number,
  /**
  * For filtering by various criteria.  Available filter fields: - id: issue ids matching string, `?filter[id]=CVE`
  * @type { GetRemediationIssuesFilterParameter }
  * @memberof GetRemediationIssuesApi
  */
  filter?: GetRemediationIssuesFilterParameter,
  /**
  * Sort order. Use `-` before a field name for descending order (e.g., `?-id`).
  * @type { GetRemediationIssuesSortEnum }
  * @memberof GetRemediationIssuesApi
  */
  sort?: GetRemediationIssuesSortEnum,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const GetRemediationIssuesSortEnum = {
    Id: 'id',
    NotId: '-id'
} as const;
export type GetRemediationIssuesSortEnum = typeof GetRemediationIssuesSortEnum[keyof typeof GetRemediationIssuesSortEnum];

export type GetRemediationIssuesReturnType = RemediationIssueList;

const isGetRemediationIssuesObjectParams = (params: [GetRemediationIssuesParams] | unknown[]): params is [GetRemediationIssuesParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
* Get a paginated list of issues for a given remediation plan, RBAC permission {remediations:remediation:read}
* @summary Get Remediation Plan Issues
* @param {GetRemediationIssuesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getRemediationIssuesParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([GetRemediationIssuesParams] | [string, number, number, GetRemediationIssuesFilterParameter, GetRemediationIssuesSortEnum, AxiosRequestConfig])) => {
    const params = isGetRemediationIssuesObjectParams(config) ? config[0] : ['id', 'limit', 'offset', 'filter', 'sort', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetRemediationIssuesParams;
    const { id, limit, offset, filter, sort, options = {} } = params;
    const localVarPath = `/remediations/{id}/issues`
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

    if (filter !== undefined) {
        localVarQueryParameter['filter'] = filter;
    }

    if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<GetRemediationIssuesReturnType>(Promise.resolve(args));
}

export default getRemediationIssuesParamCreator;
