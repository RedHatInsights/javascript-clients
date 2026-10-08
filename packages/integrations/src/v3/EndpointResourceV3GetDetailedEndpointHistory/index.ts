import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

import type {  } from '../types';


export type EndpointResourceV3GetDetailedEndpointHistoryParams = {
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV3GetDetailedEndpointHistoryApi
  */
  historyId: any,
  /**
  *
  * @type { any }
  * @memberof EndpointResourceV3GetDetailedEndpointHistoryApi
  */
  id: any,
  options?: AxiosRequestConfig
}

export type EndpointResourceV3GetDetailedEndpointHistoryReturnType = any;

const isEndpointResourceV3GetDetailedEndpointHistoryObjectParams = (params: [EndpointResourceV3GetDetailedEndpointHistoryParams] | unknown[]): params is [EndpointResourceV3GetDetailedEndpointHistoryParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'historyId') && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
* Retrieves extended information about the outcome of an event notification related to the specified endpoint. Use this endpoint to learn why an event delivery failed.
* @summary Retrieve event notification details
* @param {EndpointResourceV3GetDetailedEndpointHistoryParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV3GetDetailedEndpointHistoryParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([EndpointResourceV3GetDetailedEndpointHistoryParams] | [any, any, AxiosRequestConfig])) => {
    const params = isEndpointResourceV3GetDetailedEndpointHistoryObjectParams(config) ? config[0] : ['historyId', 'id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV3GetDetailedEndpointHistoryParams;
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

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<EndpointResourceV3GetDetailedEndpointHistoryReturnType>(Promise.resolve(args));
}

export default endpointResourceV3GetDetailedEndpointHistoryParamCreator;
