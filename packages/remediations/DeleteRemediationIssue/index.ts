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

export type DeleteRemediationIssueReturnType = AxiosPromise<void>;

const isDeleteRemediationIssueObjectParams = (params: [DeleteRemediationIssueParams] | unknown[]): params is [DeleteRemediationIssueParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id') && Object.prototype.hasOwnProperty.call(params, 'issue')
}
/**
* Removes the given Issue from the Remediation, RBAC permission {remediations:remediation:write}
* @summary Remove Remediation Plan Issue
* @param {DeleteRemediationIssueParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const deleteRemediationIssueParamCreator = async (...config: ([DeleteRemediationIssueParams] | [string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
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

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default deleteRemediationIssueParamCreator;
