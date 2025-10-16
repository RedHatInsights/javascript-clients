// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { QuickstartsGet200Response } from '../types';


export type QuickstartsGetParams = {
  /**
  * If set, content is associated with a specific CRC product families
  * @type { Array<string> }
  * @memberof QuickstartsGetApi
  */
  productFamilies?: Array<string>,
  /**
  * If set, content is associated with a specific CRC content
  * @type { Array<string> }
  * @memberof QuickstartsGetApi
  */
  content?: Array<string>,
  /**
  * If set, content is associated with a specific CRC use case
  * @type { Array<string> }
  * @memberof QuickstartsGetApi
  */
  useCase?: Array<string>,
  /**
  * If set, content is associated with a specific CRC bundle
  * @type { Array<string> }
  * @memberof QuickstartsGetApi
  */
  bundle?: Array<string>,
  /**
  * If set, content is associated with a specific CRC application
  * @type { Array<string> }
  * @memberof QuickstartsGetApi
  */
  application?: Array<string>,
  /**
  * If set, content is associated with a specific kind
  * @type { Array<string> }
  * @memberof QuickstartsGetApi
  */
  kind?: Array<string>,
  /**
  * If set, content is associated with a specific topic
  * @type { Array<string> }
  * @memberof QuickstartsGetApi
  */
  topic?: Array<string>,
  /**
  * Search quickstarts by name
  * @type { string }
  * @memberof QuickstartsGetApi
  */
  name?: string,
  /**
  * Search quickstarts by display name
  * @type { string }
  * @memberof QuickstartsGetApi
  */
  displayName?: string,
  /**
  * Pagination limit
  * @type { number }
  * @memberof QuickstartsGetApi
  */
  limit?: number,
  /**
  * Pagination offset
  * @type { number }
  * @memberof QuickstartsGetApi
  */
  offset?: number,
  options?: AxiosRequestConfig
}

export type QuickstartsGetReturnType = QuickstartsGet200Response;

const isQuickstartsGetObjectParams = (params: [QuickstartsGetParams] | unknown[]): params is [QuickstartsGetParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true
  }
  return false
}
/**
*
* @summary Returns list of all quickstarts
* @param {QuickstartsGetParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const quickstartsGetParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([QuickstartsGetParams] | [Array<string>, Array<string>, Array<string>, Array<string>, Array<string>, Array<string>, Array<string>, string, string, number, number, AxiosRequestConfig])) => {
    const params = isQuickstartsGetObjectParams(config) ? config[0] : ['productFamilies', 'content', 'useCase', 'bundle', 'application', 'kind', 'topic', 'name', 'displayName', 'limit', 'offset', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as QuickstartsGetParams;
    const { productFamilies, content, useCase, bundle, application, kind, topic, name, displayName, limit, offset, options = {} } = params;
    const localVarPath = `/quickstarts`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (productFamilies) {
        localVarQueryParameter['product-families'] = productFamilies;
    }

    if (content) {
        localVarQueryParameter['content'] = content;
    }

    if (useCase) {
        localVarQueryParameter['use-case'] = useCase;
    }

    if (bundle) {
        localVarQueryParameter['bundle'] = bundle;
    }

    if (application) {
        localVarQueryParameter['application'] = application;
    }

    if (kind) {
        localVarQueryParameter['kind'] = kind;
    }

    if (topic) {
        localVarQueryParameter['topic'] = topic;
    }

    if (name !== undefined) {
        localVarQueryParameter['name'] = name;
    }

    if (displayName !== undefined) {
        localVarQueryParameter['display-name'] = displayName;
    }

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<QuickstartsGetReturnType>(Promise.resolve(args));
}

export default quickstartsGetParamCreator;
