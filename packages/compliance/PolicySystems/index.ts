// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Errors, Systems200Response } from '../types';


export type PolicySystemsParams = {
  /**
  *
  * @type { any }
  * @memberof PolicySystemsApi
  */
  policyId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof PolicySystemsApi
  */
  xRHIDENTITY?: any,
  /**
  * An array of tags to narrow down the search results. In case the value contains symbols used for separators (`/` or `=`), they need to be encoded.<br>e.g.: `namespace/key=value`, `insights-client/selinux-config=SELINUX%3Denforcing`
  * @type { any }
  * @memberof PolicySystemsApi
  */
  tags?: any,
  /**
  * Number of items to return per page
  * @type { any }
  * @memberof PolicySystemsApi
  */
  limit?: any,
  /**
  * Offset of first item of paginated response
  * @type { any }
  * @memberof PolicySystemsApi
  */
  offset?: any,
  /**
  * Indicates whether to return only resource IDs.
  * @type { any }
  * @memberof PolicySystemsApi
  */
  idsOnly?: any,
  /**
  * Attribute and direction to sort the items by. Represented by an array of fields with an optional direction (`<key>:asc` or `<key>:desc`).<br><br>If no direction is selected, `<key>:asc` is used by default.
  * @type { any }
  * @memberof PolicySystemsApi
  */
  sortBy?: any,
  /**
  * Query string to filter items by their attributes. Compliant with <a href=\"https://github.com/wvanbergen/scoped_search/wiki/Query-language\" target=\"_blank\" title=\"github.com/wvanbergen/scoped_search\">scoped_search query language</a>. However, only `=` or `!=` (resp. `<>`) operators are supported.<br><br>Systems are searchable using attributes `display_name`, `os_minor_version`, and `group_name`<br><br>(e.g.: `(field_1=something AND field_2!=\"something else\") OR field_3>40`)
  * @type { any }
  * @memberof PolicySystemsApi
  */
  filter?: any,
  options?: AxiosRequestConfig
}

export type PolicySystemsReturnType = AxiosPromise<Systems200Response>;

const isPolicySystemsObjectParams = (params: [PolicySystemsParams] | unknown[]): params is [PolicySystemsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'policyId') && true && true && true && true && true && true && true
}
/**
* Retrieve all of the systems assigned to a specific policy.
* @summary Request Systems assigned to a Policy
* @param {PolicySystemsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const policySystemsParamCreator = async (...config: ([PolicySystemsParams] | [any, any, any, any, any, any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isPolicySystemsObjectParams(config) ? config[0] : ['policyId', 'xRHIDENTITY', 'tags', 'limit', 'offset', 'idsOnly', 'sortBy', 'filter', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as PolicySystemsParams;
    const { policyId, xRHIDENTITY, tags, limit, offset, idsOnly, sortBy, filter, options = {} } = params;
    const localVarPath = `/policies/{policy_id}/systems`
        .replace(`{${"policy_id"}}`, encodeURIComponent(String(policyId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (tags !== undefined) {
        localVarQueryParameter['tags'] = tags;
    }

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

export default policySystemsParamCreator;
