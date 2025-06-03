// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersBaselineSystemsResponse, UtilsErrorResponse } from '../types';


export type ListBaselineSystemsParams = {
  /**
  * Baseline ID
  * @type { number }
  * @memberof ListBaselineSystemsApi
  */
  baselineId: number,
  /**
  * Limit for paging
  * @type { number }
  * @memberof ListBaselineSystemsApi
  */
  limit?: number,
  /**
  * Offset for paging
  * @type { number }
  * @memberof ListBaselineSystemsApi
  */
  offset?: number,
  /**
  * Sort field
  * @type { ListBaselineSystemsSortEnum }
  * @memberof ListBaselineSystemsApi
  */
  sort?: ListBaselineSystemsSortEnum,
  /**
  * Find matching text
  * @type { string }
  * @memberof ListBaselineSystemsApi
  */
  search?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListBaselineSystemsApi
  */
  filterDisplayName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListBaselineSystemsApi
  */
  filterOs?: string,
  /**
  * Tag filter
  * @type { Array<string> }
  * @memberof ListBaselineSystemsApi
  */
  tags?: Array<string>,
  /**
  * Filter systems by inventory groups
  * @type { Array<string> }
  * @memberof ListBaselineSystemsApi
  */
  filterGroupName?: Array<string>,
  /**
  * Filter only SAP systems
  * @type { boolean }
  * @memberof ListBaselineSystemsApi
  */
  filterSystemProfileSapSystem?: boolean,
  /**
  * Filter systems by their SAP SIDs
  * @type { Array<string> }
  * @memberof ListBaselineSystemsApi
  */
  filterSystemProfileSapSids?: Array<string>,
  /**
  * Filter systems by ansible
  * @type { string }
  * @memberof ListBaselineSystemsApi
  */
  filterSystemProfileAnsible?: string,
  /**
  * Filter systems by ansible version
  * @type { string }
  * @memberof ListBaselineSystemsApi
  */
  filterSystemProfileAnsibleControllerVersion?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof ListBaselineSystemsApi
  */
  filterSystemProfileMssql?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof ListBaselineSystemsApi
  */
  filterSystemProfileMssqlVersion?: string,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ListBaselineSystemsSortEnum = {
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
    LastUpload: 'last_upload',
    Groups: 'groups'
} as const;
export type ListBaselineSystemsSortEnum = typeof ListBaselineSystemsSortEnum[keyof typeof ListBaselineSystemsSortEnum];

export type ListBaselineSystemsReturnType = AxiosPromise<ControllersBaselineSystemsResponse>;

const isListBaselineSystemsObjectParams = (params: [ListBaselineSystemsParams] | unknown[]): params is [ListBaselineSystemsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'baselineId') && true && true && true && true && true && true && true && true && true && true && true && true && true && true
}
/**
* Show me all systems applicable to a baseline
* @summary Show me all systems belonging to a baseline
* @param {ListBaselineSystemsParams} config with all available params.
* @param {*} [options] Override http request option.
* @deprecated
* @throws {RequiredError}
*/
export const listBaselineSystemsParamCreator = async (...config: ([ListBaselineSystemsParams] | [number, number, number, ListBaselineSystemsSortEnum, string, string, string, Array<string>, Array<string>, boolean, Array<string>, string, string, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListBaselineSystemsObjectParams(config) ? config[0] : ['baselineId', 'limit', 'offset', 'sort', 'search', 'filterDisplayName', 'filterOs', 'tags', 'filterGroupName', 'filterSystemProfileSapSystem', 'filterSystemProfileSapSids', 'filterSystemProfileAnsible', 'filterSystemProfileAnsibleControllerVersion', 'filterSystemProfileMssql', 'filterSystemProfileMssqlVersion', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListBaselineSystemsParams;
    const { baselineId, limit, offset, sort, search, filterDisplayName, filterOs, tags, filterGroupName, filterSystemProfileSapSystem, filterSystemProfileSapSids, filterSystemProfileAnsible, filterSystemProfileAnsibleControllerVersion, filterSystemProfileMssql, filterSystemProfileMssqlVersion, options = {} } = params;
    const localVarPath = `/baselines/{baseline_id}/systems`
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

    if (filterGroupName) {
        localVarQueryParameter['filter[group_name]'] = filterGroupName;
    }

    if (filterSystemProfileSapSystem !== undefined) {
        localVarQueryParameter['filter[system_profile][sap_system]'] = filterSystemProfileSapSystem;
    }

    if (filterSystemProfileSapSids) {
        localVarQueryParameter['filter[system_profile][sap_sids]'] = filterSystemProfileSapSids;
    }

    if (filterSystemProfileAnsible !== undefined) {
        localVarQueryParameter['filter[system_profile][ansible]'] = filterSystemProfileAnsible;
    }

    if (filterSystemProfileAnsibleControllerVersion !== undefined) {
        localVarQueryParameter['filter[system_profile][ansible][controller_version]'] = filterSystemProfileAnsibleControllerVersion;
    }

    if (filterSystemProfileMssql !== undefined) {
        localVarQueryParameter['filter[system_profile][mssql]'] = filterSystemProfileMssql;
    }

    if (filterSystemProfileMssqlVersion !== undefined) {
        localVarQueryParameter['filter[system_profile][mssql][version]'] = filterSystemProfileMssqlVersion;
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

export default listBaselineSystemsParamCreator;
