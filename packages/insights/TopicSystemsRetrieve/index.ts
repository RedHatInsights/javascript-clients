// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { SystemsForRule } from '../types';


export type TopicSystemsRetrieveParams = {
  /**
  *
  * @type { string }
  * @memberof TopicSystemsRetrieveApi
  */
  slug: string,
  /**
  * Are there systems which contain these SAP SIDs?
  * @type { Array<string> }
  * @memberof TopicSystemsRetrieveApi
  */
  filterSystemProfileSapSidsContains?: Array<string>,
  /**
  * Is this a SAP system?
  * @type { boolean }
  * @memberof TopicSystemsRetrieveApi
  */
  filterSystemProfileSapSystem?: boolean,
  /**
  * List of Inventory host group names
  * @type { Array<string> }
  * @memberof TopicSystemsRetrieveApi
  */
  groups?: Array<string>,
  /**
  * Order by this field
  * @type { Array<TopicSystemsRetrieveSortEnum> }
  * @memberof TopicSystemsRetrieveApi
  */
  sort?: Array<TopicSystemsRetrieveSortEnum>,
  /**
  * Tags have a namespace, key and value in the form namespace/key=value
  * @type { Array<string> }
  * @memberof TopicSystemsRetrieveApi
  */
  tags?: Array<string>,
  /**
  * Search for systems with this updater type
  * @type { Array<TopicSystemsRetrieveUpdateMethodEnum> }
  * @memberof TopicSystemsRetrieveApi
  */
  updateMethod?: Array<TopicSystemsRetrieveUpdateMethodEnum>,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const TopicSystemsRetrieveSortEnum = {
    NotDisplayName: '-display_name',
    NotLastSeen: '-last_seen',
    NotStaleAt: '-stale_at',
    NotSystemUuid: '-system_uuid',
    NotUpdated: '-updated',
    DisplayName: 'display_name',
    LastSeen: 'last_seen',
    StaleAt: 'stale_at',
    SystemUuid: 'system_uuid',
    Updated: 'updated'
} as const;
export type TopicSystemsRetrieveSortEnum = typeof TopicSystemsRetrieveSortEnum[keyof typeof TopicSystemsRetrieveSortEnum];
/**
  * @export
  * @enum {string}
  */
export const TopicSystemsRetrieveUpdateMethodEnum = {
    Dnfyum: 'dnfyum',
    Ostree: 'ostree'
} as const;
export type TopicSystemsRetrieveUpdateMethodEnum = typeof TopicSystemsRetrieveUpdateMethodEnum[keyof typeof TopicSystemsRetrieveUpdateMethodEnum];

export type TopicSystemsRetrieveReturnType = AxiosPromise<SystemsForRule>;

const isTopicSystemsRetrieveObjectParams = (params: [TopicSystemsRetrieveParams] | unknown[]): params is [TopicSystemsRetrieveParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'slug')
  }
  return false
}
/**
* List all systems affected by this rule topic.  Systems are just listed by their UUID.
* @param {TopicSystemsRetrieveParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const topicSystemsRetrieveParamCreator = async (...config: ([TopicSystemsRetrieveParams] | [string, Array<string>, boolean, Array<string>, Array<TopicSystemsRetrieveSortEnum>, Array<string>, Array<TopicSystemsRetrieveUpdateMethodEnum>, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isTopicSystemsRetrieveObjectParams(config) ? config[0] : ['slug', 'filterSystemProfileSapSidsContains', 'filterSystemProfileSapSystem', 'groups', 'sort', 'tags', 'updateMethod', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as TopicSystemsRetrieveParams;
    const { slug, filterSystemProfileSapSidsContains, filterSystemProfileSapSystem, groups, sort, tags, updateMethod, options = {} } = params;
    const localVarPath = `/api/insights/v1/topic/{slug}/systems/`
        .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
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

    if (sort) {
        localVarQueryParameter['sort'] = sort;
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

export default topicSystemsRetrieveParamCreator;
