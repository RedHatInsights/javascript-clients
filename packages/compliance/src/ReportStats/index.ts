// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Errors, ReportStats200Response } from '../types';


export type ReportStatsParams = {
  /**
  *
  * @type { any }
  * @memberof ReportStatsApi
  */
  reportId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof ReportStatsApi
  */
  xRHIDENTITY?: any,
  options?: AxiosRequestConfig
}

export type ReportStatsReturnType = ReportStats200Response;

const isReportStatsObjectParams = (params: [ReportStatsParams] | unknown[]): params is [ReportStatsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'reportId')
  }
  return false
}
/**
* Returns detailed stats for a Report
* @summary Request detailed stats for a Report
* @param {ReportStatsParams} config with all available params.
* @param {*} [options] Override http request option.
* @deprecated
* @throws {RequiredError}
*/
export const reportStatsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ReportStatsParams] | [any, any, AxiosRequestConfig])) => {
    const params = isReportStatsObjectParams(config) ? config[0] : ['reportId', 'xRHIDENTITY', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ReportStatsParams;
    const { reportId, xRHIDENTITY, options = {} } = params;
    const localVarPath = `/reports/{report_id}/stats`
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

    return sendRequest<ReportStatsReturnType>(Promise.resolve(args));
}

export default reportStatsParamCreator;
