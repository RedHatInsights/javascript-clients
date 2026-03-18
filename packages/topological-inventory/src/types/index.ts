/**
 *
 * @export
 * @interface AppliedInventoriesForServiceOffering200Response
 */
export interface AppliedInventoriesForServiceOffering200Response {
    /**
     *
     * @type {string}
     * @memberof AppliedInventoriesForServiceOffering200Response
     */
    'task_id'?: string;
}
/**
 *
 * @export
 * @interface AppliedInventoriesParametersServicePlan
 */
export interface AppliedInventoriesParametersServicePlan {
    /**
     * The provider specific parameters needed to compute list of used service inventories
     * @type {object}
     * @memberof AppliedInventoriesParametersServicePlan
     */
    'service_parameters'?: object;
}
/**
 *
 * @export
 * @interface AvailabilitiesCollection
 */
export interface AvailabilitiesCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof AvailabilitiesCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof AvailabilitiesCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<Availability>}
     * @memberof AvailabilitiesCollection
     */
    'data'?: Array<Availability>;
}
/**
 *
 * @export
 * @interface Availability
 */
export interface Availability {
    /**
     *
     * @type {string}
     * @memberof Availability
     */
    'action'?: string;
    /**
     *
     * @type {string}
     * @memberof Availability
     */
    'availability'?: string;
    /**
     *
     * @type {string}
     * @memberof Availability
     */
    'created_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Availability
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Availability
     */
    'identifier'?: string;
    /**
     *
     * @type {string}
     * @memberof Availability
     */
    'last_checked_at'?: string;
    /**
     *
     * @type {string}
     * @memberof Availability
     */
    'last_valid_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Availability
     */
    'resource_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Availability
     */
    'resource_type'?: string;
    /**
     *
     * @type {string}
     * @memberof Availability
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface Cluster
 */
export interface Cluster {
    /**
     *
     * @type {string}
     * @memberof Cluster
     */
    'archived_at'?: string;
    /**
     *
     * @type {string}
     * @memberof Cluster
     */
    'created_at'?: string;
    /**
     *
     * @type {object}
     * @memberof Cluster
     */
    'extra'?: object;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Cluster
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Cluster
     */
    'last_seen_at'?: string;
    /**
     *
     * @type {string}
     * @memberof Cluster
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof Cluster
     */
    'source_created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof Cluster
     */
    'source_deleted_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Cluster
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Cluster
     */
    'source_ref'?: string;
    /**
     *
     * @type {string}
     * @memberof Cluster
     */
    'uid_ems'?: string;
    /**
     *
     * @type {string}
     * @memberof Cluster
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface ClustersCollection
 */
export interface ClustersCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof ClustersCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof ClustersCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<Cluster>}
     * @memberof ClustersCollection
     */
    'data'?: Array<Cluster>;
}
/**
 *
 * @export
 * @interface CollectionLinks
 */
export interface CollectionLinks {
    /**
     *
     * @type {string}
     * @memberof CollectionLinks
     */
    'first'?: string;
    /**
     *
     * @type {string}
     * @memberof CollectionLinks
     */
    'last'?: string;
    /**
     *
     * @type {string}
     * @memberof CollectionLinks
     */
    'next'?: string;
    /**
     *
     * @type {string}
     * @memberof CollectionLinks
     */
    'prev'?: string;
}
/**
 *
 * @export
 * @interface CollectionMetadata
 */
export interface CollectionMetadata {
    /**
     *
     * @type {number}
     * @memberof CollectionMetadata
     */
    'count'?: number;
    /**
     *
     * @type {number}
     * @memberof CollectionMetadata
     */
    'limit'?: number;
    /**
     *
     * @type {number}
     * @memberof CollectionMetadata
     */
    'offset'?: number;
}
/**
 *
 * @export
 * @interface Container
 */
export interface Container {
    /**
     *
     * @type {string}
     * @memberof Container
     */
    'archived_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Container
     */
    'container_group_id'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Container
     */
    'container_image_id'?: string;
    /**
     *
     * @type {number}
     * @memberof Container
     */
    'cpu_limit'?: number;
    /**
     *
     * @type {number}
     * @memberof Container
     */
    'cpu_request'?: number;
    /**
     *
     * @type {string}
     * @memberof Container
     */
    'created_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Container
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Container
     */
    'last_seen_at'?: string;
    /**
     *
     * @type {number}
     * @memberof Container
     */
    'memory_limit'?: number;
    /**
     *
     * @type {number}
     * @memberof Container
     */
    'memory_request'?: number;
    /**
     *
     * @type {string}
     * @memberof Container
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof Container
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface ContainerGroup
 */
export interface ContainerGroup {
    /**
     *
     * @type {string}
     * @memberof ContainerGroup
     */
    'archived_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ContainerGroup
     */
    'container_node_id'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ContainerGroup
     */
    'container_project_id'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerGroup
     */
    'created_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ContainerGroup
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerGroup
     */
    'ipaddress'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerGroup
     */
    'last_seen_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerGroup
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerGroup
     */
    'resource_version'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerGroup
     */
    'source_created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerGroup
     */
    'source_deleted_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ContainerGroup
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerGroup
     */
    'source_ref'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerGroup
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface ContainerGroupsCollection
 */
export interface ContainerGroupsCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof ContainerGroupsCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof ContainerGroupsCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<ContainerGroup>}
     * @memberof ContainerGroupsCollection
     */
    'data'?: Array<ContainerGroup>;
}
/**
 *
 * @export
 * @interface ContainerImage
 */
export interface ContainerImage {
    /**
     *
     * @type {string}
     * @memberof ContainerImage
     */
    'archived_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerImage
     */
    'created_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ContainerImage
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerImage
     */
    'last_seen_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerImage
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerImage
     */
    'resource_version'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerImage
     */
    'source_created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerImage
     */
    'source_deleted_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ContainerImage
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerImage
     */
    'source_ref'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerImage
     */
    'tag'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerImage
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface ContainerImagesCollection
 */
export interface ContainerImagesCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof ContainerImagesCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof ContainerImagesCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<ContainerImage>}
     * @memberof ContainerImagesCollection
     */
    'data'?: Array<ContainerImage>;
}
/**
 *
 * @export
 * @interface ContainerNode
 */
export interface ContainerNode {
    /**
     *
     * @type {object}
     * @memberof ContainerNode
     */
    'addresses'?: object;
    /**
     *
     * @type {number}
     * @memberof ContainerNode
     */
    'allocatable_cpus'?: number;
    /**
     *
     * @type {number}
     * @memberof ContainerNode
     */
    'allocatable_memory'?: number;
    /**
     *
     * @type {number}
     * @memberof ContainerNode
     */
    'allocatable_pods'?: number;
    /**
     *
     * @type {string}
     * @memberof ContainerNode
     */
    'archived_at'?: string;
    /**
     *
     * @type {object}
     * @memberof ContainerNode
     */
    'conditions'?: object;
    /**
     *
     * @type {number}
     * @memberof ContainerNode
     */
    'cpus'?: number;
    /**
     *
     * @type {string}
     * @memberof ContainerNode
     */
    'created_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ContainerNode
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerNode
     */
    'last_seen_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ContainerNode
     */
    'lives_on_id'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerNode
     */
    'lives_on_type'?: string;
    /**
     *
     * @type {number}
     * @memberof ContainerNode
     */
    'memory'?: number;
    /**
     *
     * @type {string}
     * @memberof ContainerNode
     */
    'name'?: string;
    /**
     *
     * @type {object}
     * @memberof ContainerNode
     */
    'node_info'?: object;
    /**
     *
     * @type {number}
     * @memberof ContainerNode
     */
    'pods'?: number;
    /**
     *
     * @type {string}
     * @memberof ContainerNode
     */
    'resource_version'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerNode
     */
    'source_created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerNode
     */
    'source_deleted_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ContainerNode
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerNode
     */
    'source_ref'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerNode
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface ContainerNodesCollection
 */
export interface ContainerNodesCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof ContainerNodesCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof ContainerNodesCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<ContainerNode>}
     * @memberof ContainerNodesCollection
     */
    'data'?: Array<ContainerNode>;
}
/**
 *
 * @export
 * @interface ContainerProject
 */
export interface ContainerProject {
    /**
     *
     * @type {string}
     * @memberof ContainerProject
     */
    'archived_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerProject
     */
    'created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerProject
     */
    'display_name'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ContainerProject
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerProject
     */
    'last_seen_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerProject
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerProject
     */
    'resource_version'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerProject
     */
    'source_created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerProject
     */
    'source_deleted_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ContainerProject
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerProject
     */
    'source_ref'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerProject
     */
    'status_phase'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerProject
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface ContainerProjectsCollection
 */
export interface ContainerProjectsCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof ContainerProjectsCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof ContainerProjectsCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<ContainerProject>}
     * @memberof ContainerProjectsCollection
     */
    'data'?: Array<ContainerProject>;
}
/**
 *
 * @export
 * @interface ContainerResourceQuota
 */
export interface ContainerResourceQuota {
    /**
     *
     * @type {string}
     * @memberof ContainerResourceQuota
     */
    'archived_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ContainerResourceQuota
     */
    'container_project_id'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerResourceQuota
     */
    'created_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ContainerResourceQuota
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerResourceQuota
     */
    'last_seen_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerResourceQuota
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerResourceQuota
     */
    'resource_version'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerResourceQuota
     */
    'source_created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerResourceQuota
     */
    'source_deleted_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ContainerResourceQuota
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerResourceQuota
     */
    'source_ref'?: string;
    /**
     *
     * @type {object}
     * @memberof ContainerResourceQuota
     */
    'spec'?: object;
    /**
     *
     * @type {object}
     * @memberof ContainerResourceQuota
     */
    'status'?: object;
    /**
     *
     * @type {string}
     * @memberof ContainerResourceQuota
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface ContainerResourceQuotaCollection
 */
export interface ContainerResourceQuotaCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof ContainerResourceQuotaCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof ContainerResourceQuotaCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<ContainerResourceQuota>}
     * @memberof ContainerResourceQuotaCollection
     */
    'data'?: Array<ContainerResourceQuota>;
}
/**
 *
 * @export
 * @interface ContainerTemplate
 */
export interface ContainerTemplate {
    /**
     *
     * @type {string}
     * @memberof ContainerTemplate
     */
    'archived_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ContainerTemplate
     */
    'container_project_id'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerTemplate
     */
    'created_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ContainerTemplate
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerTemplate
     */
    'last_seen_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerTemplate
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerTemplate
     */
    'resource_version'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerTemplate
     */
    'source_created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerTemplate
     */
    'source_deleted_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ContainerTemplate
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerTemplate
     */
    'source_ref'?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerTemplate
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface ContainerTemplatesCollection
 */
export interface ContainerTemplatesCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof ContainerTemplatesCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof ContainerTemplatesCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<ContainerTemplate>}
     * @memberof ContainerTemplatesCollection
     */
    'data'?: Array<ContainerTemplate>;
}
/**
 *
 * @export
 * @interface ContainersCollection
 */
export interface ContainersCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof ContainersCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof ContainersCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<Container>}
     * @memberof ContainersCollection
     */
    'data'?: Array<Container>;
}
/**
 *
 * @export
 * @interface Datastore
 */
export interface Datastore {
    /**
     *
     * @type {boolean}
     * @memberof Datastore
     */
    'accessible'?: boolean;
    /**
     *
     * @type {string}
     * @memberof Datastore
     */
    'archived_at'?: string;
    /**
     *
     * @type {string}
     * @memberof Datastore
     */
    'created_at'?: string;
    /**
     *
     * @type {object}
     * @memberof Datastore
     */
    'extra'?: object;
    /**
     *
     * @type {number}
     * @memberof Datastore
     */
    'free_space'?: number;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Datastore
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Datastore
     */
    'last_seen_at'?: string;
    /**
     *
     * @type {string}
     * @memberof Datastore
     */
    'location'?: string;
    /**
     *
     * @type {string}
     * @memberof Datastore
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof Datastore
     */
    'source_created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof Datastore
     */
    'source_deleted_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Datastore
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Datastore
     */
    'source_ref'?: string;
    /**
     *
     * @type {string}
     * @memberof Datastore
     */
    'status'?: string;
    /**
     *
     * @type {number}
     * @memberof Datastore
     */
    'total_space'?: number;
    /**
     *
     * @type {string}
     * @memberof Datastore
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface DatastoresCollection
 */
export interface DatastoresCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof DatastoresCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof DatastoresCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<Datastore>}
     * @memberof DatastoresCollection
     */
    'data'?: Array<Datastore>;
}
/**
 *
 * @export
 * @interface ErrorNotFound
 */
export interface ErrorNotFound {
    /**
     *
     * @type {Array<ErrorNotFoundErrorsInner>}
     * @memberof ErrorNotFound
     */
    'errors'?: Array<ErrorNotFoundErrorsInner>;
}
/**
 *
 * @export
 * @interface ErrorNotFoundErrorsInner
 */
export interface ErrorNotFoundErrorsInner {
    /**
     *
     * @type {number}
     * @memberof ErrorNotFoundErrorsInner
     */
    'status'?: number;
    /**
     *
     * @type {string}
     * @memberof ErrorNotFoundErrorsInner
     */
    'detail'?: string;
}
/**
 *
 * @export
 * @interface Flavor
 */
export interface Flavor {
    /**
     *
     * @type {string}
     * @memberof Flavor
     */
    'archived_at'?: string;
    /**
     * Number of CPUs
     * @type {number}
     * @memberof Flavor
     */
    'cpus'?: number;
    /**
     *
     * @type {string}
     * @memberof Flavor
     */
    'created_at'?: string;
    /**
     * The number of default disks
     * @type {number}
     * @memberof Flavor
     */
    'disk_count'?: number;
    /**
     * Size of the default disks in bytes
     * @type {number}
     * @memberof Flavor
     */
    'disk_size'?: number;
    /**
     *
     * @type {object}
     * @memberof Flavor
     */
    'extra'?: object;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Flavor
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Flavor
     */
    'last_seen_at'?: string;
    /**
     * Amount of RAM in bytes
     * @type {number}
     * @memberof Flavor
     */
    'memory'?: number;
    /**
     *
     * @type {string}
     * @memberof Flavor
     */
    'name'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Flavor
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Flavor
     */
    'source_ref'?: string;
    /**
     *
     * @type {string}
     * @memberof Flavor
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface FlavorsCollection
 */
export interface FlavorsCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof FlavorsCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof FlavorsCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<Flavor>}
     * @memberof FlavorsCollection
     */
    'data'?: Array<Flavor>;
}
/**
 *
 * @export
 * @interface GraphQLRequest
 */
export interface GraphQLRequest {
    /**
     * The GraphQL query
     * @type {string}
     * @memberof GraphQLRequest
     */
    'query': string;
    /**
     * If the Query contains several named operations, the operationName controls which one should be executed
     * @type {string}
     * @memberof GraphQLRequest
     */
    'operationName'?: string;
    /**
     * Optional Query variables
     * @type {object}
     * @memberof GraphQLRequest
     */
    'variables'?: object | null;
}
/**
 *
 * @export
 * @interface GraphQLResponse
 */
export interface GraphQLResponse {
    /**
     * Results from the GraphQL query
     * @type {object}
     * @memberof GraphQLResponse
     */
    'data'?: object;
    /**
     * Errors resulting from the GraphQL query
     * @type {Array<object>}
     * @memberof GraphQLResponse
     */
    'errors'?: Array<object>;
}
/**
 *
 * @export
 * @interface Host
 */
export interface Host {
    /**
     *
     * @type {string}
     * @memberof Host
     */
    'archived_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Host
     */
    'cluster_id'?: string;
    /**
     *
     * @type {number}
     * @memberof Host
     */
    'cpus'?: number;
    /**
     *
     * @type {string}
     * @memberof Host
     */
    'created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof Host
     */
    'description'?: string;
    /**
     *
     * @type {object}
     * @memberof Host
     */
    'extra'?: object;
    /**
     *
     * @type {string}
     * @memberof Host
     */
    'hostname'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Host
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Host
     */
    'last_seen_at'?: string;
    /**
     *
     * @type {number}
     * @memberof Host
     */
    'memory'?: number;
    /**
     *
     * @type {string}
     * @memberof Host
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof Host
     */
    'power_state'?: string;
    /**
     *
     * @type {string}
     * @memberof Host
     */
    'source_created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof Host
     */
    'source_deleted_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Host
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Host
     */
    'source_ref'?: string;
    /**
     *
     * @type {string}
     * @memberof Host
     */
    'uid_ems'?: string;
    /**
     *
     * @type {string}
     * @memberof Host
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface HostsCollection
 */
export interface HostsCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof HostsCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof HostsCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<Host>}
     * @memberof HostsCollection
     */
    'data'?: Array<Host>;
}
/**
 *
 * @export
 * @interface Ipaddress
 */
export interface Ipaddress {
    /**
     *
     * @type {string}
     * @memberof Ipaddress
     */
    'archived_at'?: string;
    /**
     *
     * @type {string}
     * @memberof Ipaddress
     */
    'created_at'?: string;
    /**
     *
     * @type {object}
     * @memberof Ipaddress
     */
    'extra'?: object;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Ipaddress
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Ipaddress
     */
    'ipaddress'?: string;
    /**
     *
     * @type {string}
     * @memberof Ipaddress
     */
    'kind'?: string;
    /**
     *
     * @type {string}
     * @memberof Ipaddress
     */
    'last_seen_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Ipaddress
     */
    'network_adapter_id'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Ipaddress
     */
    'orchestration_stack_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Ipaddress
     */
    'source_created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof Ipaddress
     */
    'source_deleted_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Ipaddress
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Ipaddress
     */
    'source_ref'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Ipaddress
     */
    'source_region_id'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Ipaddress
     */
    'subnet_id'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Ipaddress
     */
    'subscription_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Ipaddress
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface IpaddressesCollection
 */
export interface IpaddressesCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof IpaddressesCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof IpaddressesCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<Ipaddress>}
     * @memberof IpaddressesCollection
     */
    'data'?: Array<Ipaddress>;
}
/**
 * @type ListClustersSortByParameter
 * @export
 */
export type ListClustersSortByParameter = Array<string> | string;

/**
 *
 * @export
 * @interface Network
 */
export interface Network {
    /**
     *
     * @type {string}
     * @memberof Network
     */
    'archived_at'?: string;
    /**
     *
     * @type {string}
     * @memberof Network
     */
    'cidr'?: string;
    /**
     *
     * @type {string}
     * @memberof Network
     */
    'created_at'?: string;
    /**
     *
     * @type {object}
     * @memberof Network
     */
    'extra'?: object;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Network
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Network
     */
    'last_seen_at'?: string;
    /**
     *
     * @type {string}
     * @memberof Network
     */
    'name'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Network
     */
    'orchestration_stack_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Network
     */
    'source_created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof Network
     */
    'source_deleted_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Network
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Network
     */
    'source_ref'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Network
     */
    'source_region_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Network
     */
    'status'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Network
     */
    'subscription_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Network
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface NetworkAdapter
 */
export interface NetworkAdapter {
    /**
     *
     * @type {string}
     * @memberof NetworkAdapter
     */
    'archived_at'?: string;
    /**
     *
     * @type {string}
     * @memberof NetworkAdapter
     */
    'created_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof NetworkAdapter
     */
    'device_id'?: string;
    /**
     *
     * @type {string}
     * @memberof NetworkAdapter
     */
    'device_type'?: string;
    /**
     *
     * @type {object}
     * @memberof NetworkAdapter
     */
    'extra'?: object;
    /**
     * ID of the resource
     * @type {string}
     * @memberof NetworkAdapter
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof NetworkAdapter
     */
    'last_seen_at'?: string;
    /**
     *
     * @type {string}
     * @memberof NetworkAdapter
     */
    'mac_address'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof NetworkAdapter
     */
    'orchestration_stack_id'?: string;
    /**
     *
     * @type {string}
     * @memberof NetworkAdapter
     */
    'source_created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof NetworkAdapter
     */
    'source_deleted_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof NetworkAdapter
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof NetworkAdapter
     */
    'source_ref'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof NetworkAdapter
     */
    'source_region_id'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof NetworkAdapter
     */
    'subscription_id'?: string;
    /**
     *
     * @type {string}
     * @memberof NetworkAdapter
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface NetworkAdaptersCollection
 */
export interface NetworkAdaptersCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof NetworkAdaptersCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof NetworkAdaptersCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<NetworkAdapter>}
     * @memberof NetworkAdaptersCollection
     */
    'data'?: Array<NetworkAdapter>;
}
/**
 *
 * @export
 * @interface NetworksCollection
 */
export interface NetworksCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof NetworksCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof NetworksCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<Network>}
     * @memberof NetworksCollection
     */
    'data'?: Array<Network>;
}
/**
 *
 * @export
 * @interface OrchestrationStack
 */
export interface OrchestrationStack {
    /**
     *
     * @type {string}
     * @memberof OrchestrationStack
     */
    'archived_at'?: string;
    /**
     *
     * @type {string}
     * @memberof OrchestrationStack
     */
    'created_at'?: string;
    /**
     * Description of the OrchestrationStack
     * @type {string}
     * @memberof OrchestrationStack
     */
    'description'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof OrchestrationStack
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof OrchestrationStack
     */
    'last_seen_at'?: string;
    /**
     *
     * @type {string}
     * @memberof OrchestrationStack
     */
    'name'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof OrchestrationStack
     */
    'parent_orchestration_stack_id'?: string;
    /**
     *
     * @type {string}
     * @memberof OrchestrationStack
     */
    'source_created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof OrchestrationStack
     */
    'source_deleted_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof OrchestrationStack
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof OrchestrationStack
     */
    'source_ref'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof OrchestrationStack
     */
    'source_region_id'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof OrchestrationStack
     */
    'subscription_id'?: string;
    /**
     *
     * @type {string}
     * @memberof OrchestrationStack
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface OrchestrationStacksCollection
 */
export interface OrchestrationStacksCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof OrchestrationStacksCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof OrchestrationStacksCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<OrchestrationStack>}
     * @memberof OrchestrationStacksCollection
     */
    'data'?: Array<OrchestrationStack>;
}
/**
 *
 * @export
 * @interface OrderParametersServiceOffering
 */
export interface OrderParametersServiceOffering {
    /**
     * JSON object with provisioning parameters
     * @type {object}
     * @memberof OrderParametersServiceOffering
     */
    'service_parameters'?: object;
    /**
     * The provider specific parameters needed to provision this service. This might include namespaces, special keys
     * @type {object}
     * @memberof OrderParametersServiceOffering
     */
    'provider_control_parameters'?: object;
    /**
     * ID of the resource
     * @type {string}
     * @memberof OrderParametersServiceOffering
     */
    'service_plan_id'?: string;
}
/**
 *
 * @export
 * @interface OrderParametersServicePlan
 */
export interface OrderParametersServicePlan {
    /**
     * JSON object with provisioning parameters
     * @type {object}
     * @memberof OrderParametersServicePlan
     */
    'service_parameters'?: object;
    /**
     * The provider specific parameters needed to provision this service. This might include namespaces, special keys
     * @type {object}
     * @memberof OrderParametersServicePlan
     */
    'provider_control_parameters'?: object;
}
/**
 *
 * @export
 * @interface SecurityGroup
 */
export interface SecurityGroup {
    /**
     *
     * @type {string}
     * @memberof SecurityGroup
     */
    'archived_at'?: string;
    /**
     *
     * @type {string}
     * @memberof SecurityGroup
     */
    'created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof SecurityGroup
     */
    'description'?: string;
    /**
     *
     * @type {object}
     * @memberof SecurityGroup
     */
    'extra'?: object;
    /**
     * ID of the resource
     * @type {string}
     * @memberof SecurityGroup
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof SecurityGroup
     */
    'last_seen_at'?: string;
    /**
     *
     * @type {string}
     * @memberof SecurityGroup
     */
    'name'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof SecurityGroup
     */
    'network_id'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof SecurityGroup
     */
    'orchestration_stack_id'?: string;
    /**
     *
     * @type {string}
     * @memberof SecurityGroup
     */
    'source_created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof SecurityGroup
     */
    'source_deleted_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof SecurityGroup
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof SecurityGroup
     */
    'source_ref'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof SecurityGroup
     */
    'source_region_id'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof SecurityGroup
     */
    'subscription_id'?: string;
    /**
     *
     * @type {string}
     * @memberof SecurityGroup
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface SecurityGroupsCollection
 */
export interface SecurityGroupsCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof SecurityGroupsCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof SecurityGroupsCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<SecurityGroup>}
     * @memberof SecurityGroupsCollection
     */
    'data'?: Array<SecurityGroup>;
}
/**
 *
 * @export
 * @interface ServiceInstance
 */
export interface ServiceInstance {
    /**
     *
     * @type {string}
     * @memberof ServiceInstance
     */
    'archived_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceInstance
     */
    'created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceInstance
     */
    'external_url'?: string;
    /**
     * Extra information about this object in JSON format
     * @type {object}
     * @memberof ServiceInstance
     */
    'extra'?: object;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceInstance
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceInstance
     */
    'last_seen_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceInstance
     */
    'name'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceInstance
     */
    'root_service_instance_id'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceInstance
     */
    'service_inventory_id'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceInstance
     */
    'service_offering_id'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceInstance
     */
    'service_plan_id'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceInstance
     */
    'source_created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceInstance
     */
    'source_deleted_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceInstance
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceInstance
     */
    'source_ref'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceInstance
     */
    'source_region_id'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceInstance
     */
    'subscription_id'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceInstance
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface ServiceInstanceNode
 */
export interface ServiceInstanceNode {
    /**
     *
     * @type {string}
     * @memberof ServiceInstanceNode
     */
    'archived_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceInstanceNode
     */
    'created_at'?: string;
    /**
     *
     * @type {object}
     * @memberof ServiceInstanceNode
     */
    'extra'?: object;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceInstanceNode
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceInstanceNode
     */
    'last_seen_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceInstanceNode
     */
    'name'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceInstanceNode
     */
    'root_service_instance_id'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceInstanceNode
     */
    'service_instance_id'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceInstanceNode
     */
    'service_inventory_id'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceInstanceNode
     */
    'source_created_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceInstanceNode
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceInstanceNode
     */
    'source_ref'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceInstanceNode
     */
    'source_updated_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceInstanceNode
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface ServiceInstanceNodesCollection
 */
export interface ServiceInstanceNodesCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof ServiceInstanceNodesCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof ServiceInstanceNodesCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<ServiceInstanceNode>}
     * @memberof ServiceInstanceNodesCollection
     */
    'data'?: Array<ServiceInstanceNode>;
}
/**
 *
 * @export
 * @interface ServiceInstancesCollection
 */
export interface ServiceInstancesCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof ServiceInstancesCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof ServiceInstancesCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<ServiceInstance>}
     * @memberof ServiceInstancesCollection
     */
    'data'?: Array<ServiceInstance>;
}
/**
 *
 * @export
 * @interface ServiceInventoriesCollection
 */
export interface ServiceInventoriesCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof ServiceInventoriesCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof ServiceInventoriesCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<ServiceInventory>}
     * @memberof ServiceInventoriesCollection
     */
    'data'?: Array<ServiceInventory>;
}
/**
 *
 * @export
 * @interface ServiceInventory
 */
export interface ServiceInventory {
    /**
     *
     * @type {string}
     * @memberof ServiceInventory
     */
    'archived_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceInventory
     */
    'created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceInventory
     */
    'description'?: string;
    /**
     *
     * @type {object}
     * @memberof ServiceInventory
     */
    'extra'?: object;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceInventory
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceInventory
     */
    'last_seen_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceInventory
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceInventory
     */
    'source_created_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceInventory
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceInventory
     */
    'source_ref'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceInventory
     */
    'source_updated_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceInventory
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface ServiceOffering
 */
export interface ServiceOffering {
    /**
     *
     * @type {string}
     * @memberof ServiceOffering
     */
    'archived_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceOffering
     */
    'created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceOffering
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceOffering
     */
    'display_name'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceOffering
     */
    'distributor'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceOffering
     */
    'documentation_url'?: string;
    /**
     * Extra information about this object in JSON format
     * @type {object}
     * @memberof ServiceOffering
     */
    'extra'?: object;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceOffering
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceOffering
     */
    'last_seen_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceOffering
     */
    'long_description'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceOffering
     */
    'name'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceOffering
     */
    'service_inventory_id'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceOffering
     */
    'service_offering_icon_id'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceOffering
     */
    'source_created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceOffering
     */
    'source_deleted_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceOffering
     */
    'source_id'?: string;
    /**
     * The native reference used by the Source to refer to this object
     * @type {string}
     * @memberof ServiceOffering
     */
    'source_ref'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceOffering
     */
    'source_region_id'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceOffering
     */
    'subscription_id'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceOffering
     */
    'support_url'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceOffering
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface ServiceOfferingIcon
 */
export interface ServiceOfferingIcon {
    /**
     *
     * @type {string}
     * @memberof ServiceOfferingIcon
     */
    'created_at'?: string;
    /**
     * Raw icon data
     * @type {string}
     * @memberof ServiceOfferingIcon
     */
    'data'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceOfferingIcon
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceOfferingIcon
     */
    'last_seen_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceOfferingIcon
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceOfferingIcon
     */
    'source_ref'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceOfferingIcon
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface ServiceOfferingIconsCollection
 */
export interface ServiceOfferingIconsCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof ServiceOfferingIconsCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof ServiceOfferingIconsCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<ServiceOfferingIcon>}
     * @memberof ServiceOfferingIconsCollection
     */
    'data'?: Array<ServiceOfferingIcon>;
}
/**
 *
 * @export
 * @interface ServiceOfferingNode
 */
export interface ServiceOfferingNode {
    /**
     *
     * @type {string}
     * @memberof ServiceOfferingNode
     */
    'archived_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceOfferingNode
     */
    'created_at'?: string;
    /**
     *
     * @type {object}
     * @memberof ServiceOfferingNode
     */
    'extra'?: object;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceOfferingNode
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceOfferingNode
     */
    'last_seen_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceOfferingNode
     */
    'name'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceOfferingNode
     */
    'root_service_offering_id'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceOfferingNode
     */
    'service_inventory_id'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceOfferingNode
     */
    'service_offering_id'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceOfferingNode
     */
    'source_created_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServiceOfferingNode
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceOfferingNode
     */
    'source_ref'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceOfferingNode
     */
    'source_updated_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceOfferingNode
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface ServiceOfferingNodesCollection
 */
export interface ServiceOfferingNodesCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof ServiceOfferingNodesCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof ServiceOfferingNodesCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<ServiceOfferingNode>}
     * @memberof ServiceOfferingNodesCollection
     */
    'data'?: Array<ServiceOfferingNode>;
}
/**
 *
 * @export
 * @interface ServiceOfferingsCollection
 */
export interface ServiceOfferingsCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof ServiceOfferingsCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof ServiceOfferingsCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<ServiceOffering>}
     * @memberof ServiceOfferingsCollection
     */
    'data'?: Array<ServiceOffering>;
}
/**
 *
 * @export
 * @interface ServicePlan
 */
export interface ServicePlan {
    /**
     *
     * @type {string}
     * @memberof ServicePlan
     */
    'archived_at'?: string;
    /**
     *
     * @type {object}
     * @memberof ServicePlan
     */
    'create_json_schema'?: object;
    /**
     *
     * @type {string}
     * @memberof ServicePlan
     */
    'created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ServicePlan
     */
    'description'?: string;
    /**
     * Extra information about this object in JSON format
     * @type {object}
     * @memberof ServicePlan
     */
    'extra'?: object;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServicePlan
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ServicePlan
     */
    'last_seen_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ServicePlan
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof ServicePlan
     */
    'resource_version'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServicePlan
     */
    'service_offering_id'?: string;
    /**
     *
     * @type {string}
     * @memberof ServicePlan
     */
    'source_created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof ServicePlan
     */
    'source_deleted_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServicePlan
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof ServicePlan
     */
    'source_ref'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServicePlan
     */
    'source_region_id'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ServicePlan
     */
    'subscription_id'?: string;
    /**
     *
     * @type {string}
     * @memberof ServicePlan
     */
    'update_json_schema'?: string;
    /**
     *
     * @type {string}
     * @memberof ServicePlan
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface ServicePlansCollection
 */
export interface ServicePlansCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof ServicePlansCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof ServicePlansCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<ServicePlan>}
     * @memberof ServicePlansCollection
     */
    'data'?: Array<ServicePlan>;
}
/**
 *
 * @export
 * @interface Source
 */
export interface Source {
    /**
     *
     * @type {string}
     * @memberof Source
     */
    'created_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Source
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Source
     */
    'refresh_status'?: string;
    /**
     *
     * @type {string}
     * @memberof Source
     */
    'uid'?: string;
    /**
     *
     * @type {string}
     * @memberof Source
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface SourceRegion
 */
export interface SourceRegion {
    /**
     *
     * @type {string}
     * @memberof SourceRegion
     */
    'archived_at'?: string;
    /**
     *
     * @type {string}
     * @memberof SourceRegion
     */
    'created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof SourceRegion
     */
    'endpoint'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof SourceRegion
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof SourceRegion
     */
    'last_seen_at'?: string;
    /**
     *
     * @type {string}
     * @memberof SourceRegion
     */
    'name'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof SourceRegion
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof SourceRegion
     */
    'source_ref'?: string;
    /**
     *
     * @type {string}
     * @memberof SourceRegion
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface SourceRegionsCollection
 */
export interface SourceRegionsCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof SourceRegionsCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof SourceRegionsCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<SourceRegion>}
     * @memberof SourceRegionsCollection
     */
    'data'?: Array<SourceRegion>;
}
/**
 *
 * @export
 * @interface SourcesCollection
 */
export interface SourcesCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof SourcesCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof SourcesCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<Source>}
     * @memberof SourcesCollection
     */
    'data'?: Array<Source>;
}
/**
 *
 * @export
 * @interface Subnet
 */
export interface Subnet {
    /**
     *
     * @type {string}
     * @memberof Subnet
     */
    'archived_at'?: string;
    /**
     *
     * @type {string}
     * @memberof Subnet
     */
    'cidr'?: string;
    /**
     *
     * @type {string}
     * @memberof Subnet
     */
    'created_at'?: string;
    /**
     *
     * @type {object}
     * @memberof Subnet
     */
    'extra'?: object;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Subnet
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Subnet
     */
    'last_seen_at'?: string;
    /**
     *
     * @type {string}
     * @memberof Subnet
     */
    'name'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Subnet
     */
    'network_id'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Subnet
     */
    'orchestration_stack_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Subnet
     */
    'source_created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof Subnet
     */
    'source_deleted_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Subnet
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Subnet
     */
    'source_ref'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Subnet
     */
    'source_region_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Subnet
     */
    'status'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Subnet
     */
    'subscription_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Subnet
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface SubnetsCollection
 */
export interface SubnetsCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof SubnetsCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof SubnetsCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<Subnet>}
     * @memberof SubnetsCollection
     */
    'data'?: Array<Subnet>;
}
/**
 *
 * @export
 * @interface Subscription
 */
export interface Subscription {
    /**
     *
     * @type {string}
     * @memberof Subscription
     */
    'archived_at'?: string;
    /**
     *
     * @type {string}
     * @memberof Subscription
     */
    'created_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Subscription
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Subscription
     */
    'last_seen_at'?: string;
    /**
     *
     * @type {string}
     * @memberof Subscription
     */
    'name'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Subscription
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Subscription
     */
    'source_ref'?: string;
    /**
     *
     * @type {string}
     * @memberof Subscription
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface SubscriptionsCollection
 */
export interface SubscriptionsCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof SubscriptionsCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof SubscriptionsCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<Subscription>}
     * @memberof SubscriptionsCollection
     */
    'data'?: Array<Subscription>;
}
/**
 *
 * @export
 * @interface Tag
 */
export interface Tag {
    /**
     *
     * @type {string}
     * @memberof Tag
     */
    'created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof Tag
     */
    'description'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Tag
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Tag
     */
    'last_seen_at'?: string;
    /**
     *
     * @type {string}
     * @memberof Tag
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof Tag
     */
    'namespace'?: string;
    /**
     *
     * @type {string}
     * @memberof Tag
     */
    'value'?: string;
}
/**
 *
 * @export
 * @interface Tagging
 */
export interface Tagging {
    /**
     * ID of the resource
     * @type {string}
     * @memberof Tagging
     */
    'tag_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Tagging
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof Tagging
     */
    'value'?: string;
}
/**
 *
 * @export
 * @interface TagsCollection
 */
export interface TagsCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof TagsCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof TagsCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<Tag>}
     * @memberof TagsCollection
     */
    'data'?: Array<Tag>;
}
/**
 *
 * @export
 * @interface Task
 */
export interface Task {
    /**
     *
     * @type {string}
     * @memberof Task
     */
    'completed_at'?: string;
    /**
     *
     * @type {object}
     * @memberof Task
     */
    'context'?: object;
    /**
     *
     * @type {string}
     * @memberof Task
     */
    'created_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Task
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Task
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof Task
     */
    'state'?: string;
    /**
     *
     * @type {string}
     * @memberof Task
     */
    'status'?: string;
    /**
     *
     * @type {string}
     * @memberof Task
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface TasksCollection
 */
export interface TasksCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof TasksCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof TasksCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<Task>}
     * @memberof TasksCollection
     */
    'data'?: Array<Task>;
}
/**
 *
 * @export
 * @interface Tenant
 */
export interface Tenant {
    /**
     * ID of the resource
     * @type {string}
     * @memberof Tenant
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Tenant
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof Tenant
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof Tenant
     */
    'external_tenant'?: string;
}
/**
 *
 * @export
 * @interface Vm
 */
export interface Vm {
    /**
     *
     * @type {string}
     * @memberof Vm
     */
    'archived_at'?: string;
    /**
     * Total number of CPUs
     * @type {number}
     * @memberof Vm
     */
    'cpus'?: number;
    /**
     *
     * @type {string}
     * @memberof Vm
     */
    'created_at'?: string;
    /**
     * Description of the Vm
     * @type {string}
     * @memberof Vm
     */
    'description'?: string;
    /**
     *
     * @type {object}
     * @memberof Vm
     */
    'extra'?: object;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Vm
     */
    'flavor_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Vm
     */
    'host_inventory_uuid'?: string;
    /**
     *
     * @type {string}
     * @memberof Vm
     */
    'hostname'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Vm
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Vm
     */
    'last_seen_at'?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof Vm
     */
    'mac_addresses'?: Array<string>;
    /**
     * Total RAM in bytes
     * @type {number}
     * @memberof Vm
     */
    'memory'?: number;
    /**
     *
     * @type {string}
     * @memberof Vm
     */
    'name'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Vm
     */
    'orchestration_stack_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Vm
     */
    'power_state'?: string;
    /**
     *
     * @type {string}
     * @memberof Vm
     */
    'source_created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof Vm
     */
    'source_deleted_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Vm
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Vm
     */
    'source_ref'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Vm
     */
    'source_region_id'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Vm
     */
    'subscription_id'?: string;
    /**
     * Cross-Source Unique Reference
     * @type {string}
     * @memberof Vm
     */
    'uid_ems'?: string;
    /**
     *
     * @type {string}
     * @memberof Vm
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface VmsCollection
 */
export interface VmsCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof VmsCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof VmsCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<Vm>}
     * @memberof VmsCollection
     */
    'data'?: Array<Vm>;
}
/**
 *
 * @export
 * @interface Volume
 */
export interface Volume {
    /**
     *
     * @type {string}
     * @memberof Volume
     */
    'archived_at'?: string;
    /**
     *
     * @type {string}
     * @memberof Volume
     */
    'created_at'?: string;
    /**
     *
     * @type {object}
     * @memberof Volume
     */
    'extra'?: object;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Volume
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Volume
     */
    'last_seen_at'?: string;
    /**
     *
     * @type {string}
     * @memberof Volume
     */
    'name'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Volume
     */
    'orchestration_stack_id'?: string;
    /**
     * Size of the volume in bytes
     * @type {number}
     * @memberof Volume
     */
    'size'?: number;
    /**
     *
     * @type {string}
     * @memberof Volume
     */
    'source_created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof Volume
     */
    'source_deleted_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Volume
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Volume
     */
    'source_ref'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Volume
     */
    'source_region_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Volume
     */
    'state'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Volume
     */
    'subscription_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Volume
     */
    'updated_at'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Volume
     */
    'volume_type_id'?: string;
}
/**
 *
 * @export
 * @interface VolumeAttachment
 */
export interface VolumeAttachment {
    /**
     *
     * @type {string}
     * @memberof VolumeAttachment
     */
    'device'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof VolumeAttachment
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof VolumeAttachment
     */
    'last_seen_at'?: string;
    /**
     *
     * @type {string}
     * @memberof VolumeAttachment
     */
    'state'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof VolumeAttachment
     */
    'vm_id'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof VolumeAttachment
     */
    'volume_id'?: string;
}
/**
 *
 * @export
 * @interface VolumeAttachmentsCollection
 */
export interface VolumeAttachmentsCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof VolumeAttachmentsCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof VolumeAttachmentsCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<VolumeAttachment>}
     * @memberof VolumeAttachmentsCollection
     */
    'data'?: Array<VolumeAttachment>;
}
/**
 *
 * @export
 * @interface VolumeType
 */
export interface VolumeType {
    /**
     *
     * @type {string}
     * @memberof VolumeType
     */
    'archived_at'?: string;
    /**
     *
     * @type {string}
     * @memberof VolumeType
     */
    'created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof VolumeType
     */
    'description'?: string;
    /**
     *
     * @type {object}
     * @memberof VolumeType
     */
    'extra'?: object;
    /**
     * ID of the resource
     * @type {string}
     * @memberof VolumeType
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof VolumeType
     */
    'last_seen_at'?: string;
    /**
     *
     * @type {string}
     * @memberof VolumeType
     */
    'name'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof VolumeType
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof VolumeType
     */
    'source_ref'?: string;
    /**
     *
     * @type {string}
     * @memberof VolumeType
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface VolumeTypesCollection
 */
export interface VolumeTypesCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof VolumeTypesCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof VolumeTypesCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<VolumeType>}
     * @memberof VolumeTypesCollection
     */
    'data'?: Array<VolumeType>;
}
/**
 *
 * @export
 * @interface VolumesCollection
 */
export interface VolumesCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof VolumesCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof VolumesCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<Volume>}
     * @memberof VolumesCollection
     */
    'data'?: Array<Volume>;
}
