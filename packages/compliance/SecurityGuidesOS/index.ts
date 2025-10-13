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


export type SecurityGuidesOSParams = {
  /**
  * For internal use only
  * @type { any }
  * @memberof SecurityGuidesOSApi
  */
  xRHIDENTITY?: any,
  /**
  * Query string to filter items by their attributes. Compliant with <a href=\"https://github.com/wvanbergen/scoped_search/wiki/Query-language\" target=\"_blank\" title=\"github.com/wvanbergen/scoped_search\">scoped_search query language</a>. However, only `=` or `!=` (resp. `<>`) operators are supported.<br><br>Systems are searchable using attributes `display_name`, `os_version`, `os_major_version`, `os_minor_version`, `assigned_or_scanned`, `never_reported`, `group_name`, `policies`, and `profile_ref_id`<br><br>(e.g.: `(field_1=something AND field_2!=\"something else\") OR field_3>40`)
  * @type { any }
  * @memberof SecurityGuidesOSApi
  */
  filter?: any,
  options?: AxiosRequestConfig
}

export type SecurityGuidesOSReturnType = AxiosPromise<any>;

const isSecurityGuidesOSObjectParams = (params: [SecurityGuidesOSParams] | unknown[]): params is [SecurityGuidesOSParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* This feature is exclusively used by the frontend
* @summary Request the list of available OS versions
* @param {SecurityGuidesOSParams} config with all available params.
* @param {*} [options] Override http request option.
* @deprecated
* @throws {RequiredError}
*/
export const securityGuidesOSParamCreator = async (...config: ([SecurityGuidesOSParams] | [any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isSecurityGuidesOSObjectParams(config) ? config[0] : ['xRHIDENTITY', 'filter', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as SecurityGuidesOSParams;
    const { xRHIDENTITY, filter, options = {} } = params;
    const localVarPath = `/security_guides/os_versions`;
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

export default securityGuidesOSParamCreator;
