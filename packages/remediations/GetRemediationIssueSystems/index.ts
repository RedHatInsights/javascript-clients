// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { RemediationIssueSystemList, RequestError } from '../types';


export type GetRemediationIssueSystemsParams = {
  /**
  * Remediation identifier
  * @type { string }
  * @memberof GetRemediationIssueSystemsApi
  */
  id: string,
  /**
  * Issue identifier (e.g. `advisor:CVE_2017_6074_kernel|KERNEL_CVE_2017_6074`)
  * @type { string }
  * @memberof GetRemediationIssueSystemsApi
  */
  issue: string,
  /**
  * Maximum number of results to return
  * @type { number }
  * @memberof GetRemediationIssueSystemsApi
  */
  limit?: number,
  /**
  * Indicates the starting position of the query relative to the complete set of items that match the query
  * @type { number }
  * @memberof GetRemediationIssueSystemsApi
  */
  offset?: number,
  /**
  * Sort order
  * @type { GetRemediationIssueSystemsSortEnum }
  * @memberof GetRemediationIssueSystemsApi
  */
  sort?: GetRemediationIssueSystemsSortEnum,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const GetRemediationIssueSystemsSortEnum = {
    DisplayName: 'display_name',
    NotDisplayName: '-display_name'
} as const;
export type GetRemediationIssueSystemsSortEnum = typeof GetRemediationIssueSystemsSortEnum[keyof typeof GetRemediationIssueSystemsSortEnum];

export type GetRemediationIssueSystemsReturnType = AxiosPromise<RemediationIssueSystemList>;

const isGetRemediationIssueSystemsObjectParams = (params: [GetRemediationIssueSystemsParams] | unknown[]): params is [GetRemediationIssueSystemsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true  && Object.prototype.hasOwnProperty.call(params[0], 'id') && Object.prototype.hasOwnProperty.call(params[0], 'issue')
  }
  return false
}
/**
* Get a paginated list of systems from a given issue, RBAC permission {remediations:remediation:read}
* @summary Get Remediation Plan Issue Systems
* @param {GetRemediationIssueSystemsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getRemediationIssueSystemsParamCreator = async (...config: ([GetRemediationIssueSystemsParams] | [string, string, number, number, GetRemediationIssueSystemsSortEnum, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isGetRemediationIssueSystemsObjectParams(config) ? config[0] : ['id', 'issue', 'limit', 'offset', 'sort', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetRemediationIssueSystemsParams;
    const { id, issue, limit, offset, sort, options = {} } = params;
    const localVarPath = `/remediations/{id}/issues/{issue}/systems`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)))
        .replace(`{${"issue"}}`, encodeURIComponent(String(issue)));
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

export default getRemediationIssueSystemsParamCreator;
