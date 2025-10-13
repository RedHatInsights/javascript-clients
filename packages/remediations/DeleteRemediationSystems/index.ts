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

export type DeleteRemediationSystemsReturnType = MultipleDelete;

const isDeleteRemediationSystemsObjectParams = (params: [DeleteRemediationSystemsParams] | unknown[]): params is [DeleteRemediationSystemsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id') && Object.prototype.hasOwnProperty.call(params[0], 'systemsList')
  }
  return false
}
/**
* Removes the given list of systems from the specified remediation plan.  Request is rejected if indicated remediation plan is not found.  Duplicate or missing system IDs are ignored.
* @summary Bulk Remove Remediation Plan Systems
* @param {DeleteRemediationSystemsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const deleteRemediationSystemsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([DeleteRemediationSystemsParams] | [string, SystemsList, AxiosRequestConfig])) => {
    const params = isDeleteRemediationSystemsObjectParams(config) ? config[0] : ['id', 'systemsList', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DeleteRemediationSystemsParams;
    const { id, systemsList, options = {} } = params;
    const localVarPath = `/remediations/{id}/systems/{system}/issues`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'DELETE' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: systemsList,
    };

    return sendRequest<DeleteRemediationSystemsReturnType>(Promise.resolve(args));
}

export default deleteRemediationSystemsParamCreator;
