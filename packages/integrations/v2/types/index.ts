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
     * @type {any}
     * @memberof CamelProperties
     */
    'disable_ssl_verification': any;
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
    /**
     *
     * @type {any}
     * @memberof CamelProperties
     */
    'secret_token'?: any;
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
 * @interface EndpointStatus
 */
export interface EndpointStatus {
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
 * @interface NotificationHistory
 */
export interface NotificationHistory {
    /**
     *
     * @type {any}
     * @memberof NotificationHistory
     */
    'created'?: any;
    /**
     *
     * @type {any}
     * @memberof NotificationHistory
     */
    'id'?: any;
    /**
     *
     * @type {any}
     * @memberof NotificationHistory
     */
    'invocationTime': any;
    /**
     *
     * @type {any}
     * @memberof NotificationHistory
     */
    'invocationResult': any;
    /**
     *
     * @type {NotificationStatus}
     * @memberof NotificationHistory
     */
    'status': NotificationStatus;
    /**
     *
     * @type {any}
     * @memberof NotificationHistory
     */
    'endpointId'?: any;
    /**
     *
     * @type {EndpointType}
     * @memberof NotificationHistory
     */
    'endpointType'?: EndpointType;
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof NotificationHistory
     */
    'details'?: { [key: string]: any; };
}


/**
 *
 * @export
 * @interface NotificationStatus
 */
export interface NotificationStatus {
}
/**
 *
 * @export
 * @interface PageNotificationHistory
 */
export interface PageNotificationHistory {
    /**
     *
     * @type {any}
     * @memberof PageNotificationHistory
     */
    'data': any;
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof PageNotificationHistory
     */
    'links': { [key: string]: any; };
    /**
     *
     * @type {Meta}
     * @memberof PageNotificationHistory
     */
    'meta': Meta;
}
/**
 *
 * @export
 * @interface PagerDutyProperties
 */
export interface PagerDutyProperties {
    /**
     *
     * @type {PagerDutySeverity}
     * @memberof PagerDutyProperties
     */
    'severity': PagerDutySeverity;
    /**
     *
     * @type {any}
     * @memberof PagerDutyProperties
     */
    'secret_token': any;
}


/**
 *
 * @export
 * @interface PagerDutySeverity
 */
export interface PagerDutySeverity {
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
    'group_id'?: any;
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
    'ignore_preferences'?: any;
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
    'disable_ssl_verification': any;
    /**
     *
     * @type {any}
     * @memberof WebhookProperties
     */
    'method': any;
    /**
     *
     * @type {any}
     * @memberof WebhookProperties
     */
    'url': any;
    /**
     *
     * @type {any}
     * @memberof WebhookProperties
     */
    'bearer_authentication'?: any;
    /**
     *
     * @type {any}
     * @memberof WebhookProperties
     */
    'secret_token'?: any;
}
