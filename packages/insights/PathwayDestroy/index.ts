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


export type PathwayDestroyParams = {
  /**
  *
  * @type { string }
  * @memberof PathwayDestroyApi
  */
  slug: string,
  options?: AxiosRequestConfig
}

const isPathwayDestroyObjectParams = (params: [PathwayDestroyParams] | unknown[]): params is [PathwayDestroyParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'slug')
}
/**
* This will DELETE an existing Pathway in the system. Existing pathways are identified and deleted by the \"slug\" field.
* @summary Destroy an existing Pathway in the system
* @param {PathwayDestroyParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const pathwayDestroyParamCreator = async (...config: ([PathwayDestroyParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isPathwayDestroyObjectParams(config) ? config[0] : ['slug', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as PathwayDestroyParams;
    const { slug, options = {} } = params;
    const localVarPath = `/api/insights/v1/pathway/{slug}/`
        .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
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

export default pathwayDestroyParamCreator;
