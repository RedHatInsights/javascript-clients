// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { CreateCheckIn, HostOut } from '../types';


export type ApiHostHostCheckinParams = {
  /**
  * Data required to create a check-in record for a host.
  * @type { CreateCheckIn }
  * @memberof ApiHostHostCheckinApi
  */
  createCheckIn: CreateCheckIn,
  options?: AxiosRequestConfig
}

export type ApiHostHostCheckinReturnType = HostOut;

const isApiHostHostCheckinObjectParams = (params: [ApiHostHostCheckinParams] | unknown[]): params is [ApiHostHostCheckinParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'createCheckIn')
  }
  return false
}
/**
* Finds a host and updates its staleness timestamps. It uses the supplied canonical facts to determine which host to update. By default, the staleness timestamp is set to 1 hour from when the request is received; however, this can be overridden by supplying the interval. <br /><br /> Required permissions: inventory:hosts:write
* @summary Update staleness timestamps for a host matching the provided facts
* @param {ApiHostHostCheckinParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiHostHostCheckinParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiHostHostCheckinParams] | [CreateCheckIn, AxiosRequestConfig])) => {
    const params = isApiHostHostCheckinObjectParams(config) ? config[0] : ['createCheckIn', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiHostHostCheckinParams;
    const { createCheckIn, options = {} } = params;
    const localVarPath = `/hosts/checkin`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: createCheckIn,
        auth:[
        {
        // authentication ApiKeyAuth required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        },
        {
        // authentication BearerAuth required
        // bearer auth required
        authType: AuthTypeEnum.Bearer,
        }
        ]
    };

    return sendRequest<ApiHostHostCheckinReturnType>(Promise.resolve(args));
}

export default apiHostHostCheckinParamCreator;
