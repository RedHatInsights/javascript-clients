// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { AppliedInventoriesForServiceOffering200Response, AppliedInventoriesParametersServicePlan } from '../types';


export type AppliedInventoriesForServiceOfferingParams = {
  /**
  * ID of the resource
  * @type { string }
  * @memberof AppliedInventoriesForServiceOfferingApi
  */
  id: string,
  /**
  * Parameters defining input data for computing inventories
  * @type { AppliedInventoriesParametersServicePlan }
  * @memberof AppliedInventoriesForServiceOfferingApi
  */
  appliedInventoriesParametersServicePlan: AppliedInventoriesParametersServicePlan,
  options?: AxiosRequestConfig
}

export type AppliedInventoriesForServiceOfferingReturnType = AxiosPromise<AppliedInventoriesForServiceOffering200Response>;

const isAppliedInventoriesForServiceOfferingObjectParams = (params: [AppliedInventoriesForServiceOfferingParams] | unknown[]): params is [AppliedInventoriesForServiceOfferingParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id') && Object.prototype.hasOwnProperty.call(params[0], 'appliedInventoriesParametersServicePlan')
  }
  return false
}
/**
* Returns a Task id
* @summary Invokes computing of ServiceInventories for given ServiceOffering
* @param {AppliedInventoriesForServiceOfferingParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const appliedInventoriesForServiceOfferingParamCreator = async (...config: ([AppliedInventoriesForServiceOfferingParams] | [string, AppliedInventoriesParametersServicePlan, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isAppliedInventoriesForServiceOfferingObjectParams(config) ? config[0] : ['id', 'appliedInventoriesParametersServicePlan', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as AppliedInventoriesForServiceOfferingParams;
    const { id, appliedInventoriesParametersServicePlan, options = {} } = params;
    const localVarPath = `/service_offerings/{id}/applied_inventories`
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
        serializeData: appliedInventoriesParametersServicePlan,
        auth:[
        {
        // authentication UserSecurity required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };
}

export default appliedInventoriesForServiceOfferingParamCreator;
