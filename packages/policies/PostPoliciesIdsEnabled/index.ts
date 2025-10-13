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


export type PostPoliciesIdsEnabledParams = {
  /**
  *
  * @type { Array<string> }
  * @memberof PostPoliciesIdsEnabledApi
  */
  requestBody: Array<string>,
  /**
  *
  * @type { boolean }
  * @memberof PostPoliciesIdsEnabledApi
  */
  enabled?: boolean,
  options?: AxiosRequestConfig
}

export type PostPoliciesIdsEnabledReturnType = AxiosPromise<Array<string>>;

const isPostPoliciesIdsEnabledObjectParams = (params: [PostPoliciesIdsEnabledParams] | unknown[]): params is [PostPoliciesIdsEnabledParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true  && Object.prototype.hasOwnProperty.call(params[0], 'requestBody')
  }
  return false
}
/**
*
* @summary Enable/disable policies identified by list of uuid in body
* @param {PostPoliciesIdsEnabledParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const postPoliciesIdsEnabledParamCreator = async (...config: ([PostPoliciesIdsEnabledParams] | [Array<string>, boolean, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isPostPoliciesIdsEnabledObjectParams(config) ? config[0] : ['requestBody', 'enabled', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as PostPoliciesIdsEnabledParams;
    const { requestBody, enabled, options = {} } = params;
    const localVarPath = `/policies/ids/enabled`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (enabled !== undefined) {
        localVarQueryParameter['enabled'] = enabled;
    }



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: requestBody,
    };
}

export default postPoliciesIdsEnabledParamCreator;
