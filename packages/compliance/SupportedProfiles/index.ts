// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Errors, SupportedProfiles200Response } from '../types';


export type SupportedProfilesParams = {
  /**
  * For internal use only
  * @type { any }
  * @memberof SupportedProfilesApi
  */
  xRHIDENTITY?: any,
  /**
  * Number of items to return per page
  * @type { any }
  * @memberof SupportedProfilesApi
  */
  limit?: any,
  /**
  * Offset of first item of paginated response
  * @type { any }
  * @memberof SupportedProfilesApi
  */
  offset?: any,
  /**
  * Indicates whether to return only resource IDs.
  * @type { any }
  * @memberof SupportedProfilesApi
  */
  idsOnly?: any,
  /**
  * Attribute and direction to sort the items by. Represented by an array of fields with an optional direction (`<key>:asc` or `<key>:desc`).<br><br>If no direction is selected, `<key>:asc` is used by default.
  * @type { any }
  * @memberof SupportedProfilesApi
  */
  sortBy?: any,
  /**
  * Query string to filter items by their attributes. Compliant with <a href=\"https://github.com/wvanbergen/scoped_search/wiki/Query-language\" target=\"_blank\" title=\"github.com/wvanbergen/scoped_search\">scoped_search query language</a>. However, only `=` or `!=` (resp. `<>`) operators are supported.<br><br>Supported Profiles are searchable using attributes `os_major_version`, `title`, and `ref_id`<br><br>(e.g.: `(field_1=something AND field_2!=\"something else\") OR field_3>40`)
  * @type { any }
  * @memberof SupportedProfilesApi
  */
  filter?: any,
  options?: AxiosRequestConfig
}

export type SupportedProfilesReturnType = AxiosPromise<SupportedProfiles200Response>;

const isSupportedProfilesObjectParams = (params: [SupportedProfilesParams] | unknown[]): params is [SupportedProfilesParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
* Retrieve the list of profiles supported by particular RHEL versions.
* @summary Request Supported Profiles
* @param {SupportedProfilesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const supportedProfilesParamCreator = async (...config: ([SupportedProfilesParams] | [any, any, any, any, any, any, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isSupportedProfilesObjectParams(config) ? config[0] : ['xRHIDENTITY', 'limit', 'offset', 'idsOnly', 'sortBy', 'filter', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as SupportedProfilesParams;
    const { xRHIDENTITY, limit, offset, idsOnly, sortBy, filter, options = {} } = params;
    const localVarPath = `/security_guides/supported_profiles`;
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

export default supportedProfilesParamCreator;
