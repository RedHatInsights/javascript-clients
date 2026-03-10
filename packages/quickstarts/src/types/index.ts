/**
 *
 * @export
 * @interface BadRequest
 */
export interface BadRequest {
    /**
     *
     * @type {string}
     * @memberof BadRequest
     */
    'msg'?: string;
}
/**
 *
 * @export
 * @interface FavoriteQuickstart
 */
export interface FavoriteQuickstart {
    /**
     *
     * @type {string}
     * @memberof FavoriteQuickstart
     */
    'accountId'?: string;
    /**
     *
     * @type {string}
     * @memberof FavoriteQuickstart
     */
    'createdAt'?: string;
    /**
     *
     * @type {any}
     * @memberof FavoriteQuickstart
     */
    'deletedAt'?: any;
    /**
     *
     * @type {boolean}
     * @memberof FavoriteQuickstart
     */
    'favorite'?: boolean;
    /**
     *
     * @type {number}
     * @memberof FavoriteQuickstart
     */
    'id'?: number;
    /**
     *
     * @type {string}
     * @memberof FavoriteQuickstart
     */
    'quickstartName'?: string;
    /**
     *
     * @type {string}
     * @memberof FavoriteQuickstart
     */
    'updatedAt'?: string;
}
/**
 *
 * @export
 * @interface FavoritesGet200Response
 */
export interface FavoritesGet200Response {
    /**
     *
     * @type {Array<FavoriteQuickstart>}
     * @memberof FavoritesGet200Response
     */
    'data'?: Array<FavoriteQuickstart>;
}
/**
 *
 * @export
 * @interface HelpTopic
 */
export interface HelpTopic {
    /**
     *
     * @type {object}
     * @memberof HelpTopic
     */
    'content'?: object;
    /**
     *
     * @type {string}
     * @memberof HelpTopic
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof HelpTopic
     */
    'deletedAt'?: string | null;
    /**
     *
     * @type {string}
     * @memberof HelpTopic
     */
    'groupName'?: string;
    /**
     *
     * @type {number}
     * @memberof HelpTopic
     */
    'id'?: number;
    /**
     *
     * @type {string}
     * @memberof HelpTopic
     */
    'name'?: string;
    /**
     *
     * @type {Array<Tag>}
     * @memberof HelpTopic
     */
    'tags'?: Array<Tag>;
    /**
     *
     * @type {string}
     * @memberof HelpTopic
     */
    'updatedAt'?: string;
}
/**
 *
 * @export
 * @interface HelptopicsGet200Response
 */
export interface HelptopicsGet200Response {
    /**
     *
     * @type {Array<HelpTopic>}
     * @memberof HelptopicsGet200Response
     */
    'data'?: Array<HelpTopic>;
}
/**
 *
 * @export
 * @interface HelptopicsNameGet200Response
 */
export interface HelptopicsNameGet200Response {
    /**
     *
     * @type {HelpTopic}
     * @memberof HelptopicsNameGet200Response
     */
    'data'?: HelpTopic;
}
/**
 *
 * @export
 * @interface NotFound
 */
export interface NotFound {
    /**
     *
     * @type {string}
     * @memberof NotFound
     */
    'msg'?: string;
}
/**
 *
 * @export
 * @interface ProgressGet200Response
 */
export interface ProgressGet200Response {
    /**
     *
     * @type {Array<QuickstartProgress>}
     * @memberof ProgressGet200Response
     */
    'data'?: Array<QuickstartProgress>;
}
/**
 *
 * @export
 * @interface Quickstart
 */
export interface Quickstart {
    /**
     *
     * @type {object}
     * @memberof Quickstart
     */
    'content'?: object;
    /**
     *
     * @type {string}
     * @memberof Quickstart
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof Quickstart
     */
    'deletedAt'?: string | null;
    /**
     *
     * @type {Array<FavoriteQuickstart>}
     * @memberof Quickstart
     */
    'favoriteQuickstart'?: Array<FavoriteQuickstart>;
    /**
     *
     * @type {number}
     * @memberof Quickstart
     */
    'id'?: number;
    /**
     *
     * @type {string}
     * @memberof Quickstart
     */
    'name'?: string;
    /**
     *
     * @type {Array<Tag>}
     * @memberof Quickstart
     */
    'tags'?: Array<Tag>;
    /**
     *
     * @type {string}
     * @memberof Quickstart
     */
    'updatedAt'?: string;
}
/**
 *
 * @export
 * @interface QuickstartProgress
 */
export interface QuickstartProgress {
    /**
     *
     * @type {number}
     * @memberof QuickstartProgress
     */
    'accountId'?: number;
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof QuickstartProgress
     */
    'progress'?: { [key: string]: any; };
    /**
     *
     * @type {string}
     * @memberof QuickstartProgress
     */
    'quickstartName'?: string;
}
/**
 *
 * @export
 * @interface QuickstartProgressRequest
 */
export interface QuickstartProgressRequest {
    /**
     *
     * @type {number}
     * @memberof QuickstartProgressRequest
     */
    'accountId': number;
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof QuickstartProgressRequest
     */
    'progress'?: { [key: string]: any; };
    /**
     *
     * @type {string}
     * @memberof QuickstartProgressRequest
     */
    'quickstartName': string;
}
/**
 *
 * @export
 * @interface QuickstartsFiltersGet200Response
 */
export interface QuickstartsFiltersGet200Response {
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof QuickstartsFiltersGet200Response
     */
    'data'?: { [key: string]: any; };
}
/**
 *
 * @export
 * @interface QuickstartsGet200Response
 */
export interface QuickstartsGet200Response {
    /**
     *
     * @type {Array<Quickstart>}
     * @memberof QuickstartsGet200Response
     */
    'data'?: Array<Quickstart>;
}
/**
 *
 * @export
 * @interface Tag
 */
export interface Tag {
    /**
     *
     * @type {string}
     * @memberof Tag
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof Tag
     */
    'deletedAt'?: string | null;
    /**
     *
     * @type {number}
     * @memberof Tag
     */
    'id'?: number;
    /**
     *
     * @type {string}
     * @memberof Tag
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof Tag
     */
    'updatedAt'?: string;
    /**
     *
     * @type {string}
     * @memberof Tag
     */
    'value'?: string;
}
