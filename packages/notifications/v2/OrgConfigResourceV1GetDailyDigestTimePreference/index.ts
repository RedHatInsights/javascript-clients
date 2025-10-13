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


export type OrgConfigResourceV1GetDailyDigestTimePreferenceParams = {
  options?: AxiosRequestConfig
}

export type OrgConfigResourceV1GetDailyDigestTimePreferenceReturnType = any;

const isOrgConfigResourceV1GetDailyDigestTimePreferenceObjectParams = (params: [OrgConfigResourceV1GetDailyDigestTimePreferenceParams] | unknown[]): params is [OrgConfigResourceV1GetDailyDigestTimePreferenceParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Retrieves the daily digest time setting. Use this endpoint to check the time that daily emails are sent.
* @summary Retrieve the daily digest time
* @param {OrgConfigResourceV1GetDailyDigestTimePreferenceParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const orgConfigResourceV1GetDailyDigestTimePreferenceParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([OrgConfigResourceV1GetDailyDigestTimePreferenceParams] | [AxiosRequestConfig])) => {
    const params = isOrgConfigResourceV1GetDailyDigestTimePreferenceObjectParams(config) ? config[0] : ['options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as OrgConfigResourceV1GetDailyDigestTimePreferenceParams;
    const { options = {} } = params;
    const localVarPath = `/org-config/daily-digest/time-preference`;
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

    return sendRequest<OrgConfigResourceV1GetDailyDigestTimePreferenceReturnType>(Promise.resolve(args));
}

export default orgConfigResourceV1GetDailyDigestTimePreferenceParamCreator;
