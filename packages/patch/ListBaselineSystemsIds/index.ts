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


export type ListBaselineSystemsIdsParams = {
  /**
  * Baseline ID
  * @type { number }
  * @memberof ListBaselineSystemsIdsApi
  */
  baselineId: number,
  /**
  * Limit for paging
  * @type { number }
  * @memberof ListBaselineSystemsIdsApi
  */
  limit?: number,
  /**
  * Offset for paging
  * @type { number }
  * @memberof ListBaselineSystemsIdsApi
  */
  offset?: number,
  /**
  * Sort field
  * @type { ListBaselineSystemsIdsSortEnum }
  * @memberof ListBaselineSystemsIdsApi
  */
  sort?: ListBaselineSystemsIdsSortEnum,
  /**
  * Find matching text
  * @type { string }
  * @memberof ListBaselineSystemsIdsApi
  */
  search?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListBaselineSystemsIdsApi
  */
  filterDisplayName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListBaselineSystemsIdsApi
  */
  filterOs?: string,
  /**
  * Tag filter
  * @type { Array<string> }
  * @memberof ListBaselineSystemsIdsApi
  */
  tags?: Array<string>,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ListBaselineSystemsIdsSortEnum = {
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
export type ListBaselineSystemsIdsSortEnum = typeof ListBaselineSystemsIdsSortEnum[keyof typeof ListBaselineSystemsIdsSortEnum];

export type ListBaselineSystemsIdsReturnType = AxiosPromise<ControllersIDsPlainResponse>;

const isListBaselineSystemsIdsObjectParams = (params: [ListBaselineSystemsIdsParams] | unknown[]): params is [ListBaselineSystemsIdsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'baselineId') && true && true && true && true && true && true && true
}
/**
* Show me all systems applicable to a baseline
* @summary Show me all systems belonging to a baseline
* @param {ListBaselineSystemsIdsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listBaselineSystemsIdsParamCreator = async (...config: ([ListBaselineSystemsIdsParams] | [number, number, number, ListBaselineSystemsIdsSortEnum, string, string, string, Array<string>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListBaselineSystemsIdsObjectParams(config) ? config[0] : ['baselineId', 'limit', 'offset', 'sort', 'search', 'filterDisplayName', 'filterOs', 'tags', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListBaselineSystemsIdsParams;
    const { baselineId, limit, offset, sort, search, filterDisplayName, filterOs, tags, options = {} } = params;
    const localVarPath = `/ids/baselines/{baseline_id}/systems`
        .replace(`{${"baseline_id"}}`, encodeURIComponent(String(baselineId)));
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

export default listBaselineSystemsIdsParamCreator;
