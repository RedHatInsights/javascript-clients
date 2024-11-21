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


export type GetRemediationPlaybookParams = {
  /**
  * Remediation identifier
  * @type { string }
  * @memberof GetRemediationPlaybookApi
  */
  id: string,
  /**
  * Selected hosts to be included in playbook
  * @type { Array<string> }
  * @memberof GetRemediationPlaybookApi
  */
  hosts?: Array<string>,
  /**
  * Organization ID passed by satellite
  * @type { string }
  * @memberof GetRemediationPlaybookApi
  */
  satOrg?: string,
  /**
  * Flag for localhost playbook generation
  * @type { boolean }
  * @memberof GetRemediationPlaybookApi
  */
  localhost?: boolean,
  options?: AxiosRequestConfig
}

export type GetRemediationPlaybookReturnType = AxiosPromise<string>;

const isGetRemediationPlaybookObjectParams = (params: [GetRemediationPlaybookParams] | unknown[]): params is [GetRemediationPlaybookParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id') && true && true && true
}
/**
* Provides Ansible Playbook, RBAC permission {remediations:remediation:read}
* @summary Get Remediation Playbook
* @param {GetRemediationPlaybookParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const getRemediationPlaybookParamCreator = async (...config: ([GetRemediationPlaybookParams] | [string, Array<string>, string, boolean, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isGetRemediationPlaybookObjectParams(config) ? config[0] : ['id', 'hosts', 'satOrg', 'localhost', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as GetRemediationPlaybookParams;
    const { id, hosts, satOrg, localhost, options = {} } = params;
    const localVarPath = `/remediations/{id}/playbook`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (hosts) {
        localVarQueryParameter['hosts'] = hosts;
    }

    if (satOrg !== undefined) {
        localVarQueryParameter['sat_org'] = satOrg;
    }

    if (localhost !== undefined) {
        localVarQueryParameter['localhost'] = localhost;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default getRemediationPlaybookParamCreator;
