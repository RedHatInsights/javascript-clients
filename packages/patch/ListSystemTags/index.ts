// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersSystemTagsResponse, UtilsErrorResponse } from '../types';


export type ListSystemTagsParams = {
  /**
  * Sort field
  * @type { ListSystemTagsSortEnum }
  * @memberof ListSystemTagsApi
  */
  sort?: ListSystemTagsSortEnum,
  /**
  * Limit for paging
  * @type { number }
  * @memberof ListSystemTagsApi
  */
  limit?: number,
  /**
  * Offset for paging
  * @type { number }
  * @memberof ListSystemTagsApi
  */
  offset?: number,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ListSystemTagsSortEnum = {
    Tag: 'tag',
    Count: 'count'
} as const;
export type ListSystemTagsSortEnum = typeof ListSystemTagsSortEnum[keyof typeof ListSystemTagsSortEnum];

const isListSystemTagsObjectParams = (params: [ListSystemTagsParams] | unknown[]): params is [ListSystemTagsParams] => {
  return params.length === 1 && true && true && true
}
/**
* Show me systems tags applicable to this application
* @summary Show me systems tags applicable to this application
* @param {ListSystemTagsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listSystemTagsParamCreator = async (...config: ([ListSystemTagsParams] | [ListSystemTagsSortEnum, number, number, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListSystemTagsObjectParams(config) ? config[0] : ['sort', 'limit', 'offset', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListSystemTagsParams;
    const { sort, limit, offset, options = {} } = params;
    const localVarPath = `/tags`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort;
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
        auth:[
        {
        // authentication RhIdentity required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };
}

export default listSystemTagsParamCreator;
