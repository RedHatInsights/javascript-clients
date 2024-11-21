// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PlaybookRunSystemDetails, RequestError } from '../types';


export type GetPlaybookRunSystemDetailsParams = {
  /**
  * Remediation identifier
  * @type { string }
  * @memberof GetPlaybookRunSystemDetailsApi
  */
  id: string,
  /**
  * Playbook run identifier (UUID)
  * @type { string }
  * @memberof GetPlaybookRunSystemDetailsApi
  */
  playbookRunId: string,
  /**
  * System identifier
  * @type { string }
  * @memberof GetPlaybookRunSystemDetailsApi
  */
  system: string,
  options?: AxiosRequestConfig
}

export type GetPlaybookRunSystemDetailsReturnType = AxiosPromise<PlaybookRunSystemDetails>;

const isGetPlaybookRunSystemDetailsObjectParams = (params: [GetPlaybookRunSystemDetailsParams] | unknown[]): params is [GetPlaybookRunSystemDetailsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id') && Object.prototype.hasOwnProperty.call(params, 'playbookRunId') && Object.prototype.hasOwnProperty.call(params, 'system')
}
/**
* Get details and updated log of system being executed on in specific playbook run
* @summary Get details and updated log of system being executed on in specific playbook run
* @param {GetPlaybookRunSystemDetailsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getPlaybookRunSystemDetailsParamCreator = async (...config: ([GetPlaybookRunSystemDetailsParams] | [string, string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isGetPlaybookRunSystemDetailsObjectParams(config) ? config[0] : ['id', 'playbookRunId', 'system', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetPlaybookRunSystemDetailsParams;
    const { id, playbookRunId, system, options = {} } = params;
    const localVarPath = `/remediations/{id}/playbook_runs/{playbook_run_id}/systems/{system}`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)))
        .replace(`{${"playbook_run_id"}}`, encodeURIComponent(String(playbookRunId)))
        .replace(`{${"system"}}`, encodeURIComponent(String(system)));
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

export default getPlaybookRunSystemDetailsParamCreator;
