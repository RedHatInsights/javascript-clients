// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Errors, Rules200Response } from '../types';


export type TailoringRulesParams = {
  /**
  *
  * @type { any }
  * @memberof TailoringRulesApi
  */
  policyId: any,
  /**
  *
  * @type { any }
  * @memberof TailoringRulesApi
  */
  tailoringId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof TailoringRulesApi
  */
  xRHIDENTITY?: any,
  /**
  * Number of items to return per page
  * @type { any }
  * @memberof TailoringRulesApi
  */
  limit?: any,
  /**
  * Offset of first item of paginated response
  * @type { any }
  * @memberof TailoringRulesApi
  */
  offset?: any,
  /**
  * Indicates whether to return only resource IDs.
  * @type { any }
  * @memberof TailoringRulesApi
  */
  idsOnly?: any,
  /**
  * Attribute and direction to sort the items by. Represented by an array of fields with an optional direction (`<key>:asc` or `<key>:desc`).<br><br>If no direction is selected, `<key>:asc` is used by default.
  * @type { any }
  * @memberof TailoringRulesApi
  */
  sortBy?: any,
  /**
  * Query string to filter items by their attributes. Compliant with <a href=\"https://github.com/wvanbergen/scoped_search/wiki/Query-language\" target=\"_blank\" title=\"github.com/wvanbergen/scoped_search\">scoped_search query language</a>. However, only `=` or `!=` (resp. `<>`) operators are supported.<br><br>Rules are searchable using attributes `title`, `severity`, `remediation_available`, and `rule_group_id`<br><br>(e.g.: `(field_1=something AND field_2!=\"something else\") OR field_3>40`)
  * @type { any }
  * @memberof TailoringRulesApi
  */
  filter?: any,
  options?: AxiosRequestConfig
}

export type TailoringRulesReturnType = AxiosPromise<Rules200Response>;

const isTailoringRulesObjectParams = (params: [TailoringRulesParams] | unknown[]): params is [TailoringRulesParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'policyId') && Object.prototype.hasOwnProperty.call(params, 'tailoringId') && true && true && true && true && true && true
}
/**
* Lists Rules assigned to a Tailoring
* @summary Request Rules assigned to a Tailoring
* @param {TailoringRulesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const tailoringRulesParamCreator = async (...config: ([TailoringRulesParams] | [any, any, any, any, any, any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isTailoringRulesObjectParams(config) ? config[0] : ['policyId', 'tailoringId', 'xRHIDENTITY', 'limit', 'offset', 'idsOnly', 'sortBy', 'filter', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as TailoringRulesParams;
    const { policyId, tailoringId, xRHIDENTITY, limit, offset, idsOnly, sortBy, filter, options = {} } = params;
    const localVarPath = `/policies/{policy_id}/tailorings/{tailoring_id}/rules`
        .replace(`{${"policy_id"}}`, encodeURIComponent(String(policyId)))
        .replace(`{${"tailoring_id"}}`, encodeURIComponent(String(tailoringId)));
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

export default tailoringRulesParamCreator;
