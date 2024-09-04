// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ControllersPackageVersionsResponse, UtilsErrorResponse } from '../types';


export type PackageVersionsParams = {
  /**
  * Package name
  * @type { string }
  * @memberof PackageVersionsApi
  */
  packageName: string,
  /**
  * Limit for paging
  * @type { number }
  * @memberof PackageVersionsApi
  */
  limit?: number,
  /**
  * Offset for paging
  * @type { number }
  * @memberof PackageVersionsApi
  */
  offset?: number,
  options?: AxiosRequestConfig
}

const isPackageVersionsObjectParams = (params: [PackageVersionsParams] | unknown[]): params is [PackageVersionsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'packageName') && true && true
}
/**
* Show me all package versions installed on some system
* @summary Show me all package versions installed on some system
* @param {PackageVersionsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const packageVersionsParamCreator = async (...config: ([PackageVersionsParams] | [string, number, number, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isPackageVersionsObjectParams(config) ? config[0] : ['packageName', 'limit', 'offset', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as PackageVersionsParams;
    const { packageName, limit, offset, options = {} } = params;
    const localVarPath = `/packages/{package_name}/versions`
        .replace(`{${"package_name"}}`, encodeURIComponent(String(packageName)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }



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

export default packageVersionsParamCreator;
