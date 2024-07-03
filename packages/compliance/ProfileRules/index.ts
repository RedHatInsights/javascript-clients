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


export type ProfileRulesParams = {
  /**
  *
  * @type { any }
  * @memberof ProfileRulesApi
  */
  securityGuideId: any,
  /**
  *
  * @type { any }
  * @memberof ProfileRulesApi
  */
  profileId: any,
  /**
  * For internal use only
  * @type { any }
  * @memberof ProfileRulesApi
  */
  xRHIDENTITY?: any,
  /**
  * Number of items to return per page
  * @type { any }
  * @memberof ProfileRulesApi
  */
  limit?: any,
  /**
  * Offset of first item of paginated response
  * @type { any }
  * @memberof ProfileRulesApi
  */
  offset?: any,
  /**
  * Attribute and direction to sort the items by. Represented by an array of fields with an optional direction (`<key>:asc` or `<key>:desc`).<br><br>If no direction is selected, `<key>:asc` is used by default.
  * @type { any }
  * @memberof ProfileRulesApi
  */
  sortBy?: any,
  /**
  * Query string to filter items by their attributes. Compliant with <a href=\"https://github.com/wvanbergen/scoped_search/wiki/Query-language\" target=\"_blank\" title=\"github.com/wvanbergen/scoped_search\">scoped_search query language</a>. However, only `=` or `!=` (resp. `<>`) operators are supported.<br><br>Rules are searchable using attributes `title` and `severity`<br><br>(e.g.: `(field_1=something AND field_2!=\"something else\") OR field_3>40`)
  * @type { any }
  * @memberof ProfileRulesApi
  */
  filter?: any,
  options?: AxiosRequestConfig
}

const isProfileRulesObjectParams = (params: [ProfileRulesParams] | unknown[]): params is [ProfileRulesParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'securityGuideId') && Object.prototype.hasOwnProperty.call(params, 'profileId') && true && true && true && true && true
}
/**
* Lists Rules assigned to a Profile
* @summary Request Rules assigned to a Profile
* @param {ProfileRulesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const profileRulesParamCreator = async (...config: ([ProfileRulesParams] | [any, any, any, any, any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isProfileRulesObjectParams(config) ? config[0] : ['securityGuideId', 'profileId', 'xRHIDENTITY', 'limit', 'offset', 'sortBy', 'filter', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ProfileRulesParams;
    const { securityGuideId, profileId, xRHIDENTITY, limit, offset, sortBy, filter, options = {} } = params;
    const localVarPath = `/security_guides/{security_guide_id}/profiles/{profile_id}/rules`
        .replace(`{${"security_guide_id"}}`, encodeURIComponent(String(securityGuideId)))
        .replace(`{${"profile_id"}}`, encodeURIComponent(String(profileId)));
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

export default profileRulesParamCreator;
