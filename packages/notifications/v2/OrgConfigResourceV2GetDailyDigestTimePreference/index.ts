// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type {  } from '../types';


export type OrgConfigResourceV2GetDailyDigestTimePreferenceParams = {
  options?: AxiosRequestConfig
}

export type OrgConfigResourceV2GetDailyDigestTimePreferenceReturnType = AxiosPromise<any>;

const isOrgConfigResourceV2GetDailyDigestTimePreferenceObjectParams = (params: [OrgConfigResourceV2GetDailyDigestTimePreferenceParams] | unknown[]): params is [OrgConfigResourceV2GetDailyDigestTimePreferenceParams] => {
  return params.length === 1
}
/**
* Retrieves the daily digest time setting. Use this endpoint to check the time that daily emails are sent.
* @summary Retrieve the daily digest time
* @param {OrgConfigResourceV2GetDailyDigestTimePreferenceParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const orgConfigResourceV2GetDailyDigestTimePreferenceParamCreator = async (...config: ([OrgConfigResourceV2GetDailyDigestTimePreferenceParams] | [AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isOrgConfigResourceV2GetDailyDigestTimePreferenceObjectParams(config) ? config[0] : ['options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as OrgConfigResourceV2GetDailyDigestTimePreferenceParams;
    const { options = {} } = params;
    const localVarPath = `/org-config/daily-digest/time-preference`;
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

export default orgConfigResourceV2GetDailyDigestTimePreferenceParamCreator;
