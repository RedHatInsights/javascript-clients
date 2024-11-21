/**
 *
 * @export
 * @interface Application
 */
export interface Application {
    /**
     * ID of the resource
     * @type {string}
     * @memberof Application
     */
    'application_type_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Application
     */
    'availability_status'?: string;
    /**
     *
     * @type {string}
     * @memberof Application
     */
    'availability_status_error'?: string;
    /**
     *
     * @type {string}
     * @memberof Application
     */
    'created_at'?: string;
    /**
     *
     * @type {object}
     * @memberof Application
     */
    'extra'?: object;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Application
     */
    'id'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Application
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Application
     */
    'tenant'?: string;
    /**
     *
     * @type {string}
     * @memberof Application
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface ApplicationType
 */
export interface ApplicationType {
    /**
     *
     * @type {string}
     * @memberof ApplicationType
     */
    'created_at'?: string;
    /**
     *
     * @type {object}
     * @memberof ApplicationType
     */
    'dependent_applications'?: object;
    /**
     *
     * @type {string}
     * @memberof ApplicationType
     */
    'display_name'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof ApplicationType
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ApplicationType
     */
    'name'?: string;
    /**
     *
     * @type {object}
     * @memberof ApplicationType
     */
    'supported_authentication_types'?: object;
    /**
     *
     * @type {object}
     * @memberof ApplicationType
     */
    'supported_source_types'?: object;
    /**
     *
     * @type {string}
     * @memberof ApplicationType
     */
    'updated_at'?: string;
}
/**
 *
 * @export
 * @interface ApplicationTypesCollection
 */
export interface ApplicationTypesCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof ApplicationTypesCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof ApplicationTypesCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<ApplicationType>}
     * @memberof ApplicationTypesCollection
     */
    'data'?: Array<ApplicationType>;
}
/**
 *
 * @export
 * @interface ApplicationsCollection
 */
export interface ApplicationsCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof ApplicationsCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof ApplicationsCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<Application>}
     * @memberof ApplicationsCollection
     */
    'data'?: Array<Application>;
}
/**
 *
 * @export
 * @interface Authentication
 */
export interface Authentication {
    /**
     *
     * @type {string}
     * @memberof Authentication
     */
    'authtype'?: string;
    /**
     *
     * @type {string}
     * @memberof Authentication
     */
    'availability_status'?: string;
    /**
     *
     * @type {string}
     * @memberof Authentication
     */
    'availability_status_error'?: string;
    /**
     *
     * @type {AuthenticationExtra}
     * @memberof Authentication
     */
    'extra'?: AuthenticationExtra;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Authentication
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Authentication
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof Authentication
     */
    'password'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Authentication
     */
    'resource_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Authentication
     */
    'resource_type'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Authentication
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Authentication
     */
    'tenant'?: string;
    /**
     *
     * @type {string}
     * @memberof Authentication
     */
    'username'?: string;
}
/**
 *
 * @export
 * @interface AuthenticationExtra
 */
export interface AuthenticationExtra {
    /**
     *
     * @type {AuthenticationExtraAzure}
     * @memberof AuthenticationExtra
     */
    'azure'?: AuthenticationExtraAzure;
}
/**
 *
 * @export
 * @interface AuthenticationExtraAzure
 */
export interface AuthenticationExtraAzure {
    /**
     *
     * @type {string}
     * @memberof AuthenticationExtraAzure
     */
    'tenant_id'?: string;
}
/**
 *
 * @export
 * @interface AuthenticationsCollection
 */
export interface AuthenticationsCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof AuthenticationsCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof AuthenticationsCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<Authentication>}
     * @memberof AuthenticationsCollection
     */
    'data'?: Array<Authentication>;
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
 * @interface Endpoint
 */
export interface Endpoint {
    /**
     *
     * @type {string}
     * @memberof Endpoint
     */
    'availability_status'?: string;
    /**
     *
     * @type {string}
     * @memberof Endpoint
     */
    'availability_status_error'?: string;
    /**
     * Optional X.509 Certificate Authority
     * @type {string}
     * @memberof Endpoint
     */
    'certificate_authority'?: string;
    /**
     *
     * @type {string}
     * @memberof Endpoint
     */
    'created_at'?: string;
    /**
     *
     * @type {boolean}
     * @memberof Endpoint
     */
    'default'?: boolean;
    /**
     * URI host component
     * @type {string}
     * @memberof Endpoint
     */
    'host'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Endpoint
     */
    'id'?: string;
    /**
     * URI path component
     * @type {string}
     * @memberof Endpoint
     */
    'path'?: string;
    /**
     * URI port component
     * @type {number}
     * @memberof Endpoint
     */
    'port'?: number;
    /**
     * Identifier of a receptor node
     * @type {string}
     * @memberof Endpoint
     */
    'receptor_node'?: string;
    /**
     *
     * @type {string}
     * @memberof Endpoint
     */
    'role'?: string;
    /**
     * URI scheme component
     * @type {string}
     * @memberof Endpoint
     */
    'scheme'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Endpoint
     */
    'source_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Endpoint
     */
    'tenant'?: string;
    /**
     *
     * @type {string}
     * @memberof Endpoint
     */
    'updated_at'?: string;
    /**
     * Should SSL be verified
     * @type {boolean}
     * @memberof Endpoint
     */
    'verify_ssl'?: boolean;
}
/**
 *
 * @export
 * @interface EndpointsCollection
 */
export interface EndpointsCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof EndpointsCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof EndpointsCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<Endpoint>}
     * @memberof EndpointsCollection
     */
    'data'?: Array<Endpoint>;
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
 * @type ListApplicationTypesSortByParameter
 * @export
 */
export type ListApplicationTypesSortByParameter = Array<string> | string;

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
    'availability_status'?: string;
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
    'imported'?: string;
    /**
     *
     * @type {string}
     * @memberof Source
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof Source
     */
    'source_ref'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof Source
     */
    'source_type_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Source
     */
    'tenant'?: string;
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
    /**
     *
     * @type {string}
     * @memberof Source
     */
    'version'?: string;
}
/**
 *
 * @export
 * @interface SourceType
 */
export interface SourceType {
    /**
     *
     * @type {string}
     * @memberof SourceType
     */
    'created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof SourceType
     */
    'icon_url'?: string;
    /**
     * ID of the resource
     * @type {string}
     * @memberof SourceType
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof SourceType
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof SourceType
     */
    'product_name'?: string;
    /**
     *
     * @type {string}
     * @memberof SourceType
     */
    'schema'?: string;
    /**
     *
     * @type {string}
     * @memberof SourceType
     */
    'updated_at'?: string;
    /**
     *
     * @type {string}
     * @memberof SourceType
     */
    'vendor'?: string;
}
/**
 *
 * @export
 * @interface SourceTypesCollection
 */
export interface SourceTypesCollection {
    /**
     *
     * @type {CollectionMetadata}
     * @memberof SourceTypesCollection
     */
    'meta'?: CollectionMetadata;
    /**
     *
     * @type {CollectionLinks}
     * @memberof SourceTypesCollection
     */
    'links'?: CollectionLinks;
    /**
     *
     * @type {Array<SourceType>}
     * @memberof SourceTypesCollection
     */
    'data'?: Array<SourceType>;
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
 * @interface Tenant
 */
export interface Tenant {
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
