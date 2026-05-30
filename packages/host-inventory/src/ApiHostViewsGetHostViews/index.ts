// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { HostViewCombinedFields, HostViewCombinedFilterValue, HostViewQueryOutput } from '../types';


export type ApiHostViewsGetHostViewsParams = {
  /**
  * Filter by display_name (case-insensitive)
  * @type { string }
  * @memberof ApiHostViewsGetHostViewsApi
  */
  displayName?: string,
  /**
  * Filter by FQDN (case-insensitive)
  * @type { string }
  * @memberof ApiHostViewsGetHostViewsApi
  */
  fqdn?: string,
  /**
  * Filter by display_name, fqdn, id (case-insensitive)
  * @type { string }
  * @memberof ApiHostViewsGetHostViewsApi
  */
  hostnameOrId?: string,
  /**
  * Filter by insights_id
  * @type { string }
  * @memberof ApiHostViewsGetHostViewsApi
  */
  insightsId?: string,
  /**
  * Filter by subscription_manager_id
  * @type { string }
  * @memberof ApiHostViewsGetHostViewsApi
  */
  subscriptionManagerId?: string,
  /**
  * Filter by provider_id
  * @type { string }
  * @memberof ApiHostViewsGetHostViewsApi
  */
  providerId?: string,
  /**
  * Filter by provider_type
  * @type { ApiHostViewsGetHostViewsProviderTypeEnum }
  * @memberof ApiHostViewsGetHostViewsApi
  */
  providerType?: ApiHostViewsGetHostViewsProviderTypeEnum,
  /**
  * Only show hosts last modified after the given date
  * @type { string }
  * @memberof ApiHostViewsGetHostViewsApi
  */
  updatedStart?: string,
  /**
  * Only show hosts last modified before the given date
  * @type { string }
  * @memberof ApiHostViewsGetHostViewsApi
  */
  updatedEnd?: string,
  /**
  * Only show hosts last checked in after the given date
  * @type { string }
  * @memberof ApiHostViewsGetHostViewsApi
  */
  lastCheckInStart?: string,
  /**
  * Only show hosts last checked in before the given date
  * @type { string }
  * @memberof ApiHostViewsGetHostViewsApi
  */
  lastCheckInEnd?: string,
  /**
  * Filter by workspace name
  * @type { Array<string> }
  * @memberof ApiHostViewsGetHostViewsApi
  */
  workspaceName?: Array<string>,
  /**
  * Filter by workspace ID (UUID format)
  * @type { Array<string> }
  * @memberof ApiHostViewsGetHostViewsApi
  */
  workspaceId?: Array<string>,
  /**
  * Filter by branch_id
  * @type { string }
  * @memberof ApiHostViewsGetHostViewsApi
  */
  branchId?: string,
  /**
  * A number of items to return per page.
  * @type { number }
  * @memberof ApiHostViewsGetHostViewsApi
  */
  perPage?: number,
  /**
  * A page number of the items to return.
  * @type { number }
  * @memberof ApiHostViewsGetHostViewsApi
  */
  page?: number,
  /**
  * Ordering field for host views. Accepts standard host columns or application metrics using `app:field` format. Use together with `order_how`. **Host fields:** `display_name`, `group_name`, `updated`, `operating_system`, `last_check_in` **App fields:** See `AppSortableFields` schema for the full list of available application sort fields (e.g. `vulnerability:critical_cves`, `advisor:recommendations`).
  * @type { ApiHostViewsGetHostViewsOrderByEnum }
  * @memberof ApiHostViewsGetHostViewsApi
  */
  orderBy?: ApiHostViewsGetHostViewsOrderByEnum,
  /**
  * Direction of the ordering (case-insensitive); defaults to ASC for display_name, and to DESC for updated and operating_system
  * @type { string }
  * @memberof ApiHostViewsGetHostViewsApi
  */
  orderHow?: string,
  /**
  * Culling states of the hosts. Default: fresh, stale and stale_warning
  * @type { Array<ApiHostViewsGetHostViewsStalenessEnum> }
  * @memberof ApiHostViewsGetHostViewsApi
  */
  staleness?: Array<ApiHostViewsGetHostViewsStalenessEnum>,
  /**
  * Filters systems by tag(s). Specify multiple tags as a comma-separated list (e.g. insights-client/security=strict,env/type=prod).
  * @type { Array<string> }
  * @memberof ApiHostViewsGetHostViewsApi
  */
  tags?: Array<string>,
  /**
  * Filters out any host not registered by the specified reporters
  * @type { Array<ApiHostViewsGetHostViewsRegisteredWithEnum> }
  * @memberof ApiHostViewsGetHostViewsApi
  */
  registeredWith?: Array<ApiHostViewsGetHostViewsRegisteredWithEnum>,
  /**
  * Filters systems by type
  * @type { Array<ApiHostViewsGetHostViewsSystemTypeEnum> }
  * @memberof ApiHostViewsGetHostViewsApi
  */
  systemType?: Array<ApiHostViewsGetHostViewsSystemTypeEnum>,
  /**
  * Filters hosts based on system_profile fields and/or application data metrics. Both filter types can be combined in a single request. <br /><br /> **System profile filters** use the syntax `filter[system_profile][field][operator]=value`. For example: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;\"?filter[system_profile][host_type][eq]=edge\" <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;\"?filter[system_profile][operating_system][name][eq]=rhel\" <br /><br /> **Application data filters** use the syntax `filter[app_name][field_name][operator]=value`. For example: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;\"?filter[vulnerability][critical_cves][gte]=1\" <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;\"?filter[patch][template_name][eq]=production\" <br /><br /> **Combined** example: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;\"?filter[system_profile][host_type][eq]=edge&filter[vulnerability][critical_cves][gte]=1\"
  * @type { { [key: string]: HostViewCombinedFilterValue; } }
  * @memberof ApiHostViewsGetHostViewsApi
  */
  filter?: { [key: string]: HostViewCombinedFilterValue; },
  /**
  * Selects which system_profile fields and/or application data fields to include in the response. Both can be requested in a single call. <br /><br /> **System profile fields:** `fields[system_profile]=arch,host_type` returns only the requested system_profile fields on each host. When not specified, no system_profile data is returned (default behavior). <br /><br /> **Application data fields:** `fields[advisor]=recommendations` returns only the requested fields for that application. When not specified, all fields from all applications are returned by default. <br /><br /> **Application shorthand:** `fields[app_data]=true` explicitly requests all application data for all apps. <br /><br /> **Combined** example: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;\"?fields[system_profile]=arch,os_release&fields[advisor]=recommendations\"
  * @type { HostViewCombinedFields }
  * @memberof ApiHostViewsGetHostViewsApi
  */
  fields?: HostViewCombinedFields,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ApiHostViewsGetHostViewsProviderTypeEnum = {
    Alibaba: 'alibaba',
    Aws: 'aws',
    Azure: 'azure',
    Discovery: 'discovery',
    Gcp: 'gcp',
    Ibm: 'ibm'
} as const;
export type ApiHostViewsGetHostViewsProviderTypeEnum = typeof ApiHostViewsGetHostViewsProviderTypeEnum[keyof typeof ApiHostViewsGetHostViewsProviderTypeEnum];
/**
  * @export
  * @enum {string}
  */
export const ApiHostViewsGetHostViewsOrderByEnum = {
    DisplayName: 'display_name',
    GroupName: 'group_name',
    Updated: 'updated',
    OperatingSystem: 'operating_system',
    LastCheckIn: 'last_check_in',
    Advisorrecommendations: 'advisor:recommendations',
    Advisorincidents: 'advisor:incidents',
    Advisorcritical: 'advisor:critical',
    Advisorimportant: 'advisor:important',
    Advisormoderate: 'advisor:moderate',
    Advisorlow: 'advisor:low',
    VulnerabilitytotalCves: 'vulnerability:total_cves',
    VulnerabilitycriticalCves: 'vulnerability:critical_cves',
    VulnerabilityhighSeverityCves: 'vulnerability:high_severity_cves',
    VulnerabilitycvesWithSecurityRules: 'vulnerability:cves_with_security_rules',
    VulnerabilitycvesWithKnownExploits: 'vulnerability:cves_with_known_exploits',
    PatchadvisoriesRhsaInstallable: 'patch:advisories_rhsa_installable',
    PatchadvisoriesRhbaInstallable: 'patch:advisories_rhba_installable',
    PatchadvisoriesRheaInstallable: 'patch:advisories_rhea_installable',
    PatchadvisoriesOtherInstallable: 'patch:advisories_other_installable',
    PatchadvisoriesRhsaApplicable: 'patch:advisories_rhsa_applicable',
    PatchadvisoriesRhbaApplicable: 'patch:advisories_rhba_applicable',
    PatchadvisoriesRheaApplicable: 'patch:advisories_rhea_applicable',
    PatchadvisoriesOtherApplicable: 'patch:advisories_other_applicable',
    PatchpackagesInstallable: 'patch:packages_installable',
    PatchpackagesApplicable: 'patch:packages_applicable',
    PatchpackagesInstalled: 'patch:packages_installed',
    PatchtemplateName: 'patch:template_name',
    RemediationsremediationsPlans: 'remediations:remediations_plans',
    CompliancelastScan: 'compliance:last_scan',
    CompliancepoliciesCount: 'compliance:policies_count',
    MalwarelastMatches: 'malware:last_matches',
    MalwaretotalMatches: 'malware:total_matches',
    MalwarelastScan: 'malware:last_scan',
    MalwarelastStatus: 'malware:last_status'
} as const;
export type ApiHostViewsGetHostViewsOrderByEnum = typeof ApiHostViewsGetHostViewsOrderByEnum[keyof typeof ApiHostViewsGetHostViewsOrderByEnum];
/**
  * @export
  * @enum {string}
  */
export const ApiHostViewsGetHostViewsStalenessEnum = {
    Fresh: 'fresh',
    Stale: 'stale',
    StaleWarning: 'stale_warning',
    Unknown: 'unknown'
} as const;
export type ApiHostViewsGetHostViewsStalenessEnum = typeof ApiHostViewsGetHostViewsStalenessEnum[keyof typeof ApiHostViewsGetHostViewsStalenessEnum];
/**
  * @export
  * @enum {string}
  */
export const ApiHostViewsGetHostViewsRegisteredWithEnum = {
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
export type ApiHostViewsGetHostViewsRegisteredWithEnum = typeof ApiHostViewsGetHostViewsRegisteredWithEnum[keyof typeof ApiHostViewsGetHostViewsRegisteredWithEnum];
/**
  * @export
  * @enum {string}
  */
export const ApiHostViewsGetHostViewsSystemTypeEnum = {
    Conventional: 'conventional',
    Bootc: 'bootc',
    Edge: 'edge',
    Cluster: 'cluster'
} as const;
export type ApiHostViewsGetHostViewsSystemTypeEnum = typeof ApiHostViewsGetHostViewsSystemTypeEnum[keyof typeof ApiHostViewsGetHostViewsSystemTypeEnum];

export type ApiHostViewsGetHostViewsReturnType = HostViewQueryOutput;

const isApiHostViewsGetHostViewsObjectParams = (params: [ApiHostViewsGetHostViewsParams] | unknown[]): params is [ApiHostViewsGetHostViewsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Read a combined view of hosts with optional application data such as Advisor, Vulnerability, Compliance, Patch, and others. Application joins are opt-in and controlled through the fields parameter.<br /><br /> Required permissions: inventory:hosts:read
* @summary Read aggregated host and application data
* @param {ApiHostViewsGetHostViewsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiHostViewsGetHostViewsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiHostViewsGetHostViewsParams] | [string, string, string, string, string, string, ApiHostViewsGetHostViewsProviderTypeEnum, string, string, string, string, Array<string>, Array<string>, string, number, number, ApiHostViewsGetHostViewsOrderByEnum, string, Array<ApiHostViewsGetHostViewsStalenessEnum>, Array<string>, Array<ApiHostViewsGetHostViewsRegisteredWithEnum>, Array<ApiHostViewsGetHostViewsSystemTypeEnum>, { [key: string]: HostViewCombinedFilterValue; }, HostViewCombinedFields, AxiosRequestConfig])) => {
    const params = isApiHostViewsGetHostViewsObjectParams(config) ? config[0] : ['displayName', 'fqdn', 'hostnameOrId', 'insightsId', 'subscriptionManagerId', 'providerId', 'providerType', 'updatedStart', 'updatedEnd', 'lastCheckInStart', 'lastCheckInEnd', 'workspaceName', 'workspaceId', 'branchId', 'perPage', 'page', 'orderBy', 'orderHow', 'staleness', 'tags', 'registeredWith', 'systemType', 'filter', 'fields', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiHostViewsGetHostViewsParams;
    const { displayName, fqdn, hostnameOrId, insightsId, subscriptionManagerId, providerId, providerType, updatedStart, updatedEnd, lastCheckInStart, lastCheckInEnd, workspaceName, workspaceId, branchId, perPage, page, orderBy, orderHow, staleness, tags, registeredWith, systemType, filter, fields, options = {} } = params;
    const localVarPath = `/beta/hosts-view`;
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

    if (workspaceName) {
        localVarQueryParameter['workspace_name'] = workspaceName;
    }

    if (workspaceId) {
        localVarQueryParameter['workspace_id'] = workspaceId;
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

    return sendRequest<ApiHostViewsGetHostViewsReturnType>(Promise.resolve(args));
}

export default apiHostViewsGetHostViewsParamCreator;
