// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Job, UpdateJobRequest } from '../types';


export type UpdateJobParams = {
  /**
  * Job ID
  * @type { any }
  * @memberof UpdateJobApi
  */
  id: any,
  /**
  *
  * @type { UpdateJobRequest }
  * @memberof UpdateJobApi
  */
  updateJobRequest: UpdateJobRequest,
  options?: AxiosRequestConfig
}

export type UpdateJobReturnType = Job;

const isUpdateJobObjectParams = (params: [UpdateJobParams] | unknown[]): params is [UpdateJobParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id') && Object.prototype.hasOwnProperty.call(params[0], 'updateJobRequest')
  }
  return false
}
/**
* Completely update a job with new values. All fields must be provided.
* @summary Update a job
* @param {UpdateJobParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const updateJobParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([UpdateJobParams] | [any, UpdateJobRequest, AxiosRequestConfig])) => {
    const params = isUpdateJobObjectParams(config) ? config[0] : ['id', 'updateJobRequest', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as UpdateJobParams;
    const { id, updateJobRequest, options = {} } = params;
    const localVarPath = `/jobs/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PUT' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: updateJobRequest,
    };

    return sendRequest<UpdateJobReturnType>(Promise.resolve(args));
}

export default updateJobParamCreator;
