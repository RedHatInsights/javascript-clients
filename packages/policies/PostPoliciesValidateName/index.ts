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

const isPostPoliciesValidateNameObjectParams = (params: [PostPoliciesValidateNameParams] | unknown[]): params is [PostPoliciesValidateNameParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'body') && true
}
/**
*
* @summary Validates the Policy.name and verifies if it is unique.
* @param {PostPoliciesValidateNameParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const postPoliciesValidateNameParamCreator = async (...config: ([PostPoliciesValidateNameParams] | [string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
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

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: body,
    };
}

export default postPoliciesValidateNameParamCreator;
