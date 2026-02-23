// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Pathway } from '../types';


export type PathwayRetrieveParams = {
  /**
  *
  * @type { string }
  * @memberof PathwayRetrieveApi
  */
  slug: string,
  /**
  * Filter rules of this category (number)
  * @type { Array<PathwayRetrieveCategoryEnum> }
  * @memberof PathwayRetrieveApi
  */
  category?: Array<PathwayRetrieveCategoryEnum>,
  /**
  * Is this an Ansible system?
  * @type { boolean }
  * @memberof PathwayRetrieveApi
  */
  filterSystemProfileAnsible?: boolean,
  /**
  * Is this a Microsoft SQL system?
  * @type { boolean }
  * @memberof PathwayRetrieveApi
  */
  filterSystemProfileMssql?: boolean,
  /**
  * Are there systems which contain these SAP SIDs?
  * @type { Array<string> }
  * @memberof PathwayRetrieveApi
  */
  filterSystemProfileSapSidsContains?: Array<string>,
  /**
  * Is this a SAP system?
  * @type { boolean }
  * @memberof PathwayRetrieveApi
  */
  filterSystemProfileSapSystem?: boolean,
  /**
  * List of Inventory host group names
  * @type { Array<string> }
  * @memberof PathwayRetrieveApi
  */
  groups?: Array<string>,
  /**
  * Tags have a namespace, key and value in the form namespace/key=value
  * @type { Array<string> }
  * @memberof PathwayRetrieveApi
  */
  tags?: Array<string>,
  /**
  * Filter pathway names with this text. If viewing details for a pathway for rules, reports and systems, additional filter on their text fields
  * @type { string }
  * @memberof PathwayRetrieveApi
  */
  text?: string,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const PathwayRetrieveCategoryEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type PathwayRetrieveCategoryEnum = typeof PathwayRetrieveCategoryEnum[keyof typeof PathwayRetrieveCategoryEnum];

export type PathwayRetrieveReturnType = Pathway;

const isPathwayRetrieveObjectParams = (params: [PathwayRetrieveParams] | unknown[]): params is [PathwayRetrieveParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'slug')
  }
  return false
}
/**
* This returns an individual pathway based on slug. Will display the same information as is provided in the list view.
* @summary Returns an individual Pathway based on slug
* @param {PathwayRetrieveParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const pathwayRetrieveParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([PathwayRetrieveParams] | [string, Array<PathwayRetrieveCategoryEnum>, boolean, boolean, Array<string>, boolean, Array<string>, Array<string>, string, AxiosRequestConfig])) => {
    const params = isPathwayRetrieveObjectParams(config) ? config[0] : ['slug', 'category', 'filterSystemProfileAnsible', 'filterSystemProfileMssql', 'filterSystemProfileSapSidsContains', 'filterSystemProfileSapSystem', 'groups', 'tags', 'text', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as PathwayRetrieveParams;
    const { slug, category, filterSystemProfileAnsible, filterSystemProfileMssql, filterSystemProfileSapSidsContains, filterSystemProfileSapSystem, groups, tags, text, options = {} } = params;
    const localVarPath = `/api/insights/v1/pathway/{slug}/`
        .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (category) {
        localVarQueryParameter['category'] = category;
    }

    if (filterSystemProfileAnsible !== undefined) {
        localVarQueryParameter['filter[system_profile][ansible]'] = filterSystemProfileAnsible;
    }

    if (filterSystemProfileMssql !== undefined) {
        localVarQueryParameter['filter[system_profile][mssql]'] = filterSystemProfileMssql;
    }

    if (filterSystemProfileSapSidsContains) {
        localVarQueryParameter['filter[system_profile][sap_sids][contains]'] = filterSystemProfileSapSidsContains;
    }

    if (filterSystemProfileSapSystem !== undefined) {
        localVarQueryParameter['filter[system_profile][sap_system]'] = filterSystemProfileSapSystem;
    }

    if (groups) {
        localVarQueryParameter['groups'] = groups;
    }

    if (tags) {
        localVarQueryParameter['tags'] = tags;
    }

    if (text !== undefined) {
        localVarQueryParameter['text'] = text;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
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

    return sendRequest<PathwayRetrieveReturnType>(Promise.resolve(args));
}

export default pathwayRetrieveParamCreator;
