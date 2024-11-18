// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { RenderedReport } from '../types';


export type SystemRenderedReportsListParams = {
  /**
  * A UUID string identifying this inventory host.
  * @type { string }
  * @memberof SystemRenderedReportsListApi
  */
  uuid: string,
  /**
  * Is this an Ansible system?
  * @type { boolean }
  * @memberof SystemRenderedReportsListApi
  */
  filterSystemProfileAnsible?: boolean,
  /**
  * Is this a Microsoft SQL system?
  * @type { boolean }
  * @memberof SystemRenderedReportsListApi
  */
  filterSystemProfileMssql?: boolean,
  /**
  * Are there systems which contain these SAP SIDs?
  * @type { Array<string> }
  * @memberof SystemRenderedReportsListApi
  */
  filterSystemProfileSapSidsContains?: Array<string>,
  /**
  * Is this a SAP system?
  * @type { boolean }
  * @memberof SystemRenderedReportsListApi
  */
  filterSystemProfileSapSystem?: boolean,
  /**
  * Tags have a namespace, key and value in the form namespace/key=value
  * @type { Array<string> }
  * @memberof SystemRenderedReportsListApi
  */
  tags?: Array<string>,
  /**
  * Search for systems with this updater type
  * @type { Array<SystemRenderedReportsListUpdateMethodEnum> }
  * @memberof SystemRenderedReportsListApi
  */
  updateMethod?: Array<SystemRenderedReportsListUpdateMethodEnum>,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const SystemRenderedReportsListUpdateMethodEnum = {
    Dnfyum: 'dnfyum',
    Ostree: 'ostree'
} as const;
export type SystemRenderedReportsListUpdateMethodEnum = typeof SystemRenderedReportsListUpdateMethodEnum[keyof typeof SystemRenderedReportsListUpdateMethodEnum];

export type SystemRenderedReportsListReturnType = AxiosPromise<Array<RenderedReport>>;

const isSystemRenderedReportsListObjectParams = (params: [SystemRenderedReportsListParams] | unknown[]): params is [SystemRenderedReportsListParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'uuid') && true && true && true && true && true && true
}
/**
* Returns the list of reports for an Inventory Host ID, with the rule templates filled in thanks to node.js and DoT and Markdown.  If the host ID is not found, return an empty list.
* @param {SystemRenderedReportsListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const systemRenderedReportsListParamCreator = async (...config: ([SystemRenderedReportsListParams] | [string, boolean, boolean, Array<string>, boolean, Array<string>, Array<SystemRenderedReportsListUpdateMethodEnum>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isSystemRenderedReportsListObjectParams(config) ? config[0] : ['uuid', 'filterSystemProfileAnsible', 'filterSystemProfileMssql', 'filterSystemProfileSapSidsContains', 'filterSystemProfileSapSystem', 'tags', 'updateMethod', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as SystemRenderedReportsListParams;
    const { uuid, filterSystemProfileAnsible, filterSystemProfileMssql, filterSystemProfileSapSidsContains, filterSystemProfileSapSystem, tags, updateMethod, options = {} } = params;
    const localVarPath = `/api/insights/v1/system/{uuid}/rendered_reports/`
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

export default systemRenderedReportsListParamCreator;
