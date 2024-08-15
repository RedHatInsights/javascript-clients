/* tslint:disable */
/* eslint-disable */
/**
 * Role Based Access Control for Kessel Project
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

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

/**
 * WorkspacesCreateApi - axios parameter creator
 * @export
 */
export const WorkspacesCreateApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create workspace in tenant
         * @summary Create workspace in tenant
         * @param {WorkspacesBasicWorkspace} workspacesBasicWorkspace
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        workspacesCreate: async (workspacesBasicWorkspace: WorkspacesBasicWorkspace, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'workspacesBasicWorkspace' is not null or undefined
            assertParamExists('workspacesCreate', 'workspacesBasicWorkspace', workspacesBasicWorkspace)
            const localVarPath = `/workspaces`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(workspacesBasicWorkspace, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WorkspacesCreateApi - functional programming interface
 * @export
 */
export const WorkspacesCreateApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WorkspacesCreateApiAxiosParamCreator(configuration)
    return {
        /**
         * Create workspace in tenant
         * @summary Create workspace in tenant
         * @param {WorkspacesBasicWorkspace} workspacesBasicWorkspace
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async workspacesCreate(workspacesBasicWorkspace: WorkspacesBasicWorkspace, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkspacesCreateWorkspaceResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.workspacesCreate(workspacesBasicWorkspace, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WorkspacesCreateApi - factory interface
 * @export
 */
export const WorkspacesCreateApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WorkspacesCreateApiFp(configuration)
    return {
        /**
         * Create workspace in tenant
         * @summary Create workspace in tenant
         * @param {WorkspacesBasicWorkspace} workspacesBasicWorkspace
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        workspacesCreate(workspacesBasicWorkspace: WorkspacesBasicWorkspace, options?: any): AxiosPromise<WorkspacesCreateWorkspaceResponse> {
            return localVarFp.workspacesCreate(workspacesBasicWorkspace, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WorkspacesCreateApi - object-oriented interface
 * @export
 * @class WorkspacesCreateApi
 * @extends {BaseAPI}
 */
export class WorkspacesCreateApi extends BaseAPI {
    /**
     * Create workspace in tenant
     * @summary Create workspace in tenant
     * @param {WorkspacesBasicWorkspace} workspacesBasicWorkspace
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkspacesCreateApi
     */
    public workspacesCreate(workspacesBasicWorkspace: WorkspacesBasicWorkspace, options?: AxiosRequestConfig) {
        return WorkspacesCreateApiFp(this.configuration).workspacesCreate(workspacesBasicWorkspace, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * WorkspacesDeleteApi - axios parameter creator
 * @export
 */
export const WorkspacesDeleteApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a workspace
         * @summary Delete the workspace
         * @param {string} uuid Unique identification
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        workspacesDelete: async (uuid: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            assertParamExists('workspacesDelete', 'uuid', uuid)
            const localVarPath = `/workspaces/{uuid}`
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
 * WorkspacesDeleteApi - functional programming interface
 * @export
 */
export const WorkspacesDeleteApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WorkspacesDeleteApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete a workspace
         * @summary Delete the workspace
         * @param {string} uuid Unique identification
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async workspacesDelete(uuid: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.workspacesDelete(uuid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WorkspacesDeleteApi - factory interface
 * @export
 */
export const WorkspacesDeleteApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WorkspacesDeleteApiFp(configuration)
    return {
        /**
         * Delete a workspace
         * @summary Delete the workspace
         * @param {string} uuid Unique identification
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        workspacesDelete(uuid: string, options?: any): AxiosPromise<void> {
            return localVarFp.workspacesDelete(uuid, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WorkspacesDeleteApi - object-oriented interface
 * @export
 * @class WorkspacesDeleteApi
 * @extends {BaseAPI}
 */
export class WorkspacesDeleteApi extends BaseAPI {
    /**
     * Delete a workspace
     * @summary Delete the workspace
     * @param {string} uuid Unique identification
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkspacesDeleteApi
     */
    public workspacesDelete(uuid: string, options?: AxiosRequestConfig) {
        return WorkspacesDeleteApiFp(this.configuration).workspacesDelete(uuid, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * WorkspacesPatchApi - axios parameter creator
 * @export
 */
export const WorkspacesPatchApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @param {string} uuid Unique identification
         * @param {WorkspacesPatchWorkspaceRequest} workspacesPatchWorkspaceRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        workspacesPatch: async (uuid: string, workspacesPatchWorkspaceRequest: WorkspacesPatchWorkspaceRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            assertParamExists('workspacesPatch', 'uuid', uuid)
            // verify required parameter 'workspacesPatchWorkspaceRequest' is not null or undefined
            assertParamExists('workspacesPatch', 'workspacesPatchWorkspaceRequest', workspacesPatchWorkspaceRequest)
            const localVarPath = `/workspaces/{uuid}`
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;



            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(workspacesPatchWorkspaceRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WorkspacesPatchApi - functional programming interface
 * @export
 */
export const WorkspacesPatchApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WorkspacesPatchApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @param {string} uuid Unique identification
         * @param {WorkspacesPatchWorkspaceRequest} workspacesPatchWorkspaceRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async workspacesPatch(uuid: string, workspacesPatchWorkspaceRequest: WorkspacesPatchWorkspaceRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkspacesPatchWorkspaceResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.workspacesPatch(uuid, workspacesPatchWorkspaceRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WorkspacesPatchApi - factory interface
 * @export
 */
export const WorkspacesPatchApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WorkspacesPatchApiFp(configuration)
    return {
        /**
         *
         * @param {string} uuid Unique identification
         * @param {WorkspacesPatchWorkspaceRequest} workspacesPatchWorkspaceRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        workspacesPatch(uuid: string, workspacesPatchWorkspaceRequest: WorkspacesPatchWorkspaceRequest, options?: any): AxiosPromise<WorkspacesPatchWorkspaceResponse> {
            return localVarFp.workspacesPatch(uuid, workspacesPatchWorkspaceRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WorkspacesPatchApi - object-oriented interface
 * @export
 * @class WorkspacesPatchApi
 * @extends {BaseAPI}
 */
export class WorkspacesPatchApi extends BaseAPI {
    /**
     *
     * @param {string} uuid Unique identification
     * @param {WorkspacesPatchWorkspaceRequest} workspacesPatchWorkspaceRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkspacesPatchApi
     */
    public workspacesPatch(uuid: string, workspacesPatchWorkspaceRequest: WorkspacesPatchWorkspaceRequest, options?: AxiosRequestConfig) {
        return WorkspacesPatchApiFp(this.configuration).workspacesPatch(uuid, workspacesPatchWorkspaceRequest, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * WorkspacesReadApi - axios parameter creator
 * @export
 */
export const WorkspacesReadApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get a workspace in tenant
         * @summary Get a workspace in tenant
         * @param {string} uuid Unique identification
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        workspacesRead: async (uuid: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            assertParamExists('workspacesRead', 'uuid', uuid)
            const localVarPath = `/workspaces/{uuid}`
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
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
 * WorkspacesReadApi - functional programming interface
 * @export
 */
export const WorkspacesReadApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WorkspacesReadApiAxiosParamCreator(configuration)
    return {
        /**
         * Get a workspace in tenant
         * @summary Get a workspace in tenant
         * @param {string} uuid Unique identification
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async workspacesRead(uuid: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkspacesReadWorkspaceResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.workspacesRead(uuid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WorkspacesReadApi - factory interface
 * @export
 */
export const WorkspacesReadApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WorkspacesReadApiFp(configuration)
    return {
        /**
         * Get a workspace in tenant
         * @summary Get a workspace in tenant
         * @param {string} uuid Unique identification
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        workspacesRead(uuid: string, options?: any): AxiosPromise<WorkspacesReadWorkspaceResponse> {
            return localVarFp.workspacesRead(uuid, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WorkspacesReadApi - object-oriented interface
 * @export
 * @class WorkspacesReadApi
 * @extends {BaseAPI}
 */
export class WorkspacesReadApi extends BaseAPI {
    /**
     * Get a workspace in tenant
     * @summary Get a workspace in tenant
     * @param {string} uuid Unique identification
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkspacesReadApi
     */
    public workspacesRead(uuid: string, options?: AxiosRequestConfig) {
        return WorkspacesReadApiFp(this.configuration).workspacesRead(uuid, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * WorkspacesUpdateApi - axios parameter creator
 * @export
 */
export const WorkspacesUpdateApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Edit a workspace
         * @summary Edit the workspace name or description
         * @param {string} uuid Unique identification
         * @param {WorkspacesUpdateWorkspaceRequest} workspacesUpdateWorkspaceRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        workspacesUpdate: async (uuid: string, workspacesUpdateWorkspaceRequest: WorkspacesUpdateWorkspaceRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            assertParamExists('workspacesUpdate', 'uuid', uuid)
            // verify required parameter 'workspacesUpdateWorkspaceRequest' is not null or undefined
            assertParamExists('workspacesUpdate', 'workspacesUpdateWorkspaceRequest', workspacesUpdateWorkspaceRequest)
            const localVarPath = `/workspaces/{uuid}`
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;



            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(workspacesUpdateWorkspaceRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WorkspacesUpdateApi - functional programming interface
 * @export
 */
export const WorkspacesUpdateApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WorkspacesUpdateApiAxiosParamCreator(configuration)
    return {
        /**
         * Edit a workspace
         * @summary Edit the workspace name or description
         * @param {string} uuid Unique identification
         * @param {WorkspacesUpdateWorkspaceRequest} workspacesUpdateWorkspaceRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async workspacesUpdate(uuid: string, workspacesUpdateWorkspaceRequest: WorkspacesUpdateWorkspaceRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkspacesUpdateWorkspaceResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.workspacesUpdate(uuid, workspacesUpdateWorkspaceRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WorkspacesUpdateApi - factory interface
 * @export
 */
export const WorkspacesUpdateApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WorkspacesUpdateApiFp(configuration)
    return {
        /**
         * Edit a workspace
         * @summary Edit the workspace name or description
         * @param {string} uuid Unique identification
         * @param {WorkspacesUpdateWorkspaceRequest} workspacesUpdateWorkspaceRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        workspacesUpdate(uuid: string, workspacesUpdateWorkspaceRequest: WorkspacesUpdateWorkspaceRequest, options?: any): AxiosPromise<WorkspacesUpdateWorkspaceResponse> {
            return localVarFp.workspacesUpdate(uuid, workspacesUpdateWorkspaceRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WorkspacesUpdateApi - object-oriented interface
 * @export
 * @class WorkspacesUpdateApi
 * @extends {BaseAPI}
 */
export class WorkspacesUpdateApi extends BaseAPI {
    /**
     * Edit a workspace
     * @summary Edit the workspace name or description
     * @param {string} uuid Unique identification
     * @param {WorkspacesUpdateWorkspaceRequest} workspacesUpdateWorkspaceRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkspacesUpdateApi
     */
    public workspacesUpdate(uuid: string, workspacesUpdateWorkspaceRequest: WorkspacesUpdateWorkspaceRequest, options?: AxiosRequestConfig) {
        return WorkspacesUpdateApiFp(this.configuration).workspacesUpdate(uuid, workspacesUpdateWorkspaceRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


