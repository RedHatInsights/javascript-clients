// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { RemediationConnectionStatus, RequestError } from '../types';


export type GetRemediationConnectionStatusParams = {
  /**
  * Remediation identifier
  * @type { string }
  * @memberof GetRemediationConnectionStatusApi
  */
  id: string,
  options?: AxiosRequestConfig
}

export type GetRemediationConnectionStatusReturnType = RemediationConnectionStatus;

const isGetRemediationConnectionStatusObjectParams = (params: [GetRemediationConnectionStatusParams] | unknown[]): params is [GetRemediationConnectionStatusParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
* Get connection status for remediation plan targets, RBAC permission {remediations:remediation:execute}  Returns an array of the following objects:  - One object for all systems belonging to a unique satellite organization - One object for all direct-connected systems in each of the status categories:    - connected   - disconnected   - no_rhc
* @summary Pre-flight check
* @param {GetRemediationConnectionStatusParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getRemediationConnectionStatusParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([GetRemediationConnectionStatusParams] | [string, AxiosRequestConfig])) => {
    const params = isGetRemediationConnectionStatusObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetRemediationConnectionStatusParams;
    const { id, options = {} } = params;
    const localVarPath = `/remediations/{id}/connection_status`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<GetRemediationConnectionStatusReturnType>(Promise.resolve(args));
}

export default getRemediationConnectionStatusParamCreator;
