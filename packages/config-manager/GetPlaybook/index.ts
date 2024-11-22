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


export type GetPlaybookParams = {
  /**
  *
  * @type { string }
  * @memberof GetPlaybookApi
  */
  profileId: string,
  options?: AxiosRequestConfig
}

export type GetPlaybookReturnType = AxiosPromise<object>;

const isGetPlaybookObjectParams = (params: [GetPlaybookParams] | unknown[]): params is [GetPlaybookParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'profileId')
}
/**
* Constructs and returns a Ansible playbook suitable to configure a host for the requested profile.
* @summary Retrieve an Ansible playbook for the requested profile
* @param {GetPlaybookParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getPlaybookParamCreator = async (...config: ([GetPlaybookParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isGetPlaybookObjectParams(config) ? config[0] : ['profileId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetPlaybookParams;
    const { profileId, options = {} } = params;
    const localVarPath = `/playbooks`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (profileId !== undefined) {
        localVarQueryParameter['profile_id'] = profileId;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default getPlaybookParamCreator;
