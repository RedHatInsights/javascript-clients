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


export type StatusLiveRetrieveParams = {
  options?: AxiosRequestConfig
}

export type StatusLiveRetrieveReturnType = AxiosPromise<void>;

const isStatusLiveRetrieveObjectParams = (params: [StatusLiveRetrieveParams] | unknown[]): params is [StatusLiveRetrieveParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Is the Advisor API live and serving requests?  This returns a dictionary with properties defining the status of the components Advisor relies on.  At the moment this is the same as the Readiness check (see `/ready/`). In the future it may include other checks if we need to, but the properties of `/ready/` will always be included.
* @param {StatusLiveRetrieveParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const statusLiveRetrieveParamCreator = async (...config: ([StatusLiveRetrieveParams] | [AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isStatusLiveRetrieveObjectParams(config) ? config[0] : ['options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as StatusLiveRetrieveParams;
    const { options = {} } = params;
    const localVarPath = `/api/insights/v1/status/live/`;
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

export default statusLiveRetrieveParamCreator;
