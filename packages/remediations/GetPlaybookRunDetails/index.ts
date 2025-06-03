// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PlaybookRunExecutorDetails, RequestError } from '../types';


export type GetPlaybookRunDetailsParams = {
  /**
  * Remediation identifier
  * @type { string }
  * @memberof GetPlaybookRunDetailsApi
  */
  id: string,
  /**
  * Playbook run identifier (UUID)
  * @type { string }
  * @memberof GetPlaybookRunDetailsApi
  */
  playbookRunId: string,
  options?: AxiosRequestConfig
}

export type GetPlaybookRunDetailsReturnType = AxiosPromise<PlaybookRunExecutorDetails>;

const isGetPlaybookRunDetailsObjectParams = (params: [GetPlaybookRunDetailsParams] | unknown[]): params is [GetPlaybookRunDetailsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'id') && Object.prototype.hasOwnProperty.call(params[0], 'playbookRunId')
}
/**
* Get details on execution of the remediation
* @summary Get details on execution of the remediation
* @param {GetPlaybookRunDetailsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getPlaybookRunDetailsParamCreator = async (...config: ([GetPlaybookRunDetailsParams] | [string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isGetPlaybookRunDetailsObjectParams(config) ? config[0] : ['id', 'playbookRunId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetPlaybookRunDetailsParams;
    const { id, playbookRunId, options = {} } = params;
    const localVarPath = `/remediations/{id}/playbook_runs/{playbook_run_id}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)))
        .replace(`{${"playbook_run_id"}}`, encodeURIComponent(String(playbookRunId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default getPlaybookRunDetailsParamCreator;
