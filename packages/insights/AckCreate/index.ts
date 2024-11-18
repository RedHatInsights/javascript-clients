// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Ack, AckInput } from '../types';


export type AckCreateParams = {
  /**
  *
  * @type { AckInput }
  * @memberof AckCreateApi
  */
  ackInput: AckInput,
  options?: AxiosRequestConfig
}

const isAckCreateObjectParams = (params: [AckCreateParams] | unknown[]): params is [AckCreateParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'ackInput')
}
/**
* Add an acknowledgement for a rule, by rule ID.  If there\'s already an acknowledgement of this rule by this accounts org_id, then return that.  Otherwise, a new ack is created.
* @param {AckCreateParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const ackCreateParamCreator = async (...config: ([AckCreateParams] | [AckInput, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isAckCreateObjectParams(config) ? config[0] : ['ackInput', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as AckCreateParams;
    const { ackInput, options = {} } = params;
    const localVarPath = `/api/insights/v1/ack/`;
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
        serializeData: ackInput,
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

export default ackCreateParamCreator;
