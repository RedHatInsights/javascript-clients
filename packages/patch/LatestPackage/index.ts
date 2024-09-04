// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersPackageDetailResponse, UtilsErrorResponse } from '../types';


export type LatestPackageParams = {
  /**
  * package_name - latest, nevra - exact version
  * @type { string }
  * @memberof LatestPackageApi
  */
  packageName: string,
  options?: AxiosRequestConfig
}

const isLatestPackageObjectParams = (params: [LatestPackageParams] | unknown[]): params is [LatestPackageParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'packageName')
}
/**
* Show me metadata of selected package
* @summary Show me metadata of selected package
* @param {LatestPackageParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const latestPackageParamCreator = async (...config: ([LatestPackageParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isLatestPackageObjectParams(config) ? config[0] : ['packageName', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as LatestPackageParams;
    const { packageName, options = {} } = params;
    const localVarPath = `/packages/{package_name}`
        .replace(`{${"package_name"}}`, encodeURIComponent(String(packageName)));
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

export default latestPackageParamCreator;
