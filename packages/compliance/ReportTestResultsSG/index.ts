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


export type ReportTestResultsSGParams = {
  /**
  *
  * @type { any }
  * @memberof ReportTestResultsSGApi
  */
  reportId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof ReportTestResultsSGApi
  */
  xRHIDENTITY?: any,
  options?: AxiosRequestConfig
}

export type ReportTestResultsSGReturnType = any;

const isReportTestResultsSGObjectParams = (params: [ReportTestResultsSGParams] | unknown[]): params is [ReportTestResultsSGParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'reportId')
  }
  return false
}
/**
* This feature is exclusively used by the frontend
* @summary Request the list of available Security Guide versions
* @param {ReportTestResultsSGParams} config with all available params.
* @param {*} [options] Override http request option.
* @deprecated
* @throws {RequiredError}
*/
export const reportTestResultsSGParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ReportTestResultsSGParams] | [any, any, AxiosRequestConfig])) => {
    const params = isReportTestResultsSGObjectParams(config) ? config[0] : ['reportId', 'xRHIDENTITY', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ReportTestResultsSGParams;
    const { reportId, xRHIDENTITY, options = {} } = params;
    const localVarPath = `/reports/{report_id}/test_results/security_guide_versions`
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

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<ReportTestResultsSGReturnType>(Promise.resolve(args));
}

export default reportTestResultsSGParamCreator;
