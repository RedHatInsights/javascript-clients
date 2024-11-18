// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PathwayInput } from '../types';


export type PathwayUpdateParams = {
  /**
  *
  * @type { string }
  * @memberof PathwayUpdateApi
  */
  slug: string,
  /**
  *
  * @type { PathwayInput }
  * @memberof PathwayUpdateApi
  */
  pathwayInput: PathwayInput,
  options?: AxiosRequestConfig
}

export type PathwayUpdateReturnType = AxiosPromise<PathwayInput>;

const isPathwayUpdateObjectParams = (params: [PathwayUpdateParams] | unknown[]): params is [PathwayUpdateParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'slug') && Object.prototype.hasOwnProperty.call(params, 'pathwayInput')
}
/**
* This updates an existing Pathway already defined in the system. All fields that are required to define a Pathway initially may be updated here as well. Pathways are idenfitied and updated by the \"slug\" field.
* @summary Update an existing Pathway in the system
* @param {PathwayUpdateParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const pathwayUpdateParamCreator = async (...config: ([PathwayUpdateParams] | [string, PathwayInput, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isPathwayUpdateObjectParams(config) ? config[0] : ['slug', 'pathwayInput', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as PathwayUpdateParams;
    const { slug, pathwayInput, options = {} } = params;
    const localVarPath = `/api/insights/v1/pathway/{slug}/`
        .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
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
        serializeData: pathwayInput,
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

export default pathwayUpdateParamCreator;
