/**
 * Request body for creating a new job
 * @export
 * @interface CreateJobRequest
 */
export interface CreateJobRequest {
    /**
     * Human-readable name for the job
     * @type {string}
     * @memberof CreateJobRequest
     */
    'name': string;
    /**
     * Cron expression defining when the job runs
     * @type {string}
     * @memberof CreateJobRequest
     */
    'schedule': string;
    /**
     * IANA timezone for interpreting the schedule (e.g., \"America/New_York\", \"Europe/London\", \"UTC\"). Defaults to \"UTC\" if not specified. The schedule will be interpreted in this timezone, but next_run_at is always returned in UTC.
     * @type {string}
     * @memberof CreateJobRequest
     */
    'timezone'?: string;
    /**
     *
     * @type {PayloadType}
     * @memberof CreateJobRequest
     */
    'type': PayloadType;
    /**
     *
     * @type {any}
     * @memberof CreateJobRequest
     */
    'payload': any;
}


/**
 * JSON:API error object
 * @export
 * @interface ErrorObject
 */
export interface ErrorObject {
    /**
     * HTTP status code as a string
     * @type {string}
     * @memberof ErrorObject
     */
    'status': string;
    /**
     * Short, human-readable summary of the problem
     * @type {string}
     * @memberof ErrorObject
     */
    'title': string;
    /**
     * Human-readable explanation specific to this occurrence
     * @type {string}
     * @memberof ErrorObject
     */
    'detail': string;
}
/**
 * JSON:API error response
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * Array of error objects
     * @type {Array<ErrorObject>}
     * @memberof ErrorResponse
     */
    'errors': Array<ErrorObject>;
}
/**
 * Result from an export job execution. The result_type field at the JobRun level will be \'export\'.
 * @export
 * @interface ExportResult
 */
export interface ExportResult {
    /**
     * ID of the created export
     * @type {string}
     * @memberof ExportResult
     */
    'export_id': string;
    /**
     * Download URL for the completed export
     * @type {string}
     * @memberof ExportResult
     */
    'url'?: string;
}
/**
 * A scheduled job (org_id, username, and user_id are extracted from X-Rh-Identity header)
 * @export
 * @interface Job
 */
export interface Job {
    /**
     * Unique identifier for the job
     * @type {string}
     * @memberof Job
     */
    'id': string;
    /**
     * Human-readable name for the job
     * @type {string}
     * @memberof Job
     */
    'name': string;
    /**
     * Cron expression defining when the job runs
     * @type {string}
     * @memberof Job
     */
    'schedule': string;
    /**
     * IANA timezone for interpreting the schedule (e.g., \"America/New_York\", \"Europe/London\", \"UTC\"). The schedule is interpreted in this timezone, but next_run_at is always returned in UTC.
     * @type {string}
     * @memberof Job
     */
    'timezone'?: string;
    /**
     *
     * @type {PayloadType}
     * @memberof Job
     */
    'type': PayloadType;
    /**
     *
     * @type {any}
     * @memberof Job
     */
    'payload'?: any;
    /**
     *
     * @type {JobStatus}
     * @memberof Job
     */
    'status': JobStatus;
    /**
     * Timestamp of the last job execution in the job\'s timezone. Stored internally in UTC but returned in the job\'s timezone with the appropriate offset (e.g., \"2025-11-03T05:00:00-05:00\" for America/New_York).
     * @type {string}
     * @memberof Job
     */
    'last_run_at'?: string | null;
    /**
     * Timestamp of the next scheduled job execution in the job\'s timezone. Calculated from the cron schedule in the job\'s timezone and returned with the appropriate offset (e.g., \"2025-12-01T09:00:00-05:00\" for a 9 AM job in America/New_York).
     * @type {string}
     * @memberof Job
     */
    'next_run_at'?: string | null;
}


/**
 * A record of a single job execution
 * @export
 * @interface JobRun
 */
export interface JobRun {
    /**
     * Unique identifier for the job run
     * @type {string}
     * @memberof JobRun
     */
    'id': string;
    /**
     * ID of the parent job
     * @type {string}
     * @memberof JobRun
     */
    'job_id': string;
    /**
     * Name of the parent job
     * @type {string}
     * @memberof JobRun
     */
    'job_name'?: string;
    /**
     *
     * @type {JobRunStatus}
     * @memberof JobRun
     */
    'status': JobRunStatus;
    /**
     * When the job run started
     * @type {string}
     * @memberof JobRun
     */
    'start_time': string;
    /**
     * When the job run completed or failed
     * @type {string}
     * @memberof JobRun
     */
    'end_time'?: string | null;
    /**
     * Error message if the run failed
     * @type {string}
     * @memberof JobRun
     */
    'error_message'?: string | null;
    /**
     * Type discriminator for the result object
     * @type {string}
     * @memberof JobRun
     */
    'result_type'?: JobRunResultTypeEnum;
    /**
     *
     * @type {JobRunResult}
     * @memberof JobRun
     */
    'result'?: JobRunResult | null;
}

export const JobRunResultTypeEnum = {
    Export: 'export'
} as const;

export type JobRunResultTypeEnum = typeof JobRunResultTypeEnum[keyof typeof JobRunResultTypeEnum];

/**
 * Result object from the export job execution
 * @export
 * @interface JobRunResult
 */
export interface JobRunResult {
    /**
     * ID of the created export
     * @type {string}
     * @memberof JobRunResult
     */
    'export_id': string;
    /**
     * Download URL for the completed export
     * @type {string}
     * @memberof JobRunResult
     */
    'url'?: string;
}
/**
 * Status of a job run
 * @export
 * @enum {string}
 */

export const JobRunStatus = {
    Running: 'running',
    Completed: 'completed',
    Failed: 'failed'
} as const;

export type JobRunStatus = typeof JobRunStatus[keyof typeof JobRunStatus];


/**
 * Current status of the job
 * @export
 * @enum {string}
 */

export const JobStatus = {
    Scheduled: 'scheduled',
    Running: 'running',
    Paused: 'paused',
    Failed: 'failed'
} as const;

export type JobStatus = typeof JobStatus[keyof typeof JobStatus];


/**
 * Paginated response for job runs list
 * @export
 * @interface PaginatedJobRunsResponse
 */
export interface PaginatedJobRunsResponse {
    /**
     *
     * @type {PaginationMeta}
     * @memberof PaginatedJobRunsResponse
     */
    'meta': PaginationMeta;
    /**
     *
     * @type {PaginationLinks}
     * @memberof PaginatedJobRunsResponse
     */
    'links': PaginationLinks;
    /**
     *
     * @type {Array<JobRun>}
     * @memberof PaginatedJobRunsResponse
     */
    'data': Array<JobRun>;
}
/**
 * Paginated response for jobs list
 * @export
 * @interface PaginatedJobsResponse
 */
export interface PaginatedJobsResponse {
    /**
     *
     * @type {PaginationMeta}
     * @memberof PaginatedJobsResponse
     */
    'meta': PaginationMeta;
    /**
     *
     * @type {PaginationLinks}
     * @memberof PaginatedJobsResponse
     */
    'links': PaginationLinks;
    /**
     *
     * @type {Array<Job>}
     * @memberof PaginatedJobsResponse
     */
    'data': Array<Job>;
}
/**
 * Navigation links for pagination
 * @export
 * @interface PaginationLinks
 */
export interface PaginationLinks {
    /**
     * Link to the first page
     * @type {string}
     * @memberof PaginationLinks
     */
    'first'?: string;
    /**
     * Link to the last page
     * @type {string}
     * @memberof PaginationLinks
     */
    'last'?: string;
    /**
     * Link to the next page (if available)
     * @type {string}
     * @memberof PaginationLinks
     */
    'next'?: string;
    /**
     * Link to the previous page (if available)
     * @type {string}
     * @memberof PaginationLinks
     */
    'prev'?: string;
}
/**
 * Pagination metadata
 * @export
 * @interface PaginationMeta
 */
export interface PaginationMeta {
    /**
     * Total number of items across all pages
     * @type {number}
     * @memberof PaginationMeta
     */
    'count': number;
}
/**
 * Request body for partially updating a job (PATCH)
 * @export
 * @interface PatchJobRequest
 */
export interface PatchJobRequest {
    /**
     * Human-readable name for the job
     * @type {string}
     * @memberof PatchJobRequest
     */
    'name'?: string;
    /**
     * Cron expression defining when the job runs
     * @type {string}
     * @memberof PatchJobRequest
     */
    'schedule'?: string;
    /**
     *
     * @type {PayloadType}
     * @memberof PatchJobRequest
     */
    'type'?: PayloadType;
    /**
     *
     * @type {any}
     * @memberof PatchJobRequest
     */
    'payload'?: any;
    /**
     *
     * @type {JobStatus}
     * @memberof PatchJobRequest
     */
    'status'?: JobStatus;
}


/**
 * Type of job payload
 * @export
 * @enum {string}
 */

export const PayloadType = {
    Export: 'export'
} as const;

export type PayloadType = typeof PayloadType[keyof typeof PayloadType];


/**
 * Response when manually triggering a job run
 * @export
 * @interface RunJobResponse
 */
export interface RunJobResponse {
    /**
     * Unique identifier for the created job run
     * @type {string}
     * @memberof RunJobResponse
     */
    'run_id': string;
}
/**
 * Request body for updating a job (PUT)
 * @export
 * @interface UpdateJobRequest
 */
export interface UpdateJobRequest {
    /**
     * Human-readable name for the job
     * @type {string}
     * @memberof UpdateJobRequest
     */
    'name': string;
    /**
     * Cron expression defining when the job runs
     * @type {string}
     * @memberof UpdateJobRequest
     */
    'schedule': string;
    /**
     *
     * @type {PayloadType}
     * @memberof UpdateJobRequest
     */
    'type': PayloadType;
    /**
     *
     * @type {any}
     * @memberof UpdateJobRequest
     */
    'payload': any;
    /**
     *
     * @type {JobStatus}
     * @memberof UpdateJobRequest
     */
    'status': JobStatus;
}


