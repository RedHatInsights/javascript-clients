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

export type ApiStalenessCreateStalenessReturnType = AxiosPromise<StalenessOutput>;

const isApiStalenessCreateStalenessObjectParams = (params: [ApiStalenessCreateStalenessParams] | unknown[]): params is [ApiStalenessCreateStalenessParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'stalenessIn')
}
/**
* Create account staleness record. Required permissions: staleness:staleness:write
* @summary Create account staleness record
* @param {ApiStalenessCreateStalenessParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiStalenessCreateStalenessParamCreator = async (...config: ([ApiStalenessCreateStalenessParams] | [StalenessIn, AxiosRequestConfig])): Promise<RequestArgs> => {
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

    return {
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
}

export default apiStalenessCreateStalenessParamCreator;
