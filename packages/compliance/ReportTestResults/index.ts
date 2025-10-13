// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Errors, ReportTestResults200Response } from '../types';


export type ReportTestResultsParams = {
  /**
  *
  * @type { any }
  * @memberof ReportTestResultsApi
  */
  reportId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof ReportTestResultsApi
  */
  xRHIDENTITY?: any,
  /**
  * An array of tags to narrow down the search results. In case the value contains symbols used for separators (`/` or `=`), they need to be encoded.<br>e.g.: `namespace/key=value`, `insights-client/selinux-config=SELINUX%3Denforcing`
  * @type { any }
  * @memberof ReportTestResultsApi
  */
  tags?: any,
  /**
  * Number of items to return per page
  * @type { any }
  * @memberof ReportTestResultsApi
  */
  limit?: any,
  /**
  * Offset of first item of paginated response
  * @type { any }
  * @memberof ReportTestResultsApi
  */
  offset?: any,
  /**
  * Indicates whether to return only resource IDs.
  * @type { any }
  * @memberof ReportTestResultsApi
  */
  idsOnly?: any,
  /**
  * Attribute and direction to sort the items by. Represented by an array of fields with an optional direction (`<key>:asc` or `<key>:desc`).<br><br>If no direction is selected, `<key>:asc` is used by default.
  * @type { any }
  * @memberof ReportTestResultsApi
  */
  sortBy?: any,
  /**
  * Query string to filter items by their attributes. Compliant with <a href=\"https://github.com/wvanbergen/scoped_search/wiki/Query-language\" target=\"_blank\" title=\"github.com/wvanbergen/scoped_search\">scoped_search query language</a>. However, only `=` or `!=` (resp. `<>`) operators are supported.<br><br>Test Results are searchable using attributes `score`, `supported`, `system_id`, `display_name`, `os_minor_version`, `security_guide_version`, `compliant`, `group_name`, and `failed_rule_severity`<br><br>(e.g.: `(field_1=something AND field_2!=\"something else\") OR field_3>40`)
  * @type { any }
  * @memberof ReportTestResultsApi
  */
  filter?: any,
  options?: AxiosRequestConfig
}

export type ReportTestResultsReturnType = AxiosPromise<ReportTestResults200Response>;

const isReportTestResultsObjectParams = (params: [ReportTestResultsParams] | unknown[]): params is [ReportTestResultsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true  && Object.prototype.hasOwnProperty.call(params[0], 'reportId')
  }
  return false
}
/**
* Retrieve all of the test results for a specific report.
* @summary Request Test Results under a Report
* @param {ReportTestResultsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const reportTestResultsParamCreator = async (...config: ([ReportTestResultsParams] | [any, any, any, any, any, any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isReportTestResultsObjectParams(config) ? config[0] : ['reportId', 'xRHIDENTITY', 'tags', 'limit', 'offset', 'idsOnly', 'sortBy', 'filter', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ReportTestResultsParams;
    const { reportId, xRHIDENTITY, tags, limit, offset, idsOnly, sortBy, filter, options = {} } = params;
    const localVarPath = `/reports/{report_id}/test_results`
        .replace(`{${"report_id"}}`, encodeURIComponent(String(reportId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (tags !== undefined) {
        localVarQueryParameter['tags'] = tags;
    }

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }

    if (idsOnly !== undefined) {
        localVarQueryParameter['ids_only'] = idsOnly;
    }

    if (sortBy !== undefined) {
        localVarQueryParameter['sort_by'] = sortBy;
    }

    if (filter !== undefined) {
        localVarQueryParameter['filter'] = filter;
    }

    if (xRHIDENTITY != null) {
        localVarHeaderParameter['X-RH-IDENTITY'] = typeof xRHIDENTITY === 'string'
            ? xRHIDENTITY
            : JSON.stringify(xRHIDENTITY);
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default reportTestResultsParamCreator;
