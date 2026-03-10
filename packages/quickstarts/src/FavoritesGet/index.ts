// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { BadRequest, FavoritesGet200Response } from '../types';


export type FavoritesGetParams = {
  /**
  * Account number
  * @type { string }
  * @memberof FavoritesGetApi
  */
  account: string,
  options?: AxiosRequestConfig
}

export type FavoritesGetReturnType = FavoritesGet200Response;

const isFavoritesGetObjectParams = (params: [FavoritesGetParams] | unknown[]): params is [FavoritesGetParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'account')
  }
  return false
}
/**
*
* @summary Returns list of all favorites
* @param {FavoritesGetParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const favoritesGetParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([FavoritesGetParams] | [string, AxiosRequestConfig])) => {
    const params = isFavoritesGetObjectParams(config) ? config[0] : ['account', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as FavoritesGetParams;
    const { account, options = {} } = params;
    const localVarPath = `/favorites`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (account !== undefined) {
        localVarQueryParameter['account'] = account;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<FavoritesGetReturnType>(Promise.resolve(args));
}

export default favoritesGetParamCreator;
