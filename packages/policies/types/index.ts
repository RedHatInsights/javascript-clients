/**
 *
 * @export
 * @interface Fact
 */
export interface Fact {
    /**
     *
     * @type {number}
     * @memberof Fact
     */
    'id'?: number;
    /**
     *
     * @type {string}
     * @memberof Fact
     */
    'name'?: string;
    /**
     *
     * @type {FactType}
     * @memberof Fact
     */
    'type'?: FactType;
}


/**
 *
 * @export
 * @enum {string}
 */

export const FactType = {
    String: 'STRING',
    Boolean: 'BOOLEAN',
    List: 'LIST',
    Int: 'INT'
} as const;

export type FactType = typeof FactType[keyof typeof FactType];


/**
 * A single history item for a fired trigger on a host
 * @export
 * @interface HistoryItem
 */
export interface HistoryItem {
    /**
     * Fire time (since the epoch)
     * @type {number}
     * @memberof HistoryItem
     */
    'ctime'?: number;
    /**
     * Host id
     * @type {string}
     * @memberof HistoryItem
     */
    'id'?: string;
    /**
     * Host name
     * @type {string}
     * @memberof HistoryItem
     */
    'hostName'?: string;
}
/**
 *
 * @export
 * @interface Meta
 */
export interface Meta {
    /**
     *
     * @type {number}
     * @memberof Meta
     */
    'count'?: number;
}
/**
 * Reason for failure
 * @export
 * @interface Msg
 */
export interface Msg {
    /**
     *
     * @type {string}
     * @memberof Msg
     */
    'msg'?: string;
}
/**
 *
 * @export
 * @interface PagedResponseOfHistoryItem
 */
export interface PagedResponseOfHistoryItem {
    /**
     *
     * @type {Meta}
     * @memberof PagedResponseOfHistoryItem
     */
    'meta'?: Meta;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof PagedResponseOfHistoryItem
     */
    'links'?: { [key: string]: string; };
    /**
     *
     * @type {Array<HistoryItem>}
     * @memberof PagedResponseOfHistoryItem
     */
    'data'?: Array<HistoryItem>;
}
/**
 *
 * @export
 * @interface PagedResponseOfPolicy
 */
export interface PagedResponseOfPolicy {
    /**
     *
     * @type {Meta}
     * @memberof PagedResponseOfPolicy
     */
    'meta'?: Meta;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof PagedResponseOfPolicy
     */
    'links'?: { [key: string]: string; };
    /**
     *
     * @type {Array<Policy>}
     * @memberof PagedResponseOfPolicy
     */
    'data'?: Array<Policy>;
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
    'id'?: string;
    /**
     * Name of the rule. Must be unique per customer organization.
     * @type {string}
     * @memberof Policy
     */
    'name': string;
    /**
     * A short description of the policy.
     * @type {string}
     * @memberof Policy
     */
    'description'?: string;
    /**
     *
     * @type {boolean}
     * @memberof Policy
     */
    'isEnabled'?: boolean;
    /**
     * Condition string.
     * @type {string}
     * @memberof Policy
     */
    'conditions': string;
    /**
     * String describing actions separated by \';\' when the policy is evaluated to true.Allowed values is \'notification\'
     * @type {string}
     * @memberof Policy
     */
    'actions'?: string;
    /**
     * Last update time in a form like \'2020-01-24 12:19:56.718\', output only
     * @type {string}
     * @memberof Policy
     */
    'mtime'?: string;
    /**
     * Create time in a form like \'2020-01-24 12:19:56.718\', output only
     * @type {string}
     * @memberof Policy
     */
    'ctime'?: string;
    /**
     *
     * @type {number}
     * @memberof Policy
     */
    'lastTriggered'?: number;
}
/**
 *
 * @export
 * @interface UserPreferences
 */
export interface UserPreferences {
    /**
     *
     * @type {boolean}
     * @memberof UserPreferences
     */
    'instant_email'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UserPreferences
     */
    'daily_email'?: boolean;
}
