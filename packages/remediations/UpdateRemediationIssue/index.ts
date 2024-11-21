// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { RemediationIssueIn, RequestError } from '../types';


export type UpdateRemediationIssueParams = {
  /**
  * Remediation identifier
  * @type { string }
  * @memberof UpdateRemediationIssueApi
  */
  id: string,
  /**
  * Issue identifier (e.g. `advisor:CVE_2017_6074_kernel|KERNEL_CVE_2017_6074`)
  * @type { string }
  * @memberof UpdateRemediationIssueApi
  */
  issue: string,
  /**
  *
  * @type { RemediationIssueIn }
  * @memberof UpdateRemediationIssueApi
  */
  remediationIssueIn: RemediationIssueIn,
  options?: AxiosRequestConfig
}

export type UpdateRemediationIssueReturnType = AxiosPromise<void>;

const isUpdateRemediationIssueObjectParams = (params: [UpdateRemediationIssueParams] | unknown[]): params is [UpdateRemediationIssueParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id') && Object.prototype.hasOwnProperty.call(params, 'issue') && Object.prototype.hasOwnProperty.call(params, 'remediationIssueIn')
}
/**
* Updates the given Remediation Issue, RBAC permission {remediations:remediation:write}
* @summary Update Remediation Issue
* @param {UpdateRemediationIssueParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const updateRemediationIssueParamCreator = async (...config: ([UpdateRemediationIssueParams] | [string, string, RemediationIssueIn, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isUpdateRemediationIssueObjectParams(config) ? config[0] : ['id', 'issue', 'remediationIssueIn', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as UpdateRemediationIssueParams;
    const { id, issue, remediationIssueIn, options = {} } = params;
    const localVarPath = `/remediations/{id}/issues/{issue}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)))
        .replace(`{${"issue"}}`, encodeURIComponent(String(issue)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PATCH' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: remediationIssueIn,
    };
}

export default updateRemediationIssueParamCreator;
