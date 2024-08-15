// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Error403, ErrorNotFound } from '../types';


export type DeletePrincipalFromGroupParams = {
  /**
  * ID of group to update
  * @type { string }
  * @memberof DeletePrincipalFromGroupApi
  */
  uuid: string,
  /**
  * A comma separated list of usernames for principals to remove from the group
  * @type { string }
  * @memberof DeletePrincipalFromGroupApi
  */
  usernames?: string,
  /**
  * A comma separated list of client IDs for service accounts to remove from the group
  * @type { string }
  * @memberof DeletePrincipalFromGroupApi
  */
  serviceAccounts?: string,
  options?: AxiosRequestConfig
}

const isDeletePrincipalFromGroupObjectParams = (params: [DeletePrincipalFromGroupParams] | unknown[]): params is [DeletePrincipalFromGroupParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'uuid') && true && true
}
/**
*
* @summary Remove a principal from a group in the tenant
* @param {DeletePrincipalFromGroupParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const deletePrincipalFromGroupParamCreator = async (...config: ([DeletePrincipalFromGroupParams] | [string, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isDeletePrincipalFromGroupObjectParams(config) ? config[0] : ['uuid', 'usernames', 'serviceAccounts', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DeletePrincipalFromGroupParams;
    const { uuid, usernames, serviceAccounts, options = {} } = params;
    const localVarPath = `/groups/{uuid}/principals/`
        .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'DELETE' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (usernames !== undefined) {
        localVarQueryParameter['usernames'] = usernames;
    }

    if (serviceAccounts !== undefined) {
        localVarQueryParameter['service-accounts'] = serviceAccounts;
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

export default deletePrincipalFromGroupParamCreator;
