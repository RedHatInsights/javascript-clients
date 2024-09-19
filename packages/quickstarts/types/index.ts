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
 * @interface FavoritesGet200Response
 */
export interface FavoritesGet200Response {
    /**
     *
     * @type {Array<V1FavoriteQuickstart>}
     * @memberof FavoritesGet200Response
     */
    'data'?: Array<V1FavoriteQuickstart>;
}
/**
 *
 * @export
 * @interface HelptopicsGet200Response
 */
export interface HelptopicsGet200Response {
    /**
     *
     * @type {Array<V1HelpTopic>}
     * @memberof HelptopicsGet200Response
     */
    'data'?: Array<V1HelpTopic>;
}
/**
 *
 * @export
 * @interface HelptopicsNameGet200Response
 */
export interface HelptopicsNameGet200Response {
    /**
     *
     * @type {V1HelpTopic}
     * @memberof HelptopicsNameGet200Response
     */
    'data'?: V1HelpTopic;
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
 * @interface QuickstartsGet200Response
 */
export interface QuickstartsGet200Response {
    /**
     *
     * @type {Array<V1Quickstart>}
     * @memberof QuickstartsGet200Response
     */
    'data'?: Array<V1Quickstart>;
}
/**
 *
 * @export
 * @interface V1FavoriteQuickstart
 */
export interface V1FavoriteQuickstart {
    /**
     *
     * @type {string}
     * @memberof V1FavoriteQuickstart
     */
    'accountId'?: string;
    /**
     *
     * @type {string}
     * @memberof V1FavoriteQuickstart
     */
    'createdAt'?: string;
    /**
     *
     * @type {any}
     * @memberof V1FavoriteQuickstart
     */
    'deletedAt'?: any;
    /**
     *
     * @type {boolean}
     * @memberof V1FavoriteQuickstart
     */
    'favorite'?: boolean;
    /**
     *
     * @type {number}
     * @memberof V1FavoriteQuickstart
     */
    'id'?: number;
    /**
     *
     * @type {string}
     * @memberof V1FavoriteQuickstart
     */
    'quickstartName'?: string;
    /**
     *
     * @type {string}
     * @memberof V1FavoriteQuickstart
     */
    'updatedAt'?: string;
}
/**
 *
 * @export
 * @interface V1HelpTopic
 */
export interface V1HelpTopic {
    /**
     *
     * @type {object}
     * @memberof V1HelpTopic
     */
    'content'?: object;
    /**
     *
     * @type {string}
     * @memberof V1HelpTopic
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof V1HelpTopic
     */
    'deletedAt'?: string | null;
    /**
     *
     * @type {string}
     * @memberof V1HelpTopic
     */
    'groupName'?: string;
    /**
     *
     * @type {number}
     * @memberof V1HelpTopic
     */
    'id'?: number;
    /**
     *
     * @type {string}
     * @memberof V1HelpTopic
     */
    'name'?: string;
    /**
     *
     * @type {Array<V1HelpTopicTagsInner>}
     * @memberof V1HelpTopic
     */
    'tags'?: Array<V1HelpTopicTagsInner>;
    /**
     *
     * @type {string}
     * @memberof V1HelpTopic
     */
    'updatedAt'?: string;
}
/**
 *
 * @export
 * @interface V1HelpTopicTagsInner
 */
export interface V1HelpTopicTagsInner {
    /**
     *
     * @type {string}
     * @memberof V1HelpTopicTagsInner
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof V1HelpTopicTagsInner
     */
    'deletedAt'?: string | null;
    /**
     *
     * @type {number}
     * @memberof V1HelpTopicTagsInner
     */
    'id'?: number;
    /**
     *
     * @type {string}
     * @memberof V1HelpTopicTagsInner
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof V1HelpTopicTagsInner
     */
    'updatedAt'?: string;
    /**
     *
     * @type {string}
     * @memberof V1HelpTopicTagsInner
     */
    'value'?: string;
}
/**
 *
 * @export
 * @interface V1Quickstart
 */
export interface V1Quickstart {
    /**
     *
     * @type {object}
     * @memberof V1Quickstart
     */
    'content'?: object;
    /**
     *
     * @type {string}
     * @memberof V1Quickstart
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof V1Quickstart
     */
    'deletedAt'?: string | null;
    /**
     *
     * @type {Array<V1QuickstartFavoriteQuickstartInner>}
     * @memberof V1Quickstart
     */
    'favoriteQuickstart'?: Array<V1QuickstartFavoriteQuickstartInner>;
    /**
     *
     * @type {number}
     * @memberof V1Quickstart
     */
    'id'?: number;
    /**
     *
     * @type {string}
     * @memberof V1Quickstart
     */
    'name'?: string;
    /**
     *
     * @type {Array<V1HelpTopicTagsInner>}
     * @memberof V1Quickstart
     */
    'tags'?: Array<V1HelpTopicTagsInner>;
    /**
     *
     * @type {string}
     * @memberof V1Quickstart
     */
    'updatedAt'?: string;
}
/**
 *
 * @export
 * @interface V1QuickstartFavoriteQuickstartInner
 */
export interface V1QuickstartFavoriteQuickstartInner {
    /**
     *
     * @type {string}
     * @memberof V1QuickstartFavoriteQuickstartInner
     */
    'accountId'?: string;
    /**
     *
     * @type {string}
     * @memberof V1QuickstartFavoriteQuickstartInner
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof V1QuickstartFavoriteQuickstartInner
     */
    'deletedAt'?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof V1QuickstartFavoriteQuickstartInner
     */
    'favorite'?: boolean;
    /**
     *
     * @type {number}
     * @memberof V1QuickstartFavoriteQuickstartInner
     */
    'id'?: number;
    /**
     *
     * @type {string}
     * @memberof V1QuickstartFavoriteQuickstartInner
     */
    'quickstartName'?: string;
    /**
     *
     * @type {string}
     * @memberof V1QuickstartFavoriteQuickstartInner
     */
    'updatedAt'?: string;
}
/**
 *
 * @export
 * @interface V1QuickstartProgress
 */
export interface V1QuickstartProgress {
    /**
     *
     * @type {number}
     * @memberof V1QuickstartProgress
     */
    'accountId'?: number;
    /**
     *
     * @type {string}
     * @memberof V1QuickstartProgress
     */
    'progress'?: string;
    /**
     *
     * @type {string}
     * @memberof V1QuickstartProgress
     */
    'quickstartName'?: string;
}
