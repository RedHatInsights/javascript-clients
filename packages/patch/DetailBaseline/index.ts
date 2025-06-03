// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersBaselineDetailResponse, UtilsErrorResponse } from '../types';


export type DetailBaselineParams = {
  /**
  * Baseline ID
  * @type { string }
  * @memberof DetailBaselineApi
  */
  baselineId: string,
  options?: AxiosRequestConfig
}

export type DetailBaselineReturnType = AxiosPromise<ControllersBaselineDetailResponse>;

const isDetailBaselineObjectParams = (params: [DetailBaselineParams] | unknown[]): params is [DetailBaselineParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'baselineId')
}
/**
* Show baseline detail by given baseline ID
* @summary Show baseline detail by given baseline ID
* @param {DetailBaselineParams} config with all available params.
* @param {*} [options] Override http request option.
* @deprecated
* @throws {RequiredError}
*/
export const detailBaselineParamCreator = async (...config: ([DetailBaselineParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isDetailBaselineObjectParams(config) ? config[0] : ['baselineId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DetailBaselineParams;
    const { baselineId, options = {} } = params;
    const localVarPath = `/baselines/{baseline_id}`
        .replace(`{${"baseline_id"}}`, encodeURIComponent(String(baselineId)));
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

export default detailBaselineParamCreator;
