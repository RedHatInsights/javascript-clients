// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { System } from '../types';


export type SystemRetrieveParams = {
  /**
  * A UUID string identifying this inventory host.
  * @type { string }
  * @memberof SystemRetrieveApi
  */
  uuid: string,
  options?: AxiosRequestConfig
}

export type SystemRetrieveReturnType = AxiosPromise<System>;

const isSystemRetrieveObjectParams = (params: [SystemRetrieveParams] | unknown[]): params is [SystemRetrieveParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'uuid')
  }
  return false
}
/**
* Retrieve the reports for a single system by Insights Inventory UUID
* @summary Retrieve the reports for a single system
* @param {SystemRetrieveParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const systemRetrieveParamCreator = async (...config: ([SystemRetrieveParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isSystemRetrieveObjectParams(config) ? config[0] : ['uuid', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as SystemRetrieveParams;
    const { uuid, options = {} } = params;
    const localVarPath = `/api/insights/v1/system/{uuid}/`
        .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
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

export default systemRetrieveParamCreator;
