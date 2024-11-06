// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { SystemProfileNestedObjectValue } from '../types';


export type ApiHostDeleteHostsByFilterParams = {
  /**
  * Filter by display_name (case-insensitive)
  * @type { string }
  * @memberof ApiHostDeleteHostsByFilterApi
  */
  displayName?: string,
  /**
  * Filter by FQDN (case-insensitive)
  * @type { string }
  * @memberof ApiHostDeleteHostsByFilterApi
  */
  fqdn?: string,
  /**
  * Filter by display_name, fqdn, id (case-insensitive)
  * @type { string }
  * @memberof ApiHostDeleteHostsByFilterApi
  */
  hostnameOrId?: string,
  /**
  * Filter by insights_id
  * @type { string }
  * @memberof ApiHostDeleteHostsByFilterApi
  */
  insightsId?: string,
  /**
  * Filter by provider_id
  * @type { string }
  * @memberof ApiHostDeleteHostsByFilterApi
  */
  providerId?: string,
  /**
  * Filter by provider_type
  * @type { ApiHostDeleteHostsByFilterProviderTypeEnum }
  * @memberof ApiHostDeleteHostsByFilterApi
  */
  providerType?: ApiHostDeleteHostsByFilterProviderTypeEnum,
  /**
  * Only show hosts last modified after the given date
  * @type { string }
  * @memberof ApiHostDeleteHostsByFilterApi
  */
  updatedStart?: string,
  /**
  * Only show hosts last modified before the given date
  * @type { string }
  * @memberof ApiHostDeleteHostsByFilterApi
  */
  updatedEnd?: string,
  /**
  * Filter by group name
  * @type { Array<string> }
  * @memberof ApiHostDeleteHostsByFilterApi
  */
  groupName?: Array<string>,
  /**
  * Filters out any host not registered by the specified reporters
  * @type { Array<ApiHostDeleteHostsByFilterRegisteredWithEnum> }
  * @memberof ApiHostDeleteHostsByFilterApi
  */
  registeredWith?: Array<ApiHostDeleteHostsByFilterRegisteredWithEnum>,
  /**
  * Culling states of the hosts.
  * @type { Array<ApiHostDeleteHostsByFilterStalenessEnum> }
  * @memberof ApiHostDeleteHostsByFilterApi
  */
  staleness?: Array<ApiHostDeleteHostsByFilterStalenessEnum>,
  /**
  * filters out hosts not tagged by the given tags
  * @type { Array<string> }
  * @memberof ApiHostDeleteHostsByFilterApi
  */
  tags?: Array<string>,
  /**
  * Filters hosts based on system_profile fields. For example: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;{\"system_profile\": {\"sap_system\": {\"eq\": \"true\"}}} <br /><br /> which equates to the URL param: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;\"?filter[system_profile][sap_system][eq]=true\" <br /><br /> To get \"edge\" hosts, use this explicit filter: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;{\"system_profile\": {\"host_type\": {\"eq\": \"edge\"}}} <br /><br /> which equates to the URL param: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;\"?filter[system_profile][host_type][eq]=edge\"
  * @type { { [key: string]: SystemProfileNestedObjectValue; } }
  * @memberof ApiHostDeleteHostsByFilterApi
  */
  filter?: { [key: string]: SystemProfileNestedObjectValue; },
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ApiHostDeleteHostsByFilterProviderTypeEnum = {
    Alibaba: 'alibaba',
    Aws: 'aws',
    Azure: 'azure',
    Gcp: 'gcp',
    Ibm: 'ibm'
} as const;
export type ApiHostDeleteHostsByFilterProviderTypeEnum = typeof ApiHostDeleteHostsByFilterProviderTypeEnum[keyof typeof ApiHostDeleteHostsByFilterProviderTypeEnum];
/**
  * @export
  * @enum {string}
  */
export const ApiHostDeleteHostsByFilterRegisteredWithEnum = {
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
export type ApiHostDeleteHostsByFilterRegisteredWithEnum = typeof ApiHostDeleteHostsByFilterRegisteredWithEnum[keyof typeof ApiHostDeleteHostsByFilterRegisteredWithEnum];
/**
  * @export
  * @enum {string}
  */
export const ApiHostDeleteHostsByFilterStalenessEnum = {
    Fresh: 'fresh',
    Stale: 'stale',
    StaleWarning: 'stale_warning',
    Unknown: 'unknown'
} as const;
export type ApiHostDeleteHostsByFilterStalenessEnum = typeof ApiHostDeleteHostsByFilterStalenessEnum[keyof typeof ApiHostDeleteHostsByFilterStalenessEnum];

const isApiHostDeleteHostsByFilterObjectParams = (params: [ApiHostDeleteHostsByFilterParams] | unknown[]): params is [ApiHostDeleteHostsByFilterParams] => {
  return params.length === 1 && true && true && true && true && true && true && true && true && true && true && true && true && true
}
/**
* Delete the entire list of hosts filtered by the given parameters. <br /><br /> Required permissions: inventory:hosts:write
* @summary Delete the entire list of hosts filtered by the given parameters
* @param {ApiHostDeleteHostsByFilterParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiHostDeleteHostsByFilterParamCreator = async (...config: ([ApiHostDeleteHostsByFilterParams] | [string, string, string, string, string, ApiHostDeleteHostsByFilterProviderTypeEnum, string, string, Array<string>, Array<ApiHostDeleteHostsByFilterRegisteredWithEnum>, Array<ApiHostDeleteHostsByFilterStalenessEnum>, Array<string>, { [key: string]: SystemProfileNestedObjectValue; }, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isApiHostDeleteHostsByFilterObjectParams(config) ? config[0] : ['displayName', 'fqdn', 'hostnameOrId', 'insightsId', 'providerId', 'providerType', 'updatedStart', 'updatedEnd', 'groupName', 'registeredWith', 'staleness', 'tags', 'filter', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiHostDeleteHostsByFilterParams;
    const { displayName, fqdn, hostnameOrId, insightsId, providerId, providerType, updatedStart, updatedEnd, groupName, registeredWith, staleness, tags, filter, options = {} } = params;
    const localVarPath = `/hosts`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'DELETE' as Method, ...options};
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

    if (staleness) {
        localVarQueryParameter['staleness'] = staleness;
    }

    if (tags) {
        localVarQueryParameter['tags'] = tags;
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

export default apiHostDeleteHostsByFilterParamCreator;
