// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { RequestError, Resolutions } from '../types';


export type GetResolutionsForIssueParams = {
  /**
  * Issue identifier (e.g. `advisor:CVE_2017_6074_kernel|KERNEL_CVE_2017_6074`)
  * @type { string }
  * @memberof GetResolutionsForIssueApi
  */
  issue: string,
  options?: AxiosRequestConfig
}

export type GetResolutionsForIssueReturnType = Resolutions;

const isGetResolutionsForIssueObjectParams = (params: [GetResolutionsForIssueParams] | unknown[]): params is [GetResolutionsForIssueParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'issue')
  }
  return false
}
/**
* Provides information about resolutions available for the given issue
* @summary Resolution metadata
* @param {GetResolutionsForIssueParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getResolutionsForIssueParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([GetResolutionsForIssueParams] | [string, AxiosRequestConfig])) => {
    const params = isGetResolutionsForIssueObjectParams(config) ? config[0] : ['issue', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetResolutionsForIssueParams;
    const { issue, options = {} } = params;
    const localVarPath = `/resolutions/{issue}`
        .replace(`{${"issue"}}`, encodeURIComponent(String(issue)));
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

    return sendRequest<GetResolutionsForIssueReturnType>(Promise.resolve(args));
}

export default getResolutionsForIssueParamCreator;
