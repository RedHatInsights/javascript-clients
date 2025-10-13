// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type {  } from '../types';


export type AutosubexclusionDestroyParams = {
  /**
  *
  * @type { string }
  * @memberof AutosubexclusionDestroyApi
  */
  orgId: string,
  options?: AxiosRequestConfig
}

export type AutosubexclusionDestroyReturnType = AxiosPromise<string>;

const isAutosubexclusionDestroyObjectParams = (params: [AutosubexclusionDestroyParams] | unknown[]): params is [AutosubexclusionDestroyParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'orgId')
  }
  return false
}
/**
* Destroy an existing subscription exclusion in the system.  This will DELETE an existing subscription exclusion in the system. Existing subscription exclusions are identified and deleted by the \"org_id\" field.
* @param {AutosubexclusionDestroyParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const autosubexclusionDestroyParamCreator = async (...config: ([AutosubexclusionDestroyParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isAutosubexclusionDestroyObjectParams(config) ? config[0] : ['orgId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as AutosubexclusionDestroyParams;
    const { orgId, options = {} } = params;
    const localVarPath = `/api/insights/v1/autosubexclusion/{org_id}/`
        .replace(`{${"org_id"}}`, encodeURIComponent(String(orgId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'DELETE' as Method, ...options};
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

export default autosubexclusionDestroyParamCreator;
