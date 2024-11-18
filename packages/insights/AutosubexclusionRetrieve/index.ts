// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { SubscriptionExcludedAccount } from '../types';


export type AutosubexclusionRetrieveParams = {
  /**
  *
  * @type { string }
  * @memberof AutosubexclusionRetrieveApi
  */
  orgId: string,
  options?: AxiosRequestConfig
}

const isAutosubexclusionRetrieveObjectParams = (params: [AutosubexclusionRetrieveParams] | unknown[]): params is [AutosubexclusionRetrieveParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'orgId')
}
/**
* Returns an individual subscription exclusion based on org_id.  This returns an individual subscription exclusion based on the org_id.
* @param {AutosubexclusionRetrieveParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const autosubexclusionRetrieveParamCreator = async (...config: ([AutosubexclusionRetrieveParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isAutosubexclusionRetrieveObjectParams(config) ? config[0] : ['orgId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as AutosubexclusionRetrieveParams;
    const { orgId, options = {} } = params;
    const localVarPath = `/api/insights/v1/autosubexclusion/{org_id}/`
        .replace(`{${"org_id"}}`, encodeURIComponent(String(orgId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        auth:[
        {
        // authentication x-rh-identity required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };
}

export default autosubexclusionRetrieveParamCreator;
