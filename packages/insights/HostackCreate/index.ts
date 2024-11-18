// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { HostAck, HostAckInput } from '../types';


export type HostackCreateParams = {
  /**
  *
  * @type { HostAckInput }
  * @memberof HostackCreateApi
  */
  hostAckInput: HostAckInput,
  options?: AxiosRequestConfig
}

const isHostackCreateObjectParams = (params: [HostackCreateParams] | unknown[]): params is [HostackCreateParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'hostAckInput')
}
/**
* Add an acknowledgement for a rule, by rule ID, system, and account.  Return the new hostack.  If there\'s already an acknowledgement of this rule by this account for a system, then return that.  This does not take an \'id\' number.
* @param {HostackCreateParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const hostackCreateParamCreator = async (...config: ([HostackCreateParams] | [HostAckInput, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isHostackCreateObjectParams(config) ? config[0] : ['hostAckInput', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as HostackCreateParams;
    const { hostAckInput, options = {} } = params;
    const localVarPath = `/api/insights/v1/hostack/`;
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
        serializeData: hostAckInput,
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

export default hostackCreateParamCreator;
