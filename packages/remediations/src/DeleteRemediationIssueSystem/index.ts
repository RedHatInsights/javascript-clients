// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { RequestError } from '../types';


export type DeleteRemediationIssueSystemParams = {
  /**
  * Remediation identifier
  * @type { string }
  * @memberof DeleteRemediationIssueSystemApi
  */
  id: string,
  /**
  * Issue identifier (e.g. `advisor:CVE_2017_6074_kernel|KERNEL_CVE_2017_6074`)
  * @type { string }
  * @memberof DeleteRemediationIssueSystemApi
  */
  issue: string,
  /**
  * System identifier
  * @type { string }
  * @memberof DeleteRemediationIssueSystemApi
  */
  system: string,
  options?: AxiosRequestConfig
}

export type DeleteRemediationIssueSystemReturnType = void;

const isDeleteRemediationIssueSystemObjectParams = (params: [DeleteRemediationIssueSystemParams] | unknown[]): params is [DeleteRemediationIssueSystemParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id') && Object.prototype.hasOwnProperty.call(params[0], 'issue') && Object.prototype.hasOwnProperty.call(params[0], 'system')
  }
  return false
}
/**
* Removes the given System from the Issue Remediation, RBAC permission {remediations:remediation:write}
* @summary Remove Remediation Issue System
* @param {DeleteRemediationIssueSystemParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const deleteRemediationIssueSystemParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([DeleteRemediationIssueSystemParams] | [string, string, string, AxiosRequestConfig])) => {
    const params = isDeleteRemediationIssueSystemObjectParams(config) ? config[0] : ['id', 'issue', 'system', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DeleteRemediationIssueSystemParams;
    const { id, issue, system, options = {} } = params;
    const localVarPath = `/remediations/{id}/issues/{issue}/systems/{system}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)))
        .replace(`{${"issue"}}`, encodeURIComponent(String(issue)))
        .replace(`{${"system"}}`, encodeURIComponent(String(system)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'DELETE' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<DeleteRemediationIssueSystemReturnType>(Promise.resolve(args));
}

export default deleteRemediationIssueSystemParamCreator;
