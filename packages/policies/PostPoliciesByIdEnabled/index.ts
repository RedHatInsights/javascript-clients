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


export type PostPoliciesByIdEnabledParams = {
  /**
  * ID of the Policy
  * @type { string }
  * @memberof PostPoliciesByIdEnabledApi
  */
  id: string,
  /**
  * Should the policy be enabled (true) or disabled (false, default)
  * @type { boolean }
  * @memberof PostPoliciesByIdEnabledApi
  */
  enabled?: boolean,
  options?: AxiosRequestConfig
}

export type PostPoliciesByIdEnabledReturnType = AxiosPromise<void>;

const isPostPoliciesByIdEnabledObjectParams = (params: [PostPoliciesByIdEnabledParams] | unknown[]): params is [PostPoliciesByIdEnabledParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id') && true
}
/**
*
* @summary Enable/disable a policy
* @param {PostPoliciesByIdEnabledParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const postPoliciesByIdEnabledParamCreator = async (...config: ([PostPoliciesByIdEnabledParams] | [string, boolean, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isPostPoliciesByIdEnabledObjectParams(config) ? config[0] : ['id', 'enabled', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as PostPoliciesByIdEnabledParams;
    const { id, enabled, options = {} } = params;
    const localVarPath = `/policies/{id}/enabled`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (enabled !== undefined) {
        localVarQueryParameter['enabled'] = enabled;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default postPoliciesByIdEnabledParamCreator;
