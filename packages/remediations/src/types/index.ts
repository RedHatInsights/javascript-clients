/**
 *
 * @export
 * @interface Counts
 */
export interface Counts {
    /**
     *
     * @type {number}
     * @memberof Counts
     */
    'pending': number;
    /**
     *
     * @type {number}
     * @memberof Counts
     */
    'running': number;
    /**
     *
     * @type {number}
     * @memberof Counts
     */
    'success': number;
    /**
     *
     * @type {number}
     * @memberof Counts
     */
    'failure': number;
    /**
     *
     * @type {number}
     * @memberof Counts
     */
    'canceled': number;
}
/**
 *
 * @export
 * @interface Diagnosis
 */
export interface Diagnosis {
    /**
     *
     * @type {string}
     * @memberof Diagnosis
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof Diagnosis
     */
    'insights_id': string;
    /**
     *
     * @type {{ [key: string]: object; }}
     * @memberof Diagnosis
     */
    'details': { [key: string]: object; };
}
/**
 *
 * @export
 * @interface ExecuteRemediation
 */
export interface ExecuteRemediation {
    /**
     *
     * @type {string}
     * @memberof ExecuteRemediation
     */
    'id': string;
}
/**
 *
 * @export
 * @interface GetRemediationIssuesFilterParameter
 */
export interface GetRemediationIssuesFilterParameter {
    /**
     * Filter by issue id (allows partial match)
     * @type {string}
     * @memberof GetRemediationIssuesFilterParameter
     */
    'id'?: string;
}
/**
 *
 * @export
 * @interface GetRemediationSystemIssuesFilterParameter
 */
export interface GetRemediationSystemIssuesFilterParameter {
    /**
     * Filter by issue id (allows partial match)
     * @type {string}
     * @memberof GetRemediationSystemIssuesFilterParameter
     */
    'id'?: string;
    /**
     * Selected resolution type (e.g., fix)
     * @type {string}
     * @memberof GetRemediationSystemIssuesFilterParameter
     */
    'resolution.id'?: string;
}
/**
 *
 * @export
 * @interface GetRemediationSystemsFilterParameter
 */
export interface GetRemediationSystemsFilterParameter {
    /**
     * Filter by system id (allows partial match)
     * @type {string}
     * @memberof GetRemediationSystemsFilterParameter
     */
    'id'?: string;
    /**
     * Filter by hostname (allows partial match)
     * @type {string}
     * @memberof GetRemediationSystemsFilterParameter
     */
    'hostname'?: string;
    /**
     * Filter by display name (allows partial match)
     * @type {string}
     * @memberof GetRemediationSystemsFilterParameter
     */
    'display_name'?: string;
}
/**
 *
 * @export
 * @interface GetRemediations200Response
 */
export interface GetRemediations200Response {
    /**
     *
     * @type {Array<RemediationNameListItem>}
     * @memberof GetRemediations200Response
     */
    'data': Array<RemediationNameListItem>;
    /**
     *
     * @type {Meta}
     * @memberof GetRemediations200Response
     */
    'meta': Meta;
    /**
     *
     * @type {Links}
     * @memberof GetRemediations200Response
     */
    'links': Links;
}
/**
 * @type GetRemediationsFieldsDataParameter
 * @export
 */
export type GetRemediationsFieldsDataParameter = Array<string>;

/**
 *
 * @export
 * @interface GetRemediationsFilterParameter
 */
export interface GetRemediationsFilterParameter {
    /**
     * Filter by plan name (allows partial match)
     * @type {string}
     * @memberof GetRemediationsFilterParameter
     */
    'name'?: string;
    /**
     *
     * @type {GetRemediationsFilterParameterAnyOfLastRunAfter}
     * @memberof GetRemediationsFilterParameter
     */
    'last_run_after'?: GetRemediationsFilterParameterAnyOfLastRunAfter;
    /**
     * Filter remediations created on or after this timestamp (ISO 8601 format) Must be a valid ISO 8601 date-time string. Precision should be to the nearest second or millisecond. Example: \'2024-09-11T12:00:00Z\' or \'2024-09-11T12:00:00.123Z\'
     * @type {string}
     * @memberof GetRemediationsFilterParameter
     */
    'created_after'?: string;
    /**
     *
     * @type {string}
     * @memberof GetRemediationsFilterParameter
     */
    'status'?: GetRemediationsFilterParameterStatusEnum;
    /**
     * Filter remediations updated on or after this timestamp (ISO 8601 format) Must be a valid ISO 8601 date-time string. Precision should be to the nearest second or millisecond. Example: \'2024-09-11T12:00:00Z\' or \'2024-09-11T12:00:00.123Z\'
     * @type {string}
     * @memberof GetRemediationsFilterParameter
     */
    'updated_after'?: string;
}

export const GetRemediationsFilterParameterStatusEnum = {
    Running: 'running',
    Success: 'success',
    Failure: 'failure'
} as const;

export type GetRemediationsFilterParameterStatusEnum = typeof GetRemediationsFilterParameterStatusEnum[keyof typeof GetRemediationsFilterParameterStatusEnum];

/**
 *
 * @export
 * @interface GetRemediationsFilterParameterAnyOf
 */
export interface GetRemediationsFilterParameterAnyOf {
    /**
     * Filter by plan name (allows partial match)
     * @type {string}
     * @memberof GetRemediationsFilterParameterAnyOf
     */
    'name'?: string;
    /**
     *
     * @type {GetRemediationsFilterParameterAnyOfLastRunAfter}
     * @memberof GetRemediationsFilterParameterAnyOf
     */
    'last_run_after'?: GetRemediationsFilterParameterAnyOfLastRunAfter;
    /**
     * Filter remediations created on or after this timestamp (ISO 8601 format) Must be a valid ISO 8601 date-time string. Precision should be to the nearest second or millisecond. Example: \'2024-09-11T12:00:00Z\' or \'2024-09-11T12:00:00.123Z\'
     * @type {string}
     * @memberof GetRemediationsFilterParameterAnyOf
     */
    'created_after'?: string;
    /**
     *
     * @type {string}
     * @memberof GetRemediationsFilterParameterAnyOf
     */
    'status'?: GetRemediationsFilterParameterAnyOfStatusEnum;
    /**
     * Filter remediations updated on or after this timestamp (ISO 8601 format) Must be a valid ISO 8601 date-time string. Precision should be to the nearest second or millisecond. Example: \'2024-09-11T12:00:00Z\' or \'2024-09-11T12:00:00.123Z\'
     * @type {string}
     * @memberof GetRemediationsFilterParameterAnyOf
     */
    'updated_after'?: string;
}

export const GetRemediationsFilterParameterAnyOfStatusEnum = {
    Running: 'running',
    Success: 'success',
    Failure: 'failure'
} as const;

export type GetRemediationsFilterParameterAnyOfStatusEnum = typeof GetRemediationsFilterParameterAnyOfStatusEnum[keyof typeof GetRemediationsFilterParameterAnyOfStatusEnum];

/**
 * @type GetRemediationsFilterParameterAnyOfLastRunAfter
 * @export
 */
export type GetRemediationsFilterParameterAnyOfLastRunAfter = string;

/**
 *
 * @export
 * @interface GetVersion200Response
 */
export interface GetVersion200Response {
    /**
     *
     * @type {string}
     * @memberof GetVersion200Response
     */
    'version': string;
    /**
     *
     * @type {string}
     * @memberof GetVersion200Response
     */
    'commit': string;
}
/**
 *
 * @export
 * @interface IssueListLinks
 */
export interface IssueListLinks {
    /**
     * relative link to the first page of the query results
     * @type {string}
     * @memberof IssueListLinks
     */
    'first': string;
    /**
     * relative link to the last page of the query results
     * @type {string}
     * @memberof IssueListLinks
     */
    'last': string;
    /**
     * relative link to the next page of the query results (or null if this is the last page)
     * @type {string}
     * @memberof IssueListLinks
     */
    'next': string | null;
    /**
     * relative link to the previous page of the query results (or null if this is the first page)
     * @type {string}
     * @memberof IssueListLinks
     */
    'previous': string | null;
}
/**
 *
 * @export
 * @interface IssuesList
 */
export interface IssuesList {
    /**
     *
     * @type {Array<string>}
     * @memberof IssuesList
     */
    'issue_ids': Array<string>;
}
/**
 *
 * @export
 * @interface Links
 */
export interface Links {
    /**
     * relative link to the first page of the query results
     * @type {string}
     * @memberof Links
     */
    'first': string;
    /**
     * relative link to the last page of the query results
     * @type {string}
     * @memberof Links
     */
    'last': string;
    /**
     * relative link to the next page of the query results (or null if this is the last page)
     * @type {string}
     * @memberof Links
     */
    'next': string | null;
    /**
     * relative link to the previous page of the query results (or null if this is the first page)
     * @type {string}
     * @memberof Links
     */
    'previous': string | null;
}
/**
 *
 * @export
 * @interface Meta
 */
export interface Meta {
    /**
     * number of results returned
     * @type {number}
     * @memberof Meta
     */
    'count': number;
    /**
     * total number of results matching the query
     * @type {number}
     * @memberof Meta
     */
    'total': number;
}
/**
 *
 * @export
 * @interface MultipleDelete
 */
export interface MultipleDelete {
    /**
     * Count of remediations deleted
     * @type {number}
     * @memberof MultipleDelete
     */
    'deleted_count': number;
}
/**
 *
 * @export
 * @interface NoExecutors
 */
export interface NoExecutors {
    /**
     *
     * @type {Array<NoExecutorsErrorsInner>}
     * @memberof NoExecutors
     */
    'errors': Array<NoExecutorsErrorsInner>;
}
/**
 *
 * @export
 * @interface NoExecutorsErrorsInner
 */
export interface NoExecutorsErrorsInner {
    /**
     *
     * @type {string}
     * @memberof NoExecutorsErrorsInner
     */
    'id': string;
    /**
     *
     * @type {number}
     * @memberof NoExecutorsErrorsInner
     */
    'status'?: number;
    /**
     *
     * @type {string}
     * @memberof NoExecutorsErrorsInner
     */
    'code'?: string;
    /**
     *
     * @type {string}
     * @memberof NoExecutorsErrorsInner
     */
    'title'?: string;
}
/**
 *
 * @export
 * @interface PlaybookDefinition
 */
export interface PlaybookDefinition {
    /**
     *
     * @type {Array<PlaybookDefinitionIssuesInner>}
     * @memberof PlaybookDefinition
     */
    'issues': Array<PlaybookDefinitionIssuesInner>;
    /**
     * Indicates whether systems that require reboot for the remediation to be properly applied should be rebooted automatically or not
     * @type {boolean}
     * @memberof PlaybookDefinition
     */
    'auto_reboot'?: boolean;
}
/**
 *
 * @export
 * @interface PlaybookDefinitionIssuesInner
 */
export interface PlaybookDefinitionIssuesInner {
    /**
     *
     * @type {string}
     * @memberof PlaybookDefinitionIssuesInner
     */
    'id': string;
    /**
     *
     * @type {Array<string>}
     * @memberof PlaybookDefinitionIssuesInner
     */
    'systems': Array<string>;
    /**
     *
     * @type {string}
     * @memberof PlaybookDefinitionIssuesInner
     */
    'resolution'?: string;
    /**
     * Controls the order in which issues are executed in the generated playbook. Lower numbers execute first. If not specified, issues maintain their request order.
     * @type {number}
     * @memberof PlaybookDefinitionIssuesInner
     */
    'precedence'?: number | null;
}
/**
 *
 * @export
 * @interface PlaybookExecutorDetails
 */
export interface PlaybookExecutorDetails {
    /**
     *
     * @type {string}
     * @memberof PlaybookExecutorDetails
     */
    'executor_id': string;
    /**
     *
     * @type {string}
     * @memberof PlaybookExecutorDetails
     */
    'executor_name': string;
    /**
     *
     * @type {string}
     * @memberof PlaybookExecutorDetails
     */
    'updated_at': string;
    /**
     * Playbook created for the playbook run executor.
     * @type {string}
     * @memberof PlaybookExecutorDetails
     */
    'playbook': string;
    /**
     *
     * @type {string}
     * @memberof PlaybookExecutorDetails
     */
    'playbook_run_id': string;
    /**
     *
     * @type {number}
     * @memberof PlaybookExecutorDetails
     */
    'system_count': number;
    /**
     *
     * @type {Counts}
     * @memberof PlaybookExecutorDetails
     */
    'counts'?: Counts;
    /**
     *
     * @type {PlaybookRunExecutorStatus}
     * @memberof PlaybookExecutorDetails
     */
    'status': PlaybookRunExecutorStatus;
}


/**
 *
 * @export
 * @interface PlaybookExecutorStatus
 */
export interface PlaybookExecutorStatus {
    /**
     *
     * @type {string}
     * @memberof PlaybookExecutorStatus
     */
    'endpoint_id': string | null;
    /**
     *
     * @type {string}
     * @memberof PlaybookExecutorStatus
     */
    'executor_id': string | null;
    /**
     *
     * @type {string}
     * @memberof PlaybookExecutorStatus
     */
    'executor_type': string | null;
    /**
     *
     * @type {string}
     * @memberof PlaybookExecutorStatus
     */
    'executor_name': string | null;
    /**
     *
     * @type {number}
     * @memberof PlaybookExecutorStatus
     */
    'system_count': number;
    /**
     *
     * @type {Array<string>}
     * @memberof PlaybookExecutorStatus
     */
    'system_ids': Array<string>;
    /**
     *
     * @type {string}
     * @memberof PlaybookExecutorStatus
     */
    'connection_status': PlaybookExecutorStatusConnectionStatusEnum;
}

export const PlaybookExecutorStatusConnectionStatusEnum = {
    Connected: 'connected',
    Disconnected: 'disconnected',
    NoRhc: 'no_rhc'
} as const;

export type PlaybookExecutorStatusConnectionStatusEnum = typeof PlaybookExecutorStatusConnectionStatusEnum[keyof typeof PlaybookExecutorStatusConnectionStatusEnum];

/**
 *
 * @export
 * @interface PlaybookExecutors
 */
export interface PlaybookExecutors {
    /**
     *
     * @type {string}
     * @memberof PlaybookExecutors
     */
    'executor_id': string;
    /**
     *
     * @type {string}
     * @memberof PlaybookExecutors
     */
    'executor_name': string;
    /**
     *
     * @type {PlaybookRunExecutorStatus}
     * @memberof PlaybookExecutors
     */
    'status': PlaybookRunExecutorStatus;
    /**
     *
     * @type {number}
     * @memberof PlaybookExecutors
     */
    'system_count': number;
    /**
     *
     * @type {Counts}
     * @memberof PlaybookExecutors
     */
    'counts': Counts;
}


/**
 *
 * @export
 * @interface PlaybookRunDetails
 */
export interface PlaybookRunDetails {
    /**
     *
     * @type {string}
     * @memberof PlaybookRunDetails
     */
    'id': string;
    /**
     *
     * @type {Array<PlaybookExecutors>}
     * @memberof PlaybookRunDetails
     */
    'executors': Array<PlaybookExecutors>;
    /**
     *
     * @type {string}
     * @memberof PlaybookRunDetails
     */
    'remediation_id': string;
    /**
     *
     * @type {UserOut}
     * @memberof PlaybookRunDetails
     */
    'created_by': UserOut;
    /**
     *
     * @type {string}
     * @memberof PlaybookRunDetails
     */
    'created_at': string;
    /**
     *
     * @type {string}
     * @memberof PlaybookRunDetails
     */
    'updated_at': string;
    /**
     *
     * @type {PlaybookRunStatus}
     * @memberof PlaybookRunDetails
     */
    'status': PlaybookRunStatus;
}


/**
 *
 * @export
 * @interface PlaybookRunExecutorDetails
 */
export interface PlaybookRunExecutorDetails {
    /**
     *
     * @type {string}
     * @memberof PlaybookRunExecutorDetails
     */
    'id'?: string;
    /**
     *
     * @type {Array<PlaybookExecutorDetails>}
     * @memberof PlaybookRunExecutorDetails
     */
    'executors': Array<PlaybookExecutorDetails>;
    /**
     *
     * @type {string}
     * @memberof PlaybookRunExecutorDetails
     */
    'remediation_id': string;
    /**
     *
     * @type {UserOut}
     * @memberof PlaybookRunExecutorDetails
     */
    'created_by': UserOut;
    /**
     *
     * @type {string}
     * @memberof PlaybookRunExecutorDetails
     */
    'created_at': string;
    /**
     *
     * @type {string}
     * @memberof PlaybookRunExecutorDetails
     */
    'updated_at': string;
    /**
     *
     * @type {PlaybookRunStatus}
     * @memberof PlaybookRunExecutorDetails
     */
    'status': PlaybookRunStatus;
}


/**
 *
 * @export
 * @enum {string}
 */

export const PlaybookRunExecutorStatus = {
    Pending: 'pending',
    Running: 'running',
    Success: 'success',
    Failure: 'failure',
    Canceled: 'canceled',
    Timeout: 'timeout'
} as const;

export type PlaybookRunExecutorStatus = typeof PlaybookRunExecutorStatus[keyof typeof PlaybookRunExecutorStatus];


/**
 *
 * @export
 * @enum {string}
 */

export const PlaybookRunStatus = {
    Pending: 'pending',
    Running: 'running',
    Success: 'success',
    Failure: 'failure',
    Canceled: 'canceled',
    Timeout: 'timeout'
} as const;

export type PlaybookRunStatus = typeof PlaybookRunStatus[keyof typeof PlaybookRunStatus];


/**
 *
 * @export
 * @interface PlaybookRunSystemDetails
 */
export interface PlaybookRunSystemDetails {
    /**
     *
     * @type {string}
     * @memberof PlaybookRunSystemDetails
     */
    'system_id': string;
    /**
     *
     * @type {string}
     * @memberof PlaybookRunSystemDetails
     */
    'system_name': string;
    /**
     *
     * @type {PlaybookRunSystemStatus}
     * @memberof PlaybookRunSystemDetails
     */
    'status': PlaybookRunSystemStatus;
    /**
     * Current formatted system log from playbook run system.
     * @type {string}
     * @memberof PlaybookRunSystemDetails
     */
    'console': string;
    /**
     *
     * @type {string}
     * @memberof PlaybookRunSystemDetails
     */
    'playbook_run_executor_id': string;
    /**
     *
     * @type {string}
     * @memberof PlaybookRunSystemDetails
     */
    'updated_at': string;
}


/**
 *
 * @export
 * @interface PlaybookRunSystemList
 */
export interface PlaybookRunSystemList {
    /**
     *
     * @type {Array<PlaybookRunSystems>}
     * @memberof PlaybookRunSystemList
     */
    'data': Array<PlaybookRunSystems>;
    /**
     *
     * @type {Meta}
     * @memberof PlaybookRunSystemList
     */
    'meta': Meta;
}
/**
 *
 * @export
 * @enum {string}
 */

export const PlaybookRunSystemStatus = {
    Pending: 'pending',
    Running: 'running',
    Success: 'success',
    Failure: 'failure',
    Canceled: 'canceled',
    Timeout: 'timeout'
} as const;

export type PlaybookRunSystemStatus = typeof PlaybookRunSystemStatus[keyof typeof PlaybookRunSystemStatus];


/**
 *
 * @export
 * @interface PlaybookRunSystems
 */
export interface PlaybookRunSystems {
    /**
     *
     * @type {string}
     * @memberof PlaybookRunSystems
     */
    'system_id': string;
    /**
     *
     * @type {string}
     * @memberof PlaybookRunSystems
     */
    'system_name': string;
    /**
     *
     * @type {PlaybookRunSystemStatus}
     * @memberof PlaybookRunSystems
     */
    'status': PlaybookRunSystemStatus;
    /**
     *
     * @type {string}
     * @memberof PlaybookRunSystems
     */
    'updated_at': string;
    /**
     *
     * @type {string}
     * @memberof PlaybookRunSystems
     */
    'playbook_run_executor_id': string;
    /**
     * Executor type for this system (e.g., \'direct\' or \'satellite\')
     * @type {string}
     * @memberof PlaybookRunSystems
     */
    'executor_type'?: string;
}


/**
 *
 * @export
 * @interface PlaybookRunsInput
 */
export interface PlaybookRunsInput {
    /**
     *
     * @type {Array<string>}
     * @memberof PlaybookRunsInput
     */
    'exclude'?: Array<string>;
}
/**
 *
 * @export
 * @interface PlaybookRunsList
 */
export interface PlaybookRunsList {
    /**
     *
     * @type {Array<PlaybookRunDetails>}
     * @memberof PlaybookRunsList
     */
    'data': Array<PlaybookRunDetails>;
    /**
     *
     * @type {Meta}
     * @memberof PlaybookRunsList
     */
    'meta': Meta;
}
/**
 *
 * @export
 * @interface RemediationConnectionStatus
 */
export interface RemediationConnectionStatus {
    /**
     *
     * @type {Meta}
     * @memberof RemediationConnectionStatus
     */
    'meta': Meta;
    /**
     *
     * @type {Array<PlaybookExecutorStatus>}
     * @memberof RemediationConnectionStatus
     */
    'data': Array<PlaybookExecutorStatus>;
}
/**
 *
 * @export
 * @interface RemediationCreated
 */
export interface RemediationCreated {
    /**
     *
     * @type {string}
     * @memberof RemediationCreated
     */
    'id': string;
}
/**
 *
 * @export
 * @interface RemediationDetails
 */
export interface RemediationDetails {
    /**
     *
     * @type {string}
     * @memberof RemediationDetails
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof RemediationDetails
     */
    'name': string;
    /**
     * Indicates whether any of the issues contained in the remediation require system reboot
     * @type {boolean}
     * @memberof RemediationDetails
     */
    'needs_reboot'?: boolean;
    /**
     * Indicates whether a remediation has been marked as archived
     * @type {boolean}
     * @memberof RemediationDetails
     */
    'archived': boolean;
    /**
     * Indicates whether systems that require reboot for the remediation to be properly applied should be rebooted automatically or not
     * @type {boolean}
     * @memberof RemediationDetails
     */
    'auto_reboot': boolean;
    /**
     *
     * @type {UserOut}
     * @memberof RemediationDetails
     */
    'created_by': UserOut;
    /**
     *
     * @type {string}
     * @memberof RemediationDetails
     */
    'created_at': string;
    /**
     *
     * @type {UserOut}
     * @memberof RemediationDetails
     */
    'updated_by': UserOut;
    /**
     *
     * @type {string}
     * @memberof RemediationDetails
     */
    'updated_at': string;
    /**
     *
     * @type {number}
     * @memberof RemediationDetails
     */
    'resolved_count'?: number;
    /**
     *
     * @type {number}
     * @memberof RemediationDetails
     */
    'issue_count'?: number;
    /**
     * Count of issues by type (only included in summary format)
     * @type {{ [key: string]: number; }}
     * @memberof RemediationDetails
     */
    'issue_count_details'?: { [key: string]: number; };
    /**
     *
     * @type {number}
     * @memberof RemediationDetails
     */
    'system_count'?: number;
    /**
     *
     * @type {Array<RemediationIssue>}
     * @memberof RemediationDetails
     */
    'issues'?: Array<RemediationIssue>;
}
/**
 *
 * @export
 * @interface RemediationInput
 */
export interface RemediationInput {
    /**
     *
     * @type {string}
     * @memberof RemediationInput
     */
    'name'?: string;
    /**
     * Indicates whether a remediation has been marked as archived
     * @type {boolean}
     * @memberof RemediationInput
     */
    'archived'?: boolean;
    /**
     * Indicates whether systems that require reboot for the remediation to be properly applied should be rebooted automatically or not
     * @type {boolean}
     * @memberof RemediationInput
     */
    'auto_reboot'?: boolean;
    /**
     *
     * @type {RemediationInputAdd}
     * @memberof RemediationInput
     */
    'add'?: RemediationInputAdd;
}
/**
 *
 * @export
 * @interface RemediationInputAdd
 */
export interface RemediationInputAdd {
    /**
     * Array of issues to add to the remediation. Maximum 50 issues per request.
     * @type {Array<RemediationInputAddIssuesInner>}
     * @memberof RemediationInputAdd
     */
    'issues': Array<RemediationInputAddIssuesInner>;
    /**
     * Default systems that will be applied to all issues that don\'t specify their own systems array. Maximum of 50 unique systems total across all issues per request.
     * @type {Array<string>}
     * @memberof RemediationInputAdd
     */
    'systems'?: Array<string>;
}
/**
 *
 * @export
 * @interface RemediationInputAddIssuesInner
 */
export interface RemediationInputAddIssuesInner {
    /**
     *
     * @type {string}
     * @memberof RemediationInputAddIssuesInner
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof RemediationInputAddIssuesInner
     */
    'resolution'?: string;
    /**
     * Systems for this specific issue. If not provided, uses the default systems from the top-level systems array. Maximum of 50 unique systems total across all issues per request.
     * @type {Array<string>}
     * @memberof RemediationInputAddIssuesInner
     */
    'systems'?: Array<string>;
    /**
     * Controls the order in which issues are executed in the generated playbook. Lower numbers execute first. If not specified, issues are ordered by issue_id.
     * @type {number}
     * @memberof RemediationInputAddIssuesInner
     */
    'precedence'?: number | null;
}
/**
 *
 * @export
 * @interface RemediationIssue
 */
export interface RemediationIssue {
    /**
     *
     * @type {string}
     * @memberof RemediationIssue
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof RemediationIssue
     */
    'description': string;
    /**
     *
     * @type {RemediationIssueResolution}
     * @memberof RemediationIssue
     */
    'resolution': RemediationIssueResolution;
    /**
     * The total number of available resolutions for this issue
     * @type {number}
     * @memberof RemediationIssue
     */
    'resolutions_available'?: number;
    /**
     * Controls the order in which issues are executed in the generated playbook. Lower numbers execute first.
     * @type {number}
     * @memberof RemediationIssue
     */
    'precedence'?: number | null;
    /**
     *
     * @type {Array<SystemOut>}
     * @memberof RemediationIssue
     */
    'systems': Array<SystemOut>;
}
/**
 *
 * @export
 * @interface RemediationIssueIn
 */
export interface RemediationIssueIn {
    /**
     *
     * @type {string}
     * @memberof RemediationIssueIn
     */
    'resolution': string;
}
/**
 *
 * @export
 * @interface RemediationIssueList
 */
export interface RemediationIssueList {
    /**
     *
     * @type {Array<RemediationIssueSummary>}
     * @memberof RemediationIssueList
     */
    'data': Array<RemediationIssueSummary>;
    /**
     *
     * @type {Meta}
     * @memberof RemediationIssueList
     */
    'meta': Meta;
    /**
     *
     * @type {IssueListLinks}
     * @memberof RemediationIssueList
     */
    'links': IssueListLinks;
}
/**
 *
 * @export
 * @interface RemediationIssueResolution
 */
export interface RemediationIssueResolution {
    /**
     *
     * @type {string}
     * @memberof RemediationIssueResolution
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof RemediationIssueResolution
     */
    'description': string;
    /**
     *
     * @type {ResolutionRisk}
     * @memberof RemediationIssueResolution
     */
    'resolution_risk': ResolutionRisk;
    /**
     * Indicates whether the given resolution involves system reboot
     * @type {boolean}
     * @memberof RemediationIssueResolution
     */
    'needs_reboot': boolean;
}


/**
 *
 * @export
 * @interface RemediationIssueSummary
 */
export interface RemediationIssueSummary {
    /**
     *
     * @type {string}
     * @memberof RemediationIssueSummary
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof RemediationIssueSummary
     */
    'description': string;
    /**
     *
     * @type {RemediationIssueResolution}
     * @memberof RemediationIssueSummary
     */
    'resolution': RemediationIssueResolution;
    /**
     * The total number of available resolutions for this issue
     * @type {number}
     * @memberof RemediationIssueSummary
     */
    'resolutions_available'?: number;
    /**
     * The number of systems associated with this plan issue
     * @type {number}
     * @memberof RemediationIssueSummary
     */
    'system_count': number;
}
/**
 *
 * @export
 * @interface RemediationIssueSystemList
 */
export interface RemediationIssueSystemList {
    /**
     *
     * @type {Meta}
     * @memberof RemediationIssueSystemList
     */
    'meta': Meta;
    /**
     *
     * @type {Array<SystemOut>}
     * @memberof RemediationIssueSystemList
     */
    'data': Array<SystemOut>;
}
/**
 *
 * @export
 * @interface RemediationList
 */
export interface RemediationList {
    /**
     *
     * @type {Array<RemediationListItem>}
     * @memberof RemediationList
     */
    'data': Array<RemediationListItem>;
    /**
     *
     * @type {Meta}
     * @memberof RemediationList
     */
    'meta': Meta;
    /**
     *
     * @type {Links}
     * @memberof RemediationList
     */
    'links': Links;
}
/**
 *
 * @export
 * @interface RemediationListItem
 */
export interface RemediationListItem {
    /**
     *
     * @type {string}
     * @memberof RemediationListItem
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof RemediationListItem
     */
    'name': string;
    /**
     *
     * @type {UserOut}
     * @memberof RemediationListItem
     */
    'created_by': UserOut;
    /**
     *
     * @type {string}
     * @memberof RemediationListItem
     */
    'created_at': string;
    /**
     *
     * @type {UserOut}
     * @memberof RemediationListItem
     */
    'updated_by': UserOut;
    /**
     *
     * @type {string}
     * @memberof RemediationListItem
     */
    'updated_at': string;
    /**
     *
     * @type {number}
     * @memberof RemediationListItem
     */
    'issue_count': number;
    /**
     *
     * @type {number}
     * @memberof RemediationListItem
     */
    'system_count': number;
    /**
     *
     * @type {number}
     * @memberof RemediationListItem
     */
    'resolved_count': number;
    /**
     * Indicates whether any of the issues contained in the remediation require system reboot
     * @type {boolean}
     * @memberof RemediationListItem
     */
    'needs_reboot': boolean;
    /**
     * Indicates whether a remediation has been marked as archived
     * @type {boolean}
     * @memberof RemediationListItem
     */
    'archived': boolean;
    /**
     *
     * @type {Array<PlaybookRunDetails>}
     * @memberof RemediationListItem
     */
    'playbook_runs'?: Array<PlaybookRunDetails>;
}
/**
 *
 * @export
 * @interface RemediationNameList
 */
export interface RemediationNameList {
    /**
     *
     * @type {Array<RemediationNameListItem>}
     * @memberof RemediationNameList
     */
    'data': Array<RemediationNameListItem>;
    /**
     *
     * @type {Meta}
     * @memberof RemediationNameList
     */
    'meta': Meta;
    /**
     *
     * @type {Links}
     * @memberof RemediationNameList
     */
    'links': Links;
}
/**
 *
 * @export
 * @interface RemediationNameListItem
 */
export interface RemediationNameListItem {
    /**
     *
     * @type {string}
     * @memberof RemediationNameListItem
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof RemediationNameListItem
     */
    'name': string;
}
/**
 *
 * @export
 * @interface RemediationSystemList
 */
export interface RemediationSystemList {
    /**
     *
     * @type {Array<SystemWithIssueCount>}
     * @memberof RemediationSystemList
     */
    'data': Array<SystemWithIssueCount>;
    /**
     *
     * @type {Meta}
     * @memberof RemediationSystemList
     */
    'meta': Meta;
    /**
     *
     * @type {Links}
     * @memberof RemediationSystemList
     */
    'links': Links;
}
/**
 *
 * @export
 * @interface RemediationsList
 */
export interface RemediationsList {
    /**
     *
     * @type {Array<string>}
     * @memberof RemediationsList
     */
    'remediation_ids': Array<string>;
}
/**
 *
 * @export
 * @interface RequestError
 */
export interface RequestError {
    /**
     *
     * @type {Array<RequestErrorErrorsInner>}
     * @memberof RequestError
     */
    'errors': Array<RequestErrorErrorsInner>;
}
/**
 *
 * @export
 * @interface RequestErrorErrorsInner
 */
export interface RequestErrorErrorsInner {
    /**
     *
     * @type {string}
     * @memberof RequestErrorErrorsInner
     */
    'id': string;
    /**
     *
     * @type {number}
     * @memberof RequestErrorErrorsInner
     */
    'status': number;
    /**
     *
     * @type {string}
     * @memberof RequestErrorErrorsInner
     */
    'code': string;
    /**
     *
     * @type {string}
     * @memberof RequestErrorErrorsInner
     */
    'title': string;
    /**
     *
     * @type {object}
     * @memberof RequestErrorErrorsInner
     */
    'details'?: object;
}
/**
 *
 * @export
 * @enum {string}
 */

export const ResolutionRisk = {
    NUMBER_MINUS_1: -1,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;

export type ResolutionRisk = typeof ResolutionRisk[keyof typeof ResolutionRisk];


/**
 *
 * @export
 * @interface Resolutions
 */
export interface Resolutions {
    /**
     *
     * @type {string}
     * @memberof Resolutions
     */
    'id': string;
    /**
     *
     * @type {ResolutionRisk}
     * @memberof Resolutions
     */
    'resolution_risk': ResolutionRisk;
    /**
     *
     * @type {Array<ResolutionsResolutionsInner>}
     * @memberof Resolutions
     */
    'resolutions': Array<ResolutionsResolutionsInner>;
}


/**
 *
 * @export
 * @interface ResolutionsBatchInput
 */
export interface ResolutionsBatchInput {
    /**
     *
     * @type {Array<string>}
     * @memberof ResolutionsBatchInput
     */
    'issues': Array<string>;
}
/**
 * @type ResolutionsBatchValue
 * @export
 */
export type ResolutionsBatchValue = Resolutions | boolean;

/**
 *
 * @export
 * @interface ResolutionsResolutionsInner
 */
export interface ResolutionsResolutionsInner {
    /**
     *
     * @type {string}
     * @memberof ResolutionsResolutionsInner
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof ResolutionsResolutionsInner
     */
    'description': string;
    /**
     * Indicates whether the given resolution involves system reboot
     * @type {boolean}
     * @memberof ResolutionsResolutionsInner
     */
    'needs_reboot': boolean;
    /**
     *
     * @type {ResolutionRisk}
     * @memberof ResolutionsResolutionsInner
     */
    'resolution_risk': ResolutionRisk;
}


/**
 *
 * @export
 * @interface SystemIssueOut
 */
export interface SystemIssueOut {
    /**
     *
     * @type {string}
     * @memberof SystemIssueOut
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof SystemIssueOut
     */
    'description': string;
    /**
     *
     * @type {SystemIssueOutResolution}
     * @memberof SystemIssueOut
     */
    'resolution': SystemIssueOutResolution;
    /**
     *
     * @type {number}
     * @memberof SystemIssueOut
     */
    'resolutions_available': number;
}
/**
 *
 * @export
 * @interface SystemIssueOutResolution
 */
export interface SystemIssueOutResolution {
    /**
     *
     * @type {string}
     * @memberof SystemIssueOutResolution
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof SystemIssueOutResolution
     */
    'description'?: string;
    /**
     *
     * @type {number}
     * @memberof SystemIssueOutResolution
     */
    'resolution_risk'?: number;
    /**
     *
     * @type {boolean}
     * @memberof SystemIssueOutResolution
     */
    'needs_reboot'?: boolean;
}
/**
 *
 * @export
 * @interface SystemIssuesList
 */
export interface SystemIssuesList {
    /**
     *
     * @type {Meta}
     * @memberof SystemIssuesList
     */
    'meta': Meta;
    /**
     *
     * @type {Links}
     * @memberof SystemIssuesList
     */
    'links'?: Links;
    /**
     *
     * @type {Array<SystemIssueOut>}
     * @memberof SystemIssuesList
     */
    'data': Array<SystemIssueOut>;
}
/**
 *
 * @export
 * @interface SystemOut
 */
export interface SystemOut {
    /**
     *
     * @type {string}
     * @memberof SystemOut
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof SystemOut
     */
    'hostname': string | null;
    /**
     *
     * @type {string}
     * @memberof SystemOut
     */
    'display_name': string | null;
    /**
     *
     * @type {boolean}
     * @memberof SystemOut
     */
    'resolved'?: boolean;
}
/**
 *
 * @export
 * @interface SystemWithIssueCount
 */
export interface SystemWithIssueCount {
    /**
     *
     * @type {string}
     * @memberof SystemWithIssueCount
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof SystemWithIssueCount
     */
    'hostname': string | null;
    /**
     *
     * @type {string}
     * @memberof SystemWithIssueCount
     */
    'display_name': string | null;
    /**
     * Number of issues associated with this system in the remediation plan
     * @type {number}
     * @memberof SystemWithIssueCount
     */
    'issue_count': number;
}
/**
 *
 * @export
 * @interface SystemsList
 */
export interface SystemsList {
    /**
     *
     * @type {Array<string>}
     * @memberof SystemsList
     */
    'system_ids': Array<string>;
}
/**
 *
 * @export
 * @interface UserOut
 */
export interface UserOut {
    /**
     *
     * @type {string}
     * @memberof UserOut
     */
    'username': string;
    /**
     *
     * @type {string}
     * @memberof UserOut
     */
    'first_name'?: string;
    /**
     *
     * @type {string}
     * @memberof UserOut
     */
    'last_name'?: string;
}
