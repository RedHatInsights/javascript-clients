// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PlaybookRunSystemList, RequestError } from '../types';


export type GetPlaybookRunSystemsParams = {
  /**
  * Remediation identifier
  * @type { string }
  * @memberof GetPlaybookRunSystemsApi
  */
  id: string,
  /**
  * Playbook run identifier (UUID)
  * @type { string }
  * @memberof GetPlaybookRunSystemsApi
  */
  playbookRunId: string,
  /**
  * Playbook run executor identifier (UUID)
  * @type { string }
  * @memberof GetPlaybookRunSystemsApi
  */
  executor?: string,
  /**
  * Maximum number of results to return
  * @type { number }
  * @memberof GetPlaybookRunSystemsApi
  */
  limit?: number,
  /**
  * Indicates the starting position of the query relative to the complete set of items that match the query
  * @type { number }
  * @memberof GetPlaybookRunSystemsApi
  */
  offset?: number,
  /**
  * System Name (STRING)
  * @type { string }
  * @memberof GetPlaybookRunSystemsApi
  */
  ansibleHost?: string,
  /**
  * Playbook run systems sort order by ASC or DESC
  * @type { GetPlaybookRunSystemsSortEnum }
  * @memberof GetPlaybookRunSystemsApi
  */
  sort?: GetPlaybookRunSystemsSortEnum,
  options?: AxiosRequestConfig
}
/**
  * @export
  * @enum {string}
  */
export const GetPlaybookRunSystemsSortEnum = {
    SystemName: 'system_name',
    NotSystemName: '-system_name'
} as const;
export type GetPlaybookRunSystemsSortEnum = typeof GetPlaybookRunSystemsSortEnum[keyof typeof GetPlaybookRunSystemsSortEnum];

export type GetPlaybookRunSystemsReturnType = AxiosPromise<PlaybookRunSystemList>;

const isGetPlaybookRunSystemsObjectParams = (params: [GetPlaybookRunSystemsParams] | unknown[]): params is [GetPlaybookRunSystemsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params[0], 'id') && Object.prototype.hasOwnProperty.call(params[0], 'playbookRunId') && true && true && true && true && true
}
/**
* Get details on systems being executed on in specific playbook run
* @summary Get details on systems being executed on in specific playbook run
* @param {GetPlaybookRunSystemsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getPlaybookRunSystemsParamCreator = async (...config: ([GetPlaybookRunSystemsParams] | [string, string, string, number, number, string, GetPlaybookRunSystemsSortEnum, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isGetPlaybookRunSystemsObjectParams(config) ? config[0] : ['id', 'playbookRunId', 'executor', 'limit', 'offset', 'ansibleHost', 'sort', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetPlaybookRunSystemsParams;
    const { id, playbookRunId, executor, limit, offset, ansibleHost, sort, options = {} } = params;
    const localVarPath = `/remediations/{id}/playbook_runs/{playbook_run_id}/systems`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)))
        .replace(`{${"playbook_run_id"}}`, encodeURIComponent(String(playbookRunId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (executor !== undefined) {
        localVarQueryParameter['executor'] = executor;
    }

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }

    if (ansibleHost !== undefined) {
        localVarQueryParameter['ansible_host'] = ansibleHost;
    }

    if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default getPlaybookRunSystemsParamCreator;
