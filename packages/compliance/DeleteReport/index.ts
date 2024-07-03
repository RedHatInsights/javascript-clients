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


export type DeleteReportParams = {
  /**
  *
  * @type { any }
  * @memberof DeleteReportApi
  */
  reportId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof DeleteReportApi
  */
  xRHIDENTITY?: any,
  options?: AxiosRequestConfig
}

const isDeleteReportObjectParams = (params: [DeleteReportParams] | unknown[]): params is [DeleteReportParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'reportId') && true
}
/**
* Deletes a Report results
* @summary Delete a Report results
* @param {DeleteReportParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const deleteReportParamCreator = async (...config: ([DeleteReportParams] | [any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isDeleteReportObjectParams(config) ? config[0] : ['reportId', 'xRHIDENTITY', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DeleteReportParams;
    const { reportId, xRHIDENTITY, options = {} } = params;
    const localVarPath = `/reports/{report_id}`
        .replace(`{${"report_id"}}`, encodeURIComponent(String(reportId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'DELETE' as Method, ...options};
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

export default deleteReportParamCreator;
