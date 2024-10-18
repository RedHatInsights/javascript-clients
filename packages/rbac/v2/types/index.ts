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
 * @interface WorkspacesCreateWorkspaceResponse
 */
export interface WorkspacesCreateWorkspaceResponse {
    /**
     *
     * @type {string}
     * @memberof WorkspacesCreateWorkspaceResponse
     */
    'uuid': string;
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
 * @interface WorkspacesList401Response
 */
export interface WorkspacesList401Response {
    /**
     *
     * @type {ProblemsProblemType}
     * @memberof WorkspacesList401Response
     */
    'type'?: ProblemsProblemType;
    /**
     *
     * @type {number}
     * @memberof WorkspacesList401Response
     */
    'status'?: WorkspacesList401ResponseStatusEnum;
    /**
     *
     * @type {string}
     * @memberof WorkspacesList401Response
     */
    'title'?: string;
    /**
     *
     * @type {string}
     * @memberof WorkspacesList401Response
     */
    'detail'?: string;
    /**
     *
     * @type {string}
     * @memberof WorkspacesList401Response
     */
    'instance'?: string;
}

export const WorkspacesList401ResponseStatusEnum = {
    NUMBER_401: 401
} as const;

export type WorkspacesList401ResponseStatusEnum = typeof WorkspacesList401ResponseStatusEnum[keyof typeof WorkspacesList401ResponseStatusEnum];

/**
 *
 * @export
 * @interface WorkspacesList500Response
 */
export interface WorkspacesList500Response {
    /**
     *
     * @type {ProblemsProblemType}
     * @memberof WorkspacesList500Response
     */
    'type'?: ProblemsProblemType;
    /**
     *
     * @type {number}
     * @memberof WorkspacesList500Response
     */
    'status'?: WorkspacesList500ResponseStatusEnum;
    /**
     *
     * @type {string}
     * @memberof WorkspacesList500Response
     */
    'title'?: string;
    /**
     *
     * @type {string}
     * @memberof WorkspacesList500Response
     */
    'detail'?: string;
    /**
     *
     * @type {string}
     * @memberof WorkspacesList500Response
     */
    'instance'?: string;
}

export const WorkspacesList500ResponseStatusEnum = {
    NUMBER_500: 500
} as const;

export type WorkspacesList500ResponseStatusEnum = typeof WorkspacesList500ResponseStatusEnum[keyof typeof WorkspacesList500ResponseStatusEnum];

/**
 *
 * @export
 * @interface WorkspacesPagination
 */
export interface WorkspacesPagination {
    /**
     *
     * @type {WorkspacesPaginationMeta}
     * @memberof WorkspacesPagination
     */
    'meta': WorkspacesPaginationMeta;
    /**
     *
     * @type {WorkspacesPaginationLinks}
     * @memberof WorkspacesPagination
     */
    'links': WorkspacesPaginationLinks;
}
/**
 *
 * @export
 * @interface WorkspacesPaginationLinks
 */
export interface WorkspacesPaginationLinks {
    /**
     * The first link in pagination
     * @type {string}
     * @memberof WorkspacesPaginationLinks
     */
    'first': string;
    /**
     * The next link in pagination
     * @type {string}
     * @memberof WorkspacesPaginationLinks
     */
    'next': string | null;
    /**
     * The previous link in pagination
     * @type {string}
     * @memberof WorkspacesPaginationLinks
     */
    'previous': string | null;
    /**
     * The last link in pagination
     * @type {string}
     * @memberof WorkspacesPaginationLinks
     */
    'last': string;
}
/**
 *
 * @export
 * @interface WorkspacesPaginationMeta
 */
export interface WorkspacesPaginationMeta {
    /**
     * Total count of objects
     * @type {number}
     * @memberof WorkspacesPaginationMeta
     */
    'count': number;
    /**
     * Limit of returned objects
     * @type {number}
     * @memberof WorkspacesPaginationMeta
     */
    'limit': number;
    /**
     * Offset of returned objects
     * @type {number}
     * @memberof WorkspacesPaginationMeta
     */
    'offset': number;
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
    'uuid': string;
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
    'uuid': string;
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
    'uuid': string;
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
    'uuid': string;
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
    'uuid': string;
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
    'uuid': string;
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
    'uuid': string;
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
     * @type {WorkspacesPaginationMeta}
     * @memberof WorkspacesWorkspaceListResponse
     */
    'meta': WorkspacesPaginationMeta;
    /**
     *
     * @type {WorkspacesPaginationLinks}
     * @memberof WorkspacesWorkspaceListResponse
     */
    'links': WorkspacesPaginationLinks;
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
    Standard: 'standard'
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
    Standard: 'standard'
} as const;

export type WorkspacesWorkspaceTypesQueryParam = typeof WorkspacesWorkspaceTypesQueryParam[keyof typeof WorkspacesWorkspaceTypesQueryParam];


