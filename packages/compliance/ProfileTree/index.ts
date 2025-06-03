// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Errors } from '../types';


export type ProfileTreeParams = {
  /**
  *
  * @type { any }
  * @memberof ProfileTreeApi
  */
  securityGuideId: any,
  /**
  *
  * @type { any }
  * @memberof ProfileTreeApi
  */
  profileId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof ProfileTreeApi
  */
  xRHIDENTITY?: any,
  options?: AxiosRequestConfig
}

export type ProfileTreeReturnType = AxiosPromise<any>;

const isProfileTreeObjectParams = (params: [ProfileTreeParams] | unknown[]): params is [ProfileTreeParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'securityGuideId') && Object.prototype.hasOwnProperty.call(params[0], 'profileId') && true
}
/**
* Returns the Rule Tree of a Profile
* @summary Request the Rule Tree of a Profile
* @param {ProfileTreeParams} config with all available params.
* @param {*} [options] Override http request option.
* @deprecated
* @throws {RequiredError}
*/
export const profileTreeParamCreator = async (...config: ([ProfileTreeParams] | [any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isProfileTreeObjectParams(config) ? config[0] : ['securityGuideId', 'profileId', 'xRHIDENTITY', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ProfileTreeParams;
    const { securityGuideId, profileId, xRHIDENTITY, options = {} } = params;
    const localVarPath = `/security_guides/{security_guide_id}/profiles/{profile_id}/rule_tree`
        .replace(`{${"security_guide_id"}}`, encodeURIComponent(String(securityGuideId)))
        .replace(`{${"profile_id"}}`, encodeURIComponent(String(profileId)));
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

export default profileTreeParamCreator;
