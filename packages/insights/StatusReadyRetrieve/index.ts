// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type {  } from '../types';


export type StatusReadyRetrieveParams = {
  options?: AxiosRequestConfig
}

export type StatusReadyRetrieveReturnType = AxiosPromise<void>;

const isStatusReadyRetrieveObjectParams = (params: [StatusReadyRetrieveParams] | unknown[]): params is [StatusReadyRetrieveParams] => {
  return params.length === 1
}
/**
* Is the Advisor API ready to serve requests?  This returns a dictionary with properties defining the status of the components Advisor relies on.  * \'django\' should always be True.  If Django isn\'t ready, you can\'t   get this information :-) * \'database\' is True when a database access returns successfully with   valid information. * \'rbac\' is True when we can make a request to the RBAC API and get   a valid response. * \'advisor\' is True if all of the above are True.
* @param {StatusReadyRetrieveParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const statusReadyRetrieveParamCreator = async (...config: ([StatusReadyRetrieveParams] | [AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isStatusReadyRetrieveObjectParams(config) ? config[0] : ['options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as StatusReadyRetrieveParams;
    const { options = {} } = params;
    const localVarPath = `/api/insights/v1/status/ready/`;
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

export default statusReadyRetrieveParamCreator;
