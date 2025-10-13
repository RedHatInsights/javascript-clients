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


export type ApiStalenessUpdateStalenessParams = {
  /**
  * Data required to update a record for a account staleness.
  * @type { StalenessIn }
  * @memberof ApiStalenessUpdateStalenessApi
  */
  stalenessIn: StalenessIn,
  options?: AxiosRequestConfig
}

export type ApiStalenessUpdateStalenessReturnType = StalenessOutput;

const isApiStalenessUpdateStalenessObjectParams = (params: [ApiStalenessUpdateStalenessParams] | unknown[]): params is [ApiStalenessUpdateStalenessParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'stalenessIn')
  }
  return false
}
/**
* Update account staleness record. Required permissions: staleness:staleness:write
* @summary Update account staleness record
* @param {ApiStalenessUpdateStalenessParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiStalenessUpdateStalenessParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiStalenessUpdateStalenessParams] | [StalenessIn, AxiosRequestConfig])) => {
    const params = isApiStalenessUpdateStalenessObjectParams(config) ? config[0] : ['stalenessIn', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiStalenessUpdateStalenessParams;
    const { stalenessIn, options = {} } = params;
    const localVarPath = `/account/staleness`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PATCH' as Method, ...options};
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

    return sendRequest<ApiStalenessUpdateStalenessReturnType>(Promise.resolve(args));
}

export default apiStalenessUpdateStalenessParamCreator;
