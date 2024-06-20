// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { CrossAccountRequestDetail, CrossAccountRequestOut, CrossAccountRequestUpdateIn, Error403 } from '../types';


export type PutCrossAccountRequestParams = {
  /**
  * ID of cross account request to get
  * @type { string }
  * @memberof PutCrossAccountRequestApi
  */
  uuid: string, 
  /**
  * Updates to CrossAccountRequest
  * @type { CrossAccountRequestUpdateIn }
  * @memberof PutCrossAccountRequestApi
  */
  crossAccountRequestUpdateIn: CrossAccountRequestUpdateIn, 
  options?: AxiosRequestConfig
}

const isPutCrossAccountRequestObjectParams = (params: [PutCrossAccountRequestParams] | unknown[]): params is [PutCrossAccountRequestParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'uuid') && Object.prototype.hasOwnProperty.call(params, 'crossAccountRequestUpdateIn')
}
/**
* For TAM requestor to update the start_date/end_date/roles of an existing cross account request.
* @summary Update a cross account request
* @param {PutCrossAccountRequestParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const putCrossAccountRequestParamCreator = async (...config: ([PutCrossAccountRequestParams] | [string, CrossAccountRequestUpdateIn, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isPutCrossAccountRequestObjectParams(config) ? config[0] : ['uuid', 'crossAccountRequestUpdateIn', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as PutCrossAccountRequestParams;
    const { uuid, crossAccountRequestUpdateIn, options = {} } = params;
    const localVarPath = `/cross-account-requests/{uuid}/`
        .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PUT' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: crossAccountRequestUpdateIn,
        auth:[
        {
        // authentication basic_auth required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };
}

export default putCrossAccountRequestParamCreator;
