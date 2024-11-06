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
    'created'?: string;
    /**
     *
     * @type {string}
     * @memberof Application
     */
    'updated'?: string;
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
}
/**
 *
 * @export
 * @interface BehaviorGroup
 */
export interface BehaviorGroup {
    /**
     *
     * @type {string}
     * @memberof BehaviorGroup
     */
    'created'?: string;
    /**
     *
     * @type {string}
     * @memberof BehaviorGroup
     */
    'updated'?: string;
    /**
     *
     * @type {string}
     * @memberof BehaviorGroup
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof BehaviorGroup
     */
    'display_name': string;
    /**
     *
     * @type {string}
     * @memberof BehaviorGroup
     */
    'bundle_id': string;
    /**
     *
     * @type {Bundle}
     * @memberof BehaviorGroup
     */
    'bundle'?: Bundle;
    /**
     *
     * @type {Array<BehaviorGroupAction>}
     * @memberof BehaviorGroup
     */
    'actions'?: Array<BehaviorGroupAction>;
    /**
     *
     * @type {Set<EventTypeBehavior>}
     * @memberof BehaviorGroup
     */
    'behaviors'?: Set<EventTypeBehavior>;
    /**
     *
     * @type {boolean}
     * @memberof BehaviorGroup
     */
    'default_behavior'?: boolean;
}
/**
 *
 * @export
 * @interface BehaviorGroupAction
 */
export interface BehaviorGroupAction {
    /**
     *
     * @type {string}
     * @memberof BehaviorGroupAction
     */
    'created'?: string;
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
     * @type {string}
     * @memberof BehaviorGroupActionId
     */
    'behaviorGroupId': string;
    /**
     *
     * @type {string}
     * @memberof BehaviorGroupActionId
     */
    'endpointId': string;
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
    'created'?: string;
    /**
     *
     * @type {string}
     * @memberof Bundle
     */
    'updated'?: string;
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
}
/**
 *
 * @export
 * @interface CreateBehaviorGroupRequest
 */
export interface CreateBehaviorGroupRequest {
    /**
     *
     * @type {string}
     * @memberof CreateBehaviorGroupRequest
     */
    'bundle_id'?: string;
    /**
     *
     * @type {string}
     * @memberof CreateBehaviorGroupRequest
     */
    'bundle_name'?: string;
    /**
     *
     * @type {string}
     * @memberof CreateBehaviorGroupRequest
     */
    'display_name': string;
    /**
     *
     * @type {Array<string>}
     * @memberof CreateBehaviorGroupRequest
     */
    'endpoint_ids'?: Array<string>;
    /**
     *
     * @type {Set<string>}
     * @memberof CreateBehaviorGroupRequest
     */
    'event_type_ids'?: Set<string>;
    /**
     *
     * @type {boolean}
     * @memberof CreateBehaviorGroupRequest
     */
    'bundle_uuid_or_bundle_name_valid'?: boolean;
}
/**
 *
 * @export
 * @interface CreateBehaviorGroupResponse
 */
export interface CreateBehaviorGroupResponse {
    /**
     *
     * @type {string}
     * @memberof CreateBehaviorGroupResponse
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof CreateBehaviorGroupResponse
     */
    'bundle_id': string;
    /**
     *
     * @type {string}
     * @memberof CreateBehaviorGroupResponse
     */
    'display_name': string;
    /**
     *
     * @type {Array<string>}
     * @memberof CreateBehaviorGroupResponse
     */
    'endpoints': Array<string>;
    /**
     *
     * @type {Set<string>}
     * @memberof CreateBehaviorGroupResponse
     */
    'event_types': Set<string>;
    /**
     *
     * @type {string}
     * @memberof CreateBehaviorGroupResponse
     */
    'created': string;
}
/**
 *
 * @export
 * @interface DrawerEntryPayload
 */
export interface DrawerEntryPayload {
    /**
     *
     * @type {string}
     * @memberof DrawerEntryPayload
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof DrawerEntryPayload
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof DrawerEntryPayload
     */
    'title'?: string;
    /**
     *
     * @type {string}
     * @memberof DrawerEntryPayload
     */
    'created'?: string;
    /**
     *
     * @type {boolean}
     * @memberof DrawerEntryPayload
     */
    'read': boolean;
    /**
     *
     * @type {string}
     * @memberof DrawerEntryPayload
     */
    'source'?: string;
    /**
     *
     * @type {string}
     * @memberof DrawerEntryPayload
     */
    'bundle'?: string;
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
    'created'?: string;
    /**
     *
     * @type {string}
     * @memberof Endpoint
     */
    'updated'?: string;
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
     * @type {object}
     * @memberof Endpoint
     */
    'properties'?: object;
    /**
     *
     * @type {EndpointType}
     * @memberof Endpoint
     */
    'type'?: EndpointType;
    /**
     *
     * @type {string}
     * @memberof Endpoint
     */
    'sub_type'?: string;
}


/**
 *
 * @export
 * @enum {string}
 */

export const EndpointStatus = {
    Ready: 'READY',
    Unknown: 'UNKNOWN',
    New: 'NEW',
    Provisioning: 'PROVISIONING',
    Deleting: 'DELETING',
    Failed: 'FAILED'
} as const;

export type EndpointStatus = typeof EndpointStatus[keyof typeof EndpointStatus];


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
 * @interface EventLogEntry
 */
export interface EventLogEntry {
    /**
     *
     * @type {string}
     * @memberof EventLogEntry
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof EventLogEntry
     */
    'created': string;
    /**
     *
     * @type {string}
     * @memberof EventLogEntry
     */
    'bundle': string;
    /**
     *
     * @type {string}
     * @memberof EventLogEntry
     */
    'application': string;
    /**
     *
     * @type {string}
     * @memberof EventLogEntry
     */
    'event_type': string;
    /**
     *
     * @type {string}
     * @memberof EventLogEntry
     */
    'payload'?: string;
    /**
     *
     * @type {Array<EventLogEntryAction>}
     * @memberof EventLogEntry
     */
    'actions': Array<EventLogEntryAction>;
}
/**
 *
 * @export
 * @interface EventLogEntryAction
 */
export interface EventLogEntryAction {
    /**
     *
     * @type {string}
     * @memberof EventLogEntryAction
     */
    'id': string;
    /**
     *
     * @type {EndpointType}
     * @memberof EventLogEntryAction
     */
    'endpoint_type': EndpointType;
    /**
     *
     * @type {string}
     * @memberof EventLogEntryAction
     */
    'endpoint_sub_type'?: string;
    /**
     *
     * @type {boolean}
     * @memberof EventLogEntryAction
     * @deprecated
     */
    'invocation_result': boolean;
    /**
     *
     * @type {EventLogEntryActionStatus}
     * @memberof EventLogEntryAction
     */
    'status': EventLogEntryActionStatus;
    /**
     *
     * @type {string}
     * @memberof EventLogEntryAction
     */
    'endpoint_id'?: string;
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof EventLogEntryAction
     */
    'details'?: { [key: string]: any; };
}


/**
 *
 * @export
 * @enum {string}
 */

export const EventLogEntryActionStatus = {
    Sent: 'SENT',
    Success: 'SUCCESS',
    Processing: 'PROCESSING',
    Failed: 'FAILED',
    Unknown: 'UNKNOWN'
} as const;

export type EventLogEntryActionStatus = typeof EventLogEntryActionStatus[keyof typeof EventLogEntryActionStatus];


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
     * @type {string}
     * @memberof EventType
     */
    'fully_qualified_name'?: string;
    /**
     *
     * @type {string}
     * @memberof EventType
     */
    'application_id': string;
    /**
     *
     * @type {Application}
     * @memberof EventType
     */
    'application'?: Application;
    /**
     *
     * @type {boolean}
     * @memberof EventType
     */
    'visible'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof EventType
     */
    'subscribed_by_default'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof EventType
     */
    'subscription_locked'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof EventType
     */
    'not_subscription_locked_or_subscribed_by_default'?: boolean;
}
/**
 *
 * @export
 * @interface EventTypeBehavior
 */
export interface EventTypeBehavior {
    /**
     *
     * @type {string}
     * @memberof EventTypeBehavior
     */
    'created'?: string;
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
     * @type {string}
     * @memberof EventTypeBehaviorId
     */
    'eventTypeId': string;
    /**
     *
     * @type {string}
     * @memberof EventTypeBehaviorId
     */
    'behaviorGroupId': string;
}
/**
 *
 * @export
 * @interface Facet
 */
export interface Facet {
    /**
     *
     * @type {string}
     * @memberof Facet
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof Facet
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof Facet
     */
    'displayName': string;
    /**
     *
     * @type {Array<Facet>}
     * @memberof Facet
     */
    'children'?: Array<Facet>;
}
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
 * @interface PageDrawerEntryPayload
 */
export interface PageDrawerEntryPayload {
    /**
     *
     * @type {Array<DrawerEntryPayload>}
     * @memberof PageDrawerEntryPayload
     */
    'data': Array<DrawerEntryPayload>;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof PageDrawerEntryPayload
     */
    'links': { [key: string]: string; };
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
     * @type {Array<EventLogEntry>}
     * @memberof PageEventLogEntry
     */
    'data': Array<EventLogEntry>;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof PageEventLogEntry
     */
    'links': { [key: string]: string; };
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
     * @type {Array<EventType>}
     * @memberof PageEventType
     */
    'data': Array<EventType>;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof PageEventType
     */
    'links': { [key: string]: string; };
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
 * @interface UpdateBehaviorGroupRequest
 */
export interface UpdateBehaviorGroupRequest {
    /**
     *
     * @type {string}
     * @memberof UpdateBehaviorGroupRequest
     */
    'display_name'?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof UpdateBehaviorGroupRequest
     */
    'endpoint_ids'?: Array<string>;
    /**
     *
     * @type {Set<string>}
     * @memberof UpdateBehaviorGroupRequest
     */
    'event_type_ids'?: Set<string>;
    /**
     *
     * @type {boolean}
     * @memberof UpdateBehaviorGroupRequest
     */
    'display_name_not_null_and_blank'?: boolean;
}
/**
 *
 * @export
 * @interface UpdateNotificationDrawerStatus
 */
export interface UpdateNotificationDrawerStatus {
    /**
     *
     * @type {Set<string>}
     * @memberof UpdateNotificationDrawerStatus
     */
    'notification_ids': Set<string>;
    /**
     *
     * @type {boolean}
     * @memberof UpdateNotificationDrawerStatus
     */
    'read_status': boolean;
}
