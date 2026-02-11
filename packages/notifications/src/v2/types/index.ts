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
    'created'?: any;
    /**
     *
     * @type {any}
     * @memberof Application
     */
    'updated'?: any;
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
 * @interface BehaviorGroup
 */
export interface BehaviorGroup {
    /**
     *
     * @type {any}
     * @memberof BehaviorGroup
     */
    'created'?: any;
    /**
     *
     * @type {any}
     * @memberof BehaviorGroup
     */
    'updated'?: any;
    /**
     *
     * @type {any}
     * @memberof BehaviorGroup
     */
    'id'?: any;
    /**
     *
     * @type {any}
     * @memberof BehaviorGroup
     */
    'display_name': any;
    /**
     *
     * @type {any}
     * @memberof BehaviorGroup
     */
    'bundle_id': any;
    /**
     *
     * @type {Bundle}
     * @memberof BehaviorGroup
     */
    'bundle'?: Bundle;
    /**
     *
     * @type {any}
     * @memberof BehaviorGroup
     */
    'actions'?: any;
    /**
     *
     * @type {any}
     * @memberof BehaviorGroup
     */
    'behaviors'?: any;
    /**
     *
     * @type {any}
     * @memberof BehaviorGroup
     */
    'default_behavior'?: any;
}
/**
 *
 * @export
 * @interface BehaviorGroupAction
 */
export interface BehaviorGroupAction {
    /**
     *
     * @type {any}
     * @memberof BehaviorGroupAction
     */
    'created'?: any;
    /**
     *
     * @type {BehaviorGroupActionId}
     * @memberof BehaviorGroupAction
     */
    'id'?: BehaviorGroupActionId;
    /**
     *
     * @type {Endpoint}
     * @memberof BehaviorGroupAction
     */
    'endpoint'?: Endpoint;
}
/**
 *
 * @export
 * @interface BehaviorGroupActionId
 */
export interface BehaviorGroupActionId {
    /**
     *
     * @type {any}
     * @memberof BehaviorGroupActionId
     */
    'behaviorGroupId': any;
    /**
     *
     * @type {any}
     * @memberof BehaviorGroupActionId
     */
    'endpointId': any;
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
    'created'?: any;
    /**
     *
     * @type {any}
     * @memberof Bundle
     */
    'updated'?: any;
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
    'updated'?: any;
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
     * @type {any}
     * @memberof Endpoint
     */
    'properties'?: any;
    /**
     *
     * @type {EndpointType}
     * @memberof Endpoint
     */
    'type'?: EndpointType;
    /**
     *
     * @type {any}
     * @memberof Endpoint
     */
    'sub_type'?: any;
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
     * @type {any}
     * @memberof EventType
     */
    'fully_qualified_name'?: any;
    /**
     *
     * @type {any}
     * @memberof EventType
     */
    'application_id': any;
    /**
     *
     * @type {Application}
     * @memberof EventType
     */
    'application'?: Application;
    /**
     *
     * @type {Severity}
     * @memberof EventType
     */
    'default_severity'?: Severity;
    /**
     *
     * @type {any}
     * @memberof EventType
     */
    'available_severities'?: any;
    /**
     *
     * @type {any}
     * @memberof EventType
     */
    'visible'?: any;
    /**
     *
     * @type {any}
     * @memberof EventType
     */
    'subscribed_by_default'?: any;
    /**
     *
     * @type {any}
     * @memberof EventType
     */
    'subscription_locked'?: any;
    /**
     *
     * @type {any}
     * @memberof EventType
     */
    'restrict_to_recipients_integrations'?: any;
    /**
     *
     * @type {any}
     * @memberof EventType
     */
    'not_subscription_locked_or_subscribed_by_default'?: any;
}


/**
 *
 * @export
 * @interface EventTypeBehavior
 */
export interface EventTypeBehavior {
    /**
     *
     * @type {any}
     * @memberof EventTypeBehavior
     */
    'created'?: any;
    /**
     *
     * @type {EventTypeBehaviorId}
     * @memberof EventTypeBehavior
     */
    'id'?: EventTypeBehaviorId;
    /**
     *
     * @type {EventType}
     * @memberof EventTypeBehavior
     */
    'event_type'?: EventType;
}
/**
 *
 * @export
 * @interface EventTypeBehaviorId
 */
export interface EventTypeBehaviorId {
    /**
     *
     * @type {any}
     * @memberof EventTypeBehaviorId
     */
    'eventTypeId': any;
    /**
     *
     * @type {any}
     * @memberof EventTypeBehaviorId
     */
    'behaviorGroupId': any;
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
 * @interface PageBehaviorGroup
 */
export interface PageBehaviorGroup {
    /**
     *
     * @type {any}
     * @memberof PageBehaviorGroup
     */
    'data': any;
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof PageBehaviorGroup
     */
    'links': { [key: string]: any; };
    /**
     *
     * @type {Meta}
     * @memberof PageBehaviorGroup
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
