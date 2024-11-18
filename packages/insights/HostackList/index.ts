// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PaginatedHostAckList } from '../types';


export type HostackListParams = {
  /**
  * Are there systems which contain these SAP SIDs?
  * @type { Array<string> }
  * @memberof HostackListApi
  */
  filterSystemProfileSapSidsContains?: Array<string>,
  /**
  * Is this a SAP system?
  * @type { boolean }
  * @memberof HostackListApi
  */
  filterSystemProfileSapSystem?: boolean,
  /**
  * List of Inventory host group names
  * @type { Array<string> }
  * @memberof HostackListApi
  */
  groups?: Array<string>,
  /**
  * Number of results to return per page.
  * @type { number }
  * @memberof HostackListApi
  */
  limit?: number,
  /**
  * The initial index from which to return the results.
  * @type { number }
  * @memberof HostackListApi
  */
  offset?: number,
  /**
  * Display host acknowledgement of this/these rules
  * @type { Array<string> }
  * @memberof HostackListApi
  */
  ruleId?: Array<string>,
  /**
  * Tags have a namespace, key and value in the form namespace/key=value
  * @type { Array<string> }
  * @memberof HostackListApi
  */
  tags?: Array<string>,
  options?: AxiosRequestConfig
}

const isHostackListObjectParams = (params: [HostackListParams] | unknown[]): params is [HostackListParams] => {
  return params.length === 1 && true && true && true && true && true && true && true
}
/**
* List host acks from this account for a system where the rule is active.  Hostacks are retrieved, edited and deleted by the \'id\' field.
* @param {HostackListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const hostackListParamCreator = async (...config: ([HostackListParams] | [Array<string>, boolean, Array<string>, number, number, Array<string>, Array<string>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isHostackListObjectParams(config) ? config[0] : ['filterSystemProfileSapSidsContains', 'filterSystemProfileSapSystem', 'groups', 'limit', 'offset', 'ruleId', 'tags', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as HostackListParams;
    const { filterSystemProfileSapSidsContains, filterSystemProfileSapSystem, groups, limit, offset, ruleId, tags, options = {} } = params;
    const localVarPath = `/api/insights/v1/hostack/`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (filterSystemProfileSapSidsContains) {
        localVarQueryParameter['filter[system_profile][sap_sids][contains]'] = filterSystemProfileSapSidsContains;
    }

    if (filterSystemProfileSapSystem !== undefined) {
        localVarQueryParameter['filter[system_profile][sap_system]'] = filterSystemProfileSapSystem;
    }

    if (groups) {
        localVarQueryParameter['groups'] = groups;
    }

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }

    if (ruleId) {
        localVarQueryParameter['rule_id'] = ruleId;
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
        // authentication x-rh-identity required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };
}

export default hostackListParamCreator;
