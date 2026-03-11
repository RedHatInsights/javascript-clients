// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { HostQueryOutput, SystemProfileNestedObjectValue } from '../types';


export type ApiHostGetHostListParams = {
  /**
  * Filter by display_name (case-insensitive)
  * @type { string }
  * @memberof ApiHostGetHostListApi
  */
  displayName?: string,
  /**
  * Filter by FQDN (case-insensitive)
  * @type { string }
  * @memberof ApiHostGetHostListApi
  */
  fqdn?: string,
  /**
  * Filter by display_name, fqdn, id (case-insensitive)
  * @type { string }
  * @memberof ApiHostGetHostListApi
  */
  hostnameOrId?: string,
  /**
  * Filter by insights_id
  * @type { string }
  * @memberof ApiHostGetHostListApi
  */
  insightsId?: string,
  /**
  * Filter by subscription_manager_id
  * @type { string }
  * @memberof ApiHostGetHostListApi
  */
  subscriptionManagerId?: string,
  /**
  * Filter by provider_id
  * @type { string }
  * @memberof ApiHostGetHostListApi
  */
  providerId?: string,
  /**
  * Filter by provider_type
  * @type { ApiHostGetHostListProviderTypeEnum }
  * @memberof ApiHostGetHostListApi
  */
  providerType?: ApiHostGetHostListProviderTypeEnum,
  /**
  * Only show hosts last modified after the given date
  * @type { string }
  * @memberof ApiHostGetHostListApi
  */
  updatedStart?: string,
  /**
  * Only show hosts last modified before the given date
  * @type { string }
  * @memberof ApiHostGetHostListApi
  */
  updatedEnd?: string,
  /**
  * Only show hosts last checked in after the given date
  * @type { string }
  * @memberof ApiHostGetHostListApi
  */
  lastCheckInStart?: string,
  /**
  * Only show hosts last checked in before the given date
  * @type { string }
  * @memberof ApiHostGetHostListApi
  */
  lastCheckInEnd?: string,
  /**
  * Filter by group name
  * @type { Array<string> }
  * @memberof ApiHostGetHostListApi
  */
  groupName?: Array<string>,
  /**
  * Filter by group ID (UUID format)
  * @type { Array<string> }
  * @memberof ApiHostGetHostListApi
  */
  groupId?: Array<string>,
  /**
  * Filter by branch_id
  * @type { string }
  * @memberof ApiHostGetHostListApi
  */
  branchId?: string,
  /**
  * A number of items to return per page.
  * @type { number }
  * @memberof ApiHostGetHostListApi
  */
  perPage?: number,
  /**
  * A page number of the items to return.
  * @type { number }
  * @memberof ApiHostGetHostListApi
  */
  page?: number,
  /**
  * Ordering field name
  * @type { ApiHostGetHostListOrderByEnum }
  * @memberof ApiHostGetHostListApi
  */
  orderBy?: ApiHostGetHostListOrderByEnum,
  /**
  * Direction of the ordering (case-insensitive); defaults to ASC for display_name, and to DESC for updated and operating_system
  * @type { string }
  * @memberof ApiHostGetHostListApi
  */
  orderHow?: string,
  /**
  * Culling states of the hosts. Default: fresh, stale and stale_warning
  * @type { Array<ApiHostGetHostListStalenessEnum> }
  * @memberof ApiHostGetHostListApi
  */
  staleness?: Array<ApiHostGetHostListStalenessEnum>,
  /**
  * Filters systems by tag(s). Specify multiple tags as a comma-separated list (e.g. insights-client/security=strict,env/type=prod).
  * @type { Array<string> }
  * @memberof ApiHostGetHostListApi
  */
  tags?: Array<string>,
  /**
  * Filters out any host not registered by the specified reporters
  * @type { Array<ApiHostGetHostListRegisteredWithEnum> }
  * @memberof ApiHostGetHostListApi
  */
  registeredWith?: Array<ApiHostGetHostListRegisteredWithEnum>,
  /**
  * Filters systems by type
  * @type { Array<ApiHostGetHostListSystemTypeEnum> }
  * @memberof ApiHostGetHostListApi
  */
  systemType?: Array<ApiHostGetHostListSystemTypeEnum>,
  /**
  * Filters hosts based on system_profile fields. For example: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;{\"system_profile\": {\"workloads\": {\"sap\": {\"sap_system\": {\"eq\": \"true\"}}}}} <br /><br /> which equates to the URL param: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;\"?filter[system_profile][sap_system][eq]=true\" <br /><br /> To get \"edge\" hosts, use this explicit filter: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;{\"system_profile\": {\"host_type\": {\"eq\": \"edge\"}}} <br /><br /> which equates to the URL param: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;\"?filter[system_profile][host_type][eq]=edge\" <br /><br /> To get hosts with an specific operating system, use this explicit filter: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;{\"system_profile\": {\"operating_system\": {\"name\": {\"eq\": \"rhel\"}}}} <br /><br /> which equates to the URL param: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;\"?filter[system_profile][name][eq]=rhel\"
  * @type { { [key: string]: SystemProfileNestedObjectValue; } }
  * @memberof ApiHostGetHostListApi
  */
  filter?: { [key: string]: SystemProfileNestedObjectValue; },
  /**
  * Fetches only mentioned system_profile fields. For example, <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;{\"system_profile\": [\"arch\", \"host_type\"]} <br /><br /> which equates to the URL param: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;\"?fields[system_profile]=arch,host_type\"
  * @type { { [key: string]: SystemProfileNestedObjectValue; } }
  * @memberof ApiHostGetHostListApi
  */
  fields?: { [key: string]: SystemProfileNestedObjectValue; },
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ApiHostGetHostListProviderTypeEnum = {
    Alibaba: 'alibaba',
    Aws: 'aws',
    Azure: 'azure',
    Discovery: 'discovery',
    Gcp: 'gcp',
    Ibm: 'ibm'
} as const;
export type ApiHostGetHostListProviderTypeEnum = typeof ApiHostGetHostListProviderTypeEnum[keyof typeof ApiHostGetHostListProviderTypeEnum];
/**
  * @export
  * @enum {string}
  */
export const ApiHostGetHostListOrderByEnum = {
    DisplayName: 'display_name',
    GroupName: 'group_name',
    Updated: 'updated',
    OperatingSystem: 'operating_system',
    LastCheckIn: 'last_check_in'
} as const;
export type ApiHostGetHostListOrderByEnum = typeof ApiHostGetHostListOrderByEnum[keyof typeof ApiHostGetHostListOrderByEnum];
/**
  * @export
  * @enum {string}
  */
export const ApiHostGetHostListStalenessEnum = {
    Fresh: 'fresh',
    Stale: 'stale',
    StaleWarning: 'stale_warning',
    Unknown: 'unknown'
} as const;
export type ApiHostGetHostListStalenessEnum = typeof ApiHostGetHostListStalenessEnum[keyof typeof ApiHostGetHostListStalenessEnum];
/**
  * @export
  * @enum {string}
  */
export const ApiHostGetHostListRegisteredWithEnum = {
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
export type ApiHostGetHostListRegisteredWithEnum = typeof ApiHostGetHostListRegisteredWithEnum[keyof typeof ApiHostGetHostListRegisteredWithEnum];
/**
  * @export
  * @enum {string}
  */
export const ApiHostGetHostListSystemTypeEnum = {
    Conventional: 'conventional',
    Bootc: 'bootc',
    Edge: 'edge',
    Cluster: 'cluster'
} as const;
export type ApiHostGetHostListSystemTypeEnum = typeof ApiHostGetHostListSystemTypeEnum[keyof typeof ApiHostGetHostListSystemTypeEnum];

export type ApiHostGetHostListReturnType = HostQueryOutput;

const isApiHostGetHostListObjectParams = (params: [ApiHostGetHostListParams] | unknown[]): params is [ApiHostGetHostListParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Read the entire list of all hosts available to the account. <br /><br /> Required permissions: inventory:hosts:read
* @summary Read the entire list of hosts
* @param {ApiHostGetHostListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiHostGetHostListParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiHostGetHostListParams] | [string, string, string, string, string, string, ApiHostGetHostListProviderTypeEnum, string, string, string, string, Array<string>, Array<string>, string, number, number, ApiHostGetHostListOrderByEnum, string, Array<ApiHostGetHostListStalenessEnum>, Array<string>, Array<ApiHostGetHostListRegisteredWithEnum>, Array<ApiHostGetHostListSystemTypeEnum>, { [key: string]: SystemProfileNestedObjectValue; }, { [key: string]: SystemProfileNestedObjectValue; }, AxiosRequestConfig])) => {
    const params = isApiHostGetHostListObjectParams(config) ? config[0] : ['displayName', 'fqdn', 'hostnameOrId', 'insightsId', 'subscriptionManagerId', 'providerId', 'providerType', 'updatedStart', 'updatedEnd', 'lastCheckInStart', 'lastCheckInEnd', 'groupName', 'groupId', 'branchId', 'perPage', 'page', 'orderBy', 'orderHow', 'staleness', 'tags', 'registeredWith', 'systemType', 'filter', 'fields', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiHostGetHostListParams;
    const { displayName, fqdn, hostnameOrId, insightsId, subscriptionManagerId, providerId, providerType, updatedStart, updatedEnd, lastCheckInStart, lastCheckInEnd, groupName, groupId, branchId, perPage, page, orderBy, orderHow, staleness, tags, registeredWith, systemType, filter, fields, options = {} } = params;
    const localVarPath = `/hosts`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (displayName !== undefined) {
        localVarQueryParameter['display_name'] = displayName;
    }

    if (fqdn !== undefined) {
        localVarQueryParameter['fqdn'] = fqdn;
    }

    if (hostnameOrId !== undefined) {
        localVarQueryParameter['hostname_or_id'] = hostnameOrId;
    }

    if (insightsId !== undefined) {
        localVarQueryParameter['insights_id'] = insightsId;
    }

    if (subscriptionManagerId !== undefined) {
        localVarQueryParameter['subscription_manager_id'] = subscriptionManagerId;
    }

    if (providerId !== undefined) {
        localVarQueryParameter['provider_id'] = providerId;
    }

    if (providerType !== undefined) {
        localVarQueryParameter['provider_type'] = providerType;
    }

    if (updatedStart !== undefined) {
        localVarQueryParameter['updated_start'] = (updatedStart as any instanceof Date) ?
            (updatedStart as any).toISOString() :
            updatedStart;
    }

    if (updatedEnd !== undefined) {
        localVarQueryParameter['updated_end'] = (updatedEnd as any instanceof Date) ?
            (updatedEnd as any).toISOString() :
            updatedEnd;
    }

    if (lastCheckInStart !== undefined) {
        localVarQueryParameter['last_check_in_start'] = (lastCheckInStart as any instanceof Date) ?
            (lastCheckInStart as any).toISOString() :
            lastCheckInStart;
    }

    if (lastCheckInEnd !== undefined) {
        localVarQueryParameter['last_check_in_end'] = (lastCheckInEnd as any instanceof Date) ?
            (lastCheckInEnd as any).toISOString() :
            lastCheckInEnd;
    }

    if (groupName) {
        localVarQueryParameter['group_name'] = groupName;
    }

    if (groupId) {
        localVarQueryParameter['group_id'] = groupId;
    }

    if (branchId !== undefined) {
        localVarQueryParameter['branch_id'] = branchId;
    }

    if (perPage !== undefined) {
        localVarQueryParameter['per_page'] = perPage;
    }

    if (page !== undefined) {
        localVarQueryParameter['page'] = page;
    }

    if (orderBy !== undefined) {
        localVarQueryParameter['order_by'] = orderBy;
    }

    if (orderHow !== undefined) {
        localVarQueryParameter['order_how'] = orderHow;
    }

    if (staleness) {
        localVarQueryParameter['staleness'] = staleness;
    }

    if (tags) {
        localVarQueryParameter['tags'] = tags;
    }

    if (registeredWith) {
        localVarQueryParameter['registered_with'] = registeredWith;
    }

    if (systemType) {
        localVarQueryParameter['system_type'] = systemType;
    }

    if (filter !== undefined) {
        localVarQueryParameter['filter'] = filter;
    }

    if (fields !== undefined) {
        localVarQueryParameter['fields'] = fields;
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

    return sendRequest<ApiHostGetHostListReturnType>(Promise.resolve(args));
}

export default apiHostGetHostListParamCreator;
