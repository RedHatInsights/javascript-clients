/**
 *
 * @export
 * @interface AddAccessRequest
 */
export interface AddAccessRequest {
    /**
     *
     * @type {string}
     * @memberof AddAccessRequest
     */
    'role'?: string;
    /**
     *
     * @type {string}
     * @memberof AddAccessRequest
     */
    'application_id'?: string;
}
/**
 *
 * @export
 * @interface AddApplicationRequest
 */
export interface AddApplicationRequest {
    /**
     *
     * @type {string}
     * @memberof AddApplicationRequest
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof AddApplicationRequest
     */
    'display_name': string;
    /**
     *
     * @type {string}
     * @memberof AddApplicationRequest
     */
    'bundle_id': string;
    /**
     *
     * @type {string}
     * @memberof AddApplicationRequest
     */
    'owner_role'?: string;
}
/**
 *
 * @export
 * @interface AggregationEmailTemplate
 */
export interface AggregationEmailTemplate {
    /**
     *
     * @type {string}
     * @memberof AggregationEmailTemplate
     */
    'created'?: string;
    /**
     *
     * @type {string}
     * @memberof AggregationEmailTemplate
     */
    'updated'?: string;
    /**
     *
     * @type {string}
     * @memberof AggregationEmailTemplate
     */
    'id'?: string;
    /**
     *
     * @type {Application}
     * @memberof AggregationEmailTemplate
     */
    'application'?: Application;
    /**
     *
     * @type {string}
     * @memberof AggregationEmailTemplate
     */
    'application_id'?: string;
    /**
     *
     * @type {SubscriptionType}
     * @memberof AggregationEmailTemplate
     */
    'subscription_type': SubscriptionType;
    /**
     *
     * @type {AggregationEmailTemplateSubjectTemplate}
     * @memberof AggregationEmailTemplate
     */
    'subject_template'?: AggregationEmailTemplateSubjectTemplate;
    /**
     *
     * @type {string}
     * @memberof AggregationEmailTemplate
     */
    'subject_template_id': string;
    /**
     *
     * @type {AggregationEmailTemplateSubjectTemplate}
     * @memberof AggregationEmailTemplate
     */
    'body_template'?: AggregationEmailTemplateSubjectTemplate;
    /**
     *
     * @type {string}
     * @memberof AggregationEmailTemplate
     */
    'body_template_id': string;
}


/**
 *
 * @export
 * @interface AggregationEmailTemplateSubjectTemplate
 */
export interface AggregationEmailTemplateSubjectTemplate {
    /**
     *
     * @type {string}
     * @memberof AggregationEmailTemplateSubjectTemplate
     */
    'created'?: string;
    /**
     *
     * @type {string}
     * @memberof AggregationEmailTemplateSubjectTemplate
     */
    'updated'?: string;
    /**
     *
     * @type {string}
     * @memberof AggregationEmailTemplateSubjectTemplate
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof AggregationEmailTemplateSubjectTemplate
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof AggregationEmailTemplateSubjectTemplate
     */
    'description': string;
    /**
     *
     * @type {string}
     * @memberof AggregationEmailTemplateSubjectTemplate
     */
    'data': string;
}
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
 * @interface Application1
 */
export interface Application1 {
    /**
     *
     * @type {string}
     * @memberof Application1
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof Application1
     */
    'display_name': string;
}
/**
 *
 * @export
 * @interface ApplicationDTO
 */
export interface ApplicationDTO {
    /**
     *
     * @type {string}
     * @memberof ApplicationDTO
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ApplicationDTO
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof ApplicationDTO
     */
    'display_name': string;
    /**
     *
     * @type {string}
     * @memberof ApplicationDTO
     */
    'bundle_id': string;
    /**
     *
     * @type {Set<EventTypeDTO>}
     * @memberof ApplicationDTO
     */
    'event_types'?: Set<EventTypeDTO>;
}
/**
 *
 * @export
 * @interface ApplicationDTO1
 */
export interface ApplicationDTO1 {
    /**
     *
     * @type {string}
     * @memberof ApplicationDTO1
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof ApplicationDTO1
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof ApplicationDTO1
     */
    'display_name': string;
    /**
     *
     * @type {string}
     * @memberof ApplicationDTO1
     */
    'bundle_id': string;
    /**
     *
     * @type {string}
     * @memberof ApplicationDTO1
     */
    'owner_role'?: string;
    /**
     *
     * @type {string}
     * @memberof ApplicationDTO1
     */
    'created'?: string;
}
/**
 *
 * @export
 * @interface ApplicationSettingsValue
 */
export interface ApplicationSettingsValue {
    /**
     *
     * @type {{ [key: string]: EventTypeSettingsValue; }}
     * @memberof ApplicationSettingsValue
     */
    'eventTypes'?: { [key: string]: EventTypeSettingsValue; };
}
/**
 *
 * @export
 * @interface BasicAuthenticationDTO
 */
export interface BasicAuthenticationDTO {
    /**
     *
     * @type {string}
     * @memberof BasicAuthenticationDTO
     */
    'username'?: string;
    /**
     *
     * @type {string}
     * @memberof BasicAuthenticationDTO
     */
    'password'?: string;
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
 * @interface BundleDTO
 */
export interface BundleDTO {
    /**
     *
     * @type {string}
     * @memberof BundleDTO
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof BundleDTO
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof BundleDTO
     */
    'display_name': string;
    /**
     *
     * @type {Set<ApplicationDTO>}
     * @memberof BundleDTO
     */
    'applications'?: Set<ApplicationDTO>;
}
/**
 *
 * @export
 * @interface BundleSettingsValue
 */
export interface BundleSettingsValue {
    /**
     *
     * @type {{ [key: string]: ApplicationSettingsValue; }}
     * @memberof BundleSettingsValue
     */
    'applications'?: { [key: string]: ApplicationSettingsValue; };
}
/**
 *
 * @export
 * @interface CamelPropertiesDTO
 */
export interface CamelPropertiesDTO {
    /**
     *
     * @type {boolean}
     * @memberof CamelPropertiesDTO
     */
    'disableSslVerification': boolean;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof CamelPropertiesDTO
     */
    'extras'?: { [key: string]: string; };
    /**
     *
     * @type {string}
     * @memberof CamelPropertiesDTO
     */
    'url': string;
    /**
     *
     * @type {BasicAuthenticationDTO}
     * @memberof CamelPropertiesDTO
     */
    'basicAuthentication'?: BasicAuthenticationDTO;
    /**
     *
     * @type {string}
     * @memberof CamelPropertiesDTO
     */
    'secretToken'?: string;
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
 * @interface CurrentStatus
 */
export interface CurrentStatus {
    /**
     *
     * @type {Status}
     * @memberof CurrentStatus
     */
    'status': Status;
    /**
     *
     * @type {string}
     * @memberof CurrentStatus
     */
    'start_time'?: string;
    /**
     *
     * @type {string}
     * @memberof CurrentStatus
     */
    'end_time'?: string;
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
 * @interface EndpointDTO
 */
export interface EndpointDTO {
    /**
     *
     * @type {string}
     * @memberof EndpointDTO
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof EndpointDTO
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof EndpointDTO
     */
    'description': string;
    /**
     *
     * @type {boolean}
     * @memberof EndpointDTO
     */
    'enabled'?: boolean;
    /**
     *
     * @type {EndpointStatusDTO}
     * @memberof EndpointDTO
     */
    'status'?: EndpointStatusDTO;
    /**
     *
     * @type {number}
     * @memberof EndpointDTO
     */
    'server_errors'?: number;
    /**
     *
     * @type {EndpointTypeDTO}
     * @memberof EndpointDTO
     */
    'type': EndpointTypeDTO;
    /**
     *
     * @type {string}
     * @memberof EndpointDTO
     */
    'sub_type'?: string;
    /**
     *
     * @type {string}
     * @memberof EndpointDTO
     */
    'created'?: string;
    /**
     *
     * @type {string}
     * @memberof EndpointDTO
     */
    'updated'?: string;
    /**
     *
     * @type {object}
     * @memberof EndpointDTO
     */
    'properties'?: object;
    /**
     *
     * @type {Set<BundleDTO>}
     * @memberof EndpointDTO
     */
    'event_types_group_by_bundles_and_applications'?: Set<BundleDTO>;
    /**
     *
     * @type {Set<string>}
     * @memberof EndpointDTO
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
     * @type {Array<EndpointDTO>}
     * @memberof EndpointPage
     */
    'data': Array<EndpointDTO>;
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

export const EndpointStatusDTO = {
    Deleting: 'DELETING',
    Failed: 'FAILED',
    New: 'NEW',
    Provisioning: 'PROVISIONING',
    Ready: 'READY',
    Unknown: 'UNKNOWN'
} as const;

export type EndpointStatusDTO = typeof EndpointStatusDTO[keyof typeof EndpointStatusDTO];


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
 * @enum {string}
 */

export const EndpointTypeDTO = {
    Ansible: 'ansible',
    Camel: 'camel',
    Drawer: 'drawer',
    EmailSubscription: 'email_subscription',
    Webhook: 'webhook'
} as const;

export type EndpointTypeDTO = typeof EndpointTypeDTO[keyof typeof EndpointTypeDTO];


/**
 *
 * @export
 * @enum {string}
 */

export const Environment = {
    Prod: 'PROD',
    Stage: 'STAGE',
    Ephemeral: 'EPHEMERAL',
    LocalServer: 'LOCAL_SERVER'
} as const;

export type Environment = typeof Environment[keyof typeof Environment];


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
 * @interface EventTypeDTO
 */
export interface EventTypeDTO {
    /**
     *
     * @type {string}
     * @memberof EventTypeDTO
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof EventTypeDTO
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof EventTypeDTO
     */
    'display_name': string;
    /**
     *
     * @type {string}
     * @memberof EventTypeDTO
     */
    'description'?: string;
    /**
     *
     * @type {ApplicationDTO}
     * @memberof EventTypeDTO
     */
    'application'?: ApplicationDTO;
}
/**
 *
 * @export
 * @interface EventTypeSettingsValue
 */
export interface EventTypeSettingsValue {
    /**
     *
     * @type {{ [key: string]: boolean; }}
     * @memberof EventTypeSettingsValue
     */
    'emailSubscriptionTypes'?: { [key: string]: boolean; };
    /**
     *
     * @type {boolean}
     * @memberof EventTypeSettingsValue
     */
    'hasForcedEmail'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof EventTypeSettingsValue
     */
    'subscriptionLocked'?: boolean;
}
/**
 *
 * @export
 * @interface EventsReplayRequest
 */
export interface EventsReplayRequest {
    /**
     *
     * @type {string}
     * @memberof EventsReplayRequest
     */
    'start_date': string;
    /**
     *
     * @type {string}
     * @memberof EventsReplayRequest
     */
    'end_date': string;
    /**
     *
     * @type {string}
     * @memberof EventsReplayRequest
     */
    'org_id'?: string;
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
 * @interface InstantEmailTemplate
 */
export interface InstantEmailTemplate {
    /**
     *
     * @type {string}
     * @memberof InstantEmailTemplate
     */
    'created'?: string;
    /**
     *
     * @type {string}
     * @memberof InstantEmailTemplate
     */
    'updated'?: string;
    /**
     *
     * @type {string}
     * @memberof InstantEmailTemplate
     */
    'id'?: string;
    /**
     *
     * @type {EventType}
     * @memberof InstantEmailTemplate
     */
    'event_type'?: EventType;
    /**
     *
     * @type {string}
     * @memberof InstantEmailTemplate
     */
    'event_type_id'?: string;
    /**
     *
     * @type {AggregationEmailTemplateSubjectTemplate}
     * @memberof InstantEmailTemplate
     */
    'subject_template'?: AggregationEmailTemplateSubjectTemplate;
    /**
     *
     * @type {string}
     * @memberof InstantEmailTemplate
     */
    'subject_template_id': string;
    /**
     *
     * @type {AggregationEmailTemplateSubjectTemplate}
     * @memberof InstantEmailTemplate
     */
    'body_template'?: AggregationEmailTemplateSubjectTemplate;
    /**
     *
     * @type {string}
     * @memberof InstantEmailTemplate
     */
    'body_template_id': string;
}
/**
 *
 * @export
 * @interface InternalApplicationUserPermission
 */
export interface InternalApplicationUserPermission {
    /**
     *
     * @type {string}
     * @memberof InternalApplicationUserPermission
     */
    'application_id': string;
    /**
     *
     * @type {string}
     * @memberof InternalApplicationUserPermission
     */
    'application_display_name': string;
    /**
     *
     * @type {string}
     * @memberof InternalApplicationUserPermission
     */
    'role': string;
}
/**
 *
 * @export
 * @interface InternalRoleAccess
 */
export interface InternalRoleAccess {
    /**
     *
     * @type {string}
     * @memberof InternalRoleAccess
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof InternalRoleAccess
     */
    'role': string;
    /**
     *
     * @type {string}
     * @memberof InternalRoleAccess
     */
    'application_id': string;
}
/**
 *
 * @export
 * @interface InternalUserPermissions
 */
export interface InternalUserPermissions {
    /**
     *
     * @type {boolean}
     * @memberof InternalUserPermissions
     */
    'is_admin': boolean;
    /**
     *
     * @type {Array<Application1>}
     * @memberof InternalUserPermissions
     */
    'applications': Array<Application1>;
    /**
     *
     * @type {Array<string>}
     * @memberof InternalUserPermissions
     */
    'roles': Array<string>;
}
/**
 *
 * @export
 * @interface MessageValidationResponse
 */
export interface MessageValidationResponse {
    /**
     *
     * @type {{ [key: string]: Array<string>; }}
     * @memberof MessageValidationResponse
     */
    'errors': { [key: string]: Array<string>; };
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
     * @deprecated
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
     * @type {{ [key: string]: any; }}
     * @memberof NotificationHistory
     */
    'details'?: { [key: string]: any; };
    /**
     *
     * @type {EndpointType}
     * @memberof NotificationHistory
     */
    'endpointType'?: EndpointType;
    /**
     *
     * @type {string}
     * @memberof NotificationHistory
     */
    'endpointSubType'?: string;
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
 * @interface PageBehaviorGroup
 */
export interface PageBehaviorGroup {
    /**
     *
     * @type {Array<BehaviorGroup>}
     * @memberof PageBehaviorGroup
     */
    'data': Array<BehaviorGroup>;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof PageBehaviorGroup
     */
    'links': { [key: string]: string; };
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
 * @interface PagerDutyPropertiesDTO
 */
export interface PagerDutyPropertiesDTO {
    /**
     *
     * @type {PagerDutySeverityDTO}
     * @memberof PagerDutyPropertiesDTO
     */
    'severity': PagerDutySeverityDTO;
    /**
     *
     * @type {string}
     * @memberof PagerDutyPropertiesDTO
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
 * @enum {string}
 */

export const PagerDutySeverityDTO = {
    Critical: 'critical',
    Error: 'error',
    Warning: 'warning',
    Info: 'info'
} as const;

export type PagerDutySeverityDTO = typeof PagerDutySeverityDTO[keyof typeof PagerDutySeverityDTO];


/**
 *
 * @export
 * @interface RenderEmailTemplateRequest
 */
export interface RenderEmailTemplateRequest {
    /**
     *
     * @type {Array<string>}
     * @memberof RenderEmailTemplateRequest
     */
    'template': Array<string>;
    /**
     *
     * @type {string}
     * @memberof RenderEmailTemplateRequest
     */
    'payload': string;
}
/**
 *
 * @export
 * @interface RequestDefaultBehaviorGroupPropertyList
 */
export interface RequestDefaultBehaviorGroupPropertyList {
    /**
     *
     * @type {boolean}
     * @memberof RequestDefaultBehaviorGroupPropertyList
     */
    'only_admins': boolean;
    /**
     *
     * @type {boolean}
     * @memberof RequestDefaultBehaviorGroupPropertyList
     */
    'ignore_preferences': boolean;
}
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
 * @interface ServerInfo
 */
export interface ServerInfo {
    /**
     *
     * @type {Environment}
     * @memberof ServerInfo
     */
    'environment'?: Environment;
}


/**
 *
 * @export
 * @interface SettingsValuesByEventType
 */
export interface SettingsValuesByEventType {
    /**
     *
     * @type {{ [key: string]: BundleSettingsValue; }}
     * @memberof SettingsValuesByEventType
     */
    'bundles'?: { [key: string]: BundleSettingsValue; };
}
/**
 *
 * @export
 * @enum {string}
 */

export const Status = {
    Up: 'UP',
    Maintenance: 'MAINTENANCE'
} as const;

export type Status = typeof Status[keyof typeof Status];


/**
 *
 * @export
 * @enum {string}
 */

export const SubscriptionType = {
    Instant: 'INSTANT',
    Daily: 'DAILY',
    Drawer: 'DRAWER'
} as const;

export type SubscriptionType = typeof SubscriptionType[keyof typeof SubscriptionType];


/**
 *
 * @export
 * @interface SystemSubscriptionPropertiesDTO
 */
export interface SystemSubscriptionPropertiesDTO {
    /**
     *
     * @type {string}
     * @memberof SystemSubscriptionPropertiesDTO
     */
    'groupId'?: string;
    /**
     *
     * @type {boolean}
     * @memberof SystemSubscriptionPropertiesDTO
     */
    'ignorePreferences'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof SystemSubscriptionPropertiesDTO
     */
    'onlyAdmins'?: boolean;
}
/**
 *
 * @export
 * @interface Template
 */
export interface Template {
    /**
     *
     * @type {string}
     * @memberof Template
     */
    'created'?: string;
    /**
     *
     * @type {string}
     * @memberof Template
     */
    'updated'?: string;
    /**
     *
     * @type {string}
     * @memberof Template
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Template
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof Template
     */
    'description': string;
    /**
     *
     * @type {string}
     * @memberof Template
     */
    'data': string;
}
/**
 *
 * @export
 * @interface TriggerDailyDigestRequest
 */
export interface TriggerDailyDigestRequest {
    /**
     *
     * @type {string}
     * @memberof TriggerDailyDigestRequest
     */
    'application_name': string;
    /**
     *
     * @type {string}
     * @memberof TriggerDailyDigestRequest
     */
    'bundle_name': string;
    /**
     *
     * @type {string}
     * @memberof TriggerDailyDigestRequest
     */
    'end'?: string;
    /**
     *
     * @type {string}
     * @memberof TriggerDailyDigestRequest
     */
    'org_id': string;
    /**
     *
     * @type {string}
     * @memberof TriggerDailyDigestRequest
     */
    'start'?: string;
}
/**
 *
 * @export
 * @interface UpdateApplicationRequest
 */
export interface UpdateApplicationRequest {
    /**
     *
     * @type {string}
     * @memberof UpdateApplicationRequest
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof UpdateApplicationRequest
     */
    'display_name'?: string;
    /**
     *
     * @type {string}
     * @memberof UpdateApplicationRequest
     */
    'owner_role'?: string;
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
/**
 *
 * @export
 * @interface WebhookPropertiesDTO
 */
export interface WebhookPropertiesDTO {
    /**
     *
     * @type {boolean}
     * @memberof WebhookPropertiesDTO
     */
    'disableSslVerification': boolean;
    /**
     *
     * @type {HttpType}
     * @memberof WebhookPropertiesDTO
     */
    'method': HttpType;
    /**
     *
     * @type {string}
     * @memberof WebhookPropertiesDTO
     */
    'url': string;
    /**
     *
     * @type {BasicAuthenticationDTO}
     * @memberof WebhookPropertiesDTO
     */
    'basicAuthentication'?: BasicAuthenticationDTO;
    /**
     *
     * @type {string}
     * @memberof WebhookPropertiesDTO
     */
    'bearerAuthentication'?: string;
    /**
     *
     * @type {string}
     * @memberof WebhookPropertiesDTO
     */
    'secretToken'?: string;
}


/**
 *
 * @export
 * @interface X509Certificate
 */
export interface X509Certificate {
    /**
     *
     * @type {string}
     * @memberof X509Certificate
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof X509Certificate
     */
    'subject_dn': string;
    /**
     *
     * @type {string}
     * @memberof X509Certificate
     */
    'source_environment': string;
    /**
     *
     * @type {string}
     * @memberof X509Certificate
     */
    'bundle': string;
    /**
     *
     * @type {string}
     * @memberof X509Certificate
     */
    'application': string;
}
