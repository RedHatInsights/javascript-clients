import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

import type { OrgPreferencesRequest, OrgPreferencesResponse } from '../types';


export type UpdateOrgPreferencesParams = {
  /**
  * Base64-encoded JSON identity document for x-rh-identity (must include org_id for User and ServiceAccount identities, per the authenticated principal).
  * @type { string }
  * @memberof UpdateOrgPreferencesApi
  */
  xRhIdentity: string,
  /**
  *
  * @type { OrgPreferencesRequest }
  * @memberof UpdateOrgPreferencesApi
  */
  orgPreferencesRequest: OrgPreferencesRequest,
  options?: AxiosRequestConfig
}

export type UpdateOrgPreferencesReturnType = OrgPreferencesResponse;

const isUpdateOrgPreferencesObjectParams = (params: [UpdateOrgPreferencesParams] | unknown[]): params is [UpdateOrgPreferencesParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'xRhIdentity') && Object.prototype.hasOwnProperty.call(params[0], 'orgPreferencesRequest')
  }
  return false
}
/**
* Accepts organization utilization preferences (for example custom over-usage threshold) and persists them for the organization resolved from the authenticated x-rh-identity header.
* @summary Update organization utilization preferences
* @param {UpdateOrgPreferencesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const updateOrgPreferencesParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([UpdateOrgPreferencesParams] | [string, OrgPreferencesRequest, AxiosRequestConfig])) => {
    const params = isUpdateOrgPreferencesObjectParams(config) ? config[0] : ['xRhIdentity', 'orgPreferencesRequest', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as UpdateOrgPreferencesParams;
    const { xRhIdentity, orgPreferencesRequest, options = {} } = params;
    const localVarPath = `/api/rhsm-subscriptions/v1/utilization/org-preferences`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (xRhIdentity != null) {
        localVarHeaderParameter['x-rh-identity'] = String(xRhIdentity);
    }



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: orgPreferencesRequest,
        auth:[
        {
        // authentication org_admin required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        },
        {
        // authentication service required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-swatch-psk"
        }
        ]
    };

    return sendRequest<UpdateOrgPreferencesReturnType>(Promise.resolve(args));
}

export default updateOrgPreferencesParamCreator;
