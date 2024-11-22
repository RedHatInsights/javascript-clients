// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ActiveTags, SystemProfileNestedObjectValue } from '../types';


export type ApiTagGetTagsParams = {
  /**
  * filters out hosts not tagged by the given tags
  * @type { Array<string> }
  * @memberof ApiTagGetTagsApi
  */
  tags?: Array<string>,
  /**
  * Ordering field name
  * @type { ApiTagGetTagsOrderByEnum }
  * @memberof ApiTagGetTagsApi
  */
  orderBy?: ApiTagGetTagsOrderByEnum,
  /**
  * Direction of the ordering. Default to ASC
  * @type { ApiTagGetTagsOrderHowEnum }
  * @memberof ApiTagGetTagsApi
  */
  orderHow?: ApiTagGetTagsOrderHowEnum,
  /**
  * A number of items to return per page.
  * @type { number }
  * @memberof ApiTagGetTagsApi
  */
  perPage?: number,
  /**
  * A page number of the items to return.
  * @type { number }
  * @memberof ApiTagGetTagsApi
  */
  page?: number,
  /**
  * Culling states of the hosts. Default: fresh, stale and stale_warning
  * @type { Array<ApiTagGetTagsStalenessEnum> }
  * @memberof ApiTagGetTagsApi
  */
  staleness?: Array<ApiTagGetTagsStalenessEnum>,
  /**
  * Used for searching tags and sap_sids that match the given search string. For searching tags, a tag\'s namespace, key, and/or value is used for matching.
  * @type { string }
  * @memberof ApiTagGetTagsApi
  */
  search?: string,
  /**
  * Filter by display_name (case-insensitive)
  * @type { string }
  * @memberof ApiTagGetTagsApi
  */
  displayName?: string,
  /**
  * Filter by FQDN (case-insensitive)
  * @type { string }
  * @memberof ApiTagGetTagsApi
  */
  fqdn?: string,
  /**
  * Filter by display_name, fqdn, id (case-insensitive)
  * @type { string }
  * @memberof ApiTagGetTagsApi
  */
  hostnameOrId?: string,
  /**
  * Filter by insights_id
  * @type { string }
  * @memberof ApiTagGetTagsApi
  */
  insightsId?: string,
  /**
  * Filter by provider_id
  * @type { string }
  * @memberof ApiTagGetTagsApi
  */
  providerId?: string,
  /**
  * Filter by provider_type
  * @type { ApiTagGetTagsProviderTypeEnum }
  * @memberof ApiTagGetTagsApi
  */
  providerType?: ApiTagGetTagsProviderTypeEnum,
  /**
  * Only show hosts last modified after the given date
  * @type { string }
  * @memberof ApiTagGetTagsApi
  */
  updatedStart?: string,
  /**
  * Only show hosts last modified before the given date
  * @type { string }
  * @memberof ApiTagGetTagsApi
  */
  updatedEnd?: string,
  /**
  * Filter by group name
  * @type { Array<string> }
  * @memberof ApiTagGetTagsApi
  */
  groupName?: Array<string>,
  /**
  * Filters out any host not registered by the specified reporters
  * @type { Array<ApiTagGetTagsRegisteredWithEnum> }
  * @memberof ApiTagGetTagsApi
  */
  registeredWith?: Array<ApiTagGetTagsRegisteredWithEnum>,
  /**
  * Filters hosts based on system_profile fields. For example: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;{\"system_profile\": {\"sap_system\": {\"eq\": \"true\"}}} <br /><br /> which equates to the URL param: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;\"?filter[system_profile][sap_system][eq]=true\" <br /><br /> To get \"edge\" hosts, use this explicit filter: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;{\"system_profile\": {\"host_type\": {\"eq\": \"edge\"}}} <br /><br /> which equates to the URL param: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;\"?filter[system_profile][host_type][eq]=edge\"
  * @type { { [key: string]: SystemProfileNestedObjectValue; } }
  * @memberof ApiTagGetTagsApi
  */
  filter?: { [key: string]: SystemProfileNestedObjectValue; },
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ApiTagGetTagsOrderByEnum = {
    Tag: 'tag',
    Count: 'count'
} as const;
export type ApiTagGetTagsOrderByEnum = typeof ApiTagGetTagsOrderByEnum[keyof typeof ApiTagGetTagsOrderByEnum];
/**
  * @export
  * @enum {string}
  */
export const ApiTagGetTagsOrderHowEnum = {
    Asc: 'ASC',
    Desc: 'DESC'
} as const;
export type ApiTagGetTagsOrderHowEnum = typeof ApiTagGetTagsOrderHowEnum[keyof typeof ApiTagGetTagsOrderHowEnum];
/**
  * @export
  * @enum {string}
  */
export const ApiTagGetTagsStalenessEnum = {
    Fresh: 'fresh',
    Stale: 'stale',
    StaleWarning: 'stale_warning',
    Unknown: 'unknown'
} as const;
export type ApiTagGetTagsStalenessEnum = typeof ApiTagGetTagsStalenessEnum[keyof typeof ApiTagGetTagsStalenessEnum];
/**
  * @export
  * @enum {string}
  */
export const ApiTagGetTagsProviderTypeEnum = {
    Alibaba: 'alibaba',
    Aws: 'aws',
    Azure: 'azure',
    Gcp: 'gcp',
    Ibm: 'ibm'
} as const;
export type ApiTagGetTagsProviderTypeEnum = typeof ApiTagGetTagsProviderTypeEnum[keyof typeof ApiTagGetTagsProviderTypeEnum];
/**
  * @export
  * @enum {string}
  */
export const ApiTagGetTagsRegisteredWithEnum = {
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
export type ApiTagGetTagsRegisteredWithEnum = typeof ApiTagGetTagsRegisteredWithEnum[keyof typeof ApiTagGetTagsRegisteredWithEnum];

export type ApiTagGetTagsReturnType = AxiosPromise<ActiveTags>;

const isApiTagGetTagsObjectParams = (params: [ApiTagGetTagsParams] | unknown[]): params is [ApiTagGetTagsParams] => {
  return params.length === 1 && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true
}
/**
* Required permissions: inventory:hosts:read
* @summary Get the active host tags for a given account
* @param {ApiTagGetTagsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiTagGetTagsParamCreator = async (...config: ([ApiTagGetTagsParams] | [Array<string>, ApiTagGetTagsOrderByEnum, ApiTagGetTagsOrderHowEnum, number, number, Array<ApiTagGetTagsStalenessEnum>, string, string, string, string, string, string, ApiTagGetTagsProviderTypeEnum, string, string, Array<string>, Array<ApiTagGetTagsRegisteredWithEnum>, { [key: string]: SystemProfileNestedObjectValue; }, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isApiTagGetTagsObjectParams(config) ? config[0] : ['tags', 'orderBy', 'orderHow', 'perPage', 'page', 'staleness', 'search', 'displayName', 'fqdn', 'hostnameOrId', 'insightsId', 'providerId', 'providerType', 'updatedStart', 'updatedEnd', 'groupName', 'registeredWith', 'filter', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiTagGetTagsParams;
    const { tags, orderBy, orderHow, perPage, page, staleness, search, displayName, fqdn, hostnameOrId, insightsId, providerId, providerType, updatedStart, updatedEnd, groupName, registeredWith, filter, options = {} } = params;
    const localVarPath = `/tags`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (tags) {
        localVarQueryParameter['tags'] = tags;
    }

    if (orderBy !== undefined) {
        localVarQueryParameter['order_by'] = orderBy;
    }

    if (orderHow !== undefined) {
        localVarQueryParameter['order_how'] = orderHow;
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

    if (search !== undefined) {
        localVarQueryParameter['search'] = search;
    }

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

    if (groupName) {
        localVarQueryParameter['group_name'] = groupName;
    }

    if (registeredWith) {
        localVarQueryParameter['registered_with'] = registeredWith;
    }

    if (filter !== undefined) {
        localVarQueryParameter['filter'] = filter;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
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
}

export default apiTagGetTagsParamCreator;
