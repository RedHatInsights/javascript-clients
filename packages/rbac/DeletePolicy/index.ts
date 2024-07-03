// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type {  } from '../types';


export type DeletePolicyParams = {
  /**
  * ID of policy to delete
  * @type { string }
  * @memberof DeletePolicyApi
  */
  uuid: string,
  options?: AxiosRequestConfig
}

const isDeletePolicyObjectParams = (params: [DeletePolicyParams] | unknown[]): params is [DeletePolicyParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'uuid')
}
/**
*
* @summary Delete a policy in the tenant
* @param {DeletePolicyParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const deletePolicyParamCreator = async (...config: ([DeletePolicyParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isDeletePolicyObjectParams(config) ? config[0] : ['uuid', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DeletePolicyParams;
    const { uuid, options = {} } = params;
    const localVarPath = `/policies/{uuid}/`
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

export default deletePolicyParamCreator;
