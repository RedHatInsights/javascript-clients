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


export type TopicDestroyParams = {
  /**
  *
  * @type { string }
  * @memberof TopicDestroyApi
  */
  slug: string,
  options?: AxiosRequestConfig
}

export type TopicDestroyReturnType = AxiosPromise<void>;

const isTopicDestroyObjectParams = (params: [TopicDestroyParams] | unknown[]): params is [TopicDestroyParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'slug')
}
/**
* Delete a rule topic.  Rules associated with the tag of this topic will be unaffected
* @summary Delete a rule topic
* @param {TopicDestroyParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const topicDestroyParamCreator = async (...config: ([TopicDestroyParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isTopicDestroyObjectParams(config) ? config[0] : ['slug', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as TopicDestroyParams;
    const { slug, options = {} } = params;
    const localVarPath = `/api/insights/v1/topic/{slug}/`
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

export default topicDestroyParamCreator;
