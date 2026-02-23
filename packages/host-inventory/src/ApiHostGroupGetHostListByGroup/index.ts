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


export type ApiHostGroupGetHostListByGroupParams = {
  /**
  * Group ID.
  * @type { string }
  * @memberof ApiHostGroupGetHostListByGroupApi
  */
  groupId: string,
  /**
  * Filter by display_name (case-insensitive)
  * @type { string }
  * @memberof ApiHostGroupGetHostListByGroupApi
  */
  displayName?: string,
  /**
  * Filter by FQDN (case-insensitive)
  * @type { string }
  * @memberof ApiHostGroupGetHostListByGroupApi
  */
  fqdn?: string,
  /**
  * Filter by display_name, fqdn, id (case-insensitive)
  * @type { string }
  * @memberof ApiHostGroupGetHostListByGroupApi
  */
  hostnameOrId?: string,
  /**
  * Filter by insights_id
  * @type { string }
  * @memberof ApiHostGroupGetHostListByGroupApi
  */
  insightsId?: string,
  /**
  * A number of items to return per page.
  * @type { number }
  * @memberof ApiHostGroupGetHostListByGroupApi
  */
  perPage?: number,
  /**
  * A page number of the items to return.
  * @type { number }
  * @memberof ApiHostGroupGetHostListByGroupApi
  */
  page?: number,
  /**
  * Ordering field name
  * @type { ApiHostGroupGetHostListByGroupOrderByEnum }
  * @memberof ApiHostGroupGetHostListByGroupApi
  */
  orderBy?: ApiHostGroupGetHostListByGroupOrderByEnum,
  /**
  * Direction of the ordering (case-insensitive); defaults to ASC for display_name, and to DESC for updated and operating_system
  * @type { string }
  * @memberof ApiHostGroupGetHostListByGroupApi
  */
  orderHow?: string,
  /**
  * Culling states of the hosts. Default: fresh, stale and stale_warning
  * @type { Array<ApiHostGroupGetHostListByGroupStalenessEnum> }
  * @memberof ApiHostGroupGetHostListByGroupApi
  */
  staleness?: Array<ApiHostGroupGetHostListByGroupStalenessEnum>,
  /**
  * Filters systems by tag(s). Specify multiple tags as a comma-separated list (e.g. insights-client/security=strict,env/type=prod).
  * @type { Array<string> }
  * @memberof ApiHostGroupGetHostListByGroupApi
  */
  tags?: Array<string>,
  /**
  * Filters out any host not registered by the specified reporters
  * @type { Array<ApiHostGroupGetHostListByGroupRegisteredWithEnum> }
  * @memberof ApiHostGroupGetHostListByGroupApi
  */
  registeredWith?: Array<ApiHostGroupGetHostListByGroupRegisteredWithEnum>,
  /**
  * Filters hosts based on system_profile fields. For example: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;{\"system_profile\": {\"workloads\": {\"sap\": {\"sap_system\": {\"eq\": \"true\"}}}}} <br /><br /> which equates to the URL param: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;\"?filter[system_profile][sap_system][eq]=true\" <br /><br /> To get \"edge\" hosts, use this explicit filter: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;{\"system_profile\": {\"host_type\": {\"eq\": \"edge\"}}} <br /><br /> which equates to the URL param: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;\"?filter[system_profile][host_type][eq]=edge\" <br /><br /> To get hosts with an specific operating system, use this explicit filter: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;{\"system_profile\": {\"operating_system\": {\"name\": {\"eq\": \"rhel\"}}}} <br /><br /> which equates to the URL param: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;\"?filter[system_profile][name][eq]=rhel\"
  * @type { { [key: string]: SystemProfileNestedObjectValue; } }
  * @memberof ApiHostGroupGetHostListByGroupApi
  */
  filter?: { [key: string]: SystemProfileNestedObjectValue; },
  /**
  * Fetches only mentioned system_profile fields. For example, <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;{\"system_profile\": [\"arch\", \"host_type\"]} <br /><br /> which equates to the URL param: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;\"?fields[system_profile]=arch,host_type\"
  * @type { { [key: string]: SystemProfileNestedObjectValue; } }
  * @memberof ApiHostGroupGetHostListByGroupApi
  */
  fields?: { [key: string]: SystemProfileNestedObjectValue; },
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ApiHostGroupGetHostListByGroupOrderByEnum = {
    DisplayName: 'display_name',
    GroupName: 'group_name',
    Updated: 'updated',
    OperatingSystem: 'operating_system',
    LastCheckIn: 'last_check_in'
} as const;
export type ApiHostGroupGetHostListByGroupOrderByEnum = typeof ApiHostGroupGetHostListByGroupOrderByEnum[keyof typeof ApiHostGroupGetHostListByGroupOrderByEnum];
/**
  * @export
  * @enum {string}
  */
export const ApiHostGroupGetHostListByGroupStalenessEnum = {
    Fresh: 'fresh',
    Stale: 'stale',
    StaleWarning: 'stale_warning',
    Unknown: 'unknown'
} as const;
export type ApiHostGroupGetHostListByGroupStalenessEnum = typeof ApiHostGroupGetHostListByGroupStalenessEnum[keyof typeof ApiHostGroupGetHostListByGroupStalenessEnum];
/**
  * @export
  * @enum {string}
  */
export const ApiHostGroupGetHostListByGroupRegisteredWithEnum = {
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
export type ApiHostGroupGetHostListByGroupRegisteredWithEnum = typeof ApiHostGroupGetHostListByGroupRegisteredWithEnum[keyof typeof ApiHostGroupGetHostListByGroupRegisteredWithEnum];

export type ApiHostGroupGetHostListByGroupReturnType = HostQueryOutput;

const isApiHostGroupGetHostListByGroupObjectParams = (params: [ApiHostGroupGetHostListByGroupParams] | unknown[]): params is [ApiHostGroupGetHostListByGroupParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'groupId')
  }
  return false
}
/**
* Read the list of all hosts in a specific group. <br /><br /> Required permissions: inventory:hosts:read
* @summary Read the list of hosts in a group
* @param {ApiHostGroupGetHostListByGroupParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiHostGroupGetHostListByGroupParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiHostGroupGetHostListByGroupParams] | [string, string, string, string, string, number, number, ApiHostGroupGetHostListByGroupOrderByEnum, string, Array<ApiHostGroupGetHostListByGroupStalenessEnum>, Array<string>, Array<ApiHostGroupGetHostListByGroupRegisteredWithEnum>, { [key: string]: SystemProfileNestedObjectValue; }, { [key: string]: SystemProfileNestedObjectValue; }, AxiosRequestConfig])) => {
    const params = isApiHostGroupGetHostListByGroupObjectParams(config) ? config[0] : ['groupId', 'displayName', 'fqdn', 'hostnameOrId', 'insightsId', 'perPage', 'page', 'orderBy', 'orderHow', 'staleness', 'tags', 'registeredWith', 'filter', 'fields', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiHostGroupGetHostListByGroupParams;
    const { groupId, displayName, fqdn, hostnameOrId, insightsId, perPage, page, orderBy, orderHow, staleness, tags, registeredWith, filter, fields, options = {} } = params;
    const localVarPath = `/groups/{group_id}/hosts`
        .replace(`{${"group_id"}}`, encodeURIComponent(String(groupId)));
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

    return sendRequest<ApiHostGroupGetHostListByGroupReturnType>(Promise.resolve(args));
}

export default apiHostGroupGetHostListByGroupParamCreator;
