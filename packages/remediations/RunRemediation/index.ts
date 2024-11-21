// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ExecuteRemediation, NoExecutors, PlaybookRunsInput, RequestError } from '../types';


export type RunRemediationParams = {
  /**
  * Remediation identifier
  * @type { string }
  * @memberof RunRemediationApi
  */
  id: string,
  /**
  *
  * @type { PlaybookRunsInput }
  * @memberof RunRemediationApi
  */
  playbookRunsInput?: PlaybookRunsInput,
  options?: AxiosRequestConfig
}

export type RunRemediationReturnType = AxiosPromise<ExecuteRemediation>;

const isRunRemediationObjectParams = (params: [RunRemediationParams] | unknown[]): params is [RunRemediationParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id') && true
}
/**
* Execute remediation, RBAC permission {remediations:remediation:execute}
* @summary Execute remediation
* @param {RunRemediationParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const runRemediationParamCreator = async (...config: ([RunRemediationParams] | [string, PlaybookRunsInput, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isRunRemediationObjectParams(config) ? config[0] : ['id', 'playbookRunsInput', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as RunRemediationParams;
    const { id, playbookRunsInput, options = {} } = params;
    const localVarPath = `/remediations/{id}/playbook_runs`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: playbookRunsInput,
    };
}

export default runRemediationParamCreator;
