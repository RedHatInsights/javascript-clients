// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { AppliedInventoriesForServiceOffering200Response, OrderParametersServicePlan } from '../types';


export type OrderServicePlanParams = {
  /**
  * ID of the resource
  * @type { string }
  * @memberof OrderServicePlanApi
  */
  id: string,
  /**
  * Order parameters defining the service and provider control
  * @type { OrderParametersServicePlan }
  * @memberof OrderServicePlanApi
  */
  orderParametersServicePlan: OrderParametersServicePlan,
  options?: AxiosRequestConfig
}

export type OrderServicePlanReturnType = AppliedInventoriesForServiceOffering200Response;

const isOrderServicePlanObjectParams = (params: [OrderServicePlanParams] | unknown[]): params is [OrderServicePlanParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id') && Object.prototype.hasOwnProperty.call(params[0], 'orderParametersServicePlan')
  }
  return false
}
/**
* Returns a Task id
* @summary Order an existing ServicePlan
* @param {OrderServicePlanParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const orderServicePlanParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([OrderServicePlanParams] | [string, OrderParametersServicePlan, AxiosRequestConfig])) => {
    const params = isOrderServicePlanObjectParams(config) ? config[0] : ['id', 'orderParametersServicePlan', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as OrderServicePlanParams;
    const { id, orderParametersServicePlan, options = {} } = params;
    const localVarPath = `/service_plans/{id}/order`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
        serializeData: orderParametersServicePlan,
        auth:[
        {
        // authentication UserSecurity required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };

    return sendRequest<OrderServicePlanReturnType>(Promise.resolve(args));
}

export default orderServicePlanParamCreator;
