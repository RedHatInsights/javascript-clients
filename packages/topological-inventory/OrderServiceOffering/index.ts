// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { AppliedInventoriesForServiceOffering200Response, OrderParametersServiceOffering } from '../types';


export type OrderServiceOfferingParams = {
  /**
  * ID of the resource
  * @type { string }
  * @memberof OrderServiceOfferingApi
  */
  id: string,
  /**
  * Order parameters defining the service and provider control
  * @type { OrderParametersServiceOffering }
  * @memberof OrderServiceOfferingApi
  */
  orderParametersServiceOffering: OrderParametersServiceOffering,
  options?: AxiosRequestConfig
}

const isOrderServiceOfferingObjectParams = (params: [OrderServiceOfferingParams] | unknown[]): params is [OrderServiceOfferingParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id') && Object.prototype.hasOwnProperty.call(params, 'orderParametersServiceOffering')
}
/**
* Returns a Task id
* @summary Order an existing ServiceOffering
* @param {OrderServiceOfferingParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const orderServiceOfferingParamCreator = async (...config: ([OrderServiceOfferingParams] | [string, OrderParametersServiceOffering, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isOrderServiceOfferingObjectParams(config) ? config[0] : ['id', 'orderParametersServiceOffering', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as OrderServiceOfferingParams;
    const { id, orderParametersServiceOffering, options = {} } = params;
    const localVarPath = `/service_offerings/{id}/order`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
        serializeData: orderParametersServiceOffering,
        auth:[
        {
        // authentication UserSecurity required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };
}

export default orderServiceOfferingParamCreator;
