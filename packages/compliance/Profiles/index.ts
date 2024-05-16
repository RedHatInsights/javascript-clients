// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

// @ts-ignore
import type { Errors, Profiles200Response } from '../types';


export type ProfilesParams = {
  /**
  *
  * @type { any }
  * @memberof ProfilesApi
  */
  securityGuideId: any,
  /**
  *
  * @type { any }
  * @memberof ProfilesApi
  */
  xRHIDENTITY?: any,
  /**
  * Number of items to return per page
  * @type { any }
  * @memberof ProfilesApi
  */
  limit?: any,
  /**
  * Offset of first item of paginated response
  * @type { any }
  * @memberof ProfilesApi
  */
  offset?: any,
  /**
  * Attribute and direction to sort the items by. Represented by an array of fields with an optional direction (`<key>:asc` or `<key>:desc`).<br><br>If no direction is selected, `<key>:asc` is used by default.
  * @type { any }
  * @memberof ProfilesApi
  */
  sortBy?: any,
  /**
  * Query string to filter items by their attributes. Compliant with <a href=\"https://github.com/wvanbergen/scoped_search/wiki/Query-language\" target=\"_blank\" title=\"github.com/wvanbergen/scoped_search\">scoped_search query language</a>. However, only `=` or `!=` (resp. `<>`) operators are supported.<br><br>Profiles are searchable using attributes `title` and `ref_id`<br><br>(e.g.: `(version=0.1.47 AND os_major_verision=8)`)
  * @type { any }
  * @memberof ProfilesApi
  */
  filter?: any,
  options?: AxiosRequestConfig
}

const isProfilesObjectParams = (params: [ProfilesParams] | unknown[]): params is [ProfilesParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'securityGuideId') && true && true && true && true && true
}
/**
* Lists Profiles
* @summary Request Profiles
* @param {ProfilesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const profilesParamCreator = async (...config: ([ProfilesParams] | [any, any, any, any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isProfilesObjectParams(config) ? config[0] : ['securityGuideId', 'xRHIDENTITY', 'limit', 'offset', 'sortBy', 'filter', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ProfilesParams;
    const { securityGuideId, xRHIDENTITY, limit, offset, sortBy, filter, options = {} } = params;
    const localVarPath = `/security_guides/{security_guide_id}/profiles`
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

export default profilesParamCreator;
