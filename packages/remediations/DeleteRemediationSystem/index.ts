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


export type DeleteRemediationSystemParams = {
  /**
  * Remediation identifier
  * @type { string }
  * @memberof DeleteRemediationSystemApi
  */
  id: string,
  /**
  * System identifier
  * @type { string }
  * @memberof DeleteRemediationSystemApi
  */
  system: string,
  options?: AxiosRequestConfig
}

export type DeleteRemediationSystemReturnType = void;

const isDeleteRemediationSystemObjectParams = (params: [DeleteRemediationSystemParams] | unknown[]): params is [DeleteRemediationSystemParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id') && Object.prototype.hasOwnProperty.call(params[0], 'system')
  }
  return false
}
/**
* Removes the given System from all issues in the specified remediation plan, RBAC permission {remediations:remediation:write}
* @summary Remove system from all issues in remediation
* @param {DeleteRemediationSystemParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const deleteRemediationSystemParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([DeleteRemediationSystemParams] | [string, string, AxiosRequestConfig])) => {
    const params = isDeleteRemediationSystemObjectParams(config) ? config[0] : ['id', 'system', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DeleteRemediationSystemParams;
    const { id, system, options = {} } = params;
    const localVarPath = `/remediations/{id}/systems/{system}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)))
        .replace(`{${"system"}}`, encodeURIComponent(String(system)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'DELETE' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<DeleteRemediationSystemReturnType>(Promise.resolve(args));
}

export default deleteRemediationSystemParamCreator;
