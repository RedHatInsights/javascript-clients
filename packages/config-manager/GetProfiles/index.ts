// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { GetProfiles200Response } from '../types';


export type GetProfilesParams = {
  /**
  *
  * @type { GetProfilesSortByEnum }
  * @memberof GetProfilesApi
  */
  sortBy?: GetProfilesSortByEnum,
  /**
  *
  * @type { number }
  * @memberof GetProfilesApi
  */
  limit?: number,
  /**
  *
  * @type { number }
  * @memberof GetProfilesApi
  */
  offset?: number,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const GetProfilesSortByEnum = {
    At: 'created_at',
    Atasc: 'created_at:asc',
    Atdesc: 'created_at:desc'
} as const;
export type GetProfilesSortByEnum = typeof GetProfilesSortByEnum[keyof typeof GetProfilesSortByEnum];

const isGetProfilesObjectParams = (params: [GetProfilesParams] | unknown[]): params is [GetProfilesParams] => {
  return params.length === 1 && true && true && true
}
/**
* Retrieve a paginated array of profiles for the identified account. The URL query parameters \'limit\' and \'offset\' can be used to paginate the results. The default value of \'limit\' is 50. The default value of \'offset\' is 0.
* @summary Get a list of all profiles
* @param {GetProfilesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getProfilesParamCreator = async (...config: ([GetProfilesParams] | [GetProfilesSortByEnum, number, number, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isGetProfilesObjectParams(config) ? config[0] : ['sortBy', 'limit', 'offset', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetProfilesParams;
    const { sortBy, limit, offset, options = {} } = params;
    const localVarPath = `/profiles`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (sortBy !== undefined) {
        localVarQueryParameter['sort_by'] = sortBy;
    }

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default getProfilesParamCreator;
