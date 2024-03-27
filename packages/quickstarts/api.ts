/* tslint:disable */
/* eslint-disable */
/**
 * quickstarts
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

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
     * @type {V1HelpTopicDeletedAt}
     * @memberof V1HelpTopic
     */
    'deletedAt'?: V1HelpTopicDeletedAt;
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
 * @type V1HelpTopicDeletedAt
 * @export
 */
export type V1HelpTopicDeletedAt = Null | string;

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
     * @type {V1HelpTopicDeletedAt}
     * @memberof V1HelpTopicTagsInner
     */
    'deletedAt'?: V1HelpTopicDeletedAt;
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
     * @type {V1HelpTopicDeletedAt}
     * @memberof V1Quickstart
     */
    'deletedAt'?: V1HelpTopicDeletedAt;
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
     * @type {V1HelpTopicDeletedAt}
     * @memberof V1QuickstartFavoriteQuickstartInner
     */
    'deletedAt'?: V1HelpTopicDeletedAt;
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

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Returns list of all favorites
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        favoritesGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/favorites`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Add a favorite
         * @param {V1FavoriteQuickstart} [v1FavoriteQuickstart]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        favoritesPost: async (v1FavoriteQuickstart?: V1FavoriteQuickstart, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/favorites`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;



            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(v1FavoriteQuickstart, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Returns list of all help topics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        helptopicsGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/helptopics`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Return a help topics set by topic name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        helptopicsNameGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/helptopics/{name}`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Returns list of all quickstarts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        quickstartsGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/quickstarts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Return a quickstarts by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        quickstartsIdGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/quickstarts/{id}`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Returns list of all favorites
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async favoritesGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FavoritesGet200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.favoritesGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Add a favorite
         * @param {V1FavoriteQuickstart} [v1FavoriteQuickstart]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async favoritesPost(v1FavoriteQuickstart?: V1FavoriteQuickstart, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<V1FavoriteQuickstart>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.favoritesPost(v1FavoriteQuickstart, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Returns list of all help topics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async helptopicsGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HelptopicsGet200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.helptopicsGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Return a help topics set by topic name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async helptopicsNameGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HelptopicsNameGet200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.helptopicsNameGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Returns list of all quickstarts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async quickstartsGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QuickstartsGet200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.quickstartsGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Return a quickstarts by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async quickstartsIdGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<V1Quickstart>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.quickstartsIdGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         *
         * @summary Returns list of all favorites
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        favoritesGet(options?: any): AxiosPromise<FavoritesGet200Response> {
            return localVarFp.favoritesGet(options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Add a favorite
         * @param {V1FavoriteQuickstart} [v1FavoriteQuickstart]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        favoritesPost(v1FavoriteQuickstart?: V1FavoriteQuickstart, options?: any): AxiosPromise<V1FavoriteQuickstart> {
            return localVarFp.favoritesPost(v1FavoriteQuickstart, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Returns list of all help topics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        helptopicsGet(options?: any): AxiosPromise<HelptopicsGet200Response> {
            return localVarFp.helptopicsGet(options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Return a help topics set by topic name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        helptopicsNameGet(options?: any): AxiosPromise<HelptopicsNameGet200Response> {
            return localVarFp.helptopicsNameGet(options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Returns list of all quickstarts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        quickstartsGet(options?: any): AxiosPromise<QuickstartsGet200Response> {
            return localVarFp.quickstartsGet(options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Return a quickstarts by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        quickstartsIdGet(options?: any): AxiosPromise<V1Quickstart> {
            return localVarFp.quickstartsIdGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     *
     * @summary Returns list of all favorites
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public favoritesGet(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).favoritesGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Add a favorite
     * @param {V1FavoriteQuickstart} [v1FavoriteQuickstart]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public favoritesPost(v1FavoriteQuickstart?: V1FavoriteQuickstart, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).favoritesPost(v1FavoriteQuickstart, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Returns list of all help topics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public helptopicsGet(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).helptopicsGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Return a help topics set by topic name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public helptopicsNameGet(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).helptopicsNameGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Returns list of all quickstarts
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public quickstartsGet(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).quickstartsGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Return a quickstarts by ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public quickstartsIdGet(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).quickstartsIdGet(options).then((request) => request(this.axios, this.basePath));
    }
}


