// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Errors, Report200Response } from '../types';


export type ReportParams = {
  /**
  *
  * @type { any }
  * @memberof ReportApi
  */
  reportId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof ReportApi
  */
  xRHIDENTITY?: any,
  options?: AxiosRequestConfig
}

export type ReportReturnType = Report200Response;

const isReportObjectParams = (params: [ReportParams] | unknown[]): params is [ReportParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'reportId')
  }
  return false
}
/**
* Retrieve a specific report.
* @summary Request a Report
* @param {ReportParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const reportParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ReportParams] | [any, any, AxiosRequestConfig])) => {
    const params = isReportObjectParams(config) ? config[0] : ['reportId', 'xRHIDENTITY', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ReportParams;
    const { reportId, xRHIDENTITY, options = {} } = params;
    const localVarPath = `/reports/{report_id}`
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

    return sendRequest<ReportReturnType>(Promise.resolve(args));
}

export default reportParamCreator;
