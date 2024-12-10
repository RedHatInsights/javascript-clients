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
    'event_types'?: any;
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
    'name': any;
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
    'display_name': any;
}
/**
 *
 * @export
 * @interface BasicAuthentication
 */
export interface BasicAuthentication {
    /**
     *
     * @type {any}
     * @memberof BasicAuthentication
     */
    'password'?: any;
    /**
     *
     * @type {any}
     * @memberof BasicAuthentication
     */
    'username'?: any;
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
    'name': any;
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
    'secretToken'?: any;
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
     * @type {BasicAuthentication}
     * @memberof CamelProperties
     */
    'basicAuthentication'?: BasicAuthentication;
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
    'created'?: any;
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
    'server_errors'?: any;
    /**
     *
     * @type {any}
     * @memberof Endpoint
     */
    'description': any;
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
    'enabled'?: any;
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
    'sub_type'?: any;
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
    'id'?: any;
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
     * @type {EndpointStatus}
     * @memberof Endpoint
     */
    'status'?: EndpointStatus;
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
     * @type {Meta}
     * @memberof EndpointPage
     */
    'meta': Meta;
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof EndpointPage
     */
    'links': { [key: string]: any; };
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
     * @type {Application}
     * @memberof EventType
     */
    'application'?: Application;
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
    'description'?: any;
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
    'display_name': any;
}
/**
 *
 * @export
 * @interface HttpType
 */
export interface HttpType {
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
    'invocationResult': any;
    /**
     *
     * @type {EndpointType}
     * @memberof NotificationHistory
     */
    'endpointType'?: EndpointType;
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
    'invocationTime': any;
    /**
     *
     * @type {any}
     * @memberof NotificationHistory
     */
    'endpointId'?: any;
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof NotificationHistory
     */
    'details'?: { [key: string]: any; };
    /**
     *
     * @type {any}
     * @memberof NotificationHistory
     */
    'id'?: any;
    /**
     *
     * @type {NotificationStatus}
     * @memberof NotificationHistory
     */
    'status': NotificationStatus;
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
    'group_id'?: any;
    /**
     *
     * @type {any}
     * @memberof RequestSystemSubscriptionProperties
     */
    'only_admins': any;
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
    'onlyAdmins'?: any;
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
    'groupId'?: any;
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
    'bearerAuthentication'?: any;
    /**
     *
     * @type {HttpType}
     * @memberof WebhookProperties
     */
    'method': HttpType;
    /**
     *
     * @type {any}
     * @memberof WebhookProperties
     */
    'secretToken'?: any;
    /**
     *
     * @type {any}
     * @memberof WebhookProperties
     */
    'disableSslVerification': any;
    /**
     *
     * @type {BasicAuthentication}
     * @memberof WebhookProperties
     */
    'basicAuthentication'?: BasicAuthentication;
    /**
     *
     * @type {any}
     * @memberof WebhookProperties
     */
    'url': any;
}


