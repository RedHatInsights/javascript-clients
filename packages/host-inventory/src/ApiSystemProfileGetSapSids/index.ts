// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { SystemProfileNestedObjectValue, SystemProfileSapSystemOut } from '../types';


export type ApiSystemProfileGetSapSidsParams = {
  /**
  * Used for searching tags and sap_sids that match the given search string. For searching tags, a tag\'s namespace, key, and/or value is used for matching.
  * @type { string }
  * @memberof ApiSystemProfileGetSapSidsApi
  */
  search?: string,
  /**
  * Filters systems by tag(s). Specify multiple tags as a comma-separated list (e.g. insights-client/security=strict,env/type=prod).
  * @type { Array<string> }
  * @memberof ApiSystemProfileGetSapSidsApi
  */
  tags?: Array<string>,
  /**
  * A number of items to return per page.
  * @type { number }
  * @memberof ApiSystemProfileGetSapSidsApi
  */
  perPage?: number,
  /**
  * A page number of the items to return.
  * @type { number }
  * @memberof ApiSystemProfileGetSapSidsApi
  */
  page?: number,
  /**
  * Culling states of the hosts. Default: fresh, stale and stale_warning
  * @type { Array<ApiSystemProfileGetSapSidsStalenessEnum> }
  * @memberof ApiSystemProfileGetSapSidsApi
  */
  staleness?: Array<ApiSystemProfileGetSapSidsStalenessEnum>,
  /**
  * Filters out any host not registered by the specified reporters
  * @type { Array<ApiSystemProfileGetSapSidsRegisteredWithEnum> }
  * @memberof ApiSystemProfileGetSapSidsApi
  */
  registeredWith?: Array<ApiSystemProfileGetSapSidsRegisteredWithEnum>,
  /**
  * Filters hosts based on system_profile fields. For example: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;{\"system_profile\": {\"workloads\": {\"sap\": {\"sap_system\": {\"eq\": \"true\"}}}}} <br /><br /> which equates to the URL param: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;\"?filter[system_profile][sap_system][eq]=true\" <br /><br /> To get \"edge\" hosts, use this explicit filter: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;{\"system_profile\": {\"host_type\": {\"eq\": \"edge\"}}} <br /><br /> which equates to the URL param: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;\"?filter[system_profile][host_type][eq]=edge\" <br /><br /> To get hosts with an specific operating system, use this explicit filter: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;{\"system_profile\": {\"operating_system\": {\"name\": {\"eq\": \"rhel\"}}}} <br /><br /> which equates to the URL param: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;\"?filter[system_profile][name][eq]=rhel\"
  * @type { { [key: string]: SystemProfileNestedObjectValue; } }
  * @memberof ApiSystemProfileGetSapSidsApi
  */
  filter?: { [key: string]: SystemProfileNestedObjectValue; },
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ApiSystemProfileGetSapSidsStalenessEnum = {
    Fresh: 'fresh',
    Stale: 'stale',
    StaleWarning: 'stale_warning',
    Unknown: 'unknown'
} as const;
export type ApiSystemProfileGetSapSidsStalenessEnum = typeof ApiSystemProfileGetSapSidsStalenessEnum[keyof typeof ApiSystemProfileGetSapSidsStalenessEnum];
/**
  * @export
  * @enum {string}
  */
export const ApiSystemProfileGetSapSidsRegisteredWithEnum = {
    Insights: 'insights',
    Yupana: 'yupana',
    Satellite: 'satellite',
    Discovery: 'discovery',
    Puptoo: 'puptoo',
    RhsmConduit: 'rhsm-conduit',
    CloudConnector: 'cloud-connector',
    NotYupana: '!yupana',
    NotSatellite: '!satellite',
    NotDiscovery: '!discovery',
    NotPuptoo: '!puptoo',
    NotRhsmConduit: '!rhsm-conduit',
    NotCloudConnector: '!cloud-connector'
} as const;
export type ApiSystemProfileGetSapSidsRegisteredWithEnum = typeof ApiSystemProfileGetSapSidsRegisteredWithEnum[keyof typeof ApiSystemProfileGetSapSidsRegisteredWithEnum];

export type ApiSystemProfileGetSapSidsReturnType = SystemProfileSapSystemOut;

const isApiSystemProfileGetSapSidsObjectParams = (params: [ApiSystemProfileGetSapSidsParams] | unknown[]): params is [ApiSystemProfileGetSapSidsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Required permissions: inventory:hosts:read
* @summary get all sap sids values and counts on the account
* @param {ApiSystemProfileGetSapSidsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiSystemProfileGetSapSidsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiSystemProfileGetSapSidsParams] | [string, Array<string>, number, number, Array<ApiSystemProfileGetSapSidsStalenessEnum>, Array<ApiSystemProfileGetSapSidsRegisteredWithEnum>, { [key: string]: SystemProfileNestedObjectValue; }, AxiosRequestConfig])) => {
    const params = isApiSystemProfileGetSapSidsObjectParams(config) ? config[0] : ['search', 'tags', 'perPage', 'page', 'staleness', 'registeredWith', 'filter', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiSystemProfileGetSapSidsParams;
    const { search, tags, perPage, page, staleness, registeredWith, filter, options = {} } = params;
    const localVarPath = `/system_profile/sap_sids`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (search !== undefined) {
        localVarQueryParameter['search'] = search;
    }

    if (tags) {
        localVarQueryParameter['tags'] = tags;
    }

    if (perPage !== undefined) {
        localVarQueryParameter['per_page'] = perPage;
    }

    if (page !== undefined) {
        localVarQueryParameter['page'] = page;
    }

    if (staleness) {
        localVarQueryParameter['staleness'] = staleness;
    }

    if (registeredWith) {
        localVarQueryParameter['registered_with'] = registeredWith;
    }

    if (filter !== undefined) {
        localVarQueryParameter['filter'] = filter;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        auth:[
        {
        // authentication ApiKeyAuth required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };

    return sendRequest<ApiSystemProfileGetSapSidsReturnType>(Promise.resolve(args));
}

export default apiSystemProfileGetSapSidsParamCreator;
