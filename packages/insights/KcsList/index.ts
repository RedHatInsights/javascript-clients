// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Kcs } from '../types';


export type KcsListParams = {
  /**
  * Display the rule urls for the given list of comma separated KCS solution node_ids
  * @type { Array<string> }
  * @memberof KcsListApi
  */
  nodeIds?: Array<string>,
  options?: AxiosRequestConfig
}

const isKcsListObjectParams = (params: [KcsListParams] | unknown[]): params is [KcsListParams] => {
  return params.length === 1 && true
}
/**
* Looks for all active rules with KCS solutions  Returns a list of dicts of the C.R.C rule URL and its KCS solution number
* @param {KcsListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const kcsListParamCreator = async (...config: ([KcsListParams] | [Array<string>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isKcsListObjectParams(config) ? config[0] : ['nodeIds', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as KcsListParams;
    const { nodeIds, options = {} } = params;
    const localVarPath = `/api/insights/v1/kcs/`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (nodeIds) {
        localVarQueryParameter['node_ids'] = nodeIds;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default kcsListParamCreator;
