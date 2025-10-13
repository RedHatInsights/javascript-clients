// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { SystemType } from '../types';


export type SystemtypeRetrieveParams = {
  /**
  * A unique integer value identifying this system type.
  * @type { number }
  * @memberof SystemtypeRetrieveApi
  */
  id: number,
  options?: AxiosRequestConfig
}

export type SystemtypeRetrieveReturnType = AxiosPromise<SystemType>;

const isSystemtypeRetrieveObjectParams = (params: [SystemtypeRetrieveParams] | unknown[]): params is [SystemtypeRetrieveParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
* Retrieve details of a single system type
* @summary Retrieve a system type
* @param {SystemtypeRetrieveParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const systemtypeRetrieveParamCreator = async (...config: ([SystemtypeRetrieveParams] | [number, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isSystemtypeRetrieveObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as SystemtypeRetrieveParams;
    const { id, options = {} } = params;
    const localVarPath = `/api/insights/v1/systemtype/{id}/`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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

export default systemtypeRetrieveParamCreator;
