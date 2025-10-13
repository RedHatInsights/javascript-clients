// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { AuthenticationsCollection, ErrorNotFound, ListApplicationTypesSortByParameter } from '../types';


export type ListEndpointAuthenticationsParams = {
  /**
  * ID of the resource
  * @type { string }
  * @memberof ListEndpointAuthenticationsApi
  */
  id: string,
  /**
  * The numbers of items to return per page.
  * @type { number }
  * @memberof ListEndpointAuthenticationsApi
  */
  limit?: number,
  /**
  * The number of items to skip before starting to collect the result set.
  * @type { number }
  * @memberof ListEndpointAuthenticationsApi
  */
  offset?: number,
  /**
  * Filter for querying collections.
  * @type { object }
  * @memberof ListEndpointAuthenticationsApi
  */
  filter?: object,
  /**
  * The list of attribute and order to sort the result set by.
  * @type { ListApplicationTypesSortByParameter }
  * @memberof ListEndpointAuthenticationsApi
  */
  sortBy?: ListApplicationTypesSortByParameter,
  options?: AxiosRequestConfig
}

export type ListEndpointAuthenticationsReturnType = AxiosPromise<AuthenticationsCollection>;

const isListEndpointAuthenticationsObjectParams = (params: [ListEndpointAuthenticationsParams] | unknown[]): params is [ListEndpointAuthenticationsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true  && Object.prototype.hasOwnProperty.call(params[0], 'id')
  }
  return false
}
/**
* Returns an array of Authentication objects
* @summary List Authentications for Endpoint
* @param {ListEndpointAuthenticationsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listEndpointAuthenticationsParamCreator = async (...config: ([ListEndpointAuthenticationsParams] | [string, number, number, object, ListApplicationTypesSortByParameter, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListEndpointAuthenticationsObjectParams(config) ? config[0] : ['id', 'limit', 'offset', 'filter', 'sortBy', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListEndpointAuthenticationsParams;
    const { id, limit, offset, filter, sortBy, options = {} } = params;
    const localVarPath = `/endpoints/{id}/authentications`
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

export default listEndpointAuthenticationsParamCreator;
