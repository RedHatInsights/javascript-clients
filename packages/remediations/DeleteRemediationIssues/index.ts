// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { IssuesList, MultipleDelete } from '../types';


export type DeleteRemediationIssuesParams = {
  /**
  * Remediation identifier
  * @type { string }
  * @memberof DeleteRemediationIssuesApi
  */
  id: string,
  /**
  *
  * @type { IssuesList }
  * @memberof DeleteRemediationIssuesApi
  */
  issuesList: IssuesList,
  options?: AxiosRequestConfig
}

export type DeleteRemediationIssuesReturnType = AxiosPromise<MultipleDelete>;

const isDeleteRemediationIssuesObjectParams = (params: [DeleteRemediationIssuesParams] | unknown[]): params is [DeleteRemediationIssuesParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id') && Object.prototype.hasOwnProperty.call(params, 'issuesList')
}
/**
* Removes the given list of issues from the specified remediation plan.  Requests containing missing remediation plan ID are rejected.  Duplicate or missing issue IDs are ignored.
* @summary Bulk Remove Remediation Plan Issues
* @param {DeleteRemediationIssuesParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const deleteRemediationIssuesParamCreator = async (...config: ([DeleteRemediationIssuesParams] | [string, IssuesList, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isDeleteRemediationIssuesObjectParams(config) ? config[0] : ['id', 'issuesList', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as DeleteRemediationIssuesParams;
    const { id, issuesList, options = {} } = params;
    const localVarPath = `/remediations/{id}/issues`
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
        serializeData: issuesList,
    };
}

export default deleteRemediationIssuesParamCreator;
