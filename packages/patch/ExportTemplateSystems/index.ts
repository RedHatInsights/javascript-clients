// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersTemplateSystemsDBLookup, UtilsErrorResponse } from '../types';


export type ExportTemplateSystemsParams = {
  /**
  * Template ID
  * @type { string }
  * @memberof ExportTemplateSystemsApi
  */
  templateId: string,
  /**
  * Find matching text
  * @type { string }
  * @memberof ExportTemplateSystemsApi
  */
  search?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportTemplateSystemsApi
  */
  filterDisplayName?: string,
  /**
  * Filter
  * @type { string }
  * @memberof ExportTemplateSystemsApi
  */
  filterOs?: string,
  /**
  * Tag filter
  * @type { Array<string> }
  * @memberof ExportTemplateSystemsApi
  */
  tags?: Array<string>,
  /**
  * Filter systems by inventory groups
  * @type { Array<string> }
  * @memberof ExportTemplateSystemsApi
  */
  filterGroupName?: Array<string>,
  /**
  * Filter only SAP systems
  * @type { boolean }
  * @memberof ExportTemplateSystemsApi
  */
  filterSystemProfileSapSystem?: boolean,
  /**
  * Filter systems by their SAP SIDs
  * @type { Array<string> }
  * @memberof ExportTemplateSystemsApi
  */
  filterSystemProfileSapSids?: Array<string>,
  /**
  * Filter systems by ansible
  * @type { string }
  * @memberof ExportTemplateSystemsApi
  */
  filterSystemProfileAnsible?: string,
  /**
  * Filter systems by ansible version
  * @type { string }
  * @memberof ExportTemplateSystemsApi
  */
  filterSystemProfileAnsibleControllerVersion?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof ExportTemplateSystemsApi
  */
  filterSystemProfileMssql?: string,
  /**
  * Filter systems by mssql version
  * @type { string }
  * @memberof ExportTemplateSystemsApi
  */
  filterSystemProfileMssqlVersion?: string,
  options?: AxiosRequestConfig
}

export type ExportTemplateSystemsReturnType = AxiosPromise<Array<ControllersTemplateSystemsDBLookup>>;

const isExportTemplateSystemsObjectParams = (params: [ExportTemplateSystemsParams] | unknown[]): params is [ExportTemplateSystemsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true  && Object.prototype.hasOwnProperty.call(params[0], 'templateId')
  }
  return false
}
/**
* Export systems applicable to a template. Export endpoints are not paginated.
* @summary Export systems belonging to a template
* @param {ExportTemplateSystemsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const exportTemplateSystemsParamCreator = async (...config: ([ExportTemplateSystemsParams] | [string, string, string, string, Array<string>, Array<string>, boolean, Array<string>, string, string, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isExportTemplateSystemsObjectParams(config) ? config[0] : ['templateId', 'search', 'filterDisplayName', 'filterOs', 'tags', 'filterGroupName', 'filterSystemProfileSapSystem', 'filterSystemProfileSapSids', 'filterSystemProfileAnsible', 'filterSystemProfileAnsibleControllerVersion', 'filterSystemProfileMssql', 'filterSystemProfileMssqlVersion', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ExportTemplateSystemsParams;
    const { templateId, search, filterDisplayName, filterOs, tags, filterGroupName, filterSystemProfileSapSystem, filterSystemProfileSapSids, filterSystemProfileAnsible, filterSystemProfileAnsibleControllerVersion, filterSystemProfileMssql, filterSystemProfileMssqlVersion, options = {} } = params;
    const localVarPath = `/export/templates/{template_id}/systems`
        .replace(`{${"template_id"}}`, encodeURIComponent(String(templateId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

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

export default exportTemplateSystemsParamCreator;
