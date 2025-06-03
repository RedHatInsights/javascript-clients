// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersAdvisoryDetailResponse, UtilsErrorResponse } from '../types';


export type DetailAdvisoryParams = {
  /**
  * Advisory ID
  * @type { string }
  * @memberof DetailAdvisoryApi
  */
  advisoryId: string,
  options?: AxiosRequestConfig
}

export type DetailAdvisoryReturnType = AxiosPromise<ControllersAdvisoryDetailResponse>;

const isDetailAdvisoryObjectParams = (params: [DetailAdvisoryParams] | unknown[]): params is [DetailAdvisoryParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'advisoryId')
}
/**
* Show me details an advisory by given advisory name
* @summary Show me details an advisory by given advisory name
* @param {DetailAdvisoryParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const detailAdvisoryParamCreator = async (...config: ([DetailAdvisoryParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isDetailAdvisoryObjectParams(config) ? config[0] : ['advisoryId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DetailAdvisoryParams;
    const { advisoryId, options = {} } = params;
    const localVarPath = `/advisories/{advisory_id}`
        .replace(`{${"advisory_id"}}`, encodeURIComponent(String(advisoryId)));
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
        // authentication RhIdentity required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };
}

export default detailAdvisoryParamCreator;
