// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Report } from '../types';


export type SystemReportsListParams = {
  /**
  * A UUID string identifying this inventory host.
  * @type { string }
  * @memberof SystemReportsListApi
  */
  uuid: string,
  /**
  * Is this an Ansible system?
  * @type { boolean }
  * @memberof SystemReportsListApi
  */
  filterSystemProfileAnsible?: boolean,
  /**
  * Is this a Microsoft SQL system?
  * @type { boolean }
  * @memberof SystemReportsListApi
  */
  filterSystemProfileMssql?: boolean,
  /**
  * Are there systems which contain these SAP SIDs?
  * @type { Array<string> }
  * @memberof SystemReportsListApi
  */
  filterSystemProfileSapSidsContains?: Array<string>,
  /**
  * Is this a SAP system?
  * @type { boolean }
  * @memberof SystemReportsListApi
  */
  filterSystemProfileSapSystem?: boolean,
  /**
  * List of Inventory host group names
  * @type { Array<string> }
  * @memberof SystemReportsListApi
  */
  groups?: Array<string>,
  /**
  * Tags have a namespace, key and value in the form namespace/key=value
  * @type { Array<string> }
  * @memberof SystemReportsListApi
  */
  tags?: Array<string>,
  /**
  * Search for systems with this updater type
  * @type { Array<SystemReportsListUpdateMethodEnum> }
  * @memberof SystemReportsListApi
  */
  updateMethod?: Array<SystemReportsListUpdateMethodEnum>,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const SystemReportsListUpdateMethodEnum = {
    Dnfyum: 'dnfyum',
    Ostree: 'ostree'
} as const;
export type SystemReportsListUpdateMethodEnum = typeof SystemReportsListUpdateMethodEnum[keyof typeof SystemReportsListUpdateMethodEnum];

export type SystemReportsListReturnType = AxiosPromise<Array<Report>>;

const isSystemReportsListObjectParams = (params: [SystemReportsListParams] | unknown[]): params is [SystemReportsListParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'uuid') && true && true && true && true && true && true && true
}
/**
* Returns the list of latest reports for an Inventory Host ID.  Returns reports that:  * are in the user\'s account  * have an active, not-deleted rule  * where the rule has not been acked by this account  If the host ID is not found, return an empty list.
* @param {SystemReportsListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const systemReportsListParamCreator = async (...config: ([SystemReportsListParams] | [string, boolean, boolean, Array<string>, boolean, Array<string>, Array<string>, Array<SystemReportsListUpdateMethodEnum>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isSystemReportsListObjectParams(config) ? config[0] : ['uuid', 'filterSystemProfileAnsible', 'filterSystemProfileMssql', 'filterSystemProfileSapSidsContains', 'filterSystemProfileSapSystem', 'groups', 'tags', 'updateMethod', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as SystemReportsListParams;
    const { uuid, filterSystemProfileAnsible, filterSystemProfileMssql, filterSystemProfileSapSidsContains, filterSystemProfileSapSystem, groups, tags, updateMethod, options = {} } = params;
    const localVarPath = `/api/insights/v1/system/{uuid}/reports/`
        .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (filterSystemProfileAnsible !== undefined) {
        localVarQueryParameter['filter[system_profile][ansible]'] = filterSystemProfileAnsible;
    }

    if (filterSystemProfileMssql !== undefined) {
        localVarQueryParameter['filter[system_profile][mssql]'] = filterSystemProfileMssql;
    }

    if (filterSystemProfileSapSidsContains) {
        localVarQueryParameter['filter[system_profile][sap_sids][contains]'] = filterSystemProfileSapSidsContains;
    }

    if (filterSystemProfileSapSystem !== undefined) {
        localVarQueryParameter['filter[system_profile][sap_system]'] = filterSystemProfileSapSystem;
    }

    if (groups) {
        localVarQueryParameter['groups'] = groups;
    }

    if (tags) {
        localVarQueryParameter['tags'] = tags;
    }

    if (updateMethod) {
        localVarQueryParameter['update_method'] = updateMethod;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        auth:[
        {
        // authentication x-rh-identity required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };
}

export default systemReportsListParamCreator;
