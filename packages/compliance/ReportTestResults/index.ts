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
  * Attribute and direction to sort the items by. Represented by an array of fields with an optional direction (`<key>:asc` or `<key>:desc`).<br><br>If no direction is selected, `<key>:asc` is used by default.
  * @type { any }
  * @memberof ReportTestResultsApi
  */
  sortBy?: any,
  /**
  * Query string to filter items by their attributes. Compliant with <a href=\"https://github.com/wvanbergen/scoped_search/wiki/Query-language\" target=\"_blank\" title=\"github.com/wvanbergen/scoped_search\">scoped_search query language</a>. However, only `=` or `!=` (resp. `<>`) operators are supported.<br><br>Test Results are searchable using attributes `score`, `supported`, `display_name`, `os_minor_version`, `security_guide_version`, and `compliant`<br><br>(e.g.: `(field_1=something AND field_2!=\"something else\") OR field_3>40`)
  * @type { any }
  * @memberof ReportTestResultsApi
  */
  filter?: any,
  options?: AxiosRequestConfig
}

const isReportTestResultsObjectParams = (params: [ReportTestResultsParams] | unknown[]): params is [ReportTestResultsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'reportId') && true && true && true && true && true
}
/**
* Lists Test Results under a Report
* @summary Request Test Results under a Report
* @param {ReportTestResultsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const reportTestResultsParamCreator = async (...config: ([ReportTestResultsParams] | [any, any, any, any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isReportTestResultsObjectParams(config) ? config[0] : ['reportId', 'xRHIDENTITY', 'limit', 'offset', 'sortBy', 'filter', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ReportTestResultsParams;
    const { reportId, xRHIDENTITY, limit, offset, sortBy, filter, options = {} } = params;
    const localVarPath = `/reports/{report_id}/test_results`
        .replace(`{${"report_id"}}`, encodeURIComponent(String(reportId)));
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
