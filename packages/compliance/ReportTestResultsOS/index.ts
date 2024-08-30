// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type {  } from '../types';


export type ReportTestResultsOSParams = {
  /**
  *
  * @type { any }
  * @memberof ReportTestResultsOSApi
  */
  reportId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof ReportTestResultsOSApi
  */
  xRHIDENTITY?: any,
  /**
  * Query string to filter items by their attributes. Compliant with <a href=\"https://github.com/wvanbergen/scoped_search/wiki/Query-language\" target=\"_blank\" title=\"github.com/wvanbergen/scoped_search\">scoped_search query language</a>. However, only `=` or `!=` (resp. `<>`) operators are supported.<br><br>Test Results are searchable using attributes `score`, `supported`, `system_id`, `display_name`, `os_minor_version`, `security_guide_version`, `compliant`, `group_name`, and `failed_rule_severity`<br><br>(e.g.: `(field_1=something AND field_2!=\"something else\") OR field_3>40`)
  * @type { any }
  * @memberof ReportTestResultsOSApi
  */
  filter?: any,
  options?: AxiosRequestConfig
}

const isReportTestResultsOSObjectParams = (params: [ReportTestResultsOSParams] | unknown[]): params is [ReportTestResultsOSParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'reportId') && true && true
}
/**
* This feature is exclusively used by the frontend
* @summary Request the list of available OS versions
* @param {ReportTestResultsOSParams} config with all available params.
* @param {*} [options] Override http request option.
* @deprecated
* @throws {RequiredError}
*/
export const reportTestResultsOSParamCreator = async (...config: ([ReportTestResultsOSParams] | [any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isReportTestResultsOSObjectParams(config) ? config[0] : ['reportId', 'xRHIDENTITY', 'filter', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ReportTestResultsOSParams;
    const { reportId, xRHIDENTITY, filter, options = {} } = params;
    const localVarPath = `/reports/{report_id}/test_results/os_versions`
        .replace(`{${"report_id"}}`, encodeURIComponent(String(reportId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

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

export default reportTestResultsOSParamCreator;
