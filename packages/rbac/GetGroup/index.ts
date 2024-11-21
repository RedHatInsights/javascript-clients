// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Error403, GroupWithPrincipalsAndRoles } from '../types';


export type GetGroupParams = {
  /**
  * ID of group to get
  * @type { string }
  * @memberof GetGroupApi
  */
  uuid: string,
  options?: AxiosRequestConfig
}

export type GetGroupReturnType = AxiosPromise<GroupWithPrincipalsAndRoles>;

const isGetGroupObjectParams = (params: [GetGroupParams] | unknown[]): params is [GetGroupParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'uuid')
}
/**
*
* @summary Get a group in the tenant
* @param {GetGroupParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getGroupParamCreator = async (...config: ([GetGroupParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isGetGroupObjectParams(config) ? config[0] : ['uuid', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetGroupParams;
    const { uuid, options = {} } = params;
    const localVarPath = `/groups/{uuid}/`
        .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
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

export default getGroupParamCreator;
