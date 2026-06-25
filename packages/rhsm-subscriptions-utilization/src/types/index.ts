/**
 *
 * @export
 * @interface OrgPreferencesRequest
 */
export interface OrgPreferencesRequest {
    /**
     * Over-usage threshold margin as a whole-number percentage (e.g. 5 means 5%).
     * @type {number}
     * @memberof OrgPreferencesRequest
     */
    'custom_threshold': number;
}
/**
 *
 * @export
 * @interface OrgPreferencesResponse
 */
export interface OrgPreferencesResponse {
    /**
     * Persisted over-usage threshold margin as a whole-number percentage.
     * @type {number}
     * @memberof OrgPreferencesResponse
     */
    'custom_threshold': number;
    /**
     * UTC timestamp when preferences were last persisted. Omitted when the organization has not configured custom preferences and the system default threshold is returned.
     * @type {string}
     * @memberof OrgPreferencesResponse
     */
    'last_modified'?: string;
}
