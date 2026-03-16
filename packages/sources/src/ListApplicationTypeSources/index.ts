// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ErrorNotFound, ListApplicationTypesSortByParameter, SourcesCollection } from '../types';


export type ListApplicationTypeSourcesParams = {
  /**
  * ID of the resource
  * @type { string }
  * @memberof ListApplicationTypeSourcesApi
  */
  id: string,
  /**
  * The numbers of items to return per page.
  * @type { number }
  * @memberof ListApplicationTypeSourcesApi
  */
  limit?: number,
  /**
  * The number of items to skip before starting to collect the result set.
  * @type { number }
  * @memberof ListApplicationTypeSourcesApi
  */
  offset?: number,
  /**
  * Filter for querying collections.
  * @type { object }
  * @memberof ListApplicationTypeSourcesApi
  */
  filter?: object,
  /**
  * The list of attribute and order to sort the result set by.
  * @type { ListApplicationTypesSortByParameter }
  * @memberof ListApplicationTypeSourcesApi
  */
  sortBy?: ListApplicationTypesSortByParameter,
  options?: AxiosRequestConfig
}

export type ListApplicationTypeSourcesReturnType = SourcesCollection;

const isListApplicationTypeSourcesObjectParams = (params: [ListApplicationTypeSourcesParams] | unknown[]): params is [ListApplicationTypeSourcesParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
* Returns an array of Source objects
* @summary List Sources for ApplicationType
* @param {ListApplicationTypeSourcesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listApplicationTypeSourcesParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ListApplicationTypeSourcesParams] | [string, number, number, object, ListApplicationTypesSortByParameter, AxiosRequestConfig])) => {
    const params = isListApplicationTypeSourcesObjectParams(config) ? config[0] : ['id', 'limit', 'offset', 'filter', 'sortBy', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListApplicationTypeSourcesParams;
    const { id, limit, offset, filter, sortBy, options = {} } = params;
    const localVarPath = `/application_types/{id}/sources`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }

    if (filter !== undefined) {
        localVarQueryParameter['filter'] = filter;
    }

    if (sortBy !== undefined) {
        localVarQueryParameter['sort_by'] = sortBy;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        auth:[
        {
        // authentication UserSecurity required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };

    return sendRequest<ListApplicationTypeSourcesReturnType>(Promise.resolve(args));
}

export default listApplicationTypeSourcesParamCreator;
