// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { RuleCategory } from '../types';


export type RulecategoryListParams = {
  options?: AxiosRequestConfig
}

const isRulecategoryListObjectParams = (params: [RulecategoryListParams] | unknown[]): params is [RulecategoryListParams] => {
  return params.length === 1
}
/**
* Rules are divided into categories, the usual being Availability, Stability, Security and Performance.  Categories are listed in decreasing order of importance.
* @param {RulecategoryListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const rulecategoryListParamCreator = async (...config: ([RulecategoryListParams] | [AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isRulecategoryListObjectParams(config) ? config[0] : ['options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RulecategoryListParams;
    const { options = {} } = params;
    const localVarPath = `/api/insights/v1/rulecategory/`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default rulecategoryListParamCreator;
