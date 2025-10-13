// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Errors, Profile200Response } from '../types';


export type ProfileParams = {
  /**
  *
  * @type { any }
  * @memberof ProfileApi
  */
  securityGuideId: any,
  /**
  * UUID or a ref_id with \'.\' characters replaced with \'-\'
  * @type { any }
  * @memberof ProfileApi
  */
  profileId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof ProfileApi
  */
  xRHIDENTITY?: any,
  options?: AxiosRequestConfig
}

export type ProfileReturnType = AxiosPromise<Profile200Response>;

const isProfileObjectParams = (params: [ProfileParams] | unknown[]): params is [ProfileParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true  && Object.prototype.hasOwnProperty.call(params[0], 'securityGuideId') && Object.prototype.hasOwnProperty.call(params[0], 'profileId')
  }
  return false
}
/**
* Retrieve a specific profile.
* @summary Request a Profile
* @param {ProfileParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const profileParamCreator = async (...config: ([ProfileParams] | [any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isProfileObjectParams(config) ? config[0] : ['securityGuideId', 'profileId', 'xRHIDENTITY', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ProfileParams;
    const { securityGuideId, profileId, xRHIDENTITY, options = {} } = params;
    const localVarPath = `/security_guides/{security_guide_id}/profiles/{profile_id}`
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

export default profileParamCreator;
