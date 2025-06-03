// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { MultipleDelete, RemediationsList } from '../types';


export type DeleteRemediationsParams = {
  /**
  *
  * @type { RemediationsList }
  * @memberof DeleteRemediationsApi
  */
  remediationsList: RemediationsList,
  options?: AxiosRequestConfig
}

export type DeleteRemediationsReturnType = AxiosPromise<MultipleDelete>;

const isDeleteRemediationsObjectParams = (params: [DeleteRemediationsParams] | unknown[]): params is [DeleteRemediationsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'remediationsList')
}
/**
* Removes the given list of Remediations.  Requests containing malformed remediation IDs are rejected.  Duplicate or missing IDs are ignored. RBAC permission {remediations:remediation:write}
* @summary Bulk Delete Remediations
* @param {DeleteRemediationsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const deleteRemediationsParamCreator = async (...config: ([DeleteRemediationsParams] | [RemediationsList, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isDeleteRemediationsObjectParams(config) ? config[0] : ['remediationsList', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DeleteRemediationsParams;
    const { remediationsList, options = {} } = params;
    const localVarPath = `/remediations`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'DELETE' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: remediationsList,
    };
}

export default deleteRemediationsParamCreator;
