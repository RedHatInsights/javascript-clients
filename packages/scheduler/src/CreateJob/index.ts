// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { CreateJobRequest, Job } from '../types';


export type CreateJobParams = {
  /**
  *
  * @type { CreateJobRequest }
  * @memberof CreateJobApi
  */
  createJobRequest: CreateJobRequest,
  options?: AxiosRequestConfig
}

export type CreateJobReturnType = Job;

const isCreateJobObjectParams = (params: [CreateJobParams] | unknown[]): params is [CreateJobParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'createJobRequest')
  }
  return false
}
/**
* Create a new scheduled job for the authenticated organization.
* @summary Create a new job
* @param {CreateJobParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const createJobParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([CreateJobParams] | [CreateJobRequest, AxiosRequestConfig])) => {
    const params = isCreateJobObjectParams(config) ? config[0] : ['createJobRequest', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as CreateJobParams;
    const { createJobRequest, options = {} } = params;
    const localVarPath = `/jobs`;
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
        serializeData: createJobRequest,
    };

    return sendRequest<CreateJobReturnType>(Promise.resolve(args));
}

export default createJobParamCreator;
