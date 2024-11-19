// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersTemplateSystemsResponse, UtilsErrorResponse } from '../types';


export type ListTemplateSystemsParams = {
  /**
  * Template ID
  * @type { string }
  * @memberof ListTemplateSystemsApi
  */
  templateId: string,
  /**
  * Limit for paging
  * @type { number }
  * @memberof ListTemplateSystemsApi
  */
  limit?: number,
  /**
  * Offset for paging
  * @type { number }
  * @memberof ListTemplateSystemsApi
  */
  offset?: number,
  /**
  * Sort field
  * @type { ListTemplateSystemsSortEnum }
  * @memberof ListTemplateSystemsApi
  */
  sort?: ListTemplateSystemsSortEnum,
  /**
  * Find matching text
  * @type { string }
  * @memberof ListTemplateSystemsApi
  */
  search?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListTemplateSystemsApi
  */
  filterDisplayName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ListTemplateSystemsApi
  */
  filterOs?: string,
  /**
  * Tag filter
  * @type { Array<string> }
  * @memberof ListTemplateSystemsApi
  */
  tags?: Array<string>,
  /**
  * Filter systems by inventory groups
  * @type { Array<string> }
  * @memberof ListTemplateSystemsApi
  */
  filterGroupName?: Array<string>,
  /**
  * Filter only SAP systems
  * @type { string }
  * @memberof ListTemplateSystemsApi
  */
  filterSystemProfileSapSystem?: string,
  /**
  * Filter systems by their SAP SIDs
  * @type { Array<string> }
  * @memberof ListTemplateSystemsApi
  */
  filterSystemProfileSapSids?: Array<string>,
  /**
  * Filter systems by ansible
  * @type { string }
  * @memberof ListTemplateSystemsApi
  */
  filterSystemProfileAnsible?: string,
  /**
  * Filter systems by ansible version
  * @type { string }
  * @memberof ListTemplateSystemsApi
  */
  filterSystemProfileAnsibleControllerVersion?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof ListTemplateSystemsApi
  */
  filterSystemProfileMssql?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof ListTemplateSystemsApi
  */
  filterSystemProfileMssqlVersion?: string,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ListTemplateSystemsSortEnum = {
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
export type ListTemplateSystemsSortEnum = typeof ListTemplateSystemsSortEnum[keyof typeof ListTemplateSystemsSortEnum];

export type ListTemplateSystemsReturnType = AxiosPromise<ControllersTemplateSystemsResponse>;

const isListTemplateSystemsObjectParams = (params: [ListTemplateSystemsParams] | unknown[]): params is [ListTemplateSystemsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'templateId') && true && true && true && true && true && true && true && true && true && true && true && true && true && true
}
/**
* Show me all systems applicable to a template
* @summary Show me all systems belonging to a template
* @param {ListTemplateSystemsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listTemplateSystemsParamCreator = async (...config: ([ListTemplateSystemsParams] | [string, number, number, ListTemplateSystemsSortEnum, string, string, string, Array<string>, Array<string>, string, Array<string>, string, string, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListTemplateSystemsObjectParams(config) ? config[0] : ['templateId', 'limit', 'offset', 'sort', 'search', 'filterDisplayName', 'filterOs', 'tags', 'filterGroupName', 'filterSystemProfileSapSystem', 'filterSystemProfileSapSids', 'filterSystemProfileAnsible', 'filterSystemProfileAnsibleControllerVersion', 'filterSystemProfileMssql', 'filterSystemProfileMssqlVersion', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListTemplateSystemsParams;
    const { templateId, limit, offset, sort, search, filterDisplayName, filterOs, tags, filterGroupName, filterSystemProfileSapSystem, filterSystemProfileSapSids, filterSystemProfileAnsible, filterSystemProfileAnsibleControllerVersion, filterSystemProfileMssql, filterSystemProfileMssqlVersion, options = {} } = params;
    const localVarPath = `/templates/{template_id}/systems`
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

export default listTemplateSystemsParamCreator;
