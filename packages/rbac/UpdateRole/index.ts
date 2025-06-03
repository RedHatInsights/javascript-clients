// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Error403 } from '../types';


export type UpdateRoleParams = {
  /**
  * ID of role to update
  * @type { any }
  * @memberof UpdateRoleApi
  */
  uuid: any,
  /**
  * Update to a role
  * @type { any }
  * @memberof UpdateRoleApi
  */
  body: any,
  options?: AxiosRequestConfig
}

export type UpdateRoleReturnType = AxiosPromise<void>;

const isUpdateRoleObjectParams = (params: [UpdateRoleParams] | unknown[]): params is [UpdateRoleParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'uuid') && Object.prototype.hasOwnProperty.call(params[0], 'body')
}
/**
*
* @summary Update a role in the tenant
* @param {UpdateRoleParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const updateRoleParamCreator = async (...config: ([UpdateRoleParams] | [any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isUpdateRoleObjectParams(config) ? config[0] : ['uuid', 'body', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as UpdateRoleParams;
    const { uuid, body, options = {} } = params;
    const localVarPath = `/roles/{uuid}/`
        .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PUT' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: body,
        auth:[
        {
        // authentication basic_auth required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };
}

export default updateRoleParamCreator;
