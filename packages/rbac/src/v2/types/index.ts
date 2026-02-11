/**
 *
 * @export
 * @interface CursorPaginationLinks
 */
export interface CursorPaginationLinks {
    /**
     * The next link in pagination
     * @type {string}
     * @memberof CursorPaginationLinks
     */
    'next': string | null;
    /**
     * The previous link in pagination
     * @type {string}
     * @memberof CursorPaginationLinks
     */
    'previous': string | null;
}
/**
 *
 * @export
 * @interface CursorPaginationMeta
 */
export interface CursorPaginationMeta {
    /**
     * Limit for pagination. Controls the maximum number of items returned. Use -1 to return all objects.
     * @type {number}
     * @memberof CursorPaginationMeta
     */
    'limit': number;
}
/**
 *
 * @export
 * @interface OffsetPaginationLinks
 */
export interface OffsetPaginationLinks {
    /**
     * The first link in pagination
     * @type {string}
     * @memberof OffsetPaginationLinks
     */
    'first': string | null;
    /**
     * The next link in pagination
     * @type {string}
     * @memberof OffsetPaginationLinks
     */
    'next': string | null;
    /**
     * The previous link in pagination
     * @type {string}
     * @memberof OffsetPaginationLinks
     */
    'previous': string | null;
    /**
     * The last link in pagination
     * @type {string}
     * @memberof OffsetPaginationLinks
     */
    'last': string | null;
}
/**
 *
 * @export
 * @interface OffsetPaginationMeta
 */
export interface OffsetPaginationMeta {
    /**
     * Total count of objects
     * @type {number}
     * @memberof OffsetPaginationMeta
     */
    'count': number;
    /**
     * Limit for pagination. Controls the maximum number of items returned. Use -1 to return all objects.
     * @type {number}
     * @memberof OffsetPaginationMeta
     */
    'limit': number;
    /**
     * Offset for offset-based pagination. The number of items to skip before starting to return results.
     * @type {number}
     * @memberof OffsetPaginationMeta
     */
    'offset': number;
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
    'application': string;
    /**
     *
     * @type {string}
     * @memberof Permission
     */
    'resource_type': string;
    /**
     *
     * @type {string}
     * @memberof Permission
     */
    'operation': string;
}
/**
 *
 * @export
 * @interface ProblemsProblem400
 */
export interface ProblemsProblem400 {
    /**
     *
     * @type {string}
     * @memberof ProblemsProblem400
     */
    'title': ProblemsProblem400TitleEnum;
    /**
     *
     * @type {string}
     * @memberof ProblemsProblem400
     */
    'detail': string;
    /**
     *
     * @type {ProblemsProblemType}
     * @memberof ProblemsProblem400
     */
    'type'?: ProblemsProblemType;
    /**
     *
     * @type {number}
     * @memberof ProblemsProblem400
     */
    'status'?: ProblemsProblem400StatusEnum;
    /**
     *
     * @type {string}
     * @memberof ProblemsProblem400
     */
    'instance'?: string;
}

export const ProblemsProblem400TitleEnum = {
    TheRequestPayloadContainsInvalidSyntax: 'The request payload contains invalid syntax.'
} as const;

export type ProblemsProblem400TitleEnum = typeof ProblemsProblem400TitleEnum[keyof typeof ProblemsProblem400TitleEnum];
export const ProblemsProblem400StatusEnum = {
    NUMBER_400: 400
} as const;

export type ProblemsProblem400StatusEnum = typeof ProblemsProblem400StatusEnum[keyof typeof ProblemsProblem400StatusEnum];

/**
 *
 * @export
 * @interface ProblemsProblem403
 */
export interface ProblemsProblem403 {
    /**
     *
     * @type {string}
     * @memberof ProblemsProblem403
     */
    'type': ProblemsProblem403TypeEnum;
    /**
     *
     * @type {string}
     * @memberof ProblemsProblem403
     */
    'title': ProblemsProblem403TitleEnum;
    /**
     *
     * @type {number}
     * @memberof ProblemsProblem403
     */
    'status'?: ProblemsProblem403StatusEnum;
    /**
     *
     * @type {string}
     * @memberof ProblemsProblem403
     */
    'detail'?: string;
    /**
     *
     * @type {string}
     * @memberof ProblemsProblem403
     */
    'instance'?: string;
}

export const ProblemsProblem403TypeEnum = {
    HttpProjectKesselOrgProblemsInsufficientPermission: 'http://project-kessel.org/problems/insufficient-permission'
} as const;

export type ProblemsProblem403TypeEnum = typeof ProblemsProblem403TypeEnum[keyof typeof ProblemsProblem403TypeEnum];
export const ProblemsProblem403TitleEnum = {
    YouDoNotHavePermissionToPerformThisAction: 'You do not have permission to perform this action.'
} as const;

export type ProblemsProblem403TitleEnum = typeof ProblemsProblem403TitleEnum[keyof typeof ProblemsProblem403TitleEnum];
export const ProblemsProblem403StatusEnum = {
    NUMBER_403: 403
} as const;

export type ProblemsProblem403StatusEnum = typeof ProblemsProblem403StatusEnum[keyof typeof ProblemsProblem403StatusEnum];

/**
 *
 * @export
 * @interface ProblemsProblem404
 */
export interface ProblemsProblem404 {
    /**
     *
     * @type {string}
     * @memberof ProblemsProblem404
     */
    'title': ProblemsProblem404TitleEnum;
    /**
     *
     * @type {string}
     * @memberof ProblemsProblem404
     */
    'detail': string;
    /**
     *
     * @type {ProblemsProblemType}
     * @memberof ProblemsProblem404
     */
    'type'?: ProblemsProblemType;
    /**
     *
     * @type {number}
     * @memberof ProblemsProblem404
     */
    'status'?: ProblemsProblem404StatusEnum;
    /**
     *
     * @type {string}
     * @memberof ProblemsProblem404
     */
    'instance'?: string;
}

export const ProblemsProblem404TitleEnum = {
    ResourceWasNotFound: 'Resource was not found'
} as const;

export type ProblemsProblem404TitleEnum = typeof ProblemsProblem404TitleEnum[keyof typeof ProblemsProblem404TitleEnum];
export const ProblemsProblem404StatusEnum = {
    NUMBER_404: 404
} as const;

export type ProblemsProblem404StatusEnum = typeof ProblemsProblem404StatusEnum[keyof typeof ProblemsProblem404StatusEnum];

/**
 *
 * @export
 * @enum {string}
 */

export const ProblemsProblemType = {
    HttpProjectKesselOrgProblemsInsufficientPermission: 'http://project-kessel.org/problems/insufficient-permission'
} as const;

export type ProblemsProblemType = typeof ProblemsProblemType[keyof typeof ProblemsProblemType];


/**
 *
 * @export
 * @interface ProblemsWorkspaceProblem400WorkspaceNotEmpty
 */
export interface ProblemsWorkspaceProblem400WorkspaceNotEmpty {
    /**
     *
     * @type {string}
     * @memberof ProblemsWorkspaceProblem400WorkspaceNotEmpty
     */
    'title': ProblemsWorkspaceProblem400WorkspaceNotEmptyTitleEnum;
    /**
     *
     * @type {ProblemsProblemType}
     * @memberof ProblemsWorkspaceProblem400WorkspaceNotEmpty
     */
    'type'?: ProblemsProblemType;
    /**
     *
     * @type {number}
     * @memberof ProblemsWorkspaceProblem400WorkspaceNotEmpty
     */
    'status'?: ProblemsWorkspaceProblem400WorkspaceNotEmptyStatusEnum;
    /**
     *
     * @type {string}
     * @memberof ProblemsWorkspaceProblem400WorkspaceNotEmpty
     */
    'detail'?: string;
    /**
     *
     * @type {string}
     * @memberof ProblemsWorkspaceProblem400WorkspaceNotEmpty
     */
    'instance'?: string;
}

export const ProblemsWorkspaceProblem400WorkspaceNotEmptyTitleEnum = {
    UnableToDeleteDueToWorkspaceDependencies: 'Unable to delete due to workspace dependencies'
} as const;

export type ProblemsWorkspaceProblem400WorkspaceNotEmptyTitleEnum = typeof ProblemsWorkspaceProblem400WorkspaceNotEmptyTitleEnum[keyof typeof ProblemsWorkspaceProblem400WorkspaceNotEmptyTitleEnum];
export const ProblemsWorkspaceProblem400WorkspaceNotEmptyStatusEnum = {
    NUMBER_400: 400
} as const;

export type ProblemsWorkspaceProblem400WorkspaceNotEmptyStatusEnum = typeof ProblemsWorkspaceProblem400WorkspaceNotEmptyStatusEnum[keyof typeof ProblemsWorkspaceProblem400WorkspaceNotEmptyStatusEnum];

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
    'id'?: string;
    /**
     * A human readable name for the role. Must be unique within a tenant.
     * @type {string}
     * @memberof Role
     */
    'name'?: string;
    /**
     * A description of the role to help clarify its purpose. Does not need to be unique.
     * @type {string}
     * @memberof Role
     */
    'description'?: string;
    /**
     * List of permissions assigned to this role
     * @type {Array<Permission>}
     * @memberof Role
     */
    'permissions'?: Array<Permission>;
    /**
     * Number of permissions assigned to this role
     * @type {number}
     * @memberof Role
     */
    'permissions_count'?: number;
    /**
     * Timestamp of when the role was last modified
     * @type {string}
     * @memberof Role
     */
    'last_modified'?: string;
}
/**
 *
 * @export
 * @interface RoleBindingsBaseSubject
 */
export interface RoleBindingsBaseSubject {
    /**
     *
     * @type {string}
     * @memberof RoleBindingsBaseSubject
     */
    'id'?: string;
    /**
     * Type of subject
     * @type {string}
     * @memberof RoleBindingsBaseSubject
     */
    'type': string;
}
/**
 * Batch request to create multiple role bindings
 * @export
 * @interface RoleBindingsBatchCreateRoleBindingsRequest
 */
export interface RoleBindingsBatchCreateRoleBindingsRequest {
    /**
     * List of role bindings to create (maximum 100)
     * @type {Array<RoleBindingsCreateRoleBindingsRequest>}
     * @memberof RoleBindingsBatchCreateRoleBindingsRequest
     */
    'requests': Array<RoleBindingsCreateRoleBindingsRequest>;
}
/**
 * Response containing the created role bindings
 * @export
 * @interface RoleBindingsBatchCreateRoleBindingsResponse
 */
export interface RoleBindingsBatchCreateRoleBindingsResponse {
    /**
     * The role bindings that were created
     * @type {Array<RoleBindingsRoleBinding>}
     * @memberof RoleBindingsBatchCreateRoleBindingsResponse
     */
    'role_bindings': Array<RoleBindingsRoleBinding>;
}
/**
 * Request body for creating role bindings
 * @export
 * @interface RoleBindingsCreateRoleBindingsRequest
 */
export interface RoleBindingsCreateRoleBindingsRequest {
    /**
     *
     * @type {RoleBindingsCreateRoleBindingsRequestResource}
     * @memberof RoleBindingsCreateRoleBindingsRequest
     */
    'resource': RoleBindingsCreateRoleBindingsRequestResource;
    /**
     *
     * @type {RoleBindingsCreateRoleBindingsRequestSubject}
     * @memberof RoleBindingsCreateRoleBindingsRequest
     */
    'subject': RoleBindingsCreateRoleBindingsRequestSubject;
    /**
     *
     * @type {RoleBindingsCreateRoleBindingsRequestRole}
     * @memberof RoleBindingsCreateRoleBindingsRequest
     */
    'role': RoleBindingsCreateRoleBindingsRequestRole;
}
/**
 * Resource to bind the role to
 * @export
 * @interface RoleBindingsCreateRoleBindingsRequestResource
 */
export interface RoleBindingsCreateRoleBindingsRequestResource {
    /**
     *
     * @type {string}
     * @memberof RoleBindingsCreateRoleBindingsRequestResource
     */
    'id': string;
    /**
     * Type of resource
     * @type {string}
     * @memberof RoleBindingsCreateRoleBindingsRequestResource
     */
    'type': string;
}
/**
 * Role to assign
 * @export
 * @interface RoleBindingsCreateRoleBindingsRequestRole
 */
export interface RoleBindingsCreateRoleBindingsRequestRole {
    /**
     *
     * @type {string}
     * @memberof RoleBindingsCreateRoleBindingsRequestRole
     */
    'id': string;
}
/**
 * Subject to grant access to
 * @export
 * @interface RoleBindingsCreateRoleBindingsRequestSubject
 */
export interface RoleBindingsCreateRoleBindingsRequestSubject {
    /**
     *
     * @type {string}
     * @memberof RoleBindingsCreateRoleBindingsRequestSubject
     */
    'id': string;
    /**
     * Type of subject
     * @type {string}
     * @memberof RoleBindingsCreateRoleBindingsRequestSubject
     */
    'type': RoleBindingsCreateRoleBindingsRequestSubjectTypeEnum;
}

export const RoleBindingsCreateRoleBindingsRequestSubjectTypeEnum = {
    User: 'user',
    Group: 'group'
} as const;

export type RoleBindingsCreateRoleBindingsRequestSubjectTypeEnum = typeof RoleBindingsCreateRoleBindingsRequestSubjectTypeEnum[keyof typeof RoleBindingsCreateRoleBindingsRequestSubjectTypeEnum];

/**
 *
 * @export
 * @interface RoleBindingsGroupDetails
 */
export interface RoleBindingsGroupDetails {
    /**
     * Name of the group
     * @type {string}
     * @memberof RoleBindingsGroupDetails
     */
    'name'?: string;
    /**
     * Description of the group
     * @type {string}
     * @memberof RoleBindingsGroupDetails
     */
    'description'?: string;
    /**
     * Number of users in the group
     * @type {number}
     * @memberof RoleBindingsGroupDetails
     */
    'user_count'?: number;
}
/**
 *
 * @export
 * @interface RoleBindingsGroupSubject
 */
export interface RoleBindingsGroupSubject extends RoleBindingsBaseSubject {
    /**
     * Type of subject
     * @type {string}
     * @memberof RoleBindingsGroupSubject
     */
    'type': RoleBindingsGroupSubjectTypeEnum;
    /**
     *
     * @type {RoleBindingsGroupDetails}
     * @memberof RoleBindingsGroupSubject
     */
    'group'?: RoleBindingsGroupDetails;
}

export const RoleBindingsGroupSubjectTypeEnum = {
    Group: 'group'
} as const;

export type RoleBindingsGroupSubjectTypeEnum = typeof RoleBindingsGroupSubjectTypeEnum[keyof typeof RoleBindingsGroupSubjectTypeEnum];

/**
 *
 * @export
 * @interface RoleBindingsList200Response
 */
export interface RoleBindingsList200Response {
    /**
     *
     * @type {CursorPaginationMeta}
     * @memberof RoleBindingsList200Response
     */
    'meta': CursorPaginationMeta;
    /**
     *
     * @type {CursorPaginationLinks}
     * @memberof RoleBindingsList200Response
     */
    'links': CursorPaginationLinks;
    /**
     *
     * @type {Array<RoleBindingsRoleBinding>}
     * @memberof RoleBindingsList200Response
     */
    'data': Array<RoleBindingsRoleBinding>;
}
/**
 *
 * @export
 * @interface RoleBindingsList401Response
 */
export interface RoleBindingsList401Response {
    /**
     *
     * @type {ProblemsProblemType}
     * @memberof RoleBindingsList401Response
     */
    'type'?: ProblemsProblemType;
    /**
     *
     * @type {number}
     * @memberof RoleBindingsList401Response
     */
    'status'?: RoleBindingsList401ResponseStatusEnum;
    /**
     *
     * @type {string}
     * @memberof RoleBindingsList401Response
     */
    'title'?: string;
    /**
     *
     * @type {string}
     * @memberof RoleBindingsList401Response
     */
    'detail'?: string;
    /**
     *
     * @type {string}
     * @memberof RoleBindingsList401Response
     */
    'instance'?: string;
}

export const RoleBindingsList401ResponseStatusEnum = {
    NUMBER_401: 401
} as const;

export type RoleBindingsList401ResponseStatusEnum = typeof RoleBindingsList401ResponseStatusEnum[keyof typeof RoleBindingsList401ResponseStatusEnum];

/**
 *
 * @export
 * @interface RoleBindingsList500Response
 */
export interface RoleBindingsList500Response {
    /**
     *
     * @type {ProblemsProblemType}
     * @memberof RoleBindingsList500Response
     */
    'type'?: ProblemsProblemType;
    /**
     *
     * @type {number}
     * @memberof RoleBindingsList500Response
     */
    'status'?: RoleBindingsList500ResponseStatusEnum;
    /**
     *
     * @type {string}
     * @memberof RoleBindingsList500Response
     */
    'title'?: string;
    /**
     *
     * @type {string}
     * @memberof RoleBindingsList500Response
     */
    'detail'?: string;
    /**
     *
     * @type {string}
     * @memberof RoleBindingsList500Response
     */
    'instance'?: string;
}

export const RoleBindingsList500ResponseStatusEnum = {
    NUMBER_500: 500
} as const;

export type RoleBindingsList500ResponseStatusEnum = typeof RoleBindingsList500ResponseStatusEnum[keyof typeof RoleBindingsList500ResponseStatusEnum];

/**
 *
 * @export
 * @interface RoleBindingsListBySubject200Response
 */
export interface RoleBindingsListBySubject200Response {
    /**
     *
     * @type {CursorPaginationMeta}
     * @memberof RoleBindingsListBySubject200Response
     */
    'meta': CursorPaginationMeta;
    /**
     *
     * @type {CursorPaginationLinks}
     * @memberof RoleBindingsListBySubject200Response
     */
    'links': CursorPaginationLinks;
    /**
     *
     * @type {Array<RoleBindingsRoleBindingBySubject>}
     * @memberof RoleBindingsListBySubject200Response
     */
    'data': Array<RoleBindingsRoleBindingBySubject>;
}
/**
 *
 * @export
 * @interface RoleBindingsResource
 */
export interface RoleBindingsResource {
    /**
     *
     * @type {string}
     * @memberof RoleBindingsResource
     */
    'id'?: string;
    /**
     * Resource name
     * @type {string}
     * @memberof RoleBindingsResource
     */
    'name'?: string;
    /**
     * Resource type
     * @type {string}
     * @memberof RoleBindingsResource
     */
    'type'?: string;
}
/**
 *
 * @export
 * @interface RoleBindingsRoleBinding
 */
export interface RoleBindingsRoleBinding {
    /**
     *
     * @type {Role}
     * @memberof RoleBindingsRoleBinding
     */
    'role'?: Role;
    /**
     *
     * @type {RoleBindingsRoleBindingSubject}
     * @memberof RoleBindingsRoleBinding
     */
    'subject'?: RoleBindingsRoleBindingSubject;
    /**
     *
     * @type {RoleBindingsResource}
     * @memberof RoleBindingsRoleBinding
     */
    'resource'?: RoleBindingsResource;
}
/**
 *
 * @export
 * @interface RoleBindingsRoleBindingBySubject
 */
export interface RoleBindingsRoleBindingBySubject {
    /**
     * Timestamp of last modification
     * @type {string}
     * @memberof RoleBindingsRoleBindingBySubject
     */
    'last_modified'?: string;
    /**
     *
     * @type {RoleBindingsRoleBindingBySubjectSubject}
     * @memberof RoleBindingsRoleBindingBySubject
     */
    'subject'?: RoleBindingsRoleBindingBySubjectSubject;
    /**
     * Roles assigned to the subject
     * @type {Array<Role>}
     * @memberof RoleBindingsRoleBindingBySubject
     */
    'roles'?: Array<Role>;
    /**
     *
     * @type {RoleBindingsResource}
     * @memberof RoleBindingsRoleBindingBySubject
     */
    'resource'?: RoleBindingsResource;
    /**
     *
     * @type {RoleBindingsResource}
     * @memberof RoleBindingsRoleBindingBySubject
     */
    'inherited_from'?: RoleBindingsResource;
}
/**
 * Subject of the role binding
 * @export
 * @interface RoleBindingsRoleBindingBySubjectSubject
 */
export interface RoleBindingsRoleBindingBySubjectSubject {
    /**
     *
     * @type {string}
     * @memberof RoleBindingsRoleBindingBySubjectSubject
     */
    'id'?: string;
    /**
     * Type of subject
     * @type {string}
     * @memberof RoleBindingsRoleBindingBySubjectSubject
     */
    'type': string;
}
/**
 * The subject (user or group) that is granted the role
 * @export
 * @interface RoleBindingsRoleBindingSubject
 */
export interface RoleBindingsRoleBindingSubject {
    /**
     *
     * @type {string}
     * @memberof RoleBindingsRoleBindingSubject
     */
    'id'?: string;
    /**
     * Type of subject
     * @type {string}
     * @memberof RoleBindingsRoleBindingSubject
     */
    'type': string;
}
/**
 * Request body for updating role bindings - contains the new roles to assign
 * @export
 * @interface RoleBindingsUpdateRoleBindingsRequest
 */
export interface RoleBindingsUpdateRoleBindingsRequest {
    /**
     * Roles to assign (replaces existing roles for the target binding)
     * @type {Array<RoleBindingsUpdateRoleBindingsRequestRolesInner>}
     * @memberof RoleBindingsUpdateRoleBindingsRequest
     */
    'roles': Array<RoleBindingsUpdateRoleBindingsRequestRolesInner>;
}
/**
 *
 * @export
 * @interface RoleBindingsUpdateRoleBindingsRequestRolesInner
 */
export interface RoleBindingsUpdateRoleBindingsRequestRolesInner {
    /**
     *
     * @type {string}
     * @memberof RoleBindingsUpdateRoleBindingsRequestRolesInner
     */
    'id': string;
}
/**
 *
 * @export
 * @interface RoleBindingsUserDetails
 */
export interface RoleBindingsUserDetails {
    /**
     * Name of the user
     * @type {string}
     * @memberof RoleBindingsUserDetails
     */
    'username'?: string;
}
/**
 *
 * @export
 * @interface RoleBindingsUserSubject
 */
export interface RoleBindingsUserSubject extends RoleBindingsBaseSubject {
    /**
     * Type of subject
     * @type {string}
     * @memberof RoleBindingsUserSubject
     */
    'type': RoleBindingsUserSubjectTypeEnum;
    /**
     *
     * @type {RoleBindingsUserDetails}
     * @memberof RoleBindingsUserSubject
     */
    'user'?: RoleBindingsUserDetails;
}

export const RoleBindingsUserSubjectTypeEnum = {
    User: 'user'
} as const;

export type RoleBindingsUserSubjectTypeEnum = typeof RoleBindingsUserSubjectTypeEnum[keyof typeof RoleBindingsUserSubjectTypeEnum];

/**
 * Data for request to delete multiple roles by ID.
 * @export
 * @interface RolesBatchDeleteRolesRequest
 */
export interface RolesBatchDeleteRolesRequest {
    /**
     * The IDs of the roles to delete. A maximum of 100 roles can be deleted in one batch.
     * @type {Array<string>}
     * @memberof RolesBatchDeleteRolesRequest
     */
    'ids': Array<string>;
}
/**
 * Role data for create and update operations
 * @export
 * @interface RolesCreateOrUpdateRoleRequest
 */
export interface RolesCreateOrUpdateRoleRequest {
    /**
     * A human readable name for the role. Must be unique within a tenant.
     * @type {string}
     * @memberof RolesCreateOrUpdateRoleRequest
     */
    'name': string;
    /**
     * A description of the role to help clarify its purpose. Does not need to be unique.
     * @type {string}
     * @memberof RolesCreateOrUpdateRoleRequest
     */
    'description': string;
    /**
     * List of permissions to assign to this role
     * @type {Array<Permission>}
     * @memberof RolesCreateOrUpdateRoleRequest
     */
    'permissions': Array<Permission>;
}
/**
 *
 * @export
 * @interface RolesList200Response
 */
export interface RolesList200Response {
    /**
     *
     * @type {CursorPaginationMeta}
     * @memberof RolesList200Response
     */
    'meta': CursorPaginationMeta;
    /**
     *
     * @type {CursorPaginationLinks}
     * @memberof RolesList200Response
     */
    'links': CursorPaginationLinks;
    /**
     *
     * @type {Array<Role>}
     * @memberof RolesList200Response
     */
    'data': Array<Role>;
}
/**
 *
 * @export
 * @interface Timestamps
 */
export interface Timestamps {
    /**
     * 2019-01-21T17:32:28Z
     * @type {string}
     * @memberof Timestamps
     */
    'created': string;
    /**
     * 2019-01-21T17:32:28Z
     * @type {string}
     * @memberof Timestamps
     */
    'modified': string;
}
/**
 *
 * @export
 * @enum {string}
 */

export const Versions = {
    V2: 'v2'
} as const;

export type Versions = typeof Versions[keyof typeof Versions];


/**
 *
 * @export
 * @interface WorkspacesBasicWorkspace
 */
export interface WorkspacesBasicWorkspace {
    /**
     * Workspace A
     * @type {string}
     * @memberof WorkspacesBasicWorkspace
     */
    'name': string;
    /**
     * Description of Workspace A
     * @type {string}
     * @memberof WorkspacesBasicWorkspace
     */
    'description'?: string;
}
/**
 *
 * @export
 * @interface WorkspacesCreateWorkspaceRequest
 */
export interface WorkspacesCreateWorkspaceRequest {
    /**
     *
     * @type {string}
     * @memberof WorkspacesCreateWorkspaceRequest
     */
    'parent_id'?: string;
    /**
     * Workspace A
     * @type {string}
     * @memberof WorkspacesCreateWorkspaceRequest
     */
    'name': string;
    /**
     * Description of Workspace A
     * @type {string}
     * @memberof WorkspacesCreateWorkspaceRequest
     */
    'description'?: string;
}
/**
 *
 * @export
 * @interface WorkspacesCreateWorkspaceResponse
 */
export interface WorkspacesCreateWorkspaceResponse {
    /**
     *
     * @type {string}
     * @memberof WorkspacesCreateWorkspaceResponse
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof WorkspacesCreateWorkspaceResponse
     */
    'parent_id'?: string;
    /**
     *
     * @type {WorkspacesWorkspaceTypes}
     * @memberof WorkspacesCreateWorkspaceResponse
     */
    'type': WorkspacesWorkspaceTypes;
    /**
     * Workspace A
     * @type {string}
     * @memberof WorkspacesCreateWorkspaceResponse
     */
    'name': string;
    /**
     * Description of Workspace A
     * @type {string}
     * @memberof WorkspacesCreateWorkspaceResponse
     */
    'description'?: string;
    /**
     * 2019-01-21T17:32:28Z
     * @type {string}
     * @memberof WorkspacesCreateWorkspaceResponse
     */
    'created': string;
    /**
     * 2019-01-21T17:32:28Z
     * @type {string}
     * @memberof WorkspacesCreateWorkspaceResponse
     */
    'modified': string;
}


/**
 *
 * @export
 * @interface WorkspacesMoveWorkspaceRequest
 */
export interface WorkspacesMoveWorkspaceRequest {
    /**
     *
     * @type {string}
     * @memberof WorkspacesMoveWorkspaceRequest
     */
    'parent_id': string;
}
/**
 *
 * @export
 * @interface WorkspacesMoveWorkspaceResponse
 */
export interface WorkspacesMoveWorkspaceResponse {
    /**
     *
     * @type {string}
     * @memberof WorkspacesMoveWorkspaceResponse
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof WorkspacesMoveWorkspaceResponse
     */
    'parent_id': string;
}
/**
 *
 * @export
 * @interface WorkspacesPagination
 */
export interface WorkspacesPagination {
    /**
     *
     * @type {OffsetPaginationMeta}
     * @memberof WorkspacesPagination
     */
    'meta': OffsetPaginationMeta;
    /**
     *
     * @type {OffsetPaginationLinks}
     * @memberof WorkspacesPagination
     */
    'links': OffsetPaginationLinks;
}
/**
 *
 * @export
 * @interface WorkspacesPatchWorkspaceRequest
 */
export interface WorkspacesPatchWorkspaceRequest {
    /**
     * Workspace A
     * @type {string}
     * @memberof WorkspacesPatchWorkspaceRequest
     */
    'name'?: string;
    /**
     * Description of Workspace A
     * @type {string}
     * @memberof WorkspacesPatchWorkspaceRequest
     */
    'description'?: string;
}
/**
 *
 * @export
 * @interface WorkspacesPatchWorkspaceResponse
 */
export interface WorkspacesPatchWorkspaceResponse {
    /**
     *
     * @type {string}
     * @memberof WorkspacesPatchWorkspaceResponse
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof WorkspacesPatchWorkspaceResponse
     */
    'parent_id'?: string;
    /**
     *
     * @type {WorkspacesWorkspaceTypes}
     * @memberof WorkspacesPatchWorkspaceResponse
     */
    'type': WorkspacesWorkspaceTypes;
    /**
     * Workspace A
     * @type {string}
     * @memberof WorkspacesPatchWorkspaceResponse
     */
    'name': string;
    /**
     * Description of Workspace A
     * @type {string}
     * @memberof WorkspacesPatchWorkspaceResponse
     */
    'description'?: string;
    /**
     * 2019-01-21T17:32:28Z
     * @type {string}
     * @memberof WorkspacesPatchWorkspaceResponse
     */
    'created': string;
    /**
     * 2019-01-21T17:32:28Z
     * @type {string}
     * @memberof WorkspacesPatchWorkspaceResponse
     */
    'modified': string;
}


/**
 *
 * @export
 * @interface WorkspacesRead200Response
 */
export interface WorkspacesRead200Response {
    /**
     *
     * @type {string}
     * @memberof WorkspacesRead200Response
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof WorkspacesRead200Response
     */
    'parent_id'?: string;
    /**
     *
     * @type {WorkspacesWorkspaceTypes}
     * @memberof WorkspacesRead200Response
     */
    'type': WorkspacesWorkspaceTypes;
    /**
     * Workspace A
     * @type {string}
     * @memberof WorkspacesRead200Response
     */
    'name': string;
    /**
     * Description of Workspace A
     * @type {string}
     * @memberof WorkspacesRead200Response
     */
    'description'?: string;
    /**
     * 2019-01-21T17:32:28Z
     * @type {string}
     * @memberof WorkspacesRead200Response
     */
    'created': string;
    /**
     * 2019-01-21T17:32:28Z
     * @type {string}
     * @memberof WorkspacesRead200Response
     */
    'modified': string;
}


/**
 *
 * @export
 * @interface WorkspacesReadWorkspaceResponse
 */
export interface WorkspacesReadWorkspaceResponse {
    /**
     *
     * @type {string}
     * @memberof WorkspacesReadWorkspaceResponse
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof WorkspacesReadWorkspaceResponse
     */
    'parent_id'?: string;
    /**
     *
     * @type {WorkspacesWorkspaceTypes}
     * @memberof WorkspacesReadWorkspaceResponse
     */
    'type': WorkspacesWorkspaceTypes;
    /**
     * Workspace A
     * @type {string}
     * @memberof WorkspacesReadWorkspaceResponse
     */
    'name': string;
    /**
     * Description of Workspace A
     * @type {string}
     * @memberof WorkspacesReadWorkspaceResponse
     */
    'description'?: string;
    /**
     * 2019-01-21T17:32:28Z
     * @type {string}
     * @memberof WorkspacesReadWorkspaceResponse
     */
    'created': string;
    /**
     * 2019-01-21T17:32:28Z
     * @type {string}
     * @memberof WorkspacesReadWorkspaceResponse
     */
    'modified': string;
}


/**
 *
 * @export
 * @interface WorkspacesReadWorkspaceWithAncestryResponse
 */
export interface WorkspacesReadWorkspaceWithAncestryResponse {
    /**
     *
     * @type {Array<WorkspacesWorkspaceAncestor>}
     * @memberof WorkspacesReadWorkspaceWithAncestryResponse
     */
    'ancestry': Array<WorkspacesWorkspaceAncestor>;
    /**
     *
     * @type {string}
     * @memberof WorkspacesReadWorkspaceWithAncestryResponse
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof WorkspacesReadWorkspaceWithAncestryResponse
     */
    'parent_id'?: string;
    /**
     *
     * @type {WorkspacesWorkspaceTypes}
     * @memberof WorkspacesReadWorkspaceWithAncestryResponse
     */
    'type': WorkspacesWorkspaceTypes;
    /**
     * Workspace A
     * @type {string}
     * @memberof WorkspacesReadWorkspaceWithAncestryResponse
     */
    'name': string;
    /**
     * Description of Workspace A
     * @type {string}
     * @memberof WorkspacesReadWorkspaceWithAncestryResponse
     */
    'description'?: string;
    /**
     * 2019-01-21T17:32:28Z
     * @type {string}
     * @memberof WorkspacesReadWorkspaceWithAncestryResponse
     */
    'created': string;
    /**
     * 2019-01-21T17:32:28Z
     * @type {string}
     * @memberof WorkspacesReadWorkspaceWithAncestryResponse
     */
    'modified': string;
}


/**
 *
 * @export
 * @interface WorkspacesUpdate400Response
 */
export interface WorkspacesUpdate400Response {
    /**
     *
     * @type {ProblemsProblemType}
     * @memberof WorkspacesUpdate400Response
     */
    'type'?: ProblemsProblemType;
    /**
     *
     * @type {number}
     * @memberof WorkspacesUpdate400Response
     */
    'status'?: WorkspacesUpdate400ResponseStatusEnum;
    /**
     *
     * @type {string}
     * @memberof WorkspacesUpdate400Response
     */
    'title'?: string;
    /**
     *
     * @type {string}
     * @memberof WorkspacesUpdate400Response
     */
    'detail'?: string;
    /**
     *
     * @type {string}
     * @memberof WorkspacesUpdate400Response
     */
    'instance'?: string;
}

export const WorkspacesUpdate400ResponseStatusEnum = {
    NUMBER_400: 400
} as const;

export type WorkspacesUpdate400ResponseStatusEnum = typeof WorkspacesUpdate400ResponseStatusEnum[keyof typeof WorkspacesUpdate400ResponseStatusEnum];

/**
 *
 * @export
 * @interface WorkspacesUpdateWorkspaceRequest
 */
export interface WorkspacesUpdateWorkspaceRequest {
    /**
     * Workspace A
     * @type {string}
     * @memberof WorkspacesUpdateWorkspaceRequest
     */
    'name': string;
    /**
     * Description of Workspace A
     * @type {string}
     * @memberof WorkspacesUpdateWorkspaceRequest
     */
    'description': string;
    /**
     *
     * @type {string}
     * @memberof WorkspacesUpdateWorkspaceRequest
     */
    'parent_id': string;
}
/**
 *
 * @export
 * @interface WorkspacesUpdateWorkspaceResponse
 */
export interface WorkspacesUpdateWorkspaceResponse {
    /**
     *
     * @type {string}
     * @memberof WorkspacesUpdateWorkspaceResponse
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof WorkspacesUpdateWorkspaceResponse
     */
    'parent_id'?: string;
    /**
     *
     * @type {WorkspacesWorkspaceTypes}
     * @memberof WorkspacesUpdateWorkspaceResponse
     */
    'type': WorkspacesWorkspaceTypes;
    /**
     * Workspace A
     * @type {string}
     * @memberof WorkspacesUpdateWorkspaceResponse
     */
    'name': string;
    /**
     * Description of Workspace A
     * @type {string}
     * @memberof WorkspacesUpdateWorkspaceResponse
     */
    'description'?: string;
    /**
     * 2019-01-21T17:32:28Z
     * @type {string}
     * @memberof WorkspacesUpdateWorkspaceResponse
     */
    'created': string;
    /**
     * 2019-01-21T17:32:28Z
     * @type {string}
     * @memberof WorkspacesUpdateWorkspaceResponse
     */
    'modified': string;
}


/**
 *
 * @export
 * @interface WorkspacesWorkspace
 */
export interface WorkspacesWorkspace {
    /**
     *
     * @type {string}
     * @memberof WorkspacesWorkspace
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof WorkspacesWorkspace
     */
    'parent_id'?: string;
    /**
     *
     * @type {WorkspacesWorkspaceTypes}
     * @memberof WorkspacesWorkspace
     */
    'type': WorkspacesWorkspaceTypes;
    /**
     * Workspace A
     * @type {string}
     * @memberof WorkspacesWorkspace
     */
    'name': string;
    /**
     * Description of Workspace A
     * @type {string}
     * @memberof WorkspacesWorkspace
     */
    'description'?: string;
    /**
     * 2019-01-21T17:32:28Z
     * @type {string}
     * @memberof WorkspacesWorkspace
     */
    'created': string;
    /**
     * 2019-01-21T17:32:28Z
     * @type {string}
     * @memberof WorkspacesWorkspace
     */
    'modified': string;
}


/**
 *
 * @export
 * @interface WorkspacesWorkspaceAncestor
 */
export interface WorkspacesWorkspaceAncestor {
    /**
     *
     * @type {string}
     * @memberof WorkspacesWorkspaceAncestor
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof WorkspacesWorkspaceAncestor
     */
    'parent_id'?: string;
    /**
     *
     * @type {string}
     * @memberof WorkspacesWorkspaceAncestor
     */
    'name': string;
}
/**
 *
 * @export
 * @interface WorkspacesWorkspaceListResponse
 */
export interface WorkspacesWorkspaceListResponse {
    /**
     *
     * @type {OffsetPaginationMeta}
     * @memberof WorkspacesWorkspaceListResponse
     */
    'meta': OffsetPaginationMeta;
    /**
     *
     * @type {OffsetPaginationLinks}
     * @memberof WorkspacesWorkspaceListResponse
     */
    'links': OffsetPaginationLinks;
    /**
     * List of workspaces
     * @type {Array<WorkspacesWorkspace>}
     * @memberof WorkspacesWorkspaceListResponse
     */
    'data': Array<WorkspacesWorkspace>;
}
/**
 *
 * @export
 * @enum {string}
 */

export const WorkspacesWorkspaceTypes = {
    Root: 'root',
    Default: 'default',
    Standard: 'standard',
    UngroupedHosts: 'ungrouped-hosts'
} as const;

export type WorkspacesWorkspaceTypes = typeof WorkspacesWorkspaceTypes[keyof typeof WorkspacesWorkspaceTypes];


/**
 *
 * @export
 * @enum {string}
 */

export const WorkspacesWorkspaceTypesQueryParam = {
    All: 'all',
    Root: 'root',
    Default: 'default',
    Standard: 'standard',
    UngroupedHosts: 'ungrouped-hosts'
} as const;

export type WorkspacesWorkspaceTypesQueryParam = typeof WorkspacesWorkspaceTypesQueryParam[keyof typeof WorkspacesWorkspaceTypesQueryParam];


