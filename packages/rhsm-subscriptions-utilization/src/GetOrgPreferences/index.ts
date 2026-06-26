import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

import type { OrgPreferencesResponse } from '../types';


export type GetOrgPreferencesParams = {
  /**
  * Base64-encoded JSON identity document for x-rh-identity (must include org_id for User and ServiceAccount identities, per the authenticated principal).
  * @type { string }
  * @memberof GetOrgPreferencesApi
  */
  xRhIdentity: string,
  options?: AxiosRequestConfig
}

export type GetOrgPreferencesReturnType = OrgPreferencesResponse;

const isGetOrgPreferencesObjectParams = (params: [GetOrgPreferencesParams] | unknown[]): params is [GetOrgPreferencesParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'xRhIdentity')
  }
  return false
}
/**
* Retrieves the organization utilization preferences for the organization resolved from the authenticated x-rh-identity header.
* @summary Get organization utilization preferences
* @param {GetOrgPreferencesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getOrgPreferencesParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([GetOrgPreferencesParams] | [string, AxiosRequestConfig])) => {
    const params = isGetOrgPreferencesObjectParams(config) ? config[0] : ['xRhIdentity', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetOrgPreferencesParams;
    const { xRhIdentity, options = {} } = params;
    const localVarPath = `/api/rhsm-subscriptions/v1/utilization/org-preferences`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (xRhIdentity != null) {
        localVarHeaderParameter['x-rh-identity'] = String(xRhIdentity);
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        auth:[
        {
        // authentication service required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-swatch-psk"
        },
        {
        // authentication customer required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };

    return sendRequest<GetOrgPreferencesReturnType>(Promise.resolve(args));
}

export default getOrgPreferencesParamCreator;
