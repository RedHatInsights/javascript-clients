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


export type CancelPlaybookRunsParams = {
  /**
  * Remediation identifier
  * @type { string }
  * @memberof CancelPlaybookRunsApi
  */
  id: string,
  /**
  * Playbook run identifier (UUID)
  * @type { string }
  * @memberof CancelPlaybookRunsApi
  */
  playbookRunId: string,
  options?: AxiosRequestConfig
}

export type CancelPlaybookRunsReturnType = object;

const isCancelPlaybookRunsObjectParams = (params: [CancelPlaybookRunsParams] | unknown[]): params is [CancelPlaybookRunsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'id') && Object.prototype.hasOwnProperty.call(params[0], 'playbookRunId')
  }
  return false
}
/**
* Cancel execution of the remediation
* @summary Cancel execution of the remediation
* @param {CancelPlaybookRunsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const cancelPlaybookRunsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([CancelPlaybookRunsParams] | [string, string, AxiosRequestConfig])) => {
    const params = isCancelPlaybookRunsObjectParams(config) ? config[0] : ['id', 'playbookRunId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as CancelPlaybookRunsParams;
    const { id, playbookRunId, options = {} } = params;
    const localVarPath = `/remediations/{id}/playbook_runs/{playbook_run_id}/cancel`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)))
        .replace(`{${"playbook_run_id"}}`, encodeURIComponent(String(playbookRunId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<CancelPlaybookRunsReturnType>(Promise.resolve(args));
}

export default cancelPlaybookRunsParamCreator;
