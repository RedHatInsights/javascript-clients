// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

// @ts-ignore
import type { Errors, ValueDefinition200Response } from '../types';


export type ValueDefinitionParams = {
  /**
  *
  * @type { any }
  * @memberof ValueDefinitionApi
  */
  securityGuideId: any,
  /**
  *
  * @type { any }
  * @memberof ValueDefinitionApi
  */
  id: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof ValueDefinitionApi
  */
  xRHIDENTITY?: any,
  options?: AxiosRequestConfig
}

const isValueDefinitionObjectParams = (params: [ValueDefinitionParams] | unknown[]): params is [ValueDefinitionParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'securityGuideId') && Object.prototype.hasOwnProperty.call(params, 'id') && true
}
/**
* Returns a Value Definition
* @summary Request a Value Definition
* @param {ValueDefinitionParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const valueDefinitionParamCreator = async (...config: ([ValueDefinitionParams] | [any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isValueDefinitionObjectParams(config) ? config[0] : ['securityGuideId', 'id', 'xRHIDENTITY', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ValueDefinitionParams;
    const { securityGuideId, id, xRHIDENTITY, options = {} } = params;
    const localVarPath = `/security_guides/{security_guide_id}/value_definitions/{id}`
        .replace(`{${"security_guide_id"}}`, encodeURIComponent(String(securityGuideId)))
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (xRHIDENTITY != null) {
        localVarHeaderParameter['X-RH-IDENTITY'] = typeof xRHIDENTITY === 'string'
            ? xRHIDENTITY
            : JSON.stringify(xRHIDENTITY);
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default valueDefinitionParamCreator;
