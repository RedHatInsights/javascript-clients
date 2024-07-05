// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Errors, Tailorings200Response } from '../types';


export type TailoringsParams = {
  /**
  *
  * @type { any }
  * @memberof TailoringsApi
  */
  policyId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof TailoringsApi
  */
  xRHIDENTITY?: any,
  /**
  * Number of items to return per page
  * @type { any }
  * @memberof TailoringsApi
  */
  limit?: any,
  /**
  * Offset of first item of paginated response
  * @type { any }
  * @memberof TailoringsApi
  */
  offset?: any,
  /**
  * Attribute and direction to sort the items by. Represented by an array of fields with an optional direction (`<key>:asc` or `<key>:desc`).<br><br>If no direction is selected, `<key>:asc` is used by default.
  * @type { any }
  * @memberof TailoringsApi
  */
  sortBy?: any,
  /**
  * Query string to filter items by their attributes. Compliant with <a href=\"https://github.com/wvanbergen/scoped_search/wiki/Query-language\" target=\"_blank\" title=\"github.com/wvanbergen/scoped_search\">scoped_search query language</a>. However, only `=` or `!=` (resp. `<>`) operators are supported.<br><br>Tailorings are searchable using attributes `os_minor_version`<br><br>(e.g.: `(field_1=something AND field_2!=\"something else\") OR field_3>40`)
  * @type { any }
  * @memberof TailoringsApi
  */
  filter?: any,
  options?: AxiosRequestConfig
}

const isTailoringsObjectParams = (params: [TailoringsParams] | unknown[]): params is [TailoringsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'policyId') && true && true && true && true && true
}
/**
* Lists Tailorings
* @summary Request Tailorings
* @param {TailoringsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const tailoringsParamCreator = async (...config: ([TailoringsParams] | [any, any, any, any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isTailoringsObjectParams(config) ? config[0] : ['policyId', 'xRHIDENTITY', 'limit', 'offset', 'sortBy', 'filter', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as TailoringsParams;
    const { policyId, xRHIDENTITY, limit, offset, sortBy, filter, options = {} } = params;
    const localVarPath = `/policies/{policy_id}/tailorings`
        .replace(`{${"policy_id"}}`, encodeURIComponent(String(policyId)));
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

export default tailoringsParamCreator;
