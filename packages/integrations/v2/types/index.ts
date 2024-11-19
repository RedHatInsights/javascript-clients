/**
 *
 * @export
 * @interface Application
 */
export interface Application {
    /**
     *
     * @type {string}
     * @memberof Application
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Application
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof Application
     */
    'display_name': string;
    /**
     *
     * @type {string}
     * @memberof Application
     */
    'bundle_id': string;
    /**
     *
     * @type {Set<EventType>}
     * @memberof Application
     */
    'event_types'?: Set<EventType>;
}
/**
 *
 * @export
 * @interface BasicAuthentication
 */
export interface BasicAuthentication {
    /**
     *
     * @type {string}
     * @memberof BasicAuthentication
     */
    'username'?: string;
    /**
     *
     * @type {string}
     * @memberof BasicAuthentication
     */
    'password'?: string;
}
/**
 *
 * @export
 * @interface Bundle
 */
export interface Bundle {
    /**
     *
     * @type {string}
     * @memberof Bundle
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Bundle
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof Bundle
     */
    'display_name': string;
    /**
     *
     * @type {Set<Application>}
     * @memberof Bundle
     */
    'applications'?: Set<Application>;
}
/**
 *
 * @export
 * @interface CamelProperties
 */
export interface CamelProperties {
    /**
     *
     * @type {boolean}
     * @memberof CamelProperties
     */
    'disableSslVerification': boolean;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof CamelProperties
     */
    'extras'?: { [key: string]: string; };
    /**
     *
     * @type {string}
     * @memberof CamelProperties
     */
    'url': string;
    /**
     *
     * @type {BasicAuthentication}
     * @memberof CamelProperties
     */
    'basicAuthentication'?: BasicAuthentication;
    /**
     *
     * @type {string}
     * @memberof CamelProperties
     */
    'secretToken'?: string;
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
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Endpoint
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof Endpoint
     */
    'description': string;
    /**
     *
     * @type {boolean}
     * @memberof Endpoint
     */
    'enabled'?: boolean;
    /**
     *
     * @type {EndpointStatus}
     * @memberof Endpoint
     */
    'status'?: EndpointStatus;
    /**
     *
     * @type {number}
     * @memberof Endpoint
     */
    'server_errors'?: number;
    /**
     *
     * @type {EndpointType}
     * @memberof Endpoint
     */
    'type': EndpointType;
    /**
     *
     * @type {string}
     * @memberof Endpoint
     */
    'sub_type'?: string;
    /**
     *
     * @type {string}
     * @memberof Endpoint
     */
    'created'?: string;
    /**
     *
     * @type {string}
     * @memberof Endpoint
     */
    'updated'?: string;
    /**
     *
     * @type {object}
     * @memberof Endpoint
     */
    'properties'?: object;
    /**
     *
     * @type {Set<Bundle>}
     * @memberof Endpoint
     */
    'event_types_group_by_bundles_and_applications'?: Set<Bundle>;
    /**
     *
     * @type {Set<string>}
     * @memberof Endpoint
     */
    'event_types'?: Set<string>;
}


/**
 *
 * @export
 * @interface EndpointPage
 */
export interface EndpointPage {
    /**
     *
     * @type {Array<Endpoint>}
     * @memberof EndpointPage
     */
    'data': Array<Endpoint>;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof EndpointPage
     */
    'links': { [key: string]: string; };
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
 * @enum {string}
 */

export const EndpointStatus = {
    Deleting: 'DELETING',
    Failed: 'FAILED',
    New: 'NEW',
    Provisioning: 'PROVISIONING',
    Ready: 'READY',
    Unknown: 'UNKNOWN'
} as const;

export type EndpointStatus = typeof EndpointStatus[keyof typeof EndpointStatus];


/**
 *
 * @export
 * @interface EndpointTestRequest
 */
export interface EndpointTestRequest {
    /**
     *
     * @type {string}
     * @memberof EndpointTestRequest
     */
    'message': string;
}
/**
 *
 * @export
 * @enum {string}
 */

export const EndpointType = {
    Ansible: 'ansible',
    Camel: 'camel',
    Drawer: 'drawer',
    EmailSubscription: 'email_subscription',
    Webhook: 'webhook',
    Pagerduty: 'pagerduty'
} as const;

export type EndpointType = typeof EndpointType[keyof typeof EndpointType];


/**
 *
 * @export
 * @interface EventType
 */
export interface EventType {
    /**
     *
     * @type {string}
     * @memberof EventType
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof EventType
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof EventType
     */
    'display_name': string;
    /**
     *
     * @type {string}
     * @memberof EventType
     */
    'description'?: string;
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
 * @enum {string}
 */

export const HttpType = {
    Get: 'GET',
    Post: 'POST',
    Put: 'PUT'
} as const;

export type HttpType = typeof HttpType[keyof typeof HttpType];


/**
 *
 * @export
 * @interface Meta
 */
export interface Meta {
    /**
     *
     * @type {number}
     * @memberof Meta
     */
    'count': number;
}
/**
 *
 * @export
 * @interface NotificationHistory
 */
export interface NotificationHistory {
    /**
     *
     * @type {string}
     * @memberof NotificationHistory
     */
    'created'?: string;
    /**
     *
     * @type {string}
     * @memberof NotificationHistory
     */
    'id'?: string;
    /**
     *
     * @type {number}
     * @memberof NotificationHistory
     */
    'invocationTime': number;
    /**
     *
     * @type {boolean}
     * @memberof NotificationHistory
     */
    'invocationResult': boolean;
    /**
     *
     * @type {NotificationStatus}
     * @memberof NotificationHistory
     */
    'status': NotificationStatus;
    /**
     *
     * @type {string}
     * @memberof NotificationHistory
     */
    'endpointId'?: string;
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
 * @enum {string}
 */

export const NotificationStatus = {
    FailedInternal: 'FAILED_INTERNAL',
    FailedExternal: 'FAILED_EXTERNAL',
    Processing: 'PROCESSING',
    Sent: 'SENT',
    Success: 'SUCCESS'
} as const;

export type NotificationStatus = typeof NotificationStatus[keyof typeof NotificationStatus];


/**
 *
 * @export
 * @interface PageNotificationHistory
 */
export interface PageNotificationHistory {
    /**
     *
     * @type {Array<NotificationHistory>}
     * @memberof PageNotificationHistory
     */
    'data': Array<NotificationHistory>;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof PageNotificationHistory
     */
    'links': { [key: string]: string; };
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
     * @type {string}
     * @memberof PagerDutyProperties
     */
    'secretToken': string;
}


/**
 *
 * @export
 * @enum {string}
 */

export const PagerDutySeverity = {
    Critical: 'critical',
    Error: 'error',
    Warning: 'warning',
    Info: 'info'
} as const;

export type PagerDutySeverity = typeof PagerDutySeverity[keyof typeof PagerDutySeverity];


/**
 *
 * @export
 * @interface RequestSystemSubscriptionProperties
 */
export interface RequestSystemSubscriptionProperties {
    /**
     *
     * @type {boolean}
     * @memberof RequestSystemSubscriptionProperties
     */
    'only_admins': boolean;
    /**
     *
     * @type {string}
     * @memberof RequestSystemSubscriptionProperties
     */
    'group_id'?: string;
}
/**
 *
 * @export
 * @interface SystemSubscriptionProperties
 */
export interface SystemSubscriptionProperties {
    /**
     *
     * @type {string}
     * @memberof SystemSubscriptionProperties
     */
    'groupId'?: string;
    /**
     *
     * @type {boolean}
     * @memberof SystemSubscriptionProperties
     */
    'ignorePreferences'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof SystemSubscriptionProperties
     */
    'onlyAdmins'?: boolean;
}
/**
 *
 * @export
 * @interface WebhookProperties
 */
export interface WebhookProperties {
    /**
     *
     * @type {boolean}
     * @memberof WebhookProperties
     */
    'disableSslVerification': boolean;
    /**
     *
     * @type {HttpType}
     * @memberof WebhookProperties
     */
    'method': HttpType;
    /**
     *
     * @type {string}
     * @memberof WebhookProperties
     */
    'url': string;
    /**
     *
     * @type {BasicAuthentication}
     * @memberof WebhookProperties
     */
    'basicAuthentication'?: BasicAuthentication;
    /**
     *
     * @type {string}
     * @memberof WebhookProperties
     */
    'bearerAuthentication'?: string;
    /**
     *
     * @type {string}
     * @memberof WebhookProperties
     */
    'secretToken'?: string;
}


