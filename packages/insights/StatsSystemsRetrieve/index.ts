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


export type StatsSystemsRetrieveParams = {
  /**
  * Tags have a namespace, key and value in the form namespace/key=value
  * @type { Array<string> }
  * @memberof StatsSystemsRetrieveApi
  */
  tags?: Array<string>,
  /**
  * List of Inventory host group names
  * @type { Array<string> }
  * @memberof StatsSystemsRetrieveApi
  */
  groups?: Array<string>,
  /**
  * Is this a SAP system?
  * @type { boolean }
  * @memberof StatsSystemsRetrieveApi
  */
  filterSystemProfileSapSystem?: boolean,
  /**
  * Are there systems which contain these SAP SIDs?
  * @type { Array<string> }
  * @memberof StatsSystemsRetrieveApi
  */
  filterSystemProfileSapSidsContains?: Array<string>,
  options?: AxiosRequestConfig
}

export type StatsSystemsRetrieveReturnType = Stats;

const isStatsSystemsRetrieveObjectParams = (params: [StatsSystemsRetrieveParams] | unknown[]): params is [StatsSystemsRetrieveParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Show statistics of systems being impacted across categories and risks.  Only current reports are considered.
* @param {StatsSystemsRetrieveParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const statsSystemsRetrieveParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([StatsSystemsRetrieveParams] | [Array<string>, Array<string>, boolean, Array<string>, AxiosRequestConfig])) => {
    const params = isStatsSystemsRetrieveObjectParams(config) ? config[0] : ['tags', 'groups', 'filterSystemProfileSapSystem', 'filterSystemProfileSapSidsContains', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as StatsSystemsRetrieveParams;
    const { tags, groups, filterSystemProfileSapSystem, filterSystemProfileSapSidsContains, options = {} } = params;
    const localVarPath = `/api/insights/v1/stats/systems/`;
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

    return sendRequest<StatsSystemsRetrieveReturnType>(Promise.resolve(args));
}

export default statsSystemsRetrieveParamCreator;
