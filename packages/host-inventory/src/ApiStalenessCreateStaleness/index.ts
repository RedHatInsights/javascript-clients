// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { StalenessIn, StalenessOutput } from '../types';


export type ApiStalenessCreateStalenessParams = {
  /**
  * Data required to create a record for a account staleness.
  * @type { StalenessIn }
  * @memberof ApiStalenessCreateStalenessApi
  */
  stalenessIn: StalenessIn,
  options?: AxiosRequestConfig
}

export type ApiStalenessCreateStalenessReturnType = StalenessOutput;

const isApiStalenessCreateStalenessObjectParams = (params: [ApiStalenessCreateStalenessParams] | unknown[]): params is [ApiStalenessCreateStalenessParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'stalenessIn')
  }
  return false
}
/**
* Create account staleness record. Required permissions: staleness:staleness:write
* @summary Create account staleness record
* @param {ApiStalenessCreateStalenessParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiStalenessCreateStalenessParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiStalenessCreateStalenessParams] | [StalenessIn, AxiosRequestConfig])) => {
    const params = isApiStalenessCreateStalenessObjectParams(config) ? config[0] : ['stalenessIn', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiStalenessCreateStalenessParams;
    const { stalenessIn, options = {} } = params;
    const localVarPath = `/account/staleness`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: stalenessIn,
        auth:[
        {
        // authentication ApiKeyAuth required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        },
        {
        // authentication BearerAuth required
        // bearer auth required
        authType: AuthTypeEnum.Bearer,
        }
        ]
    };

    return sendRequest<ApiStalenessCreateStalenessReturnType>(Promise.resolve(args));
}

export default apiStalenessCreateStalenessParamCreator;
