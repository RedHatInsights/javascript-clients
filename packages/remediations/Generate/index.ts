// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PlaybookDefinition, RequestError } from '../types';


export type GenerateParams = {
  /**
  *
  * @type { PlaybookDefinition }
  * @memberof GenerateApi
  */
  playbookDefinition: PlaybookDefinition,
  options?: AxiosRequestConfig
}

export type GenerateReturnType = AxiosPromise<string>;

const isGenerateObjectParams = (params: [GenerateParams] | unknown[]): params is [GenerateParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'playbookDefinition')
}
/**
* Generates an Ansible Playbook based on input parameters
* @summary Generate an Ansible Playbook
* @param {GenerateParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const generateParamCreator = async (...config: ([GenerateParams] | [PlaybookDefinition, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isGenerateObjectParams(config) ? config[0] : ['playbookDefinition', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GenerateParams;
    const { playbookDefinition, options = {} } = params;
    const localVarPath = `/playbook`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: playbookDefinition,
    };
}

export default generateParamCreator;
