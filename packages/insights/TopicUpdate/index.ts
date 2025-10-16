// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { TopicEdit } from '../types';


export type TopicUpdateParams = {
  /**
  *
  * @type { string }
  * @memberof TopicUpdateApi
  */
  slug: string,
  /**
  *
  * @type { TopicEdit }
  * @memberof TopicUpdateApi
  */
  topicEdit: TopicEdit,
  options?: AxiosRequestConfig
}

export type TopicUpdateReturnType = TopicEdit;

const isTopicUpdateObjectParams = (params: [TopicUpdateParams] | unknown[]): params is [TopicUpdateParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'slug') && Object.prototype.hasOwnProperty.call(params[0], 'topicEdit')
  }
  return false
}
/**
* Update an existing rule topic.  All fields need to be supplied
* @summary Update a rule topic
* @param {TopicUpdateParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const topicUpdateParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([TopicUpdateParams] | [string, TopicEdit, AxiosRequestConfig])) => {
    const params = isTopicUpdateObjectParams(config) ? config[0] : ['slug', 'topicEdit', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as TopicUpdateParams;
    const { slug, topicEdit, options = {} } = params;
    const localVarPath = `/api/insights/v1/topic/{slug}/`
        .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PUT' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: topicEdit,
        auth:[
        {
        // authentication x-rh-identity required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };

    return sendRequest<TopicUpdateReturnType>(Promise.resolve(args));
}

export default topicUpdateParamCreator;
