// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../utils/common';
import type { RequestArgs } from '../utils/base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, AuthTypeEnum } from '../utils/base';
import { Configuration } from '../utils/configuration';

// @ts-ignore
import type { Errors, Rule200Response } from '../types';


export type ProfileRuleParams = {
  /**
  *
  * @type { any }
  * @memberof ProfileRuleApi
  */
  securityGuideId: any,
  /**
  *
  * @type { any }
  * @memberof ProfileRuleApi
  */
  profileId: any,
  /**
  *
  * @type { any }
  * @memberof ProfileRuleApi
  */
  id: any,
  /**
  *
  * @type { any }
  * @memberof ProfileRuleApi
  */
  xRHIDENTITY?: any,
  options?: AxiosRequestConfig
}

const isProfileRuleObjectParams = (params: [ProfileRuleParams] | unknown[]): params is [ProfileRuleParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'securityGuideId') && Object.prototype.hasOwnProperty.call(params, 'profileId') && Object.prototype.hasOwnProperty.call(params, 'id') && true
}
/**
* Returns a Rule assigned to a Profile
* @summary Request a Rule assigned to a Profile
* @param {ProfileRuleParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const profileRuleParamCreator = async (...config: ([ProfileRuleParams] | [any, any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isProfileRuleObjectParams(config) ? config[0] : ['securityGuideId', 'profileId', 'id', 'xRHIDENTITY', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ProfileRuleParams;
    const { securityGuideId, profileId, id, xRHIDENTITY, options = {} } = params;
    const localVarPath = `/security_guides/{security_guide_id}/profiles/{profile_id}/rules/{id}`
        .replace(`{${"security_guide_id"}}`, encodeURIComponent(String(securityGuideId)))
        .replace(`{${"profile_id"}}`, encodeURIComponent(String(profileId)))
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

export default profileRuleParamCreator;
