// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { CrossAccountRequestDetail, Error403 } from '../types';


export type GetCrossAccountRequestParams = {
  /**
  * ID of cross account request to get
  * @type { string }
  * @memberof GetCrossAccountRequestApi
  */
  uuid: string,
  /**
  * Parameter for filtering resource by either a user\'s ID, or a client\'s org. The default value is target_org.
  * @type { GetCrossAccountRequestQueryByEnum }
  * @memberof GetCrossAccountRequestApi
  */
  queryBy?: GetCrossAccountRequestQueryByEnum,
  /**
  * Parameter for filtering resource by an account number. Value can be a comma-separated list of ids. To be used in tandem with ?query_by=user_id to further filter a user\'s requests by account number.
  * @type { string }
  * @memberof GetCrossAccountRequestApi
  */
  account?: string,
  /**
  * Parameter for filtering resource which have been approved.
  * @type { GetCrossAccountRequestApprovedOnlyEnum }
  * @memberof GetCrossAccountRequestApi
  */
  approvedOnly?: GetCrossAccountRequestApprovedOnlyEnum,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const GetCrossAccountRequestQueryByEnum = {
    UserId: 'user_id',
    TargetOrg: 'target_org'
} as const;
export type GetCrossAccountRequestQueryByEnum = typeof GetCrossAccountRequestQueryByEnum[keyof typeof GetCrossAccountRequestQueryByEnum];
/**
  * @export
  * @enum {string}
  */
export const GetCrossAccountRequestApprovedOnlyEnum = {
    True: 'true'
} as const;
export type GetCrossAccountRequestApprovedOnlyEnum = typeof GetCrossAccountRequestApprovedOnlyEnum[keyof typeof GetCrossAccountRequestApprovedOnlyEnum];

export type GetCrossAccountRequestReturnType = AxiosPromise<CrossAccountRequestDetail>;

const isGetCrossAccountRequestObjectParams = (params: [GetCrossAccountRequestParams] | unknown[]): params is [GetCrossAccountRequestParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'uuid')
  }
  return false
}
/**
*
* @summary Get a cross account request
* @param {GetCrossAccountRequestParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getCrossAccountRequestParamCreator = async (...config: ([GetCrossAccountRequestParams] | [string, GetCrossAccountRequestQueryByEnum, string, GetCrossAccountRequestApprovedOnlyEnum, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isGetCrossAccountRequestObjectParams(config) ? config[0] : ['uuid', 'queryBy', 'account', 'approvedOnly', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetCrossAccountRequestParams;
    const { uuid, queryBy, account, approvedOnly, options = {} } = params;
    const localVarPath = `/cross-account-requests/{uuid}/`
        .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (queryBy !== undefined) {
        localVarQueryParameter['query_by'] = queryBy;
    }

    if (account !== undefined) {
        localVarQueryParameter['account'] = account;
    }

    if (approvedOnly !== undefined) {
        localVarQueryParameter['approved_only'] = approvedOnly;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        auth:[
        {
        // authentication basic_auth required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };
}

export default getCrossAccountRequestParamCreator;
