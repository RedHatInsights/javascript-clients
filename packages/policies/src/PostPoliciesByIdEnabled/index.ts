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

export type PostPoliciesByIdEnabledReturnType = void;

const isPostPoliciesByIdEnabledObjectParams = (params: [PostPoliciesByIdEnabledParams] | unknown[]): params is [PostPoliciesByIdEnabledParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
*
* @summary Enable/disable a policy
* @param {PostPoliciesByIdEnabledParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const postPoliciesByIdEnabledParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([PostPoliciesByIdEnabledParams] | [string, boolean, AxiosRequestConfig])) => {
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

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<PostPoliciesByIdEnabledReturnType>(Promise.resolve(args));
}

export default postPoliciesByIdEnabledParamCreator;
