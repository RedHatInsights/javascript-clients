// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersTemplatesResponse, UtilsErrorResponse } from '../types';


export type ListTemplateParams = {
  /**
  * Limit for paging
  * @type { number }
  * @memberof ListTemplateApi
  */
  limit?: number,
  /**
  * Offset for paging
  * @type { number }
  * @memberof ListTemplateApi
  */
  offset?: number,
  /**
  * Sort field
  * @type { ListTemplateSortEnum }
  * @memberof ListTemplateApi
  */
  sort?: ListTemplateSortEnum,
  /**
  * Find matching text
  * @type { string }
  * @memberof ListTemplateApi
  */
  search?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListTemplateApi
  */
  filterId?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListTemplateApi
  */
  filterName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListTemplateApi
  */
  filterSystems?: string,
  /**
  * Tag filter
  * @type { Array<string> }
  * @memberof ListTemplateApi
  */
  tags?: Array<string>,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ListTemplateSortEnum = {
    Id: 'id',
    Name: 'name',
    Systems: 'systems',
    Published: 'published',
    LastEdited: 'last_edited'
} as const;
export type ListTemplateSortEnum = typeof ListTemplateSortEnum[keyof typeof ListTemplateSortEnum];

export type ListTemplateReturnType = AxiosPromise<ControllersTemplatesResponse>;

const isListTemplateObjectParams = (params: [ListTemplateParams] | unknown[]): params is [ListTemplateParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Show all templates for an account
* @summary Show all templates for an account
* @param {ListTemplateParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listTemplateParamCreator = async (...config: ([ListTemplateParams] | [number, number, ListTemplateSortEnum, string, string, string, string, Array<string>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListTemplateObjectParams(config) ? config[0] : ['limit', 'offset', 'sort', 'search', 'filterId', 'filterName', 'filterSystems', 'tags', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListTemplateParams;
    const { limit, offset, sort, search, filterId, filterName, filterSystems, tags, options = {} } = params;
    const localVarPath = `/templates`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }

    if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort;
    }

    if (search !== undefined) {
        localVarQueryParameter['search'] = search;
    }

    if (filterId !== undefined) {
        localVarQueryParameter['filter[id]'] = filterId;
    }

    if (filterName !== undefined) {
        localVarQueryParameter['filter[name]'] = filterName;
    }

    if (filterSystems !== undefined) {
        localVarQueryParameter['filter[systems]'] = filterSystems;
    }

    if (tags) {
        localVarQueryParameter['tags'] = tags;
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

export default listTemplateParamCreator;
