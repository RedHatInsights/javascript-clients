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
 * @interface CreateBehaviorGroupRequest
 */
export interface CreateBehaviorGroupRequest {
    /**
     *
     * @type {any}
     * @memberof CreateBehaviorGroupRequest
     */
    'bundle_id'?: any;
    /**
     *
     * @type {any}
     * @memberof CreateBehaviorGroupRequest
     */
    'bundle_name'?: any;
    /**
     *
     * @type {any}
     * @memberof CreateBehaviorGroupRequest
     */
    'display_name': any;
    /**
     *
     * @type {any}
     * @memberof CreateBehaviorGroupRequest
     */
    'endpoint_ids'?: any;
    /**
     *
     * @type {any}
     * @memberof CreateBehaviorGroupRequest
     */
    'event_type_ids'?: any;
    /**
     *
     * @type {any}
     * @memberof CreateBehaviorGroupRequest
     */
    'bundle_uuid_or_bundle_name_valid'?: any;
}
/**
 *
 * @export
 * @interface CreateBehaviorGroupResponse
 */
export interface CreateBehaviorGroupResponse {
    /**
     *
     * @type {any}
     * @memberof CreateBehaviorGroupResponse
     */
    'id': any;
    /**
     *
     * @type {any}
     * @memberof CreateBehaviorGroupResponse
     */
    'bundle_id': any;
    /**
     *
     * @type {any}
     * @memberof CreateBehaviorGroupResponse
     */
    'display_name': any;
    /**
     *
     * @type {any}
     * @memberof CreateBehaviorGroupResponse
     */
    'endpoints': any;
    /**
     *
     * @type {any}
     * @memberof CreateBehaviorGroupResponse
     */
    'event_types': any;
    /**
     *
     * @type {any}
     * @memberof CreateBehaviorGroupResponse
     */
    'created': any;
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
     *
     * @type {any}
     * @memberof DrawerEntryPayload
     */
    'severity'?: any;
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
 * @interface EventLogEntry
 */
export interface EventLogEntry {
    /**
     *
     * @type {any}
     * @memberof EventLogEntry
     */
    'id': any;
    /**
     *
     * @type {any}
     * @memberof EventLogEntry
     */
    'created': any;
    /**
     *
     * @type {any}
     * @memberof EventLogEntry
     */
    'bundle': any;
    /**
     *
     * @type {any}
     * @memberof EventLogEntry
     */
    'application': any;
    /**
     *
     * @type {any}
     * @memberof EventLogEntry
     */
    'event_type': any;
    /**
     *
     * @type {any}
     * @memberof EventLogEntry
     */
    'payload'?: any;
    /**
     *
     * @type {Severity}
     * @memberof EventLogEntry
     */
    'severity'?: Severity;
    /**
     *
     * @type {any}
     * @memberof EventLogEntry
     */
    'actions': any;
}


/**
 *
 * @export
 * @interface EventLogEntryAction
 */
export interface EventLogEntryAction {
    /**
     *
     * @type {any}
     * @memberof EventLogEntryAction
     */
    'id': any;
    /**
     *
     * @type {EndpointType}
     * @memberof EventLogEntryAction
     */
    'endpoint_type': EndpointType;
    /**
     *
     * @type {any}
     * @memberof EventLogEntryAction
     */
    'endpoint_sub_type'?: any;
    /**
     *
     * @type {any}
     * @memberof EventLogEntryAction
     * @deprecated
     */
    'invocation_result': any;
    /**
     *
     * @type {EventLogEntryActionStatus}
     * @memberof EventLogEntryAction
     */
    'status': EventLogEntryActionStatus;
    /**
     *
     * @type {any}
     * @memberof EventLogEntryAction
     */
    'endpoint_id'?: any;
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof EventLogEntryAction
     */
    'details'?: { [key: string]: any; };
    /**
     *
     * @type {any}
     * @memberof EventLogEntryAction
     */
    'recipients_count'?: any;
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
 * @interface Facet
 */
export interface Facet {
    /**
     *
     * @type {any}
     * @memberof Facet
     */
    'id': any;
    /**
     *
     * @type {any}
     * @memberof Facet
     */
    'name': any;
    /**
     *
     * @type {any}
     * @memberof Facet
     */
    'displayName': any;
    /**
     *
     * @type {any}
     * @memberof Facet
     */
    'children'?: any;
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
 * @interface PageEventLogEntry
 */
export interface PageEventLogEntry {
    /**
     *
     * @type {any}
     * @memberof PageEventLogEntry
     */
    'data': any;
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof PageEventLogEntry
     */
    'links': { [key: string]: any; };
    /**
     *
     * @type {Meta}
     * @memberof PageEventLogEntry
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
 * @interface UpdateBehaviorGroupRequest
 */
export interface UpdateBehaviorGroupRequest {
    /**
     *
     * @type {any}
     * @memberof UpdateBehaviorGroupRequest
     */
    'display_name'?: any;
    /**
     *
     * @type {any}
     * @memberof UpdateBehaviorGroupRequest
     */
    'endpoint_ids'?: any;
    /**
     *
     * @type {any}
     * @memberof UpdateBehaviorGroupRequest
     */
    'event_type_ids'?: any;
    /**
     *
     * @type {any}
     * @memberof UpdateBehaviorGroupRequest
     */
    'display_name_not_null_and_blank'?: any;
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
