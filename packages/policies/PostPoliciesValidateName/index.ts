// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Msg } from '../types';


export type PostPoliciesValidateNameParams = {
  /**
  *
  * @type { string }
  * @memberof PostPoliciesValidateNameApi
  */
  body: string,
  /**
  * UUID of the policy
  * @type { string }
  * @memberof PostPoliciesValidateNameApi
  */
  id?: string,
  options?: AxiosRequestConfig
}

export type PostPoliciesValidateNameReturnType = Msg;

const isPostPoliciesValidateNameObjectParams = (params: [PostPoliciesValidateNameParams] | unknown[]): params is [PostPoliciesValidateNameParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'body')
  }
  return false
}
/**
*
* @summary Validates the Policy.name and verifies if it is unique.
* @param {PostPoliciesValidateNameParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const postPoliciesValidateNameParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([PostPoliciesValidateNameParams] | [string, string, AxiosRequestConfig])) => {
    const params = isPostPoliciesValidateNameObjectParams(config) ? config[0] : ['body', 'id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as PostPoliciesValidateNameParams;
    const { body, id, options = {} } = params;
    const localVarPath = `/policies/validate-name`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (id !== undefined) {
        localVarQueryParameter['id'] = id;
    }



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: body,
    };

    return sendRequest<PostPoliciesValidateNameReturnType>(Promise.resolve(args));
}

export default postPoliciesValidateNameParamCreator;
