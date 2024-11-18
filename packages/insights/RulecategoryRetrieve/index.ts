// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { RuleCategory } from '../types';


export type RulecategoryRetrieveParams = {
  /**
  * A unique integer value identifying this rule category.
  * @type { number }
  * @memberof RulecategoryRetrieveApi
  */
  id: number,
  options?: AxiosRequestConfig
}

export type RulecategoryRetrieveReturnType = AxiosPromise<RuleCategory>;

const isRulecategoryRetrieveObjectParams = (params: [RulecategoryRetrieveParams] | unknown[]): params is [RulecategoryRetrieveParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id')
}
/**
* Rules are divided into categories, the usual being Availability, Stability, Security and Performance.  Categories are listed in decreasing order of importance.
* @param {RulecategoryRetrieveParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const rulecategoryRetrieveParamCreator = async (...config: ([RulecategoryRetrieveParams] | [number, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isRulecategoryRetrieveObjectParams(config) ? config[0] : ['id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RulecategoryRetrieveParams;
    const { id, options = {} } = params;
    const localVarPath = `/api/insights/v1/rulecategory/{id}/`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default rulecategoryRetrieveParamCreator;
