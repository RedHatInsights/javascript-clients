// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PolicyExtended, PolicyIn } from '../types';


export type UpdatePolicyParams = {
  /**
  * ID of policy to update
  * @type { string }
  * @memberof UpdatePolicyApi
  */
  uuid: string, 
  /**
  * Policy to update
  * @type { PolicyIn }
  * @memberof UpdatePolicyApi
  */
  policyIn: PolicyIn, 
  options?: AxiosRequestConfig
}

const isUpdatePolicyObjectParams = (params: [UpdatePolicyParams] | unknown[]): params is [UpdatePolicyParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'uuid') && Object.prototype.hasOwnProperty.call(params, 'policyIn')
}
/**
* 
* @summary Update a policy in the tenant
* @param {UpdatePolicyParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const updatePolicyParamCreator = async (...config: ([UpdatePolicyParams] | [string, PolicyIn, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isUpdatePolicyObjectParams(config) ? config[0] : ['uuid', 'policyIn', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as UpdatePolicyParams;
    const { uuid, policyIn, options = {} } = params;
    const localVarPath = `/policies/{uuid}/`
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
        serializeData: policyIn,
        auth:[
        {
        // authentication basic_auth required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };
}

export default updatePolicyParamCreator;
