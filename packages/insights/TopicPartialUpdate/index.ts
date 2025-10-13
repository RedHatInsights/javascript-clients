// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PatchedTopicEdit, TopicEdit } from '../types';


export type TopicPartialUpdateParams = {
  /**
  *
  * @type { string }
  * @memberof TopicPartialUpdateApi
  */
  slug: string,
  /**
  *
  * @type { PatchedTopicEdit }
  * @memberof TopicPartialUpdateApi
  */
  patchedTopicEdit?: PatchedTopicEdit,
  options?: AxiosRequestConfig
}

export type TopicPartialUpdateReturnType = AxiosPromise<TopicEdit>;

const isTopicPartialUpdateObjectParams = (params: [TopicPartialUpdateParams] | unknown[]): params is [TopicPartialUpdateParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'slug')
  }
  return false
}
/**
* Update an existing rule topic.  Only the fields being changed need to be supplied
* @summary Partially update a rule topic
* @param {TopicPartialUpdateParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const topicPartialUpdateParamCreator = async (...config: ([TopicPartialUpdateParams] | [string, PatchedTopicEdit, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isTopicPartialUpdateObjectParams(config) ? config[0] : ['slug', 'patchedTopicEdit', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as TopicPartialUpdateParams;
    const { slug, patchedTopicEdit, options = {} } = params;
    const localVarPath = `/api/insights/v1/topic/{slug}/`
        .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PATCH' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: patchedTopicEdit,
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

export default topicPartialUpdateParamCreator;
