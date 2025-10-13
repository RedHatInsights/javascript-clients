// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { CrossAccountRequestDetail, CrossAccountRequestOut, CrossAccountRequestPatch, Error403 } from '../types';


export type PatchCrossAccountRequestParams = {
  /**
  * ID of cross account request to get
  * @type { string }
  * @memberof PatchCrossAccountRequestApi
  */
  uuid: string,
  /**
  * Updates to CrossAccountRequest
  * @type { CrossAccountRequestPatch }
  * @memberof PatchCrossAccountRequestApi
  */
  crossAccountRequestPatch: CrossAccountRequestPatch,
  options?: AxiosRequestConfig
}

export type PatchCrossAccountRequestReturnType = AxiosPromise<CrossAccountRequestDetail>;

const isPatchCrossAccountRequestObjectParams = (params: [PatchCrossAccountRequestParams] | unknown[]): params is [PatchCrossAccountRequestParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'uuid') && Object.prototype.hasOwnProperty.call(params[0], 'crossAccountRequestPatch')
  }
  return false
}
/**
* Patch the start_date/end_date/roles of an existing request. Could be used by TAM requestor to cancel request or target account admin to approve/deny request.
* @summary Patch a cross account request
* @param {PatchCrossAccountRequestParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const patchCrossAccountRequestParamCreator = async (...config: ([PatchCrossAccountRequestParams] | [string, CrossAccountRequestPatch, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isPatchCrossAccountRequestObjectParams(config) ? config[0] : ['uuid', 'crossAccountRequestPatch', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as PatchCrossAccountRequestParams;
    const { uuid, crossAccountRequestPatch, options = {} } = params;
    const localVarPath = `/cross-account-requests/{uuid}/`
        .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PATCH' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: crossAccountRequestPatch,
        auth:[
        {
        // authentication basic_auth required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };
}

export default patchCrossAccountRequestParamCreator;
