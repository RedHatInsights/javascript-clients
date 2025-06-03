// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Errors, System200Response } from '../types';


export type ReportTestResultParams = {
  /**
  *
  * @type { any }
  * @memberof ReportTestResultApi
  */
  testResultId: any,
  /**
  *
  * @type { any }
  * @memberof ReportTestResultApi
  */
  reportId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof ReportTestResultApi
  */
  xRHIDENTITY?: any,
  options?: AxiosRequestConfig
}

export type ReportTestResultReturnType = AxiosPromise<System200Response>;

const isReportTestResultObjectParams = (params: [ReportTestResultParams] | unknown[]): params is [ReportTestResultParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'testResultId') && Object.prototype.hasOwnProperty.call(params[0], 'reportId') && true
}
/**
* Retrieve a specific test result for a specific report.
* @summary Request a Test Result
* @param {ReportTestResultParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const reportTestResultParamCreator = async (...config: ([ReportTestResultParams] | [any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isReportTestResultObjectParams(config) ? config[0] : ['testResultId', 'reportId', 'xRHIDENTITY', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ReportTestResultParams;
    const { testResultId, reportId, xRHIDENTITY, options = {} } = params;
    const localVarPath = `/reports/{report_id}/test_results/{test_result_id}`
        .replace(`{${"test_result_id"}}`, encodeURIComponent(String(testResultId)))
        .replace(`{${"report_id"}}`, encodeURIComponent(String(reportId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

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

export default reportTestResultParamCreator;
