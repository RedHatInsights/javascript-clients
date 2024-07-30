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
 * @interface WorkspacesCreate401Response
 */
export interface WorkspacesCreate401Response {
    /**
     *
     * @type {ProblemsProblemType}
     * @memberof WorkspacesCreate401Response
     */
    'type'?: ProblemsProblemType;
    /**
     *
     * @type {number}
     * @memberof WorkspacesCreate401Response
     */
    'status'?: WorkspacesCreate401ResponseStatusEnum;
    /**
     *
     * @type {string}
     * @memberof WorkspacesCreate401Response
     */
    'title'?: string;
    /**
     *
     * @type {string}
     * @memberof WorkspacesCreate401Response
     */
    'detail'?: string;
    /**
     *
     * @type {string}
     * @memberof WorkspacesCreate401Response
     */
    'instance'?: string;
}

export const WorkspacesCreate401ResponseStatusEnum = {
    NUMBER_401: 401
} as const;

export type WorkspacesCreate401ResponseStatusEnum = typeof WorkspacesCreate401ResponseStatusEnum[keyof typeof WorkspacesCreate401ResponseStatusEnum];

/**
 *
 * @export
 * @interface WorkspacesCreate500Response
 */
export interface WorkspacesCreate500Response {
    /**
     *
     * @type {ProblemsProblemType}
     * @memberof WorkspacesCreate500Response
     */
    'type'?: ProblemsProblemType;
    /**
     *
     * @type {number}
     * @memberof WorkspacesCreate500Response
     */
    'status'?: WorkspacesCreate500ResponseStatusEnum;
    /**
     *
     * @type {string}
     * @memberof WorkspacesCreate500Response
     */
    'title'?: string;
    /**
     *
     * @type {string}
     * @memberof WorkspacesCreate500Response
     */
    'detail'?: string;
    /**
     *
     * @type {string}
     * @memberof WorkspacesCreate500Response
     */
    'instance'?: string;
}

export const WorkspacesCreate500ResponseStatusEnum = {
    NUMBER_500: 500
} as const;

export type WorkspacesCreate500ResponseStatusEnum = typeof WorkspacesCreate500ResponseStatusEnum[keyof typeof WorkspacesCreate500ResponseStatusEnum];

/**
 *
 * @export
 * @interface WorkspacesCreateWorkspaceResponse
 */
export interface WorkspacesCreateWorkspaceResponse {
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
}
/**
 *
 * @export
 * @interface WorkspacesReadWorkspaceResponse
 */
export interface WorkspacesReadWorkspaceResponse {
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
    'description'?: string;
}
/**
 *
 * @export
 * @interface WorkspacesUpdateWorkspaceResponse
 */
export interface WorkspacesUpdateWorkspaceResponse {
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
    'parent'?: string;
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
