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


export type DownloadPlaybooksParams = {
  /**
  * Selected Remediations for download
  * @type { Array<string> }
  * @memberof DownloadPlaybooksApi
  */
  selectedRemediations?: Array<string>,
  options?: AxiosRequestConfig
}

export type DownloadPlaybooksReturnType = AxiosPromise<File>;

const isDownloadPlaybooksObjectParams = (params: [DownloadPlaybooksParams] | unknown[]): params is [DownloadPlaybooksParams] => {
  return params.length === 1 && true
}
/**
* Downloads a zip file containing selected Remediations, RBAC permission {remediations:remediation:read}
* @summary Download Remediations
* @param {DownloadPlaybooksParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const downloadPlaybooksParamCreator = async (...config: ([DownloadPlaybooksParams] | [Array<string>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isDownloadPlaybooksObjectParams(config) ? config[0] : ['selectedRemediations', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DownloadPlaybooksParams;
    const { selectedRemediations, options = {} } = params;
    const localVarPath = `/remediations/download`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (selectedRemediations) {
        localVarQueryParameter['selected_remediations'] = selectedRemediations;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default downloadPlaybooksParamCreator;
