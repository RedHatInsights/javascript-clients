// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { HostAck } from '../types';


export type HostackRetrieveParams = {
  /**
  * A unique integer value identifying this host ack.
  * @type { number }
  * @memberof HostackRetrieveApi
  */
  id: number,
  options?: AxiosRequestConfig
}

export type HostackRetrieveReturnType = HostAck;

const isHostackRetrieveObjectParams = (params: [HostackRetrieveParams] | unknown[]): params is [HostackRetrieveParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
*          Display who disabled a rule on a system, when, and their justification         for disabling it.  Host acks are selected by their ID number.
* @summary Display a specific acknowledgement (disabling) of a rule on a system
* @param {HostackRetrieveParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const hostackRetrieveParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([HostackRetrieveParams] | [number, AxiosRequestConfig])) => {
    const params = isHostackRetrieveObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as HostackRetrieveParams;
    const { id, options = {} } = params;
    const localVarPath = `/api/insights/v1/hostack/{id}/`
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
        auth:[
        {
        // authentication x-rh-identity required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };

    return sendRequest<HostackRetrieveReturnType>(Promise.resolve(args));
}

export default hostackRetrieveParamCreator;
