// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { RemediationCreated, RemediationInput, RequestError } from '../types';


export type CreateRemediationParams = {
  /**
  *
  * @type { RemediationInput }
  * @memberof CreateRemediationApi
  */
  remediationInput: RemediationInput,
  options?: AxiosRequestConfig
}

export type CreateRemediationReturnType = RemediationCreated;

const isCreateRemediationObjectParams = (params: [CreateRemediationParams] | unknown[]): params is [CreateRemediationParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'remediationInput')
  }
  return false
}
/**
* Creates a new Remediation based on given information, RBAC permission {remediations:remediation:write}
* @summary Create Remediation
* @param {CreateRemediationParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const createRemediationParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([CreateRemediationParams] | [RemediationInput, AxiosRequestConfig])) => {
    const params = isCreateRemediationObjectParams(config) ? config[0] : ['remediationInput', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as CreateRemediationParams;
    const { remediationInput, options = {} } = params;
    const localVarPath = `/remediations`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
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

    return sendRequest<CreateRemediationReturnType>(Promise.resolve(args));
}

export default createRemediationParamCreator;
