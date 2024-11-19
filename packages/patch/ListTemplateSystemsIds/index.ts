// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersIDsPlainResponse, UtilsErrorResponse } from '../types';


export type ListTemplateSystemsIdsParams = {
  /**
  * Template ID
  * @type { string }
  * @memberof ListTemplateSystemsIdsApi
  */
  templateId: string,
  /**
  * Limit for paging
  * @type { number }
  * @memberof ListTemplateSystemsIdsApi
  */
  limit?: number,
  /**
  * Offset for paging
  * @type { number }
  * @memberof ListTemplateSystemsIdsApi
  */
  offset?: number,
  /**
  * Sort field
  * @type { ListTemplateSystemsIdsSortEnum }
  * @memberof ListTemplateSystemsIdsApi
  */
  sort?: ListTemplateSystemsIdsSortEnum,
  /**
  * Find matching text
  * @type { string }
  * @memberof ListTemplateSystemsIdsApi
  */
  search?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListTemplateSystemsIdsApi
  */
  filterDisplayName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListTemplateSystemsIdsApi
  */
  filterOs?: string,
  /**
  * Tag filter
  * @type { Array<string> }
  * @memberof ListTemplateSystemsIdsApi
  */
  tags?: Array<string>,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ListTemplateSystemsIdsSortEnum = {
    Id: 'id',
    DisplayName: 'display_name',
    Os: 'os',
    InstallableRhsaCount: 'installable_rhsa_count',
    InstallableRhbaCount: 'installable_rhba_count',
    InstallableRheaCount: 'installable_rhea_count',
    InstallableOtherCount: 'installable_other_count',
    ApplicableRhsaCount: 'applicable_rhsa_count',
    ApplicableRhbaCount: 'applicable_rhba_count',
    ApplicableRheaCount: 'applicable_rhea_count',
    ApplicableOtherCount: 'applicable_other_count',
    LastUpload: 'last_upload'
} as const;
export type ListTemplateSystemsIdsSortEnum = typeof ListTemplateSystemsIdsSortEnum[keyof typeof ListTemplateSystemsIdsSortEnum];

export type ListTemplateSystemsIdsReturnType = AxiosPromise<ControllersIDsPlainResponse>;

const isListTemplateSystemsIdsObjectParams = (params: [ListTemplateSystemsIdsParams] | unknown[]): params is [ListTemplateSystemsIdsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'templateId') && true && true && true && true && true && true && true
}
/**
* Show me all systems applicable to a template
* @summary Show me all systems belonging to a template
* @param {ListTemplateSystemsIdsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listTemplateSystemsIdsParamCreator = async (...config: ([ListTemplateSystemsIdsParams] | [string, number, number, ListTemplateSystemsIdsSortEnum, string, string, string, Array<string>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListTemplateSystemsIdsObjectParams(config) ? config[0] : ['templateId', 'limit', 'offset', 'sort', 'search', 'filterDisplayName', 'filterOs', 'tags', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListTemplateSystemsIdsParams;
    const { templateId, limit, offset, sort, search, filterDisplayName, filterOs, tags, options = {} } = params;
    const localVarPath = `/ids/templates/{template_id}/systems`
        .replace(`{${"template_id"}}`, encodeURIComponent(String(templateId)));
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

    if (filterDisplayName !== undefined) {
        localVarQueryParameter['filter[display_name]'] = filterDisplayName;
    }

    if (filterOs !== undefined) {
        localVarQueryParameter['filter[os]'] = filterOs;
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

export default listTemplateSystemsIdsParamCreator;
