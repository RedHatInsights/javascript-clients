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


export type KcsRetrieveParams = {
  /**
  *
  * @type { string }
  * @memberof KcsRetrieveApi
  */
  nodeId: string,
  options?: AxiosRequestConfig
}

export type KcsRetrieveReturnType = AxiosPromise<Array<string>>;

const isKcsRetrieveObjectParams = (params: [KcsRetrieveParams] | unknown[]): params is [KcsRetrieveParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'nodeId')
}
/**
* Gets active rule(s) for a particular KCS solution (node_id)  Returns a list of C.R.C rule url(s) for that KCS solution
* @param {KcsRetrieveParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const kcsRetrieveParamCreator = async (...config: ([KcsRetrieveParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isKcsRetrieveObjectParams(config) ? config[0] : ['nodeId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as KcsRetrieveParams;
    const { nodeId, options = {} } = params;
    const localVarPath = `/api/insights/v1/kcs/{node_id}/`
        .replace(`{${"node_id"}}`, encodeURIComponent(String(nodeId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default kcsRetrieveParamCreator;
