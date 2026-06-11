/**
 * Cron expression defining when the job runs
 * @export
 */
export type CronSchedule = string;
/**
 * Current status of the job
 * @export
 * @enum {string}
 */
export enum JobStatus {
    Scheduled = 'scheduled',
    Running = 'running',
    Paused = 'paused',
    Failed = 'failed'
}
/**
 * Type of job payload
 * @export
 * @enum {string}
 */
export enum PayloadType {
    Export = 'export'
}
/**
 * Status of a job run
 * @export
 * @enum {string}
 */
export enum JobRunStatus {
    Running = 'running',
    Completed = 'completed',
    Failed = 'failed'
}
/**
 * A scheduled job
 * @export
 * @interface Job
 */
export interface Job {
    /**
     * Unique identifier for the job
     * @type {any}
     * @memberof Job
     */
    'id': any;
    /**
     * Human-readable name for the job
     * @type {any}
     * @memberof Job
     */
    'name': any;
    /**
     * Cron expression defining when the job runs
     * @type {any}
     * @memberof Job
     */
    'schedule': any;
    /**
     * IANA timezone for interpreting the schedule
     * @type {any}
     * @memberof Job
     */
    'timezone'?: any;
    /**
     * Type of job payload
     * @type {any}
     * @memberof Job
     */
    'type': any;
    /**
     * Job payload
     * @type {any}
     * @memberof Job
     */
    'payload'?: any;
    /**
     * Current status of the job
     * @type {any}
     * @memberof Job
     */
    'status': any;
    /**
     * Timestamp of the last job execution
     * @type {any}
     * @memberof Job
     */
    'last_run_at'?: any;
    /**
     * Timestamp of the next scheduled job execution
     * @type {any}
     * @memberof Job
     */
    'next_run_at'?: any;
}
/**
 * Request body for creating a new job
 * @export
 * @interface CreateJobRequest
 */
export interface CreateJobRequest {
    /**
     * Human-readable name for the job
     * @type {any}
     * @memberof CreateJobRequest
     */
    'name': any;
    /**
     * Cron expression defining when the job runs
     * @type {any}
     * @memberof CreateJobRequest
     */
    'schedule': any;
    /**
     * IANA timezone for interpreting the schedule
     * @type {any}
     * @memberof CreateJobRequest
     */
    'timezone'?: any;
    /**
     * Type of job payload
     * @type {any}
     * @memberof CreateJobRequest
     */
    'type': any;
    /**
     * Job payload
     * @type {any}
     * @memberof CreateJobRequest
     */
    'payload': any;
}
/**
 * Request body for updating a job (PUT)
 * @export
 * @interface UpdateJobRequest
 */
export interface UpdateJobRequest {
    /**
     * Human-readable name for the job
     * @type {any}
     * @memberof UpdateJobRequest
     */
    'name': any;
    /**
     * Cron expression defining when the job runs
     * @type {any}
     * @memberof UpdateJobRequest
     */
    'schedule': any;
    /**
     * Type of job payload
     * @type {any}
     * @memberof UpdateJobRequest
     */
    'type': any;
    /**
     * Job payload
     * @type {any}
     * @memberof UpdateJobRequest
     */
    'payload': any;
    /**
     * Current status of the job
     * @type {any}
     * @memberof UpdateJobRequest
     */
    'status': any;
}
/**
 * Request body for partially updating a job (PATCH)
 * @export
 * @interface PatchJobRequest
 */
export interface PatchJobRequest {
    /**
     * Human-readable name for the job
     * @type {any}
     * @memberof PatchJobRequest
     */
    'name'?: any;
    /**
     * Cron expression defining when the job runs
     * @type {any}
     * @memberof PatchJobRequest
     */
    'schedule'?: any;
    /**
     * Type of job payload
     * @type {any}
     * @memberof PatchJobRequest
     */
    'type'?: any;
    /**
     * Job payload
     * @type {any}
     * @memberof PatchJobRequest
     */
    'payload'?: any;
    /**
     * Current status of the job
     * @type {any}
     * @memberof PatchJobRequest
     */
    'status'?: any;
}
/**
 * A record of a single job execution
 * @export
 * @interface JobRun
 */
export interface JobRun {
    /**
     * Unique identifier for the job run
     * @type {any}
     * @memberof JobRun
     */
    'id': any;
    /**
     * ID of the parent job
     * @type {any}
     * @memberof JobRun
     */
    'job_id': any;
    /**
     * Status of the job run
     * @type {any}
     * @memberof JobRun
     */
    'status': any;
    /**
     * When the job run started
     * @type {any}
     * @memberof JobRun
     */
    'start_time': any;
    /**
     * When the job run completed or failed
     * @type {any}
     * @memberof JobRun
     */
    'end_time'?: any;
    /**
     * Error message if the run failed
     * @type {any}
     * @memberof JobRun
     */
    'error_message'?: any;
    /**
     * Result or output from the job run
     * @type {any}
     * @memberof JobRun
     */
    'result'?: any;
}
/**
 * Response when manually triggering a job run
 * @export
 * @interface RunJobResponse
 */
export interface RunJobResponse {
    /**
     * Unique identifier for the created job run
     * @type {any}
     * @memberof RunJobResponse
     */
    'run_id': any;
}
/**
 * JSON:API error object
 * @export
 * @interface ErrorObject
 */
export interface ErrorObject {
    /**
     * HTTP status code as a string
     * @type {any}
     * @memberof ErrorObject
     */
    'status': any;
    /**
     * Short, human-readable summary of the problem
     * @type {any}
     * @memberof ErrorObject
     */
    'title': any;
    /**
     * Human-readable explanation specific to this occurrence
     * @type {any}
     * @memberof ErrorObject
     */
    'detail': any;
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
 * Pagination metadata
 * @export
 * @interface PaginationMeta
 */
export interface PaginationMeta {
    /**
     * Total number of items across all pages
     * @type {any}
     * @memberof PaginationMeta
     */
    'count': any;
}
/**
 * Navigation links for pagination
 * @export
 * @interface PaginationLinks
 */
export interface PaginationLinks {
    /**
     * Link to the first page
     * @type {any}
     * @memberof PaginationLinks
     */
    'first'?: any;
    /**
     * Link to the last page
     * @type {any}
     * @memberof PaginationLinks
     */
    'last'?: any;
    /**
     * Link to the next page
     * @type {any}
     * @memberof PaginationLinks
     */
    'next'?: any;
    /**
     * Link to the previous page
     * @type {any}
     * @memberof PaginationLinks
     */
    'prev'?: any;
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
