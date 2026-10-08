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
}
/**
 *
 * @export
 * @interface ApplicationSubscription
 */
export interface ApplicationSubscription {
    /**
     *
     * @type {any}
     * @memberof ApplicationSubscription
     */
    'application': any;
    /**
     *
     * @type {any}
     * @memberof ApplicationSubscription
     */
    'application_display_name': any;
    /**
     *
     * @type {any}
     * @memberof ApplicationSubscription
     */
    'event_types': any;
}
/**
 *
 * @export
 * @interface ApplicationSubscriptionUpdate
 */
export interface ApplicationSubscriptionUpdate {
    /**
     *
     * @type {any}
     * @memberof ApplicationSubscriptionUpdate
     */
    'application': any;
    /**
     *
     * @type {any}
     * @memberof ApplicationSubscriptionUpdate
     */
    'event_types': any;
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
 * @interface BundleSubscription
 */
export interface BundleSubscription {
    /**
     *
     * @type {any}
     * @memberof BundleSubscription
     */
    'bundle': any;
    /**
     *
     * @type {any}
     * @memberof BundleSubscription
     */
    'bundle_display_name': any;
    /**
     *
     * @type {any}
     * @memberof BundleSubscription
     */
    'applications': any;
}
/**
 *
 * @export
 * @interface BundleSubscriptionUpdate
 */
export interface BundleSubscriptionUpdate {
    /**
     *
     * @type {any}
     * @memberof BundleSubscriptionUpdate
     */
    'bundle': any;
    /**
     *
     * @type {any}
     * @memberof BundleSubscriptionUpdate
     */
    'applications': any;
}
/**
 *
 * @export
 * @interface DrawerEntryPayload
 */
export interface DrawerEntryPayload {
    /**
     *
     * @type {any}
     * @memberof DrawerEntryPayload
     */
    'id'?: any;
    /**
     *
     * @type {any}
     * @memberof DrawerEntryPayload
     */
    'description'?: any;
    /**
     *
     * @type {any}
     * @memberof DrawerEntryPayload
     */
    'title'?: any;
    /**
     *
     * @type {any}
     * @memberof DrawerEntryPayload
     */
    'created'?: any;
    /**
     *
     * @type {any}
     * @memberof DrawerEntryPayload
     */
    'read': any;
    /**
     *
     * @type {any}
     * @memberof DrawerEntryPayload
     */
    'source'?: any;
    /**
     *
     * @type {any}
     * @memberof DrawerEntryPayload
     */
    'bundle'?: any;
    /**
     * The technical name of the application (not the display name)
     * @type {any}
     * @memberof DrawerEntryPayload
     */
    'application'?: any;
    /**
     *
     * @type {any}
     * @memberof DrawerEntryPayload
     */
    'severity'?: any;
}
/**
 *
 * @export
 * @interface EventLogEntryActionStatus
 */
export interface EventLogEntryActionStatus {
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
     * @type {any}
     * @memberof EventType
     */
    'fully_qualified_name'?: any;
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
 * @interface EventTypeSubscription
 */
export interface EventTypeSubscription {
    /**
     *
     * @type {any}
     * @memberof EventTypeSubscription
     */
    'event_type': any;
    /**
     *
     * @type {any}
     * @memberof EventTypeSubscription
     */
    'display_name': any;
    /**
     *
     * @type {any}
     * @memberof EventTypeSubscription
     */
    'available_severities': any;
    /**
     *
     * @type {any}
     * @memberof EventTypeSubscription
     */
    'subscriptions': any;
}
/**
 *
 * @export
 * @interface EventTypeSubscriptionUpdate
 */
export interface EventTypeSubscriptionUpdate {
    /**
     *
     * @type {any}
     * @memberof EventTypeSubscriptionUpdate
     */
    'event_type': any;
    /**
     *
     * @type {any}
     * @memberof EventTypeSubscriptionUpdate
     */
    'subscriptions': any;
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
 * @interface PageDrawerEntryPayload
 */
export interface PageDrawerEntryPayload {
    /**
     *
     * @type {any}
     * @memberof PageDrawerEntryPayload
     */
    'data': any;
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof PageDrawerEntryPayload
     */
    'links': { [key: string]: any; };
    /**
     *
     * @type {Meta}
     * @memberof PageDrawerEntryPayload
     */
    'meta': Meta;
}
/**
 *
 * @export
 * @interface PageEventType
 */
export interface PageEventType {
    /**
     *
     * @type {any}
     * @memberof PageEventType
     */
    'data': any;
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof PageEventType
     */
    'links': { [key: string]: any; };
    /**
     *
     * @type {Meta}
     * @memberof PageEventType
     */
    'meta': Meta;
}
/**
 *
 * @export
 * @interface Severity
 */
export interface Severity {
}
/**
 *
 * @export
 * @interface SeverityDTO1
 */
export interface SeverityDTO1 {
}
/**
 *
 * @export
 * @interface SubscriptionChannel
 */
export interface SubscriptionChannel {
    /**
     *
     * @type {SubscriptionType}
     * @memberof SubscriptionChannel
     */
    'subscription_type': SubscriptionType;
    /**
     *
     * @type {any}
     * @memberof SubscriptionChannel
     */
    'subscribed_severities': any;
}


/**
 *
 * @export
 * @interface SubscriptionType
 */
export interface SubscriptionType {
}
/**
 *
 * @export
 * @interface UpdateNotificationDrawerStatus
 */
export interface UpdateNotificationDrawerStatus {
    /**
     *
     * @type {any}
     * @memberof UpdateNotificationDrawerStatus
     */
    'notification_ids': any;
    /**
     *
     * @type {any}
     * @memberof UpdateNotificationDrawerStatus
     */
    'read_status': any;
}
