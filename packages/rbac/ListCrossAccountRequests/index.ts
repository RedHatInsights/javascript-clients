// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { CrossAccountRequestPagination, Error403 } from '../types';


export type ListCrossAccountRequestsParams = {
  /**
  * Parameter for selecting the amount of data returned.
  * @type { number }
  * @memberof ListCrossAccountRequestsApi
  */
  limit?: number,
  /**
  * Parameter for selecting the offset of data.
  * @type { number }
  * @memberof ListCrossAccountRequestsApi
  */
  offset?: number,
  /**
  * Parameter for filtering resource by either a user\'s ID, or a client\'s org. The default value is target_org.
  * @type { ListCrossAccountRequestsQueryByEnum }
  * @memberof ListCrossAccountRequestsApi
  */
  queryBy?: ListCrossAccountRequestsQueryByEnum,
  /**
  * Parameter for filtering resource by an account number. Value can be a comma-separated list of ids. To be used in tandem with ?query_by=user_id to further filter a user\'s requests by account number.
  * @type { string }
  * @memberof ListCrossAccountRequestsApi
  */
  account?: string,
  /**
  * Parameter for filtering resource by an org id. Value can be a comma-separated list of ids. To be used in tandem with ?query_by=user_id to further filter a user\'s requests by org id.
  * @type { string }
  * @memberof ListCrossAccountRequestsApi
  */
  orgId?: string,
  /**
  * Parameter for filtering resource which have been approved.
  * @type { ListCrossAccountRequestsApprovedOnlyEnum }
  * @memberof ListCrossAccountRequestsApi
  */
  approvedOnly?: ListCrossAccountRequestsApprovedOnlyEnum,
  /**
  * Parameter for filtering resource based on status.
  * @type { ListCrossAccountRequestsStatusEnum }
  * @memberof ListCrossAccountRequestsApi
  */
  status?: ListCrossAccountRequestsStatusEnum,
  /**
  * Parameter for ordering by field. For inverse ordering, use \'-\', e.g. ?order_by=-start_date.
  * @type { ListCrossAccountRequestsOrderByEnum }
  * @memberof ListCrossAccountRequestsApi
  */
  orderBy?: ListCrossAccountRequestsOrderByEnum,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const ListCrossAccountRequestsQueryByEnum = {
    UserId: 'user_id',
    TargetOrg: 'target_org'
} as const;
export type ListCrossAccountRequestsQueryByEnum = typeof ListCrossAccountRequestsQueryByEnum[keyof typeof ListCrossAccountRequestsQueryByEnum];
/**
  * @export
  * @enum {string}
  */
export const ListCrossAccountRequestsApprovedOnlyEnum = {
    True: 'true'
} as const;
export type ListCrossAccountRequestsApprovedOnlyEnum = typeof ListCrossAccountRequestsApprovedOnlyEnum[keyof typeof ListCrossAccountRequestsApprovedOnlyEnum];
/**
  * @export
  * @enum {string}
  */
export const ListCrossAccountRequestsStatusEnum = {
    Pending: 'pending',
    Approved: 'approved',
    Denied: 'denied',
    Cancelled: 'cancelled',
    Expired: 'expired'
} as const;
export type ListCrossAccountRequestsStatusEnum = typeof ListCrossAccountRequestsStatusEnum[keyof typeof ListCrossAccountRequestsStatusEnum];
/**
  * @export
  * @enum {string}
  */
export const ListCrossAccountRequestsOrderByEnum = {
    RequestId: 'request_id',
    StartDate: 'start_date',
    EndDate: 'end_date',
    Created: 'created',
    Modified: 'modified',
    Status: 'status'
} as const;
export type ListCrossAccountRequestsOrderByEnum = typeof ListCrossAccountRequestsOrderByEnum[keyof typeof ListCrossAccountRequestsOrderByEnum];

export type ListCrossAccountRequestsReturnType = AxiosPromise<CrossAccountRequestPagination>;

const isListCrossAccountRequestsObjectParams = (params: [ListCrossAccountRequestsParams] | unknown[]): params is [ListCrossAccountRequestsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* By default, responses are sorted in ascending order by created_at
* @summary List the cross account requests for a user or account
* @param {ListCrossAccountRequestsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listCrossAccountRequestsParamCreator = async (...config: ([ListCrossAccountRequestsParams] | [number, number, ListCrossAccountRequestsQueryByEnum, string, string, ListCrossAccountRequestsApprovedOnlyEnum, ListCrossAccountRequestsStatusEnum, ListCrossAccountRequestsOrderByEnum, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListCrossAccountRequestsObjectParams(config) ? config[0] : ['limit', 'offset', 'queryBy', 'account', 'orgId', 'approvedOnly', 'status', 'orderBy', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListCrossAccountRequestsParams;
    const { limit, offset, queryBy, account, orgId, approvedOnly, status, orderBy, options = {} } = params;
    const localVarPath = `/cross-account-requests/`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }

    if (queryBy !== undefined) {
        localVarQueryParameter['query_by'] = queryBy;
    }

    if (account !== undefined) {
        localVarQueryParameter['account'] = account;
    }

    if (orgId !== undefined) {
        localVarQueryParameter['org_id'] = orgId;
    }

    if (approvedOnly !== undefined) {
        localVarQueryParameter['approved_only'] = approvedOnly;
    }

    if (status !== undefined) {
        localVarQueryParameter['status'] = status;
    }

    if (orderBy !== undefined) {
        localVarQueryParameter['order_by'] = orderBy;
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

export default listCrossAccountRequestsParamCreator;
