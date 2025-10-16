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
    'disableSslVerification': any;
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
    'secretToken'?: any;
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
    'secretToken': any;
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
 * @interface RequestSystemSubscriptionProperties
 */
export interface RequestSystemSubscriptionProperties {
    /**
     *
     * @type {any}
     * @memberof RequestSystemSubscriptionProperties
     */
    'only_admins': any;
    /**
     *
     * @type {any}
     * @memberof RequestSystemSubscriptionProperties
     */
    'group_id'?: any;
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
    'groupId'?: any;
    /**
     *
     * @type {any}
     * @memberof SystemSubscriptionProperties
     */
    'ignorePreferences'?: any;
    /**
     *
     * @type {any}
     * @memberof SystemSubscriptionProperties
     */
    'onlyAdmins'?: any;
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
    'disableSslVerification': any;
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
    'bearerAuthentication'?: any;
    /**
     *
     * @type {any}
     * @memberof WebhookProperties
     */
    'secretToken'?: any;
}
