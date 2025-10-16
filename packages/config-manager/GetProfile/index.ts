// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Profile } from '../types';


export type GetProfileParams = {
  /**
  *
  * @type { string }
  * @memberof GetProfileApi
  */
  id: string,
  options?: AxiosRequestConfig
}

export type GetProfileReturnType = Profile;

const isGetProfileObjectParams = (params: [GetProfileParams] | unknown[]): params is [GetProfileParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
* Retrieve a specific profile identified by the \'id\' path parameter for the identified account. If the special value \"current\" is used for the \'id\' path parameter, the most recent profile is retrieved instead.
* @summary Get a specific profile
* @param {GetProfileParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getProfileParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([GetProfileParams] | [string, AxiosRequestConfig])) => {
    const params = isGetProfileObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetProfileParams;
    const { id, options = {} } = params;
    const localVarPath = `/profiles/{id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<GetProfileReturnType>(Promise.resolve(args));
}

export default getProfileParamCreator;
