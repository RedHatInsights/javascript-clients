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


export type StatsOverviewRetrieveParams = {
  /**
  * Tags have a namespace, key and value in the form namespace/key=value
  * @type { Array<string> }
  * @memberof StatsOverviewRetrieveApi
  */
  tags?: Array<string>,
  /**
  * List of Inventory host group names
  * @type { Array<string> }
  * @memberof StatsOverviewRetrieveApi
  */
  groups?: Array<string>,
  /**
  * Is this a SAP system?
  * @type { boolean }
  * @memberof StatsOverviewRetrieveApi
  */
  filterSystemProfileSapSystem?: boolean,
  /**
  * Are there systems which contain these SAP SIDs?
  * @type { Array<string> }
  * @memberof StatsOverviewRetrieveApi
  */
  filterSystemProfileSapSidsContains?: Array<string>,
  options?: AxiosRequestConfig
}

export type StatsOverviewRetrieveReturnType = Stats;

const isStatsOverviewRetrieveObjectParams = (params: [StatsOverviewRetrieveParams] | unknown[]): params is [StatsOverviewRetrieveParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Show overview statistics for this user  This gives the number of pathways, and incident, critical and important recommendations, affecting systems that the user can see.
* @param {StatsOverviewRetrieveParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const statsOverviewRetrieveParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([StatsOverviewRetrieveParams] | [Array<string>, Array<string>, boolean, Array<string>, AxiosRequestConfig])) => {
    const params = isStatsOverviewRetrieveObjectParams(config) ? config[0] : ['tags', 'groups', 'filterSystemProfileSapSystem', 'filterSystemProfileSapSidsContains', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as StatsOverviewRetrieveParams;
    const { tags, groups, filterSystemProfileSapSystem, filterSystemProfileSapSidsContains, options = {} } = params;
    const localVarPath = `/api/insights/v1/stats/overview/`;
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

    const args = {
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

    return sendRequest<StatsOverviewRetrieveReturnType>(Promise.resolve(args));
}

export default statsOverviewRetrieveParamCreator;
