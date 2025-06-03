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

export type GetRemediationConnectionStatusReturnType = AxiosPromise<RemediationConnectionStatus>;

const isGetRemediationConnectionStatusObjectParams = (params: [GetRemediationConnectionStatusParams] | unknown[]): params is [GetRemediationConnectionStatusParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'id')
}
/**
* Get connection status for remediation plan targets, RBAC permission {remediations:remediation:execute}  Returns an array of the following objects:  - One object for all systems belonging to a unique satellite organization - One object for all direct-connected systems in each of the status categories:    - connected   - disconnected   - no_rhc
* @summary Pre-flight check
* @param {GetRemediationConnectionStatusParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getRemediationConnectionStatusParamCreator = async (...config: ([GetRemediationConnectionStatusParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
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

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default getRemediationConnectionStatusParamCreator;
