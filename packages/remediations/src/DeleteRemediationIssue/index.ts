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


export type DeleteRemediationIssueParams = {
  /**
  * Remediation identifier
  * @type { string }
  * @memberof DeleteRemediationIssueApi
  */
  id: string,
  /**
  * Issue identifier (e.g. `advisor:CVE_2017_6074_kernel|KERNEL_CVE_2017_6074`)
  * @type { string }
  * @memberof DeleteRemediationIssueApi
  */
  issue: string,
  options?: AxiosRequestConfig
}

export type DeleteRemediationIssueReturnType = void;

const isDeleteRemediationIssueObjectParams = (params: [DeleteRemediationIssueParams] | unknown[]): params is [DeleteRemediationIssueParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id') && Object.prototype.hasOwnProperty.call(params[0], 'issue')
  }
  return false
}
/**
* Removes the given Issue from the Remediation, RBAC permission {remediations:remediation:write}
* @summary Remove Remediation Plan Issue
* @param {DeleteRemediationIssueParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const deleteRemediationIssueParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([DeleteRemediationIssueParams] | [string, string, AxiosRequestConfig])) => {
    const params = isDeleteRemediationIssueObjectParams(config) ? config[0] : ['id', 'issue', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DeleteRemediationIssueParams;
    const { id, issue, options = {} } = params;
    const localVarPath = `/remediations/{id}/issues/{issue}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)))
        .replace(`{${"issue"}}`, encodeURIComponent(String(issue)));
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

    return sendRequest<DeleteRemediationIssueReturnType>(Promise.resolve(args));
}

export default deleteRemediationIssueParamCreator;
