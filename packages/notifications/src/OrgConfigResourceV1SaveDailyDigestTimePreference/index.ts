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


export type OrgConfigResourceV1SaveDailyDigestTimePreferenceParams = {
  /**
  *
  * @type { any }
  * @memberof OrgConfigResourceV1SaveDailyDigestTimePreferenceApi
  */
  body: any,
  options?: AxiosRequestConfig
}

export type OrgConfigResourceV1SaveDailyDigestTimePreferenceReturnType = void;

const isOrgConfigResourceV1SaveDailyDigestTimePreferenceObjectParams = (params: [OrgConfigResourceV1SaveDailyDigestTimePreferenceParams] | unknown[]): params is [OrgConfigResourceV1SaveDailyDigestTimePreferenceParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'body')
  }
  return false
}
/**
* Sets the daily digest UTC time. The accepted minute values are 00, 15, 30, and 45. Use this endpoint to set the time when daily emails are sent.
* @summary Set the daily digest time
* @param {OrgConfigResourceV1SaveDailyDigestTimePreferenceParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const orgConfigResourceV1SaveDailyDigestTimePreferenceParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([OrgConfigResourceV1SaveDailyDigestTimePreferenceParams] | [any, AxiosRequestConfig])) => {
    const params = isOrgConfigResourceV1SaveDailyDigestTimePreferenceObjectParams(config) ? config[0] : ['body', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as OrgConfigResourceV1SaveDailyDigestTimePreferenceParams;
    const { body, options = {} } = params;
    const localVarPath = `/org-config/daily-digest/time-preference`;
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
        serializeData: body,
    };

    return sendRequest<OrgConfigResourceV1SaveDailyDigestTimePreferenceReturnType>(Promise.resolve(args));
}

export default orgConfigResourceV1SaveDailyDigestTimePreferenceParamCreator;
