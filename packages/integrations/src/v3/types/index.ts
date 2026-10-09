/**
 *
 * @export
 * @interface Application
 */
export interface Application {
    /**
     *
     * @type {any}
     * @memberof Application
     */
    'id'?: any;
    /**
     *
     * @type {any}
     * @memberof Application
     */
    'name': any;
    /**
     *
     * @type {any}
     * @memberof Application
     */
    'display_name': any;
    /**
     *
     * @type {any}
     * @memberof Application
     */
    'bundle_id': any;
    /**
     *
     * @type {any}
     * @memberof Application
     */
    'event_types'?: any;
}
/**
 *
 * @export
 * @interface Bundle
 */
export interface Bundle {
    /**
     *
     * @type {any}
     * @memberof Bundle
     */
    'id'?: any;
    /**
     *
     * @type {any}
     * @memberof Bundle
     */
    'name': any;
    /**
     *
     * @type {any}
     * @memberof Bundle
     */
    'display_name': any;
    /**
     *
     * @type {any}
     * @memberof Bundle
     */
    'applications'?: any;
}
/**
 *
 * @export
 * @interface CamelProperties
 */
export interface CamelProperties {
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof CamelProperties
     */
    'extras'?: { [key: string]: any; };
    /**
     *
     * @type {any}
     * @memberof CamelProperties
     */
    'url': any;
}
/**
 *
 * @export
 * @interface Endpoint
 */
export interface Endpoint {
    /**
     *
     * @type {any}
     * @memberof Endpoint
     */
    'id'?: any;
    /**
     *
     * @type {any}
     * @memberof Endpoint
     */
    'name': any;
    /**
     *
     * @type {any}
     * @memberof Endpoint
     */
    'description': any;
    /**
     *
     * @type {any}
     * @memberof Endpoint
     */
    'enabled'?: any;
    /**
     *
     * @type {EndpointStatus}
     * @memberof Endpoint
     */
    'status'?: EndpointStatus;
    /**
     *
     * @type {any}
     * @memberof Endpoint
     */
    'server_errors'?: any;
    /**
     *
     * @type {EndpointType}
     * @memberof Endpoint
     */
    'type': EndpointType;
    /**
     *
     * @type {any}
     * @memberof Endpoint
     */
    'sub_type'?: any;
    /**
     *
     * @type {any}
     * @memberof Endpoint
     */
    'created'?: any;
    /**
     *
     * @type {any}
     * @memberof Endpoint
     */
    'updated'?: any;
    /**
     *
     * @type {any}
     * @memberof Endpoint
     */
    'properties'?: any;
    /**
     *
     * @type {any}
     * @memberof Endpoint
     */
    'event_types_group_by_bundles_and_applications'?: any;
    /**
     *
     * @type {any}
     * @memberof Endpoint
     */
    'event_types'?: any;
    /**
     *
     * @type {any}
     * @memberof Endpoint
     */
    'read_only'?: any;
    /**
     * Optional secrets (secret token, bearer authentication) to associate with the endpoint being created. Only used on creation: never returned by the API, and ignored when updating an existing endpoint through this resource -- use the dedicated \"PUT/DELETE .../secrets\" endpoints instead.
     * @type {EndpointSecrets}
     * @memberof Endpoint
     */
    'secrets'?: EndpointSecrets;
}


/**
 *
 * @export
 * @interface EndpointPage
 */
export interface EndpointPage {
    /**
     *
     * @type {any}
     * @memberof EndpointPage
     */
    'data': any;
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof EndpointPage
     */
    'links': { [key: string]: any; };
    /**
     *
     * @type {Meta}
     * @memberof EndpointPage
     */
    'meta': Meta;
}
/**
 *
 * @export
 * @interface EndpointSecrets
 */
export interface EndpointSecrets {
    /**
     *
     * @type {any}
     * @memberof EndpointSecrets
     */
    'secret_token'?: any;
    /**
     *
     * @type {any}
     * @memberof EndpointSecrets
     */
    'bearer_authentication'?: any;
}
/**
 *
 * @export
 * @interface EndpointStatus
 */
export interface EndpointStatus {
}
/**
 *
 * @export
 * @interface EndpointTestRequest
 */
export interface EndpointTestRequest {
    /**
     *
     * @type {any}
     * @memberof EndpointTestRequest
     */
    'message': any;
}
/**
 *
 * @export
 * @interface EndpointType
 */
export interface EndpointType {
}
/**
 *
 * @export
 * @interface EventType
 */
export interface EventType {
    /**
     *
     * @type {any}
     * @memberof EventType
     */
    'id'?: any;
    /**
     *
     * @type {any}
     * @memberof EventType
     */
    'name': any;
    /**
     *
     * @type {any}
     * @memberof EventType
     */
    'display_name': any;
    /**
     *
     * @type {any}
     * @memberof EventType
     */
    'description'?: any;
    /**
     *
     * @type {Application}
     * @memberof EventType
     */
    'application'?: Application;
}
/**
 *
 * @export
 * @interface Meta
 */
export interface Meta {
    /**
     *
     * @type {any}
     * @memberof Meta
     */
    'count': any;
}
/**
 *
 * @export
 * @interface SystemSubscriptionProperties
 */
export interface SystemSubscriptionProperties {
    /**
     *
     * @type {any}
     * @memberof SystemSubscriptionProperties
     */
    'group_ids'?: any;
    /**
     *
     * @type {any}
     * @memberof SystemSubscriptionProperties
     */
    'only_admins'?: any;
}
/**
 *
 * @export
 * @interface WebhookProperties
 */
export interface WebhookProperties {
    /**
     *
     * @type {any}
     * @memberof WebhookProperties
     */
    'url': any;
}
