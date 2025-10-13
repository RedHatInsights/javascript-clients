// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { RequestError } from '../types';


export type DeleteRemediationParams = {
  /**
  * Remediation identifier
  * @type { string }
  * @memberof DeleteRemediationApi
  */
  id: string,
  options?: AxiosRequestConfig
}

export type DeleteRemediationReturnType = void;

const isDeleteRemediationObjectParams = (params: [DeleteRemediationParams] | unknown[]): params is [DeleteRemediationParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
* Removes the given Remediation, RBAC permission {remediations:remediation:write}
* @summary Remove Remediation
* @param {DeleteRemediationParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const deleteRemediationParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([DeleteRemediationParams] | [string, AxiosRequestConfig])) => {
    const params = isDeleteRemediationObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DeleteRemediationParams;
    const { id, options = {} } = params;
    const localVarPath = `/remediations/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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

    return sendRequest<DeleteRemediationReturnType>(Promise.resolve(args));
}

export default deleteRemediationParamCreator;
