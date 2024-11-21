// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Diagnosis, RequestError } from '../types';


export type GetDiagnosisParams = {
  /**
  * System identifier
  * @type { string }
  * @memberof GetDiagnosisApi
  */
  system: string,
  /**
  * Remediation identifier (uuid)
  * @type { string }
  * @memberof GetDiagnosisApi
  */
  remediation?: string,
  /**
  * Branch ID passed by satellite
  * @type { string }
  * @memberof GetDiagnosisApi
  */
  branchId?: string,
  options?: AxiosRequestConfig
}

export type GetDiagnosisReturnType = AxiosPromise<Diagnosis>;

const isGetDiagnosisObjectParams = (params: [GetDiagnosisParams] | unknown[]): params is [GetDiagnosisParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'system') && true && true
}
/**
* Provides host-specific diagnosis information
* @summary host-specific diagnosis
* @param {GetDiagnosisParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getDiagnosisParamCreator = async (...config: ([GetDiagnosisParams] | [string, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isGetDiagnosisObjectParams(config) ? config[0] : ['system', 'remediation', 'branchId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetDiagnosisParams;
    const { system, remediation, branchId, options = {} } = params;
    const localVarPath = `/diagnosis/{system}`
        .replace(`{${"system"}}`, encodeURIComponent(String(system)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (remediation !== undefined) {
        localVarQueryParameter['remediation'] = remediation;
    }

    if (branchId !== undefined) {
        localVarQueryParameter['branch_id'] = branchId;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default getDiagnosisParamCreator;
