/**
 *
 * @export
 * @interface Access
 */
export interface Access {
    /**
     *
     * @type {any}
     * @memberof Access
     */
    'permission': any;
    /**
     *
     * @type {any}
     * @memberof Access
     */
    'resourceDefinitions': any;
}
/**
 *
 * @export
 * @interface AddRoleToGroup200Response
 */
export interface AddRoleToGroup200Response {
    /**
     *
     * @type {any}
     * @memberof AddRoleToGroup200Response
     */
    'data': any;
}
/**
 *
 * @export
 * @interface AdditionalGroup
 */
export interface AdditionalGroup {
    /**
     *
     * @type {any}
     * @memberof AdditionalGroup
     */
    'name'?: any;
    /**
     *
     * @type {any}
     * @memberof AdditionalGroup
     */
    'description'?: any;
    /**
     *
     * @type {any}
     * @memberof AdditionalGroup
     */
    'uuid'?: any;
}
/**
 *
 * @export
 * @interface AuditLog
 */
export interface AuditLog {
    /**
     *
     * @type {any}
     * @memberof AuditLog
     */
    'created'?: any;
    /**
     *
     * @type {any}
     * @memberof AuditLog
     */
    'principal_username'?: any;
    /**
     *
     * @type {any}
     * @memberof AuditLog
     */
    'description'?: any;
    /**
     *
     * @type {any}
     * @memberof AuditLog
     */
    'resource_type'?: any;
    /**
     *
     * @type {any}
     * @memberof AuditLog
     */
    'action'?: any;
}
/**
 *
 * @export
 * @interface CrossAccountRequest
 */
export interface CrossAccountRequest {
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequest
     */
    'request_id'?: any;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequest
     */
    'target_account'?: any;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequest
     */
    'target_org'?: any;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequest
     */
    'status'?: any;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequest
     */
    'created'?: any;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequest
     */
    'start_date'?: any;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequest
     */
    'end_date'?: any;
}
/**
 *
 * @export
 * @interface CrossAccountRequestIn
 */
export interface CrossAccountRequestIn {
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestIn
     */
    'target_account'?: any;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestIn
     */
    'target_org': any;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestIn
     */
    'start_date': any;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestIn
     */
    'end_date': any;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestIn
     */
    'roles': any;
}
/**
 *
 * @export
 * @interface CrossAccountRequestPatch
 */
export interface CrossAccountRequestPatch {
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestPatch
     */
    'start_date'?: any;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestPatch
     */
    'end_date'?: any;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestPatch
     */
    'roles'?: any;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestPatch
     */
    'status'?: CrossAccountRequestPatchStatusEnum;
}

export const CrossAccountRequestPatchStatusEnum = {
    Pending: 'pending',
    Approved: 'approved',
    Expired: 'expired',
    Cancelled: 'cancelled',
    Denied: 'denied'
} as const;

export type CrossAccountRequestPatchStatusEnum = typeof CrossAccountRequestPatchStatusEnum[keyof typeof CrossAccountRequestPatchStatusEnum];

/**
 *
 * @export
 * @interface CrossAccountRequestUpdateIn
 */
export interface CrossAccountRequestUpdateIn {
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestUpdateIn
     */
    'start_date': any;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestUpdateIn
     */
    'end_date': any;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestUpdateIn
     */
    'roles': any;
}
/**
 *
 * @export
 * @interface CrossAccountRequestWithRoles
 */
export interface CrossAccountRequestWithRoles {
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestWithRoles
     */
    'request_id'?: any;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestWithRoles
     */
    'target_account'?: any;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestWithRoles
     */
    'target_org'?: any;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestWithRoles
     */
    'start_date'?: any;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestWithRoles
     */
    'end_date'?: any;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestWithRoles
     */
    'status'?: any;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestWithRoles
     */
    'created'?: any;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestWithRoles
     */
    'roles'?: any;
}
/**
 *
 * @export
 * @interface Error403
 */
export interface Error403 {
    /**
     *
     * @type {any}
     * @memberof Error403
     */
    'errors': any;
}
/**
 * Error structure for the \"Not Found\" responses.
 * @export
 * @interface ErrorNotFound
 */
export interface ErrorNotFound {
    /**
     *
     * @type {any}
     * @memberof ErrorNotFound
     */
    'errors': any;
}
/**
 *
 * @export
 * @interface Group
 */
export interface Group {
    /**
     *
     * @type {any}
     * @memberof Group
     */
    'name': any;
    /**
     *
     * @type {any}
     * @memberof Group
     */
    'description'?: any;
}
/**
 *
 * @export
 * @interface GroupPrincipalIn
 */
export interface GroupPrincipalIn {
    /**
     *
     * @type {any}
     * @memberof GroupPrincipalIn
     */
    'principals': any;
}
/**
 *
 * @export
 * @interface GroupRoleIn
 */
export interface GroupRoleIn {
    /**
     *
     * @type {any}
     * @memberof GroupRoleIn
     */
    'roles': any;
}
/**
 *
 * @export
 * @interface ListPagination
 */
export interface ListPagination {
    /**
     *
     * @type {PaginationMeta}
     * @memberof ListPagination
     */
    'meta'?: PaginationMeta;
    /**
     *
     * @type {PaginationLinks}
     * @memberof ListPagination
     */
    'links'?: PaginationLinks;
}
/**
 *
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     *
     * @type {any}
     * @memberof ModelError
     */
    'errors': any;
}
/**
 *
 * @export
 * @interface PaginationLinks
 */
export interface PaginationLinks {
    /**
     *
     * @type {any}
     * @memberof PaginationLinks
     */
    'first'?: any;
    /**
     *
     * @type {any}
     * @memberof PaginationLinks
     */
    'previous'?: any;
    /**
     *
     * @type {any}
     * @memberof PaginationLinks
     */
    'next'?: any;
    /**
     *
     * @type {any}
     * @memberof PaginationLinks
     */
    'last'?: any;
}
/**
 *
 * @export
 * @interface PaginationMeta
 */
export interface PaginationMeta {
    /**
     *
     * @type {any}
     * @memberof PaginationMeta
     */
    'count'?: any;
}
/**
 *
 * @export
 * @interface Permission
 */
export interface Permission {
    /**
     *
     * @type {any}
     * @memberof Permission
     */
    'application'?: any;
    /**
     *
     * @type {any}
     * @memberof Permission
     */
    'resource_type'?: any;
    /**
     *
     * @type {any}
     * @memberof Permission
     */
    'verb'?: any;
    /**
     *
     * @type {any}
     * @memberof Permission
     */
    'permission'?: any;
    /**
     *
     * @type {any}
     * @memberof Permission
     */
    'description'?: any;
}
/**
 *
 * @export
 * @interface Policy
 */
export interface Policy {
    /**
     *
     * @type {any}
     * @memberof Policy
     */
    'name': any;
    /**
     *
     * @type {any}
     * @memberof Policy
     */
    'description'?: any;
}
/**
 *
 * @export
 * @interface Principal
 */
export interface Principal {
    /**
     *
     * @type {any}
     * @memberof Principal
     */
    'username': any;
    /**
     *
     * @type {any}
     * @memberof Principal
     */
    'email': any;
    /**
     *
     * @type {any}
     * @memberof Principal
     */
    'first_name'?: any;
    /**
     *
     * @type {any}
     * @memberof Principal
     */
    'last_name'?: any;
    /**
     *
     * @type {any}
     * @memberof Principal
     */
    'is_active'?: any;
    /**
     *
     * @type {any}
     * @memberof Principal
     */
    'is_org_admin'?: any;
    /**
     *
     * @type {any}
     * @memberof Principal
     */
    'external_source_id'?: any | null;
}
/**
 *
 * @export
 * @interface PrincipalIn
 */
export interface PrincipalIn {
    /**
     *
     * @type {any}
     * @memberof PrincipalIn
     */
    'username': any;
}
/**
 *
 * @export
 * @interface PrincipalMinimal
 */
export interface PrincipalMinimal {
    /**
     *
     * @type {any}
     * @memberof PrincipalMinimal
     */
    'username': any;
}
/**
 *
 * @export
 * @interface ResourceDefinition
 */
export interface ResourceDefinition {
    /**
     *
     * @type {ResourceDefinitionFilter}
     * @memberof ResourceDefinition
     */
    'attributeFilter': ResourceDefinitionFilter;
}
/**
 *
 * @export
 * @interface ResourceDefinitionFilter
 */
export interface ResourceDefinitionFilter {
    /**
     *
     * @type {any}
     * @memberof ResourceDefinitionFilter
     */
    'key': any;
    /**
     *
     * @type {any}
     * @memberof ResourceDefinitionFilter
     */
    'operation': ResourceDefinitionFilterOperationEnum;
    /**
     *
     * @type {any}
     * @memberof ResourceDefinitionFilter
     */
    'value': any;
}

export const ResourceDefinitionFilterOperationEnum = {
    Equal: 'equal',
    In: 'in'
} as const;

export type ResourceDefinitionFilterOperationEnum = typeof ResourceDefinitionFilterOperationEnum[keyof typeof ResourceDefinitionFilterOperationEnum];

/**
 *
 * @export
 * @interface Role
 */
export interface Role {
    /**
     *
     * @type {any}
     * @memberof Role
     */
    'name': any;
    /**
     *
     * @type {any}
     * @memberof Role
     */
    'display_name'?: any;
    /**
     *
     * @type {any}
     * @memberof Role
     */
    'description'?: any;
}
/**
 *
 * @export
 * @interface RolePatch
 */
export interface RolePatch {
    /**
     *
     * @type {any}
     * @memberof RolePatch
     */
    'name'?: any;
    /**
     *
     * @type {any}
     * @memberof RolePatch
     */
    'display_name'?: any;
    /**
     *
     * @type {any}
     * @memberof RolePatch
     */
    'description'?: any;
}
/**
 *
 * @export
 * @interface ServiceAccount
 */
export interface ServiceAccount {
    /**
     *
     * @type {any}
     * @memberof ServiceAccount
     */
    'username': any;
    /**
     *
     * @type {any}
     * @memberof ServiceAccount
     */
    'type': ServiceAccountTypeEnum;
    /**
     *
     * @type {any}
     * @memberof ServiceAccount
     */
    'clientId': any;
    /**
     *
     * @type {any}
     * @memberof ServiceAccount
     */
    'name'?: any;
    /**
     *
     * @type {any}
     * @memberof ServiceAccount
     */
    'description'?: any;
    /**
     *
     * @type {any}
     * @memberof ServiceAccount
     */
    'owner'?: any;
    /**
     *
     * @type {any}
     * @memberof ServiceAccount
     */
    'time_created'?: any;
}

export const ServiceAccountTypeEnum = {
    ServiceAccount: 'service-account'
} as const;

export type ServiceAccountTypeEnum = typeof ServiceAccountTypeEnum[keyof typeof ServiceAccountTypeEnum];

/**
 *
 * @export
 * @interface ServiceAccountIn
 */
export interface ServiceAccountIn {
    /**
     *
     * @type {any}
     * @memberof ServiceAccountIn
     */
    'type': ServiceAccountInTypeEnum;
    /**
     *
     * @type {any}
     * @memberof ServiceAccountIn
     */
    'clientId': any;
}

export const ServiceAccountInTypeEnum = {
    ServiceAccount: 'service-account'
} as const;

export type ServiceAccountInTypeEnum = typeof ServiceAccountInTypeEnum[keyof typeof ServiceAccountInTypeEnum];

/**
 *
 * @export
 * @interface ServiceAccountInGroupResponse
 */
export interface ServiceAccountInGroupResponse {
    /**
     *
     * @type {PaginationMeta}
     * @memberof ServiceAccountInGroupResponse
     */
    'meta'?: PaginationMeta;
    /**
     * The links object for this particular response will be empty, since there is no pagination available for the query parameter
     * @type {any}
     * @memberof ServiceAccountInGroupResponse
     */
    'links'?: any;
    /**
     * Object which indicates whether the given service account UUIDs in the query parameter are present in the specified group or not
     * @type {{ [key: string]: any; }}
     * @memberof ServiceAccountInGroupResponse
     */
    'data'?: { [key: string]: any; };
}
/**
 *
 * @export
 * @interface Status
 */
export interface Status {
    /**
     *
     * @type {any}
     * @memberof Status
     */
    'api_version': any;
    /**
     *
     * @type {any}
     * @memberof Status
     */
    'commit'?: any;
}
/**
 *
 * @export
 * @interface Timestamped
 */
export interface Timestamped {
    /**
     *
     * @type {any}
     * @memberof Timestamped
     */
    'created': any;
    /**
     *
     * @type {any}
     * @memberof Timestamped
     */
    'modified': any;
}
/**
 *
 * @export
 * @interface UUID
 */
export interface UUID {
    /**
     *
     * @type {any}
     * @memberof UUID
     */
    'uuid': any;
}
