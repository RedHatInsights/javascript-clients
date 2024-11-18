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


export type TopicListParams = {
  /**
  * Are there systems which contain these SAP SIDs?
  * @type { Array<string> }
  * @memberof TopicListApi
  */
  filterSystemProfileSapSidsContains?: Array<string>,
  /**
  * Is this a SAP system?
  * @type { boolean }
  * @memberof TopicListApi
  */
  filterSystemProfileSapSystem?: boolean,
  /**
  * List of Inventory host group names
  * @type { Array<string> }
  * @memberof TopicListApi
  */
  groups?: Array<string>,
  /**
  * Display topics that are disabled as well as enabled
  * @type { boolean }
  * @memberof TopicListApi
  */
  showDisabled?: boolean,
  /**
  * Tags have a namespace, key and value in the form namespace/key=value
  * @type { Array<string> }
  * @memberof TopicListApi
  */
  tags?: Array<string>,
  /**
  * Search for systems with this updater type
  * @type { Array<TopicListUpdateMethodEnum> }
  * @memberof TopicListApi
  */
  updateMethod?: Array<TopicListUpdateMethodEnum>,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const TopicListUpdateMethodEnum = {
    Dnfyum: 'dnfyum',
    Ostree: 'ostree'
} as const;
export type TopicListUpdateMethodEnum = typeof TopicListUpdateMethodEnum[keyof typeof TopicListUpdateMethodEnum];

const isTopicListObjectParams = (params: [TopicListParams] | unknown[]): params is [TopicListParams] => {
  return params.length === 1 && true && true && true && true && true && true
}
/**
* List the rule topics and their impacted systems counts.  Normally this only shows enabled topics, but if the \'show_disabled\' parameter is set to True then this will show disabled topics as well.
* @param {TopicListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const topicListParamCreator = async (...config: ([TopicListParams] | [Array<string>, boolean, Array<string>, boolean, Array<string>, Array<TopicListUpdateMethodEnum>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isTopicListObjectParams(config) ? config[0] : ['filterSystemProfileSapSidsContains', 'filterSystemProfileSapSystem', 'groups', 'showDisabled', 'tags', 'updateMethod', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as TopicListParams;
    const { filterSystemProfileSapSidsContains, filterSystemProfileSapSystem, groups, showDisabled, tags, updateMethod, options = {} } = params;
    const localVarPath = `/api/insights/v1/topic/`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (filterSystemProfileSapSidsContains) {
        localVarQueryParameter['filter[system_profile][sap_sids][contains]'] = filterSystemProfileSapSidsContains;
    }

    if (filterSystemProfileSapSystem !== undefined) {
        localVarQueryParameter['filter[system_profile][sap_system]'] = filterSystemProfileSapSystem;
    }

    if (groups) {
        localVarQueryParameter['groups'] = groups;
    }

    if (showDisabled !== undefined) {
        localVarQueryParameter['show_disabled'] = showDisabled;
    }

    if (tags) {
        localVarQueryParameter['tags'] = tags;
    }

    if (updateMethod) {
        localVarQueryParameter['update_method'] = updateMethod;
    }



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

export default topicListParamCreator;
