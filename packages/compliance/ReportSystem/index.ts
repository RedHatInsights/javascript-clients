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


export type ReportSystemParams = {
  /**
  *
  * @type { any }
  * @memberof ReportSystemApi
  */
  systemId: any,
  /**
  *
  * @type { any }
  * @memberof ReportSystemApi
  */
  reportId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof ReportSystemApi
  */
  xRHIDENTITY?: any,
  options?: AxiosRequestConfig
}

export type ReportSystemReturnType = System200Response;

const isReportSystemObjectParams = (params: [ReportSystemParams] | unknown[]): params is [ReportSystemParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'systemId') && Object.prototype.hasOwnProperty.call(params[0], 'reportId')
  }
  return false
}
/**
* Retrieve a specific system from a specific report.
* @summary Request a System
* @param {ReportSystemParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const reportSystemParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ReportSystemParams] | [any, any, any, AxiosRequestConfig])) => {
    const params = isReportSystemObjectParams(config) ? config[0] : ['systemId', 'reportId', 'xRHIDENTITY', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ReportSystemParams;
    const { systemId, reportId, xRHIDENTITY, options = {} } = params;
    const localVarPath = `/reports/{report_id}/systems/{system_id}`
        .replace(`{${"system_id"}}`, encodeURIComponent(String(systemId)))
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

    return sendRequest<ReportSystemReturnType>(Promise.resolve(args));
}

export default reportSystemParamCreator;
