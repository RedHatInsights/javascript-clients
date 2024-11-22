// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Policies200Response } from '../types';


export type SystemsPoliciesParams = {
  /**
  *
  * @type { any }
  * @memberof SystemsPoliciesApi
  */
  systemId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof SystemsPoliciesApi
  */
  xRHIDENTITY?: any,
  /**
  * Number of items to return per page
  * @type { any }
  * @memberof SystemsPoliciesApi
  */
  limit?: any,
  /**
  * Offset of first item of paginated response
  * @type { any }
  * @memberof SystemsPoliciesApi
  */
  offset?: any,
  /**
  * Indicates whether to return only resource IDs.
  * @type { any }
  * @memberof SystemsPoliciesApi
  */
  idsOnly?: any,
  /**
  * Attribute and direction to sort the items by. Represented by an array of fields with an optional direction (`<key>:asc` or `<key>:desc`).<br><br>If no direction is selected, `<key>:asc` is used by default.
  * @type { any }
  * @memberof SystemsPoliciesApi
  */
  sortBy?: any,
  /**
  * Query string to filter items by their attributes. Compliant with <a href=\"https://github.com/wvanbergen/scoped_search/wiki/Query-language\" target=\"_blank\" title=\"github.com/wvanbergen/scoped_search\">scoped_search query language</a>. However, only `=` or `!=` (resp. `<>`) operators are supported.<br><br>Policies are searchable using attributes `title` and `os_minor_version`<br><br>(e.g.: `(field_1=something AND field_2!=\"something else\") OR field_3>40`)
  * @type { any }
  * @memberof SystemsPoliciesApi
  */
  filter?: any,
  options?: AxiosRequestConfig
}

export type SystemsPoliciesReturnType = AxiosPromise<Policies200Response>;

const isSystemsPoliciesObjectParams = (params: [SystemsPoliciesParams] | unknown[]): params is [SystemsPoliciesParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'systemId') && true && true && true && true && true && true
}
/**
* Lists Policies under a System
* @summary Request Policies assigned to a System
* @param {SystemsPoliciesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const systemsPoliciesParamCreator = async (...config: ([SystemsPoliciesParams] | [any, any, any, any, any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isSystemsPoliciesObjectParams(config) ? config[0] : ['systemId', 'xRHIDENTITY', 'limit', 'offset', 'idsOnly', 'sortBy', 'filter', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as SystemsPoliciesParams;
    const { systemId, xRHIDENTITY, limit, offset, idsOnly, sortBy, filter, options = {} } = params;
    const localVarPath = `/systems/{system_id}/policies`
        .replace(`{${"system_id"}}`, encodeURIComponent(String(systemId)));
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

    if (idsOnly !== undefined) {
        localVarQueryParameter['ids_only'] = idsOnly;
    }

    if (sortBy !== undefined) {
        localVarQueryParameter['sort_by'] = sortBy;
    }

    if (filter !== undefined) {
        localVarQueryParameter['filter'] = filter;
    }

    if (xRHIDENTITY != null) {
        localVarHeaderParameter['X-RH-IDENTITY'] = typeof xRHIDENTITY === 'string'
            ? xRHIDENTITY
            : JSON.stringify(xRHIDENTITY);
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default systemsPoliciesParamCreator;
