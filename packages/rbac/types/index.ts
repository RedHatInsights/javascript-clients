/**
 *
 * @export
 * @interface Access
 */
export interface Access {
    /**
     *
     * @type {string}
     * @memberof Access
     */
    'permission': string;
    /**
     *
     * @type {Array<ResourceDefinition>}
     * @memberof Access
     */
    'resourceDefinitions': Array<ResourceDefinition>;
}
/**
 *
 * @export
 * @interface AccessPagination
 */
export interface AccessPagination {
    /**
     *
     * @type {PaginationMeta}
     * @memberof AccessPagination
     */
    'meta'?: PaginationMeta;
    /**
     *
     * @type {PaginationLinks}
     * @memberof AccessPagination
     */
    'links'?: PaginationLinks;
    /**
     *
     * @type {Array<Access>}
     * @memberof AccessPagination
     */
    'data': Array<Access>;
}
/**
 *
 * @export
 * @interface AddRoleToGroup200Response
 */
export interface AddRoleToGroup200Response {
    /**
     *
     * @type {Array<RoleOut>}
     * @memberof AddRoleToGroup200Response
     */
    'data': Array<RoleOut>;
}
/**
 *
 * @export
 * @interface AdditionalGroup
 */
export interface AdditionalGroup {
    /**
     *
     * @type {string}
     * @memberof AdditionalGroup
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof AdditionalGroup
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof AdditionalGroup
     */
    'uuid'?: string;
}
/**
 *
 * @export
 * @interface CrossAccountRequest
 */
export interface CrossAccountRequest {
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequest
     */
    'request_id'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequest
     */
    'target_account'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequest
     */
    'target_org'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequest
     */
    'status'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequest
     */
    'created'?: string;
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
 * @interface CrossAccountRequestByAccount
 */
export interface CrossAccountRequestByAccount {
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestByAccount
     */
    'request_id'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestByAccount
     */
    'target_account'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestByAccount
     */
    'target_org'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestByAccount
     */
    'status'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestByAccount
     */
    'created'?: string;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestByAccount
     */
    'start_date'?: any;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestByAccount
     */
    'end_date'?: any;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestByAccount
     */
    'first_name'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestByAccount
     */
    'last_name'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestByAccount
     */
    'email'?: string;
}
/**
 *
 * @export
 * @interface CrossAccountRequestByUserId
 */
export interface CrossAccountRequestByUserId {
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestByUserId
     */
    'request_id'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestByUserId
     */
    'target_account'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestByUserId
     */
    'target_org'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestByUserId
     */
    'status'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestByUserId
     */
    'created'?: string;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestByUserId
     */
    'start_date'?: any;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestByUserId
     */
    'end_date'?: any;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestByUserId
     */
    'user_id'?: string;
}
/**
 * @type CrossAccountRequestDetail
 * @export
 */
export type CrossAccountRequestDetail = CrossAccountRequestDetailByAccount | CrossAccountRequestDetailByUseId;

/**
 *
 * @export
 * @interface CrossAccountRequestDetailByAccount
 */
export interface CrossAccountRequestDetailByAccount {
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestDetailByAccount
     */
    'request_id'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestDetailByAccount
     */
    'target_account'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestDetailByAccount
     */
    'target_org'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestDetailByAccount
     */
    'start_date'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestDetailByAccount
     */
    'end_date'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestDetailByAccount
     */
    'status'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestDetailByAccount
     */
    'created'?: string;
    /**
     *
     * @type {Array<CrossAccountRequestWithRolesRolesInner>}
     * @memberof CrossAccountRequestDetailByAccount
     */
    'roles'?: Array<CrossAccountRequestWithRolesRolesInner>;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestDetailByAccount
     */
    'first_name'?: any;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestDetailByAccount
     */
    'last_name'?: any;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestDetailByAccount
     */
    'email'?: any;
}
/**
 *
 * @export
 * @interface CrossAccountRequestDetailByUseId
 */
export interface CrossAccountRequestDetailByUseId {
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestDetailByUseId
     */
    'request_id'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestDetailByUseId
     */
    'target_account'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestDetailByUseId
     */
    'target_org'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestDetailByUseId
     */
    'start_date'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestDetailByUseId
     */
    'end_date'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestDetailByUseId
     */
    'status'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestDetailByUseId
     */
    'created'?: string;
    /**
     *
     * @type {Array<CrossAccountRequestWithRolesRolesInner>}
     * @memberof CrossAccountRequestDetailByUseId
     */
    'roles'?: Array<CrossAccountRequestWithRolesRolesInner>;
    /**
     *
     * @type {any}
     * @memberof CrossAccountRequestDetailByUseId
     */
    'user_id'?: any;
}
/**
 *
 * @export
 * @interface CrossAccountRequestIn
 */
export interface CrossAccountRequestIn {
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestIn
     */
    'target_account': string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestIn
     */
    'target_org': string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestIn
     */
    'start_date': string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestIn
     */
    'end_date': string;
    /**
     *
     * @type {Array<string>}
     * @memberof CrossAccountRequestIn
     */
    'roles': Array<string>;
}
/**
 *
 * @export
 * @interface CrossAccountRequestOut
 */
export interface CrossAccountRequestOut {
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestOut
     */
    'request_id'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestOut
     */
    'target_account'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestOut
     */
    'target_org'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestOut
     */
    'start_date'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestOut
     */
    'end_date'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestOut
     */
    'status'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestOut
     */
    'created'?: string;
    /**
     *
     * @type {Array<CrossAccountRequestWithRolesRolesInner>}
     * @memberof CrossAccountRequestOut
     */
    'roles'?: Array<CrossAccountRequestWithRolesRolesInner>;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestOut
     */
    'user_id'?: string;
}
/**
 *
 * @export
 * @interface CrossAccountRequestPagination
 */
export interface CrossAccountRequestPagination {
    /**
     *
     * @type {PaginationMeta}
     * @memberof CrossAccountRequestPagination
     */
    'meta'?: PaginationMeta;
    /**
     *
     * @type {PaginationLinks}
     * @memberof CrossAccountRequestPagination
     */
    'links'?: PaginationLinks;
    /**
     *
     * @type {Array<CrossAccountRequestPaginationAllOfDataInner>}
     * @memberof CrossAccountRequestPagination
     */
    'data': Array<CrossAccountRequestPaginationAllOfDataInner>;
}
/**
 * @type CrossAccountRequestPaginationAllOfDataInner
 * @export
 */
export type CrossAccountRequestPaginationAllOfDataInner = CrossAccountRequestByAccount | CrossAccountRequestByUserId;

/**
 *
 * @export
 * @interface CrossAccountRequestPatch
 */
export interface CrossAccountRequestPatch {
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestPatch
     */
    'start_date'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestPatch
     */
    'end_date'?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof CrossAccountRequestPatch
     */
    'roles'?: Array<string>;
    /**
     *
     * @type {string}
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
     * @type {string}
     * @memberof CrossAccountRequestUpdateIn
     */
    'start_date': string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestUpdateIn
     */
    'end_date': string;
    /**
     *
     * @type {Array<string>}
     * @memberof CrossAccountRequestUpdateIn
     */
    'roles': Array<string>;
}
/**
 *
 * @export
 * @interface CrossAccountRequestWithRoles
 */
export interface CrossAccountRequestWithRoles {
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestWithRoles
     */
    'request_id'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestWithRoles
     */
    'target_account'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestWithRoles
     */
    'target_org'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestWithRoles
     */
    'start_date'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestWithRoles
     */
    'end_date'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestWithRoles
     */
    'status'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestWithRoles
     */
    'created'?: string;
    /**
     *
     * @type {Array<CrossAccountRequestWithRolesRolesInner>}
     * @memberof CrossAccountRequestWithRoles
     */
    'roles'?: Array<CrossAccountRequestWithRolesRolesInner>;
}
/**
 *
 * @export
 * @interface CrossAccountRequestWithRolesRolesInner
 */
export interface CrossAccountRequestWithRolesRolesInner {
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestWithRolesRolesInner
     */
    'display_name'?: string;
    /**
     *
     * @type {string}
     * @memberof CrossAccountRequestWithRolesRolesInner
     */
    'description'?: string;
    /**
     *
     * @type {Array<Permission>}
     * @memberof CrossAccountRequestWithRolesRolesInner
     */
    'permissions'?: Array<Permission>;
}
/**
 *
 * @export
 * @interface Error403
 */
export interface Error403 {
    /**
     *
     * @type {Array<Error403ErrorsInner>}
     * @memberof Error403
     */
    'errors': Array<Error403ErrorsInner>;
}
/**
 *
 * @export
 * @interface Error403ErrorsInner
 */
export interface Error403ErrorsInner {
    /**
     *
     * @type {string}
     * @memberof Error403ErrorsInner
     */
    'detail'?: string;
    /**
     *
     * @type {string}
     * @memberof Error403ErrorsInner
     */
    'source'?: string;
    /**
     *
     * @type {string}
     * @memberof Error403ErrorsInner
     */
    'status'?: string;
}
/**
 *
 * @export
 * @interface ErrorErrorsInner
 */
export interface ErrorErrorsInner {
    /**
     *
     * @type {string}
     * @memberof ErrorErrorsInner
     */
    'detail'?: string;
    /**
     *
     * @type {string}
     * @memberof ErrorErrorsInner
     */
    'status'?: string;
}
/**
 * Error structure for the \"Not Found\" responses.
 * @export
 * @interface ErrorNotFound
 */
export interface ErrorNotFound {
    /**
     *
     * @type {Array<ErrorNotFoundErrorsInner>}
     * @memberof ErrorNotFound
     */
    'errors': Array<ErrorNotFoundErrorsInner>;
}
/**
 *
 * @export
 * @interface ErrorNotFoundErrorsInner
 */
export interface ErrorNotFoundErrorsInner {
    /**
     * Detail of the error.
     * @type {string}
     * @memberof ErrorNotFoundErrorsInner
     */
    'detail'?: string;
    /**
     * Status of the response
     * @type {string}
     * @memberof ErrorNotFoundErrorsInner
     */
    'status'?: string;
    /**
     * Source of the error.
     * @type {string}
     * @memberof ErrorNotFoundErrorsInner
     */
    'source'?: string;
}
/**
 * @type GetPrincipalsFromGroup200Response
 * @export
 */
export type GetPrincipalsFromGroup200Response = PrincipalPagination | ServiceAccountInGroupResponse | ServiceAccountPagination;

/**
 *
 * @export
 * @interface Group
 */
export interface Group {
    /**
     *
     * @type {string}
     * @memberof Group
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof Group
     */
    'description'?: string;
}
/**
 *
 * @export
 * @interface GroupOut
 */
export interface GroupOut {
    /**
     *
     * @type {string}
     * @memberof GroupOut
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof GroupOut
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof GroupOut
     */
    'uuid': string;
    /**
     *
     * @type {string}
     * @memberof GroupOut
     */
    'created': string;
    /**
     *
     * @type {string}
     * @memberof GroupOut
     */
    'modified': string;
    /**
     *
     * @type {number}
     * @memberof GroupOut
     */
    'principalCount'?: number;
    /**
     *
     * @type {number}
     * @memberof GroupOut
     */
    'roleCount'?: number;
    /**
     *
     * @type {boolean}
     * @memberof GroupOut
     */
    'system'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupOut
     */
    'platform_default'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupOut
     */
    'admin_default'?: boolean;
}
/**
 *
 * @export
 * @interface GroupPagination
 */
export interface GroupPagination {
    /**
     *
     * @type {PaginationMeta}
     * @memberof GroupPagination
     */
    'meta'?: PaginationMeta;
    /**
     *
     * @type {PaginationLinks}
     * @memberof GroupPagination
     */
    'links'?: PaginationLinks;
    /**
     *
     * @type {Array<GroupOut>}
     * @memberof GroupPagination
     */
    'data': Array<GroupOut>;
}
/**
 *
 * @export
 * @interface GroupPrincipalIn
 */
export interface GroupPrincipalIn {
    /**
     *
     * @type {Array<GroupPrincipalInPrincipalsInner>}
     * @memberof GroupPrincipalIn
     */
    'principals': Array<GroupPrincipalInPrincipalsInner>;
}
/**
 *
 * @export
 * @interface GroupPrincipalInPrincipalsInner
 */
export interface GroupPrincipalInPrincipalsInner {
    /**
     *
     * @type {string}
     * @memberof GroupPrincipalInPrincipalsInner
     */
    'username': string;
    /**
     *
     * @type {string}
     * @memberof GroupPrincipalInPrincipalsInner
     */
    'type': GroupPrincipalInPrincipalsInnerTypeEnum;
    /**
     *
     * @type {string}
     * @memberof GroupPrincipalInPrincipalsInner
     */
    'clientID': string;
}

export const GroupPrincipalInPrincipalsInnerTypeEnum = {
    ServiceAccount: 'service-account'
} as const;

export type GroupPrincipalInPrincipalsInnerTypeEnum = typeof GroupPrincipalInPrincipalsInnerTypeEnum[keyof typeof GroupPrincipalInPrincipalsInnerTypeEnum];

/**
 *
 * @export
 * @interface GroupRoleIn
 */
export interface GroupRoleIn {
    /**
     *
     * @type {Array<string>}
     * @memberof GroupRoleIn
     */
    'roles': Array<string>;
}
/**
 *
 * @export
 * @interface GroupRolesPagination
 */
export interface GroupRolesPagination {
    /**
     *
     * @type {PaginationMeta}
     * @memberof GroupRolesPagination
     */
    'meta'?: PaginationMeta;
    /**
     *
     * @type {PaginationLinks}
     * @memberof GroupRolesPagination
     */
    'links'?: PaginationLinks;
    /**
     *
     * @type {Array<RoleOut>}
     * @memberof GroupRolesPagination
     */
    'data': Array<RoleOut>;
}
/**
 *
 * @export
 * @interface GroupWithPrincipals
 */
export interface GroupWithPrincipals {
    /**
     *
     * @type {string}
     * @memberof GroupWithPrincipals
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof GroupWithPrincipals
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof GroupWithPrincipals
     */
    'uuid': string;
    /**
     *
     * @type {string}
     * @memberof GroupWithPrincipals
     */
    'created': string;
    /**
     *
     * @type {string}
     * @memberof GroupWithPrincipals
     */
    'modified': string;
    /**
     *
     * @type {Array<Principal>}
     * @memberof GroupWithPrincipals
     */
    'principals': Array<Principal>;
}
/**
 *
 * @export
 * @interface GroupWithPrincipalsAndRoles
 */
export interface GroupWithPrincipalsAndRoles {
    /**
     *
     * @type {string}
     * @memberof GroupWithPrincipalsAndRoles
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof GroupWithPrincipalsAndRoles
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof GroupWithPrincipalsAndRoles
     */
    'uuid': string;
    /**
     *
     * @type {string}
     * @memberof GroupWithPrincipalsAndRoles
     */
    'created': string;
    /**
     *
     * @type {string}
     * @memberof GroupWithPrincipalsAndRoles
     */
    'modified': string;
    /**
     *
     * @type {Array<Principal>}
     * @memberof GroupWithPrincipalsAndRoles
     */
    'principals': Array<Principal>;
    /**
     *
     * @type {Array<RoleOut>}
     * @memberof GroupWithPrincipalsAndRoles
     */
    'roles': Array<RoleOut>;
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
 * @type ListPrincipals200Response
 * @export
 */
export type ListPrincipals200Response = PrincipalPagination | ServiceAccountPagination;

/**
 *
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     *
     * @type {Array<ErrorErrorsInner>}
     * @memberof ModelError
     */
    'errors': Array<ErrorErrorsInner>;
}
/**
 *
 * @export
 * @interface PaginationLinks
 */
export interface PaginationLinks {
    /**
     *
     * @type {string}
     * @memberof PaginationLinks
     */
    'first'?: string;
    /**
     *
     * @type {string}
     * @memberof PaginationLinks
     */
    'previous'?: string;
    /**
     *
     * @type {string}
     * @memberof PaginationLinks
     */
    'next'?: string;
    /**
     *
     * @type {string}
     * @memberof PaginationLinks
     */
    'last'?: string;
}
/**
 *
 * @export
 * @interface PaginationMeta
 */
export interface PaginationMeta {
    /**
     *
     * @type {number}
     * @memberof PaginationMeta
     */
    'count'?: number;
}
/**
 *
 * @export
 * @interface Permission
 */
export interface Permission {
    /**
     *
     * @type {string}
     * @memberof Permission
     */
    'application'?: string;
    /**
     *
     * @type {string}
     * @memberof Permission
     */
    'resource_type'?: string;
    /**
     *
     * @type {string}
     * @memberof Permission
     */
    'verb'?: string;
    /**
     *
     * @type {string}
     * @memberof Permission
     */
    'permission'?: string;
    /**
     *
     * @type {string}
     * @memberof Permission
     */
    'description'?: string;
}
/**
 *
 * @export
 * @interface PermissionOptionsPagination
 */
export interface PermissionOptionsPagination {
    /**
     *
     * @type {PaginationMeta}
     * @memberof PermissionOptionsPagination
     */
    'meta'?: PaginationMeta;
    /**
     *
     * @type {PaginationLinks}
     * @memberof PermissionOptionsPagination
     */
    'links'?: PaginationLinks;
    /**
     *
     * @type {Array<string>}
     * @memberof PermissionOptionsPagination
     */
    'data': Array<string>;
}
/**
 *
 * @export
 * @interface PermissionPagination
 */
export interface PermissionPagination {
    /**
     *
     * @type {PaginationMeta}
     * @memberof PermissionPagination
     */
    'meta'?: PaginationMeta;
    /**
     *
     * @type {PaginationLinks}
     * @memberof PermissionPagination
     */
    'links'?: PaginationLinks;
    /**
     *
     * @type {Array<Permission>}
     * @memberof PermissionPagination
     */
    'data': Array<Permission>;
}
/**
 *
 * @export
 * @interface Policy
 */
export interface Policy {
    /**
     *
     * @type {string}
     * @memberof Policy
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof Policy
     */
    'description'?: string;
}
/**
 *
 * @export
 * @interface PolicyExtended
 */
export interface PolicyExtended {
    /**
     *
     * @type {string}
     * @memberof PolicyExtended
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof PolicyExtended
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof PolicyExtended
     */
    'uuid': string;
    /**
     *
     * @type {string}
     * @memberof PolicyExtended
     */
    'created': string;
    /**
     *
     * @type {string}
     * @memberof PolicyExtended
     */
    'modified': string;
    /**
     *
     * @type {GroupOut}
     * @memberof PolicyExtended
     */
    'group': GroupOut;
    /**
     *
     * @type {Array<RoleOut>}
     * @memberof PolicyExtended
     */
    'roles': Array<RoleOut>;
}
/**
 *
 * @export
 * @interface PolicyIn
 */
export interface PolicyIn {
    /**
     *
     * @type {string}
     * @memberof PolicyIn
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof PolicyIn
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof PolicyIn
     */
    'group': string;
    /**
     *
     * @type {Array<string>}
     * @memberof PolicyIn
     */
    'roles': Array<string>;
}
/**
 *
 * @export
 * @interface PolicyPagination
 */
export interface PolicyPagination {
    /**
     *
     * @type {PaginationMeta}
     * @memberof PolicyPagination
     */
    'meta'?: PaginationMeta;
    /**
     *
     * @type {PaginationLinks}
     * @memberof PolicyPagination
     */
    'links'?: PaginationLinks;
    /**
     *
     * @type {Array<PolicyExtended>}
     * @memberof PolicyPagination
     */
    'data': Array<PolicyExtended>;
}
/**
 *
 * @export
 * @interface Principal
 */
export interface Principal {
    /**
     *
     * @type {string}
     * @memberof Principal
     */
    'username': string;
    /**
     *
     * @type {string}
     * @memberof Principal
     */
    'email': string;
    /**
     *
     * @type {string}
     * @memberof Principal
     */
    'first_name'?: string;
    /**
     *
     * @type {string}
     * @memberof Principal
     */
    'last_name'?: string;
    /**
     *
     * @type {boolean}
     * @memberof Principal
     */
    'is_active'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Principal
     */
    'is_org_admin'?: boolean;
    /**
     *
     * @type {PrincipalExternalSourceId}
     * @memberof Principal
     */
    'external_source_id'?: PrincipalExternalSourceId;
}
/**
 * @type PrincipalExternalSourceId
 * @export
 */
export type PrincipalExternalSourceId = number | string;

/**
 *
 * @export
 * @interface PrincipalIn
 */
export interface PrincipalIn {
    /**
     *
     * @type {string}
     * @memberof PrincipalIn
     */
    'username': string;
}
/**
 *
 * @export
 * @interface PrincipalMinimal
 */
export interface PrincipalMinimal {
    /**
     *
     * @type {string}
     * @memberof PrincipalMinimal
     */
    'username': string;
}
/**
 *
 * @export
 * @interface PrincipalOut
 */
export interface PrincipalOut {
    /**
     *
     * @type {string}
     * @memberof PrincipalOut
     */
    'username': string;
    /**
     *
     * @type {string}
     * @memberof PrincipalOut
     */
    'email': string;
    /**
     *
     * @type {string}
     * @memberof PrincipalOut
     */
    'first_name'?: string;
    /**
     *
     * @type {string}
     * @memberof PrincipalOut
     */
    'last_name'?: string;
    /**
     *
     * @type {boolean}
     * @memberof PrincipalOut
     */
    'is_active'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PrincipalOut
     */
    'is_org_admin'?: boolean;
    /**
     *
     * @type {PrincipalExternalSourceId}
     * @memberof PrincipalOut
     */
    'external_source_id'?: PrincipalExternalSourceId;
    /**
     *
     * @type {string}
     * @memberof PrincipalOut
     */
    'uuid': string;
}
/**
 *
 * @export
 * @interface PrincipalPagination
 */
export interface PrincipalPagination {
    /**
     *
     * @type {PaginationMeta}
     * @memberof PrincipalPagination
     */
    'meta'?: PaginationMeta;
    /**
     *
     * @type {PaginationLinks}
     * @memberof PrincipalPagination
     */
    'links'?: PaginationLinks;
    /**
     *
     * @type {Array<PrincipalPaginationAllOfDataInner>}
     * @memberof PrincipalPagination
     */
    'data': Array<PrincipalPaginationAllOfDataInner>;
}
/**
 * @type PrincipalPaginationAllOfDataInner
 * @export
 */
export type PrincipalPaginationAllOfDataInner = Principal | PrincipalMinimal;

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
     * @type {string}
     * @memberof ResourceDefinitionFilter
     */
    'key': string;
    /**
     *
     * @type {string}
     * @memberof ResourceDefinitionFilter
     */
    'operation': ResourceDefinitionFilterOperationEnum;
    /**
     *
     * @type {ResourceDefinitionFilterValue}
     * @memberof ResourceDefinitionFilter
     */
    'value': ResourceDefinitionFilterValue;
}

export const ResourceDefinitionFilterOperationEnum = {
    Equal: 'equal',
    In: 'in'
} as const;

export type ResourceDefinitionFilterOperationEnum = typeof ResourceDefinitionFilterOperationEnum[keyof typeof ResourceDefinitionFilterOperationEnum];

/**
 * @type ResourceDefinitionFilterValue
 * @export
 */
export type ResourceDefinitionFilterValue = Array<ResourceDefinitionFilterValueObject> | string;

/**
 * @type ResourceDefinitionFilterValueObject
 * @export
 */
export type ResourceDefinitionFilterValueObject = string;

/**
 *
 * @export
 * @interface Role
 */
export interface Role {
    /**
     *
     * @type {string}
     * @memberof Role
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof Role
     */
    'display_name'?: string;
    /**
     *
     * @type {string}
     * @memberof Role
     */
    'description'?: string;
}
/**
 *
 * @export
 * @interface RoleIn
 */
export interface RoleIn {
    /**
     *
     * @type {string}
     * @memberof RoleIn
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof RoleIn
     */
    'display_name'?: string;
    /**
     *
     * @type {string}
     * @memberof RoleIn
     */
    'description'?: string;
    /**
     *
     * @type {Array<Access>}
     * @memberof RoleIn
     */
    'access': Array<Access>;
}
/**
 *
 * @export
 * @interface RoleOut
 */
export interface RoleOut {
    /**
     *
     * @type {string}
     * @memberof RoleOut
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof RoleOut
     */
    'display_name'?: string;
    /**
     *
     * @type {string}
     * @memberof RoleOut
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof RoleOut
     */
    'uuid': string;
    /**
     *
     * @type {string}
     * @memberof RoleOut
     */
    'created': string;
    /**
     *
     * @type {string}
     * @memberof RoleOut
     */
    'modified': string;
    /**
     *
     * @type {number}
     * @memberof RoleOut
     */
    'policyCount'?: number;
    /**
     *
     * @type {number}
     * @memberof RoleOut
     */
    'accessCount'?: number;
    /**
     *
     * @type {Array<string>}
     * @memberof RoleOut
     */
    'applications'?: Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof RoleOut
     */
    'system'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RoleOut
     */
    'platform_default'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RoleOut
     */
    'admin_default'?: boolean;
    /**
     *
     * @type {string}
     * @memberof RoleOut
     */
    'external_role_id'?: string;
    /**
     *
     * @type {string}
     * @memberof RoleOut
     */
    'external_tenant'?: string;
}
/**
 *
 * @export
 * @interface RoleOutDynamic
 */
export interface RoleOutDynamic {
    /**
     *
     * @type {string}
     * @memberof RoleOutDynamic
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof RoleOutDynamic
     */
    'display_name'?: string;
    /**
     *
     * @type {string}
     * @memberof RoleOutDynamic
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof RoleOutDynamic
     */
    'uuid': string;
    /**
     *
     * @type {string}
     * @memberof RoleOutDynamic
     */
    'created': string;
    /**
     *
     * @type {string}
     * @memberof RoleOutDynamic
     */
    'modified': string;
    /**
     *
     * @type {number}
     * @memberof RoleOutDynamic
     */
    'policyCount': number;
    /**
     *
     * @type {number}
     * @memberof RoleOutDynamic
     */
    'accessCount': number;
    /**
     *
     * @type {Array<string>}
     * @memberof RoleOutDynamic
     */
    'applications': Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof RoleOutDynamic
     */
    'system': boolean;
    /**
     *
     * @type {boolean}
     * @memberof RoleOutDynamic
     */
    'platform_default': boolean;
    /**
     *
     * @type {boolean}
     * @memberof RoleOutDynamic
     */
    'admin_default': boolean;
    /**
     *
     * @type {number}
     * @memberof RoleOutDynamic
     */
    'groups_in_count'?: number;
    /**
     *
     * @type {Array<AdditionalGroup>}
     * @memberof RoleOutDynamic
     */
    'groups_in'?: Array<AdditionalGroup>;
    /**
     *
     * @type {string}
     * @memberof RoleOutDynamic
     */
    'external_role_id'?: string;
    /**
     *
     * @type {string}
     * @memberof RoleOutDynamic
     */
    'external_tenant'?: string;
    /**
     *
     * @type {Array<Access>}
     * @memberof RoleOutDynamic
     */
    'access'?: Array<Access>;
}
/**
 *
 * @export
 * @interface RolePagination
 */
export interface RolePagination {
    /**
     *
     * @type {PaginationMeta}
     * @memberof RolePagination
     */
    'meta'?: PaginationMeta;
    /**
     *
     * @type {PaginationLinks}
     * @memberof RolePagination
     */
    'links'?: PaginationLinks;
    /**
     *
     * @type {Array<RoleOut>}
     * @memberof RolePagination
     */
    'data': Array<RoleOut>;
}
/**
 *
 * @export
 * @interface RolePaginationDynamic
 */
export interface RolePaginationDynamic {
    /**
     *
     * @type {PaginationMeta}
     * @memberof RolePaginationDynamic
     */
    'meta'?: PaginationMeta;
    /**
     *
     * @type {PaginationLinks}
     * @memberof RolePaginationDynamic
     */
    'links'?: PaginationLinks;
    /**
     *
     * @type {Array<RoleOutDynamic>}
     * @memberof RolePaginationDynamic
     */
    'data': Array<RoleOutDynamic>;
}
/**
 *
 * @export
 * @interface RolePatch
 */
export interface RolePatch {
    /**
     *
     * @type {string}
     * @memberof RolePatch
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof RolePatch
     */
    'display_name'?: string;
    /**
     *
     * @type {string}
     * @memberof RolePatch
     */
    'description'?: string;
}
/**
 *
 * @export
 * @interface RoleWithAccess
 */
export interface RoleWithAccess {
    /**
     *
     * @type {string}
     * @memberof RoleWithAccess
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof RoleWithAccess
     */
    'display_name'?: string;
    /**
     *
     * @type {string}
     * @memberof RoleWithAccess
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof RoleWithAccess
     */
    'uuid': string;
    /**
     *
     * @type {string}
     * @memberof RoleWithAccess
     */
    'created': string;
    /**
     *
     * @type {string}
     * @memberof RoleWithAccess
     */
    'modified': string;
    /**
     *
     * @type {number}
     * @memberof RoleWithAccess
     */
    'policyCount'?: number;
    /**
     *
     * @type {number}
     * @memberof RoleWithAccess
     */
    'accessCount'?: number;
    /**
     *
     * @type {Array<string>}
     * @memberof RoleWithAccess
     */
    'applications'?: Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof RoleWithAccess
     */
    'system'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RoleWithAccess
     */
    'platform_default'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RoleWithAccess
     */
    'admin_default'?: boolean;
    /**
     *
     * @type {string}
     * @memberof RoleWithAccess
     */
    'external_role_id'?: string;
    /**
     *
     * @type {string}
     * @memberof RoleWithAccess
     */
    'external_tenant'?: string;
    /**
     *
     * @type {Array<Access>}
     * @memberof RoleWithAccess
     */
    'access': Array<Access>;
}
/**
 *
 * @export
 * @interface ServiceAccount
 */
export interface ServiceAccount {
    /**
     *
     * @type {string}
     * @memberof ServiceAccount
     */
    'username': string;
    /**
     *
     * @type {string}
     * @memberof ServiceAccount
     */
    'type': ServiceAccountTypeEnum;
    /**
     *
     * @type {string}
     * @memberof ServiceAccount
     */
    'clientID': string;
    /**
     *
     * @type {string}
     * @memberof ServiceAccount
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceAccount
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceAccount
     */
    'owner'?: string;
    /**
     *
     * @type {number}
     * @memberof ServiceAccount
     */
    'time_created'?: number;
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
     * @type {string}
     * @memberof ServiceAccountIn
     */
    'type': ServiceAccountInTypeEnum;
    /**
     *
     * @type {string}
     * @memberof ServiceAccountIn
     */
    'clientID': string;
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
     * @type {object}
     * @memberof ServiceAccountInGroupResponse
     */
    'links'?: object;
    /**
     * Object which indicates whether the given service account UUIDs in the query parameter are present in the specified group or not
     * @type {{ [key: string]: boolean; }}
     * @memberof ServiceAccountInGroupResponse
     */
    'data'?: { [key: string]: boolean; };
}
/**
 *
 * @export
 * @interface ServiceAccountPagination
 */
export interface ServiceAccountPagination {
    /**
     *
     * @type {PaginationMeta}
     * @memberof ServiceAccountPagination
     */
    'meta'?: PaginationMeta;
    /**
     *
     * @type {PaginationLinks}
     * @memberof ServiceAccountPagination
     */
    'links'?: PaginationLinks;
    /**
     *
     * @type {Array<ServiceAccount>}
     * @memberof ServiceAccountPagination
     */
    'data': Array<ServiceAccount>;
}
/**
 *
 * @export
 * @interface Status
 */
export interface Status {
    /**
     *
     * @type {number}
     * @memberof Status
     */
    'api_version': number;
    /**
     *
     * @type {string}
     * @memberof Status
     */
    'commit'?: string;
}
/**
 *
 * @export
 * @interface Timestamped
 */
export interface Timestamped {
    /**
     *
     * @type {string}
     * @memberof Timestamped
     */
    'created': string;
    /**
     *
     * @type {string}
     * @memberof Timestamped
     */
    'modified': string;
}
/**
 *
 * @export
 * @interface UUID
 */
export interface UUID {
    /**
     *
     * @type {string}
     * @memberof UUID
     */
    'uuid': string;
}
