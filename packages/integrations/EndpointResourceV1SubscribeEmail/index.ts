// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../utils/common';
import type { RequestArgs } from '../utils/base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, AuthTypeEnum } from '../utils/base';
import { Configuration } from '../utils/configuration';

// @ts-ignore
import type { EmailSubscriptionType } from '../types';


export type EndpointResourceV1SubscribeEmailParams = {
  /**
  *
  * @type { string }
  * @memberof EndpointResourceV1SubscribeEmailApi
  */
  applicationName: string,
  /**
  *
  * @type { string }
  * @memberof EndpointResourceV1SubscribeEmailApi
  */
  bundleName: string,
  /**
  *
  * @type { EmailSubscriptionType }
  * @memberof EndpointResourceV1SubscribeEmailApi
  */
  type: EmailSubscriptionType,
  options?: AxiosRequestConfig
}

const isEndpointResourceV1SubscribeEmailObjectParams = (params: [EndpointResourceV1SubscribeEmailParams] | unknown[]): params is [EndpointResourceV1SubscribeEmailParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'applicationName') && Object.prototype.hasOwnProperty.call(params, 'bundleName') && Object.prototype.hasOwnProperty.call(params, 'type')
}
/**
*
* @param {EndpointResourceV1SubscribeEmailParams} config with all available params.
* @param {*} [options] Override http request option.
* @deprecated
* @throws {RequiredError}
*/
export const endpointResourceV1SubscribeEmailParamCreator = async (...config: ([EndpointResourceV1SubscribeEmailParams] | [string, string, EmailSubscriptionType, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isEndpointResourceV1SubscribeEmailObjectParams(config) ? config[0] : ['applicationName', 'bundleName', 'type', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV1SubscribeEmailParams;
    const { applicationName, bundleName, type, options = {} } = params;
    const localVarPath = `/endpoints/email/subscription/{bundleName}/{applicationName}/{type}`
        .replace(`{${"applicationName"}}`, encodeURIComponent(String(applicationName)))
        .replace(`{${"bundleName"}}`, encodeURIComponent(String(bundleName)))
        .replace(`{${"type"}}`, encodeURIComponent(String(type)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PUT', ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default endpointResourceV1SubscribeEmailParamCreator;
