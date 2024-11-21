// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { RequestError, ResolutionsBatchInput, ResolutionsBatchValue } from '../types';


export type GetResolutionsForIssuesParams = {
  /**
  *
  * @type { ResolutionsBatchInput }
  * @memberof GetResolutionsForIssuesApi
  */
  resolutionsBatchInput: ResolutionsBatchInput,
  options?: AxiosRequestConfig
}

export type GetResolutionsForIssuesReturnType = AxiosPromise<{ [key: string]: ResolutionsBatchValue; }>;

const isGetResolutionsForIssuesObjectParams = (params: [GetResolutionsForIssuesParams] | unknown[]): params is [GetResolutionsForIssuesParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'resolutionsBatchInput')
}
/**
* Provides information about resolutions available for the given issues
* @summary Resolution metadata (batch)
* @param {GetResolutionsForIssuesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getResolutionsForIssuesParamCreator = async (...config: ([GetResolutionsForIssuesParams] | [ResolutionsBatchInput, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isGetResolutionsForIssuesObjectParams(config) ? config[0] : ['resolutionsBatchInput', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetResolutionsForIssuesParams;
    const { resolutionsBatchInput, options = {} } = params;
    const localVarPath = `/resolutions`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: resolutionsBatchInput,
    };
}

export default getResolutionsForIssuesParamCreator;
