// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { BadRequest, V1FavoriteQuickstart } from '../types';


export type FavoritesPostParams = {
  /**
  *
  * @type { V1FavoriteQuickstart }
  * @memberof FavoritesPostApi
  */
  v1FavoriteQuickstart?: V1FavoriteQuickstart,
  options?: AxiosRequestConfig
}

const isFavoritesPostObjectParams = (params: [FavoritesPostParams] | unknown[]): params is [FavoritesPostParams] => {
  return params.length === 1 && true
}
/**
*
* @summary Add a favorite
* @param {FavoritesPostParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const favoritesPostParamCreator = async (...config: ([FavoritesPostParams] | [V1FavoriteQuickstart, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isFavoritesPostObjectParams(config) ? config[0] : ['v1FavoriteQuickstart', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as FavoritesPostParams;
    const { v1FavoriteQuickstart, options = {} } = params;
    const localVarPath = `/favorites`;
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
        serializeData: v1FavoriteQuickstart,
    };
}

export default favoritesPostParamCreator;
