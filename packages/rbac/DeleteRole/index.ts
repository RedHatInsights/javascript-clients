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


export type DeleteRoleParams = {
  /**
  * ID of role to delete
  * @type { string }
  * @memberof DeleteRoleApi
  */
  uuid: string,
  options?: AxiosRequestConfig
}

const isDeleteRoleObjectParams = (params: [DeleteRoleParams] | unknown[]): params is [DeleteRoleParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'uuid')
}
/**
*
* @summary Delete a role in the tenant
* @param {DeleteRoleParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const deleteRoleParamCreator = async (...config: ([DeleteRoleParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isDeleteRoleObjectParams(config) ? config[0] : ['uuid', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DeleteRoleParams;
    const { uuid, options = {} } = params;
    const localVarPath = `/roles/{uuid}/`
        .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'DELETE' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



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

export default deleteRoleParamCreator;
