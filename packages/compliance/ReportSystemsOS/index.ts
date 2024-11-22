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


export type ReportSystemsOSParams = {
  /**
  *
  * @type { any }
  * @memberof ReportSystemsOSApi
  */
  reportId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof ReportSystemsOSApi
  */
  xRHIDENTITY?: any,
  /**
  * Query string to filter items by their attributes. Compliant with <a href=\"https://github.com/wvanbergen/scoped_search/wiki/Query-language\" target=\"_blank\" title=\"github.com/wvanbergen/scoped_search\">scoped_search query language</a>. However, only `=` or `!=` (resp. `<>`) operators are supported.<br><br>Systems are searchable using attributes `display_name`, `os_version`, `os_major_version`, `os_minor_version`, `assigned_or_scanned`, `never_reported`, `group_name`, `policies`, and `profile_ref_id`<br><br>(e.g.: `(field_1=something AND field_2!=\"something else\") OR field_3>40`)
  * @type { any }
  * @memberof ReportSystemsOSApi
  */
  filter?: any,
  options?: AxiosRequestConfig
}

export type ReportSystemsOSReturnType = AxiosPromise<any>;

const isReportSystemsOSObjectParams = (params: [ReportSystemsOSParams] | unknown[]): params is [ReportSystemsOSParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'reportId') && true && true
}
/**
* This feature is exclusively used by the frontend
* @summary Request the list of available OS versions
* @param {ReportSystemsOSParams} config with all available params.
* @param {*} [options] Override http request option.
* @deprecated
* @throws {RequiredError}
*/
export const reportSystemsOSParamCreator = async (...config: ([ReportSystemsOSParams] | [any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isReportSystemsOSObjectParams(config) ? config[0] : ['reportId', 'xRHIDENTITY', 'filter', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ReportSystemsOSParams;
    const { reportId, xRHIDENTITY, filter, options = {} } = params;
    const localVarPath = `/reports/{report_id}/systems/os_versions`
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

export default reportSystemsOSParamCreator;
