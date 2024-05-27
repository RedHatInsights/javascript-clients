// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

// @ts-ignore
import type { Errors, ValueDefinitions200Response } from '../types';


export type ValueDefinitionsParams = {
  /**
  * 
  * @type { any }
  * @memberof ValueDefinitionsApi
  */
  securityGuideId: any, 
  /**
  * For internal use only
  * @type { any }
  * @memberof ValueDefinitionsApi
  */
  xRHIDENTITY?: any, 
  /**
  * Number of items to return per page
  * @type { any }
  * @memberof ValueDefinitionsApi
  */
  limit?: any, 
  /**
  * Offset of first item of paginated response
  * @type { any }
  * @memberof ValueDefinitionsApi
  */
  offset?: any, 
  /**
  * Attribute and direction to sort the items by. Represented by an array of fields with an optional direction (`<key>:asc` or `<key>:desc`).<br><br>If no direction is selected, `<key>:asc` is used by default.
  * @type { any }
  * @memberof ValueDefinitionsApi
  */
  sortBy?: any, 
  /**
  * Query string to filter items by their attributes. Compliant with <a href=\"https://github.com/wvanbergen/scoped_search/wiki/Query-language\" target=\"_blank\" title=\"github.com/wvanbergen/scoped_search\">scoped_search query language</a>. However, only `=` or `!=` (resp. `<>`) operators are supported.<br><br>Value Definitions are searchable using attributes `title` and `ref_id`<br><br>(e.g.: `(field_1=something AND field_2!=\"something else\") OR field_3>40`)
  * @type { any }
  * @memberof ValueDefinitionsApi
  */
  filter?: any, 
  options?: AxiosRequestConfig
}

const isValueDefinitionsObjectParams = (params: [ValueDefinitionsParams] | unknown[]): params is [ValueDefinitionsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'securityGuideId') && true && true && true && true && true
}
/**
* Lists Value Definition
* @summary Request Value Definition
* @param {ValueDefinitionsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const valueDefinitionsParamCreator = async (...config: ([ValueDefinitionsParams] | [any, any, any, any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isValueDefinitionsObjectParams(config) ? config[0] : ['securityGuideId', 'xRHIDENTITY', 'limit', 'offset', 'sortBy', 'filter', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ValueDefinitionsParams;
    const { securityGuideId, xRHIDENTITY, limit, offset, sortBy, filter, options = {} } = params;
    const localVarPath = `/security_guides/{security_guide_id}/value_definitions`
        .replace(`{${"security_guide_id"}}`, encodeURIComponent(String(securityGuideId)));
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

export default valueDefinitionsParamCreator;
