// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersSystemDetailResponse, UtilsErrorResponse } from '../types';


export type DetailSystemParams = {
  /**
  * Inventory ID
  * @type { string }
  * @memberof DetailSystemApi
  */
  inventoryId: string,
  options?: AxiosRequestConfig
}

export type DetailSystemReturnType = AxiosPromise<ControllersSystemDetailResponse>;

const isDetailSystemObjectParams = (params: [DetailSystemParams] | unknown[]): params is [DetailSystemParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'inventoryId')
}
/**
* Show me details about a system by given inventory id
* @summary Show me details about a system by given inventory id
* @param {DetailSystemParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const detailSystemParamCreator = async (...config: ([DetailSystemParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isDetailSystemObjectParams(config) ? config[0] : ['inventoryId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DetailSystemParams;
    const { inventoryId, options = {} } = params;
    const localVarPath = `/systems/{inventory_id}`
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

export default detailSystemParamCreator;
