// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { RemediationDetails, RequestError } from '../types';


export type GetRemediationParams = {
  /**
  * Remediation identifier
  * @type { string }
  * @memberof GetRemediationApi
  */
  id: string,
  /**
  * Optional format for returned data.  `\'summary\'` format returns counts instead of issue and system details, e.g.: ``` {   \"id\": \"9197ba55-0abc-4028-9bbe-269e530f8bd5\",   \"name\": \"Fix Critical CVEs\",   \"archived\": true,   \"auto_reboot\": true,   \"created_at\": \"2018-12-05T08:19:36.641Z\",   \"created_by\": {     \"username\": \"jharting@redhat.com\",     \"first_name\": \"Jozef\",     \"last_name\": \"Hartinger\"   },   \"updated_at\": \"2018-12-05T08:19:36.641Z\",   \"updated_by\": {     \"username\": \"jharting@redhat.com\",     \"first_name\": \"Jozef\",     \"last_name\": \"Hartinger\"   },   \"issue_count\": 5,   \"system_count\": 12 } ```
  * @type { GetRemediationFormatEnum }
  * @memberof GetRemediationApi
  */
  format?: GetRemediationFormatEnum,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const GetRemediationFormatEnum = {
    Detail: 'detail',
    Summary: 'summary'
} as const;
export type GetRemediationFormatEnum = typeof GetRemediationFormatEnum[keyof typeof GetRemediationFormatEnum];

export type GetRemediationReturnType = AxiosPromise<RemediationDetails>;

const isGetRemediationObjectParams = (params: [GetRemediationParams] | unknown[]): params is [GetRemediationParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true  && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
* Provides information about the given Remediation, RBAC permission {remediations:remediation:read}
* @summary Get Remediation
* @param {GetRemediationParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getRemediationParamCreator = async (...config: ([GetRemediationParams] | [string, GetRemediationFormatEnum, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isGetRemediationObjectParams(config) ? config[0] : ['id', 'format', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetRemediationParams;
    const { id, format, options = {} } = params;
    const localVarPath = `/remediations/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (format !== undefined) {
        localVarQueryParameter['format'] = format;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default getRemediationParamCreator;
