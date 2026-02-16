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


export type CheckExecutableParams = {
  /**
  * Remediation identifier
  * @type { string }
  * @memberof CheckExecutableApi
  */
  id: string,
  options?: AxiosRequestConfig
}

export type CheckExecutableReturnType = void;

const isCheckExecutableObjectParams = (params: [CheckExecutableParams] | unknown[]): params is [CheckExecutableParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
* Checks if a remediation exists
* @summary Check if remediation is executable
* @param {CheckExecutableParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const checkExecutableParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([CheckExecutableParams] | [string, AxiosRequestConfig])) => {
    const params = isCheckExecutableObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as CheckExecutableParams;
    const { id, options = {} } = params;
    const localVarPath = `/remediations/{id}/executable`
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

    return sendRequest<CheckExecutableReturnType>(Promise.resolve(args));
}

export default checkExecutableParamCreator;
