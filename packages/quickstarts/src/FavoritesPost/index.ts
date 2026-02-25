// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { BadRequest, FavoriteQuickstart } from '../types';


export type FavoritesPostParams = {
  /**
  * Account number
  * @type { string }
  * @memberof FavoritesPostApi
  */
  account: string,
  /**
  *
  * @type { FavoriteQuickstart }
  * @memberof FavoritesPostApi
  */
  favoriteQuickstart?: FavoriteQuickstart,
  options?: AxiosRequestConfig
}

export type FavoritesPostReturnType = FavoriteQuickstart;

const isFavoritesPostObjectParams = (params: [FavoritesPostParams] | unknown[]): params is [FavoritesPostParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'account')
  }
  return false
}
/**
*
* @summary Add a favorite
* @param {FavoritesPostParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const favoritesPostParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([FavoritesPostParams] | [string, FavoriteQuickstart, AxiosRequestConfig])) => {
    const params = isFavoritesPostObjectParams(config) ? config[0] : ['account', 'favoriteQuickstart', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as FavoritesPostParams;
    const { account, favoriteQuickstart, options = {} } = params;
    const localVarPath = `/favorites`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (account !== undefined) {
        localVarQueryParameter['account'] = account;
    }



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: favoriteQuickstart,
    };

    return sendRequest<FavoritesPostReturnType>(Promise.resolve(args));
}

export default favoritesPostParamCreator;
