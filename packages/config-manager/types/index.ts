/**
 *
 * @export
 * @interface CreateProfileRequest
 */
export interface CreateProfileRequest {
    /**
     * Remote host configuration enabled state
     * @type {boolean}
     * @memberof CreateProfileRequest
     */
    'active': boolean;
    /**
     * Remote configuration status for running Compliance data collection
     * @type {boolean}
     * @memberof CreateProfileRequest
     */
    'compliance': boolean;
    /**
     * Remote configuration status for running Insights data collection
     * @type {boolean}
     * @memberof CreateProfileRequest
     */
    'insights': boolean;
    /**
     * Remote configuration status for running Remediation playbooks
     * @type {boolean}
     * @memberof CreateProfileRequest
     */
    'remediations': boolean;
}
/**
 *
 * @export
 * @interface GetProfiles200Response
 */
export interface GetProfiles200Response {
    /**
     *
     * @type {number}
     * @memberof GetProfiles200Response
     */
    'total': number;
    /**
     *
     * @type {number}
     * @memberof GetProfiles200Response
     */
    'count': number;
    /**
     *
     * @type {number}
     * @memberof GetProfiles200Response
     */
    'limit': number;
    /**
     *
     * @type {number}
     * @memberof GetProfiles200Response
     */
    'offset': number;
    /**
     *
     * @type {Array<Profile>}
     * @memberof GetProfiles200Response
     */
    'results': Array<Profile>;
}
/**
 *
 * @export
 * @interface Profile
 */
export interface Profile {
    /**
     * Profile unique identity value
     * @type {string}
     * @memberof Profile
     */
    'id'?: string;
    /**
     * Red Hat account number
     * @type {string}
     * @memberof Profile
     */
    'account_id'?: string;
    /**
     * Red Hat organization identity value
     * @type {string}
     * @memberof Profile
     */
    'org_id'?: string;
    /**
     * Time of profile creation
     * @type {string}
     * @memberof Profile
     */
    'created_at'?: string;
    /**
     * Remote host configuration enabled state
     * @type {boolean}
     * @memberof Profile
     */
    'active'?: boolean;
    /**
     * Remote configuration status for running Compliance data collection
     * @type {boolean}
     * @memberof Profile
     */
    'compliance'?: boolean;
    /**
     * Remote configuration status for running Insights data collection
     * @type {boolean}
     * @memberof Profile
     */
    'insights'?: boolean;
    /**
     * Remote configuration status for running Remediation playbooks
     * @type {boolean}
     * @memberof Profile
     */
    'remediations'?: boolean;
}
