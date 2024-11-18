// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Topic } from '../types';


export type TopicRetrieveParams = {
  /**
  *
  * @type { string }
  * @memberof TopicRetrieveApi
  */
  slug: string,
  options?: AxiosRequestConfig
}

const isTopicRetrieveObjectParams = (params: [TopicRetrieveParams] | unknown[]): params is [TopicRetrieveParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'slug')
}
/**
* Retrieve a single topic by slug.  This also lists the topic\'s impacted systems count.
* @param {TopicRetrieveParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const topicRetrieveParamCreator = async (...config: ([TopicRetrieveParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isTopicRetrieveObjectParams(config) ? config[0] : ['slug', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as TopicRetrieveParams;
    const { slug, options = {} } = params;
    const localVarPath = `/api/insights/v1/topic/{slug}/`
        .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
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
        // authentication x-rh-identity required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };
}

export default topicRetrieveParamCreator;
