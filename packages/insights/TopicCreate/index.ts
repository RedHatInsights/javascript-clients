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


export type TopicCreateParams = {
  /**
  *
  * @type { TopicEdit }
  * @memberof TopicCreateApi
  */
  topicEdit: TopicEdit,
  options?: AxiosRequestConfig
}

export type TopicCreateReturnType = AxiosPromise<TopicEdit>;

const isTopicCreateObjectParams = (params: [TopicCreateParams] | unknown[]): params is [TopicCreateParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'topicEdit')
  }
  return false
}
/**
* Create a new rule topic, along with its association to a rule tag
* @summary Create a new rule topic
* @param {TopicCreateParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const topicCreateParamCreator = async (...config: ([TopicCreateParams] | [TopicEdit, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isTopicCreateObjectParams(config) ? config[0] : ['topicEdit', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as TopicCreateParams;
    const { topicEdit, options = {} } = params;
    const localVarPath = `/api/insights/v1/topic/`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
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
}

export default topicCreateParamCreator;
