// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { MultipleDelete, SystemsList } from '../types';


export type DeleteRemediationSystemsParams = {
  /**
  * Remediation identifier
  * @type { string }
  * @memberof DeleteRemediationSystemsApi
  */
  id: string,
  /**
  *
  * @type { SystemsList }
  * @memberof DeleteRemediationSystemsApi
  */
  systemsList: SystemsList,
  options?: AxiosRequestConfig
}

export type DeleteRemediationSystemsReturnType = AxiosPromise<MultipleDelete>;

const isDeleteRemediationSystemsObjectParams = (params: [DeleteRemediationSystemsParams] | unknown[]): params is [DeleteRemediationSystemsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id') && Object.prototype.hasOwnProperty.call(params, 'systemsList')
}
/**
* Removes the given list of systems from the specified remediation plan.  Request is rejected if indicated remediation plan is not found.  Duplicate or missing system IDs are ignored.
* @summary Bulk Remove Remediation Plan Systems
* @param {DeleteRemediationSystemsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const deleteRemediationSystemsParamCreator = async (...config: ([DeleteRemediationSystemsParams] | [string, SystemsList, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isDeleteRemediationSystemsObjectParams(config) ? config[0] : ['id', 'systemsList', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DeleteRemediationSystemsParams;
    const { id, systemsList, options = {} } = params;
    const localVarPath = `/remediations/{id}/systems`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
        serializeData: systemsList,
    };
}

export default deleteRemediationSystemsParamCreator;
