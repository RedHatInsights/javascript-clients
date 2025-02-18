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


export type HostackDestroyParams = {
  /**
  * A unique integer value identifying this host ack.
  * @type { number }
  * @memberof HostackDestroyApi
  */
  id: number,
  options?: AxiosRequestConfig
}

export type HostackDestroyReturnType = AxiosPromise<string>;

const isHostackDestroyObjectParams = (params: [HostackDestroyParams] | unknown[]): params is [HostackDestroyParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id')
}
/**
* Delete an acknowledgement for a rule, for a system, for an account, by its ID.  Takes the hostack ID (given in the hostack list) as an identifier.
* @param {HostackDestroyParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const hostackDestroyParamCreator = async (...config: ([HostackDestroyParams] | [number, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isHostackDestroyObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as HostackDestroyParams;
    const { id, options = {} } = params;
    const localVarPath = `/api/insights/v1/hostack/{id}/`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'DELETE' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        auth:[
        {
        // authentication x-rh-identity required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };
}

export default hostackDestroyParamCreator;
