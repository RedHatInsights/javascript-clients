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


export type ApiSystemProfileValidateSchemaParams = {
  /**
  * The branch of the inventory-schemas repo to use
  * @type { string }
  * @memberof ApiSystemProfileValidateSchemaApi
  */
  repoBranch: string,
  /**
  * The fork of the inventory-schemas repo to use
  * @type { string }
  * @memberof ApiSystemProfileValidateSchemaApi
  */
  repoFork?: string,
  /**
  * How many days worth of data to validate
  * @type { number }
  * @memberof ApiSystemProfileValidateSchemaApi
  */
  days?: number,
  /**
  * Stops polling when this number of messages has been collected
  * @type { number }
  * @memberof ApiSystemProfileValidateSchemaApi
  */
  maxMessages?: number,
  options?: AxiosRequestConfig
}

export type ApiSystemProfileValidateSchemaReturnType = void;

const isApiSystemProfileValidateSchemaObjectParams = (params: [ApiSystemProfileValidateSchemaParams] | unknown[]): params is [ApiSystemProfileValidateSchemaParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'repoBranch')
  }
  return false
}
/**
* Validates System Profile data from recent Kafka messages against a given spec, and compares it with the current one. Only HBI Admins can access this endpoint.
* @summary validate system profile schema
* @param {ApiSystemProfileValidateSchemaParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiSystemProfileValidateSchemaParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiSystemProfileValidateSchemaParams] | [string, string, number, number, AxiosRequestConfig])) => {
    const params = isApiSystemProfileValidateSchemaObjectParams(config) ? config[0] : ['repoBranch', 'repoFork', 'days', 'maxMessages', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiSystemProfileValidateSchemaParams;
    const { repoBranch, repoFork, days, maxMessages, options = {} } = params;
    const localVarPath = `/system_profile/validate_schema`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (repoFork !== undefined) {
        localVarQueryParameter['repo_fork'] = repoFork;
    }

    if (repoBranch !== undefined) {
        localVarQueryParameter['repo_branch'] = repoBranch;
    }

    if (days !== undefined) {
        localVarQueryParameter['days'] = days;
    }

    if (maxMessages !== undefined) {
        localVarQueryParameter['max_messages'] = maxMessages;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        auth:[
        {
        // authentication ApiKeyAuth required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };

    return sendRequest<ApiSystemProfileValidateSchemaReturnType>(Promise.resolve(args));
}

export default apiSystemProfileValidateSchemaParamCreator;
