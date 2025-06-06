/**
 * Information about a host tag
 * @export
 * @interface ActiveTag
 */
export interface ActiveTag {
    /**
     *
     * @type {StructuredTag}
     * @memberof ActiveTag
     */
    'tag': StructuredTag;
    /**
     * The number of hosts with the given tag. If the value is null this indicates that the count is unknown.
     * @type {number}
     * @memberof ActiveTag
     */
    'count': number | null;
}
/**
 *
 * @export
 * @interface ActiveTags
 */
export interface ActiveTags {
    /**
     * The number of items on the current page
     * @type {number}
     * @memberof ActiveTags
     */
    'count': number;
    /**
     * The page number
     * @type {number}
     * @memberof ActiveTags
     */
    'page': number;
    /**
     * The number of items to return per page
     * @type {number}
     * @memberof ActiveTags
     */
    'per_page': number;
    /**
     * Total number of items
     * @type {number}
     * @memberof ActiveTags
     */
    'total': number;
    /**
     *
     * @type {Array<ActiveTag>}
     * @memberof ActiveTags
     */
    'results': Array<ActiveTag>;
}
/**
 *
 * @export
 * @interface CanonicalFactsIn
 */
export interface CanonicalFactsIn {
    /**
     *
     * @type {string}
     * @memberof CanonicalFactsIn
     */
    'insights_id'?: string;
    /**
     *
     * @type {string}
     * @memberof CanonicalFactsIn
     */
    'subscription_manager_id'?: string;
    /**
     *
     * @type {string}
     * @memberof CanonicalFactsIn
     */
    'satellite_id'?: string;
    /**
     *
     * @type {string}
     * @memberof CanonicalFactsIn
     */
    'bios_uuid'?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof CanonicalFactsIn
     */
    'ip_addresses'?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof CanonicalFactsIn
     */
    'fqdn'?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof CanonicalFactsIn
     */
    'mac_addresses'?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof CanonicalFactsIn
     */
    'provider_id'?: string;
    /**
     *
     * @type {string}
     * @memberof CanonicalFactsIn
     */
    'provider_type'?: string;
}
/**
 *
 * @export
 * @interface CanonicalFactsOut
 */
export interface CanonicalFactsOut {
    /**
     * An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.
     * @type {string}
     * @memberof CanonicalFactsOut
     */
    'insights_id'?: string | null;
    /**
     * A Red Hat Subcription Manager ID of a RHEL host.  This field is considered to be a canonical fact.
     * @type {string}
     * @memberof CanonicalFactsOut
     */
    'subscription_manager_id'?: string | null;
    /**
     * A Red Hat Satellite ID of a RHEL host.  This field is considered to be a canonical fact.
     * @type {string}
     * @memberof CanonicalFactsOut
     */
    'satellite_id'?: string | null;
    /**
     * A UUID of the host machine BIOS.  This field is considered to be a canonical fact.
     * @type {string}
     * @memberof CanonicalFactsOut
     */
    'bios_uuid'?: string | null;
    /**
     * Host’s network IP addresses.  This field is considered to be a canonical fact.
     * @type {Array<string>}
     * @memberof CanonicalFactsOut
     */
    'ip_addresses'?: Array<string> | null;
    /**
     * A host’s Fully Qualified Domain Name.  This field is considered to be a canonical fact.
     * @type {string}
     * @memberof CanonicalFactsOut
     */
    'fqdn'?: string | null;
    /**
     * Host’s network interfaces MAC addresses.  This field is considered to be a canonical fact.
     * @type {Array<string>}
     * @memberof CanonicalFactsOut
     */
    'mac_addresses'?: Array<string> | null;
    /**
     * Host’s reference in the external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM etc. This field is one of the canonical facts and does not work without provider_type.
     * @type {string}
     * @memberof CanonicalFactsOut
     */
    'provider_id'?: string | null;
    /**
     * Type of external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM, etc. This field is one of the canonical facts and does not workout provider_id.
     * @type {string}
     * @memberof CanonicalFactsOut
     */
    'provider_type'?: string | null;
}
/**
 * Data required to create a check-in record for a host.
 * @export
 * @interface CreateCheckIn
 */
export interface CreateCheckIn {
    /**
     *
     * @type {string}
     * @memberof CreateCheckIn
     */
    'insights_id'?: string;
    /**
     *
     * @type {string}
     * @memberof CreateCheckIn
     */
    'subscription_manager_id'?: string;
    /**
     *
     * @type {string}
     * @memberof CreateCheckIn
     */
    'satellite_id'?: string;
    /**
     *
     * @type {string}
     * @memberof CreateCheckIn
     */
    'bios_uuid'?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof CreateCheckIn
     */
    'ip_addresses'?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof CreateCheckIn
     */
    'fqdn'?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof CreateCheckIn
     */
    'mac_addresses'?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof CreateCheckIn
     */
    'provider_id'?: string;
    /**
     *
     * @type {string}
     * @memberof CreateCheckIn
     */
    'provider_type'?: string;
    /**
     * How long from now to expect another check-in (in minutes).
     * @type {number}
     * @memberof CreateCheckIn
     */
    'checkin_frequency'?: number;
}
/**
 * A set of string facts belonging to a single namespace.
 * @export
 * @interface FactSet
 */
export interface FactSet {
    /**
     * A namespace the facts belong to.
     * @type {string}
     * @memberof FactSet
     */
    'namespace': string;
    /**
     * The facts themselves.
     * @type {object}
     * @memberof FactSet
     */
    'facts': object;
}
/**
 * Data of a single group belonging to an account.
 * @export
 * @interface GroupIn
 */
export interface GroupIn {
    /**
     * A group’s human-readable name.
     * @type {string}
     * @memberof GroupIn
     */
    'name'?: string;
    /**
     * A comma-separated list of host IDs that belong to the group.
     * @type {Array<string>}
     * @memberof GroupIn
     */
    'host_ids'?: Array<string> | null;
}
/**
 * Data of a single group belonging to an account.
 * @export
 * @interface GroupOut
 */
export interface GroupOut {
    /**
     *
     * @type {string}
     * @memberof GroupOut
     */
    'id'?: string;
    /**
     * A group’s human-readable name.
     * @type {string}
     * @memberof GroupOut
     */
    'name'?: string;
    /**
     * A Red Hat Account number that owns the host.
     * @type {string}
     * @memberof GroupOut
     * @deprecated
     */
    'account'?: string | null;
    /**
     * The Org ID of the tenant that owns the host.
     * @type {string}
     * @memberof GroupOut
     */
    'org_id'?: string;
    /**
     * Whether the group is the \"ungrouped hosts\" group
     * @type {boolean}
     * @memberof GroupOut
     */
    'ungrouped'?: boolean;
    /**
     * A timestamp when the entry was created.
     * @type {string}
     * @memberof GroupOut
     */
    'created'?: string;
    /**
     * A timestamp when the entry was last updated.
     * @type {string}
     * @memberof GroupOut
     */
    'updated'?: string;
}
/**
 * Data of a single group belonging to an account.
 * @export
 * @interface GroupOutWithHostCount
 */
export interface GroupOutWithHostCount {
    /**
     *
     * @type {string}
     * @memberof GroupOutWithHostCount
     */
    'id'?: string;
    /**
     * A group’s human-readable name.
     * @type {string}
     * @memberof GroupOutWithHostCount
     */
    'name'?: string;
    /**
     * A Red Hat Account number that owns the host.
     * @type {string}
     * @memberof GroupOutWithHostCount
     * @deprecated
     */
    'account'?: string | null;
    /**
     * The Org ID of the tenant that owns the host.
     * @type {string}
     * @memberof GroupOutWithHostCount
     */
    'org_id'?: string;
    /**
     * Whether the group is the \"ungrouped hosts\" group
     * @type {boolean}
     * @memberof GroupOutWithHostCount
     */
    'ungrouped'?: boolean;
    /**
     * A timestamp when the entry was created.
     * @type {string}
     * @memberof GroupOutWithHostCount
     */
    'created'?: string;
    /**
     * A timestamp when the entry was last updated.
     * @type {string}
     * @memberof GroupOutWithHostCount
     */
    'updated'?: string;
    /**
     * The number of hosts associated with the group.
     * @type {number}
     * @memberof GroupOutWithHostCount
     */
    'host_count'?: number;
}
/**
 * A paginated group search query result with group entries and their Inventory metadata.
 * @export
 * @interface GroupQueryOutput
 */
export interface GroupQueryOutput {
    /**
     * The number of items on the current page
     * @type {number}
     * @memberof GroupQueryOutput
     */
    'count': number;
    /**
     * The page number
     * @type {number}
     * @memberof GroupQueryOutput
     */
    'page': number;
    /**
     * The number of items to return per page
     * @type {number}
     * @memberof GroupQueryOutput
     */
    'per_page': number;
    /**
     * Total number of items
     * @type {number}
     * @memberof GroupQueryOutput
     */
    'total': number;
    /**
     * Actual group search query result entries.
     * @type {Array<GroupOutWithHostCount>}
     * @memberof GroupQueryOutput
     */
    'results': Array<GroupOutWithHostCount>;
}
/**
 * A single Host ID that belongs to a host.
 * @export
 * @interface HostIdOut
 */
export interface HostIdOut {
    /**
     *
     * @type {string}
     * @memberof HostIdOut
     */
    'id'?: string;
}
/**
 * Data of a single host belonging to an account. Represents the hosts without its Inventory metadata.
 * @export
 * @interface HostOut
 */
export interface HostOut {
    /**
     * An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.
     * @type {string}
     * @memberof HostOut
     */
    'insights_id'?: string | null;
    /**
     * A Red Hat Subcription Manager ID of a RHEL host.  This field is considered to be a canonical fact.
     * @type {string}
     * @memberof HostOut
     */
    'subscription_manager_id'?: string | null;
    /**
     * A Red Hat Satellite ID of a RHEL host.  This field is considered to be a canonical fact.
     * @type {string}
     * @memberof HostOut
     */
    'satellite_id'?: string | null;
    /**
     * A UUID of the host machine BIOS.  This field is considered to be a canonical fact.
     * @type {string}
     * @memberof HostOut
     */
    'bios_uuid'?: string | null;
    /**
     * Host’s network IP addresses.  This field is considered to be a canonical fact.
     * @type {Array<string>}
     * @memberof HostOut
     */
    'ip_addresses'?: Array<string> | null;
    /**
     * A host’s Fully Qualified Domain Name.  This field is considered to be a canonical fact.
     * @type {string}
     * @memberof HostOut
     */
    'fqdn'?: string | null;
    /**
     * Host’s network interfaces MAC addresses.  This field is considered to be a canonical fact.
     * @type {Array<string>}
     * @memberof HostOut
     */
    'mac_addresses'?: Array<string> | null;
    /**
     * Host’s reference in the external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM etc. This field is one of the canonical facts and does not work without provider_type.
     * @type {string}
     * @memberof HostOut
     */
    'provider_id'?: string | null;
    /**
     * Type of external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM, etc. This field is one of the canonical facts and does not workout provider_id.
     * @type {string}
     * @memberof HostOut
     */
    'provider_type'?: string | null;
    /**
     * A host’s human-readable display name, e.g. in a form of a domain name.
     * @type {string}
     * @memberof HostOut
     */
    'display_name'?: string | null;
    /**
     * The ansible host name for remediations
     * @type {string}
     * @memberof HostOut
     */
    'ansible_host'?: string | null;
    /**
     * A Red Hat Account number that owns the host.
     * @type {string}
     * @memberof HostOut
     * @deprecated
     */
    'account'?: string | null;
    /**
     * The Org ID of the tenant that owns the host.
     * @type {string}
     * @memberof HostOut
     */
    'org_id': string;
    /**
     * A durable and reliable platform-wide host identifier. Applications should use this identifier to reference hosts.
     * @type {string}
     * @memberof HostOut
     */
    'id'?: string;
    /**
     * A timestamp when the entry was created.
     * @type {string}
     * @memberof HostOut
     */
    'created'?: string;
    /**
     * A timestamp when the entry was last updated.
     * @type {string}
     * @memberof HostOut
     */
    'updated'?: string;
    /**
     * A set of facts belonging to the host.
     * @type {Array<FactSet>}
     * @memberof HostOut
     */
    'facts'?: Array<FactSet>;
    /**
     * Timestamp from which the host is considered stale.
     * @type {string}
     * @memberof HostOut
     */
    'stale_timestamp'?: string | null;
    /**
     * Timestamp from which the host is considered too stale to be listed without an explicit toggle.
     * @type {string}
     * @memberof HostOut
     */
    'stale_warning_timestamp'?: string | null;
    /**
     * Timestamp from which the host is considered deleted.
     * @type {string}
     * @memberof HostOut
     */
    'culled_timestamp'?: string | null;
    /**
     * Reporting source of the host. Used when updating the stale_timestamp.
     * @type {string}
     * @memberof HostOut
     */
    'reporter'?: string | null;
    /**
     * Reporting source of the last checkin status, stale_timestamp, and last_check_in.
     * @type {{ [key: string]: PerReporterStaleness; }}
     * @memberof HostOut
     */
    'per_reporter_staleness'?: { [key: string]: PerReporterStaleness; };
    /**
     * The groups that the host belongs to, if any.
     * @type {Array<GroupOut>}
     * @memberof HostOut
     */
    'groups'?: Array<GroupOut>;
    /**
     *
     * @type {SystemProfile}
     * @memberof HostOut
     */
    'system_profile'?: SystemProfile;
    /**
     *
     * @type {string}
     * @memberof HostOut
     */
    'last_check_in'?: string;
}
/**
 * A paginated host search query result with host entries and their Inventory metadata.
 * @export
 * @interface HostQueryOutput
 */
export interface HostQueryOutput {
    /**
     * The number of items on the current page
     * @type {number}
     * @memberof HostQueryOutput
     */
    'count': number;
    /**
     * The page number
     * @type {number}
     * @memberof HostQueryOutput
     */
    'page': number;
    /**
     * The number of items to return per page
     * @type {number}
     * @memberof HostQueryOutput
     */
    'per_page': number;
    /**
     * Total number of items
     * @type {number}
     * @memberof HostQueryOutput
     */
    'total': number;
    /**
     * Actual host search query result entries.
     * @type {Array<HostOut>}
     * @memberof HostQueryOutput
     */
    'results': Array<HostOut>;
}
/**
 * Individual host record that contains only the host id and system profile
 * @export
 * @interface HostSystemProfileOut
 */
export interface HostSystemProfileOut {
    /**
     *
     * @type {string}
     * @memberof HostSystemProfileOut
     */
    'id'?: string;
    /**
     *
     * @type {SystemProfile}
     * @memberof HostSystemProfileOut
     */
    'system_profile'?: SystemProfile;
}
/**
 *
 * @export
 * @interface PaginationOut
 */
export interface PaginationOut {
    /**
     * The number of items on the current page
     * @type {number}
     * @memberof PaginationOut
     */
    'count': number;
    /**
     * The page number
     * @type {number}
     * @memberof PaginationOut
     */
    'page': number;
    /**
     * The number of items to return per page
     * @type {number}
     * @memberof PaginationOut
     */
    'per_page': number;
    /**
     * Total number of items
     * @type {number}
     * @memberof PaginationOut
     */
    'total': number;
}
/**
 * Data of a single host to be updated.
 * @export
 * @interface PatchHostIn
 */
export interface PatchHostIn {
    /**
     * The ansible host name for remediations
     * @type {string}
     * @memberof PatchHostIn
     */
    'ansible_host'?: string;
    /**
     * A host’s human-readable display name, e.g. in a form of a domain name.
     * @type {string}
     * @memberof PatchHostIn
     */
    'display_name'?: string;
}
/**
 *
 * @export
 * @interface PerReporterStaleness
 */
export interface PerReporterStaleness {
    /**
     *
     * @type {string}
     * @memberof PerReporterStaleness
     */
    'last_check_in'?: string;
    /**
     *
     * @type {string}
     * @memberof PerReporterStaleness
     */
    'stale_timestamp'?: string;
    /**
     *
     * @type {string}
     * @memberof PerReporterStaleness
     */
    'stale_warning_timestamp'?: string;
    /**
     *
     * @type {string}
     * @memberof PerReporterStaleness
     */
    'culled_timestamp'?: string;
    /**
     *
     * @type {boolean}
     * @memberof PerReporterStaleness
     */
    'check_in_succeeded'?: boolean;
}
/**
 * A paginated group search query result with group entries and their Inventory metadata in paginated resource-types response format.
 * @export
 * @interface ResourceTypesGroupsQueryOutput
 */
export interface ResourceTypesGroupsQueryOutput {
    /**
     *
     * @type {ResourceTypesPaginationOutMeta}
     * @memberof ResourceTypesGroupsQueryOutput
     */
    'meta': ResourceTypesPaginationOutMeta;
    /**
     *
     * @type {ResourceTypesPaginationOutLinks}
     * @memberof ResourceTypesGroupsQueryOutput
     */
    'links': ResourceTypesPaginationOutLinks;
    /**
     * Actual group search query result entries.
     * @type {Array<GroupOutWithHostCount>}
     * @memberof ResourceTypesGroupsQueryOutput
     */
    'data': Array<GroupOutWithHostCount>;
}
/**
 * Data describing a single resource-types RBAC object.
 * @export
 * @interface ResourceTypesOut
 */
export interface ResourceTypesOut {
    /**
     * The name of the resource type
     * @type {string}
     * @memberof ResourceTypesOut
     */
    'value'?: string;
    /**
     * The path for the RBAC endpoint for the resource type
     * @type {string}
     * @memberof ResourceTypesOut
     */
    'path'?: string;
    /**
     *
     * @type {number}
     * @memberof ResourceTypesOut
     */
    'count'?: number;
}
/**
 *
 * @export
 * @interface ResourceTypesPaginationOut
 */
export interface ResourceTypesPaginationOut {
    /**
     *
     * @type {ResourceTypesPaginationOutMeta}
     * @memberof ResourceTypesPaginationOut
     */
    'meta': ResourceTypesPaginationOutMeta;
    /**
     *
     * @type {ResourceTypesPaginationOutLinks}
     * @memberof ResourceTypesPaginationOut
     */
    'links': ResourceTypesPaginationOutLinks;
}
/**
 * A collection of pagination links for resource-types endpoints
 * @export
 * @interface ResourceTypesPaginationOutLinks
 */
export interface ResourceTypesPaginationOutLinks {
    /**
     * The URI path for the first page in the pagination
     * @type {string}
     * @memberof ResourceTypesPaginationOutLinks
     */
    'first': string;
    /**
     * The URI path for the previous page in the pagination
     * @type {string}
     * @memberof ResourceTypesPaginationOutLinks
     */
    'previous': string | null;
    /**
     * The URI path for the next page in the pagination
     * @type {string}
     * @memberof ResourceTypesPaginationOutLinks
     */
    'next': string | null;
    /**
     * The URI path for the last page in the pagination
     * @type {string}
     * @memberof ResourceTypesPaginationOutLinks
     */
    'last': string;
}
/**
 * The metadata for resource-types responses
 * @export
 * @interface ResourceTypesPaginationOutMeta
 */
export interface ResourceTypesPaginationOutMeta {
    /**
     * The total number of objects returned by the query.
     * @type {number}
     * @memberof ResourceTypesPaginationOutMeta
     */
    'count': number;
}
/**
 * A paginated list of resource-types RBAC objects.
 * @export
 * @interface ResourceTypesQueryOutput
 */
export interface ResourceTypesQueryOutput {
    /**
     *
     * @type {ResourceTypesPaginationOutMeta}
     * @memberof ResourceTypesQueryOutput
     */
    'meta': ResourceTypesPaginationOutMeta;
    /**
     *
     * @type {ResourceTypesPaginationOutLinks}
     * @memberof ResourceTypesQueryOutput
     */
    'links': ResourceTypesPaginationOutLinks;
    /**
     * Actual resource-types object data.
     * @type {Array<ResourceTypesOut>}
     * @memberof ResourceTypesQueryOutput
     */
    'data': Array<ResourceTypesOut>;
}
/**
 * @type StalenessId
 * Account Staleness UID
 * @export
 */
export type StalenessId = SystemDefaultId | string;

/**
 * Data of a single account staleness.
 * @export
 * @interface StalenessIn
 */
export interface StalenessIn {
    /**
     *
     * @type {number}
     * @memberof StalenessIn
     */
    'conventional_time_to_stale'?: number;
    /**
     *
     * @type {number}
     * @memberof StalenessIn
     */
    'conventional_time_to_stale_warning'?: number;
    /**
     *
     * @type {number}
     * @memberof StalenessIn
     */
    'conventional_time_to_delete'?: number;
    /**
     *
     * @type {number}
     * @memberof StalenessIn
     */
    'immutable_time_to_stale'?: number;
    /**
     *
     * @type {number}
     * @memberof StalenessIn
     */
    'immutable_time_to_stale_warning'?: number;
    /**
     *
     * @type {number}
     * @memberof StalenessIn
     */
    'immutable_time_to_delete'?: number;
}
/**
 * Data of a account staleness.
 * @export
 * @interface StalenessOutput
 */
export interface StalenessOutput {
    /**
     *
     * @type {number}
     * @memberof StalenessOutput
     */
    'conventional_time_to_stale': number;
    /**
     *
     * @type {number}
     * @memberof StalenessOutput
     */
    'conventional_time_to_stale_warning': number;
    /**
     *
     * @type {number}
     * @memberof StalenessOutput
     */
    'conventional_time_to_delete': number;
    /**
     *
     * @type {number}
     * @memberof StalenessOutput
     */
    'immutable_time_to_stale': number;
    /**
     *
     * @type {number}
     * @memberof StalenessOutput
     */
    'immutable_time_to_stale_warning': number;
    /**
     *
     * @type {number}
     * @memberof StalenessOutput
     */
    'immutable_time_to_delete': number;
    /**
     *
     * @type {StalenessId}
     * @memberof StalenessOutput
     */
    'id': StalenessId;
    /**
     * The Org ID of the tenant that owns the host.
     * @type {string}
     * @memberof StalenessOutput
     */
    'org_id': string;
    /**
     * A timestamp when the entry was created.
     * @type {string}
     * @memberof StalenessOutput
     */
    'created': string | null;
    /**
     * A timestamp when the entry was last updated.
     * @type {string}
     * @memberof StalenessOutput
     */
    'updated': string | null;
}
/**
 *
 * @export
 * @interface StructuredTag
 */
export interface StructuredTag {
    /**
     *
     * @type {string}
     * @memberof StructuredTag
     */
    'namespace'?: string | null;
    /**
     *
     * @type {string}
     * @memberof StructuredTag
     */
    'key'?: string;
    /**
     *
     * @type {string}
     * @memberof StructuredTag
     */
    'value'?: string | null;
}
/**
 *
 * @export
 * @enum {string}
 */

export const SystemDefaultId = {
    SystemDefault: 'system_default'
} as const;

export type SystemDefaultId = typeof SystemDefaultId[keyof typeof SystemDefaultId];


/**
 * Representation of the system profile fields
 * @export
 * @interface SystemProfile
 */
export interface SystemProfile {
    /**
     * A UUID associated with the host\'s RHSM certificate
     * @type {string}
     * @memberof SystemProfile
     */
    'owner_id'?: string;
    /**
     * A UUID associated with a cloud_connector
     * @type {string}
     * @memberof SystemProfile
     */
    'rhc_client_id'?: string;
    /**
     * A UUID associated with the config manager state
     * @type {string}
     * @memberof SystemProfile
     */
    'rhc_config_state'?: string;
    /**
     * The cpu model name
     * @type {string}
     * @memberof SystemProfile
     */
    'cpu_model'?: string;
    /**
     *
     * @type {number}
     * @memberof SystemProfile
     */
    'number_of_cpus'?: number;
    /**
     *
     * @type {number}
     * @memberof SystemProfile
     */
    'number_of_sockets'?: number;
    /**
     *
     * @type {number}
     * @memberof SystemProfile
     */
    'cores_per_socket'?: number;
    /**
     * Number of CPU threads per CPU core. Typical values: 1, 2, 4
     * @type {number}
     * @memberof SystemProfile
     */
    'threads_per_core'?: number;
    /**
     *
     * @type {number}
     * @memberof SystemProfile
     */
    'system_memory_bytes'?: number;
    /**
     *
     * @type {string}
     * @memberof SystemProfile
     */
    'infrastructure_type'?: string;
    /**
     *
     * @type {string}
     * @memberof SystemProfile
     */
    'infrastructure_vendor'?: string;
    /**
     *
     * @type {Array<SystemProfileNetworkInterface>}
     * @memberof SystemProfile
     */
    'network_interfaces'?: Array<SystemProfileNetworkInterface>;
    /**
     *
     * @type {Array<SystemProfileDiskDevice>}
     * @memberof SystemProfile
     */
    'disk_devices'?: Array<SystemProfileDiskDevice>;
    /**
     *
     * @type {string}
     * @memberof SystemProfile
     */
    'bios_vendor'?: string;
    /**
     *
     * @type {string}
     * @memberof SystemProfile
     */
    'bios_version'?: string;
    /**
     *
     * @type {string}
     * @memberof SystemProfile
     */
    'bios_release_date'?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof SystemProfile
     */
    'cpu_flags'?: Array<string>;
    /**
     *
     * @type {SystemProfileSystemd}
     * @memberof SystemProfile
     */
    'systemd'?: SystemProfileSystemd;
    /**
     *
     * @type {SystemProfileOperatingSystem}
     * @memberof SystemProfile
     */
    'operating_system'?: SystemProfileOperatingSystem;
    /**
     *
     * @type {string}
     * @memberof SystemProfile
     */
    'os_release'?: string;
    /**
     * The kernel version represented with a three, optionally four, number scheme.
     * @type {string}
     * @memberof SystemProfile
     */
    'os_kernel_version'?: string;
    /**
     * Release name of the system distribution (from yum/dnf)
     * @type {string}
     * @memberof SystemProfile
     */
    'releasever'?: string;
    /**
     *
     * @type {string}
     * @memberof SystemProfile
     */
    'arch'?: string;
    /**
     * The architecture family (from yum/dnf)
     * @type {string}
     * @memberof SystemProfile
     */
    'basearch'?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof SystemProfile
     */
    'kernel_modules'?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof SystemProfile
     */
    'last_boot_time'?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof SystemProfile
     */
    'running_processes'?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof SystemProfile
     */
    'subscription_status'?: string;
    /**
     *
     * @type {string}
     * @memberof SystemProfile
     */
    'subscription_auto_attach'?: string;
    /**
     *
     * @type {boolean}
     * @memberof SystemProfile
     */
    'katello_agent_running'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof SystemProfile
     */
    'satellite_managed'?: boolean;
    /**
     *
     * @type {string}
     * @memberof SystemProfile
     */
    'cloud_provider'?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof SystemProfile
     */
    'public_ipv4_addresses'?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof SystemProfile
     */
    'public_dns'?: Array<string>;
    /**
     *
     * @type {Array<SystemProfileYumRepo>}
     * @memberof SystemProfile
     */
    'yum_repos'?: Array<SystemProfileYumRepo>;
    /**
     *
     * @type {Array<SystemProfileDnfModule>}
     * @memberof SystemProfile
     */
    'dnf_modules'?: Array<SystemProfileDnfModule>;
    /**
     *
     * @type {Array<SystemProfileInstalledProduct>}
     * @memberof SystemProfile
     */
    'installed_products'?: Array<SystemProfileInstalledProduct>;
    /**
     * The version number of insights client. supports wildcards
     * @type {string}
     * @memberof SystemProfile
     */
    'insights_client_version'?: string;
    /**
     *
     * @type {string}
     * @memberof SystemProfile
     */
    'insights_egg_version'?: string;
    /**
     *
     * @type {string}
     * @memberof SystemProfile
     */
    'captured_date'?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof SystemProfile
     */
    'installed_packages'?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof SystemProfile
     */
    'installed_packages_delta'?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof SystemProfile
     */
    'gpg_pubkeys'?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof SystemProfile
     */
    'installed_services'?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof SystemProfile
     */
    'enabled_services'?: Array<string>;
    /**
     *
     * @type {SystemProfileSap}
     * @memberof SystemProfile
     */
    'sap'?: SystemProfileSap;
    /**
     * Indicates if SAP is installed on the system
     * @type {boolean}
     * @memberof SystemProfile
     */
    'sap_system'?: boolean;
    /**
     *
     * @type {Set<string>}
     * @memberof SystemProfile
     */
    'sap_sids'?: Set<string>;
    /**
     * The instance number of the SAP HANA system (a two-digit number between 00 and 99)
     * @type {string}
     * @memberof SystemProfile
     */
    'sap_instance_number'?: string;
    /**
     * The version of the SAP HANA lifecycle management program
     * @type {string}
     * @memberof SystemProfile
     */
    'sap_version'?: string;
    /**
     * Current profile resulting from command tuned-adm active
     * @type {string}
     * @memberof SystemProfile
     */
    'tuned_profile'?: string;
    /**
     * The current SELinux mode, either enforcing, permissive, or disabled
     * @type {string}
     * @memberof SystemProfile
     */
    'selinux_current_mode'?: SystemProfileSelinuxCurrentModeEnum;
    /**
     * The SELinux mode provided in the config file
     * @type {string}
     * @memberof SystemProfile
     */
    'selinux_config_file'?: string;
    /**
     * Indicates whether the host is part of a marketplace install from AWS, Azure, etc.
     * @type {boolean}
     * @memberof SystemProfile
     */
    'is_marketplace'?: boolean;
    /**
     * Indicates the type of host.
     * @type {string}
     * @memberof SystemProfile
     */
    'host_type'?: SystemProfileHostTypeEnum;
    /**
     * Indicates the greenboot status of an edge device.
     * @type {string}
     * @memberof SystemProfile
     */
    'greenboot_status'?: SystemProfileGreenbootStatusEnum;
    /**
     * Indicates whether greenboot detected a rolled back update on an edge device.
     * @type {boolean}
     * @memberof SystemProfile
     */
    'greenboot_fallback_detected'?: boolean;
    /**
     * The list of deployments on the system as reported by rpm-ostree status --json
     * @type {Array<SystemProfileRpmOstreeDeploymentsInner>}
     * @memberof SystemProfile
     */
    'rpm_ostree_deployments'?: Array<SystemProfileRpmOstreeDeploymentsInner>;
    /**
     *
     * @type {SystemProfileRhsm}
     * @memberof SystemProfile
     */
    'rhsm'?: SystemProfileRhsm;
    /**
     *
     * @type {SystemProfileSystemPurpose}
     * @memberof SystemProfile
     */
    'system_purpose'?: SystemProfileSystemPurpose;
    /**
     *
     * @type {SystemProfileAnsible}
     * @memberof SystemProfile
     */
    'ansible'?: SystemProfileAnsible;
    /**
     *
     * @type {SystemProfileIntersystems}
     * @memberof SystemProfile
     */
    'intersystems'?: SystemProfileIntersystems;
    /**
     *
     * @type {SystemProfileMssql}
     * @memberof SystemProfile
     */
    'mssql'?: SystemProfileMssql;
    /**
     * System update method
     * @type {string}
     * @memberof SystemProfile
     */
    'system_update_method'?: SystemProfileSystemUpdateMethodEnum;
    /**
     * Hypervisor host identity (subscription manager id)
     * @type {string}
     * @memberof SystemProfile
     */
    'virtual_host_uuid'?: string;
    /**
     *
     * @type {SystemProfileBootcStatus}
     * @memberof SystemProfile
     */
    'bootc_status'?: SystemProfileBootcStatus;
    /**
     *
     * @type {SystemProfileConversions}
     * @memberof SystemProfile
     */
    'conversions'?: SystemProfileConversions;
    /**
     *
     * @type {SystemProfileRhelAi}
     * @memberof SystemProfile
     */
    'rhel_ai'?: SystemProfileRhelAi;
    /**
     *
     * @type {SystemProfileThirdPartyServices}
     * @memberof SystemProfile
     */
    'third_party_services'?: SystemProfileThirdPartyServices;
    /**
     *
     * @type {SystemProfileImageBuilder}
     * @memberof SystemProfile
     */
    'image_builder'?: SystemProfileImageBuilder;
    /**
     *
     * @type {SystemProfileWorkloads}
     * @memberof SystemProfile
     */
    'workloads'?: SystemProfileWorkloads;
}

export const SystemProfileSelinuxCurrentModeEnum = {
    Enforcing: 'enforcing',
    Permissive: 'permissive',
    Disabled: 'disabled'
} as const;

export type SystemProfileSelinuxCurrentModeEnum = typeof SystemProfileSelinuxCurrentModeEnum[keyof typeof SystemProfileSelinuxCurrentModeEnum];
export const SystemProfileHostTypeEnum = {
    Edge: 'edge'
} as const;

export type SystemProfileHostTypeEnum = typeof SystemProfileHostTypeEnum[keyof typeof SystemProfileHostTypeEnum];
export const SystemProfileGreenbootStatusEnum = {
    Red: 'red',
    Green: 'green'
} as const;

export type SystemProfileGreenbootStatusEnum = typeof SystemProfileGreenbootStatusEnum[keyof typeof SystemProfileGreenbootStatusEnum];
export const SystemProfileSystemUpdateMethodEnum = {
    Dnf: 'dnf',
    RpmOstree: 'rpm-ostree',
    Yum: 'yum',
    Bootc: 'bootc'
} as const;

export type SystemProfileSystemUpdateMethodEnum = typeof SystemProfileSystemUpdateMethodEnum[keyof typeof SystemProfileSystemUpdateMethodEnum];

/**
 * Object containing data specific to Ansible Automation Platform
 * @export
 * @interface SystemProfileAnsible
 */
export interface SystemProfileAnsible {
    /**
     * The ansible-tower or automation-controller version on the host
     * @type {string}
     * @memberof SystemProfileAnsible
     */
    'controller_version'?: string;
    /**
     * The automation-hub version on the host
     * @type {string}
     * @memberof SystemProfileAnsible
     */
    'hub_version'?: string;
    /**
     * The catalog-worker version on the host
     * @type {string}
     * @memberof SystemProfileAnsible
     */
    'catalog_worker_version'?: string;
    /**
     * The SSO version on the host
     * @type {string}
     * @memberof SystemProfileAnsible
     */
    'sso_version'?: string;
}
/**
 * Object containing image data from command bootc status
 * @export
 * @interface SystemProfileBootcStatus
 */
export interface SystemProfileBootcStatus {
    /**
     *
     * @type {SystemProfileBootcStatusBooted}
     * @memberof SystemProfileBootcStatus
     */
    'booted'?: SystemProfileBootcStatusBooted;
    /**
     *
     * @type {SystemProfileBootcStatusBooted}
     * @memberof SystemProfileBootcStatus
     */
    'rollback'?: SystemProfileBootcStatusBooted;
    /**
     *
     * @type {SystemProfileBootcStatusBooted}
     * @memberof SystemProfileBootcStatus
     */
    'staged'?: SystemProfileBootcStatusBooted;
}
/**
 *
 * @export
 * @interface SystemProfileBootcStatusBooted
 */
export interface SystemProfileBootcStatusBooted {
    /**
     * Name of the image
     * @type {string}
     * @memberof SystemProfileBootcStatusBooted
     */
    'image'?: string;
    /**
     * Digest of the image
     * @type {string}
     * @memberof SystemProfileBootcStatusBooted
     */
    'image_digest'?: string;
    /**
     * Name of the image
     * @type {string}
     * @memberof SystemProfileBootcStatusBooted
     */
    'cached_image'?: string;
    /**
     * Digest of the image
     * @type {string}
     * @memberof SystemProfileBootcStatusBooted
     */
    'cached_image_digest'?: string;
}
/**
 * Structure of the output of the host system profile query
 * @export
 * @interface SystemProfileByHostOut
 */
export interface SystemProfileByHostOut {
    /**
     * The number of items on the current page
     * @type {number}
     * @memberof SystemProfileByHostOut
     */
    'count': number;
    /**
     * The page number
     * @type {number}
     * @memberof SystemProfileByHostOut
     */
    'page': number;
    /**
     * The number of items to return per page
     * @type {number}
     * @memberof SystemProfileByHostOut
     */
    'per_page': number;
    /**
     * Total number of items
     * @type {number}
     * @memberof SystemProfileByHostOut
     */
    'total': number;
    /**
     * Actual host search query result entries.
     * @type {Array<HostSystemProfileOut>}
     * @memberof SystemProfileByHostOut
     */
    'results': Array<HostSystemProfileOut>;
}
/**
 * Object containing information about 3rd party migration on instances
 * @export
 * @interface SystemProfileConversions
 */
export interface SystemProfileConversions {
    /**
     * Whether the conversion activity has been done or not
     * @type {boolean}
     * @memberof SystemProfileConversions
     */
    'activity'?: boolean;
}
/**
 * Representation of one mounted device
 * @export
 * @interface SystemProfileDiskDevice
 */
export interface SystemProfileDiskDevice {
    /**
     *
     * @type {string}
     * @memberof SystemProfileDiskDevice
     */
    'device'?: string;
    /**
     * User-defined mount label
     * @type {string}
     * @memberof SystemProfileDiskDevice
     */
    'label'?: string;
    /**
     * An arbitrary object that does not allow empty string keys.
     * @type {{ [key: string]: SystemProfileNestedObjectValue; }}
     * @memberof SystemProfileDiskDevice
     */
    'options'?: { [key: string]: SystemProfileNestedObjectValue; };
    /**
     * The mount point
     * @type {string}
     * @memberof SystemProfileDiskDevice
     */
    'mount_point'?: string;
    /**
     * The mount type
     * @type {string}
     * @memberof SystemProfileDiskDevice
     */
    'type'?: string;
}
/**
 * Representation of one DNF module
 * @export
 * @interface SystemProfileDnfModule
 */
export interface SystemProfileDnfModule {
    /**
     *
     * @type {string}
     * @memberof SystemProfileDnfModule
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof SystemProfileDnfModule
     */
    'stream'?: string;
}
/**
 * Object containing image builder facts
 * @export
 * @interface SystemProfileImageBuilder
 */
export interface SystemProfileImageBuilder {
    /**
     * The compliance policy that was used and applied during the image build
     * @type {string}
     * @memberof SystemProfileImageBuilder
     */
    'compliance_policy_id'?: string;
    /**
     * The profile that was applied during the image build on which the compliance policy was based
     * @type {string}
     * @memberof SystemProfileImageBuilder
     */
    'compliance_profile_id'?: string;
}
/**
 * Representation of one installed product
 * @export
 * @interface SystemProfileInstalledProduct
 */
export interface SystemProfileInstalledProduct {
    /**
     *
     * @type {string}
     * @memberof SystemProfileInstalledProduct
     */
    'name'?: string;
    /**
     * The product ID
     * @type {string}
     * @memberof SystemProfileInstalledProduct
     */
    'id'?: string;
    /**
     * Subscription status for product
     * @type {string}
     * @memberof SystemProfileInstalledProduct
     */
    'status'?: string;
}
/**
 * The info for an InterSystems instance running on the system
 * @export
 * @interface SystemProfileInterSystemsRunningInstance
 */
export interface SystemProfileInterSystemsRunningInstance {
    /**
     * The name of the instance
     * @type {string}
     * @memberof SystemProfileInterSystemsRunningInstance
     */
    'instance_name'?: string;
    /**
     * The product of the instance
     * @type {string}
     * @memberof SystemProfileInterSystemsRunningInstance
     */
    'product'?: string;
    /**
     * The version of the instance
     * @type {string}
     * @memberof SystemProfileInterSystemsRunningInstance
     */
    'version'?: string;
}
/**
 * Object containing data specific to InterSystems workload
 * @export
 * @interface SystemProfileIntersystems
 */
export interface SystemProfileIntersystems {
    /**
     * Indicates if InterSystems is installed on the system
     * @type {boolean}
     * @memberof SystemProfileIntersystems
     */
    'is_intersystems'?: boolean;
    /**
     *
     * @type {Array<SystemProfileInterSystemsRunningInstance>}
     * @memberof SystemProfileIntersystems
     */
    'running_instances'?: Array<SystemProfileInterSystemsRunningInstance>;
}
/**
 * Object containing data specific to the MS SQL workload
 * @export
 * @interface SystemProfileMssql
 */
export interface SystemProfileMssql {
    /**
     * MSSQL version number
     * @type {string}
     * @memberof SystemProfileMssql
     */
    'version'?: string;
}
/**
 * @type SystemProfileNestedObjectValue
 * @export
 */
export type SystemProfileNestedObjectValue = { [key: string]: SystemProfileNestedObjectValue; };

/**
 * Representation of one network interface
 * @export
 * @interface SystemProfileNetworkInterface
 */
export interface SystemProfileNetworkInterface {
    /**
     *
     * @type {Array<string>}
     * @memberof SystemProfileNetworkInterface
     */
    'ipv4_addresses'?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof SystemProfileNetworkInterface
     */
    'ipv6_addresses'?: Array<string>;
    /**
     * MTU (Maximum transmission unit)
     * @type {number}
     * @memberof SystemProfileNetworkInterface
     */
    'mtu'?: number;
    /**
     * MAC address (with or without colons)
     * @type {string}
     * @memberof SystemProfileNetworkInterface
     */
    'mac_address'?: string;
    /**
     * Name of interface
     * @type {string}
     * @memberof SystemProfileNetworkInterface
     */
    'name'?: string;
    /**
     * Interface state (UP, DOWN, UNKNOWN)
     * @type {string}
     * @memberof SystemProfileNetworkInterface
     */
    'state'?: string;
    /**
     * Interface type (ether, loopback)
     * @type {string}
     * @memberof SystemProfileNetworkInterface
     */
    'type'?: string;
}
/**
 * Object for OS details. Supports range operations
 * @export
 * @interface SystemProfileOperatingSystem
 */
export interface SystemProfileOperatingSystem {
    /**
     * Major release of OS (aka the x version)
     * @type {number}
     * @memberof SystemProfileOperatingSystem
     */
    'major': number;
    /**
     * Minor release of OS (aka the y version)
     * @type {number}
     * @memberof SystemProfileOperatingSystem
     */
    'minor': number;
    /**
     * Name of the distro/os
     * @type {string}
     * @memberof SystemProfileOperatingSystem
     */
    'name': SystemProfileOperatingSystemNameEnum;
}

export const SystemProfileOperatingSystemNameEnum = {
    Rhel: 'RHEL',
    CentOs: 'CentOS',
    CentOsLinux: 'CentOS Linux'
} as const;

export type SystemProfileOperatingSystemNameEnum = typeof SystemProfileOperatingSystemNameEnum[keyof typeof SystemProfileOperatingSystemNameEnum];

/**
 *
 * @export
 * @interface SystemProfileOperatingSystemOut
 */
export interface SystemProfileOperatingSystemOut {
    /**
     * Total number of items
     * @type {number}
     * @memberof SystemProfileOperatingSystemOut
     */
    'total'?: number;
    /**
     * The number of items on the current page
     * @type {number}
     * @memberof SystemProfileOperatingSystemOut
     */
    'count'?: number;
    /**
     * The list of operating_system values on the account
     * @type {Array<SystemProfileOperatingSystemOutResultsInner>}
     * @memberof SystemProfileOperatingSystemOut
     */
    'results'?: Array<SystemProfileOperatingSystemOutResultsInner>;
}
/**
 *
 * @export
 * @interface SystemProfileOperatingSystemOutResultsInner
 */
export interface SystemProfileOperatingSystemOutResultsInner {
    /**
     *
     * @type {SystemProfileOperatingSystemOutResultsInnerValue}
     * @memberof SystemProfileOperatingSystemOutResultsInner
     */
    'value'?: SystemProfileOperatingSystemOutResultsInnerValue;
    /**
     *
     * @type {number}
     * @memberof SystemProfileOperatingSystemOutResultsInner
     */
    'count'?: number;
}
/**
 *
 * @export
 * @interface SystemProfileOperatingSystemOutResultsInnerValue
 */
export interface SystemProfileOperatingSystemOutResultsInnerValue {
    /**
     *
     * @type {string}
     * @memberof SystemProfileOperatingSystemOutResultsInnerValue
     */
    'name'?: string;
    /**
     *
     * @type {number}
     * @memberof SystemProfileOperatingSystemOutResultsInnerValue
     */
    'major'?: number | null;
    /**
     *
     * @type {number}
     * @memberof SystemProfileOperatingSystemOutResultsInnerValue
     */
    'minor'?: number | null;
}
/**
 * Object containing information about RHEL AI
 * @export
 * @interface SystemProfileRhelAi
 */
export interface SystemProfileRhelAi {
    /**
     * RHEL AI VARIANT
     * @type {string}
     * @memberof SystemProfileRhelAi
     */
    'variant'?: string;
    /**
     * RHEL AI VERSION ID
     * @type {string}
     * @memberof SystemProfileRhelAi
     */
    'rhel_ai_version_id'?: string;
    /**
     * Model name of AMD GPUs
     * @type {Array<string>}
     * @memberof SystemProfileRhelAi
     */
    'amd_gpu_models'?: Array<string>;
    /**
     * Model name of Intel Gaudi HPUs
     * @type {Array<string>}
     * @memberof SystemProfileRhelAi
     */
    'intel_gaudi_hpu_models'?: Array<string>;
    /**
     * Model name of Nvidia GPUs in the GPU index order
     * @type {Array<string>}
     * @memberof SystemProfileRhelAi
     */
    'nvidia_gpu_models'?: Array<string>;
}
/**
 * Object for subscription-manager details
 * @export
 * @interface SystemProfileRhsm
 */
export interface SystemProfileRhsm {
    /**
     * System release set by subscription-manager
     * @type {string}
     * @memberof SystemProfileRhsm
     */
    'version'?: string;
    /**
     * Environments (\"content templates\") the system is subscribed to.
     * @type {Array<string>}
     * @memberof SystemProfileRhsm
     */
    'environment_ids'?: Array<string>;
}
/**
 * Limited deployment information from systems managed by rpm-ostree as reported by rpm-ostree status --json
 * @export
 * @interface SystemProfileRpmOstreeDeploymentsInner
 */
export interface SystemProfileRpmOstreeDeploymentsInner {
    /**
     * ID of the deployment
     * @type {string}
     * @memberof SystemProfileRpmOstreeDeploymentsInner
     */
    'id': string;
    /**
     * The checksum / commit of the deployment
     * @type {string}
     * @memberof SystemProfileRpmOstreeDeploymentsInner
     */
    'checksum': string;
    /**
     * The origin repo from which the commit was installed
     * @type {string}
     * @memberof SystemProfileRpmOstreeDeploymentsInner
     */
    'origin': string;
    /**
     * The operating system name
     * @type {string}
     * @memberof SystemProfileRpmOstreeDeploymentsInner
     */
    'osname': string;
    /**
     * The version of the deployment
     * @type {string}
     * @memberof SystemProfileRpmOstreeDeploymentsInner
     */
    'version'?: string;
    /**
     * Whether the deployment is currently booted
     * @type {boolean}
     * @memberof SystemProfileRpmOstreeDeploymentsInner
     */
    'booted': boolean;
    /**
     * Whether the deployment is currently pinned
     * @type {boolean}
     * @memberof SystemProfileRpmOstreeDeploymentsInner
     */
    'pinned': boolean;
}
/**
 * Object containing data specific to the SAP workload
 * @export
 * @interface SystemProfileSap
 */
export interface SystemProfileSap {
    /**
     * Indicates if SAP is installed on the system
     * @type {boolean}
     * @memberof SystemProfileSap
     */
    'sap_system'?: boolean;
    /**
     *
     * @type {Set<string>}
     * @memberof SystemProfileSap
     */
    'sids'?: Set<string>;
    /**
     * The instance number of the SAP HANA system (a two-digit number between 00 and 99)
     * @type {string}
     * @memberof SystemProfileSap
     */
    'instance_number'?: string;
    /**
     * The version of the SAP HANA lifecycle management program
     * @type {string}
     * @memberof SystemProfileSap
     */
    'version'?: string;
}
/**
 *
 * @export
 * @interface SystemProfileSapSystemOut
 */
export interface SystemProfileSapSystemOut {
    /**
     * Total number of items
     * @type {number}
     * @memberof SystemProfileSapSystemOut
     */
    'total'?: number;
    /**
     * The number of items on the current page
     * @type {number}
     * @memberof SystemProfileSapSystemOut
     */
    'count'?: number;
    /**
     * The list of sap_system values on the account
     * @type {Array<SystemProfileSapSystemOutResultsInner>}
     * @memberof SystemProfileSapSystemOut
     */
    'results'?: Array<SystemProfileSapSystemOutResultsInner>;
}
/**
 *
 * @export
 * @interface SystemProfileSapSystemOutResultsInner
 */
export interface SystemProfileSapSystemOutResultsInner {
    /**
     *
     * @type {SystemProfileSapSystemOutResultsInnerValue}
     * @memberof SystemProfileSapSystemOutResultsInner
     */
    'value'?: SystemProfileSapSystemOutResultsInnerValue;
    /**
     *
     * @type {number}
     * @memberof SystemProfileSapSystemOutResultsInner
     */
    'count'?: number;
}
/**
 * @type SystemProfileSapSystemOutResultsInnerValue
 * @export
 */
export type SystemProfileSapSystemOutResultsInnerValue = boolean | string;

/**
 * Object for system purpose information
 * @export
 * @interface SystemProfileSystemPurpose
 */
export interface SystemProfileSystemPurpose {
    /**
     * The intended usage of the system
     * @type {string}
     * @memberof SystemProfileSystemPurpose
     */
    'usage'?: SystemProfileSystemPurposeUsageEnum;
    /**
     * The intended role of the system
     * @type {string}
     * @memberof SystemProfileSystemPurpose
     */
    'role'?: SystemProfileSystemPurposeRoleEnum;
    /**
     * The intended SLA of the system
     * @type {string}
     * @memberof SystemProfileSystemPurpose
     */
    'sla'?: SystemProfileSystemPurposeSlaEnum;
}

export const SystemProfileSystemPurposeUsageEnum = {
    Production: 'Production',
    DevelopmentTest: 'Development/Test',
    DisasterRecovery: 'Disaster Recovery'
} as const;

export type SystemProfileSystemPurposeUsageEnum = typeof SystemProfileSystemPurposeUsageEnum[keyof typeof SystemProfileSystemPurposeUsageEnum];
export const SystemProfileSystemPurposeRoleEnum = {
    Server: 'Red Hat Enterprise Linux Server',
    Workstation: 'Red Hat Enterprise Linux Workstation',
    ComputeNode: 'Red Hat Enterprise Linux Compute Node'
} as const;

export type SystemProfileSystemPurposeRoleEnum = typeof SystemProfileSystemPurposeRoleEnum[keyof typeof SystemProfileSystemPurposeRoleEnum];
export const SystemProfileSystemPurposeSlaEnum = {
    Premium: 'Premium',
    Standard: 'Standard',
    SelfSupport: 'Self-Support'
} as const;

export type SystemProfileSystemPurposeSlaEnum = typeof SystemProfileSystemPurposeSlaEnum[keyof typeof SystemProfileSystemPurposeSlaEnum];

/**
 * Object for whole system systemd state, as reported by systemctl status --all
 * @export
 * @interface SystemProfileSystemd
 */
export interface SystemProfileSystemd {
    /**
     * The state of the systemd subsystem
     * @type {string}
     * @memberof SystemProfileSystemd
     */
    'state': SystemProfileSystemdStateEnum;
    /**
     * The number of jobs jobs_queued
     * @type {number}
     * @memberof SystemProfileSystemd
     */
    'jobs_queued': number;
    /**
     * The number of jobs failed
     * @type {number}
     * @memberof SystemProfileSystemd
     */
    'failed': number;
    /**
     * List of all failed jobs.
     * @type {Array<string>}
     * @memberof SystemProfileSystemd
     */
    'failed_services'?: Array<string>;
}

export const SystemProfileSystemdStateEnum = {
    Initializing: 'initializing',
    Starting: 'starting',
    Running: 'running',
    Degraded: 'degraded',
    Maintenance: 'maintenance',
    Stopping: 'stopping'
} as const;

export type SystemProfileSystemdStateEnum = typeof SystemProfileSystemdStateEnum[keyof typeof SystemProfileSystemdStateEnum];

/**
 * Object containing information about system facts of third party services
 * @export
 * @interface SystemProfileThirdPartyServices
 */
export interface SystemProfileThirdPartyServices {
    /**
     *
     * @type {SystemProfileThirdPartyServicesCrowdstrike}
     * @memberof SystemProfileThirdPartyServices
     */
    'crowdstrike'?: SystemProfileThirdPartyServicesCrowdstrike;
}
/**
 * Object containing information about CrowdStrike system facts
 * @export
 * @interface SystemProfileThirdPartyServicesCrowdstrike
 */
export interface SystemProfileThirdPartyServicesCrowdstrike {
    /**
     * CrowdStrike Falcon Agent ID
     * @type {string}
     * @memberof SystemProfileThirdPartyServicesCrowdstrike
     */
    'falcon_aid'?: string;
    /**
     * CrowdStrike Falcon Sensor backend
     * @type {string}
     * @memberof SystemProfileThirdPartyServicesCrowdstrike
     */
    'falcon_backend'?: string;
    /**
     * CrowdStrike running Falcon Sensor version
     * @type {string}
     * @memberof SystemProfileThirdPartyServicesCrowdstrike
     */
    'falcon_version'?: string;
}
/**
 * Object containing information about system workloads
 * @export
 * @interface SystemProfileWorkloads
 */
export interface SystemProfileWorkloads {
    /**
     *
     * @type {SystemProfileAnsible}
     * @memberof SystemProfileWorkloads
     */
    'ansible'?: SystemProfileAnsible;
    /**
     *
     * @type {SystemProfileThirdPartyServicesCrowdstrike}
     * @memberof SystemProfileWorkloads
     */
    'crowdstrike'?: SystemProfileThirdPartyServicesCrowdstrike;
    /**
     *
     * @type {SystemProfileWorkloadsIbmDb2}
     * @memberof SystemProfileWorkloads
     */
    'ibm_db2'?: SystemProfileWorkloadsIbmDb2;
    /**
     *
     * @type {SystemProfileIntersystems}
     * @memberof SystemProfileWorkloads
     */
    'intersystems'?: SystemProfileIntersystems;
    /**
     *
     * @type {SystemProfileMssql}
     * @memberof SystemProfileWorkloads
     */
    'mssql'?: SystemProfileMssql;
    /**
     *
     * @type {SystemProfileWorkloadsOracleDb}
     * @memberof SystemProfileWorkloads
     */
    'oracle_db'?: SystemProfileWorkloadsOracleDb;
    /**
     *
     * @type {SystemProfileWorkloadsRhelAi}
     * @memberof SystemProfileWorkloads
     */
    'rhel_ai'?: SystemProfileWorkloadsRhelAi;
    /**
     *
     * @type {SystemProfileSap}
     * @memberof SystemProfileWorkloads
     */
    'sap'?: SystemProfileSap;
}
/**
 * Object containing data specific to the IBM DB2 workload
 * @export
 * @interface SystemProfileWorkloadsIbmDb2
 */
export interface SystemProfileWorkloadsIbmDb2 {
    /**
     * Indicates if IBM DB2 is running on the system
     * @type {boolean}
     * @memberof SystemProfileWorkloadsIbmDb2
     */
    'is_running'?: boolean;
}
/**
 * Object containing data specific to the Oracle DB workload
 * @export
 * @interface SystemProfileWorkloadsOracleDb
 */
export interface SystemProfileWorkloadsOracleDb {
    /**
     * Indicates if Oracle DB is running on the system
     * @type {boolean}
     * @memberof SystemProfileWorkloadsOracleDb
     */
    'is_running'?: boolean;
}
/**
 * Object containing information about RHEL AI
 * @export
 * @interface SystemProfileWorkloadsRhelAi
 */
export interface SystemProfileWorkloadsRhelAi {
    /**
     * RHEL AI VARIANT
     * @type {string}
     * @memberof SystemProfileWorkloadsRhelAi
     */
    'variant'?: string;
    /**
     * RHEL AI VERSION ID
     * @type {string}
     * @memberof SystemProfileWorkloadsRhelAi
     */
    'rhel_ai_version_id'?: string;
    /**
     * The list of GPU models on the host
     * @type {Array<SystemProfileWorkloadsRhelAiGpuModelsInner>}
     * @memberof SystemProfileWorkloadsRhelAi
     */
    'gpu_models'?: Array<SystemProfileWorkloadsRhelAiGpuModelsInner>;
    /**
     * The list of AI models available on the host
     * @type {Array<string>}
     * @memberof SystemProfileWorkloadsRhelAi
     */
    'ai_models'?: Array<string>;
    /**
     * The free storage available on the host
     * @type {string}
     * @memberof SystemProfileWorkloadsRhelAi
     */
    'free_disk_storage'?: string;
}
/**
 * Object containing data specific to a GPU model
 * @export
 * @interface SystemProfileWorkloadsRhelAiGpuModelsInner
 */
export interface SystemProfileWorkloadsRhelAiGpuModelsInner {
    /**
     * The name of GPU model
     * @type {string}
     * @memberof SystemProfileWorkloadsRhelAiGpuModelsInner
     */
    'name'?: string;
    /**
     * The vendor of GPU model
     * @type {string}
     * @memberof SystemProfileWorkloadsRhelAiGpuModelsInner
     */
    'vendor'?: string;
    /**
     * The memory of GPU model
     * @type {string}
     * @memberof SystemProfileWorkloadsRhelAiGpuModelsInner
     */
    'memory'?: string;
    /**
     * The count of this specific GPU model
     * @type {number}
     * @memberof SystemProfileWorkloadsRhelAiGpuModelsInner
     */
    'count'?: number;
}
/**
 * Representation of one yum repository
 * @export
 * @interface SystemProfileYumRepo
 */
export interface SystemProfileYumRepo {
    /**
     *
     * @type {string}
     * @memberof SystemProfileYumRepo
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof SystemProfileYumRepo
     */
    'name'?: string;
    /**
     *
     * @type {boolean}
     * @memberof SystemProfileYumRepo
     */
    'gpgcheck'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof SystemProfileYumRepo
     */
    'enabled'?: boolean;
    /**
     *
     * @type {string}
     * @memberof SystemProfileYumRepo
     */
    'base_url'?: string;
    /**
     * URL of a mirrorlist for the repository
     * @type {string}
     * @memberof SystemProfileYumRepo
     */
    'mirrorlist'?: string;
}
/**
 *
 * @export
 * @interface TagCountOut
 */
export interface TagCountOut {
    /**
     * The number of items on the current page
     * @type {number}
     * @memberof TagCountOut
     */
    'count': number;
    /**
     * The page number
     * @type {number}
     * @memberof TagCountOut
     */
    'page': number;
    /**
     * The number of items to return per page
     * @type {number}
     * @memberof TagCountOut
     */
    'per_page': number;
    /**
     * Total number of items
     * @type {number}
     * @memberof TagCountOut
     */
    'total': number;
    /**
     * The list of tags on the systems
     * @type {{ [key: string]: number; }}
     * @memberof TagCountOut
     */
    'results'?: { [key: string]: number; };
}
/**
 *
 * @export
 * @interface TagsOut
 */
export interface TagsOut {
    /**
     * The number of items on the current page
     * @type {number}
     * @memberof TagsOut
     */
    'count': number;
    /**
     * The page number
     * @type {number}
     * @memberof TagsOut
     */
    'page': number;
    /**
     * The number of items to return per page
     * @type {number}
     * @memberof TagsOut
     */
    'per_page': number;
    /**
     * Total number of items
     * @type {number}
     * @memberof TagsOut
     */
    'total': number;
    /**
     * The list of tags on the systems
     * @type {{ [key: string]: Array<StructuredTag>; }}
     * @memberof TagsOut
     */
    'results'?: { [key: string]: Array<StructuredTag>; };
}
