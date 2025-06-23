// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { GetRemediationSystemsFilterParameter, RemediationSystemList, RequestError } from '../types';


export type GetRemediationSystemsParams = {
  /**
  * Remediation identifier
  * @type { string }
  * @memberof GetRemediationSystemsApi
  */
  id: string,
  /**
  * Maximum number of results to return
  * @type { number }
  * @memberof GetRemediationSystemsApi
  */
  limit?: number,
  /**
  * Indicates the starting position of the query relative to the complete set of items that match the query
  * @type { number }
  * @memberof GetRemediationSystemsApi
  */
  offset?: number,
  /**
  * For filtering by various criteria.  Available filter fields: - id: system ids matching string (supports partial match) - hostname: hostname matching string (supports partial match) - display_name: display name matching string (supports partial match)
  * @type { GetRemediationSystemsFilterParameter }
  * @memberof GetRemediationSystemsApi
  */
  filter?: GetRemediationSystemsFilterParameter,
  /**
  * Sort order
  * @type { GetRemediationSystemsSortEnum }
  * @memberof GetRemediationSystemsApi
  */
  sort?: GetRemediationSystemsSortEnum,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const GetRemediationSystemsSortEnum = {
    Id: 'id',
    NotId: '-id',
    Hostname: 'hostname',
    NotHostname: '-hostname',
    DisplayName: 'display_name',
    NotDisplayName: '-display_name'
} as const;
export type GetRemediationSystemsSortEnum = typeof GetRemediationSystemsSortEnum[keyof typeof GetRemediationSystemsSortEnum];

export type GetRemediationSystemsReturnType = AxiosPromise<RemediationSystemList>;

const isGetRemediationSystemsObjectParams = (params: [GetRemediationSystemsParams] | unknown[]): params is [GetRemediationSystemsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id') && true && true && true && true
}
/**
* Get a paginated list of distinct systems from a given remediation plan, RBAC permission {remediations:remediation:read}
* @summary Get Remediation Plan Systems
* @param {GetRemediationSystemsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getRemediationSystemsParamCreator = async (...config: ([GetRemediationSystemsParams] | [string, number, number, GetRemediationSystemsFilterParameter, GetRemediationSystemsSortEnum, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isGetRemediationSystemsObjectParams(config) ? config[0] : ['id', 'limit', 'offset', 'filter', 'sort', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetRemediationSystemsParams;
    const { id, limit, offset, filter, sort, options = {} } = params;
    const localVarPath = `/remediations/{id}/systems`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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

    if (filter !== undefined) {
        localVarQueryParameter['filter'] = filter;
    }

    if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default getRemediationSystemsParamCreator;
