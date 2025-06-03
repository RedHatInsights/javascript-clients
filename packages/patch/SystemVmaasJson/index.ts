// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersSystemVmaasJSONResponse, UtilsErrorResponse } from '../types';


export type SystemVmaasJsonParams = {
  /**
  * Inventory ID
  * @type { string }
  * @memberof SystemVmaasJsonApi
  */
  inventoryId: string,
  options?: AxiosRequestConfig
}

export type SystemVmaasJsonReturnType = AxiosPromise<ControllersSystemVmaasJSONResponse>;

const isSystemVmaasJsonObjectParams = (params: [SystemVmaasJsonParams] | unknown[]): params is [SystemVmaasJsonParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'inventoryId')
}
/**
* Show me system\'s json request for VMaaS
* @summary Show me system\'s json request for VMaaS
* @param {SystemVmaasJsonParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const systemVmaasJsonParamCreator = async (...config: ([SystemVmaasJsonParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isSystemVmaasJsonObjectParams(config) ? config[0] : ['inventoryId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as SystemVmaasJsonParams;
    const { inventoryId, options = {} } = params;
    const localVarPath = `/systems/{inventory_id}/vmaas_json`
        .replace(`{${"inventory_id"}}`, encodeURIComponent(String(inventoryId)));
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
        // authentication RhIdentity required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };
}

export default systemVmaasJsonParamCreator;
