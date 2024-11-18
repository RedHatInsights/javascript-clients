// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Stats } from '../types';


export type StatsRulesRetrieveParams = {
  /**
  * Tags have a namespace, key and value in the form namespace/key=value
  * @type { Array<string> }
  * @memberof StatsRulesRetrieveApi
  */
  tags?: Array<string>,
  /**
  * List of Inventory host group names
  * @type { Array<string> }
  * @memberof StatsRulesRetrieveApi
  */
  groups?: Array<string>,
  /**
  * Is this a SAP system?
  * @type { boolean }
  * @memberof StatsRulesRetrieveApi
  */
  filterSystemProfileSapSystem?: boolean,
  /**
  * Are there systems which contain these SAP SIDs?
  * @type { Array<string> }
  * @memberof StatsRulesRetrieveApi
  */
  filterSystemProfileSapSidsContains?: Array<string>,
  options?: AxiosRequestConfig
}

export type StatsRulesRetrieveReturnType = AxiosPromise<Stats>;

const isStatsRulesRetrieveObjectParams = (params: [StatsRulesRetrieveParams] | unknown[]): params is [StatsRulesRetrieveParams] => {
  return params.length === 1 && true && true && true && true
}
/**
* Show statistics of rule usage across categories and risks.  Only current reports are considered.
* @param {StatsRulesRetrieveParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const statsRulesRetrieveParamCreator = async (...config: ([StatsRulesRetrieveParams] | [Array<string>, Array<string>, boolean, Array<string>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isStatsRulesRetrieveObjectParams(config) ? config[0] : ['tags', 'groups', 'filterSystemProfileSapSystem', 'filterSystemProfileSapSidsContains', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as StatsRulesRetrieveParams;
    const { tags, groups, filterSystemProfileSapSystem, filterSystemProfileSapSidsContains, options = {} } = params;
    const localVarPath = `/api/insights/v1/stats/rules/`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (tags) {
        localVarQueryParameter['tags'] = tags;
    }

    if (groups) {
        localVarQueryParameter['groups'] = groups;
    }

    if (filterSystemProfileSapSystem !== undefined) {
        localVarQueryParameter['filter[system_profile][sap_system]'] = filterSystemProfileSapSystem;
    }

    if (filterSystemProfileSapSidsContains) {
        localVarQueryParameter['filter[system_profile][sap_sids][contains]'] = filterSystemProfileSapSidsContains;
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

export default statsRulesRetrieveParamCreator;
