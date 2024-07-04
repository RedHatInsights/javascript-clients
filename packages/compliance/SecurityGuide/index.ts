// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Errors, SecurityGuide200Response } from '../types';


export type SecurityGuideParams = {
  /**
  *
  * @type { any }
  * @memberof SecurityGuideApi
  */
  securityGuideId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof SecurityGuideApi
  */
  xRHIDENTITY?: any,
  options?: AxiosRequestConfig
}

const isSecurityGuideObjectParams = (params: [SecurityGuideParams] | unknown[]): params is [SecurityGuideParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'securityGuideId') && true
}
/**
* Returns a Security Guide
* @summary Request a Security Guide
* @param {SecurityGuideParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const securityGuideParamCreator = async (...config: ([SecurityGuideParams] | [any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isSecurityGuideObjectParams(config) ? config[0] : ['securityGuideId', 'xRHIDENTITY', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as SecurityGuideParams;
    const { securityGuideId, xRHIDENTITY, options = {} } = params;
    const localVarPath = `/security_guides/{security_guide_id}`
        .replace(`{${"security_guide_id"}}`, encodeURIComponent(String(securityGuideId)));
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

export default securityGuideParamCreator;
