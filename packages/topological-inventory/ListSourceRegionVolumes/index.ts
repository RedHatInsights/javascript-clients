// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ErrorNotFound, ListClustersSortByParameter, VolumesCollection } from '../types';


export type ListSourceRegionVolumesParams = {
  /**
  * ID of the resource
  * @type { string }
  * @memberof ListSourceRegionVolumesApi
  */
  id: string,
  /**
  * The numbers of items to return per page.
  * @type { number }
  * @memberof ListSourceRegionVolumesApi
  */
  limit?: number,
  /**
  * The number of items to skip before starting to collect the result set.
  * @type { number }
  * @memberof ListSourceRegionVolumesApi
  */
  offset?: number,
  /**
  * Filter for querying collections.
  * @type { object }
  * @memberof ListSourceRegionVolumesApi
  */
  filter?: object,
  /**
  * The list of attribute and order to sort the result set by.
  * @type { ListClustersSortByParameter }
  * @memberof ListSourceRegionVolumesApi
  */
  sortBy?: ListClustersSortByParameter,
  options?: AxiosRequestConfig
}

export type ListSourceRegionVolumesReturnType = AxiosPromise<VolumesCollection>;

const isListSourceRegionVolumesObjectParams = (params: [ListSourceRegionVolumesParams] | unknown[]): params is [ListSourceRegionVolumesParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id') && true && true && true && true
}
/**
* Returns an array of Volume objects
* @summary List Volumes for SourceRegion
* @param {ListSourceRegionVolumesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listSourceRegionVolumesParamCreator = async (...config: ([ListSourceRegionVolumesParams] | [string, number, number, object, ListClustersSortByParameter, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListSourceRegionVolumesObjectParams(config) ? config[0] : ['id', 'limit', 'offset', 'filter', 'sortBy', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListSourceRegionVolumesParams;
    const { id, limit, offset, filter, sortBy, options = {} } = params;
    const localVarPath = `/source_regions/{id}/volumes`
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

    return {
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
}

export default listSourceRegionVolumesParamCreator;
