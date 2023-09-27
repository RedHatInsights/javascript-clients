// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../utils/common';
import type { RequestArgs } from '../utils/base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, AuthTypeEnum } from '../utils/base';
import { Configuration } from '../utils/configuration';

// @ts-ignore
import type {  } from '../types';


export type OrgConfigResourceV1GetDailyDigestTimePreferenceParams = {
  options?: AxiosRequestConfig
}

const isOrgConfigResourceV1GetDailyDigestTimePreferenceObjectParams = (params: [OrgConfigResourceV1GetDailyDigestTimePreferenceParams] | unknown[]): params is [OrgConfigResourceV1GetDailyDigestTimePreferenceParams] => {
  return params.length === 1
}
/**
* Retrieves the daily digest time setting. Use this endpoint to check the time that daily emails are sent.
* @summary Retrieve the daily digest time
* @param {OrgConfigResourceV1GetDailyDigestTimePreferenceParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const orgConfigResourceV1GetDailyDigestTimePreferenceParamCreator = async (...config: ([OrgConfigResourceV1GetDailyDigestTimePreferenceParams] | [AxiosRequestConfig])): Promise<RequestArgs> => {
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

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default orgConfigResourceV1GetDailyDigestTimePreferenceParamCreator;
