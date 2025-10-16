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


export type ApiSystemProfileGetSapSystemParams = {
  /**
  * Filters systems by tag(s). Specify multiple tags as a comma-separated list (e.g. insights-client/security=strict,env/type=prod).
  * @type { Array<string> }
  * @memberof ApiSystemProfileGetSapSystemApi
  */
  tags?: Array<string>,
  /**
  * A number of items to return per page.
  * @type { number }
  * @memberof ApiSystemProfileGetSapSystemApi
  */
  perPage?: number,
  /**
  * A page number of the items to return.
  * @type { number }
  * @memberof ApiSystemProfileGetSapSystemApi
  */
  page?: number,
  /**
  * Culling states of the hosts. Default: fresh, stale and stale_warning
  * @type { Array<ApiSystemProfileGetSapSystemStalenessEnum> }
  * @memberof ApiSystemProfileGetSapSystemApi
  */
  staleness?: Array<ApiSystemProfileGetSapSystemStalenessEnum>,
  /**
  * Filters out any host not registered by the specified reporters
  * @type { Array<ApiSystemProfileGetSapSystemRegisteredWithEnum> }
  * @memberof ApiSystemProfileGetSapSystemApi
  */
  registeredWith?: Array<ApiSystemProfileGetSapSystemRegisteredWithEnum>,
  /**
  * Filters hosts based on system_profile fields. For example: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;{\"system_profile\": {\"workloads\": {\"sap\": {\"sap_system\": {\"eq\": \"true\"}}}}} <br /><br /> which equates to the URL param: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;\"?filter[system_profile][sap_system][eq]=true\" <br /><br /> To get \"edge\" hosts, use this explicit filter: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;{\"system_profile\": {\"host_type\": {\"eq\": \"edge\"}}} <br /><br /> which equates to the URL param: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;\"?filter[system_profile][host_type][eq]=edge\" <br /><br /> To get hosts with an specific operating system, use this explicit filter: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;{\"system_profile\": {\"operating_system\": {\"name\": {\"eq\": \"rhel\"}}}} <br /><br /> which equates to the URL param: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;\"?filter[system_profile][name][eq]=rhel\"
  * @type { { [key: string]: SystemProfileNestedObjectValue; } }
  * @memberof ApiSystemProfileGetSapSystemApi
  */
  filter?: { [key: string]: SystemProfileNestedObjectValue; },
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ApiSystemProfileGetSapSystemStalenessEnum = {
    Fresh: 'fresh',
    Stale: 'stale',
    StaleWarning: 'stale_warning',
    Unknown: 'unknown'
} as const;
export type ApiSystemProfileGetSapSystemStalenessEnum = typeof ApiSystemProfileGetSapSystemStalenessEnum[keyof typeof ApiSystemProfileGetSapSystemStalenessEnum];
/**
  * @export
  * @enum {string}
  */
export const ApiSystemProfileGetSapSystemRegisteredWithEnum = {
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
export type ApiSystemProfileGetSapSystemRegisteredWithEnum = typeof ApiSystemProfileGetSapSystemRegisteredWithEnum[keyof typeof ApiSystemProfileGetSapSystemRegisteredWithEnum];

export type ApiSystemProfileGetSapSystemReturnType = SystemProfileSapSystemOut;

const isApiSystemProfileGetSapSystemObjectParams = (params: [ApiSystemProfileGetSapSystemParams] | unknown[]): params is [ApiSystemProfileGetSapSystemParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Required permissions: inventory:hosts:read
* @summary get all sap system values and counts on the account
* @param {ApiSystemProfileGetSapSystemParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiSystemProfileGetSapSystemParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiSystemProfileGetSapSystemParams] | [Array<string>, number, number, Array<ApiSystemProfileGetSapSystemStalenessEnum>, Array<ApiSystemProfileGetSapSystemRegisteredWithEnum>, { [key: string]: SystemProfileNestedObjectValue; }, AxiosRequestConfig])) => {
    const params = isApiSystemProfileGetSapSystemObjectParams(config) ? config[0] : ['tags', 'perPage', 'page', 'staleness', 'registeredWith', 'filter', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiSystemProfileGetSapSystemParams;
    const { tags, perPage, page, staleness, registeredWith, filter, options = {} } = params;
    const localVarPath = `/system_profile/sap_system`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

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

    return sendRequest<ApiSystemProfileGetSapSystemReturnType>(Promise.resolve(args));
}

export default apiSystemProfileGetSapSystemParamCreator;
