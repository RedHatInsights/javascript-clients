/**
 *
 * @export
 * @interface ControllersAdvisoriesDBLookup
 */
export interface ControllersAdvisoriesDBLookup {
    /**
     * Advisory type name, proper ordering ensured (unknown, unspecified, other, enhancement, bugfix, security)
     * @type {string}
     * @memberof ControllersAdvisoriesDBLookup
     */
    'advisory_type_name'?: string;
    /**
     *
     * @type {number}
     * @memberof ControllersAdvisoriesDBLookup
     */
    'applicable_systems'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersAdvisoriesDBLookup
     */
    'cve_count'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisoriesDBLookup
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisoriesDBLookup
     */
    'id'?: string;
    /**
     *
     * @type {number}
     * @memberof ControllersAdvisoriesDBLookup
     */
    'installable_systems'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisoriesDBLookup
     */
    'public_date'?: string;
    /**
     *
     * @type {boolean}
     * @memberof ControllersAdvisoriesDBLookup
     */
    'reboot_required'?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof ControllersAdvisoriesDBLookup
     */
    'release_versions'?: Array<string>;
    /**
     *
     * @type {number}
     * @memberof ControllersAdvisoriesDBLookup
     */
    'severity'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisoriesDBLookup
     */
    'synopsis'?: string;
}
/**
 *
 * @export
 * @interface ControllersAdvisoriesResponse
 */
export interface ControllersAdvisoriesResponse {
    /**
     *
     * @type {Array<ControllersAdvisoryItem>}
     * @memberof ControllersAdvisoriesResponse
     */
    'data'?: Array<ControllersAdvisoryItem>;
    /**
     *
     * @type {ControllersLinks}
     * @memberof ControllersAdvisoriesResponse
     */
    'links'?: ControllersLinks;
    /**
     *
     * @type {ControllersListMeta}
     * @memberof ControllersAdvisoriesResponse
     */
    'meta'?: ControllersListMeta;
}
/**
 *
 * @export
 * @interface ControllersAdvisoriesSystemsResponse
 */
export interface ControllersAdvisoriesSystemsResponse {
    /**
     *
     * @type {{ [key: string]: Array<string>; }}
     * @memberof ControllersAdvisoriesSystemsResponse
     */
    'data'?: { [key: string]: Array<string>; };
    /**
     *
     * @type {ControllersLinks}
     * @memberof ControllersAdvisoriesSystemsResponse
     */
    'links'?: ControllersLinks;
    /**
     *
     * @type {ControllersListMeta}
     * @memberof ControllersAdvisoriesSystemsResponse
     */
    'meta'?: ControllersListMeta;
}
/**
 *
 * @export
 * @interface ControllersAdvisoryDetailAttributes
 */
export interface ControllersAdvisoryDetailAttributes {
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisoryDetailAttributes
     */
    'advisory_type_name'?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ControllersAdvisoryDetailAttributes
     */
    'cves'?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisoryDetailAttributes
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisoryDetailAttributes
     */
    'fixes'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisoryDetailAttributes
     */
    'modified_date'?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ControllersAdvisoryDetailAttributes
     */
    'packages'?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisoryDetailAttributes
     */
    'public_date'?: string;
    /**
     *
     * @type {boolean}
     * @memberof ControllersAdvisoryDetailAttributes
     */
    'reboot_required'?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof ControllersAdvisoryDetailAttributes
     */
    'references'?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof ControllersAdvisoryDetailAttributes
     */
    'release_versions'?: Array<string>;
    /**
     *
     * @type {number}
     * @memberof ControllersAdvisoryDetailAttributes
     */
    'severity'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisoryDetailAttributes
     */
    'solution'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisoryDetailAttributes
     */
    'synopsis'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisoryDetailAttributes
     */
    'topic'?: string;
}
/**
 *
 * @export
 * @interface ControllersAdvisoryDetailItem
 */
export interface ControllersAdvisoryDetailItem {
    /**
     *
     * @type {ControllersAdvisoryDetailAttributes}
     * @memberof ControllersAdvisoryDetailItem
     */
    'attributes'?: ControllersAdvisoryDetailAttributes;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisoryDetailItem
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisoryDetailItem
     */
    'type'?: string;
}
/**
 *
 * @export
 * @interface ControllersAdvisoryDetailResponse
 */
export interface ControllersAdvisoryDetailResponse {
    /**
     *
     * @type {ControllersAdvisoryDetailItem}
     * @memberof ControllersAdvisoryDetailResponse
     */
    'data'?: ControllersAdvisoryDetailItem;
}
/**
 *
 * @export
 * @interface ControllersAdvisoryItem
 */
export interface ControllersAdvisoryItem {
    /**
     *
     * @type {ControllersAdvisoryItemAttributes}
     * @memberof ControllersAdvisoryItem
     */
    'attributes'?: ControllersAdvisoryItemAttributes;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisoryItem
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisoryItem
     */
    'type'?: string;
}
/**
 *
 * @export
 * @interface ControllersAdvisoryItemAttributes
 */
export interface ControllersAdvisoryItemAttributes {
    /**
     * Advisory type name, proper ordering ensured (unknown, unspecified, other, enhancement, bugfix, security)
     * @type {string}
     * @memberof ControllersAdvisoryItemAttributes
     */
    'advisory_type_name'?: string;
    /**
     *
     * @type {number}
     * @memberof ControllersAdvisoryItemAttributes
     */
    'applicable_systems'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersAdvisoryItemAttributes
     */
    'cve_count'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisoryItemAttributes
     */
    'description'?: string;
    /**
     *
     * @type {number}
     * @memberof ControllersAdvisoryItemAttributes
     */
    'installable_systems'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisoryItemAttributes
     */
    'public_date'?: string;
    /**
     *
     * @type {boolean}
     * @memberof ControllersAdvisoryItemAttributes
     */
    'reboot_required'?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof ControllersAdvisoryItemAttributes
     */
    'release_versions'?: Array<string>;
    /**
     *
     * @type {number}
     * @memberof ControllersAdvisoryItemAttributes
     */
    'severity'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisoryItemAttributes
     */
    'synopsis'?: string;
}
/**
 *
 * @export
 * @interface ControllersAdvisorySystemDBLookup
 */
export interface ControllersAdvisorySystemDBLookup {
    /**
     *
     * @type {number}
     * @memberof ControllersAdvisorySystemDBLookup
     */
    'baseline_id'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisorySystemDBLookup
     */
    'baseline_name'?: string;
    /**
     *
     * @type {boolean}
     * @memberof ControllersAdvisorySystemDBLookup
     */
    'built_pkgcache'?: boolean;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisorySystemDBLookup
     */
    'created'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisorySystemDBLookup
     */
    'culled_timestamp'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisorySystemDBLookup
     */
    'display_name'?: string;
    /**
     *
     * @type {Array<ControllersSystemGroup>}
     * @memberof ControllersAdvisorySystemDBLookup
     */
    'groups'?: Array<ControllersSystemGroup>;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisorySystemDBLookup
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisorySystemDBLookup
     */
    'last_upload'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisorySystemDBLookup
     */
    'os'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisorySystemDBLookup
     */
    'rhsm'?: string;
    /**
     *
     * @type {boolean}
     * @memberof ControllersAdvisorySystemDBLookup
     */
    'satellite_managed'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ControllersAdvisorySystemDBLookup
     */
    'stale'?: boolean;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisorySystemDBLookup
     */
    'stale_timestamp'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisorySystemDBLookup
     */
    'stale_warning_timestamp'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisorySystemDBLookup
     */
    'status'?: string;
    /**
     *
     * @type {Array<ControllersSystemTag>}
     * @memberof ControllersAdvisorySystemDBLookup
     */
    'tags'?: Array<ControllersSystemTag>;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisorySystemDBLookup
     */
    'template_name'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisorySystemDBLookup
     */
    'template_uuid'?: string;
}
/**
 *
 * @export
 * @interface ControllersAdvisorySystemItem
 */
export interface ControllersAdvisorySystemItem {
    /**
     *
     * @type {ControllersAdvisorySystemItemAttributes}
     * @memberof ControllersAdvisorySystemItem
     */
    'attributes'?: ControllersAdvisorySystemItemAttributes;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisorySystemItem
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisorySystemItem
     */
    'type'?: string;
}
/**
 *
 * @export
 * @interface ControllersAdvisorySystemItemAttributes
 */
export interface ControllersAdvisorySystemItemAttributes {
    /**
     *
     * @type {number}
     * @memberof ControllersAdvisorySystemItemAttributes
     */
    'baseline_id'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisorySystemItemAttributes
     */
    'baseline_name'?: string;
    /**
     *
     * @type {boolean}
     * @memberof ControllersAdvisorySystemItemAttributes
     */
    'built_pkgcache'?: boolean;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisorySystemItemAttributes
     */
    'created'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisorySystemItemAttributes
     */
    'culled_timestamp'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisorySystemItemAttributes
     */
    'display_name'?: string;
    /**
     *
     * @type {Array<ControllersSystemGroup>}
     * @memberof ControllersAdvisorySystemItemAttributes
     */
    'groups'?: Array<ControllersSystemGroup>;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisorySystemItemAttributes
     */
    'last_upload'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisorySystemItemAttributes
     */
    'os'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisorySystemItemAttributes
     */
    'rhsm'?: string;
    /**
     *
     * @type {boolean}
     * @memberof ControllersAdvisorySystemItemAttributes
     */
    'satellite_managed'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ControllersAdvisorySystemItemAttributes
     */
    'stale'?: boolean;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisorySystemItemAttributes
     */
    'stale_timestamp'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisorySystemItemAttributes
     */
    'stale_warning_timestamp'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisorySystemItemAttributes
     */
    'status'?: string;
    /**
     *
     * @type {Array<ControllersSystemTag>}
     * @memberof ControllersAdvisorySystemItemAttributes
     */
    'tags'?: Array<ControllersSystemTag>;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisorySystemItemAttributes
     */
    'template_name'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersAdvisorySystemItemAttributes
     */
    'template_uuid'?: string;
}
/**
 *
 * @export
 * @interface ControllersAdvisorySystemsResponse
 */
export interface ControllersAdvisorySystemsResponse {
    /**
     *
     * @type {Array<ControllersAdvisorySystemItem>}
     * @memberof ControllersAdvisorySystemsResponse
     */
    'data'?: Array<ControllersAdvisorySystemItem>;
    /**
     *
     * @type {ControllersLinks}
     * @memberof ControllersAdvisorySystemsResponse
     */
    'links'?: ControllersLinks;
    /**
     *
     * @type {ControllersListMeta}
     * @memberof ControllersAdvisorySystemsResponse
     */
    'meta'?: ControllersListMeta;
}
/**
 *
 * @export
 * @interface ControllersFilterData
 */
export interface ControllersFilterData {
    /**
     *
     * @type {string}
     * @memberof ControllersFilterData
     */
    'op'?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ControllersFilterData
     */
    'values'?: Array<string>;
}
/**
 *
 * @export
 * @interface ControllersIDPlain
 */
export interface ControllersIDPlain {
    /**
     *
     * @type {string}
     * @memberof ControllersIDPlain
     */
    'id'?: string;
}
/**
 *
 * @export
 * @interface ControllersIDSatelliteManaged
 */
export interface ControllersIDSatelliteManaged {
    /**
     *
     * @type {string}
     * @memberof ControllersIDSatelliteManaged
     */
    'id'?: string;
    /**
     *
     * @type {boolean}
     * @memberof ControllersIDSatelliteManaged
     */
    'satellite_managed'?: boolean;
}
/**
 *
 * @export
 * @interface ControllersIDStatus
 */
export interface ControllersIDStatus {
    /**
     *
     * @type {string}
     * @memberof ControllersIDStatus
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersIDStatus
     */
    'status'?: string;
}
/**
 *
 * @export
 * @interface ControllersIDsPlainResponse
 */
export interface ControllersIDsPlainResponse {
    /**
     *
     * @type {Array<ControllersIDPlain>}
     * @memberof ControllersIDsPlainResponse
     */
    'data'?: Array<ControllersIDPlain>;
    /**
     *
     * @type {Array<string>}
     * @memberof ControllersIDsPlainResponse
     */
    'ids'?: Array<string>;
}
/**
 *
 * @export
 * @interface ControllersIDsSatelliteManagedResponse
 */
export interface ControllersIDsSatelliteManagedResponse {
    /**
     *
     * @type {Array<ControllersIDSatelliteManaged>}
     * @memberof ControllersIDsSatelliteManagedResponse
     */
    'data'?: Array<ControllersIDSatelliteManaged>;
    /**
     *
     * @type {Array<string>}
     * @memberof ControllersIDsSatelliteManagedResponse
     */
    'ids'?: Array<string>;
}
/**
 *
 * @export
 * @interface ControllersIDsStatusResponse
 */
export interface ControllersIDsStatusResponse {
    /**
     *
     * @type {Array<ControllersIDStatus>}
     * @memberof ControllersIDsStatusResponse
     */
    'data'?: Array<ControllersIDStatus>;
    /**
     *
     * @type {Array<string>}
     * @memberof ControllersIDsStatusResponse
     */
    'ids'?: Array<string>;
}
/**
 *
 * @export
 * @interface ControllersLinks
 */
export interface ControllersLinks {
    /**
     *
     * @type {string}
     * @memberof ControllersLinks
     */
    'first'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersLinks
     */
    'last'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersLinks
     */
    'next'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersLinks
     */
    'previous'?: string;
}
/**
 *
 * @export
 * @interface ControllersListMeta
 */
export interface ControllersListMeta {
    /**
     * Used filters
     * @type {{ [key: string]: ControllersFilterData; }}
     * @memberof ControllersListMeta
     */
    'filter'?: { [key: string]: ControllersFilterData; };
    /**
     * Show whether customer has some registered systems
     * @type {boolean}
     * @memberof ControllersListMeta
     */
    'has_systems'?: boolean;
    /**
     * Used response limit (page size) - pagination
     * @type {number}
     * @memberof ControllersListMeta
     */
    'limit'?: number;
    /**
     * Used response offset - pagination
     * @type {number}
     * @memberof ControllersListMeta
     */
    'offset'?: number;
    /**
     * Used search terms
     * @type {string}
     * @memberof ControllersListMeta
     */
    'search'?: string;
    /**
     * Used sorting fields
     * @type {Array<string>}
     * @memberof ControllersListMeta
     */
    'sort'?: Array<string>;
    /**
     * Some subtotals used by some endpoints
     * @type {{ [key: string]: number; }}
     * @memberof ControllersListMeta
     */
    'subtotals'?: { [key: string]: number; };
    /**
     * Total items count to return
     * @type {number}
     * @memberof ControllersListMeta
     */
    'total_items'?: number;
}
/**
 *
 * @export
 * @interface ControllersPackageDetailAttributes
 */
export interface ControllersPackageDetailAttributes {
    /**
     *
     * @type {string}
     * @memberof ControllersPackageDetailAttributes
     */
    'advisory_id'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersPackageDetailAttributes
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersPackageDetailAttributes
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersPackageDetailAttributes
     */
    'summary'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersPackageDetailAttributes
     */
    'version'?: string;
}
/**
 *
 * @export
 * @interface ControllersPackageDetailItem
 */
export interface ControllersPackageDetailItem {
    /**
     *
     * @type {ControllersPackageDetailAttributes}
     * @memberof ControllersPackageDetailItem
     */
    'attributes'?: ControllersPackageDetailAttributes;
    /**
     *
     * @type {string}
     * @memberof ControllersPackageDetailItem
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersPackageDetailItem
     */
    'type'?: string;
}
/**
 *
 * @export
 * @interface ControllersPackageDetailResponse
 */
export interface ControllersPackageDetailResponse {
    /**
     *
     * @type {ControllersPackageDetailItem}
     * @memberof ControllersPackageDetailResponse
     */
    'data'?: ControllersPackageDetailItem;
}
/**
 *
 * @export
 * @interface ControllersPackageItem
 */
export interface ControllersPackageItem {
    /**
     *
     * @type {string}
     * @memberof ControllersPackageItem
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersPackageItem
     */
    'summary'?: string;
    /**
     *
     * @type {number}
     * @memberof ControllersPackageItem
     */
    'systems_applicable'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersPackageItem
     */
    'systems_installable'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersPackageItem
     */
    'systems_installed'?: number;
}
/**
 *
 * @export
 * @interface ControllersPackageSystemItem
 */
export interface ControllersPackageSystemItem {
    /**
     *
     * @type {string}
     * @memberof ControllersPackageSystemItem
     */
    'available_evra'?: string;
    /**
     *
     * @type {number}
     * @memberof ControllersPackageSystemItem
     */
    'baseline_id'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersPackageSystemItem
     */
    'baseline_name'?: string;
    /**
     *
     * @type {boolean}
     * @memberof ControllersPackageSystemItem
     */
    'baseline_uptodate'?: boolean;
    /**
     *
     * @type {string}
     * @memberof ControllersPackageSystemItem
     */
    'display_name'?: string;
    /**
     *
     * @type {Array<ControllersSystemGroup>}
     * @memberof ControllersPackageSystemItem
     */
    'groups'?: Array<ControllersSystemGroup>;
    /**
     *
     * @type {string}
     * @memberof ControllersPackageSystemItem
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersPackageSystemItem
     */
    'installed_evra'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersPackageSystemItem
     */
    'os'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersPackageSystemItem
     */
    'rhsm'?: string;
    /**
     *
     * @type {boolean}
     * @memberof ControllersPackageSystemItem
     */
    'satellite_managed'?: boolean;
    /**
     *
     * @type {Array<ControllersSystemTag>}
     * @memberof ControllersPackageSystemItem
     */
    'tags'?: Array<ControllersSystemTag>;
    /**
     *
     * @type {string}
     * @memberof ControllersPackageSystemItem
     */
    'template_name'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersPackageSystemItem
     */
    'template_uuid'?: string;
    /**
     *
     * @type {boolean}
     * @memberof ControllersPackageSystemItem
     */
    'updatable'?: boolean;
    /**
     *
     * @type {string}
     * @memberof ControllersPackageSystemItem
     */
    'update_status'?: string;
}
/**
 *
 * @export
 * @interface ControllersPackageSystemsResponse
 */
export interface ControllersPackageSystemsResponse {
    /**
     *
     * @type {Array<ControllersPackageSystemItem>}
     * @memberof ControllersPackageSystemsResponse
     */
    'data'?: Array<ControllersPackageSystemItem>;
    /**
     *
     * @type {ControllersLinks}
     * @memberof ControllersPackageSystemsResponse
     */
    'links'?: ControllersLinks;
    /**
     *
     * @type {ControllersListMeta}
     * @memberof ControllersPackageSystemsResponse
     */
    'meta'?: ControllersListMeta;
}
/**
 *
 * @export
 * @interface ControllersPackageVersionItem
 */
export interface ControllersPackageVersionItem {
    /**
     *
     * @type {string}
     * @memberof ControllersPackageVersionItem
     */
    'evra'?: string;
}
/**
 *
 * @export
 * @interface ControllersPackageVersionsResponse
 */
export interface ControllersPackageVersionsResponse {
    /**
     *
     * @type {Array<ControllersPackageVersionItem>}
     * @memberof ControllersPackageVersionsResponse
     */
    'data'?: Array<ControllersPackageVersionItem>;
    /**
     *
     * @type {ControllersLinks}
     * @memberof ControllersPackageVersionsResponse
     */
    'links'?: ControllersLinks;
    /**
     *
     * @type {ControllersListMeta}
     * @memberof ControllersPackageVersionsResponse
     */
    'meta'?: ControllersListMeta;
}
/**
 *
 * @export
 * @interface ControllersPackagesResponse
 */
export interface ControllersPackagesResponse {
    /**
     *
     * @type {Array<ControllersPackageItem>}
     * @memberof ControllersPackagesResponse
     */
    'data'?: Array<ControllersPackageItem>;
    /**
     *
     * @type {ControllersLinks}
     * @memberof ControllersPackagesResponse
     */
    'links'?: ControllersLinks;
    /**
     *
     * @type {ControllersListMeta}
     * @memberof ControllersPackagesResponse
     */
    'meta'?: ControllersListMeta;
}
/**
 *
 * @export
 * @interface ControllersSystemAdvisoriesDBLookup
 */
export interface ControllersSystemAdvisoriesDBLookup {
    /**
     * Advisory type name, proper ordering ensured (unknown, unspecified, other, enhancement, bugfix, security)
     * @type {string}
     * @memberof ControllersSystemAdvisoriesDBLookup
     */
    'advisory_type_name'?: string;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemAdvisoriesDBLookup
     */
    'cve_count'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemAdvisoriesDBLookup
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemAdvisoriesDBLookup
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemAdvisoriesDBLookup
     */
    'public_date'?: string;
    /**
     *
     * @type {boolean}
     * @memberof ControllersSystemAdvisoriesDBLookup
     */
    'reboot_required'?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof ControllersSystemAdvisoriesDBLookup
     */
    'release_versions'?: Array<string>;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemAdvisoriesDBLookup
     */
    'severity'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemAdvisoriesDBLookup
     */
    'status'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemAdvisoriesDBLookup
     */
    'synopsis'?: string;
}
/**
 *
 * @export
 * @interface ControllersSystemAdvisoriesResponse
 */
export interface ControllersSystemAdvisoriesResponse {
    /**
     * advisories items
     * @type {Array<ControllersSystemAdvisoryItem>}
     * @memberof ControllersSystemAdvisoriesResponse
     */
    'data'?: Array<ControllersSystemAdvisoryItem>;
    /**
     *
     * @type {ControllersLinks}
     * @memberof ControllersSystemAdvisoriesResponse
     */
    'links'?: ControllersLinks;
    /**
     *
     * @type {ControllersListMeta}
     * @memberof ControllersSystemAdvisoriesResponse
     */
    'meta'?: ControllersListMeta;
}
/**
 *
 * @export
 * @interface ControllersSystemAdvisoryItem
 */
export interface ControllersSystemAdvisoryItem {
    /**
     *
     * @type {ControllersSystemAdvisoryItemAttributes}
     * @memberof ControllersSystemAdvisoryItem
     */
    'attributes'?: ControllersSystemAdvisoryItemAttributes;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemAdvisoryItem
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemAdvisoryItem
     */
    'type'?: string;
}
/**
 *
 * @export
 * @interface ControllersSystemAdvisoryItemAttributes
 */
export interface ControllersSystemAdvisoryItemAttributes {
    /**
     * Advisory type name, proper ordering ensured (unknown, unspecified, other, enhancement, bugfix, security)
     * @type {string}
     * @memberof ControllersSystemAdvisoryItemAttributes
     */
    'advisory_type_name'?: string;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemAdvisoryItemAttributes
     */
    'cve_count'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemAdvisoryItemAttributes
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemAdvisoryItemAttributes
     */
    'public_date'?: string;
    /**
     *
     * @type {boolean}
     * @memberof ControllersSystemAdvisoryItemAttributes
     */
    'reboot_required'?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof ControllersSystemAdvisoryItemAttributes
     */
    'release_versions'?: Array<string>;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemAdvisoryItemAttributes
     */
    'severity'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemAdvisoryItemAttributes
     */
    'status'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemAdvisoryItemAttributes
     */
    'synopsis'?: string;
}
/**
 *
 * @export
 * @interface ControllersSystemDBLookup
 */
export interface ControllersSystemDBLookup {
    /**
     *
     * @type {number}
     * @memberof ControllersSystemDBLookup
     */
    'applicable_other_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemDBLookup
     */
    'applicable_rhba_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemDBLookup
     */
    'applicable_rhea_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemDBLookup
     */
    'applicable_rhsa_count'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemDBLookup
     */
    'arch'?: string;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemDBLookup
     */
    'baseline_id'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemDBLookup
     */
    'baseline_name'?: string;
    /**
     *
     * @type {boolean}
     * @memberof ControllersSystemDBLookup
     */
    'built_pkgcache'?: boolean;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemDBLookup
     */
    'created'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemDBLookup
     */
    'culled_timestamp'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemDBLookup
     */
    'display_name'?: string;
    /**
     *
     * @type {Array<ControllersSystemGroup>}
     * @memberof ControllersSystemDBLookup
     */
    'groups'?: Array<ControllersSystemGroup>;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemDBLookup
     */
    'id'?: string;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemDBLookup
     */
    'installable_other_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemDBLookup
     */
    'installable_rhba_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemDBLookup
     */
    'installable_rhea_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemDBLookup
     */
    'installable_rhsa_count'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemDBLookup
     */
    'last_evaluation'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemDBLookup
     */
    'last_upload'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemDBLookup
     */
    'os'?: string;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemDBLookup
     */
    'other_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemDBLookup
     */
    'packages_applicable'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemDBLookup
     */
    'packages_installable'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemDBLookup
     */
    'packages_installed'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemDBLookup
     */
    'rhba_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemDBLookup
     */
    'rhea_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemDBLookup
     */
    'rhsa_count'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemDBLookup
     */
    'rhsm'?: string;
    /**
     *
     * @type {boolean}
     * @memberof ControllersSystemDBLookup
     */
    'satellite_managed'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ControllersSystemDBLookup
     */
    'stale'?: boolean;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemDBLookup
     */
    'stale_timestamp'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemDBLookup
     */
    'stale_warning_timestamp'?: string;
    /**
     *
     * @type {Array<ControllersSystemTag>}
     * @memberof ControllersSystemDBLookup
     */
    'tags'?: Array<ControllersSystemTag>;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemDBLookup
     */
    'template_name'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemDBLookup
     */
    'template_uuid'?: string;
}
/**
 *
 * @export
 * @interface ControllersSystemDetailResponse
 */
export interface ControllersSystemDetailResponse {
    /**
     *
     * @type {ControllersSystemItemExtended}
     * @memberof ControllersSystemDetailResponse
     */
    'data'?: ControllersSystemItemExtended;
}
/**
 *
 * @export
 * @interface ControllersSystemGroup
 */
export interface ControllersSystemGroup {
    /**
     *
     * @type {string}
     * @memberof ControllersSystemGroup
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemGroup
     */
    'name'?: string;
}
/**
 *
 * @export
 * @interface ControllersSystemItem
 */
export interface ControllersSystemItem {
    /**
     *
     * @type {ControllersSystemItemAttributes}
     * @memberof ControllersSystemItem
     */
    'attributes'?: ControllersSystemItemAttributes;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItem
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItem
     */
    'type'?: string;
}
/**
 *
 * @export
 * @interface ControllersSystemItemAttributes
 */
export interface ControllersSystemItemAttributes {
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributes
     */
    'applicable_other_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributes
     */
    'applicable_rhba_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributes
     */
    'applicable_rhea_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributes
     */
    'applicable_rhsa_count'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributes
     */
    'arch'?: string;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributes
     */
    'baseline_id'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributes
     */
    'baseline_name'?: string;
    /**
     *
     * @type {boolean}
     * @memberof ControllersSystemItemAttributes
     */
    'built_pkgcache'?: boolean;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributes
     */
    'created'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributes
     */
    'culled_timestamp'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributes
     */
    'display_name'?: string;
    /**
     *
     * @type {Array<ControllersSystemGroup>}
     * @memberof ControllersSystemItemAttributes
     */
    'groups'?: Array<ControllersSystemGroup>;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributes
     */
    'installable_other_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributes
     */
    'installable_rhba_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributes
     */
    'installable_rhea_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributes
     */
    'installable_rhsa_count'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributes
     */
    'last_evaluation'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributes
     */
    'last_upload'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributes
     */
    'os'?: string;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributes
     */
    'other_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributes
     */
    'packages_applicable'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributes
     */
    'packages_installable'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributes
     */
    'packages_installed'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributes
     */
    'rhba_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributes
     */
    'rhea_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributes
     */
    'rhsa_count'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributes
     */
    'rhsm'?: string;
    /**
     *
     * @type {boolean}
     * @memberof ControllersSystemItemAttributes
     */
    'satellite_managed'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ControllersSystemItemAttributes
     */
    'stale'?: boolean;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributes
     */
    'stale_timestamp'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributes
     */
    'stale_warning_timestamp'?: string;
    /**
     *
     * @type {Array<ControllersSystemTag>}
     * @memberof ControllersSystemItemAttributes
     */
    'tags'?: Array<ControllersSystemTag>;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributes
     */
    'template_name'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributes
     */
    'template_uuid'?: string;
}
/**
 *
 * @export
 * @interface ControllersSystemItemAttributesExtended
 */
export interface ControllersSystemItemAttributesExtended {
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'applicable_other_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'applicable_rhba_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'applicable_rhea_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'applicable_rhsa_count'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'arch'?: string;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'baseline_id'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'baseline_name'?: string;
    /**
     *
     * @type {boolean}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'baseline_uptodate'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'built_pkgcache'?: boolean;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'created'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'culled_timestamp'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'display_name'?: string;
    /**
     *
     * @type {Array<ControllersSystemGroup>}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'groups'?: Array<ControllersSystemGroup>;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'insights_id'?: string;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'installable_other_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'installable_rhba_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'installable_rhea_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'installable_rhsa_count'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'last_evaluation'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'last_upload'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'os'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'os_major'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'os_minor'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'os_name'?: string;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'other_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'packages_applicable'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'packages_installable'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'packages_installed'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'packages_updatable'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'rhba_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'rhea_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'rhsa_count'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'rhsm'?: string;
    /**
     *
     * @type {boolean}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'satellite_managed'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'stale'?: boolean;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'stale_timestamp'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'stale_warning_timestamp'?: string;
    /**
     *
     * @type {Array<ControllersSystemTag>}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'tags'?: Array<ControllersSystemTag>;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'template_name'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'template_uuid'?: string;
    /**
     *
     * @type {boolean}
     * @memberof ControllersSystemItemAttributesExtended
     */
    'third_party'?: boolean;
}
/**
 *
 * @export
 * @interface ControllersSystemItemExtended
 */
export interface ControllersSystemItemExtended {
    /**
     *
     * @type {ControllersSystemItemAttributesExtended}
     * @memberof ControllersSystemItemExtended
     */
    'attributes'?: ControllersSystemItemAttributesExtended;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemExtended
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemItemExtended
     */
    'type'?: string;
}
/**
 *
 * @export
 * @interface ControllersSystemPackageData
 */
export interface ControllersSystemPackageData {
    /**
     *
     * @type {string}
     * @memberof ControllersSystemPackageData
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemPackageData
     */
    'evra'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemPackageData
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemPackageData
     */
    'summary'?: string;
    /**
     *
     * @type {boolean}
     * @memberof ControllersSystemPackageData
     */
    'updatable'?: boolean;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemPackageData
     */
    'update_status'?: string;
    /**
     *
     * @type {Array<ModelsPackageUpdate>}
     * @memberof ControllersSystemPackageData
     */
    'updates'?: Array<ModelsPackageUpdate>;
}
/**
 *
 * @export
 * @interface ControllersSystemPackageInline
 */
export interface ControllersSystemPackageInline {
    /**
     *
     * @type {string}
     * @memberof ControllersSystemPackageInline
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemPackageInline
     */
    'evra'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemPackageInline
     */
    'latest_applicable'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemPackageInline
     */
    'latest_installable'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemPackageInline
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemPackageInline
     */
    'summary'?: string;
    /**
     *
     * @type {boolean}
     * @memberof ControllersSystemPackageInline
     */
    'updatable'?: boolean;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemPackageInline
     */
    'update_status'?: string;
}
/**
 *
 * @export
 * @interface ControllersSystemPackageResponse
 */
export interface ControllersSystemPackageResponse {
    /**
     *
     * @type {Array<ControllersSystemPackageData>}
     * @memberof ControllersSystemPackageResponse
     */
    'data'?: Array<ControllersSystemPackageData>;
    /**
     *
     * @type {ControllersLinks}
     * @memberof ControllersSystemPackageResponse
     */
    'links'?: ControllersLinks;
    /**
     *
     * @type {ControllersListMeta}
     * @memberof ControllersSystemPackageResponse
     */
    'meta'?: ControllersListMeta;
}
/**
 *
 * @export
 * @interface ControllersSystemTag
 */
export interface ControllersSystemTag {
    /**
     *
     * @type {string}
     * @memberof ControllersSystemTag
     */
    'key'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemTag
     */
    'namespace'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersSystemTag
     */
    'value'?: string;
}
/**
 *
 * @export
 * @interface ControllersSystemTagItem
 */
export interface ControllersSystemTagItem {
    /**
     *
     * @type {number}
     * @memberof ControllersSystemTagItem
     */
    'count'?: number;
    /**
     *
     * @type {ControllersSystemTag}
     * @memberof ControllersSystemTagItem
     */
    'tag'?: ControllersSystemTag;
}
/**
 *
 * @export
 * @interface ControllersSystemTagsResponse
 */
export interface ControllersSystemTagsResponse {
    /**
     *
     * @type {Array<ControllersSystemTagItem>}
     * @memberof ControllersSystemTagsResponse
     */
    'data'?: Array<ControllersSystemTagItem>;
    /**
     *
     * @type {ControllersLinks}
     * @memberof ControllersSystemTagsResponse
     */
    'links'?: ControllersLinks;
    /**
     *
     * @type {ControllersListMeta}
     * @memberof ControllersSystemTagsResponse
     */
    'meta'?: ControllersListMeta;
}
/**
 *
 * @export
 * @interface ControllersSystemVmaasJSONResponse
 */
export interface ControllersSystemVmaasJSONResponse {
    /**
     *
     * @type {VmaasUpdatesV3Request}
     * @memberof ControllersSystemVmaasJSONResponse
     */
    'data'?: VmaasUpdatesV3Request;
}
/**
 *
 * @export
 * @interface ControllersSystemYumUpdatesResponse
 */
export interface ControllersSystemYumUpdatesResponse {
    /**
     *
     * @type {VmaasUpdatesV3Response}
     * @memberof ControllersSystemYumUpdatesResponse
     */
    'data'?: VmaasUpdatesV3Response;
}
/**
 *
 * @export
 * @interface ControllersSystemsAdvisoriesRequest
 */
export interface ControllersSystemsAdvisoriesRequest {
    /**
     *
     * @type {Array<string>}
     * @memberof ControllersSystemsAdvisoriesRequest
     */
    'advisories'?: Array<string>;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemsAdvisoriesRequest
     */
    'limit'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersSystemsAdvisoriesRequest
     */
    'offset'?: number;
    /**
     *
     * @type {Array<string>}
     * @memberof ControllersSystemsAdvisoriesRequest
     */
    'systems'?: Array<string>;
}
/**
 *
 * @export
 * @interface ControllersSystemsAdvisoriesResponse
 */
export interface ControllersSystemsAdvisoriesResponse {
    /**
     *
     * @type {{ [key: string]: Array<string>; }}
     * @memberof ControllersSystemsAdvisoriesResponse
     */
    'data'?: { [key: string]: Array<string>; };
    /**
     *
     * @type {ControllersLinks}
     * @memberof ControllersSystemsAdvisoriesResponse
     */
    'links'?: ControllersLinks;
    /**
     *
     * @type {ControllersListMeta}
     * @memberof ControllersSystemsAdvisoriesResponse
     */
    'meta'?: ControllersListMeta;
}
/**
 *
 * @export
 * @interface ControllersSystemsResponse
 */
export interface ControllersSystemsResponse {
    /**
     *
     * @type {Array<ControllersSystemItem>}
     * @memberof ControllersSystemsResponse
     */
    'data'?: Array<ControllersSystemItem>;
    /**
     *
     * @type {ControllersLinks}
     * @memberof ControllersSystemsResponse
     */
    'links'?: ControllersLinks;
    /**
     *
     * @type {ControllersListMeta}
     * @memberof ControllersSystemsResponse
     */
    'meta'?: ControllersListMeta;
}
/**
 *
 * @export
 * @interface ControllersTemplateItem
 */
export interface ControllersTemplateItem {
    /**
     *
     * @type {ControllersTemplateItemAttributes}
     * @memberof ControllersTemplateItem
     */
    'attributes'?: ControllersTemplateItemAttributes;
    /**
     * Unique template id
     * @type {string}
     * @memberof ControllersTemplateItem
     */
    'id'?: string;
    /**
     * Document type name
     * @type {string}
     * @memberof ControllersTemplateItem
     */
    'type'?: string;
}
/**
 *
 * @export
 * @interface ControllersTemplateItemAttributes
 */
export interface ControllersTemplateItemAttributes {
    /**
     *
     * @type {string}
     * @memberof ControllersTemplateItemAttributes
     */
    'creator'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersTemplateItemAttributes
     */
    'last_edited'?: string;
    /**
     * Template name
     * @type {string}
     * @memberof ControllersTemplateItemAttributes
     */
    'name'?: string;
    /**
     * Created and updated dates
     * @type {string}
     * @memberof ControllersTemplateItemAttributes
     */
    'published'?: string;
    /**
     * Count of the systems associated with the template
     * @type {number}
     * @memberof ControllersTemplateItemAttributes
     */
    'systems'?: number;
}
/**
 *
 * @export
 * @interface ControllersTemplateSystemAttributes
 */
export interface ControllersTemplateSystemAttributes {
    /**
     *
     * @type {number}
     * @memberof ControllersTemplateSystemAttributes
     */
    'applicable_other_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersTemplateSystemAttributes
     */
    'applicable_rhba_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersTemplateSystemAttributes
     */
    'applicable_rhea_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersTemplateSystemAttributes
     */
    'applicable_rhsa_count'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersTemplateSystemAttributes
     */
    'display_name'?: string;
    /**
     *
     * @type {Array<ControllersSystemGroup>}
     * @memberof ControllersTemplateSystemAttributes
     */
    'groups'?: Array<ControllersSystemGroup>;
    /**
     *
     * @type {number}
     * @memberof ControllersTemplateSystemAttributes
     */
    'installable_other_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersTemplateSystemAttributes
     */
    'installable_rhba_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersTemplateSystemAttributes
     */
    'installable_rhea_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersTemplateSystemAttributes
     */
    'installable_rhsa_count'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersTemplateSystemAttributes
     */
    'last_upload'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersTemplateSystemAttributes
     */
    'os'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersTemplateSystemAttributes
     */
    'rhsm'?: string;
    /**
     *
     * @type {Array<ControllersSystemTag>}
     * @memberof ControllersTemplateSystemAttributes
     */
    'tags'?: Array<ControllersSystemTag>;
}
/**
 *
 * @export
 * @interface ControllersTemplateSystemItem
 */
export interface ControllersTemplateSystemItem {
    /**
     *
     * @type {ControllersTemplateSystemAttributes}
     * @memberof ControllersTemplateSystemItem
     */
    'attributes'?: ControllersTemplateSystemAttributes;
    /**
     * Template system inventory ID (uuid format)
     * @type {string}
     * @memberof ControllersTemplateSystemItem
     */
    'inventory_id'?: string;
    /**
     * Document type name
     * @type {string}
     * @memberof ControllersTemplateSystemItem
     */
    'type'?: string;
}
/**
 *
 * @export
 * @interface ControllersTemplateSystemsDBLookup
 */
export interface ControllersTemplateSystemsDBLookup {
    /**
     *
     * @type {number}
     * @memberof ControllersTemplateSystemsDBLookup
     */
    'applicable_other_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersTemplateSystemsDBLookup
     */
    'applicable_rhba_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersTemplateSystemsDBLookup
     */
    'applicable_rhea_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersTemplateSystemsDBLookup
     */
    'applicable_rhsa_count'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersTemplateSystemsDBLookup
     */
    'display_name'?: string;
    /**
     *
     * @type {Array<ControllersSystemGroup>}
     * @memberof ControllersTemplateSystemsDBLookup
     */
    'groups'?: Array<ControllersSystemGroup>;
    /**
     *
     * @type {string}
     * @memberof ControllersTemplateSystemsDBLookup
     */
    'id'?: string;
    /**
     *
     * @type {number}
     * @memberof ControllersTemplateSystemsDBLookup
     */
    'installable_other_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersTemplateSystemsDBLookup
     */
    'installable_rhba_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersTemplateSystemsDBLookup
     */
    'installable_rhea_count'?: number;
    /**
     *
     * @type {number}
     * @memberof ControllersTemplateSystemsDBLookup
     */
    'installable_rhsa_count'?: number;
    /**
     *
     * @type {string}
     * @memberof ControllersTemplateSystemsDBLookup
     */
    'last_upload'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersTemplateSystemsDBLookup
     */
    'os'?: string;
    /**
     *
     * @type {string}
     * @memberof ControllersTemplateSystemsDBLookup
     */
    'rhsm'?: string;
    /**
     *
     * @type {Array<ControllersSystemTag>}
     * @memberof ControllersTemplateSystemsDBLookup
     */
    'tags'?: Array<ControllersSystemTag>;
}
/**
 *
 * @export
 * @interface ControllersTemplateSystemsResponse
 */
export interface ControllersTemplateSystemsResponse {
    /**
     *
     * @type {Array<ControllersTemplateSystemItem>}
     * @memberof ControllersTemplateSystemsResponse
     */
    'data'?: Array<ControllersTemplateSystemItem>;
    /**
     *
     * @type {ControllersLinks}
     * @memberof ControllersTemplateSystemsResponse
     */
    'links'?: ControllersLinks;
    /**
     *
     * @type {ControllersListMeta}
     * @memberof ControllersTemplateSystemsResponse
     */
    'meta'?: ControllersListMeta;
}
/**
 *
 * @export
 * @interface ControllersTemplateSystemsUpdateRequest
 */
export interface ControllersTemplateSystemsUpdateRequest {
    /**
     * List of inventory IDs to have templates removed
     * @type {Array<string>}
     * @memberof ControllersTemplateSystemsUpdateRequest
     */
    'systems'?: Array<string>;
}
/**
 *
 * @export
 * @interface ControllersTemplatesMeta
 */
export interface ControllersTemplatesMeta {
    /**
     *
     * @type {Array<string>}
     * @memberof ControllersTemplatesMeta
     */
    'creators'?: Array<string>;
    /**
     * Used filters
     * @type {{ [key: string]: ControllersFilterData; }}
     * @memberof ControllersTemplatesMeta
     */
    'filter'?: { [key: string]: ControllersFilterData; };
    /**
     * Show whether customer has some registered systems
     * @type {boolean}
     * @memberof ControllersTemplatesMeta
     */
    'has_systems'?: boolean;
    /**
     * Used response limit (page size) - pagination
     * @type {number}
     * @memberof ControllersTemplatesMeta
     */
    'limit'?: number;
    /**
     * Used response offset - pagination
     * @type {number}
     * @memberof ControllersTemplatesMeta
     */
    'offset'?: number;
    /**
     * Used search terms
     * @type {string}
     * @memberof ControllersTemplatesMeta
     */
    'search'?: string;
    /**
     * Used sorting fields
     * @type {Array<string>}
     * @memberof ControllersTemplatesMeta
     */
    'sort'?: Array<string>;
    /**
     * Some subtotals used by some endpoints
     * @type {{ [key: string]: number; }}
     * @memberof ControllersTemplatesMeta
     */
    'subtotals'?: { [key: string]: number; };
    /**
     * Total items count to return
     * @type {number}
     * @memberof ControllersTemplatesMeta
     */
    'total_items'?: number;
}
/**
 *
 * @export
 * @interface ControllersTemplatesResponse
 */
export interface ControllersTemplatesResponse {
    /**
     * Template items
     * @type {Array<ControllersTemplateItem>}
     * @memberof ControllersTemplatesResponse
     */
    'data'?: Array<ControllersTemplateItem>;
    /**
     *
     * @type {ControllersLinks}
     * @memberof ControllersTemplatesResponse
     */
    'links'?: ControllersLinks;
    /**
     *
     * @type {ControllersTemplatesMeta}
     * @memberof ControllersTemplatesResponse
     */
    'meta'?: ControllersTemplatesMeta;
}
/**
 *
 * @export
 * @interface ModelsPackageUpdate
 */
export interface ModelsPackageUpdate {
    /**
     *
     * @type {string}
     * @memberof ModelsPackageUpdate
     */
    'evra'?: string;
    /**
     *
     * @type {string}
     * @memberof ModelsPackageUpdate
     */
    'status'?: string;
}
/**
 *
 * @export
 * @interface UtilsErrorResponse
 */
export interface UtilsErrorResponse {
    /**
     *
     * @type {string}
     * @memberof UtilsErrorResponse
     */
    'error'?: string;
}
/**
 *
 * @export
 * @interface VmaasUpdatesV3Request
 */
export interface VmaasUpdatesV3Request {
    /**
     *
     * @type {string}
     * @memberof VmaasUpdatesV3Request
     */
    'basearch'?: string;
    /**
     * VMaaS will check package_list and return error if we provide package_list without epochs
     * @type {boolean}
     * @memberof VmaasUpdatesV3Request
     */
    'epoch_required'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof VmaasUpdatesV3Request
     */
    'latest_only'?: boolean;
    /**
     *
     * @type {Array<VmaasUpdatesV3RequestModulesList>}
     * @memberof VmaasUpdatesV3Request
     */
    'modules_list'?: Array<VmaasUpdatesV3RequestModulesList>;
    /**
     * Search for updates of unknown package EVRAs.
     * @type {boolean}
     * @memberof VmaasUpdatesV3Request
     */
    'optimistic_updates'?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof VmaasUpdatesV3Request
     */
    'package_list'?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof VmaasUpdatesV3Request
     */
    'releasever'?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof VmaasUpdatesV3Request
     */
    'repository_list'?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof VmaasUpdatesV3Request
     */
    'repository_paths'?: Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof VmaasUpdatesV3Request
     */
    'security_only'?: boolean;
    /**
     * Include content from \\\"third party\\\" repositories into the response, disabled by default.
     * @type {boolean}
     * @memberof VmaasUpdatesV3Request
     */
    'third_party'?: boolean;
}
/**
 *
 * @export
 * @interface VmaasUpdatesV3RequestModulesList
 */
export interface VmaasUpdatesV3RequestModulesList {
    /**
     *
     * @type {string}
     * @memberof VmaasUpdatesV3RequestModulesList
     */
    'module_name'?: string;
    /**
     *
     * @type {string}
     * @memberof VmaasUpdatesV3RequestModulesList
     */
    'module_stream'?: string;
}
/**
 *
 * @export
 * @interface VmaasUpdatesV3Response
 */
export interface VmaasUpdatesV3Response {
    /**
     *
     * @type {string}
     * @memberof VmaasUpdatesV3Response
     */
    'basearch'?: string;
    /**
     *
     * @type {boolean}
     * @memberof VmaasUpdatesV3Response
     */
    'build_pkgcache'?: boolean;
    /**
     *
     * @type {string}
     * @memberof VmaasUpdatesV3Response
     */
    'last_change'?: string;
    /**
     *
     * @type {Array<VmaasUpdatesV3RequestModulesList>}
     * @memberof VmaasUpdatesV3Response
     */
    'modules_list'?: Array<VmaasUpdatesV3RequestModulesList>;
    /**
     *
     * @type {string}
     * @memberof VmaasUpdatesV3Response
     */
    'releasever'?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof VmaasUpdatesV3Response
     */
    'repository_list'?: Array<string>;
    /**
     *
     * @type {{ [key: string]: VmaasUpdatesV3ResponseUpdateList; }}
     * @memberof VmaasUpdatesV3Response
     */
    'update_list'?: { [key: string]: VmaasUpdatesV3ResponseUpdateList; };
}
/**
 *
 * @export
 * @interface VmaasUpdatesV3ResponseAvailableUpdates
 */
export interface VmaasUpdatesV3ResponseAvailableUpdates {
    /**
     *
     * @type {string}
     * @memberof VmaasUpdatesV3ResponseAvailableUpdates
     */
    'basearch'?: string;
    /**
     *
     * @type {string}
     * @memberof VmaasUpdatesV3ResponseAvailableUpdates
     */
    'erratum'?: string;
    /**
     *
     * @type {string}
     * @memberof VmaasUpdatesV3ResponseAvailableUpdates
     */
    'evra'?: string;
    /**
     *
     * @type {string}
     * @memberof VmaasUpdatesV3ResponseAvailableUpdates
     */
    'package'?: string;
    /**
     *
     * @type {string}
     * @memberof VmaasUpdatesV3ResponseAvailableUpdates
     */
    'package_name'?: string;
    /**
     *
     * @type {string}
     * @memberof VmaasUpdatesV3ResponseAvailableUpdates
     */
    'releasever'?: string;
    /**
     *
     * @type {string}
     * @memberof VmaasUpdatesV3ResponseAvailableUpdates
     */
    'repository'?: string;
}
/**
 *
 * @export
 * @interface VmaasUpdatesV3ResponseUpdateList
 */
export interface VmaasUpdatesV3ResponseUpdateList {
    /**
     *
     * @type {Array<VmaasUpdatesV3ResponseAvailableUpdates>}
     * @memberof VmaasUpdatesV3ResponseUpdateList
     */
    'available_updates'?: Array<VmaasUpdatesV3ResponseAvailableUpdates>;
}
