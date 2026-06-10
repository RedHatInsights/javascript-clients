// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Job, PatchJobRequest } from '../types';


export type PatchJobParams = {
  /**
  * Job ID
  * @type { any }
  * @memberof PatchJobApi
  */
  id: any,
  /**
  *
  * @type { PatchJobRequest }
  * @memberof PatchJobApi
  */
  patchJobRequest: PatchJobRequest,
  options?: AxiosRequestConfig
}

export type PatchJobReturnType = Job;

const isPatchJobObjectParams = (params: [PatchJobParams] | unknown[]): params is [PatchJobParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id') && Object.prototype.hasOwnProperty.call(params[0], 'patchJobRequest')
  }
  return false
}
/**
* Update specific fields of a job. Only provided fields will be updated.
* @summary Partially update a job
* @param {PatchJobParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const patchJobParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([PatchJobParams] | [any, PatchJobRequest, AxiosRequestConfig])) => {
    const params = isPatchJobObjectParams(config) ? config[0] : ['id', 'patchJobRequest', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as PatchJobParams;
    const { id, patchJobRequest, options = {} } = params;
    const localVarPath = `/jobs/{id}`
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
        serializeData: patchJobRequest,
    };

    return sendRequest<PatchJobReturnType>(Promise.resolve(args));
}

export default patchJobParamCreator;
