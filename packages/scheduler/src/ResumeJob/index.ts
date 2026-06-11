// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Job } from '../types';


export type ResumeJobParams = {
  /**
  * Job ID
  * @type { any }
  * @memberof ResumeJobApi
  */
  id: any,
  options?: AxiosRequestConfig
}

export type ResumeJobReturnType = Job;

const isResumeJobObjectParams = (params: [ResumeJobParams] | unknown[]): params is [ResumeJobParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
* Resume a previously paused job. The job will return to scheduled execution.
* @summary Resume a paused job
* @param {ResumeJobParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const resumeJobParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ResumeJobParams] | [any, AxiosRequestConfig])) => {
    const params = isResumeJobObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ResumeJobParams;
    const { id, options = {} } = params;
    const localVarPath = `/jobs/{id}/resume`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<ResumeJobReturnType>(Promise.resolve(args));
}

export default resumeJobParamCreator;
