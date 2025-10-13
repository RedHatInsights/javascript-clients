// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { RemediationInput, RequestError } from '../types';


export type UpdateRemediationParams = {
  /**
  * Remediation identifier
  * @type { string }
  * @memberof UpdateRemediationApi
  */
  id: string,
  /**
  *
  * @type { RemediationInput }
  * @memberof UpdateRemediationApi
  */
  remediationInput: RemediationInput,
  options?: AxiosRequestConfig
}

export type UpdateRemediationReturnType = void;

const isUpdateRemediationObjectParams = (params: [UpdateRemediationParams] | unknown[]): params is [UpdateRemediationParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id') && Object.prototype.hasOwnProperty.call(params[0], 'remediationInput')
  }
  return false
}
/**
* Updates the given Remediation, RBAC permission {remediations:remediation:write}
* @summary Update Remediation
* @param {UpdateRemediationParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const updateRemediationParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([UpdateRemediationParams] | [string, RemediationInput, AxiosRequestConfig])) => {
    const params = isUpdateRemediationObjectParams(config) ? config[0] : ['id', 'remediationInput', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as UpdateRemediationParams;
    const { id, remediationInput, options = {} } = params;
    const localVarPath = `/remediations/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PATCH' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: remediationInput,
    };

    return sendRequest<UpdateRemediationReturnType>(Promise.resolve(args));
}

export default updateRemediationParamCreator;
