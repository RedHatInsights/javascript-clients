// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { AccessPagination, Error403 } from '../types';


export type GetRoleAccessParams = {
  /**
  * ID of the role
  * @type { string }
  * @memberof GetRoleAccessApi
  */
  uuid: string,
  /**
  * Parameter for selecting the amount of data returned.
  * @type { number }
  * @memberof GetRoleAccessApi
  */
  limit?: number,
  /**
  * Parameter for selecting the offset of data.
  * @type { number }
  * @memberof GetRoleAccessApi
  */
  offset?: number,
  options?: AxiosRequestConfig
}

export type GetRoleAccessReturnType = AxiosPromise<AccessPagination>;

const isGetRoleAccessObjectParams = (params: [GetRoleAccessParams] | unknown[]): params is [GetRoleAccessParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'uuid')
  }
  return false
}
/**
*
* @summary Get access for a role in the tenant
* @param {GetRoleAccessParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getRoleAccessParamCreator = async (...config: ([GetRoleAccessParams] | [string, number, number, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isGetRoleAccessObjectParams(config) ? config[0] : ['uuid', 'limit', 'offset', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetRoleAccessParams;
    const { uuid, limit, offset, options = {} } = params;
    const localVarPath = `/roles/{uuid}/access/`
        .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
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

export default getRoleAccessParamCreator;
