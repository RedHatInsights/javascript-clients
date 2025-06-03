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


export type EndpointResourceV2GetDetailedEndpointHistoryParams = {
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV2GetDetailedEndpointHistoryApi
  */
  historyId: any,
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV2GetDetailedEndpointHistoryApi
  */
  id: any,
  options?: AxiosRequestConfig
}

export type EndpointResourceV2GetDetailedEndpointHistoryReturnType = AxiosPromise<any>;

const isEndpointResourceV2GetDetailedEndpointHistoryObjectParams = (params: [EndpointResourceV2GetDetailedEndpointHistoryParams] | unknown[]): params is [EndpointResourceV2GetDetailedEndpointHistoryParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'historyId') && Object.prototype.hasOwnProperty.call(params[0], 'id')
}
/**
* Retrieves extended information about the outcome of an event notification related to the specified endpoint. Use this endpoint to learn why an event delivery failed.
* @summary Retrieve event notification details
* @param {EndpointResourceV2GetDetailedEndpointHistoryParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV2GetDetailedEndpointHistoryParamCreator = async (...config: ([EndpointResourceV2GetDetailedEndpointHistoryParams] | [any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isEndpointResourceV2GetDetailedEndpointHistoryObjectParams(config) ? config[0] : ['historyId', 'id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV2GetDetailedEndpointHistoryParams;
    const { historyId, id, options = {} } = params;
    const localVarPath = `/endpoints/{id}/history/{history_id}/details`
        .replace(`{${"history_id"}}`, encodeURIComponent(String(historyId)))
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

export default endpointResourceV2GetDetailedEndpointHistoryParamCreator;
