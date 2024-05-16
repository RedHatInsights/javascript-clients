// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

// @ts-ignore
import type { Errors, SecurityGuides200Response } from '../types';


export type SecurityGuidesParams = {
  /**
  *
  * @type { any }
  * @memberof SecurityGuidesApi
  */
  xRHIDENTITY?: any,
  /**
  * Number of items to return per page
  * @type { any }
  * @memberof SecurityGuidesApi
  */
  limit?: any,
  /**
  * Offset of first item of paginated response
  * @type { any }
  * @memberof SecurityGuidesApi
  */
  offset?: any,
  /**
  * Attribute and direction to sort the items by. Represented by an array of fields with an optional direction (`<key>:asc` or `<key>:desc`).<br><br>If no direction is selected, `<key>:asc` is used by default.
  * @type { any }
  * @memberof SecurityGuidesApi
  */
  sortBy?: any,
  /**
  * Query string to filter items by their attributes. Compliant with <a href=\"https://github.com/wvanbergen/scoped_search/wiki/Query-language\" target=\"_blank\" title=\"github.com/wvanbergen/scoped_search\">scoped_search query language</a>. However, only `=` or `!=` (resp. `<>`) operators are supported.<br><br>Security Guides are searchable using attributes `title`, `version`, `ref_id`, and `os_major_version`<br><br>(e.g.: `(version=0.1.47 AND os_major_verision=8)`)
  * @type { any }
  * @memberof SecurityGuidesApi
  */
  filter?: any,
  options?: AxiosRequestConfig
}

const isSecurityGuidesObjectParams = (params: [SecurityGuidesParams] | unknown[]): params is [SecurityGuidesParams] => {
  return params.length === 1 && true && true && true && true && true
}
/**
* Lists Security Guides
* @summary Request Security Guides
* @param {SecurityGuidesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const securityGuidesParamCreator = async (...config: ([SecurityGuidesParams] | [any, any, any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isSecurityGuidesObjectParams(config) ? config[0] : ['xRHIDENTITY', 'limit', 'offset', 'sortBy', 'filter', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as SecurityGuidesParams;
    const { xRHIDENTITY, limit, offset, sortBy, filter, options = {} } = params;
    const localVarPath = `/security_guides`;
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

export default securityGuidesParamCreator;
